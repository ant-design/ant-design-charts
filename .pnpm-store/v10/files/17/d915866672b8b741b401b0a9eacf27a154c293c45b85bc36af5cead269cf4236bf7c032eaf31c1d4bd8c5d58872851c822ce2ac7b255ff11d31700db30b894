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

// src/libs/folderCache/FolderWatch.ts
var FolderWatch_exports = {};
__export(FolderWatch_exports, {
  FolderWatch: () => FolderWatch
});
module.exports = __toCommonJS(FolderWatch_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
var { watch } = import_utils.chokidar;
var FolderWatch = class {
  constructor(opts) {
    this.listeners = [];
    this.eventMap = { add: 0, unlink: 0, change: 0 };
    this.cwd = opts.cwd;
    this.watcher = watch(`./**/*.{${opts.exts.join(",")}}`, {
      ignored: opts.ignored || [],
      cwd: opts.cwd,
      ignorePermissionErrors: true,
      ignoreInitial: true
    });
    this.startWatch();
    this.readyPromise = new Promise((resolve, reject) => {
      this.watcher.on("ready", () => {
        resolve();
      });
      this.watcher.on("error", (e) => {
        reject(e);
      });
    });
    for (let event of opts.events) {
      this.eventMap[event] = 1;
    }
  }
  async init() {
    return this.readyPromise;
  }
  startWatch() {
    this.watcher.on("all", (eventName, path) => {
      switch (eventName) {
        case "change":
          this.notify({
            event: "change",
            path: (0, import_path.join)(this.cwd, path)
          });
          break;
        case "add":
          this.notify({
            event: "add",
            path: (0, import_path.join)(this.cwd, path)
          });
          break;
        case "unlink":
          this.notify({
            event: "unlink",
            path: (0, import_path.join)(this.cwd, path)
          });
          break;
        default:
      }
    });
  }
  notify(event) {
    if (this.eventMap[event.event]) {
      this.listeners.forEach((l) => l(event));
    }
  }
  listen(f) {
    this.listeners.push(f);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== f);
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FolderWatch
});
