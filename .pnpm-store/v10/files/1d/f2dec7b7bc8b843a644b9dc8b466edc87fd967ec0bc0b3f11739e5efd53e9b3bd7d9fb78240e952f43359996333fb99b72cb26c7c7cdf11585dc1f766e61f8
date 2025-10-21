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

// src/libs/folderCache/AutoUpdateSourceCodeCache.ts
var AutoUpdateSourceCodeCache_exports = {};
__export(AutoUpdateSourceCodeCache_exports, {
  AutoUpdateSrcCodeCache: () => AutoUpdateSrcCodeCache
});
module.exports = __toCommonJS(AutoUpdateSourceCodeCache_exports);
var import_es_module_lexer = require("@umijs/bundler-utils/compiled/es-module-lexer");
var import_esbuild = require("@umijs/bundler-utils/compiled/esbuild");
var import_utils = require("@umijs/utils");
var import_fast_glob = __toESM(require("fast-glob"));
var import_fs = require("fs");
var import_path = require("path");
var import_AutoUpdateFolderCache = require("./AutoUpdateFolderCache");
var import_constant = require("./constant");
var AutoUpdateSrcCodeCache = class {
  constructor(opts) {
    this.listeners = [];
    this.ignores = import_constant.DEFAULT_SRC_IGNORES;
    this.srcPath = opts.cwd;
    this.cachePath = opts.cachePath;
    this.folderCache = new import_AutoUpdateFolderCache.AutoUpdateFolderCache({
      cwd: this.srcPath,
      exts: ["ts", "js", "jsx", "tsx"],
      ignored: this.ignores,
      debouncedTimeout: 200,
      filesLoader: async (files) => {
        const loaded = {};
        await this.batchProcess(files);
        for (const f of files) {
          let newFile = (0, import_path.join)(this.cachePath, (0, import_path.relative)(this.srcPath, f));
          newFile = newFile.replace(new RegExp(`${(0, import_path.extname)(newFile)}$`), ".js");
          loaded[f] = (0, import_fs.readFileSync)(newFile, "utf-8");
        }
        return loaded;
      },
      onCacheUpdate: (_cache, events) => {
        const merged = this.getMergedCode();
        const info = { ...merged, events };
        this.listeners.forEach((l) => l(info));
      }
    });
  }
  async init() {
    const [files] = await Promise.all([this.initFileList(), import_es_module_lexer.init]);
    await this.folderCache.loadFiles(files);
  }
  async initFileList() {
    const start = Date.now();
    const files = await (0, import_fast_glob.default)(
      (0, import_utils.winPath)((0, import_path.join)(this.srcPath, "**", "*.{ts,js,jsx,tsx}")),
      {
        dot: true,
        ignore: this.ignores
      }
    );
    import_utils.logger.debug("[MFSU][eager] fast-glob costs", Date.now() - start);
    return files;
  }
  async batchProcess(files) {
    var _a, _b, _c, _d;
    try {
      await (0, import_esbuild.build)({
        entryPoints: files,
        bundle: false,
        outdir: this.cachePath,
        outbase: this.srcPath,
        loader: {
          // in case some js using some feature, eg: decorator
          ".js": "tsx",
          ".jsx": "tsx"
        },
        logLevel: "error"
      });
    } catch (e) {
      if (((_a = e.errors) == null ? void 0 : _a.length) || ((_b = e.warnings) == null ? void 0 : _b.length)) {
        import_utils.logger.warn(
          "transpile code with esbuild got ",
          // @ts-ignore
          ((_c = e.errors) == null ? void 0 : _c.length) || 0,
          "errors,",
          // @ts-ignore
          ((_d = e.warnings) == null ? void 0 : _d.length) || 0,
          "warnings"
        );
        import_utils.logger.debug("esbuild transpile code with error", e);
      } else {
        import_utils.logger.warn("transpile code with esbuild error", e);
      }
    }
  }
  getMergedCode() {
    const fileContentCache = this.folderCache.getFileCache();
    const code = Object.values(fileContentCache).join("\n");
    const [imports] = (0, import_es_module_lexer.parse)(code);
    const merged = {
      code,
      imports
    };
    return merged;
  }
  register(l) {
    if (this.listeners.indexOf(l) < 0) {
      this.listeners.push(l);
    }
    return () => {
      const i = this.listeners.indexOf(l);
      this.listeners.splice(i, 1);
    };
  }
  unwatch() {
    return this.folderCache.unwatch();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AutoUpdateSrcCodeCache
});
