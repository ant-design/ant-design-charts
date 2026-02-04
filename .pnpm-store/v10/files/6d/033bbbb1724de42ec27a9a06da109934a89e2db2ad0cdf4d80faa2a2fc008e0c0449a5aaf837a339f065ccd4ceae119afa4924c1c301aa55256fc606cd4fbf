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

// src/commands/dev/getAssetsMap.ts
var getAssetsMap_exports = {};
__export(getAssetsMap_exports, {
  getAssetsMap: () => getAssetsMap
});
module.exports = __toCommonJS(getAssetsMap_exports);
var UMI_ASSETS_REG = {
  js: /^umi(\..+)?\.js$/,
  css: /^umi(\..+)?\.css$/
};
var HOT_UPDATE = ".hot-update.";
function getAssetsMap(opts) {
  const { stats, publicPath } = opts;
  const displayPublicPath = publicPath === "auto" ? "/" : publicPath;
  let ret = {};
  const realStats = stats.stats ? stats.stats[0] : stats;
  const assets = Object.keys(realStats.compilation.assets);
  for (const asset of assets) {
    if (!asset.includes(HOT_UPDATE)) {
      if (UMI_ASSETS_REG.js.test(asset)) {
        ret["umi.js"] = [`${displayPublicPath}${asset}`];
      }
    }
    if (UMI_ASSETS_REG.css.test(asset)) {
      ret["umi.css"] = [`${displayPublicPath}${asset}`];
    }
  }
  return ret;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAssetsMap
});
