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

// src/features/ssr/builder/assets-loader.ts
var assets_loader_exports = {};
__export(assets_loader_exports, {
  assetsLoader: () => assetsLoader
});
module.exports = __toCommonJS(assets_loader_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_css_loader = require("./css-loader");
var NAMESPACE = "staticAssets";
function assetsLoader(opts) {
  const assetsFilter = /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|mp3|mp4)$/;
  return {
    name: "assets-loader",
    setup(build) {
      opts;
      build.onResolve({ filter: assetsFilter }, (args) => {
        return {
          path: (0, import_path.join)(args.resolveDir, args.path),
          namespace: NAMESPACE
        };
      });
      build.onLoad(
        { filter: assetsFilter, namespace: NAMESPACE },
        async (args) => {
          const filename = (0, import_utils.winPath)(args.path).replace(
            (0, import_css_loader.ensureLastSlash)((0, import_utils.winPath)(opts.cwd)),
            ""
          );
          if ((0, import_fs.existsSync)(args.path) && (0, import_fs.statSync)(args.path).isFile() && (0, import_fs.statSync)(args.path).size < 1e4) {
            return {
              contents: (0, import_fs.readFileSync)(args.path),
              loader: "dataurl"
            };
          } else {
            return {
              contents: `export default g_getAssets('${filename}')`,
              loader: "js"
            };
          }
        }
      );
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assetsLoader
});
