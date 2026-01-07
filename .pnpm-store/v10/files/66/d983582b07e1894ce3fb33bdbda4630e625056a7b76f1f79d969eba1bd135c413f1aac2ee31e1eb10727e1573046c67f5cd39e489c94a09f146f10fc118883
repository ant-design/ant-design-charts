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

// src/plugins/autoCSSModule.ts
var autoCSSModule_exports = {};
__export(autoCSSModule_exports, {
  default: () => autoCSSModulePlugin
});
module.exports = __toCommonJS(autoCSSModule_exports);
function autoCSSModulePlugin() {
  return {
    name: "bundler-vite:auto-css-module",
    transform(code) {
      let result = code;
      const REG_EXP = /(import [a-z]+ from ["'].+\.[css|less|sass|scss|styl|stylus]+)(["'])/;
      if (code.match(REG_EXP)) {
        result = code.replace(REG_EXP, ($1, $2, $3) => {
          return `${$2}?.module.css${$3}`;
        });
      }
      return {
        code: result,
        map: null
      };
    }
  };
}
