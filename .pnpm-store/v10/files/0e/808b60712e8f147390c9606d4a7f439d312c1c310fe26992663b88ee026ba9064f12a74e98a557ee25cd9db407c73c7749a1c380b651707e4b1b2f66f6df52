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

// src/commands/build.ts
var build_exports = {};
__export(build_exports, {
  default: () => build_default
});
module.exports = __toCommonJS(build_exports);
var import_server = require("@umijs/server");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_fileSizeReporter = require("../utils/fileSizeReporter");
var import_lazyImportFromCurrentPkg = require("../utils/lazyImportFromCurrentPkg");
var import_getAssetsMap = require("./dev/getAssetsMap");
var import_getBabelOpts = require("./dev/getBabelOpts");
var import_getMarkupArgs = require("./dev/getMarkupArgs");
var import_printMemoryUsage = require("./dev/printMemoryUsage");
var bundlerWebpack = (0, import_lazyImportFromCurrentPkg.lazyImportFromCurrentPkg)("@umijs/bundler-webpack");
var build_default = (api) => {
  api.registerCommand({
    name: "build",
    description: "build app for production",
    details: `
umi build

# build without compression
COMPRESS=none umi build

# clean and build
umi build --clean
`,
    fn: async function() {
      var _a;
      import_utils.logger.info(import_utils.chalk.cyan.bold(`Umi v${api.appData.umi.version}`));
      import_utils.rimraf.sync(api.paths.absTmpPath);
      await api.applyPlugins({
        key: "onCheckPkgJSON",
        args: {
          origin: null,
          current: api.appData.pkg
        }
      });
      async function generate(opts2) {
        await api.applyPlugins({
          key: "onGenerateFiles",
          args: {
            files: opts2.files || null,
            isFirstTime: opts2.isFirstTime
          }
        });
      }
      await generate({
        isFirstTime: true
      });
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
      const modifyViteConfig = async (memo, args) => {
        return await api.applyPlugins({
          key: "modifyViteConfig",
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
      const shouldUseAutomaticRuntime = ((_a = api.appData.react) == null ? void 0 : _a.version) && // why not 16.14.0 ?
      // it will break the config of externals, when externals
      // does not handle the react/runtime
      import_utils.semver.gte(api.appData.react.version, "17.0.0");
      let opts = {
        react: {
          runtime: shouldUseAutomaticRuntime ? "automatic" : "classic"
        },
        config: {
          outputPath: api.userConfig.outputPath || "dist",
          ...api.config
        },
        cwd: api.cwd,
        entry,
        ...api.config.vite ? { modifyViteConfig } : { babelPreset, chainWebpack, modifyWebpackConfig },
        beforeBabelPlugins,
        beforeBabelPresets,
        extraBabelPlugins,
        extraBabelPresets,
        async onBuildComplete(opts2) {
          (0, import_printMemoryUsage.printMemoryUsage)();
          await api.applyPlugins({
            key: "onBuildComplete",
            args: opts2
          });
        },
        clean: true,
        htmlFiles: []
      };
      await api.applyPlugins({
        key: "onBeforeCompiler",
        args: { compiler: api.appData.bundler, opts }
      });
      opts = await api.applyPlugins({
        key: "modifyUniBundlerOpts",
        initialValue: opts,
        args: {
          bundler: api.appData.bundler
        }
      });
      const bundler = await api.applyPlugins({
        key: "modifyUniBundler",
        args: {
          bundler: api.appData.bundler,
          opts
        }
      });
      const stats = await bundler.build(opts);
      if (!api.config.vite && !api.config.mako) {
        const absOutputPath = (0, import_path.resolve)(
          opts.cwd,
          opts.config.outputPath || bundlerWebpack.DEFAULT_OUTPUT_PATH
        );
        const previousFileSizes = (0, import_fileSizeReporter.measureFileSizesBeforeBuild)(absOutputPath);
        console.log();
        import_utils.logger.info("File sizes after gzip:\n");
        (0, import_fileSizeReporter.printFileSizesAfterBuild)({
          webpackStats: stats,
          previousSizeMap: previousFileSizes,
          buildFolder: absOutputPath
        });
      }
      let htmlFiles = [];
      if (!api.config.mpa) {
        const assetsMap = api.config.vite ? {} : (0, import_getAssetsMap.getAssetsMap)({
          stats,
          publicPath: api.config.publicPath
        });
        const { vite } = api.args;
        const args = await (0, import_getMarkupArgs.getMarkupArgs)({ api });
        const finalMarkUpArgs = {
          ...args,
          styles: args.styles.concat(
            api.config.vite ? [] : [...(assetsMap["umi.css"] || []).map((src) => ({ src }))]
          ),
          scripts: (api.config.vite ? [] : [...(assetsMap["umi.js"] || []).map((src) => ({ src }))]).concat(args.scripts),
          esmScript: !!opts.config.esm || vite,
          path: "/"
        };
        htmlFiles = await api.applyPlugins({
          key: "modifyExportHTMLFiles",
          initialValue: [
            {
              path: "index.html",
              content: await (0, import_server.getMarkup)(finalMarkUpArgs)
            }
          ],
          args: { markupArgs: finalMarkUpArgs, getMarkup: import_server.getMarkup }
        });
        htmlFiles.forEach(({ path, content }) => {
          const absPath = (0, import_path.resolve)(api.paths.absOutputPath, path);
          import_utils.fsExtra.mkdirpSync((0, import_path.dirname)(absPath));
          (0, import_fs.writeFileSync)(absPath, content, "utf-8");
          import_utils.logger.event(`Build ${path}`);
        });
      }
      await api.applyPlugins({
        key: "onBuildHtmlComplete",
        args: {
          ...opts,
          htmlFiles
        }
      });
    }
  });
};
