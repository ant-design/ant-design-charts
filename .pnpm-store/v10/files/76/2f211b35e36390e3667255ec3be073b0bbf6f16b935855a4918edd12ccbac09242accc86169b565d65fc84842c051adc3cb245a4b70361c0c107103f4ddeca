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

// src/features/compile/index.ts
var compile_exports = {};
__export(compile_exports, {
  default: () => compile_default,
  techStacks: () => techStacks
});
module.exports = __toCommonJS(compile_exports);
var import_react = __toESM(require("../../techStacks/react"));
var import_utils = require("../../utils");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_assets = require("../assets");
var import_makoHooks = require("./makoHooks");
var import_utils2 = require("./utils");
var techStacks = [];
var compile_default = (api) => {
  api.describe({ key: "dumi:compile" });
  api.register({
    key: "registerTechStack",
    stage: Infinity,
    fn: () => new import_react.default()
  });
  api.modifyConfig({
    stage: Infinity,
    fn: (memo) => {
      if (memo.babelLoaderCustomize) {
        api.logger.warn(
          "Config `babelLoaderCustomize` will be override by dumi, please report issue if you need it."
        );
      }
      memo.babelLoaderCustomize = require.resolve("./babelLoaderCustomize");
      const cacheDirPath = api.userConfig.cacheDirectoryPath || memo.cacheDirectoryPath;
      if (cacheDirPath)
        (0, import_utils._setFSCacheDir)(import_path.default.join(cacheDirPath, "dumi"));
      const SEARCH_WORKER_CODE = import_fs.default.readFileSync(
        import_path.default.resolve(
          __dirname,
          "../../../compiled/_internal/searchWorker.min.js"
        ),
        "utf-8"
      );
      memo.define ?? (memo.define = {});
      memo.define.SEARCH_WORKER_CODE = SEARCH_WORKER_CODE;
      return memo;
    }
  });
  api.onGenerateFiles({
    // make sure called before `addRuntimePlugin` key
    // why not use `before: 'tmpFiles'`?
    // because @umijs/preset-umi/.../tmpFiles has two `onGenerateFiles` key
    // and `before` only insert before the last one
    stage: -Infinity,
    async fn() {
      techStacks.push(
        ...await api.applyPlugins({
          key: "registerTechStack",
          type: api.ApplyPluginsType.add
        })
      );
    }
  });
  api.addRuntimePlugin(
    () => techStacks.reduce((acc, techStack) => {
      var _a;
      if ((_a = techStack.runtimeOpts) == null ? void 0 : _a.pluginPath) {
        acc.push(techStack.runtimeOpts.pluginPath);
      }
      return acc;
    }, [])
  );
  api.modifyConfig((memo) => {
    memo.mfsu = false;
    return memo;
  });
  api.chainWebpack(async (memo) => {
    const babelInUmi = memo.module.rule("src").use("babel-loader").entries();
    if (!babelInUmi)
      return memo;
    const loaderPath = require.resolve("../../loaders/markdown");
    const loaderBaseOpts = {
      techStacks,
      cwd: api.cwd,
      alias: api.config.alias,
      resolve: api.config.resolve,
      extraRemarkPlugins: api.config.extraRemarkPlugins,
      extraRehypePlugins: api.config.extraRehypePlugins,
      routes: api.appData.routes,
      locales: api.config.locales,
      pkg: api.pkg,
      disableLiveDemo: (0, import_utils2.shouldDisabledLiveDemo)(api)
    };
    memo.module.rule("watch-parent").pre().resourceQuery(/watch=parent/).use("null-loader").loader(require.resolve("../../loaders/null")).end();
    const mdRule = memo.module.rule("dumi-md").type("javascript/auto").test(/\.md$/);
    ["frontmatter", "text", "demo-index"].forEach((type) => {
      mdRule.oneOf(`md-${type}`).resourceQuery(new RegExp(`${type}$`)).use(`md-${type}-loader`).loader(loaderPath).options({
        ...loaderBaseOpts,
        mode: type
      });
    });
    mdRule.oneOf("md-demo").resourceQuery(/demo$/).use("babel-loader").loader(babelInUmi.loader).options(babelInUmi.options).end().use("md-demo-loader").loader(loaderPath).options({
      ...loaderBaseOpts,
      mode: "demo"
    }).end().end();
    mdRule.oneOf("md").use("babel-loader").loader(babelInUmi.loader).options(babelInUmi.options).end().use("md-loader").loader(loaderPath).options(
      api.isPluginEnable("assets") || api.isPluginEnable("exportStatic") ? {
        ...loaderBaseOpts,
        builtins: api.service.themeData.builtins,
        onResolveDemos(demos) {
          const assets = demos.reduce((ret, demo) => {
            if ("asset" in demo)
              ret.push(demo.asset);
            return ret;
          }, []);
          (0, import_assets.addExampleAssets)(assets);
        },
        onResolveAtomMeta: import_assets.addAtomMeta
      } : {
        ...loaderBaseOpts,
        builtins: api.service.themeData.builtins
      }
    );
    memo.module.rule("dumi-page").type("javascript/auto").test(/\.(j|t)sx?$/).resourceQuery(/frontmatter$/).use("page-meta-loader").loader(require.resolve("../../loaders/page"));
    memo.module.rule("dumi-demo").type("javascript/auto").test(/\..+$/).enforce("pre").resourceQuery(/techStack/).use("demo-loader").loader(require.resolve("../../loaders/demo")).options({ techStacks, cwd: api.cwd });
    memo.module.rule("dumi-raw").type("javascript/auto").post().resourceQuery(/dumi-raw/).use("raw-loader").loader(require.resolve("raw-loader")).end().use("pre-raw-loader").loader(require.resolve("../../loaders/pre-raw"));
    if (api.env === "development" && memo.plugins.has("fastRefresh")) {
      memo.plugin("fastRefresh").tap(([params]) => [
        {
          ...params,
          include: /\.([cm]js|[jt]sx?|flow|md)$/i
        }
      ]);
    }
    return memo;
  });
  api.modifyConfig({
    before: "mako",
    fn: (memo) => {
      var _a;
      if (memo.mako || ((_a = memo.ssr) == null ? void 0 : _a.builder) === "mako") {
        memo.mako ?? (memo.mako = {});
        memo.mako.plugins = [
          {
            load: (0, import_makoHooks.getLoadHook)(api)
          }
        ];
      }
      return memo;
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  techStacks
});
