const { getConfig } = require('../../scripts/webpack/config');

process.env.NODE_ENV = 'production';

module.exports = getConfig();
