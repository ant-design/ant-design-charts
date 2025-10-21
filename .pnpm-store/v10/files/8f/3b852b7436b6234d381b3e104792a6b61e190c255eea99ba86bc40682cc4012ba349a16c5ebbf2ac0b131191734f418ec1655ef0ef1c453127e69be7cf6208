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

// src/features/appData/appData.ts
var appData_exports = {};
__export(appData_exports, {
  default: () => appData_default
});
module.exports = __toCommonJS(appData_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_ini = require("../../../compiled/ini");
var import_os_locale = require("../../../compiled/os-locale");
var import_watch = require("../../commands/dev/watch");
var import_serializeAppData = require("../../utils/serializeAppData");
var import_overrides = require("../overrides/overrides");
var appData_default = (api) => {
  const routesApi = (0, import_utils.importLazy)(
    require.resolve("../tmpFiles/routes")
  );
  const bundlerUtils = (0, import_utils.importLazy)(
    require.resolve("@umijs/bundler-utils")
  );
  api.modifyAppData(async (memo) => {
    var _a;
    memo.routes = await routesApi.getRoutes({
      api
    });
    memo.apiRoutes = await routesApi.getApiRoutes({
      api
    });
    memo.hasSrcDir = api.paths.absSrcPath.endsWith("/src");
    memo.npmClient = api.userConfig.npmClient || (0, import_utils.getNpmClient)({ cwd: api.cwd });
    memo.umi = {
      version: require("../../../package.json").version,
      name: "Umi",
      importSource: "umi",
      cliName: "umi"
    };
    memo.bundleStatus = {
      done: false
    };
    if (api.config.mfsu !== false) {
      memo.mfsuBundleStatus = {
        done: false
      };
    }
    memo.react = {
      version: require((0, import_path.join)(api.config.alias.react, "package.json")).version,
      path: api.config.alias.react
    };
    memo["react-dom"] = {
      version: require((0, import_path.join)(api.config.alias["react-dom"], "package.json")).version,
      path: api.config.alias["react-dom"]
    };
    memo.appJS = await getAppJsInfo();
    memo.locale = await (0, import_os_locale.osLocale)();
    memo.vite = api.config.vite ? {} : void 0;
    const { globalCSS, globalJS, overridesCSS, globalLoading } = getGlobalFiles();
    memo.globalCSS = globalCSS;
    memo.globalJS = globalJS;
    memo.overridesCSS = overridesCSS;
    memo.globalLoading = globalLoading;
    memo.bundler = "webpack";
    const gitDir = findGitDir(api.paths.cwd);
    if (gitDir) {
      const git = {};
      const configPath = (0, import_path.join)(gitDir, "config");
      if ((0, import_fs.existsSync)(configPath)) {
        const config = (0, import_fs.readFileSync)(configPath, "utf-8");
        const url = (_a = (0, import_ini.parse)(config)['remote "origin"']) == null ? void 0 : _a.url;
        if (url) {
          git.originUrl = url;
        }
      }
      memo.git = git;
    }
    memo.framework = "react";
    const tsPkg = tryLoadDepPkg({
      name: "typescript",
      from: api.cwd
    });
    const tslibPkg = tryLoadDepPkg({
      name: "tslib",
      from: api.cwd
    });
    memo.typescript = {
      tsVersion: tsPkg == null ? void 0 : tsPkg.version,
      tslibVersion: tslibPkg == null ? void 0 : tslibPkg.version
    };
    return memo;
  });
  api.register({
    key: "onGenerateFiles",
    async fn(args) {
      if (!args.isFirstTime) {
        api.appData.appJS = await getAppJsInfo();
        const { globalCSS, globalJS, overridesCSS, globalLoading } = getGlobalFiles();
        api.appData.globalCSS = globalCSS;
        api.appData.globalJS = globalJS;
        api.appData.overridesCSS = overridesCSS;
        api.appData.globalLoading = globalLoading;
      }
      api.writeTmpFile({
        path: "appData.json",
        content: (0, import_serializeAppData.serializeAppData)(api.appData),
        noPluginDir: true
      });
    },
    stage: Number.NEGATIVE_INFINITY
  });
  api.register({
    key: "updateAppDataDeps",
    async fn() {
      const { createResolver, scan } = await import("../../libs/scan.js");
      const resolver = createResolver({
        alias: api.config.alias
      });
      api.appData.deps = await scan({
        entry: (0, import_path.join)(api.paths.absTmpPath, "umi.ts"),
        externals: api.config.externals,
        resolver
      });
      if (api.appData.deps["react"]) {
        api.appData.deps["react"].version = api.appData.react.version;
      }
      api.appData.deps["react-dom"] = {
        version: api.appData.react.version,
        matches: ["react-dom"],
        subpaths: []
      };
    }
  });
  async function getAppJsInfo() {
    for (const path of (0, import_watch.expandJSPaths)((0, import_path.join)(api.paths.absSrcPath, "app"))) {
      if ((0, import_fs.existsSync)(path)) {
        const [_, exports] = await bundlerUtils.parseModule({
          path,
          content: (0, import_fs.readFileSync)(path, "utf-8")
        });
        return {
          path,
          exports
        };
      }
    }
    return null;
  }
  function getGlobalFiles() {
    const absSrcPath = api.paths.absSrcPath;
    const existsAndPushFile = (memo, file) => {
      if ((0, import_fs.existsSync)(file)) {
        memo.push(file);
      }
      return memo;
    };
    const globalCSS = (0, import_watch.expandCSSPaths)((0, import_path.join)(absSrcPath, "global")).reduce(existsAndPushFile, []);
    const globalJS = (0, import_watch.expandJSPaths)((0, import_path.join)(absSrcPath, "global")).reduce(
      existsAndPushFile,
      []
    );
    const loadingFile = (0, import_watch.expandJSPaths)((0, import_path.join)(absSrcPath, "loading")).find(
      import_fs.existsSync
    );
    const globalLoading = loadingFile ? (0, import_utils.winPath)(loadingFile) : void 0;
    const overridesCSS = [(0, import_overrides.getOverridesCSS)(api.paths.absSrcPath)].filter(
      Boolean
    );
    return {
      globalCSS,
      globalJS,
      overridesCSS,
      globalLoading
    };
  }
};
function findGitDir(dir) {
  if (dir === (0, import_path.resolve)("/")) {
    return null;
  }
  if ((0, import_fs.existsSync)((0, import_path.join)(dir, ".git"))) {
    return (0, import_path.join)(dir, ".git");
  }
  const parent = findGitDir((0, import_path.join)(dir, ".."));
  if (parent) {
    return parent;
  }
  return null;
}
function tryLoadDepPkg(opts) {
  const { name, from } = opts;
  try {
    return require(require.resolve(`${name}/package.json`, {
      paths: [from]
    }));
  } catch {
  }
}
