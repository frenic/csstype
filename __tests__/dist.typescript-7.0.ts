import { spawnSync } from 'child_process';
import * as path from 'path';
import { removeAbsolutePaths } from './typescript-utils';

// TypeScript 7.0 is the native (Go) compiler and ships no compiler API
// (no `ts.createProgram`), so this test runs the `tsc` binary and parses
// its output. See https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/
const TSC = path.resolve(__dirname, 'node_modules/typescript7.0/bin/tsc');
const FIXTURE = path.join('__fixtures__', 'typecheck.ts');

function runTsc(args: string[]): { status: number; output: string } {
  const result = spawnSync(process.execPath, [TSC, ...args], { cwd: __dirname, encoding: 'utf8' });
  if (result.error) throw result.error;
  return { status: result.status ?? -1, output: `${result.stdout}\n${result.stderr}` };
}

describe('Typescript 7.0', () => {
  it('detects errors', () => {
    const version = runTsc(['--version']);
    expect(version.output.match(/Version (\d+)\.(\d+)/)?.[0]).toBe('Version 7.0');

    // `--ignoreConfig` is required by TS 6.0+ when files are passed on the
    // command line and a tsconfig.json is present in the current directory.
    const { status, output } = runTsc(['--ignoreConfig', '--noEmit', '--strict', FIXTURE]);
    if (status !== 1) {
      throw new Error(`tsc exited with status ${status}:\n${output}`);
    }

    // Piped output uses the classic `file(line,column): error TSxxxx: message`
    // format (1-based), the same as 5.9. Convert to the 0-based
    // `line:character - message` format used by the other tests. Continuation
    // lines of a message are indented; the `Found N errors` trailer is not.
    const blocks: string[][] = [];
    let current: string[] | null = null;
    for (const line of output.split('\n')) {
      const match = line.match(/^.*\((\d+),(\d+)\): error TS\d+:( .*)$/);
      if (match) {
        current = [`${Number(match[1]) - 1}:${Number(match[2]) - 1} - ${removeAbsolutePaths(match[3].trim())}`];
        blocks.push(current);
      } else if (current && line.startsWith(' ')) {
        current.push(line);
      }
    }
    const errors = blocks.map(block => block.join('\n'));

    expect(errors.length).toBe(16);
    for (const error of errors) {
      expect(error).toMatchSnapshot();
    }
  });
});
