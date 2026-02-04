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

// src/features/compile/babelLoaderCustomize.ts
var babelLoaderCustomize_exports = {};
__export(babelLoaderCustomize_exports, {
  default: () => babelLoaderCustomize
});
module.exports = __toCommonJS(babelLoaderCustomize_exports);
function babelLoaderCustomize() {
  return {
    config(config) {
      const context = this;
      if (config.options.filename && ["type=demo", "type=frontmatter", "type=demo-index", "type=text"].some(
        (v) => context.resourceQuery.includes(v)
      )) {
        config.options.filename += context.resourceQuery;
      }
      return config.options;
    }
  };
}
