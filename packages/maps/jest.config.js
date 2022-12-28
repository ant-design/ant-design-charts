const { BaseJestConfig, OnlineConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  ...(process.env.DEBUG_MODE === '1' ? OnlineConfig : {}),
};
