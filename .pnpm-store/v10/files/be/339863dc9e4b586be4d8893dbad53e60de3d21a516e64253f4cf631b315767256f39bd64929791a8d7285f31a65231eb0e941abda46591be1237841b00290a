var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/compile/utils.ts
var utils_exports = {};
__export(utils_exports, {
  shouldDisabledLiveDemo: () => shouldDisabledLiveDemo
});
module.exports = __toCommonJS(utils_exports);
var import_utils = require("@umijs/utils");
var import_lodash = require("@umijs/utils/compiled/lodash");
var shouldDisabledLiveDemo = (api) => {
  const extraBabelPlugins = api.userConfig.extraBabelPlugins;
  const disableFlag = (0, import_lodash.isArray)(extraBabelPlugins) && extraBabelPlugins.some(
    (p) => /^import$|babel-plugin-import/.test(p[0])
  );
  if (disableFlag) {
    import_utils.logger.warn(
      "live demo feature has been automatically disabled since babel-plugin-import be registered, if you want to enable live demo feature, checkout: https://d.umijs.org/guide/faq"
    );
  }
  return disableFlag;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  shouldDisabledLiveDemo
});
