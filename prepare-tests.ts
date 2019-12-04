import { spawnSync } from 'child_process';
import * as path from 'path';

module.exports = () => {
  spawnSync(path.resolve(__dirname, 'node_modules/.bin/', process.platform === 'win32' ? 'yarn.cmd' : 'yarn'), [
    '--cwd',
    '__tests__',
    '--silent',
    '--no-progress',
    '--no-lockfile',
    '--non-interactive',
    '--ignore-scripts',
  ]);
  spawnSync(path.resolve(__dirname, 'node_modules/.bin/', process.platform === 'win32' ? 'yarn.cmd' : 'yarn'), [
    '--cwd',
    '__tests__/__fixtures__',
    '--silent',
    '--no-progress',
    '--no-lockfile',
    '--non-interactive',
    '--ignore-scripts',
  ]);
};
