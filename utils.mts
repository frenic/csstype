import { writeFile } from 'fs';
import path from 'path';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';

export const ROOT_DIR = path.dirname(fileURLToPath(import.meta.url));
export const TYPESCRIPT_FILENAME = 'index.d.ts';
export const FLOW_FILENAME = 'index.js.flow';

export function writeFileAsync(filename: string, content: string) {
  return new Promise<void>((resolve, reject) => {
    writeFile(filename, content, 'utf-8', error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

const readline = createInterface(process.stdin, process.stdout);

export function questionAsync(message: string): Promise<string> {
  return new Promise(resolve => {
    readline.question(message, resolve);
  });
}
