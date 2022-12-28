const { BaseJestConfig, OnlineConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  ...(process.env.DEBUG_MODE === '1' ? OnlineConfig : {}),
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    '@antv/xflow': '<rootDir>/node_modules/@antv/xflow/dist/index.umd.js',
  },
};
