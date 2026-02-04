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

// src/features/meta.ts
var meta_exports = {};
__export(meta_exports, {
  ATOMS_META_PATH: () => ATOMS_META_PATH,
  TABS_META_PATH: () => TABS_META_PATH,
  default: () => meta_default
});
module.exports = __toCommonJS(meta_exports);
var import_utils = require("../utils");
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_tabs = require("./tabs");
var TABS_META_PATH = "dumi/meta/tabs.ts";
var ATOMS_META_PATH = "dumi/meta/atoms.ts";
var meta_default = (api) => {
  const metaFiles = [];
  api.register({
    key: "modifyRoutes",
    // make sure it is called last
    stage: Infinity,
    fn: (routes) => {
      metaFiles.length = 0;
      Object.values(routes).forEach((route) => {
        if (!route.isLayout && !/\*|:/.test(route.path) && route.file && !(0, import_tabs.isTabRouteFile)(route.file)) {
          metaFiles.push({
            index: metaFiles.length,
            file: (0, import_plugin_utils.winPath)(route.file),
            id: route.id
          });
        }
      });
      return routes;
    }
  });
  api.onGenerateFiles(async () => {
    api.writeTmpFile({
      noPluginDir: true,
      path: ATOMS_META_PATH,
      content: "export const components = null;"
    });
    const parsedMetaFiles = await api.applyPlugins({
      type: api.ApplyPluginsType.modify,
      key: "dumi.modifyMetaFiles",
      initialValue: JSON.parse(JSON.stringify(metaFiles))
    });
    parsedMetaFiles.forEach((metaFile) => {
      metaFile.isMarkdown = metaFile.file.endsWith(".md");
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/meta/index.ts",
      tplPath: require.resolve("../templates/meta/index.ts.tpl"),
      context: {
        metaFiles: parsedMetaFiles,
        chunkName: function chunkName() {
          var _a;
          if (!("file" in this)) {
            return "";
          }
          return `/* webpackChunkName: "${(0, import_utils.generateMetaChunkName)(
            this.file,
            api.cwd,
            (_a = api.config.locales) == null ? void 0 : _a.map(({ id }) => id)
          )}" */`;
        }
      }
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/meta/runtime.ts",
      tplPath: require.resolve("../templates/meta/runtime.ts.tpl"),
      context: {
        deepmerge: (0, import_plugin_utils.winPath)(import_path.default.dirname(require.resolve("deepmerge/package"))),
        rc_util: (0, import_plugin_utils.winPath)(import_path.default.dirname(require.resolve("rc-util/package")))
      }
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/meta/exports.ts",
      tplPath: require.resolve("../templates/meta/exports.ts.tpl"),
      context: {}
    });
  });
  api.addRuntimePlugin(() => "@@/dumi/meta/runtime.ts");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ATOMS_META_PATH,
  TABS_META_PATH
});
