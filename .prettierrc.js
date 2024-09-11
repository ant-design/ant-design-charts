const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  printWidth: 120,
  plugins: [require.resolve('prettier-plugin-organize-imports'), require.resolve('prettier-plugin-packagejson')],
};
