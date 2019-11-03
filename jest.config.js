module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': '<rootDir>/preprocessor.js',
  },
  testMatch: ['**/__tests__/(src|dist).*.ts'],
};
