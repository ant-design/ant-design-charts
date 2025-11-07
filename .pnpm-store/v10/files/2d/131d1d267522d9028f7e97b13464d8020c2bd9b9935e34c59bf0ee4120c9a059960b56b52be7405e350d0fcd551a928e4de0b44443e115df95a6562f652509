const getSvgoInstance = require('./get-svgo-instance');

const svgo = getSvgoInstance();

module.exports = function optimize(svgString) {
  return svgo.optimize(svgString).then((r) => r.data);
};
