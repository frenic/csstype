import * as path from 'path';
import * as ts from 'typescript3.7';
import { removeAbsolutePaths, COMPILER_OPTIONS } from './typescript-utils';

describe('Typescript 3.7', () => {
  it('detects errors', async () => {
    const program = ts.createProgram([path.resolve(__dirname, '__fixtures__/typecheck.ts')], COMPILER_OPTIONS);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    const errors = diagnostics.map(diagnostic => {
      const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
      return `${line}:${character} - ${removeAbsolutePaths(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
      )}`;
    });

    expect(Number(ts.versionMajorMinor)).toBe(3.7);
    expect(errors.length).toBe(15);
    for (const error of errors) {
      expect(error).toMatchSnapshot();
    }
  });
});
