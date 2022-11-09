const BaseJestConfig = {
  verbose: true,
  // test:live start
  // runner: 'jest-electron/runner',
  // testEnvironment: 'jest-electron/environment',
  // setupFilesAfterEnv: ['jest-extended', './jest.setup.js'],
  // test:live end
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-extended', 'jest-canvas-mock', './jest.setup.js'],
  testTimeout: 30000,
  transform: {
    '^.+\\.(tsx|ts)?$': '@swc/jest',
    '\\.(less|css)$': 'jest-less-loader',
  },
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  collectCoverageFrom: ['packages/**/*.ts', 'packages/**/*.tsx', '!**/node_modules/**'],
  testMatch: ['**/?(*[.-])+(spec|test).[jt]s?(x)'],
};

module.exports = { BaseJestConfig };
