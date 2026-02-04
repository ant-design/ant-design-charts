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

// src/features/autoAlias.ts
var autoAlias_exports = {};
__export(autoAlias_exports, {
  default: () => autoAlias_default
});
module.exports = __toCommonJS(autoAlias_exports);
var import_utils = require("../utils");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var autoAlias_default = (api) => {
  api.describe({
    key: "autoAlias",
    config: {
      schema: (Joi) => Joi.bool()
    },
    enableBy: () => !!api.pkg.name
  });
  api.modifyConfig(async (memo) => {
    var _a, _b, _c;
    const fatherConfigs = await api.applyPlugins({
      key: "dumi.modifyFatherConfigs",
      type: api.ApplyPluginsType.modify,
      initialValue: await (0, import_utils.tryFatherBuildConfigs)(api.cwd)
    });
    fatherConfigs.sort((a, b) => {
      var _a2, _b2;
      const aLevel = (((_a2 = a.output) == null ? void 0 : _a2.path) || a.output).split("/").length;
      const bLevel = (((_b2 = b.output) == null ? void 0 : _b2.path) || b.output).split("/").length;
      return bLevel - aLevel;
    });
    fatherConfigs.forEach((item) => {
      var _a2, _b2, _c2;
      (_b2 = memo.alias)[_c2 = `${api.pkg.name}/${((_a2 = item.output) == null ? void 0 : _a2.path) || item.output}`] ?? (_b2[_c2] = import_path.default.join(api.cwd, item.entry || item.input));
    });
    let entryDir = "";
    if ((_a = memo.resolve) == null ? void 0 : _a.entryFile) {
      entryDir = import_path.default.resolve(api.cwd, memo.resolve.entryFile);
    } else if (import_fs.default.existsSync(import_path.default.join(api.cwd, "src"))) {
      entryDir = import_path.default.join(api.cwd, "src");
    }
    if (entryDir) {
      (_b = memo.alias)[_c = api.pkg.name] ?? (_b[_c] = entryDir);
    }
    return memo;
  });
};
