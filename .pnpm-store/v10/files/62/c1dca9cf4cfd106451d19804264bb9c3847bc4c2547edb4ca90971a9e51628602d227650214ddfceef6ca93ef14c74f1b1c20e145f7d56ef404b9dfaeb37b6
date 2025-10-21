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

// src/features/overrides/transform.ts
var transform_exports = {};
__export(transform_exports, {
  transform: () => transform
});
module.exports = __toCommonJS(transform_exports);
var import_utils = require("@umijs/utils");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
async function transform(cssContent, filePath) {
  const importPlugin = {
    postcssPlugin: "importPlugin",
    AtRule: {
      import(atRule) {
        let origin = atRule.params;
        origin = origin.replace(/^url\((.+)\)$/g, "$1");
        origin = origin.replace(/^'(.+)'$/g, "$1").replace(/^"(.+)"$/g, "$1");
        if (origin.startsWith("~"))
          return;
        if (origin.startsWith("/"))
          return;
        function getResolvedPath(origin2) {
          return (0, import_utils.winPath)(import_path.default.resolve(import_path.default.dirname(filePath), origin2));
        }
        const resolvedPath = getResolvedPath(origin);
        if (import_fs.default.existsSync(resolvedPath)) {
          atRule.params = `"${resolvedPath}"`;
        } else {
          if (origin.startsWith("./") || origin.startsWith("../")) {
            console.warn(`File does not exist: ${resolvedPath}`);
          }
        }
      }
    }
  };
  const selectorPlugin = require("postcss-prefix-selector")({
    // why not #root?
    // antd will insert dom into body, prefix #root will not work for that
    prefix: "body",
    transform(_p, selector, prefixedSelector) {
      if (selector === "html") {
        return `html:first-child`;
      } else if (/^body([\s+~>[:]|$)/.test(selector)) {
        return `html ${selector}`;
      } else if (selector === ":root") {
        return "html:root";
      }
      return prefixedSelector;
    }
  });
  const result = await require("postcss")([
    selectorPlugin,
    importPlugin
  ]).process(cssContent, {
    from: "overrides.css"
  });
  return result.css;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  transform
});
