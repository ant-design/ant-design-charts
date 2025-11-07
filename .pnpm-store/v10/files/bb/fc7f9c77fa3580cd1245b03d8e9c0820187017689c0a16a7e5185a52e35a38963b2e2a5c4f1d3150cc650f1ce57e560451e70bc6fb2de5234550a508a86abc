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

// src/utils/lazyImportFromCurrentPkg.ts
var lazyImportFromCurrentPkg_exports = {};
__export(lazyImportFromCurrentPkg_exports, {
  lazyImportFromCurrentPkg: () => lazyImportFromCurrentPkg
});
module.exports = __toCommonJS(lazyImportFromCurrentPkg_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
var lazyImportFromCurrentPkg = (depName) => {
  return (0, import_utils.importLazy)((0, import_path.dirname)(require.resolve(`${depName}/package.json`)));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  lazyImportFromCurrentPkg
});
