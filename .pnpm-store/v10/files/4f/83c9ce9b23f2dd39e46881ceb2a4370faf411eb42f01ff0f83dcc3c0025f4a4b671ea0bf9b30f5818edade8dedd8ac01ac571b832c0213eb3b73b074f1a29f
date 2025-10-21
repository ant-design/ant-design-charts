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

// src/features/prepare/esbuildPlugins/esbuildAliasPlugin.ts
var esbuildAliasPlugin_exports = {};
__export(esbuildAliasPlugin_exports, {
  esbuildAliasPlugin: () => esbuildAliasPlugin
});
module.exports = __toCommonJS(esbuildAliasPlugin_exports);
var import_enhanced_resolve = __toESM(require("enhanced-resolve"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_isRelative = require("./isRelative");
var resolver = import_enhanced_resolve.default.create({
  mainFields: ["module", "browser", "main"],
  extensions: [".json", ".js", ".jsx", ".ts", ".tsx", ".cjs", ".mjs"],
  // TODO: support exports
  exportsFields: []
});
async function resolve(context, path2) {
  return new Promise((resolve2, reject) => {
    resolver(
      context,
      path2,
      (err, result) => err ? reject(err) : resolve2(result)
    );
  });
}
function sortByAffix(opts) {
  return opts.keys.sort((a, b) => {
    if (a.endsWith(opts.affix) && b.endsWith(opts.affix))
      return 0;
    if (a.endsWith(opts.affix))
      return -1;
    if (b.endsWith(opts.affix))
      return 1;
    else
      return 0;
  });
}
function addSlashAffix(key) {
  return key.endsWith("/") ? key : `${key}/`;
}
function esbuildAliasPlugin(opts) {
  return {
    name: "esbuildAliasPlugin",
    setup(build) {
      sortByAffix({ keys: Object.keys(opts.alias), affix: "$" }).filter((key) => {
        return import_path.default.isAbsolute(opts.alias[key]) && !opts.alias[key].includes("node_modules") || (0, import_isRelative.isRelativePath)(opts.alias[key]);
      }).forEach((key) => {
        const value = opts.alias[key];
        const filter = key.endsWith("$") ? new RegExp(`^${key}`) : new RegExp(`^${key}$`);
        build.onResolve({ filter }, async (args) => {
          const path2 = await resolve(
            args.resolveDir,
            args.path.replace(filter, value)
          );
          return {
            path: path2
          };
        });
        if (!key.endsWith("/") && import_fs.default.existsSync(value) && import_fs.default.statSync(value).isDirectory()) {
          const filter2 = new RegExp(`^${addSlashAffix(key)}`);
          build.onResolve({ filter: filter2 }, async (args) => {
            const path2 = await resolve(
              args.resolveDir,
              args.path.replace(filter2, addSlashAffix(value))
            );
            return {
              path: path2
            };
          });
        }
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  esbuildAliasPlugin
});
