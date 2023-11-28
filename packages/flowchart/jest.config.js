const path = require('path');
const { BaseJestConfig, OnlineConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  ...(process.env.DEBUG_MODE === '1' ? OnlineConfig : {}),
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    '@antv/xflow-(\\S*)': `${path.join(
      __dirname,
      '../..',
    )}/node_modules/.pnpm/node_modules/@antv/xflow-$1/dist/index.umd.js`,
  },
};
