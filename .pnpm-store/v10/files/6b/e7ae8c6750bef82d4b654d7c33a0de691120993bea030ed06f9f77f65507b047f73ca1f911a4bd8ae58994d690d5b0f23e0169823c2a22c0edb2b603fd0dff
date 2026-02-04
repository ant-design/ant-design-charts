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

// src/features/icons/esbuildIconPlugin.ts
var esbuildIconPlugin_exports = {};
__export(esbuildIconPlugin_exports, {
  esbuildIconPlugin: () => esbuildIconPlugin
});
module.exports = __toCommonJS(esbuildIconPlugin_exports);
var import_utils = require("@umijs/utils");
var import_fs = __toESM(require("fs"));
var import_extract = require("./extract");
var loaderMap = {
  js: "tsx",
  jsx: "tsx",
  tsx: "tsx",
  ts: "ts"
};
function esbuildIconPlugin(opts) {
  return {
    name: "esbuildCollectIconPlugin",
    setup(build) {
      Object.keys(loaderMap).forEach((extName) => {
        const filter = new RegExp(`\\.(${extName})$`);
        build.onLoad({ filter }, async (args) => {
          const contents = await import_fs.default.promises.readFile(args.path, "utf-8");
          const icons = (0, import_extract.extractIcons)(contents);
          import_utils.logger.debug(`[icons] ${args.path} > ${icons}`);
          icons.forEach((icon) => {
            opts.icons.add(opts.alias[icon] || icon);
          });
          return {
            contents,
            loader: loaderMap[extName]
          };
        });
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  esbuildIconPlugin
});
