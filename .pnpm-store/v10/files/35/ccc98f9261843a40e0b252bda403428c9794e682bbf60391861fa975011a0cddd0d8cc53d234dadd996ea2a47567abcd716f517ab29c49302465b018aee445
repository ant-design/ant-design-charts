var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/config/config.ts
var config_exports = {};
__export(config_exports, {
  getConfig: () => getConfig
});
module.exports = __toCommonJS(config_exports);
var import_vite = require("../../compiled/vite");
var import_plugins = __toESM(require("../plugins"));
var import_transformer = __toESM(require("./transformer"));
async function getConfig(opts) {
  const applyOpts = {
    ...opts.userConfig,
    entry: opts.entry,
    extraBabelPlugins: [
      ...opts.extraBabelPlugins || [],
      ...opts.userConfig.extraBabelPlugins || []
    ],
    extraBabelPresets: [
      ...opts.extraBabelPresets || [],
      ...opts.userConfig.extraBabelPresets || []
    ]
  };
  const vitePluginsConfig = (0, import_plugins.default)(applyOpts);
  const viteConfigFromUserConfig = (0, import_transformer.default)(applyOpts);
  let viteConfig = (0, import_vite.mergeConfig)(vitePluginsConfig, viteConfigFromUserConfig);
  if (opts.modifyViteConfig) {
    viteConfig = await opts.modifyViteConfig(viteConfig, {
      env: opts.env
    });
  }
  return viteConfig;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getConfig
});
