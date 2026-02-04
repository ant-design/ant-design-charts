var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/config/transformer/target.ts
var target_exports = {};
__export(target_exports, {
  default: () => target_default
});
module.exports = __toCommonJS(target_exports);
var import_plugin_legacy = __toESM(require("../../../compiled/@vitejs/plugin-legacy"));
var lite = __toESM(require("../../../compiled/caniuse-lite"));
var import_css = require("./css");
var target_default = function target(userConfig) {
  const config = { build: {}, plugins: [] };
  const { features, feature: unpackFeature } = lite;
  const { stats } = unpackFeature(features["es6-module"]);
  function isLegacyBrowser(targets) {
    var _a;
    for (const browserName of Object.keys(targets)) {
      const version = targets[browserName];
      if (version && ((_a = stats[browserName]) == null ? void 0 : _a[version]) === "n") {
        return true;
      }
    }
    return false;
  }
  const isLegacy = isLegacyBrowser(userConfig.targets || {});
  if (typeof userConfig.targets === "object" && !isLegacy) {
    config.build.target = Object.entries(userConfig.targets).filter(([name]) => {
      return ["chrome", "edge", "firefox", "node", "safari"].includes(name);
    }).map(([name, ver]) => `${name}${ver}`);
  }
  if (userConfig.targets && isLegacy) {
    const legacyOpts = {
      targets: (0, import_css.getBrowserlist)(userConfig.targets),
      // 需要有值 否则无法生成 systemjs
      polyfills: ["es.promise.finally"],
      ignoreBrowserslistConfig: true,
      ...userConfig.viteLegacy
    };
    config.plugins.push((0, import_plugin_legacy.default)(legacyOpts));
  }
  return config;
};
