const { BaseJestConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  moduleNameMapper: {
    'd3-((?!linear)\\S*)': `<rootDir>/../../node_modules/d3-$1/dist/d3-$1.min.js`,
  },
};
