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

// src/utils/extractEntryAssets.ts
var extractEntryAssets_exports = {};
__export(extractEntryAssets_exports, {
  extractEntryAssets: () => extractEntryAssets
});
module.exports = __toCommonJS(extractEntryAssets_exports);
function extractEntryAssets(entryPointFiles) {
  const assets = {
    // Will contain all js and mjs files
    js: [],
    // Will contain all css files
    css: []
  };
  const entryPointPublicPathMap = {};
  const extensionRegexp = /\.(css|js|mjs)(\?|$)/;
  const UMI_ASSETS_REG = {
    js: /^umi(\..+)?\.js$/,
    css: /^umi(\..+)?\.css$/
  };
  entryPointFiles.forEach((entryPointPublicPath) => {
    const extMatch = extensionRegexp.exec(entryPointPublicPath);
    if (!extMatch) {
      return;
    }
    if (entryPointPublicPath.includes(".hot-update")) {
      return;
    }
    if (entryPointPublicPathMap[entryPointPublicPath]) {
      return;
    }
    if (UMI_ASSETS_REG.js.test(entryPointPublicPath) || UMI_ASSETS_REG.css.test(entryPointPublicPath)) {
      return;
    }
    entryPointPublicPathMap[entryPointPublicPath] = true;
    const ext = extMatch[1] === "mjs" ? "js" : extMatch[1];
    assets[ext].push(entryPointPublicPath);
  });
  return assets;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extractEntryAssets
});
