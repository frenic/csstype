import * as path from 'path';

export const COMPILER_OPTIONS = {
  noEmit: true,
  strict: true,
  types: [],
};

const rootPosixPath = path.resolve(__dirname, '..').replace(/\\/g, '/') + '/';
const rootWin32Path = rootPosixPath.replace(/\//g, '\\');
export function removeAbsolutePaths(message: string) {
  return message.replace(rootPosixPath, '').replace(rootWin32Path, '');
}
