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

// src/config/transformer/optimizeDeps.ts
var optimizeDeps_exports = {};
__export(optimizeDeps_exports, {
  default: () => optimizeDeps_default
});
module.exports = __toCommonJS(optimizeDeps_exports);
var optimizeDeps_default = function optimizeDeps(userConfig) {
  const config = {
    // configure pre-bundling entries
    optimizeDeps: { entries: Object.values(userConfig.entry) }
  };
  if (typeof userConfig.alias === "object") {
    config.optimizeDeps.include = Object.keys(userConfig.alias).filter((name) => userConfig.alias[name].includes("node_modules")).map((name) => {
      return name.replace(/(\$)$/, "");
    });
  }
  return config;
};
