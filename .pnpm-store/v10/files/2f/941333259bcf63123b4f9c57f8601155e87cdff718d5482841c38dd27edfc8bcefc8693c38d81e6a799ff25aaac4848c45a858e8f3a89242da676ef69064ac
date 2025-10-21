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

// src/features/ssr/builder/css-loader.ts
var css_loader_exports = {};
__export(css_loader_exports, {
  cssLoader: () => cssLoader,
  ensureLastSlash: () => ensureLastSlash,
  getClassNames: () => getClassNames,
  hashString: () => hashString
});
module.exports = __toCommonJS(css_loader_exports);
var import_parcelCSS = require("@umijs/bundler-webpack/dist/parcelCSS");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
function ensureLastSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function hashString(str) {
  let hash = Buffer.from(str).toString("base64").replace(/=/g, "");
  hash = hash.substring(hash.length - 5);
  return hash;
}
function getClassNames(code, filename) {
  const { exports } = import_parcelCSS.parcelCSS.transform({
    filename,
    code,
    minify: false,
    sourceMap: false,
    cssModules: {
      pattern: `[local]`,
      dashedIdents: false
    }
  });
  return Object.keys(exports || {});
}
function cssLoader(opts) {
  return {
    name: "css-loader",
    setup(build) {
      build.onLoad({ filter: /\.css$/ }, (args) => {
        const code = (0, import_fs.readFileSync)(args.path);
        const filename = (0, import_utils.winPath)(args.path).replace(
          ensureLastSlash((0, import_utils.winPath)(opts.cwd)),
          ""
        );
        const cssModuleObject = getClassNames(code, filename).sort().reduce((memo, key) => {
          memo[key] = `${key}___${hashString(`${filename}@${key}`)}`;
          return memo;
        }, {});
        return {
          contents: `export default ${JSON.stringify(cssModuleObject)};`,
          loader: "js",
          resolveDir: (0, import_path.dirname)(args.path)
        };
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cssLoader,
  ensureLastSlash,
  getClassNames,
  hashString
});
