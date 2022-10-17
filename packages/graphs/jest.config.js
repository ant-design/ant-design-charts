const { BaseJestConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  setupFilesAfterEnv: ['jest-extended', './jest.setup.js'],
};
