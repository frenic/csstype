import * as path from 'path';
import { spawnSync } from 'child_process';

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
