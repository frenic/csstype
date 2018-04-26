// @ts-ignore
import * as packageJson from './package.json';
import { getJson, spawnPromise, writeFilePromise } from './utils';

(async () => {
  if ((await spawnPromise('git', 'status', '--porcelain')) !== '') {
    console.error('Your working directory needs to be clean!');
    process.exit(1);
  }

  console.info('Checks for updates...');

  const MDN_DATA = 'mdn-data';
  const MDN_COMPAT = 'mdn-browser-compat-data';

  const [mdnDataRepo, currentMdnDataCommit] = packageJson.devDependencies[MDN_DATA].split('#');
  const [mdnCompatRepo, currentMdnCompatCommit] = packageJson.devDependencies[MDN_COMPAT].split('#');

  const [mdnDataMaster, mdnCompatMaster] = [
    await getJson({
      hostname: 'api.github.com',
      path: '/repos/mdn/data/branches/master',
      headers: { 'User-Agent': 'NodeJS' },
    }),
    await getJson({
      hostname: 'api.github.com',
      path: '/repos/mdn/browser-compat-data/branches/master',
      headers: { 'User-Agent': 'NodeJS' },
    }),
  ];

  const latestMdnDataCommit = mdnDataMaster.commit.sha;
  const latestMdnCompatCommit = mdnCompatMaster.commit.sha;

  if (latestMdnDataCommit !== currentMdnDataCommit || latestMdnCompatCommit !== currentMdnCompatCommit) {
    console.info('Update found, upgrading and building...');

    packageJson.devDependencies[MDN_DATA] = `${mdnDataRepo}#${latestMdnDataCommit}`;
    packageJson.devDependencies[MDN_COMPAT] = `${mdnCompatRepo}#${latestMdnCompatCommit}`;

    await writeFilePromise('./package.json', JSON.stringify(packageJson, null, 2) + '\n');

    try {
      await spawnPromise('yarn.cmd', '--silent', '--no-progress');
    } catch (e) {
      console.error(e);
      process.exit(1);
    }

    const [indexDtsDiff, indexFlowDiff] = [
      await spawnPromise('git', '--no-pager', 'diff', 'index.d.ts'),
      await spawnPromise('git', '--no-pager', 'diff', 'index.js.flow'),
    ];

    if (indexDtsDiff !== '' || indexFlowDiff !== '') {
      await spawnPromise('git', 'commit', '-am', 'Bump MDN');

      const [major, minor, patch] = packageJson.version.split('.');
      const version = `${major}.${minor}.${Number(patch) + 1}`;

      packageJson.version = version;
      await writeFilePromise('./package.json', JSON.stringify(packageJson, null, 2) + '\n');
      await spawnPromise('git', 'commit', '-am', `v${version}`);
      await spawnPromise('git', 'tag', `v${version}`);

      console.info('Changes detected! The changes are committed and tagged. You just need to:');
      console.info('- `git push origin HEAD --tags`');
      console.info('- `npm publish`');
    } else {
      console.info('No changes detected, resetting...');
      await spawnPromise('git', 'reset', '--hard');
    }
  } else {
    console.info('Nothing to update!');
  }
})();
