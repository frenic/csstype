import { spawnSync } from 'child_process';

export default () => {
  spawnSync('npm', ['--prefix', '__tests__', 'install', '--silent', '--dry-run']);
  spawnSync('npm', ['--prefix', '__tests__/__fixtures__', 'install', '--silent', '--dry-run']);
};
