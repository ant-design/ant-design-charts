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

// src/preset.ts
var preset_exports = {};
__export(preset_exports, {
  default: () => preset_default
});
module.exports = __toCommonJS(preset_exports);
var preset_default = (api) => {
  api.describe({ key: "dumi-preset" });
  return {
    plugins: [
      require.resolve("./registerMethods"),
      require.resolve("./features/configPlugins"),
      require.resolve("./features/autoAlias"),
      require.resolve("./features/derivative"),
      require.resolve("./features/sideEffects"),
      require.resolve("./features/exports"),
      require.resolve("./features/compile"),
      require.resolve("./features/routes"),
      require.resolve("./features/meta"),
      require.resolve("./features/tabs"),
      require.resolve("./features/theme"),
      require.resolve("./features/locales"),
      require.resolve("./features/parser"),
      require.resolve("./features/assets"),
      require.resolve("./features/exportStatic"),
      require.resolve("./features/sitemap"),
      require.resolve("./features/html2sketch")
    ]
  };
};
