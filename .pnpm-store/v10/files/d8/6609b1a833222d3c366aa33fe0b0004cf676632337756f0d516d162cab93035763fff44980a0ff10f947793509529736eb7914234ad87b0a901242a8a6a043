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

// src/commands/mfsu/util.ts
var util_exports = {};
__export(util_exports, {
  EagerUtil: () => EagerUtil,
  MFSUUtilBase: () => MFSUUtilBase,
  NormalUtil: () => NormalUtil
});
module.exports = __toCommonJS(util_exports);
var import_bundler_webpack = require("@umijs/bundler-webpack");
var import_webpack = __toESM(require("@umijs/bundler-webpack/compiled/webpack"));
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_LazySourceCodeCache = require("../../libs/folderCache/LazySourceCodeCache");
var import_projectFileList = require("../../utils/projectFileList");
var import_getBabelOpts = require("../dev/getBabelOpts");
var MFSUUtilBase = class {
  constructor(api) {
    this.api = api;
    var _a, _b;
    const cacheBase = api.config.cacheDirectoryPath || (0, import_path.join)(api.cwd, "node_modules/.cache");
    this.mfsuCacheBase = ((_b = (_a = api.config) == null ? void 0 : _a.mfsu) == null ? void 0 : _b.cacheDirectoryPath) || (0, import_path.join)(cacheBase, "mfsu");
    this.cliName = this.api.appData.umi.cliName;
  }
  async prepare() {
    var _a, _b, _c, _d;
    const api = this.api;
    import_utils.logger.info(import_utils.chalk.cyan.bold(`Umi v${api.appData.umi.version}`));
    import_utils.rimraf.sync(api.paths.absTmpPath);
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
    let srcCodeCache;
    let startBuildWorker = () => {
    };
    if (((_a = api.config.mfsu) == null ? void 0 : _a.strategy) === "eager") {
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
      const fileList = (0, import_projectFileList.getProjectFileList)(api);
      await srcCodeCache.init(fileList);
    }
    const entry = await api.applyPlugins({
      key: "modifyEntry",
      initialValue: {
        umi: (0, import_path.join)(api.paths.absTmpPath, "umi.ts")
      }
    });
    const opts = {
      config: api.config,
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
      beforeMiddlewares: [],
      // vite 模式使用 ./plugins/ViteHtmlPlugin.ts 处理
      afterMiddlewares: [],
      onDevCompileDone(opts2) {
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
      mfsuWithESBuild: (_b = api.config.mfsu) == null ? void 0 : _b.esbuild,
      mfsuStrategy: (_c = api.config.mfsu) == null ? void 0 : _c.strategy,
      cache: {
        buildDependencies: [
          api.pkgPath,
          api.service.configManager.mainConfigFile || ""
        ].filter(Boolean)
      },
      srcCodeCache,
      mfsuInclude: import_utils.lodash.union([
        ...MFSU_EAGER_DEFAULT_INCLUDE,
        ...((_d = api.config.mfsu) == null ? void 0 : _d.include) || []
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
    await api.applyPlugins({
      key: "onBeforeCompiler",
      args: { compiler: "webpack", opts }
    });
    return opts;
  }
  removeCacheJSON() {
    return import_utils.fsExtra.removeSync(this.jsonFilePath());
  }
  clearAllCache() {
    return import_utils.fsExtra.removeSync(this.mfsuCacheBase);
  }
  printDeps(deps) {
    const depsList = Object.keys(deps).map((key) => {
      const version = deps[key].version;
      return { dep: shortDep(key, this.api.cwd), version };
    }).sort((a, b) => b.dep.localeCompare(a.dep));
    for (const { dep, version } of depsList) {
      console.log(`${dep}@${version}`);
    }
  }
};
var EagerUtil = class extends MFSUUtilBase {
  jsonFilePath() {
    return (0, import_path.join)(this.mfsuCacheBase, "MFSU_CACHE_v4.json");
  }
  getCacheJSON() {
    const jsonFile = (0, import_path.join)(this.mfsuCacheBase, "MFSU_CACHE_v4.json");
    if (import_utils.fsExtra.existsSync(jsonFile)) {
      return require(jsonFile);
    } else {
      this.api.logger.error(
        `MFSU_CACHE_v4.json not found, please run \`${this.cliName} mfsu build\` or \`${this.cliName} dev\` first`
      );
    }
  }
  async build() {
    const opts = await this.prepare();
    const { mfsu } = await (0, import_bundler_webpack.setup)(opts);
    await mfsu.buildDeps({ useWorker: false });
    this.api.logger.info("[MFSU][eager] build success");
  }
  listDeps() {
    const cacheJSON = this.getCacheJSON();
    const deps = cacheJSON["dep"] || {};
    this.printDeps(deps);
  }
};
function shortDep(p, base) {
  if ((0, import_path.isAbsolute)(p)) {
    const i = p.lastIndexOf("node_modules");
    if (i > -1) {
      return p.slice(i + "node_modules".length + 1);
    } else {
      return (0, import_path.relative)(base, p);
    }
  } else {
    return p;
  }
}
var NormalUtil = class extends MFSUUtilBase {
  jsonFilePath() {
    return (0, import_path.join)(this.mfsuCacheBase, "MFSU_CACHE.json");
  }
  getCacheJSON() {
    const jsonFile = (0, import_path.join)(this.mfsuCacheBase, "MFSU_CACHE.json");
    if (import_utils.fsExtra.existsSync(jsonFile)) {
      return require(jsonFile);
    } else {
      this.api.logger.error(
        `MFSU_CACHE_v4.json not found, please run \`${this.cliName} dev\` first`
      );
    }
  }
  listDeps() {
    const cacheJSON = this.getCacheJSON();
    const deps = import_utils.lodash.get(cacheJSON, "moduleGraph.depModules", {});
    this.printDeps(deps);
  }
  async build(force) {
    if (force) {
      await this.normalBuild();
    } else {
      this.api.logger.info(
        `
  mfsu with normal strategy not support build command,  please use \`${this.cliName} dev\``
      );
    }
  }
  async normalBuild() {
    const opts = await this.prepare();
    const { mfsu, webpackConfig } = await (0, import_bundler_webpack.setup)(opts);
    webpackConfig.watch = false;
    mfsu.depBuilder.isBuilding = true;
    await new Promise((resolve, reject) => {
      const compiler = (0, import_webpack.default)(webpackConfig);
      compiler.run((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
        compiler.close(() => {
        });
      });
    });
    mfsu.depBuilder.isBuilding = false;
    mfsu.buildDepsAgain = false;
    await (mfsu == null ? void 0 : mfsu.buildDeps({ useWorker: false }));
    this.api.logger.info("[MFSU] build success");
    return;
  }
};
var MFSU_EAGER_DEFAULT_INCLUDE = [
  "react",
  "react-error-overlay",
  "react/jsx-dev-runtime",
  "@umijs/utils/compiled/strip-ansi"
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EagerUtil,
  MFSUUtilBase,
  NormalUtil
});
