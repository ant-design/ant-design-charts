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

// src/techStacks/utils.ts
var utils_exports = {};
__export(utils_exports, {
  IDumiTechStack: () => import_types.IDumiTechStack,
  IDumiTechStackOnBlockLoadArgs: () => import_types.IDumiTechStackOnBlockLoadArgs,
  IDumiTechStackOnBlockLoadResult: () => import_types.IDumiTechStackOnBlockLoadResult,
  IDumiTechStackRuntimeOpts: () => import_types.IDumiTechStackRuntimeOpts,
  defineTechStack: () => defineTechStack,
  extractScript: () => extractScript,
  wrapDemoWithFn: () => wrapDemoWithFn
});
module.exports = __toCommonJS(utils_exports);
var import_core = require("@swc/core");
var import_types = require("../types");
function extractScript(htmlLike) {
  const htmlScriptReg = /<script\b(?:\s[^>]*>|>)(.*?)<\/script>/gims;
  let match = htmlScriptReg.exec(htmlLike);
  let scripts = "";
  while (match) {
    scripts += match[1] + "\n";
    match = htmlScriptReg.exec(htmlLike);
  }
  return scripts;
}
function wrapDemoWithFn(code, opts) {
  const { filename, parserConfig } = opts;
  const result = (0, import_core.transformSync)(code, {
    filename,
    jsc: {
      parser: parserConfig,
      target: "es2022",
      experimental: {
        cacheRoot: "node_modules/.cache/swc",
        plugins: [
          [
            require.resolve("../../compiled/crates/swc_plugin_react_demo.wasm"),
            {}
          ]
        ]
      }
    },
    module: {
      type: "es6"
    }
  });
  return `async function() {
  ${result.code}
}`;
}
function defineTechStack(options) {
  return options;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IDumiTechStack,
  IDumiTechStackOnBlockLoadArgs,
  IDumiTechStackOnBlockLoadResult,
  IDumiTechStackRuntimeOpts,
  defineTechStack,
  extractScript,
  wrapDemoWithFn
});
