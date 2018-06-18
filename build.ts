import * as chokidar from 'chokidar';
import * as path from 'path';
import * as prettier from 'prettier';
import { FLOW_FILENAME, spawnAsync, TYPESCRIPT_FILENAME, writeFileAsync } from './utils';

const ROOT_DIR = __dirname;
const TEST_FILENAME = 'typecheck.ts';

if (process.argv.includes('--start')) {
  trigger()
    .then(() => {
      process.exit(0);
    })
    .catch(e => {
      console.error(e);
      process.exit(1);
    });
} else if (process.argv.includes('--watch')) {
  trigger()
    .catch(e => {
      console.error(e);
    })
    .then(() => {
      console.info('Done! Watching...');
      let debounce: NodeJS.Timer;
      chokidar
        .watch(path.join(ROOT_DIR, 'src'), { ignored: '*.json', ignoreInitial: true })
        .on('all', (event: string) => {
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
}

export default async function trigger() {
  console.info('Generating...');
  const output = await create();
  console.info('Formatting...');
  const [flow, typescript] = await Promise.all([format(output.flow, 'flow'), format(output.typescript, 'typescript')]);
  console.info(`Writing files...`);
  await Promise.all([writeFileAsync(FLOW_FILENAME, flow), writeFileAsync(TYPESCRIPT_FILENAME, typescript)]);
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
    spawnAsync(
      path.join(ROOT_DIR, `node_modules/.bin/${process.platform === 'win32' ? 'tsc.cmd' : 'tsc'}`),
      path.join(ROOT_DIR, TYPESCRIPT_FILENAME),
      path.join(ROOT_DIR, TEST_FILENAME),
      '--noEmit',
    ),
    spawnAsync(path.join(ROOT_DIR, `node_modules/.bin/${process.platform === 'win32' ? 'flow.cmd' : 'flow'}`), 'check'),
  ]);
}
