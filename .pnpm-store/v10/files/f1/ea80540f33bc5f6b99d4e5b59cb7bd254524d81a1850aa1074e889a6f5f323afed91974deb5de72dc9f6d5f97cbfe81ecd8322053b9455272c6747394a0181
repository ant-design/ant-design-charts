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

// src/libs/folderCache/LazySourceCodeCache.ts
var LazySourceCodeCache_exports = {};
__export(LazySourceCodeCache_exports, {
  LazySourceCodeCache: () => LazySourceCodeCache
});
module.exports = __toCommonJS(LazySourceCodeCache_exports);
var import_es_module_lexer = require("@umijs/bundler-utils/compiled/es-module-lexer");
var import_esbuild = require("@umijs/bundler-utils/compiled/esbuild");
var import_utils = require("@umijs/utils");
var import_fast_glob = __toESM(require("fast-glob"));
var import_fs = require("fs");
var import_path = require("path");
var import_constant = require("./constant");
var import_FolderWatch = require("./FolderWatch");
var LazySourceCodeCache = class {
  constructor(opts) {
    this.listeners = [];
    this.ignores = import_constant.DEFAULT_SRC_IGNORES;
    this.fileContentCache = {};
    this.pendingFilesEvents = [];
    this.tsConfigRaw = "{}";
    this.root = opts.root;
    this.srcPath = opts.cwd;
    this.cachePath = opts.cachePath;
    this.folderWatch = new import_FolderWatch.FolderWatch({
      cwd: this.srcPath,
      exts: ["ts", "js", "jsx", "tsx"],
      ignored: this.ignores,
      events: ["add", "unlink"]
    });
    this.folderWatch.listen((e) => {
      this.pendingFilesEvents.push(e);
    });
    try {
      this.tsConfigRaw = (0, import_fs.readFileSync)(
        (0, import_path.join)(this.root, "tsconfig.json"),
        "utf-8"
      );
    } catch (e) {
      import_utils.logger.debug(
        "load project tsconfig.json failed, fallback to empty config"
      );
    }
  }
  async init(files) {
    await Promise.all([import_es_module_lexer.init, this.folderWatch.init()]);
    await this.loadFiles(files);
  }
  async initWithScan() {
    const [files] = await Promise.all([
      this.initFileList(),
      import_es_module_lexer.init,
      this.folderWatch.init()
    ]);
    await this.loadFiles(files);
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
  getSrcPath() {
    return this.srcPath;
  }
  async loadFiles(files) {
    const loaded = await this.filesLoader(files);
    for (const f of Object.keys(loaded)) {
      this.fileContentCache[f] = loaded[f];
    }
  }
  getMergedCode() {
    const code = Object.values(this.fileContentCache).join("\n");
    const [imports] = (0, import_es_module_lexer.parse)(code);
    const merged = {
      code,
      imports
    };
    return merged;
  }
  replayChangeEvents() {
    const newFiles = /* @__PURE__ */ new Set();
    const events = this.pendingFilesEvents.slice();
    this.pendingFilesEvents = [];
    for (let e of events) {
      const event = e.event;
      if (event === "add") {
        newFiles.add(e.path);
      } else if (event === "unlink") {
        newFiles.delete(e.path);
      }
    }
    return Array.from(newFiles).map((p) => ({
      event: "add",
      path: p
    }));
  }
  async handleFileChangeEvents(events) {
    const eventsCopy = events.slice();
    const modifiedFiles = [];
    while (eventsCopy.length > 0) {
      const c = eventsCopy.pop();
      switch (c.event) {
        case "unlink":
          delete this.fileContentCache[c.path];
          break;
        case "change":
        case "add":
          modifiedFiles.push(c.path);
          break;
        default:
          ((_n) => {
          })(c.event);
      }
    }
    await this.loadFiles(modifiedFiles);
    this.notify();
  }
  notify() {
    const merged = this.getMergedCode();
    const info = { ...merged };
    this.listeners.forEach((l) => l(info));
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
  async filesLoader(files) {
    const loaded = {};
    await esbuildTransform(files, {
      srcPath: this.srcPath,
      cachePath: this.cachePath,
      tsconfigRaw: this.tsConfigRaw
    });
    for (const f of files) {
      let newFile = (0, import_path.join)(this.cachePath, (0, import_path.relative)(this.srcPath, f));
      newFile = newFile.replace(new RegExp(`${(0, import_path.extname)(newFile)}$`), ".js");
      loaded[f] = (0, import_fs.readFileSync)(newFile, "utf-8");
    }
    return loaded;
  }
  unwatch() {
  }
};
async function esbuildTransform(files, opts) {
  var _a, _b, _c, _d;
  try {
    await (0, import_esbuild.build)({
      entryPoints: files,
      bundle: false,
      outdir: opts.cachePath,
      outbase: opts.srcPath,
      loader: {
        ...import_constant.possibleExtUsingEmptyLoader,
        // in case some js using some feature, eg: decorator
        ".js": "tsx",
        ".jsx": "tsx"
      },
      logLevel: "error",
      tsconfigRaw: opts.tsconfigRaw
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LazySourceCodeCache
});
