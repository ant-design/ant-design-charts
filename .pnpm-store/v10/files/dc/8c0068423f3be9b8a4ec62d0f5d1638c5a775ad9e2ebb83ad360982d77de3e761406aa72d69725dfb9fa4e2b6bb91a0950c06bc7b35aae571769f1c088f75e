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

// src/features/ssr/builder/svg-loader.ts
var svg_loader_exports = {};
__export(svg_loader_exports, {
  default: () => svg_loader_default
});
module.exports = __toCommonJS(svg_loader_exports);
var import_fs = require("fs");
var import_path = require("path");
function svgLoader(opts) {
  opts;
  return {
    name: "svg-loader",
    setup(build) {
      build.onResolve({ filter: /\.(svg)$/ }, (args) => {
        return {
          path: (0, import_path.resolve)(args.resolveDir, args.path),
          namespace: "svgAssets"
        };
      });
      import_fs.readFileSync;
      import_path.dirname;
    }
  };
}
var svg_loader_default = svgLoader;
