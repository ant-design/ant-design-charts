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

// src/transformers/esbuild/transformer.ts
var transformer_exports = {};
__export(transformer_exports, {
  babelTransform: () => babelTransform
});
module.exports = __toCommonJS(transformer_exports);
require("./requireHook").hook();
var { createTransformer } = require("babel-jest");
require("./requireHook").unhook();
var { process } = createTransformer({
  plugins: ["@babel/plugin-transform-modules-commonjs"],
  parserOpts: {
    plugins: ["jsx", "typescript"]
  }
});
function babelTransform(opts) {
  const { sourceText, sourcePath, config } = opts;
  const babelResult = process(sourceText, sourcePath, config);
  return babelResult.code;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  babelTransform
});
