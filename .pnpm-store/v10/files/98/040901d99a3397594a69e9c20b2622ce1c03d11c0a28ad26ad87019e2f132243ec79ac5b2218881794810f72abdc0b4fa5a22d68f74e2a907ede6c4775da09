// This config is project-wide config for `npm run test:node`
module.exports = {
  // workaround for https://github.com/babel/babel/issues/2877
  // "passPerPreset": true,
  presets: [
    [
      '@babel/preset-env',
      {
        debug: true,
        modules: 'commonjs',
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
  env: {
    test: {
      plugins: ['istanbul'],
    },
  },
};
