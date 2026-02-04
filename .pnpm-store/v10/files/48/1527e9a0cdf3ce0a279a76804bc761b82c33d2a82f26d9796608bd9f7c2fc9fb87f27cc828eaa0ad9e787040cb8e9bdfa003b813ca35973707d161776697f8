var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/commands/dev/createRouteMiddleware.ts
var createRouteMiddleware_exports = {};
__export(createRouteMiddleware_exports, {
  createRouteMiddleware: () => createRouteMiddleware
});
module.exports = __toCommonJS(createRouteMiddleware_exports);
var import_server = require("@umijs/server");
var import_getAssetsMap = require("./getAssetsMap");
var import_getMarkupArgs = require("./getMarkupArgs");
function createRouteMiddleware(opts) {
  return ({ compiler }) => {
    let webpackStats = null;
    let onStats = null;
    compiler == null ? void 0 : compiler.hooks.done.tap("umiRouteMiddleware", (stats) => {
      webpackStats = stats;
      onStats == null ? void 0 : onStats(stats);
    });
    async function getStats(api) {
      if (!compiler && (api.config.mako || api.config.utoopack)) {
        return {
          compilation: { assets: { "umi.js": "umi.js", "umi.css": "umi.css" } },
          hasErrors: () => false
        };
      }
      if (webpackStats) return Promise.resolve(webpackStats);
      return new Promise((resolve) => {
        onStats = (stats) => {
          resolve(stats);
        };
      });
    }
    return async (req, res, next) => {
      var _a;
      const markupArgs = await (0, import_getMarkupArgs.getMarkupArgs)(opts);
      let assetsMap = {};
      const stats = await getStats(opts.api);
      assetsMap = (0, import_getAssetsMap.getAssetsMap)({
        stats,
        publicPath: opts.api.config.publicPath
      });
      const requestHandler = await (0, import_server.createRequestHandler)({
        ...markupArgs,
        styles: markupArgs.styles.concat(
          (assetsMap["umi.css"] || []).map((src) => ({ src }))
        ),
        scripts: (assetsMap["umi.js"] || []).map((src) => ({ src })).concat(markupArgs.scripts),
        esmScript: false,
        historyType: ((_a = opts.api.config.history) == null ? void 0 : _a.type) || "browser"
      });
      requestHandler(req, res, next);
    };
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRouteMiddleware
});
