import * as path from 'path';
import * as ts from 'typescript';

test('it detects errors', () => {
  const errors = typescriptDiagnostic([path.resolve(__dirname, '__fixtures__/typecheck.ts')], {
    noEmit: true,
    strict: true,
  });

  expect(errors.length).toBe(10);
  for (const error of errors) {
    expect(error).toMatchSnapshot();
  }
});

function typescriptDiagnostic(fileName: string[], options: ts.CompilerOptions) {
  const program = ts.createProgram(fileName, options);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  return diagnostics.map(diagnostic => {
    const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
    return `${line}:${character} - ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`;
  });
}
