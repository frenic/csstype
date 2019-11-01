import { spawnSync } from 'child_process';
import * as path from 'path';

test('it detects errors', () => {
  const flowBin = path.resolve(
    __dirname,
    '../node_modules',
    '.bin',
    process.platform === 'win32' ? 'flow.cmd' : 'flow',
  );

  const fixturesDir = path.resolve(__dirname, '../__fixtures__');

  const args = ['check', fixturesDir];

  const result = spawnSync(flowBin, args, {
    stdio: 'pipe',
    encoding: 'utf8',
  });

  expect(result.stdout).toMatchSnapshot();
});
