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
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// src/transformers/esbuild/requireHook.ts
var requireHook_exports = {};
__export(requireHook_exports, {
  hook: () => hook,
  unhook: () => unhook
});
module.exports = __toCommonJS(requireHook_exports);
var mod = require("module");
var hookPropertyMap = /* @__PURE__ */ new Map([
  ["@babel/core", require.resolve("@umijs/bundler-utils/compiled/babel/core")]
]);
var resolveFilename = mod._resolveFilename;
function hook() {
  mod._resolveFilename = function(request, parent, isMain, options) {
    const hookResolved = hookPropertyMap.get(request);
    if (hookResolved)
      request = hookResolved;
    return resolveFilename.call(mod, request, parent, isMain, options);
  };
}
function unhook() {
  mod._resolveFilename = resolveFilename;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hook,
  unhook
});
