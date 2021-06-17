import { spawnSync } from 'child_process';

module.exports = () => {
  spawnSync('npm', ['--prefix', '__tests__', 'install', '--silent', '--dry-run']);
  spawnSync('npm', ['--prefix', '__tests__/__fixtures__', 'install', '--silent', '--dry-run']);
};
