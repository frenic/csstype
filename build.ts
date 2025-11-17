import * as chokidar from 'chokidar';
import * as path from 'path';
import * as prettier from 'prettier';
import { FLOW_FILENAME, TYPESCRIPT_FILENAME, writeFileAsync } from './utils';
import { runCLI } from 'jest';
import { fileURLToPath } from 'url';
import { Config } from '@jest/types';
import { declarator } from './src/declarator';
import generateFlow from './src/flow';
import generateTypescript from './src/typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
      let debounce: NodeJS.Timeout;
      chokidar.watch(path.join(__dirname, 'src'), { ignored: '*.json', ignoreInitial: true }).on('all', () => {
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
  const data = declarator(3);
  return { unformattedFlow: await generateFlow(data), unformattedTypescript: await generateTypescript(data) };
}

async function format(output: string, parser: prettier.BuiltInParserName) {
  const options = await prettier.resolveConfig(path.join(__dirname, '.prettierrc'));
  return prettier.format(output, {
    ...options,
    printWidth: 180,
    singleQuote: false,
    parser,
  });
}

function testing() {
  return runCLI({ testMatch: ['**/__tests__/dist.*.ts'], runInBand: true } as Config.Argv, [__dirname]);
}
