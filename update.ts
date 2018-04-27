import build from './build';
// @ts-ignore
import * as packageJson from './package.json';
import { FLOW_FILENAME, getJsonAsync, questionAsync, spawnAsync, TYPESCRIPT_FILENAME, writeFileAsync } from './utils';

(async () => {
  if ((await spawnAsync('git', 'status', '--porcelain')) !== '') {
    console.error('Your working directory needs to be clean!');
    process.exit(1);
  }

  console.info('Check for updates...');

  const MDN_DATA = 'mdn-data';
  const MDN_COMPAT = 'mdn-browser-compat-data';

  const [mdnDataRepo, currentMdnDataCommit] = packageJson.devDependencies[MDN_DATA].split('#');
  const [mdnCompatRepo, currentMdnCompatCommit] = packageJson.devDependencies[MDN_COMPAT].split('#');

  const [mdnDataMaster, mdnCompatMaster] = [
    await getJsonAsync({
      hostname: 'api.github.com',
      path: '/repos/mdn/data/branches/master',
      headers: { 'User-Agent': 'NodeJS' },
    }),
    await getJsonAsync({
      hostname: 'api.github.com',
      path: '/repos/mdn/browser-compat-data/branches/master',
      headers: { 'User-Agent': 'NodeJS' },
    }),
  ];

  const latestMdnDataCommit = mdnDataMaster.commit.sha;
  const latestMdnCompatCommit = mdnCompatMaster.commit.sha;

  if (latestMdnDataCommit !== currentMdnDataCommit || latestMdnCompatCommit !== currentMdnCompatCommit) {
    console.info('Update found!');
    console.info('Upgrading...');

    packageJson.devDependencies[MDN_DATA] = `${mdnDataRepo}#${latestMdnDataCommit}`;
    packageJson.devDependencies[MDN_COMPAT] = `${mdnCompatRepo}#${latestMdnCompatCommit}`;

    await writeFileAsync('./package.json', JSON.stringify(packageJson, null, 2) + '\n');
    await upgrade();

    try {
      await build();
    } catch (e) {
      throw new Error(e);
    }

    const [indexDtsDiff, indexFlowDiff] = [
      await spawnAsync('git', '--no-pager', 'diff', '--color', TYPESCRIPT_FILENAME),
      await spawnAsync('git', '--no-pager', 'diff', '--color', FLOW_FILENAME),
    ];

    if (indexDtsDiff !== '' || indexFlowDiff !== '') {
      console.info("Changes detected! Here's the diff:");
      console.info(indexDtsDiff);
      console.info(indexFlowDiff);

      const doPrepare = await questionAsync('Do you want to prepare a release for this? (y/n) ');

      if (doPrepare === 'y') {
        await spawnAsync('git', 'commit', '-am', 'Bump MDN');

        const [major, minor, patch] = packageJson.version.split('.');
        const version = `${major}.${minor}.${Number(patch) + 1}`;

        const tag = `v${version}`;

        packageJson.version = version;
        await writeFileAsync('./package.json', JSON.stringify(packageJson, null, 2) + '\n');
        await spawnAsync('git', 'commit', '-am', tag);
        await spawnAsync('git', 'tag', tag);

        console.info(`The changes are committed and tagged with: ${tag}`);

        const doPush = await questionAsync('Do you want to push now? (y/n) ');

        if (doPush === 'y') {
          console.info('Pushing...');
          await spawnAsync('git', 'push', 'origin', 'HEAD', '--tags');
        }
      } else {
        console.info('Maybe next time!');
        console.info('Resetting...');
        await reset();
        console.info('Downgrading...');
        await upgrade();
      }
    } else {
      console.info('No changes detected!');
      console.info('Resetting...');
      await reset();
      console.info('Downgrading...');
      await upgrade();
    }

    process.exit(0);
  } else {
    console.info('Nothing to update!');
  }
})();

async function reset() {
  try {
    await spawnAsync('git', 'reset', '--hard');
  } catch (e) {
    throw new Error(e);
  }
}

async function upgrade() {
  try {
    await spawnAsync(
      process.platform === 'win32' ? 'yarn.cmd' : 'yarn',
      { stdio: 'inherit' },
      '--silent',
      '--no-progress',
      '--ignore-scripts',
    );
  } catch (e) {
    throw new Error(e);
  }
}
