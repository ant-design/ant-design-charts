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

// src/config/transformer/rollup.ts
var rollup_exports = {};
__export(rollup_exports, {
  default: () => rollup_default
});
module.exports = __toCommonJS(rollup_exports);
var import_path = __toESM(require("path"));
var import_rollup_plugin_visualizer = require("rollup-plugin-visualizer");
var import_rollup_plugin_copy = __toESM(require("../../../compiled/rollup-plugin-copy"));
var rollup_default = function rollup(userConfig) {
  const config = {
    build: { rollupOptions: { plugins: [], output: {} } }
  };
  if (typeof userConfig.analyze === "object" || process.env.ANALYZE) {
    let getExclude = function() {
      if (!excludeAssets)
        return [];
      const excludes = Array.isArray(excludeAssets) ? excludeAssets : [excludeAssets];
      return excludes.filter((exclude) => {
        return typeof exclude === "string";
      }).map((exclude) => {
        return {
          bundle: exclude,
          file: exclude
        };
      });
    };
    const {
      generateStatsFile,
      openAnalyzer,
      reportFilename,
      reportTitle,
      excludeAssets,
      ...analyzeOverrides
    } = userConfig.analyze || {};
    config.build.rollupOptions.plugins.push(
      (0, import_rollup_plugin_visualizer.visualizer)({
        template: generateStatsFile ? "raw-data" : "treemap",
        open: openAnalyzer,
        exclude: getExclude(),
        gzipSize: true,
        brotliSize: true,
        filename: reportFilename,
        title: reportTitle,
        ...analyzeOverrides
      })
    );
  }
  if (Array.isArray(userConfig.copy)) {
    config.build.rollupOptions.plugins.push(
      (0, import_rollup_plugin_copy.default)({
        targets: userConfig.copy.map((item) => {
          if (typeof item === "string") {
            return {
              src: item,
              dest: userConfig.outputPath || "dist"
            };
          } else {
            return {
              src: item.from,
              dest: import_path.default.dirname(item.to),
              rename: import_path.default.basename(item.to)
            };
          }
        }),
        hook: "writeBundle"
      })
    );
  }
  if (userConfig.hash !== true) {
    Object.assign(config.build.rollupOptions.output, {
      entryFileNames: "[name].js",
      chunkFileNames: "[name].js",
      assetFileNames: "[name].[ext]"
    });
  }
  return config;
};
