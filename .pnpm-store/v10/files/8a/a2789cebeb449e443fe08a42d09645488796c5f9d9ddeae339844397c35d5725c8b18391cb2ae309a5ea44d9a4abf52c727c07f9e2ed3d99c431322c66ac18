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

// src/plugins/externals.ts
var externals_exports = {};
__export(externals_exports, {
  default: () => externals
});
module.exports = __toCommonJS(externals_exports);
function externals(externals2) {
  return {
    name: "bundler-vite:externals",
    resolveId(id) {
      if (externals2[id]) {
        return id;
      }
    },
    load(id) {
      if (externals2[id]) {
        return `const external = window.${externals2[id]};export default external;`;
      }
    }
  };
}
