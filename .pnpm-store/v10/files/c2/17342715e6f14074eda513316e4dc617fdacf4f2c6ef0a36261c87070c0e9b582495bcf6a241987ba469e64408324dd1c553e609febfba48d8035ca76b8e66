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

// src/service/service.ts
var service_exports = {};
__export(service_exports, {
  Service: () => Service
});
module.exports = __toCommonJS(service_exports);
var import_core = require("@umijs/core");
var import_fs = require("fs");
var import_path = require("path");
var import_constants = require("../constants");
var import_cwd = require("./cwd");
var Service = class extends import_core.Service {
  constructor(opts) {
    process.env.UMI_DIR = (0, import_path.dirname)(require.resolve("../../package"));
    const cwd = (0, import_cwd.getCwd)();
    require("./requireHook");
    super({
      ...opts,
      env: process.env.NODE_ENV,
      cwd,
      defaultConfigFiles: (opts == null ? void 0 : opts.defaultConfigFiles) || import_constants.DEFAULT_CONFIG_FILES,
      frameworkName: (opts == null ? void 0 : opts.frameworkName) || import_constants.FRAMEWORK_NAME,
      presets: [require.resolve("@umijs/preset-umi"), ...(opts == null ? void 0 : opts.presets) || []],
      plugins: [
        (0, import_fs.existsSync)((0, import_path.join)(cwd, "plugin.ts")) && (0, import_path.join)(cwd, "plugin.ts"),
        (0, import_fs.existsSync)((0, import_path.join)(cwd, "plugin.js")) && (0, import_path.join)(cwd, "plugin.js")
      ].filter(Boolean)
    });
  }
  async run2(opts) {
    let name = opts.name;
    if ((opts == null ? void 0 : opts.args.version) || name === "v") {
      name = "version";
    } else if ((opts == null ? void 0 : opts.args.help) || !name || name === "h") {
      name = "help";
    }
    return await this.run({ ...opts, name });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Service
});
