/**
 * SVGO is a Nodejs-based tool for optimizing SVG vector graphics files.
 *
 * @see https://github.com/svg/svgo
 *
 * @author Kir Belevich <kir@soulshine.in> (https://github.com/deepsweet)
 * @copyright © 2012 Kir Belevich
 * @license MIT https://raw.githubusercontent.com/svg/svgo/master/LICENSE
 */

const CONFIG = require('./svgo/config.js');
const SVG2JS = require('./svgo/svg2js.js');
const PLUGINS = require('./svgo/plugins.js');
const JSAPI = require('./svgo/jsAPI.js');
const { encodeSVGDatauri } = require('./svgo/tools.js');
const JS2SVG = require('./svgo/js2svg.js');

const SVGO = function svgo(config) {
  this.config = CONFIG(config);
};

SVGO.prototype.optimize = function optimize(svgstr, info = {}) {
  return new Promise((resolve, reject) => {
    if (this.config.error) {
      reject(this.config.error);
      return;
    }

    const { config } = this;
    const maxPassCount = config.multipass ? 10 : 1;
    let counter = 0;
    let prevResultSize = Number.POSITIVE_INFINITY;

    const optimizeOnceCallback = (svgjs) => {
      if (svgjs.error) {
        reject(svgjs.error);
        return;
      }

      info.multipassCount = counter;

      if (++counter < maxPassCount && svgjs.data.length < prevResultSize) {
        prevResultSize = svgjs.data.length;
        this._optimizeOnce(svgjs.data, info, optimizeOnceCallback);
      } else {
        if (config.datauri) {
          svgjs.data = encodeSVGDatauri(svgjs.data, config.datauri);
        }
        if (info && info.path) {
          svgjs.path = info.path;
        }
        resolve(svgjs);
      }
    };

    this._optimizeOnce(svgstr, info, optimizeOnceCallback);
  });
};

SVGO.prototype._optimizeOnce = function (svgstr, info, callback) {
  const { config } = this;

  SVG2JS(svgstr, (svgjs) => {
    if (svgjs.error) {
      callback(svgjs);
      return;
    }

    svgjs = PLUGINS(svgjs, info, config.plugins);

    callback(JS2SVG(svgjs, config.js2svg));
  });
};

/**
 * The factory that creates a content item with the helper methods.
 *
 * @param {Object} data which is passed to jsAPI constructor
 * @returns {JSAPI} content item
 */
SVGO.prototype.createContentItem = function (data) {
  return new JSAPI(data);
};

SVGO.Config = CONFIG;

module.exports = SVGO;
// Offer ES module interop compatibility.
module.exports.default = SVGO;
