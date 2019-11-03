import * as path from 'path';
import * as ts from 'typescript';

test('it detects errors', () => {
  const errors = typescriptDiagnostic([path.resolve(__dirname, '../__fixtures__/typecheck.ts')], {
    noEmit: true,
    strict: true,
  });

  expect(errors).toHaveLength(3);
  expect(errors[0]).toMatchSnapshot();
  expect(errors[1]).toMatchSnapshot();
  expect(errors[2]).toMatchSnapshot();
});

function typescriptDiagnostic(fileName: string[], options: ts.CompilerOptions) {
  const program = ts.createProgram(fileName, options);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  return diagnostics.map(diagnostic => {
    const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
    return `${line}:${character} - ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`;
  });
}
