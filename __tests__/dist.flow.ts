import { spawnSync } from 'child_process';
import * as path from 'path';

// tslint:disable-next-line no-var-requires
const flow: string = require('flow-bin');

test('it detects errors', () => {
  const { stdout: output } = spawnSync(
    flow,
    ['check', path.resolve(__dirname, '../__fixtures__/typecheck.js'), '--json'],
    {
      stdio: 'pipe',
      encoding: 'utf8',
    },
  );

  const { errors }: IFlowOutput = JSON.parse(output);

  expect(errors).toHaveLength(4);
  for (const error of errors) {
    expect(message(error)).toMatchSnapshot();
  }
});

function message(error: IError) {
  const {
    loc: {
      start: { line, column },
    },
    descr,
  } = error.message[0];

  return `${line}:${column} - ${descr}`;
}

interface IExtra {
  message: IMessage[];
}

interface IPosition {
  line: number;
  column: number;
  offset: number;
}

interface ILocation {
  source: string;
  type: string;
  start: IPosition;
  end: IPosition;
}

interface IMessage {
  context: string;
  descr: string;
  type: string;
  loc: ILocation;
  path: string;
  line: number;
  endline: number;
  start: number;
  end: number;
}

interface IError {
  kind: string;
  level: string;
  suppressions: any[];
  extra: IExtra[];
  message: IMessage[];
}

interface IFlowOutput {
  flowVersion: string;
  jsonVersion: string;
  errors: IError[];
  passed: boolean;
}
