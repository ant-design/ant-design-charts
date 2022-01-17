const BaseJestConfig = {
  verbose: true,
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  testTimeout: 30000,
  setupFilesAfterEnv: ['jest-extended'],
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
    '\\.(less|css)$': 'jest-less-loader',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  collectCoverageFrom: ['packages/**/*.ts', '!**/node_modules/**'],
  testRegex: '/tests/.*-spec\\.tsx|\\.(t|j)s?$',
};

module.exports = { BaseJestConfig };
