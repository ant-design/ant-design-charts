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

// src/config/transformer/rename.ts
var rename_exports = {};
__export(rename_exports, {
  default: () => rename_default
});
module.exports = __toCommonJS(rename_exports);
var MAPPING = {
  extraVitePlugins: "plugins",
  inlineLimit: "build.assetsInlineLimit",
  manifest: "build.manifest",
  outputPath: "build.outDir",
  publicPath: "base",
  jsMinifier: "build.minify",
  jsMinifierOptions: "build.terserOptions"
};
function setConfigByPath(config, path, value) {
  const fields = path.split(".");
  fields.reduce((memo, field, i) => {
    const isLastVar = i === fields.length - 1;
    if (isLastVar) {
      memo[field] = value;
    } else if (!(field in memo)) {
      memo[field] = {};
    }
    return memo[field];
  }, config);
}
var rename_default = function rename(userConfig) {
  const config = {};
  Object.entries(MAPPING).forEach(([field, mapping]) => {
    if (userConfig[field] !== void 0) {
      setConfigByPath(config, mapping, userConfig[field]);
    }
  });
  return config;
};
