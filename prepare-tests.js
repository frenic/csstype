const path = require('path');
const { spawn } = require('child_process');

module.exports = () => {
  spawn(path.resolve(__dirname, 'node_modules/.bin/', process.platform === 'win32' ? 'yarn.cmd' : 'yarn'), [
    '--cmd',
    '__tests__/__fixtures__',
    '--silent',
    '--no-progress',
    '--ignore-scripts',
    '--pure-lockfile',
  ]);
};
