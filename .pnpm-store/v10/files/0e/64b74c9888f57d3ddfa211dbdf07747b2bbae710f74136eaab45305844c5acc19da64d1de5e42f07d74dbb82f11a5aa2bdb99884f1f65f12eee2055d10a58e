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

// src/linter/base.ts
var base_exports = {};
__export(base_exports, {
  default: () => BaseLinter
});
module.exports = __toCommonJS(base_exports);
var import_child_process = require("child_process");
var import_path = __toESM(require("path"));
var BaseLinter = class {
  constructor({ cwd }) {
    /**
     * linter package name
     */
    this.linter = "";
    /**
     * paths for linter
     */
    this.paths = {};
    this.paths.cwd = cwd;
  }
  /**
   * get bin file path for current linter
   */
  getBinPath() {
    try {
      const pkgPath = require.resolve(`${this.linter}/package.json`);
      const pkgContent = require(pkgPath);
      return import_path.default.resolve(import_path.default.dirname(pkgPath), pkgContent.bin[this.linter]);
    } catch (e) {
      throw new Error(`${this.linter} not found, please install it first.`, {
        cause: e
      });
    }
  }
  /**
   * get linter fork args
   */
  getRunArgs(args) {
    args;
    return [];
  }
  /**
   * execute linter
   */
  run(args) {
    (0, import_child_process.fork)(this.getBinPath(), this.getRunArgs(args)).on("exit", (code) => {
      if (!!code) {
        process.exitCode = code;
      }
    });
  }
};
