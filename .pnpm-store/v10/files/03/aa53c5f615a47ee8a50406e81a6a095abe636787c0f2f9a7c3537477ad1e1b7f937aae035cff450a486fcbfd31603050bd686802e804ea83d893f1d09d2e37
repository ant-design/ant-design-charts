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

// src/features/test/test.ts
var test_exports = {};
__export(test_exports, {
  default: () => test_default
});
module.exports = __toCommonJS(test_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_watch = require("../../commands/dev/watch");
var import_constants = require("../../constants");
var import_importsToStr = require("../tmpFiles/importsToStr");
var test_default = (api) => {
  api.describe({
    key: "test",
    config: {
      schema({ zod }) {
        return zod.object({});
      }
    },
    enableBy() {
      return api.appData.framework === "react";
    }
  });
  api.onGenerateFiles(async () => {
    const rendererPath = (0, import_utils.winPath)(
      await api.applyPlugins({
        key: "modifyRendererPath",
        initialValue: (0, import_path.dirname)(
          require.resolve("@umijs/renderer-react/package.json")
        )
      })
    );
    const loadingFile = (0, import_watch.expandJSPaths)(
      (0, import_path.join)(api.paths.absSrcPath, "loading")
    ).find(import_fs.existsSync);
    const globalLoading = loadingFile ? (0, import_utils.winPath)(loadingFile) : void 0;
    api.writeTmpFile({
      noPluginDir: true,
      path: "testBrowser.tsx",
      tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "TestBrowser.tpl"),
      context: {
        mountElementId: api.config.mountElementId,
        rendererPath,
        publicPath: api.config.publicPath,
        runtimePublicPath: api.config.runtimePublicPath ? "true" : "false",
        polyfillImports: (0, import_importsToStr.importsToStr)(
          await api.applyPlugins({
            key: "addPolyfillImports",
            initialValue: []
          })
        ).join("\n"),
        importsAhead: (0, import_importsToStr.importsToStr)(
          await api.applyPlugins({
            key: "addEntryImportsAhead",
            initialValue: [
              api.appData.globalCSS.length && {
                source: api.appData.globalCSS[0]
              },
              api.appData.globalJS.length && {
                source: api.appData.globalJS[0]
              }
            ].filter(Boolean)
          })
        ).join("\n"),
        imports: (0, import_importsToStr.importsToStr)(
          await api.applyPlugins({
            key: "addEntryImports",
            initialValue: []
          })
        ).join("\n"),
        basename: api.config.base,
        historyType: api.config.history.type,
        reactRouter5Compat: !!api.config.reactRouter5Compat,
        hydrate: !!api.config.ssr,
        loadingComponent: globalLoading
      }
    });
  });
};
