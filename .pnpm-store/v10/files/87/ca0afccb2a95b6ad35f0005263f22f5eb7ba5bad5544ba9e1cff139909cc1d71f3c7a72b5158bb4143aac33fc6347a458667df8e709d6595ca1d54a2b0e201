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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_linter = require("./linter");
var ES_EXTS = ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"];
var STYLE_EXTS = [
  "**/*.less",
  "**/*.css",
  "**/*.sass",
  "**/*.scss",
  "**/*.styl"
];
var src_default = (opts, args) => {
  if (!args.eslintOnly) {
    const stylelint = new import_linter.StyleLinter(opts);
    const styleArgs = { ...args, _: [...args._] };
    if (!styleArgs.cssinjs) {
      for (const suffix of ES_EXTS) {
        styleArgs._.unshift("--ignore-pattern", suffix);
      }
    }
    stylelint.run(styleArgs);
  }
  if (!args.stylelintOnly) {
    const eslint = new import_linter.EsLinter(opts);
    const esArgs = { ...args, _: [...args._] };
    for (const suffix of STYLE_EXTS) {
      esArgs._.unshift("--ignore-pattern", suffix);
    }
    eslint.run(esArgs);
  }
};
