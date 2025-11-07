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

// src/features/theme/loader.ts
var loader_exports = {};
__export(loader_exports, {
  default: () => loader_default
});
module.exports = __toCommonJS(loader_exports);
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
function getComponentMapFromDir(globExp, dir) {
  return import_plugin_utils.glob.sync(globExp, { cwd: dir }).reduce((ret, file) => {
    const specifier = import_path.default.basename(
      (0, import_plugin_utils.winPath)(file).replace(/(\/index)?\.[a-z]+$/, "")
    );
    if (/^[A-Z\d]/.test(specifier)) {
      ret[specifier] = {
        specifier,
        source: (0, import_plugin_utils.winPath)(import_path.default.join(dir, file))
      };
    }
    return ret;
  }, {});
}
function getLocaleMapFromDir(globExp, dir) {
  return import_plugin_utils.glob.sync(globExp, { cwd: dir }).reduce((ret, file) => {
    const locale = import_path.default.basename(file.replace(/\.json$/, ""));
    ret[locale] = require(import_path.default.join(dir, file));
    return ret;
  }, {});
}
var loader_default = (dir) => {
  const plugin = import_plugin_utils.glob.sync("{plugin/index.{js,ts},plugin.{js,ts}}", {
    cwd: dir
  })[0];
  return {
    name: import_path.default.basename(dir),
    path: dir,
    locales: getLocaleMapFromDir("locales/*.json", dir),
    builtins: getComponentMapFromDir(
      "builtins/{!(*.d),*/index}.{js,jsx,ts,tsx}",
      dir
    ),
    slots: getComponentMapFromDir(
      "slots/{!(*.d),*/index}.{js,jsx,ts,tsx}",
      dir
    ),
    layouts: getComponentMapFromDir(
      "layouts/{GlobalLayout,DocLayout,DemoLayout}{.,/index.}{js,jsx,ts,tsx}",
      dir
    ),
    ...plugin ? { plugin: import_path.default.join(dir, plugin) } : {}
  };
};
