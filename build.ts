import * as prettier from 'prettier';
import { writeFileSync } from 'fs';
import * as path from 'path';
import { spawnSync } from 'child_process';
import * as chokidar from 'chokidar';

const ROOT_DIR = __dirname;
const DEFINITIONS_FILENAME = 'index.d.ts';
const TEST_FILENAME = 'typecheck.ts';

async function create() {
  const generatePath = path.resolve('./src');
  for (const key in require.cache) {
    if (key.indexOf(generatePath) !== -1) {
      delete require.cache[key];
    }
  }
  const { default: create } = await import('./src/output');
  return create();
}

async function format(output: string) {
  const options = await prettier.resolveConfig(path.join(ROOT_DIR, '.prettierrc'));
  return prettier.format(output, {
    ...options,
    printWidth: 180,
    parser: 'typescript',
  });
}

function write(content: string) {
  writeFileSync(path.join(ROOT_DIR, DEFINITIONS_FILENAME), content);
}

function typecheck() {
  const result = spawnSync(
    path.join(ROOT_DIR, 'node_modules/.bin/tsc'),
    [path.join(ROOT_DIR, DEFINITIONS_FILENAME), path.join(ROOT_DIR, TEST_FILENAME), '--noEmit'],
    {
      cwd: ROOT_DIR,
    },
  );
  if (result.error || result.status) {
    console.info(result.stdout.toString());
    throw result.error || new Error(result.stderr.toString());
  }
}

async function trigger() {
  console.info('Generating...');
  const output = await create();
  console.info('Formatting...');
  const formatted = await format(output);
  console.info('Writing...');
  write(formatted);
  console.info('Typechecking...');
  typecheck();
}

if (process.argv.indexOf('--watch') !== -1) {
  trigger()
    .catch(e => {
      console.error(e);
    })
    .then(() => {
      console.info('Done! Watching...');
      let debounce: NodeJS.Timer;
      chokidar
        .watch(path.join(ROOT_DIR, 'generate'), { ignoreInitial: true })
        .on('all', (event: string, path: string) => {
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
