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

// src/features/swc/swc.ts
var swc_exports = {};
__export(swc_exports, {
  default: () => swc_default
});
module.exports = __toCommonJS(swc_exports);
var swc_default = (api) => {
  api.addOnDemandDeps(() => {
    const enabled = api.config.srcTranspiler === "swc" || api.userConfig.srcTranspiler === "swc";
    if (!enabled) {
      return [];
    }
    const bundlerWebpackPkg = require("@umijs/bundler-webpack/package.json");
    return [
      {
        name: "@swc/core",
        version: `^${bundlerWebpackPkg.devDependencies["@swc/core"]}`,
        reason: `swc is used, install swc dependencies`
      },
      {
        name: "swc-plugin-auto-css-modules",
        version: `^${bundlerWebpackPkg.devDependencies["swc-plugin-auto-css-modules"]}`,
        reason: `swc plugins`
      }
    ];
  });
};
