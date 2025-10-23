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

// src/features/okam/okam.ts
var okam_exports = {};
__export(okam_exports, {
  default: () => okam_default
});
module.exports = __toCommonJS(okam_exports);
var import_utils = require("@umijs/utils");
var okam_default = (api) => {
  api.describe({
    enableBy: () => Boolean(api.config.mako)
  });
  api.onCheck(() => {
    (0, import_utils.checkVersion)(16, `Node 16 is required when using mako.`);
  });
  api.modifyAppData((memo) => {
    memo.bundler = "mako";
    return memo;
  });
};
