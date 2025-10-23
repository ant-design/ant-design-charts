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

// src/features/compile/makoHooks.ts
var makoHooks_exports = {};
__export(makoHooks_exports, {
  getLoadHook: () => getLoadHook
});
module.exports = __toCommonJS(makoHooks_exports);
var import_fs = __toESM(require("fs"));
var import_querystring = __toESM(require("querystring"));
var import_url = __toESM(require("url"));
var import__ = require(".");
var import_utils = require("../../utils");
var import_assets = require("../assets");
var import_utils2 = require("./utils");
var modeMap = {
  "demo-index": "demo-index",
  frontmatter: "frontmatter",
  text: "text",
  demo: "demo"
};
var customRunLoaders = async (options) => {
  const result = await (0, import_utils.runLoaders)(options);
  return {
    content: result.result[0],
    type: options.type ?? "jsx"
  };
};
var mdLoaderPath = require.resolve("../../loaders/markdown");
var getLoadHook = (api) => {
  const disableLiveDemo = (0, import_utils2.shouldDisabledLiveDemo)(api);
  return async (filePath) => {
    var _a, _b, _c, _d;
    const loaderBaseOpts = {
      techStacks: import__.techStacks,
      cwd: api.cwd,
      alias: api.config.alias,
      resolve: api.config.resolve,
      extraRemarkPlugins: api.config.extraRemarkPlugins,
      extraRehypePlugins: api.config.extraRehypePlugins,
      routes: api.appData.routes,
      locales: api.config.locales || [],
      pkg: api.pkg,
      disableLiveDemo
    };
    const requestUrl = import_url.default.parse(filePath);
    const query = import_querystring.default.parse(requestUrl.query);
    if ((_a = requestUrl.query) == null ? void 0 : _a.includes("watch=parent")) {
      return {
        content: "",
        type: "js"
      };
    }
    if (/\..+$/.test(filePath)) {
      if ((_b = requestUrl.query) == null ? void 0 : _b.includes("techStack")) {
        return await customRunLoaders({
          resource: filePath,
          loaders: [
            {
              loader: require.resolve("../../loaders/demo"),
              options: { techStacks: import__.techStacks, cwd: api.cwd }
            }
          ]
        });
      }
    }
    if (/\.(j|t)sx?\?type=frontmatter$/.test(filePath)) {
      return await customRunLoaders({
        resource: filePath,
        loaders: [
          {
            loader: require.resolve("../../loaders/page"),
            options: {}
          }
        ]
      });
    }
    if ((_c = requestUrl.pathname) == null ? void 0 : _c.endsWith(".md")) {
      let options;
      const builtins = api.service.themeData.builtins;
      const baseOptions = { ...loaderBaseOpts };
      const resolveOptions = (queryType) => {
        if (queryType in modeMap) {
          return { ...baseOptions, mode: modeMap[queryType] };
        }
        const additionalOpts = api.isPluginEnable("assets") || api.isPluginEnable("exportStatic") ? {
          builtins,
          onResolveDemos(demos) {
            const assets = demos.reduce(
              (acc, demo) => "asset" in demo ? [...acc, demo.asset] : acc,
              []
            );
            (0, import_assets.addExampleAssets)(assets);
          },
          onResolveAtomMeta: import_assets.addAtomMeta
        } : { builtins };
        return { ...baseOptions, ...additionalOpts };
      };
      options = resolveOptions(query.type);
      return await customRunLoaders({
        resource: filePath,
        loaders: [
          {
            loader: mdLoaderPath,
            options
          }
        ],
        context: {},
        readResource: import_fs.default.readFile.bind(import_fs.default)
      });
    }
    if ((_d = requestUrl.query) == null ? void 0 : _d.includes("dumi-raw")) {
      return await customRunLoaders({
        resource: filePath,
        loaders: [
          {
            loader: require.resolve("../../loaders/post-raw"),
            options: {}
          },
          {
            loader: require.resolve("raw-loader"),
            options: {}
          },
          {
            loader: require.resolve("../../loaders/pre-raw"),
            options: {}
          }
        ]
      });
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLoadHook
});
