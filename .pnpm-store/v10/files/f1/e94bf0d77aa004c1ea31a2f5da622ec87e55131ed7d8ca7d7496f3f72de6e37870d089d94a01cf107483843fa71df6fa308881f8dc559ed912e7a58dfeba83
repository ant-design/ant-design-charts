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

// src/service/service.ts
var service_exports = {};
__export(service_exports, {
  DumiService: () => DumiService
});
module.exports = __toCommonJS(service_exports);
var import_core = require("@umijs/core");
var import_path = require("path");
var import_umi = require("umi");
var import_plugin_utils = require("umi/plugin-utils");
var import_constants = require("./constants");
function winJoin(...args) {
  return (0, import_plugin_utils.winPath)((0, import_path.join)(...args));
}
var DumiService = class extends import_umi.Service {
  constructor() {
    super({
      defaultConfigFiles: import_constants.DEFAULT_CONFIG_FILES,
      frameworkName: import_constants.FRAMEWORK_NAME
    });
  }
  async getPaths() {
    const { cwd } = this;
    const tmp = this.env === import_core.Env.development ? `tmp` : `tmp-${this.env}`;
    const absFWPath = winJoin(cwd, `.${import_constants.FRAMEWORK_NAME}`);
    const absSrcPath = absFWPath;
    const absPagesPath = winJoin(absSrcPath, "pages");
    const absApiRoutesPath = winJoin(absSrcPath, "api");
    const absTmpPath = winJoin(absSrcPath, tmp);
    const absNodeModulesPath = winJoin(cwd, "node_modules");
    const absOutputPath = winJoin(cwd, "dist");
    return {
      cwd,
      absSrcPath,
      absPagesPath,
      absApiRoutesPath,
      absTmpPath,
      absNodeModulesPath,
      absOutputPath
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DumiService
});
