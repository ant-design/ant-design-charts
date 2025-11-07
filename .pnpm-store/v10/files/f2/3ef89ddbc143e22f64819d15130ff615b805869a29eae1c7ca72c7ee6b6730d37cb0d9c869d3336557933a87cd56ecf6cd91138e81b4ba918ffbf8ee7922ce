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

// src/commands/dev/watch.ts
var watch_exports = {};
__export(watch_exports, {
  addUnWatch: () => addUnWatch,
  createDebouncedHandler: () => createDebouncedHandler,
  expandCSSPaths: () => expandCSSPaths,
  expandJSPaths: () => expandJSPaths,
  unwatch: () => unwatch,
  watch: () => watch
});
module.exports = __toCommonJS(watch_exports);
var import_utils = require("@umijs/utils");
var unWatches = [];
function addUnWatch(unWatcher) {
  unWatches.push(unWatcher);
}
function watch(opts) {
  const watcher = import_utils.chokidar.watch(opts.path, {
    ...opts.watchOpts,
    ignoreInitial: true
  });
  watcher.on("all", opts.onChange);
  if (opts.addToUnWatches) {
    addUnWatch(() => {
      watcher.close();
    });
  }
  return watcher;
}
function createDebouncedHandler(opts) {
  let timer = null;
  let files = [];
  return (event, path) => {
    if (timer) {
      clearTimeout(timer);
    }
    files.push({ event, path: (0, import_utils.winPath)(path) });
    timer = setTimeout(async () => {
      timer = null;
      await opts.onChange({ files });
      files = [];
    }, opts.timeout || 2e3);
  };
}
function unwatch() {
  unWatches.forEach((unWatch) => unWatch());
}
function expandJSPaths(path) {
  return [".js", ".jsx", ".ts", ".tsx"].map((ext) => {
    return `${path}${ext}`;
  });
}
function expandCSSPaths(path) {
  return [".css", ".less", ".scss", ".sass"].map((ext) => {
    return `${path}${ext}`;
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addUnWatch,
  createDebouncedHandler,
  expandCSSPaths,
  expandJSPaths,
  unwatch,
  watch
});
