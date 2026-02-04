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

// src/config/transformer/react.ts
var react_exports = {};
__export(react_exports, {
  default: () => react_default
});
module.exports = __toCommonJS(react_exports);
var import_plugin_react = __toESM(require("@vitejs/plugin-react"));
var react_default = function react(userConfig) {
  var _a;
  const config = { plugins: [] };
  if (!userConfig.vue) {
    (_a = config.plugins) == null ? void 0 : _a.push(
      // pre-compiled rollup type is different with installed rollup type
      // so this plugin type is not compatible with config.plugins
      // @ts-ignore
      (0, import_plugin_react.default)({
        // jsxRuntime: 'automatic',
        babel: {
          plugins: userConfig.extraBabelPlugins,
          presets: userConfig.extraBabelPresets
        },
        ...(userConfig == null ? void 0 : userConfig.react) || {}
      })
    );
  }
  return config;
};
