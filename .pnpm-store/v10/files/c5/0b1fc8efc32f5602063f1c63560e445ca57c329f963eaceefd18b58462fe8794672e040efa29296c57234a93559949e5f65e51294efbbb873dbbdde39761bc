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

// src/features/esmi/Service.ts
var Service_exports = {};
__export(Service_exports, {
  default: () => ESMIService
});
module.exports = __toCommonJS(Service_exports);
var import_utils = require("@umijs/utils");
var import_crypto = require("crypto");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var ESMIService = class {
  constructor(opts) {
    this.cdnOrigin = "";
    this.cacheDir = "";
    this.cache = {};
    this.cdnOrigin = opts.cdnOrigin;
    this.cacheDir = opts.cacheDir;
    const cacheFilePath = import_path.default.join(this.cacheDir, "importmap.json");
    if (import_fs.default.existsSync(cacheFilePath)) {
      try {
        this.cache = require(cacheFilePath);
      } catch {
      }
    }
  }
  /**
   * get cache file path by cache key
   * @param data  pkg data
   */
  static getCacheKey(data) {
    const hash = (0, import_crypto.createHash)("md4");
    hash.update(JSON.stringify(data.pkgInfo.exports));
    return hash.digest("hex");
  }
  /**
   * get importmap cache by cache key
   * @param key cache key
   */
  getCache(key) {
    return this.cache[key];
  }
  /**
   * set importmap cache
   * @param key   cache key
   * @param data  importmap data
   */
  setCache(key, data) {
    this.cache[key] = data;
    if (!import_fs.default.existsSync(this.cacheDir)) {
      import_fs.default.mkdirSync(this.cacheDir, { recursive: true });
    }
    import_fs.default.writeFileSync(
      import_path.default.join(this.cacheDir, "importmap.json"),
      JSON.stringify(this.cache, null, 2)
    );
  }
  /**
   * build importmap from deps tree
   * @param data  package data
   * @returns ticketId
   */
  async build(data) {
    return import_utils.axios.post(
      `${this.cdnOrigin}/api/v1/esm/build`,
      data
    ).then((a) => {
      var _a;
      return (_a = a.data.data) == null ? void 0 : _a.ticketId;
    });
  }
  /**
   * get importmap from deps tree
   * @param data  package data
   * @returns importmap
   */
  async getImportmap(data) {
    const cacheKey = ESMIService.getCacheKey(data);
    const cache = this.getCache(cacheKey);
    const stamp = +/* @__PURE__ */ new Date();
    if (cache) {
      import_utils.logger.info("ESMi cache used");
      return cache;
    }
    import_utils.logger.info(import_utils.chalk.greenBright("Pre-compiling dependencies on esmi:"));
    data.pkgInfo.exports[0].deps.forEach((dep) => {
      console.log(import_utils.chalk.yellow(`  ${dep.name}`));
    });
    const ticketId = await this.build(data);
    import_utils.logger.info(`ticketId: ${ticketId}`);
    const next = () => new Promise(
      (resolve) => setTimeout(() => resolve(deferrer()), 2e3)
    );
    const deferrer = () => {
      return import_utils.axios.get(
        `${this.cdnOrigin}/api/v1/esm/importmap/${ticketId}`
      ).then((res) => {
        if (res.data.success) {
          this.setCache(cacheKey, res.data.data);
          import_utils.logger.info(
            `Done, took ${((+/* @__PURE__ */ new Date() - stamp) / 1e3).toFixed(1)}s`
          );
          return res.data.data;
        }
        return next();
      }, next);
    };
    return deferrer();
  }
};
