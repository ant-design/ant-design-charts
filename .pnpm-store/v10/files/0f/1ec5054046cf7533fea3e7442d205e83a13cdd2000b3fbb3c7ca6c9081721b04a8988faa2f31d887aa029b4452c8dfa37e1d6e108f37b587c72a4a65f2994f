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

// src/commands/dev/getBabelOpts.ts
var getBabelOpts_exports = {};
__export(getBabelOpts_exports, {
  getBabelOpts: () => getBabelOpts
});
module.exports = __toCommonJS(getBabelOpts_exports);
var import_utils = require("@umijs/utils");
async function getBabelOpts(opts) {
  const shouldUseAutomaticRuntime = import_utils.semver.gte(
    opts.api.appData.react.version,
    "17.0.0"
  );
  const babelPresetOpts = await opts.api.applyPlugins({
    key: "modifyBabelPresetOpts",
    initialValue: {
      presetEnv: {},
      presetReact: {
        runtime: shouldUseAutomaticRuntime ? "automatic" : "classic",
        // importSource cannot be set when runtime is classic
        ...shouldUseAutomaticRuntime ? {} : { importSource: void 0 }
      },
      presetTypeScript: {},
      pluginTransformRuntime: opts.api.config.transformRuntime || {},
      pluginLockCoreJS: {},
      pluginDynamicImportNode: false,
      pluginAutoCSSModules: opts.api.config.autoCSSModules
    }
  });
  const babelPreset = [
    require.resolve("@umijs/babel-preset-umi"),
    babelPresetOpts
  ];
  const extraBabelPresets = await opts.api.applyPlugins({
    key: "addExtraBabelPresets",
    initialValue: []
  });
  const extraBabelPlugins = await opts.api.applyPlugins({
    key: "addExtraBabelPlugins",
    initialValue: []
  });
  const beforeBabelPresets = await opts.api.applyPlugins({
    key: "addBeforeBabelPresets",
    initialValue: []
  });
  const beforeBabelPlugins = await opts.api.applyPlugins({
    key: "addBeforeBabelPlugins",
    initialValue: []
  });
  return {
    babelPreset,
    extraBabelPlugins,
    extraBabelPresets,
    beforeBabelPresets,
    beforeBabelPlugins
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBabelOpts
});
