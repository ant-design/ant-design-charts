const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  entry: {
    // charts: ['@babel/polyfill', './src/index.ts'],
    'charts': './src/index.charts.ts',
    'charts_g6': './src/index.g6.ts',
  },
  output: {
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    path: resolveApp('dist/'),
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.less'],
    modules: ['node_modules']
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // use: ['babel-loader', 'ts-loader'],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ]
      },
     
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: undefined
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    ...(process.env.MODE === 'ANALYZER' ? [new BundleAnalyzerPlugin({ analyzerMode: 'static' })] : []),
  ],
  performance: {
    hints: false,
  },
  devtool: 'source-map',
};
