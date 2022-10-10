const { BaseJestConfig } = require('../../config/jest');
module.exports = {
  ...BaseJestConfig,
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
  },
};
