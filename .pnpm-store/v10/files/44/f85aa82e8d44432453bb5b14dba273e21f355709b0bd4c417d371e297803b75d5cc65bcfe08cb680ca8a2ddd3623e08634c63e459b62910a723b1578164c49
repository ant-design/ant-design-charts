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

// src/features/bundler/bundler.ts
var bundler_exports = {};
__export(bundler_exports, {
  default: () => bundler_default
});
module.exports = __toCommonJS(bundler_exports);
var import_lazyImportFromCurrentPkg = require("../../utils/lazyImportFromCurrentPkg");
var bundlerWebpack = (0, import_lazyImportFromCurrentPkg.lazyImportFromCurrentPkg)("@umijs/bundler-webpack");
var bundlerVite = (0, import_lazyImportFromCurrentPkg.lazyImportFromCurrentPkg)("@umijs/bundler-vite");
var bundler_default = (api) => {
  api.describe({
    // Don't occupy proprietary terms
    key: "preset-umi:bundler"
  });
  api.modifyUniBundler((_, { bundler }) => {
    if (bundler === "mako") {
      require("@umijs/bundler-webpack/dist/requireHook");
      return require(process.env.OKAM);
    }
    if (bundler === "utoopack") {
      require("@umijs/bundler-webpack/dist/requireHook");
      return require(process.env.UTOOPACK);
    }
    if (bundler === "vite") {
      return bundlerVite;
    }
    return bundlerWebpack;
  });
};
