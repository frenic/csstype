import { promisify } from 'util';
import { exec } from 'child_process';
import build from './build.mjs';
import packageJson from './package.json';
import { FLOW_FILENAME, questionAsync, TYPESCRIPT_FILENAME, writeFileAsync } from './utils.mjs';

const execAsync = promisify(exec);

async function update() {
  const nextPackageJson = { ...packageJson };

  if ((await execAsync('git status --porcelain')).stdout !== '') {
    console.error('Your working directory needs to be clean!');
    process.exit(1);
  }

  console.info('Check for updates...');

  const WEBREF_CSS = '@webref/css';
  const MDN_COMPAT = '@mdn/browser-compat-data';

  const currentMdnDataVersion = nextPackageJson.devDependencies[WEBREF_CSS];
  const currentMdnCompatVersion = nextPackageJson.devDependencies[MDN_COMPAT];

  const [webrefCssVersions, mdnCompatVersions] = [
    JSON.parse((await execAsync(`npm view ${WEBREF_CSS} versions`)).stdout) as string[],
    JSON.parse((await execAsync(`npm view ${MDN_COMPAT} versions`)).stdout) as string[],
  ];

  const latestWebrefCssVersion = webrefCssVersions.at(-1);
  const latestMdnCompatVersion = mdnCompatVersions.at(-1);

  const hasNewerWebrefCssVersion = latestWebrefCssVersion && latestWebrefCssVersion !== currentMdnDataVersion;
  const hasNewerMdnCompatVersion = latestMdnCompatVersion && currentMdnCompatVersion !== latestMdnCompatVersion;

  if (hasNewerWebrefCssVersion || hasNewerMdnCompatVersion) {
    console.info('Update found!');
    console.info('Upgrading...');

    if (hasNewerWebrefCssVersion) {
      nextPackageJson.devDependencies[WEBREF_CSS] = latestWebrefCssVersion;
    }

    if (hasNewerMdnCompatVersion) {
      nextPackageJson.devDependencies[MDN_COMPAT] = latestMdnCompatVersion;
    }

    await writeFileAsync('./package.json', JSON.stringify(nextPackageJson, null, 2) + '\n');
    await install();

    await build();

    const [indexDtsDiff, indexFlowDiff] = [
      (await execAsync(`git --no-pager diff --color ${TYPESCRIPT_FILENAME}`)).stdout,
      (await execAsync(`git --no-pager diff --color ${FLOW_FILENAME}`)).stdout,
    ];

    if (indexDtsDiff !== '' || indexFlowDiff !== '') {
      console.info("Changes detected! Here's the diff:");
      console.info(indexDtsDiff);
      console.info(indexFlowDiff);

      const doPrepare = await questionAsync('Do you want to prepare a release for this? (y/n) ');

      if (doPrepare === 'y') {
        await execAsync('git commit -am Bump MDN');

        const [major, minor, patch] = nextPackageJson.version.split('.');
        const version = `${major}.${minor}.${Number(patch) + 1}`;
        const tag = `v${version}`;

        nextPackageJson.version = version;

        await writeFileAsync('./package.json', JSON.stringify(nextPackageJson, null, 2) + '\n');
        await execAsync(`git commit -am ${tag}`);
        await execAsync(`git tag ${tag}`);

        console.info(`The changes are committed and tagged with: ${tag}`);

        const doPush = await questionAsync('Do you want to push now? (y/n) ');

        if (doPush === 'y') {
          console.info('Pushing...');
          await execAsync('git push origin HEAD --tags');
        }
      } else {
        console.info('Maybe next time!');
        console.info('Resetting...');
        await reset();
        console.info('Downgrading...');
        await install(true);
      }
    } else {
      console.info('No changes detected!');
      console.info('Resetting...');
      await reset();
      console.info('Downgrading...');
      await install(true);
    }
  } else {
    console.info('Nothing to update!');
  }

  process.exit(0);
}

update();

function reset() {
  return execAsync('git reset --hard');
}

function install(pure = false) {
  return execAsync(`npm install --silent --ignore-scripts${pure ? ' --dry-run' : ''}`);
}
