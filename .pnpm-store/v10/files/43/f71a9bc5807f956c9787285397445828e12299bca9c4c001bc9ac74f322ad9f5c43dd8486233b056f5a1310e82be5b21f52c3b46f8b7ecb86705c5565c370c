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

// src/assetParsers/atom.ts
var atom_exports = {};
__export(atom_exports, {
  default: () => atom_default
});
module.exports = __toCommonJS(atom_exports);
var import_utils = require("../utils");
var import_parser = require("dumi-afx-deps/compiled/parser");
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_BaseParser = require("./BaseParser");
var MAX_PARSE_SIZE = 1024 * 512;
var ReactMetaParser = class {
  constructor(opts) {
    this.unresolvedFiles = [];
    const { resolveDir, entryFile, parseOptions, unpkgHost } = opts;
    const absEntryFile = import_path.default.resolve(resolveDir, entryFile);
    this.resolveFilter = opts.resolveFilter || (() => true);
    this.parser = new import_parser.SchemaParser({
      entryPath: absEntryFile,
      basePath: (0, import_utils.getProjectRoot)(resolveDir),
      unPkgHost: unpkgHost ?? "https://unpkg.com",
      mode: "worker",
      // @ts-ignore
      parseOptions
    });
  }
  async parse() {
    await this.parser.patch(this.unresolvedFiles.splice(0));
    const resolver = new import_parser.SchemaResolver(await this.parser.parse(), {
      mode: "worker"
    });
    const result = {
      components: {},
      functions: {}
    };
    const fallbackProps = { type: "object", properties: {} };
    const fallbackSignature = { arguments: [] };
    const componentList = await resolver.componentList;
    const functionList = await resolver.functionList;
    for (const id of componentList) {
      const needResolve = this.resolveFilter({
        id,
        type: "COMPONENT",
        ids: componentList
      });
      let propsConfig = needResolve ? (await resolver.getComponent(id)).props : fallbackProps;
      const size = Buffer.byteLength(JSON.stringify(propsConfig));
      if (size > MAX_PARSE_SIZE) {
        propsConfig = fallbackProps;
        import_plugin_utils.logger.warn(
          `Parsed component ${id} props size ${size} exceeds 512KB, skip it.`
        );
      }
      result.components[id] = {
        type: "COMPONENT",
        id,
        title: id,
        propsConfig
      };
    }
    for (const id of functionList) {
      const needResolve = this.resolveFilter({
        id,
        type: "FUNCTION",
        ids: functionList
      });
      let signature = needResolve ? (await resolver.getFunction(id)).signature : fallbackSignature;
      const size = Buffer.byteLength(JSON.stringify(signature));
      if (size > MAX_PARSE_SIZE) {
        signature = fallbackSignature;
        import_plugin_utils.logger.warn(
          `Parsed function ${id} signature size ${size} exceeds 512KB, skip it.`
        );
      }
      result.functions[id] = {
        type: "FUNCTION",
        id,
        title: id,
        signature
      };
    }
    resolver.$$destroyWorker();
    return result;
  }
  destroy() {
    return this.parser.$$destroyWorker();
  }
  patch(file) {
    this.unresolvedFiles.push(file.fileName);
  }
};
var ReactAtomAssetsParser = class extends import_BaseParser.BaseAtomAssetsParser {
  constructor(opts) {
    super({
      ...opts,
      parser: new ReactMetaParser(opts),
      handleWatcher: (watcher, { parse, patch, watchArgs }) => {
        return watcher.on("all", (ev, file) => {
          if (["add", "change"].includes(ev) && /((?<!\.d)\.ts|\.(jsx?|tsx))$/.test(file)) {
            const cwd = watchArgs.options.cwd;
            patch({
              event: ev,
              fileName: import_path.default.join(cwd, file)
            });
            parse();
          }
        });
      }
    });
  }
};
var atom_default = ReactAtomAssetsParser;
