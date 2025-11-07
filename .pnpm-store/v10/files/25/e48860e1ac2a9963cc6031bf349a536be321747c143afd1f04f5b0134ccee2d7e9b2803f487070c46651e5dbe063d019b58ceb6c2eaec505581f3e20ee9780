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

// src/commands/dev/dev.ts
var dev_exports = {};
__export(dev_exports, {
  default: () => dev_default
});
module.exports = __toCommonJS(dev_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_worker_threads = require("worker_threads");
var import_constants = require("../../constants");
var import_LazySourceCodeCache = require("../../libs/folderCache/LazySourceCodeCache");
var import_projectFileList = require("../../utils/projectFileList");
var import_createRouteMiddleware = require("./createRouteMiddleware");
var import_faviconMiddleware = require("./faviconMiddleware");
var import_getBabelOpts = require("./getBabelOpts");
var import_ViteHtmlPlugin = __toESM(require("./plugins/ViteHtmlPlugin"));
var import_printMemoryUsage = require("./printMemoryUsage");
var import_watch = require("./watch");
var MFSU_EAGER_DEFAULT_INCLUDE = [
  "react",
  "react-error-overlay",
  "react/jsx-dev-runtime",
  "@umijs/utils/compiled/strip-ansi"
];
var dev_default = (api) => {
  api.describe({
    enableBy() {
      return api.name === "dev";
    }
  });
  api.registerCommand({
    name: "dev",
    description: "dev server for development",
    details: `
umi dev

# dev with specified port
PORT=8888 umi dev
`,
    async fn() {
      var _a, _b, _c, _d, _e, _f;
      import_utils.logger.info(import_utils.chalk.cyan.bold(`Umi v${api.appData.umi.version}`));
      const enableVite = !!api.config.vite;
      import_utils.rimraf.sync(api.paths.absTmpPath);
      if (process.env.STRICT_PORT) {
        import_utils.logger.info(
          `Checking port ${process.env.STRICT_PORT} since STRICT_PORT is set...`
        );
        const port = parseInt(String(process.env.STRICT_PORT), 10);
        const isPortAvailableResult = await isPortAvailable(port);
        if (!isPortAvailableResult) {
          import_utils.logger.error(
            `Port ${port} is not available, please use another port.`
          );
          import_utils.logger.info(
            `If you don't want to exit when the port is not available, use PORT instead.`
          );
          process.exit(1);
        }
      }
      await api.applyPlugins({
        key: "onCheckPkgJSON",
        args: {
          origin: null,
          current: api.appData.pkg
        }
      });
      const generate = async (opts2) => {
        await api.applyPlugins({
          key: "onGenerateFiles",
          args: {
            files: opts2.files || null,
            isFirstTime: opts2.isFirstTime
          }
        });
      };
      await generate({
        isFirstTime: true
      });
      const { absPagesPath, absSrcPath } = api.paths;
      const watcherPaths = await api.applyPlugins({
        key: "addTmpGenerateWatcherPaths",
        initialValue: [
          absPagesPath,
          !api.config.routes && ((_a = api.config.conventionRoutes) == null ? void 0 : _a.base),
          (0, import_path.join)(absSrcPath, "layouts"),
          ...(0, import_watch.expandJSPaths)((0, import_path.join)(absSrcPath, "loading")),
          ...(0, import_watch.expandJSPaths)((0, import_path.join)(absSrcPath, "app")),
          ...(0, import_watch.expandJSPaths)((0, import_path.join)(absSrcPath, "global")),
          ...(0, import_watch.expandCSSPaths)((0, import_path.join)(absSrcPath, "global")),
          ...(0, import_watch.expandCSSPaths)((0, import_path.join)(absSrcPath, "overrides"))
        ].filter(Boolean)
      });
      import_utils.lodash.uniq(watcherPaths.map(import_utils.winPath)).forEach((p) => {
        (0, import_watch.watch)({
          path: p,
          addToUnWatches: true,
          onChange: (0, import_watch.createDebouncedHandler)({
            timeout: 2e3,
            async onChange(opts2) {
              await generate({ files: opts2.files, isFirstTime: false });
            }
          })
        });
      });
      const pkgPath = (0, import_path.join)(api.cwd, "package.json");
      (0, import_watch.watch)({
        path: pkgPath,
        addToUnWatches: true,
        onChange() {
          try {
            const origin = api.appData.pkg;
            api.appData.pkg = JSON.parse((0, import_fs.readFileSync)(pkgPath, "utf-8"));
            api.applyPlugins({
              key: "onCheckPkgJSON",
              args: {
                origin,
                current: api.appData.pkg
              }
            });
            api.applyPlugins({
              key: "onPkgJSONChanged",
              args: {
                origin,
                current: api.appData.pkg
              }
            });
          } catch (e) {
            import_utils.logger.error(e);
          }
        }
      });
      (0, import_watch.addUnWatch)(
        api.service.configManager.watch({
          schemas: api.service.configSchemas,
          onChangeTypes: api.service.configOnChanges,
          async onChange(opts2) {
            await api.applyPlugins({
              key: "onCheckConfig",
              args: {
                config: api.config,
                userConfig: api.userConfig
              }
            });
            const { data } = opts2;
            if (data.changes[api.ConfigChangeType.reload]) {
              import_utils.logger.event(
                `config ${data.changes[api.ConfigChangeType.reload].join(
                  ", "
                )} changed, restart server...`
              );
              api.restartServer();
              return;
            }
            await api.service.resolveConfig();
            if (data.changes[api.ConfigChangeType.regenerateTmpFiles]) {
              import_utils.logger.event(
                `config ${data.changes[api.ConfigChangeType.regenerateTmpFiles].join(", ")} changed, regenerate tmp files...`
              );
              await generate({ isFirstTime: false });
            }
            for await (const fn of data.fns) {
              await fn();
            }
          }
        })
      );
      const pluginFiles = [
        (0, import_path.join)(api.cwd, "plugin.ts"),
        (0, import_path.join)(api.cwd, "plugin.js")
      ];
      pluginFiles.forEach((filePath) => {
        (0, import_watch.watch)({
          path: filePath,
          addToUnWatches: true,
          onChange() {
            import_utils.logger.event(`${(0, import_path.basename)(filePath)} changed, restart server...`);
            api.restartServer();
          }
        });
      });
      function watchPublicDirChange() {
        const publicDir = (0, import_path.join)(api.cwd, "public");
        const isPublicAvailable = (0, import_fs.existsSync)(publicDir) && (0, import_fs.readdirSync)(publicDir).length;
        let restarted = false;
        const restartServer = () => {
          if (restarted) return;
          restarted = true;
          import_utils.logger.event(`public dir changed, restart server...`);
          api.restartServer();
        };
        (0, import_watch.watch)({
          path: publicDir,
          addToUnWatches: true,
          onChange(event, path) {
            if (isPublicAvailable) {
              if (event === "unlinkDir" && path === publicDir) {
                restartServer();
              } else if (
                // listen public files all deleted
                event === "unlink" && (0, import_fs.existsSync)(publicDir) && (0, import_fs.readdirSync)(publicDir).length === 0
              ) {
                restartServer();
              }
            } else {
              if (event === "add" && (0, import_fs.existsSync)(publicDir) && (0, import_fs.readdirSync)(publicDir).length === 1) {
                restartServer();
              }
            }
          }
        });
      }
      watchPublicDirChange();
      const beforeMiddlewares = await api.applyPlugins({
        key: "addBeforeMiddlewares",
        initialValue: []
      });
      const middlewares = await api.applyPlugins({
        key: "addMiddlewares",
        initialValue: []
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
      const debouncedPrintMemoryUsage = import_utils.lodash.debounce(import_printMemoryUsage.printMemoryUsage, 5e3);
      let srcCodeCache;
      let startBuildWorker = () => {
      };
      if (((_b = api.config.mfsu) == null ? void 0 : _b.strategy) === "eager") {
        srcCodeCache = new import_LazySourceCodeCache.LazySourceCodeCache({
          root: api.paths.cwd,
          cwd: api.paths.absSrcPath,
          cachePath: (0, import_path.join)(
            api.paths.absNodeModulesPath,
            ".cache",
            "mfsu",
            "mfsu_v4"
          )
        });
        if (api.appData.framework === "vue") {
          await srcCodeCache.initWithScan();
        } else {
          const files = (0, import_projectFileList.getProjectFileList)(api);
          await srcCodeCache.init(files);
        }
        (0, import_watch.addUnWatch)(() => {
          srcCodeCache.unwatch();
        });
        let currentWorker = null;
        const initWorker = () => {
          currentWorker = new import_worker_threads.Worker(
            (0, import_path.join)(__dirname, "depBuildWorker/depBuildWorker.js")
          );
          currentWorker.on("exit", () => {
            initWorker();
          });
          return currentWorker;
        };
        currentWorker = initWorker();
        startBuildWorker = () => {
          return currentWorker;
        };
      }
      const entry = await api.applyPlugins({
        key: "modifyEntry",
        initialValue: {
          umi: (0, import_path.join)(api.paths.absTmpPath, "umi.ts")
        }
      });
      const shouldUseAutomaticRuntime = ((_c = api.appData.react) == null ? void 0 : _c.version) && import_utils.semver.gte(api.appData.react.version, "17.0.0");
      let opts = {
        react: {
          runtime: shouldUseAutomaticRuntime ? "automatic" : "classic"
        },
        config: {
          outputPath: api.userConfig.outputPath || "dist",
          ...api.config
        },
        pkg: api.pkg,
        cwd: api.cwd,
        rootDir: process.cwd(),
        entry,
        port: api.appData.port,
        host: api.appData.host,
        ip: api.appData.ip,
        ...enableVite ? { modifyViteConfig } : { babelPreset, chainWebpack, modifyWebpackConfig },
        beforeBabelPlugins,
        beforeBabelPresets,
        extraBabelPlugins,
        extraBabelPresets,
        beforeMiddlewares: [].concat([
          ...beforeMiddlewares
        ]),
        // vite 模式使用 ./plugins/ViteHtmlPlugin.ts 处理
        afterMiddlewares: enableVite ? [middlewares.concat(import_faviconMiddleware.faviconMiddleware)] : middlewares.concat([
          ...api.config.mpa ? [] : [(0, import_createRouteMiddleware.createRouteMiddleware)({ api })],
          // 放置 favicon 在 webpack middleware 之后，兼容 public 目录下有 favicon.ico 的场景
          // ref: https://github.com/umijs/umi/issues/8024
          import_faviconMiddleware.faviconMiddleware
        ]),
        onDevCompileDone(opts2) {
          debouncedPrintMemoryUsage;
          api.appData.bundleStatus.done = true;
          api.applyPlugins({
            key: "onDevCompileDone",
            args: opts2
          });
        },
        onProgress(opts2) {
          api.appData.bundleStatus.progresses = opts2.progresses;
        },
        onMFSUProgress(opts2) {
          api.appData.mfsuBundleStatus = {
            ...api.appData.mfsuBundleStatus,
            ...opts2
          };
        },
        mfsuWithESBuild: (_d = api.config.mfsu) == null ? void 0 : _d.esbuild,
        mfsuStrategy: (_e = api.config.mfsu) == null ? void 0 : _e.strategy,
        cache: {
          buildDependencies: [
            api.pkgPath,
            api.service.configManager.mainConfigFile || ""
          ].filter(Boolean)
        },
        srcCodeCache,
        mfsuInclude: import_utils.lodash.union([
          ...MFSU_EAGER_DEFAULT_INCLUDE,
          ...((_f = api.config.mfsu) == null ? void 0 : _f.include) || []
        ]),
        startBuildWorker,
        onBeforeMiddleware(app) {
          api.applyPlugins({
            key: "onBeforeMiddleware",
            args: {
              app
            }
          });
        }
      };
      opts = await api.applyPlugins({
        key: "modifyUniBundlerOpts",
        initialValue: opts,
        args: {
          bundler: api.appData.bundler
        }
      });
      await api.applyPlugins({
        key: "onBeforeCompiler",
        args: { compiler: api.appData.bundler, opts }
      });
      const bundler = await api.applyPlugins({
        key: "modifyUniBundler",
        args: {
          bundler: api.appData.bundler,
          opts
        }
      });
      await bundler.dev(opts);
    }
  });
  api.modifyAppData(async (memo) => {
    memo.port = await import_utils.portfinder.getPortPromise({
      port: parseInt(String(process.env.PORT || import_constants.DEFAULT_PORT), 10)
    });
    memo.host = process.env.HOST || import_constants.DEFAULT_HOST;
    memo.ip = import_utils.address.ip();
    return memo;
  });
  api.registerMethod({
    name: "restartServer",
    fn() {
      var _a;
      import_utils.logger.info(`Restart dev server with port ${api.appData.port}...`);
      (0, import_watch.unwatch)();
      (_a = process.send) == null ? void 0 : _a.call(process, {
        type: "RESTART",
        payload: {
          port: api.appData.port
        }
      });
    }
  });
  api.modifyViteConfig((viteConfig) => {
    var _a;
    (_a = viteConfig.plugins) == null ? void 0 : _a.push((0, import_ViteHtmlPlugin.default)(api));
    return viteConfig;
  });
};
async function isPortAvailable(port) {
  const foundPort = await import_utils.portfinder.getPortPromise({
    port
  });
  return foundPort === port;
}
