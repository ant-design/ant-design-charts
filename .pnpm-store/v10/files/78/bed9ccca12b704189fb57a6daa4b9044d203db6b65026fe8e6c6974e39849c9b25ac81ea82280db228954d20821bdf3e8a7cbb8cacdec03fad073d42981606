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

// src/assetParsers/BaseParser.ts
var BaseParser_exports = {};
__export(BaseParser_exports, {
  BaseAtomAssetsParser: () => BaseAtomAssetsParser
});
module.exports = __toCommonJS(BaseParser_exports);
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var BaseAtomAssetsParser = class {
  constructor(opts) {
    this.watcher = null;
    this.isParsing = false;
    this.parseDeferrer = null;
    this.cbs = [];
    const { entryFile, resolveDir, watchOptions, parser, handleWatcher } = opts;
    this.resolveDir = resolveDir;
    const absEntryFile = import_path.default.resolve(resolveDir, entryFile);
    this.entryDir = import_path.default.relative(opts.resolveDir, import_path.default.dirname(absEntryFile));
    this.watchArgs = {
      paths: this.entryDir,
      options: {
        cwd: this.resolveDir,
        ignored: [
          "**/.*",
          "**/.*/**",
          "**/_*",
          "**/_*/**",
          "**/*.{md,less,scss,sass,styl,css}"
        ],
        ignoreInitial: true,
        ...watchOptions
      }
    };
    this.handleWatcher = handleWatcher;
    this.parser = parser;
  }
  async parse() {
    if (!this.parseDeferrer) {
      this.isParsing = true;
      this.parseDeferrer = this.parser.parse().finally(() => {
        this.isParsing = false;
      });
    }
    return this.parseDeferrer;
  }
  watch(cb) {
    this.cbs.push(cb);
    if (!this.watcher && this.handleWatcher) {
      const lazyParse = import_plugin_utils.lodash.debounce(() => {
        this.parse().then((data) => this.cbs.forEach((cb2) => cb2(data))).catch((err) => {
          import_plugin_utils.logger.error(err);
        });
      }, 100);
      this.watcher = import_plugin_utils.chokidar.watch(
        this.watchArgs.paths,
        this.watchArgs.options
      );
      this.handleWatcher(this.watcher, {
        parse: () => {
          if (this.isParsing && this.parseDeferrer) {
            this.parseDeferrer.finally(() => {
              this.parseDeferrer = null;
              lazyParse();
            });
          } else {
            this.parseDeferrer = null;
            lazyParse();
          }
        },
        watchArgs: this.watchArgs,
        patch: (file) => {
          this.parser.patch(file);
        }
      });
      lazyParse();
    }
  }
  unwatch(cb) {
    this.cbs.splice(this.cbs.indexOf(cb), 1);
  }
  patchWatchArgs(handler) {
    this.watchArgs = handler(this.watchArgs);
  }
  getWatchArgs() {
    return this.watchArgs;
  }
  async destroyWorker() {
    if (this.parseDeferrer) {
      await this.parseDeferrer;
      this.parseDeferrer = null;
    }
    await this.parser.destroy();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseAtomAssetsParser
});
