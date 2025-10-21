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

// src/commands/dev/depBuildWorker/depBuilder.ts
var depBuilder_exports = {};
__export(depBuilder_exports, {
  DepBuilderInWorker: () => DepBuilderInWorker
});
module.exports = __toCommonJS(depBuilder_exports);
var import_bundler_esbuild = require("@umijs/bundler-esbuild");
var import_webpack = __toESM(require("@umijs/bundler-webpack/compiled/webpack"));
var import_mfsu = require("@umijs/mfsu");
var import_dep = require("@umijs/mfsu/dist/dep/dep");
var import_getESBuildEntry = require("@umijs/mfsu/dist/depBuilder/getESBuildEntry");
var import_depChunkIdPrefixPlugin = require("@umijs/mfsu/dist/webpackPlugins/depChunkIdPrefixPlugin");
var import_stripSourceMapUrlPlugin = require("@umijs/mfsu/dist/webpackPlugins/stripSourceMapUrlPlugin");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_worker_threads = require("worker_threads");
var MF_ENTRY = "mf_index.js";
var DepBuilderInWorker = class {
  constructor(opts) {
    this.completeFns = [];
    this.isBuilding = false;
    this.opts = opts;
  }
  async buildWithWebpack(opts) {
    const config = this.getWebpackConfig({ deps: opts.deps });
    return new Promise((resolve, reject) => {
      const compiler = (0, import_webpack.default)(config);
      compiler.run((err, stats) => {
        if (err || (stats == null ? void 0 : stats.hasErrors())) {
          if (err) {
            reject(err);
          }
          if (stats) {
            const errorMsg = stats.toString("errors-only");
            reject(new Error(errorMsg));
          }
        } else {
          opts.onBuildComplete();
          resolve(stats);
        }
        compiler.close(() => {
        });
      });
    });
  }
  // TODO: support watch and rebuild
  async buildWithESBuild(opts) {
    var _a;
    const alias = { ...(_a = this.opts.depConfig.resolve) == null ? void 0 : _a.alias };
    const externals = this.opts.depConfig.externals;
    const entryContent = (0, import_getESBuildEntry.getESBuildEntry)({
      mfName: this.opts.mfName,
      deps: opts.deps
    });
    const ENTRY_FILE = "esbuild-entry.js";
    const tmpDir = this.opts.tmpBase;
    const entryPath = (0, import_path.join)(tmpDir, ENTRY_FILE);
    (0, import_fs.writeFileSync)(entryPath, entryContent, "utf-8");
    const date = (/* @__PURE__ */ new Date()).getTime();
    await (0, import_bundler_esbuild.build)({
      cwd: this.opts.cwd,
      entry: {
        [`${import_mfsu.MF_VA_PREFIX}remoteEntry`]: entryPath
      },
      config: {
        ...this.opts.depEsBuildConfig,
        outputPath: tmpDir,
        alias,
        externals
      },
      inlineStyle: true
    });
    import_utils.logger.event(
      `[mfsu] compiled with esbuild successfully in ${+/* @__PURE__ */ new Date() - date} ms`
    );
    opts.onBuildComplete();
  }
  async build(opts) {
    this.isBuilding = true;
    const onBuildComplete = (e = null) => {
      this.isBuilding = false;
      import_worker_threads.parentPort.postMessage({
        done: {
          withError: e
        }
      });
    };
    try {
      await this.writeMFFiles({ deps: opts.deps.map((d) => new import_dep.Dep(d)) });
      const newOpts = {
        ...opts,
        onBuildComplete
      };
      if (this.opts.buildDepWithESBuild) {
        await this.buildWithESBuild(newOpts);
      } else {
        await this.buildWithWebpack(newOpts);
      }
    } catch (e) {
      onBuildComplete(e);
      throw e;
    }
  }
  onBuildComplete(fn) {
    if (this.isBuilding) {
      this.completeFns.push(fn);
    } else {
      fn();
    }
  }
  async writeMFFiles(opts) {
    const tmpBase = this.opts.tmpBase;
    import_utils.fsExtra.mkdirpSync(tmpBase);
    for (const dep of opts.deps) {
      const content = await dep.buildExposeContent();
      (0, import_fs.writeFileSync)((0, import_path.join)(tmpBase, dep.filePath), content, "utf-8");
    }
    (0, import_fs.writeFileSync)((0, import_path.join)(tmpBase, MF_ENTRY), '"😛"', "utf-8");
  }
  getWebpackConfig(opts) {
    var _a, _b;
    const mfName = this.opts.mfName;
    const depConfig = import_utils.lodash.cloneDeep(this.opts.depConfig);
    depConfig.entry = (0, import_path.join)(this.opts.tmpBase, MF_ENTRY);
    depConfig.output.path = this.opts.tmpBase;
    depConfig.output.publicPath = "auto";
    depConfig.devtool = false;
    if ((_a = depConfig.output) == null ? void 0 : _a.library)
      delete depConfig.output.library;
    if ((_b = depConfig.output) == null ? void 0 : _b.libraryTarget)
      delete depConfig.output.libraryTarget;
    depConfig.optimization || (depConfig.optimization = {});
    depConfig.optimization.splitChunks = {
      chunks: (chunk) => {
        const hasShared = chunk.getModules().some((m) => {
          return m.type === "consume-shared-module" || m.type === "provide-module" || m.type === "provide-shared-module";
        });
        return !hasShared;
      },
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /.+/,
          name(_module, _chunks, cacheGroupKey) {
            return `${import_mfsu.MF_DEP_PREFIX}___${cacheGroupKey}`;
          }
        }
      }
    };
    depConfig.plugins = depConfig.plugins || [];
    depConfig.plugins.push(new import_depChunkIdPrefixPlugin.DepChunkIdPrefixPlugin());
    depConfig.plugins.push(
      // FIXME remove ignore
      // @ts-ignore
      new import_stripSourceMapUrlPlugin.StripSourceMapUrlPlugin({
        webpack: import_webpack.default
      })
    );
    depConfig.plugins.push(
      new import_webpack.default.ProgressPlugin((percent, msg) => {
        import_worker_threads.parentPort.postMessage({ progress: { percent, status: msg } });
      })
    );
    const exposes = opts.deps.reduce((memo, dep) => {
      memo[`./${dep.file}`] = (0, import_path.join)(this.opts.tmpBase, dep.filePath);
      return memo;
    }, {});
    depConfig.plugins.push(
      new import_webpack.default.container.ModuleFederationPlugin({
        library: {
          type: "global",
          name: mfName
        },
        name: mfName,
        filename: import_mfsu.REMOTE_FILE_FULL,
        exposes,
        shared: this.opts.shared || {}
      })
    );
    return depConfig;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DepBuilderInWorker
});
