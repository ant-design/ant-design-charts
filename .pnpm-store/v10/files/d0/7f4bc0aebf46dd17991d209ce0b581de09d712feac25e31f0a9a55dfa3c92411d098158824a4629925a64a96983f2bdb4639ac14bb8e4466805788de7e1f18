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

// src/utils.ts
var utils_exports = {};
__export(utils_exports, {
  _setFSCacheDir: () => _setFSCacheDir,
  componentToChunkName: () => componentToChunkName,
  generateMetaChunkName: () => generateMetaChunkName,
  getCache: () => getCache,
  getContentHash: () => getContentHash,
  getContext: () => import_loader_runner2.getContext,
  getFileContentByRegExp: () => getFileContentByRegExp,
  getFileIdFromFsPath: () => getFileIdFromFsPath,
  getFileRangeLines: () => getFileRangeLines,
  getProjectRoot: () => getProjectRoot,
  isVersionInRange: () => isVersionInRange,
  parseCodeFrontmatter: () => parseCodeFrontmatter,
  runLoaders: () => runLoaders,
  tryFatherBuildConfigs: () => tryFatherBuildConfigs
});
module.exports = __toCommonJS(utils_exports);
var import_crypto = require("crypto");
var import_file_system_cache = __toESM(require("file-system-cache"));
var import_fs = __toESM(require("fs"));
var import_js_yaml = __toESM(require("js-yaml"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_util = require("util");
var import_loader_runner = require("../compiled/loader-runner");
var import_constants = require("./constants");
var import_loader_runner2 = require("../compiled/loader-runner");
function getFileIdFromFsPath(fsPath) {
  return import_plugin_utils.lodash.kebabCase((0, import_plugin_utils.winPath)(fsPath).replace(/((\/|^)index)?\.\w+$/g, ""));
}
var getFileRangeLines = (content2, range) => {
  const [, start, end] = (range == null ? void 0 : range.match(/^L(\d+)(?:-L(\d+))?$/)) || [];
  if (start) {
    const lineStart = parseInt(start, 10) - 1;
    const lineEnd = end ? parseInt(end, 10) : lineStart + 1;
    return content2.split(/\r\n|\n/g).slice(lineStart, lineEnd).join("\n");
  }
  return content2;
};
var getFileContentByRegExp = (content, regexp, filePath) => {
  try {
    return content.match(eval(regexp))[0];
  } catch (err) {
    import_plugin_utils.logger.error(`Extract markdown content failed, use the full content.
RegExp: ${regexp}
File: ${filePath}
Error: ${err}`);
    return content;
  }
};
function parseCodeFrontmatter(raw) {
  const [, comment = "", code = ""] = raw.replace(/^\n\s*/, "").match(/^(\/\*\*[^]*?\n\s*\*\/|<!--[^]*?\n\s*-->)?(?:\s|\n)*([^]+)?$/);
  const yamlComment = comment.replace(/^(\/|<!--)|(\/|-->)$/g, "").replace(/(^|\n)\s*\*+/g, "$1");
  let frontmatter = null;
  try {
    frontmatter = import_js_yaml.default.load(yamlComment);
  } catch {
  }
  return { code: frontmatter ? code : raw, frontmatter };
}
var cacheDir = import_constants.FS_CACHE_DIR;
var caches = {};
function _setFSCacheDir(dir) {
  cacheDir = dir;
}
function getCache(ns) {
  if (process.env.DUMI_CACHE === "none") {
    return { set() {
    }, get() {
    }, setSync() {
    }, getSync() {
    } };
  }
  return caches[ns] ?? (caches[ns] = (0, import_file_system_cache.default)({ basePath: import_path.default.resolve(cacheDir, ns) }));
}
async function tryFatherBuildConfigs(cwd) {
  let configs = [];
  const APP_ROOT = process.env.APP_ROOT;
  process.env.APP_ROOT = cwd;
  try {
    const { Service: FatherSvc } = await import("father/dist/service/service.js");
    const { normalizeUserConfig: getBuildConfig } = await import("father/dist/builder/config.js");
    const svc = new FatherSvc();
    svc.commands.empty = {
      name: "empty",
      fn() {
      },
      configResolveMode: "loose",
      plugin: { id: "empty" }
    };
    await svc.run({ name: "empty" });
    configs = getBuildConfig(svc.config, svc.pkg);
  } catch {
  }
  if (APP_ROOT)
    process.env.APP_ROOT = APP_ROOT;
  return configs;
}
function getProjectRoot(cwd) {
  const splittedCwd = (0, import_plugin_utils.winPath)(cwd).split("/");
  for (let level = -1; level >= -3; level -= 1) {
    const rootCwd = splittedCwd.slice(0, level).join("/");
    if (!rootCwd)
      break;
    const pkgPath = import_path.default.join(rootCwd, "package.json");
    if (import_fs.default.existsSync(pkgPath) && (["pnpm-workspace.yaml", "lerna.json"].some(
      (f) => import_fs.default.existsSync(import_path.default.join(rootCwd, f))
    ) || require(pkgPath).workspace)) {
      return (0, import_plugin_utils.winPath)(rootCwd);
    }
  }
  return (0, import_plugin_utils.winPath)(cwd);
}
function lastSlash(str) {
  return str[str.length - 1] === "/" ? str : `${str}/`;
}
function componentToChunkName(component, cwdPath = "/") {
  const cwd = (0, import_plugin_utils.winPath)(cwdPath);
  return typeof component === "string" ? (0, import_plugin_utils.winPath)(component).replace(
    new RegExp(
      `^(${// match app cwd first
      import_plugin_utils.lodash.escapeRegExp(lastSlash(cwd))})`
    ),
    ""
  ).replace(/^.(\/|\\)/, "").replace(/(\/|\\)/g, "__").replace(/^src__/, "").replace(/\.\.__/g, "").replace(/^pages__/, "p__") : "";
}
function generateMetaChunkName(path2, cwd, locales = []) {
  const chunkName = componentToChunkName(path2, cwd);
  const dir = chunkName.replace(/^(.*?)_.*/, "$1");
  const localeRegExp = new RegExp(`.*(${locales.join("|")}).*`);
  const ifLocale = locales.length && localeRegExp.test(chunkName);
  const locale = ifLocale ? `__${chunkName.replace(localeRegExp, "$1")}` : "";
  return `meta__${dir}${locale}`;
}
function getContentHash(content2, length = 8) {
  return (0, import_crypto.createHash)("md5").update(content2).digest("hex").slice(0, length);
}
var promisifyRunLoaders = (0, import_util.promisify)(import_loader_runner.runLoaders);
function runLoaders(options, callback) {
  if (callback !== void 0) {
    return (0, import_loader_runner.runLoaders)(options, callback);
  }
  return promisifyRunLoaders(options);
}
function isVersionInRange(version, range, options = { includePrerelease: true }) {
  if (import_plugin_utils.semver.valid(version)) {
    return import_plugin_utils.semver.satisfies(version, range, options);
  }
  if (import_plugin_utils.semver.validRange(version)) {
    return import_plugin_utils.semver.subset(version, range, options);
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  _setFSCacheDir,
  componentToChunkName,
  generateMetaChunkName,
  getCache,
  getContentHash,
  getContext,
  getFileContentByRegExp,
  getFileIdFromFsPath,
  getFileRangeLines,
  getProjectRoot,
  isVersionInRange,
  parseCodeFrontmatter,
  runLoaders,
  tryFatherBuildConfigs
});
