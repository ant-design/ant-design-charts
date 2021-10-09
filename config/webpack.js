const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

process.env.NODE_ENV = 'production';

const getWebpackConfig = () => {
  return {
    entry: {
      plots: './src/index.ts', // G2Plot 相关图表
    },
    output: {
      filename: '[name].min.js',
      library: '[name]',
      libraryTarget: 'umd',
      path: resolveApp('dist/'),
    },
    resolve: {
      mainFields: ['module', 'main'],
      extensions: ['.ts', '.tsx', '.js'],
      modules: ['node_modules'],
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDom',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: [path.resolve('src')],
          loader: require.resolve('babel-loader'),
          options: {
            customize: require.resolve('babel-preset-react-app/webpack-overrides'),
            presets: [
              [
                require.resolve('babel-preset-react-app'),
                {
                  runtime: 'classic',
                },
              ],
            ],
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                    },
                  },
                },
              ],
            ].filter(Boolean),
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: true,
          },
        },
        {
          test: /\.(js|mjs)$/,
          exclude: /@babel(?:\/|\\{1,2})runtime/,
          loader: require.resolve('babel-loader'),
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            // Babel sourcemaps are needed for debugging into node_modules
            // code.  Without the options below, debuggers like VSCode
            // show incorrect code and set breakpoints on the wrong lines.
            sourceMaps: true,
            inputSourceMap: true,
          },
        },
      ],
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new ForkTsCheckerWebpackPlugin({
        eslint: undefined,
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      ...(process.env.MODE === 'ANALYZER'
        ? [new BundleAnalyzerPlugin({ analyzerMode: 'static' })]
        : []),
    ],
    performance: {
      hints: false,
    },
    devtool: 'source-map',
  };
};

module.exports = { getWebpackConfig };
