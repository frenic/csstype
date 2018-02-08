import { spawn } from 'child_process';
import * as chokidar from 'chokidar';
import { writeFile } from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';

const ROOT_DIR = __dirname;
const TYPESCRIPT_FILENAME = 'index.d.ts';
const FLOW_FILENAME = 'flow-typed/csstype.js';
const TEST_FILENAME = 'typecheck.ts';

if (process.argv.indexOf('--watch') !== -1) {
  trigger()
    .catch(e => {
      console.error(e);
    })
    .then(() => {
      console.info('Done! Watching...');
      let debounce: NodeJS.Timer;
      chokidar.watch(path.join(ROOT_DIR, 'src'), { ignoreInitial: true }).on('all', (event: string) => {
        clearTimeout(debounce);
        debounce = setTimeout(
          () =>
            trigger()
              .catch(e => console.error(e))
              .then(() => console.info('Done! Moving on...')),
          300,
        );
      });
    });
} else {
  trigger().catch(e => {
    console.error(e);
    process.exit(1);
  });
}

async function trigger() {
  console.info('Generating...');
  const output = await create();
  console.info('Formatting...');
  const [flow, typescript] = await Promise.all([format(output.flow, 'flow'), format(output.typescript, 'typescript')]);
  console.info(`Writing files...`);
  await Promise.all([writeFilePromise(FLOW_FILENAME, flow), writeFilePromise(TYPESCRIPT_FILENAME, typescript)]);
  console.info('Type checking...');
  await typecheck();
}

async function create() {
  const generatePath = path.resolve('./src');
  for (const key in require.cache) {
    if (key.indexOf(generatePath) !== -1) {
      delete require.cache[key];
    }
  }
  const { default: output } = await import('./src/output');
  return output();
}

async function format(output: string, parser: prettier.BuiltInParserName) {
  const options = await prettier.resolveConfig(path.join(ROOT_DIR, '.prettierrc'));
  try {
    return prettier.format(output, {
      ...options,
      printWidth: 180,
      singleQuote: false,
      parser,
    });
  } catch (e) {
    throw new Error(e);
  }
}

function typecheck() {
  return Promise.all([
    spawnPromise(
      path.join(ROOT_DIR, `node_modules/.bin/${process.platform === 'win32' ? 'tsc.cmd' : 'tsc'}`),
      path.join(ROOT_DIR, TYPESCRIPT_FILENAME),
      path.join(ROOT_DIR, TEST_FILENAME),
      '--noEmit',
    ),
    spawnPromise(
      path.join(ROOT_DIR, `node_modules/.bin/${process.platform === 'win32' ? 'flow.cmd' : 'flow'}`),
      'check',
    ),
  ]);
}

function writeFilePromise(filename: string, content: string) {
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

function spawnPromise(command: string, ...args: string[]) {
  return new Promise((resolve, reject) => {
    const cp = spawn(command, args, {
      cwd: ROOT_DIR,
    });
    let out = '';
    cp.stdout.on('data', data => (out += data));
    cp.on('close', code => (code === 0 ? resolve() : reject(out)));
    cp.on('error', reject);
  });
}
