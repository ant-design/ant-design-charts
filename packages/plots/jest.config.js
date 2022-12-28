const { BaseJestConfig, OnlineConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  ...(process.env.DEBUG_MODE === '1' ? OnlineConfig : {}),
  moduleNameMapper: {
    'd3-((?!linear)\\S*)': `<rootDir>/../../node_modules/d3-$1/dist/d3-$1.min.js`,
  },
};
