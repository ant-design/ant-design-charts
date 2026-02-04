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

// src/features/legacy/legacy.ts
var legacy_exports = {};
__export(legacy_exports, {
  default: () => legacy_default
});
module.exports = __toCommonJS(legacy_exports);
var import_types = require("@umijs/bundler-webpack/dist/types");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var legacy_default = (api) => {
  api.describe({
    key: "legacy",
    config: {
      schema({ zod }) {
        return zod.object({
          buildOnly: zod.boolean(),
          nodeModulesTransform: zod.boolean(),
          checkOutput: zod.boolean()
        }).deepPartial();
      }
    },
    enableBy: api.EnableBy.config
  });
  const legacyModeLabel = import_utils.chalk.bold.bgBlue(" LEGACY MODE ");
  const pluginConfig = api.config.legacy || api.userConfig.legacy || {};
  const enableEsCheck = pluginConfig == null ? void 0 : pluginConfig.checkOutput;
  if (api.env === import_types.Env.production && enableEsCheck) {
    api.addOnDemandDeps(() => {
      return [
        {
          name: "es-check",
          version: "^7.1.0",
          reason: "es-check is used to check output files in legacy mode"
        }
      ];
    });
    api.onBuildComplete(({ err }) => {
      if (err) {
        return;
      }
      const cwd = api.cwd;
      const scriptPath = import_utils.resolve.sync("es-check", { basedir: cwd });
      import_utils.logger.info(
        `${legacyModeLabel} Start checking output ${import_utils.chalk.cyan(
          ".js"
        )} files with ${import_utils.chalk.cyan("es-check")}...`
      );
      (0, import_utils.crossSpawn)(
        scriptPath,
        ["es5", (0, import_path.join)(api.paths.absOutputPath, "**/*.js")],
        {
          stdio: "inherit",
          cwd
        }
      );
    });
  }
  api.modifyConfig({
    stage: Number.MAX_SAFE_INTEGER,
    fn: (memo) => {
      var _a, _b;
      const { userConfig } = api;
      const { buildOnly = true, nodeModulesTransform = true } = pluginConfig;
      if (api.env === import_types.Env.development) {
        if (buildOnly) {
          return memo;
        }
        memo.mfsu = false;
        import_utils.logger.warn(
          `${legacyModeLabel} mfsu is not supported in ${import_utils.chalk.cyan(
            "legacy"
          )} mode, we automatically close mfsu`
        );
      }
      if (userConfig.srcTranspiler || userConfig.jsMinifier || userConfig.cssMinifier) {
        import_utils.logger.fatal(
          `${legacyModeLabel} Manual configuration of ${[
            "srcTranspiler",
            "jsMinifier",
            "cssMinifier"
          ].map((i) => import_utils.chalk.yellow(i)).join(", ")} is not supported when ${import_utils.chalk.cyan(
            "legacy"
          )} build mode enabled.`
        );
        throw new Error(
          "Manual configuration of legacy mode is not supported."
        );
      }
      memo.srcTranspiler = import_types.Transpiler.babel;
      memo.jsMinifier = import_types.JSMinifier.terser;
      memo.cssMinifier = import_types.CSSMinifier.cssnano;
      const ieTarget = ((_a = userConfig.targets) == null ? void 0 : _a.ie) || ((_b = api.config.targets) == null ? void 0 : _b.ie) || 11;
      memo.targets = {
        ...userConfig.targets,
        ie: ieTarget
      };
      import_utils.logger.info(
        `${legacyModeLabel} is enabled, we automatically modify the ${[
          "srcTranspiler",
          "jsMinifier",
          "cssMinifier"
        ].map((i) => import_utils.chalk.yellow(i)).join(", ")} to be compatible with IE 11`
      );
      const originChainWebpack = userConfig.chainWebpack;
      memo.chainWebpack = (memo2, ...args) => {
        if (originChainWebpack) {
          originChainWebpack(memo2, ...args);
        }
        if (nodeModulesTransform) {
          memo2.module.rule("extra-src").include.add(/node_modules/).end();
        }
        memo2.module.rule("extra-src").exclude.add(/core-js/).add(/node_modules\/(css-loader)/).end();
        useBabelTransformSvgr(memo2, api);
        if (!import_utils.lodash.isEmpty(userConfig.externals)) {
          const externalsAsString = JSON.stringify(userConfig.externals);
          const externalsType = memo2.get("externalsType");
          if (
            // e.g.
            //  externals: {
            //    lodash: ['script http://path', '_']
            //  }
            externalsAsString.includes("script ") || // e.g.
            // chainWebpack(memo) {
            //   memo.set('externalsType', 'script');
            //   return memo
            // }
            externalsType
          ) {
            import_utils.logger.warn(
              `${legacyModeLabel} Legacy browsers do not support ${import_utils.chalk.yellow(
                "Top level await"
              )}, ensure you are not using both ${import_utils.chalk.bold.red(
                `Top level sync import`
              )} and ${import_utils.chalk.bold.red("Async externalsType (e.g. script)")}`
            );
          }
        }
        return memo2;
      };
      return memo;
    }
  });
};
function useBabelTransformSvgr(memo, api) {
  memo.module.rule("svgr").use("babel-loader").loader(require.resolve("@umijs/bundler-webpack/compiled/babel-loader")).options({
    sourceType: "unambiguous",
    babelrc: false,
    configFile: false,
    cacheDirectory: false,
    browserslistConfigFile: false,
    targets: api.config.targets,
    presets: [
      [
        require.resolve("@umijs/babel-preset-umi"),
        {
          presetEnv: {},
          presetReact: {},
          presetTypeScript: {}
        }
      ]
    ]
  }).before("svgr-loader").end();
}
