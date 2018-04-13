import chalk from 'chalk';

export const error: typeof console.error = (message, ...params) => {
  // Complete the build process but exit with failure when done
  process.exitCode = 1;
  console.error(typeof message === 'string' ? chalk.magenta('ERROR! ' + message) : message, ...params);
};

export const warn: typeof console.warn = (message, ...params) => {
  console.info(typeof message === 'string' ? chalk.yellow(message) : message, ...params);
};
