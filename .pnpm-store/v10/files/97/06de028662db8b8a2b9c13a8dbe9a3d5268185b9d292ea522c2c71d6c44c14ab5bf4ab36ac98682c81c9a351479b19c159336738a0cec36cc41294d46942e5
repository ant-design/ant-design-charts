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

// src/constants.ts
var constants_exports = {};
__export(constants_exports, {
  DEFAULT_CONFIG_FILES: () => DEFAULT_CONFIG_FILES,
  DEV_COMMAND: () => DEV_COMMAND,
  FRAMEWORK_NAME: () => FRAMEWORK_NAME,
  MIN_NODE_VERSION: () => MIN_NODE_VERSION,
  RUNTIME_TYPE_FILE_NAME: () => RUNTIME_TYPE_FILE_NAME
});
module.exports = __toCommonJS(constants_exports);
var MIN_NODE_VERSION = 14;
var DEV_COMMAND = "dev";
var FRAMEWORK_NAME = process.env.FRAMEWORK_NAME || "umi";
var DEFAULT_CONFIG_FILES = [
  `.${FRAMEWORK_NAME}rc.ts`,
  `.${FRAMEWORK_NAME}rc.js`,
  "config/config.ts",
  "config/config.js"
];
var RUNTIME_TYPE_FILE_NAME = "runtimeConfig.d.ts";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_CONFIG_FILES,
  DEV_COMMAND,
  FRAMEWORK_NAME,
  MIN_NODE_VERSION,
  RUNTIME_TYPE_FILE_NAME
});
