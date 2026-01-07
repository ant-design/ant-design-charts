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

// src/commands/dev/depBuildWorker/dev-config.ts
var dev_config_exports = {};
__export(dev_config_exports, {
  default: () => dev_config_default
});
module.exports = __toCommonJS(dev_config_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_getBabelOpts = require("../getBabelOpts");
var MFSU_EAGER_DEFAULT_INCLUDE = [
  "react",
  "react-error-overlay",
  "react/jsx-dev-runtime",
  "@umijs/utils/compiled/strip-ansi"
];
var dev_config_default = (api) => {
  api.describe({
    enableBy() {
      return api.name === "dev-config";
    },
    key: "dev-config"
  });
  api.registerCommand({
    name: "dev-config",
    description: "dev server for development",
    details: ``,
    async fn() {
      var _a, _b, _c;
      const {
        babelPreset,
        beforeBabelPlugins,
        beforeBabelPresets,
        extraBabelPlugins,
        extraBabelPresets
      } = await (0, import_getBabelOpts.getBabelOpts)({ api });
      const chainWebpack = async (memo, args) => {
        await api.applyPlugins({
          key: "chainWebpack",
          type: api.ApplyPluginsType.modify,
          initialValue: memo,
          args
        });
      };
      const modifyWebpackConfig = async (memo, args) => {
        return await api.applyPlugins({
          key: "modifyWebpackConfig",
          initialValue: memo,
          args
        });
      };
      const entry = await api.applyPlugins({
        key: "modifyEntry",
        initialValue: {
          umi: (0, import_path.join)(api.paths.absTmpPath, "umi.ts")
        }
      });
      const opts = {
        config: { ...api.config, forkTSChecker: false },
        pkg: api.pkg,
        cwd: api.cwd,
        rootDir: process.cwd(),
        entry,
        port: api.appData.port,
        host: api.appData.host,
        ip: api.appData.ip,
        ...{ babelPreset, chainWebpack, modifyWebpackConfig },
        beforeBabelPlugins,
        beforeBabelPresets,
        extraBabelPlugins,
        extraBabelPresets,
        // vite 模式使用 ./plugins/ViteHtmlPlugin.ts 处理
        mfsuWithESBuild: (_a = api.config.mfsu) == null ? void 0 : _a.esbuild,
        mfsuStrategy: (_b = api.config.mfsu) == null ? void 0 : _b.strategy,
        cache: {
          buildDependencies: [
            api.pkgPath,
            api.service.configManager.mainConfigFile || ""
          ].filter(Boolean)
        },
        mfsuInclude: import_utils.lodash.union([
          ...MFSU_EAGER_DEFAULT_INCLUDE,
          ...((_c = api.config.mfsu) == null ? void 0 : _c.include) || []
        ])
      };
      return opts;
    }
  });
};
