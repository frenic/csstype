import * as path from 'path';

const COMPILER_OPTIONS = {
  noEmit: true,
  strict: true,
};

describe('Typescript 4.0', () => {
  it('detects errors', async () => {
    const ts = await import('typescript');
    const program = ts.createProgram([path.resolve(__dirname, '__fixtures__/typecheck.ts')], COMPILER_OPTIONS);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    const errors = diagnostics.map(diagnostic => {
      const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
      return `${line}:${character} - ${removeAbsolutePaths(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
      )}`;
    });

    expect(Number(ts.versionMajorMinor)).toBe(4.0);
    expect(errors.length).toBe(15);
    for (const error of errors) {
      expect(error).toMatchSnapshot();
    }
  });
});

describe('Typescript 3.9', () => {
  it('detects errors', async () => {
    const ts = await import('typescript3.9');
    const program = ts.createProgram([path.resolve(__dirname, '__fixtures__/typecheck.ts')], COMPILER_OPTIONS);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    const errors = diagnostics.map(diagnostic => {
      const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
      return `${line}:${character} - ${removeAbsolutePaths(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
      )}`;
    });

    expect(Number(ts.versionMajorMinor)).toBe(3.9);
    expect(errors.length).toBe(15);
    for (const error of errors) {
      expect(error).toMatchSnapshot();
    }
  });
});

describe('Typescript 3.8', () => {
  it('detects errors', async () => {
    const ts = await import('typescript3.8');
    const program = ts.createProgram([path.resolve(__dirname, '__fixtures__/typecheck.ts')], COMPILER_OPTIONS);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    const errors = diagnostics.map(diagnostic => {
      const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
      return `${line}:${character} - ${removeAbsolutePaths(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
      )}`;
    });

    expect(Number(ts.versionMajorMinor)).toBe(3.8);
    expect(errors.length).toBe(15);
    for (const error of errors) {
      expect(error).toMatchSnapshot();
    }
  });
});

describe('Typescript 3.7', () => {
  it('detects errors', async () => {
    const ts = await import('typescript3.7');
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

describe('Typescript 3.6', () => {
  it('detects errors', async () => {
    const ts = await import('typescript3.6');
    const program = ts.createProgram([path.resolve(__dirname, '__fixtures__/typecheck.ts')], COMPILER_OPTIONS);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    const errors = diagnostics.map(diagnostic => {
      const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
      return `${line}:${character} - ${removeAbsolutePaths(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
      )}`;
    });

    expect(Number(ts.versionMajorMinor)).toBe(3.6);
    expect(errors.length).toBe(15);
    for (const error of errors) {
      expect(error).toMatchSnapshot();
    }
  });
});

describe('Typescript 3.5', () => {
  it('detects errors', async () => {
    const ts = await import('typescript3.5');
    const program = ts.createProgram([path.resolve(__dirname, '__fixtures__/typecheck.ts')], COMPILER_OPTIONS);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    const errors = diagnostics.map(diagnostic => {
      const { line, character } = diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!);
      return `${line}:${character} - ${removeAbsolutePaths(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
      )}`;
    });

    expect(Number(ts.versionMajorMinor)).toBe(3.5);
    expect(errors.length).toBe(15);
    for (const error of errors) {
      expect(error).toMatchSnapshot();
    }
  });
});

const rootPosixPath = path.resolve(__dirname, '..').replace(/\\/g, '/') + '/';
const rootWin32Path = rootPosixPath.replace(/\//g, '\\');
function removeAbsolutePaths(message: string) {
  return message.replace(rootPosixPath, '').replace(rootWin32Path, '');
}
