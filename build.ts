import * as chokidar from 'chokidar';
import * as path from 'path';
import * as prettier from 'prettier';
import { FLOW_FILENAME, TYPESCRIPT_FILENAME, writeFileAsync } from './utils';

import { runCLI } from 'jest';

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
        .watch(path.join(__dirname, 'src'), { ignored: '*.json', ignoreInitial: true })
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
  const { unformattedFlow, unformattedTypescript } = await create();
  console.info('Formatting...');
  const [flow, typescript] = await Promise.all([
    format(unformattedFlow, 'flow'),
    format(unformattedTypescript, 'typescript'),
  ]);
  console.info(`Writing files...`);
  await Promise.all([writeFileAsync(FLOW_FILENAME, flow), writeFileAsync(TYPESCRIPT_FILENAME, typescript)]);
  console.info('Testing...');
  await testing();
}

async function create() {
  const generatePath = path.resolve('./src');
  for (const key in require.cache) {
    if (key.indexOf(generatePath) !== -1) {
      delete require.cache[key];
    }
  }
  const { default: generateFlow } = await import('./src/flow');
  const { default: generateTypescript } = await import('./src/typescript');
  return { unformattedFlow: await generateFlow(), unformattedTypescript: await generateTypescript() };
}

async function format(output: string, parser: prettier.BuiltInParserName) {
  const options = await prettier.resolveConfig(path.join(__dirname, '.prettierrc'));
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

function testing() {
  return runCLI({ testMatch: ['**/__tests__/dist.*.ts'] } as any, [__dirname]);
}
