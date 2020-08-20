module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/__tests__/(src|dist).*.ts'],
  globalSetup: '<rootDir>/prepare-tests.ts',
};
