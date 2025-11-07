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

// src/features/sideEffects/index.ts
var sideEffects_exports = {};
__export(sideEffects_exports, {
  default: () => sideEffects_default
});
module.exports = __toCommonJS(sideEffects_exports);
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_docSideEffectsWebpackPlugin = __toESM(require("./docSideEffectsWebpackPlugin"));
var sideEffects_default = (api) => {
  api.describe({ key: "dumi:sideEffects" });
  api.chainWebpack((memo) => {
    memo.plugin("docSideEffects").use(import_docSideEffectsWebpackPlugin.default, [
      {
        sideEffects: [
          // such as .dumi/tmp-production/**
          (0, import_plugin_utils.winPath)(
            import_path.default.relative(api.cwd, import_path.default.join(api.paths.absTmpPath, "**"))
          ),
          // .dumi local theme
          ".dumi/theme/**"
        ],
        pkgPath: import_path.default.join(api.cwd, "package.json")
      }
    ]);
    return memo;
  });
};
