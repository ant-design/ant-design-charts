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

// src/features/ssr/mako/mako.ts
var mako_exports = {};
__export(mako_exports, {
  build: () => build
});
module.exports = __toCommonJS(mako_exports);
var import_types = require("@umijs/bundler-webpack/dist/types");
var import_utils = require("@umijs/utils");
var import_lodash = require("@umijs/utils/compiled/lodash");
var import_fs = require("fs");
var import_path = __toESM(require("path"));
var import_utils2 = require("../utils");
var build = async (api) => {
  import_utils.logger.wait("[SSR] Compiling by mako...");
  const now = (/* @__PURE__ */ new Date()).getTime();
  const absOutputFile = (0, import_utils2.absServerBuildPath)(api);
  require("@umijs/bundler-webpack/dist/requireHook");
  const { build: build2 } = require(process.env.OKAM);
  const useHash = api.config.hash && api.env === import_types.Env.production;
  const publicPath = api.userConfig.publicPath || "/";
  const entry = import_path.default.resolve(api.paths.absTmpPath, "umi.server.ts");
  const options = {
    cwd: api.cwd,
    entry: {
      "umi.server": entry
    },
    config: {
      makoPlugins: api.config.mako.plugins,
      ...api.config,
      jsMinifier: "none",
      hash: useHash,
      outputPath: import_path.default.dirname(absOutputFile),
      manifest: {
        fileName: "build-manifest.json"
      },
      devtool: false,
      cjs: true,
      dynamicImportToRequire: false
    },
    chainWebpack: async (memo) => {
      memo.target("node");
      return memo;
    },
    onBuildComplete: () => {
      const finalJsonObj = {};
      const jsonFilePath = (0, import_path.join)((0, import_path.dirname)(absOutputFile), "build-manifest.json");
      const json = (0, import_fs.existsSync)(jsonFilePath) ? import_utils.fsExtra.readJSONSync(jsonFilePath) : {};
      (0, import_lodash.forEach)(json, (path2, key) => {
        json[key] = `${publicPath}${path2}`;
      });
      finalJsonObj.assets = {
        ...json,
        "umi.js": json["umi.server.js"]
      };
      (0, import_fs.writeFileSync)(jsonFilePath, JSON.stringify(finalJsonObj, null, 2), {
        flag: "w"
      });
    }
  };
  await build2(options);
  const diff = (/* @__PURE__ */ new Date()).getTime() - now;
  import_utils.logger.info(`[SSR] Compiled in ${diff}ms`);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  build
});
