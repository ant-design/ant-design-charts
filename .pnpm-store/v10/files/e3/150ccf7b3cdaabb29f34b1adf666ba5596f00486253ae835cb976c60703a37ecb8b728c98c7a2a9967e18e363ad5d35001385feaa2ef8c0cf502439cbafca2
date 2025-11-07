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

// src/features/ssr/utils.ts
var utils_exports = {};
__export(utils_exports, {
  absServerBuildPath: () => absServerBuildPath,
  esbuildUmiPlugin: () => esbuildUmiPlugin,
  generateBuildManifest: () => generateBuildManifest
});
module.exports = __toCommonJS(utils_exports);
var import_utils = require("@umijs/utils");
var import_lodash = require("@umijs/utils/compiled/lodash");
var import_fs = require("fs");
var import_path = require("path");
function esbuildUmiPlugin(api) {
  return {
    name: "umi",
    setup(build) {
      build.onResolve(
        { filter: /^(umi|@umijs\/max|@alipay\/bigfish)$/ },
        () => ({
          path: (0, import_path.join)(api.paths.absTmpPath, "exports.ts")
        })
      );
    }
  };
}
function absServerBuildPath(api) {
  if (api.env === "development") {
    return (0, import_path.join)(api.paths.absTmpPath, "server/umi.server.js");
  }
  const manifestPath = (0, import_path.join)(api.paths.cwd, "server", "build-manifest.json");
  if (api.userConfig.ssr.serverBuildPath || !(0, import_fs.existsSync)(manifestPath)) {
    return (0, import_path.join)(
      api.paths.cwd,
      api.userConfig.ssr.serverBuildPath || "server/umi.server.js"
    );
  }
  delete require.cache[manifestPath];
  const manifest = require(manifestPath);
  return (0, import_path.join)(api.paths.cwd, "server", (0, import_path.basename)(manifest.assets["umi.js"]));
}
var generateBuildManifest = (api) => {
  var _a;
  const publicPath = api.userConfig.publicPath || "/";
  const manifestFileName = ((_a = api.config.manifest) == null ? void 0 : _a.fileName) || "asset-manifest.json";
  const finalJsonObj = {};
  const assetFilePath = (0, import_path.join)(api.paths.absOutputPath, manifestFileName);
  const buildFilePath = (0, import_path.join)(api.paths.absOutputPath, "build-manifest.json");
  const json = (0, import_fs.existsSync)(assetFilePath) ? import_utils.fsExtra.readJSONSync(assetFilePath) : {};
  (0, import_lodash.forEach)(json, (path, key) => {
    json[key] = `${publicPath}${path}`;
  });
  finalJsonObj.assets = json;
  (0, import_fs.writeFileSync)(buildFilePath, JSON.stringify(finalJsonObj, null, 2), {
    flag: "w"
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  absServerBuildPath,
  esbuildUmiPlugin,
  generateBuildManifest
});
