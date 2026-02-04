var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/config/transformer/index.ts
var transformer_exports = {};
__export(transformer_exports, {
  default: () => transformer_default
});
module.exports = __toCommonJS(transformer_exports);
var import_vite = require("../../../compiled/vite");
var import_alias = __toESM(require("./alias"));
var import_css = __toESM(require("./css"));
var import_define = __toESM(require("./define"));
var import_merge = __toESM(require("./merge"));
var import_optimizeDeps = __toESM(require("./optimizeDeps"));
var import_react = __toESM(require("./react"));
var import_rename = __toESM(require("./rename"));
var import_rollup = __toESM(require("./rollup"));
var import_target = __toESM(require("./target"));
var transformer_default = (userConfig) => {
  const transformers = [
    import_rename.default,
    import_alias.default,
    // must before css for support ~ prefix from less-loader
    import_css.default,
    import_rollup.default,
    import_react.default,
    import_optimizeDeps.default,
    import_target.default,
    import_define.default,
    import_merge.default
  ];
  return transformers.reduce(
    (memo, transformer) => (0, import_vite.mergeConfig)(memo, transformer(userConfig, memo)),
    {}
  );
};
