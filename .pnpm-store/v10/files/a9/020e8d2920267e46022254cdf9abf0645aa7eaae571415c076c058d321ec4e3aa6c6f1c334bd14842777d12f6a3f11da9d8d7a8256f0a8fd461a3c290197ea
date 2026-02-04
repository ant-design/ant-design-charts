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

// src/features/webpack/webpack.ts
var webpack_exports = {};
__export(webpack_exports, {
  default: () => webpack_default
});
module.exports = __toCommonJS(webpack_exports);
var import_extractEntryAssets = require("../../utils/extractEntryAssets");
var webpack_default = (api) => {
  api.describe({
    key: "preset-umi:webpack",
    enableBy: () => api.env === "production"
  });
  const assets = {
    // Will contain all js and mjs files
    js: [],
    // Will contain all css files
    css: []
  };
  class HtmlWebpackPlugin {
    apply(compiler) {
      compiler.hooks.emit.tapPromise(
        "UmiHtmlGeneration",
        async (compilation) => {
          const entryPointFiles = compilation.entrypoints.get("umi").getFiles();
          let entryAssets = (0, import_extractEntryAssets.extractEntryAssets)(entryPointFiles);
          Object.entries(entryAssets).forEach(([ext, files]) => {
            if (!Array.isArray(assets[ext])) {
              assets[ext] = [];
            }
            assets[ext].push(...files);
          });
        }
      );
    }
  }
  api.modifyWebpackConfig((config) => {
    var _a;
    if (!api.config.mpa) {
      (_a = config.plugins) == null ? void 0 : _a.push(new HtmlWebpackPlugin());
    }
    return config;
  });
  api.addHTMLStyles(() => {
    const { publicPath } = api.config;
    const displayPublicPath = publicPath === "auto" ? "/" : publicPath;
    return assets.css.map((css) => {
      return `${displayPublicPath}${css}`;
    });
  });
  api.addHTMLHeadScripts(() => {
    const { publicPath } = api.config;
    const displayPublicPath = publicPath === "auto" ? "/" : publicPath;
    return assets.js.map((js) => {
      return { src: `${displayPublicPath}${js}` };
    });
  });
};
