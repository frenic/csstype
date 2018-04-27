import { spawn, SpawnOptions } from 'child_process';
import { writeFile } from 'fs';
import { get, RequestOptions } from 'https';
import { createInterface } from 'readline';

export const ROOT_DIR = __dirname;
export const TYPESCRIPT_FILENAME = 'index.d.ts';
export const FLOW_FILENAME = 'index.js.flow';

export function writeFileAsync(filename: string, content: string) {
  return new Promise((resolve, reject) => {
    writeFile(filename, content, 'utf-8', error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export function spawnAsync(command: string, optionsOrArg: SpawnOptions | string, ...args: string[]): Promise<string> {
  let options: SpawnOptions | undefined;

  if (typeof optionsOrArg === 'string') {
    args.unshift(optionsOrArg);
  } else {
    options = optionsOrArg;
  }

  return new Promise((resolve, reject) => {
    const cp = spawn(command, args, {
      cwd: ROOT_DIR,
      ...options,
    });

    if (cp.stdout) {
      let data = '';
      cp.stdout.on('data', chunk => (data += chunk));
      cp.on('close', code => (code === 0 ? resolve(data) : reject(data)));
    } else {
      cp.on('close', code => (code === 0 ? resolve() : reject()));
    }

    cp.on('error', reject);
  });
}

export function getJsonAsync(url: RequestOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    const req = get(url, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

const readline = createInterface(process.stdin, process.stdout);

export function questionAsync(message: string): Promise<string> {
  return new Promise(resolve => {
    readline.question(message, resolve);
  });
}
