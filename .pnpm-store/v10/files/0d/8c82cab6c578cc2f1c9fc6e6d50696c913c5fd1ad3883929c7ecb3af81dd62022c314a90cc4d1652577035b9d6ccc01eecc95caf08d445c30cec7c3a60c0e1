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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RUNTIME_TYPE_FILE_NAME: () => import_constants.RUNTIME_TYPE_FILE_NAME,
  defineConfig: () => import_defineConfig.defineConfig,
  defineMock: () => import_defineMock.defineMock,
  run: () => import_cli.run
});
module.exports = __toCommonJS(src_exports);
var import_cli = require("./cli/cli");
var import_constants = require("./constants");
var import_defineConfig = require("./defineConfig");
var import_defineMock = require("./defineMock");
__reExport(src_exports, require("./service/service"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RUNTIME_TYPE_FILE_NAME,
  defineConfig,
  defineMock,
  run,
  ...require("./service/service")
});
