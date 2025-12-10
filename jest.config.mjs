export default {
  moduleNameMapper: { '^(.+)\\.m?[tj]s$': '$1' },
  testMatch: ['**/__tests__/(src|dist).*.ts'],
  globalSetup: '<rootDir>/prepare-tests.mjs',
  transform: { '^.+\\.m?ts$': 'babel-jest' },
};
