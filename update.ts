// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import packageJson from './package.json';
import { FLOW_FILENAME, questionAsync, spawnAsync, TYPESCRIPT_FILENAME, writeFileAsync } from './utils';

const NPM = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const DATA_PACKAGES = ['@mdn/browser-compat-data', '@webref/css'] as const;

interface Bump {
  name: (typeof DATA_PACKAGES)[number];
  from: string;
  to: string;
}

async function update(yes: boolean) {
  const nextPackageJson = { ...packageJson };

  if ((await spawnAsync('git', 'status', '--porcelain')) !== '') {
    console.error('Your working directory needs to be clean!');
    process.exit(1);
  }

  console.info('Check for updates...');

  const bumps: Bump[] = [];

  for (const name of DATA_PACKAGES) {
    const from = nextPackageJson.devDependencies[name];
    const to = await latestVersion(name);

    if (from === to) {
      continue;
    }

    // A new major can change the data shape the generator expects, and
    // `latest` could also point lower (webref 8.6 doesn't build with it)
    if (!isMinorOrPatchBump(from, to)) {
      console.warn(`${name} ${to} is available, but it isn't a minor or patch bump from ${from}. Update it by hand.`);
      continue;
    }

    bumps.push({ name, from, to });
  }

  if (bumps.length === 0) {
    console.info('Nothing to update!');
    return;
  }

  console.info('Update found!');

  for (const { name, from, to } of bumps) {
    console.info(`Upgrading ${name} from ${from} to ${to}...`);
    nextPackageJson.devDependencies[name] = to;
  }

  try {
    await writeFileAsync('./package.json', JSON.stringify(nextPackageJson, null, 2) + '\n');
    await install();

    // Import build only after the install so it reads the newly installed data.
    // A top-level import would load the old data first, and the rebuild would
    // never pick up the bump.
    const { default: build } = await import('./build');
    await build();
  } catch (error) {
    if (yes) {
      // Leave the tree as it is so the failure can be inspected
      throw error;
    }

    console.error(error);
    console.info('Resetting...');
    await restore();
    process.exit(1);
  }

  const [indexDtsDiff, indexFlowDiff] = [await diff(TYPESCRIPT_FILENAME), await diff(FLOW_FILENAME)];

  if (indexDtsDiff === '' && indexFlowDiff === '') {
    console.info('No changes detected!');
    console.info('Resetting...');
    await restore();
    return;
  }

  if (yes) {
    printDiffSummary(TYPESCRIPT_FILENAME, indexDtsDiff);
    printDiffSummary(FLOW_FILENAME, indexFlowDiff);
    console.info('Done. The working tree is left modified; review and commit it manually.');
    return;
  }

  console.info("Changes detected! Here's the diff:");
  console.info(indexDtsDiff);
  console.info(indexFlowDiff);

  const doPrepare = await questionAsync('Do you want to prepare a release for this? (y/n) ');

  if (doPrepare !== 'y') {
    console.info('Maybe next time!');
    console.info('Resetting...');
    await restore();
    return;
  }

  await spawnAsync('git', 'commit', '-am', `Bump ${bumps.map(({ name, to }) => `${name} to ${to}`).join(' and ')}`);

  const [major, minor, patch] = nextPackageJson.version.split('.');
  const version = `${major}.${minor}.${Number(patch) + 1}`;
  const tag = `v${version}`;

  nextPackageJson.version = version;

  await writeFileAsync('./package.json', JSON.stringify(nextPackageJson, null, 2) + '\n');
  await spawnAsync('git', 'commit', '-am', tag);
  await spawnAsync('git', 'tag', tag);

  console.info(`The changes are committed and tagged with: ${tag}`);

  const doPush = await questionAsync('Do you want to push now? (y/n) ');

  if (doPush === 'y') {
    console.info('Pushing...');
    await spawnAsync('git', 'push', 'origin', 'HEAD', '--tags');
  }
}

update(process.argv.includes('--yes')).then(
  () => process.exit(0),
  error => {
    console.error(error);
    process.exit(1);
  },
);

// The `latest` dist-tag is the newest stable release, never a pre-release.
// (The GitHub releases list starts with BCD's nightly `next` pre-release.)
async function latestVersion(name: string) {
  try {
    return (await spawnAsync(NPM, 'view', name, 'dist-tags.latest')).trim();
  } catch {
    throw new Error(`Could not read the latest version of ${name} from npm`);
  }
}

function isMinorOrPatchBump(from: string, to: string) {
  const [fromMajor, ...fromRest] = from.split('.').map(Number);
  const [toMajor, ...toRest] = to.split('.').map(Number);

  if (fromMajor !== toMajor) {
    return false;
  }

  for (let i = 0; i < Math.max(fromRest.length, toRest.length); i++) {
    if ((toRest[i] ?? 0) !== (fromRest[i] ?? 0)) {
      return (toRest[i] ?? 0) > (fromRest[i] ?? 0);
    }
  }

  return false;
}

function diff(filename: string) {
  return spawnAsync('git', '--no-pager', 'diff', '--no-color', '--no-ext-diff', filename);
}

function printDiffSummary(filename: string, diff: string) {
  const { added, removed, changed, removedLines } = summarizeDiff(diff);
  console.info(`${filename}: ${added} added, ${removed} removed, ${changed} changed`);

  if (removedLines.length > 0) {
    console.info(`Removed lines in ${filename}:`);
    for (const line of removedLines) {
      console.info(line);
    }
  }
}

function summarizeDiff(diff: string): { added: number; removed: number; changed: number; removedLines: string[] } {
  let added = 0;
  let removed = 0;
  let changed = 0;
  const removedLines: string[] = [];
  let pending: string[] = [];

  // A removed line directly followed by an added line counts as a change.
  // Removals that no added line follows (a context line, the next hunk or the
  // end comes first) are pure removals.
  const flush = () => {
    removed += pending.length;
    removedLines.push(...pending);
    pending = [];
  };

  for (const line of diff.split('\n')) {
    if (line.startsWith('---') || line.startsWith('+++')) {
      // File header
    } else if (line.startsWith('-')) {
      pending.push(line);
    } else if (line.startsWith('+')) {
      if (pending.length > 0) {
        pending.shift();
        changed++;
      } else {
        added++;
      }
    } else {
      flush();
    }
  }
  flush();

  return { added, removed, changed, removedLines };
}

// Back to the committed state, `node_modules` included
async function restore() {
  await spawnAsync('git', 'reset', '--hard');
  await spawnAsync(NPM, { stdio: 'inherit' }, 'ci', '--silent', '--ignore-scripts');
}

function install() {
  return spawnAsync(NPM, { stdio: 'inherit' }, 'install', '--silent', '--ignore-scripts');
}
