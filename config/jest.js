const BaseJestConfig = {
  verbose: true,
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  testTimeout: 30000,
  setupFilesAfterEnv: ['jest-extended'],
  transform: {
    '^.+\\.(tsx|ts)?$': '@swc/jest',
    '\\.(less|css)$': 'jest-less-loader',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  collectCoverageFrom: ['packages/**/*.ts', 'packages/**/*.tsx', '!**/node_modules/**'],
  testMatch: ['**/?(*[.-])+(spec|test).[jt]s?(x)'],
};

module.exports = { BaseJestConfig };
