const { getWebpackConfig } = require('../../config/webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = getWebpackConfig('graphs', 'Graphs');

config.resolve.plugins = [
  new TsconfigPathsPlugin({
    configFile: path.resolve(__dirname, 'tsconfig.prod.json'),
  }),
];

module.exports = config;
