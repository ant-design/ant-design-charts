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

// src/features/ssr/webpack/webpack.ts
var webpack_exports = {};
__export(webpack_exports, {
  build: () => build2
});
module.exports = __toCommonJS(webpack_exports);
var bundlerWebpack = __toESM(require("@umijs/bundler-webpack"));
var import_types = require("@umijs/bundler-webpack/dist/types");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_utils2 = require("../utils");
var build2 = async (api, opts) => {
  import_utils.logger.wait("[SSR] Compiling...");
  const now = (/* @__PURE__ */ new Date()).getTime();
  const bundlerOpts = import_utils.lodash.cloneDeep(opts);
  const oChainWebpack = bundlerOpts.chainWebpack;
  const useHash = api.config.hash && api.env === import_types.Env.production;
  delete bundlerOpts.config.deadCode;
  bundlerOpts.extraBabelPlugins.push([
    require.resolve("babel-plugin-dynamic-import-node"),
    {},
    "umi-server-dynamic-import-node"
  ]);
  delete bundlerOpts.onBuildComplete;
  bundlerOpts.watch = api.env === "development";
  bundlerOpts.chainWebpack = async (memo, opts2) => {
    const absOutputFile = (0, import_utils2.absServerBuildPath)(api);
    await oChainWebpack(memo, { ...opts2, ssr: true });
    memo.entryPoints.clear();
    memo.entry("umi").add((0, import_path.resolve)(api.paths.absTmpPath, "umi.server.ts"));
    memo.target("node");
    memo.name("umi");
    memo.devtool(false);
    memo.output.path((0, import_path.dirname)(absOutputFile)).filename(
      useHash ? "[name].[contenthash:8].server.js" : "[name].server.js"
    ).chunkFilename(
      useHash ? "[name].[contenthash:8].server.js" : "[name].server.js"
    ).libraryTarget("commonjs2");
    memo.plugins.delete("progress-plugin");
    memo.optimization.minimize(false);
    return memo;
  };
  await bundlerWebpack.build(bundlerOpts);
  const diff = (/* @__PURE__ */ new Date()).getTime() - now;
  import_utils.logger.info(`[SSR] Compiled in ${diff}ms`);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  build
});
