var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/commands/dev/depBuildWorker/depBuildWorker.ts
var import_bundler_webpack = require("@umijs/bundler-webpack");
var import_constants = require("@umijs/bundler-webpack/dist/constants");
var import_types = require("@umijs/bundler-webpack/dist/types");
var import_mfsu = require("@umijs/mfsu");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_worker_threads = require("worker_threads");
var import_depBuilder = require("./depBuilder");
var import_getConfig = require("./getConfig");
if (import_worker_threads.isMainThread) {
  throw Error("MFSU-eager builder can only be called in a worker thread");
}
(0, import_utils.setNoDeprecation)();
setupWorkerEnv();
var bundlerWebpackPath = (0, import_path.dirname)(require.resolve("@umijs/bundler-webpack"));
var bufferedRequest = [];
async function start() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let builder = null;
  function build(deps) {
    import_utils.logger.info("[MFSU][eager] build worker start to build");
    return builder.build({ deps }).catch((e) => {
      import_utils.logger.debug("[MFSU][eager][worker] build worker failed", e);
      import_worker_threads.parentPort.postMessage({ done: { withError: e } });
    });
  }
  function scheduleBuild() {
    if (builder && !builder.isBuilding) {
      const buildReq = bufferedRequest.shift();
      if (buildReq) {
        build(buildReq).finally(() => {
          scheduleBuild();
        });
      }
    }
  }
  import_worker_threads.parentPort.on("message", (buildReq) => {
    bufferedRequest.push(buildReq);
    scheduleBuild();
  });
  const start2 = Date.now();
  const opts = await (0, import_getConfig.getDevConfig)();
  const cacheDirectoryPath = (0, import_path.resolve)(
    opts.rootDir || opts.cwd,
    opts.config.cacheDirectoryPath || "node_modules/.cache"
  );
  const depConfig = await (0, import_bundler_webpack.getConfig)({
    cwd: opts.cwd,
    rootDir: opts.rootDir,
    env: import_types.Env.development,
    entry: opts.entry,
    userConfig: opts.config,
    disableCopy: true,
    hash: true,
    staticPathPrefix: import_mfsu.MF_DEP_PREFIX,
    name: import_constants.MFSU_NAME,
    chainWebpack: (_a = opts.config.mfsu) == null ? void 0 : _a.chainWebpack,
    extraBabelIncludes: opts.config.extraBabelIncludes,
    cache: {
      buildDependencies: (_b = opts.cache) == null ? void 0 : _b.buildDependencies,
      cacheDirectory: (0, import_path.join)(cacheDirectoryPath, "mfsu-deps")
    },
    pkg: opts.pkg
  });
  (_c = depConfig.resolve).alias || (_c.alias = {});
  ["@umijs/utils/compiled/strip-ansi", "react-error-overlay"].forEach((dep) => {
    depConfig.resolve.alias[dep] = require.resolve(dep, {
      paths: [bundlerWebpackPath]
    });
  });
  const depEsBuildConfig = {
    extraPostCSSPlugins: ((_d = opts.config) == null ? void 0 : _d.extraPostCSSPlugins) || []
  };
  const tmpBase = ((_e = opts.config.mfsu) == null ? void 0 : _e.cacheDirectory) || (0, import_path.join)(cacheDirectoryPath, "mfsu");
  const externals = makeArray(opts.config.externals || []);
  builder = new import_depBuilder.DepBuilderInWorker({
    depConfig,
    cwd: opts.cwd,
    tmpBase,
    mfName: ((_f = opts.config.mfsu) == null ? void 0 : _f.mfName) || import_mfsu.DEFAULT_MF_NAME,
    shared: ((_g = opts.config.mfsu) == null ? void 0 : _g.shared) || {},
    buildDepWithESBuild: !!((_h = opts.config.mfsu) == null ? void 0 : _h.esbuild),
    depEsBuildConfig,
    externals
  });
  import_utils.logger.info(`[MFSU][eager] worker init, takes ${Date.now() - start2}ms`);
  scheduleBuild();
}
start().catch((e) => {
  import_utils.logger.error("[MFSU][eager] build worker start failed", e);
});
function makeArray(a) {
  if (Array.isArray(a))
    return a;
  return [a];
}
function setupWorkerEnv() {
  process.env.DID_YOU_KNOW = "none";
  process.env.IS_UMI_BUILD_WORKER = "true";
}
