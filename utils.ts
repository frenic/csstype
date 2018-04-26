import { spawn } from 'child_process';
import { writeFile } from 'fs';
import { get, RequestOptions } from 'https';

const ROOT_DIR = __dirname;

export function writeFilePromise(filename: string, content: string) {
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

export function spawnPromise(command: string, ...args: string[]) {
  return new Promise((resolve, reject) => {
    const cp = spawn(command, args, {
      cwd: ROOT_DIR,
    });
    let data = '';
    cp.stdout.on('data', chunk => (data += chunk));
    cp.on('close', code => (code === 0 ? resolve(data) : reject(data)));
    cp.on('error', reject);
  });
}

export function getJson(url: RequestOptions): Promise<any> {
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
