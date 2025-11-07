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

// src/loaders/pre-raw/index.ts
var pre_raw_exports = {};
__export(pre_raw_exports, {
  default: () => preRawLoader
});
module.exports = __toCommonJS(pre_raw_exports);
var import_utils = require("../../utils");
function preRawLoader(raw) {
  if (/\.(j|t)sx?$/.test(this.resourcePath)) {
    return (0, import_utils.parseCodeFrontmatter)(raw).code;
  }
  return raw;
}
