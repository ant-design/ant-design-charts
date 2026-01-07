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

// src/features/prepare/esbuildPlugins/esbuildExternalPlugin.ts
var esbuildExternalPlugin_exports = {};
__export(esbuildExternalPlugin_exports, {
  esbuildExternalPlugin: () => esbuildExternalPlugin
});
module.exports = __toCommonJS(esbuildExternalPlugin_exports);
var import_utils = require("@umijs/utils");
var import_path = __toESM(require("path"));
var import_isRelative = require("./isRelative");
function esbuildExternalPlugin(opts) {
  const { alias } = opts;
  return {
    name: "esbuildExternalPlugin",
    setup(build) {
      build.onResolve({ filter: /.*/ }, (args) => {
        if (args.path.includes("_UMI_PREPARE_EXTERNAL_")) {
          return {
            external: true
          };
        }
        if (!isSource(args.path)) {
          return {
            external: true
          };
        }
        if (args.path.startsWith(".")) {
          return null;
        }
        if (args.kind === "entry-point") {
          return null;
        }
        const isAbsoluteImport = import_path.default.isAbsolute(args.path);
        if (!isAbsoluteImport) {
          const winP = (0, import_utils.winPath)(args.path);
          const aliasImport = import_utils.aliasUtils.getAliasValue({
            alias,
            imported: winP
          });
          if (aliasImport) {
            if (aliasImport.includes("node_modules")) {
              return { external: true };
            }
            if (import_path.default.isAbsolute(aliasImport)) {
              return null;
            }
            if ((0, import_isRelative.isRelativePath)(aliasImport)) {
              return null;
            }
            return { external: true };
          }
        }
        const isNodeModuleImport = args.path.includes("node_modules");
        if (import_path.default.isAbsolute(args.path) && !isNodeModuleImport) {
          return null;
        }
        return {
          external: true
        };
      });
    }
  };
}
function parseExt(file) {
  const ext = import_path.default.extname(file);
  const idx = ext.indexOf("?");
  if (idx > 0) {
    return ext.slice(0, idx);
  }
  return ext;
}
var SOURCE_REG = /\.(t|j)sx?$/;
function isSource(file) {
  if (SOURCE_REG.test(file)) {
    return true;
  }
  const ext = parseExt(file);
  return !ext;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  esbuildExternalPlugin
});
