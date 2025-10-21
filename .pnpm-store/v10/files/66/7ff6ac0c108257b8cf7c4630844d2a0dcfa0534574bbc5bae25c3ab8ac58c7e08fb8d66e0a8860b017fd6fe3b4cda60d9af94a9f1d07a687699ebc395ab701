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

// src/features/phantomDependency/phantomDependency.ts
var phantomDependency_exports = {};
__export(phantomDependency_exports, {
  default: () => phantomDependency_default
});
module.exports = __toCommonJS(phantomDependency_exports);
var import_utils = require("@umijs/utils");
var import_path = __toESM(require("path"));
var phantomDependency_default = (api) => {
  api.describe({
    key: "phantomDependency",
    config: {
      schema({ zod }) {
        return zod.object({
          exclude: zod.array(zod.string()).optional()
        });
      }
    },
    enableBy: api.EnableBy.config
  });
  api.onStart(() => {
    if (api.appData.npmClient === "pnpm") {
      api.logger.warn("Phantom dependencies check is not needed in pnpm.");
    }
  });
  api.onPrepareBuildSuccess(({ result }) => {
    var _a, _b, _c, _d;
    const files = Object.keys(result.metafile.inputs);
    const importsBySource = /* @__PURE__ */ new Map();
    for (const file of files) {
      const winP = (0, import_utils.winPath)(file);
      if (winP.includes(".umi/"))
        continue;
      if (winP.includes("/node_modules/"))
        continue;
      if (winP.startsWith("../"))
        continue;
      if (import_path.default.isAbsolute(file))
        continue;
      const { imports } = result.metafile.inputs[file];
      for (const imp of imports) {
        if (imp.kind === "import-statement" && imp.external) {
          if (!importsBySource.has(imp.path)) {
            importsBySource.set(imp.path, []);
          }
          importsBySource.get(imp.path).push({ file });
        }
      }
    }
    const phantomDeps = [];
    for (const [source, files2] of importsBySource) {
      if (source.startsWith("<"))
        continue;
      if (source.startsWith("."))
        continue;
      if (source.startsWith("/"))
        continue;
      if (source.startsWith("@/") || source.startsWith("@@/"))
        continue;
      const pkgName = getPkgName(source);
      if ((_a = api.config.phantomDependency.exclude) == null ? void 0 : _a.includes(pkgName))
        continue;
      if ((_b = api.pkg.dependencies) == null ? void 0 : _b[pkgName])
        continue;
      if ((_c = api.pkg.devDependencies) == null ? void 0 : _c[pkgName])
        continue;
      if ((_d = api.pkg.clientDependencies) == null ? void 0 : _d[pkgName])
        continue;
      if (matchAlias(source, api.config.alias || {}))
        continue;
      if (matchExternals(source, api.config.externals || {}))
        continue;
      phantomDeps.push(source);
      import_utils.logger.error(
        `[phantomDependency] ${import_utils.chalk.red(
          `${source} is a phantom dependency, please specify it in package.json.`
        )}`
      );
      for (const file of files2) {
        import_utils.logger.error(`[phantomDependency] ${file.file} imports ${source}`);
      }
    }
    if (phantomDeps.length && api.name !== "dev") {
      throw new Error(
        `[phantomDependency] has phantom dependencies ${phantomDeps.join(
          ", "
        )}, exit.`
      );
    }
  });
  function getPkgName(source) {
    const arr = source.split("/");
    if (source.startsWith("@"))
      return arr[0] + "/" + arr[1];
    return arr[0];
  }
  function matchAlias(source, alias) {
    const keys = Object.keys(alias);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const keyWithSlashAffix = key.endsWith("/") ? key : `${key}/`;
      if (key.endsWith("$") && source === key.slice(0, -1)) {
        return true;
      } else if (source === key || source.startsWith(keyWithSlashAffix)) {
        return true;
      }
    }
    return false;
  }
  function matchExternals(source, externals) {
    const keys = Object.keys(externals);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (source === key) {
        return true;
      }
    }
    return false;
  }
};
