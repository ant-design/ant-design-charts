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

// src/libs/folderCache/AutoUpdateFolderCache.ts
var AutoUpdateFolderCache_exports = {};
__export(AutoUpdateFolderCache_exports, {
  AutoUpdateFolderCache: () => AutoUpdateFolderCache
});
module.exports = __toCommonJS(AutoUpdateFolderCache_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var { watch } = import_utils.chokidar;
var AutoUpdateFolderCache = class {
  constructor(opts) {
    this.fileContentCache = {};
    this.pendingChanges = [];
    this.cwd = opts.cwd;
    this.onCacheUpdated = opts.onCacheUpdate;
    this.filesLoader = opts.filesLoader || this._defaultLoader;
    this.watcher = watch(`./**/*.{${opts.exts.join(",")}}`, {
      ignored: opts.ignored || [],
      cwd: opts.cwd,
      ignorePermissionErrors: true,
      ignoreInitial: true
    });
    this.watchAll();
    this.readyPromise = new Promise((resolve) => {
      this.watcher.on("ready", () => {
        resolve();
      });
    });
    this.debouchedHandleChanges = import_utils.lodash.debounce(async () => {
      const modifiedFiles = [];
      const events = this.pendingChanges.slice();
      while (this.pendingChanges.length > 0) {
        const c = this.pendingChanges.pop();
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
      await this.onCacheUpdated(this.fileContentCache, events);
    }, opts.debouncedTimeout);
  }
  unwatch() {
    return this.watcher.close();
  }
  async init() {
    await this.readyPromise;
  }
  watchAll() {
    this.watcher.on("all", (eventName, path) => {
      switch (eventName) {
        case "change":
          this.pendingChanges.push({
            event: "change",
            path: (0, import_path.join)(this.cwd, path)
          });
          this.debouchedHandleChanges();
          break;
        case "add":
          this.pendingChanges.push({
            event: "add",
            path: (0, import_path.join)(this.cwd, path)
          });
          this.debouchedHandleChanges();
          break;
        case "unlink":
          this.pendingChanges.push({
            event: "unlink",
            path: (0, import_path.join)(this.cwd, path)
          });
          this.debouchedHandleChanges();
          break;
        default:
      }
    });
  }
  getFileCache() {
    return this.fileContentCache;
  }
  async loadFiles(files) {
    const loaded = await this.filesLoader(files);
    for (const f of Object.keys(loaded)) {
      this.fileContentCache[f] = loaded[f];
    }
  }
  async _defaultLoader(files) {
    const loaded = {};
    for (let file of files) {
      try {
        loaded[file] = (0, import_fs.readFileSync)(file, "utf-8");
      } catch (e) {
        import_utils.logger.error(
          "[fileCache] load file",
          (0, import_path.relative)(this.cwd, file),
          "failed ",
          e
        );
      }
    }
    return loaded;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AutoUpdateFolderCache
});
