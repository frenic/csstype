import chalk = require('chalk');

export const error: typeof console.error = (message: any, ...params: any[]) => {
  // Complete the build process but exit with failure when done
  process.exitCode = 1;
  console.error(typeof message === 'string' ? chalk.magenta('ERROR! ' + message) : message, ...params);
};

export const warn: typeof console.warn = (message: any, ...params: any[]) => {
  console.info(typeof message === 'string' ? chalk.yellow(message) : message, ...params);
};
