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

// src/libs/scan.ts
var scan_exports = {};
__export(scan_exports, {
  createResolver: () => createResolver,
  getContent: () => getContent,
  scan: () => scan,
  scanContent: () => scanContent
});
module.exports = __toCommonJS(scan_exports);
var import_bundler_utils = require("@umijs/bundler-utils");
var import_es_module_lexer = require("@umijs/bundler-utils/compiled/es-module-lexer");
var import_esbuild = require("@umijs/bundler-utils/compiled/esbuild");
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_enhanced_resolve = __toESM(require("enhanced-resolve"));
var import_fs = require("fs");
var import_path = require("path");
async function scanContent(opts) {
  await import_es_module_lexer.init;
  const [imports] = (0, import_es_module_lexer.parse)(opts.content);
  const deps = imports.filter(
    // exclude all type-only deps
    (imp) => {
      const stmt = opts.content.slice(imp.ss, imp.se);
      return (
        // skip dynamicImport
        imp.d > -1 || // import a from or import a,
        /^import\s+[a-zA-Z_$][\w_$]*(\s+from|\s*,)/.test(stmt) || // export a from or export *
        /^export\s+([a-zA-Z_$][\w_$]*\s+from|\*)/.test(stmt) || // { a, type b } or { type a, b }
        /(?<!type\s+){(\s*(?!type)[a-zA-Z_$]|.*,\s*(?!type)[a-zA-Z_$])/.test(
          stmt
        )
      );
    }
  ).map((imp) => {
    let importType = "import" /* import */;
    if (imp.d > -1)
      importType = "dynamicImport" /* dynamicImport */;
    if (opts.content.slice(imp.ss, imp.se).startsWith("export ")) {
      importType = "export" /* export */;
    }
    return {
      url: imp.n,
      importType
    };
  });
  return { deps };
}
async function getContent(path) {
  let content = (0, import_fs.readFileSync)(path, "utf-8");
  if (path.endsWith(".tsx") || path.endsWith(".jsx")) {
    content = (0, import_esbuild.transformSync)(content, {
      loader: (0, import_path.extname)(path).slice(1),
      format: "esm"
    }).code;
  }
  return content;
}
function createResolver(opts) {
  const resolver = import_enhanced_resolve.default.create({
    mainFields: ["module", "browser", "main"],
    // es module first
    extensions: [".js", ".jsx", ".json", ".mjs", ".ts", ".tsx"],
    exportsFields: [],
    alias: opts.alias
  });
  async function resolve(context, path) {
    return new Promise((resolve2, reject) => {
      resolver(
        context,
        path,
        (err, result) => err ? reject(err) : resolve2(result)
      );
    });
  }
  return { resolve };
}
async function scan(opts) {
  var _a, _b, _c;
  const cache = /* @__PURE__ */ new Map();
  const queueDeps = [opts.entry];
  const ret = {};
  while (queueDeps.length) {
    const depPath = queueDeps.shift();
    if (cache.has(depPath))
      continue;
    const content = await getContent(depPath);
    const { deps } = await scanContent({ content });
    cache.set(depPath, deps);
    for (const dep of deps) {
      if ((_a = opts.externals) == null ? void 0 : _a[dep.url]) {
        ret[dep.url] = {
          version: "",
          matches: [],
          subpaths: [],
          external: true
        };
        continue;
      }
      const resolved = await opts.resolver.resolve((0, import_path.dirname)(depPath), dep.url);
      if ((0, import_bundler_utils.isDepPath)(resolved)) {
        const pkgPath = import_utils.pkgUp.pkgUpSync({ cwd: resolved });
        (0, import_assert.default)(pkgPath, `package.json for found for ${resolved}`);
        const pkg = require(pkgPath);
        const entryResolved = await opts.resolver.resolve((0, import_path.dirname)(pkgPath), ".").catch(() => null);
        const isSubpath = entryResolved !== resolved;
        ret[pkg.name] = {
          version: pkg.version,
          // collect entry matches
          matches: [
            // avoid duplicate
            .../* @__PURE__ */ new Set([
              ...((_b = ret[pkg.name]) == null ? void 0 : _b.matches) || [],
              // only collect non-subpath matches
              ...!isSubpath ? [
                // match origin path from source code
                dep.url,
                // match resolved absolute path
                resolved,
                // match no ext name path
                resolved.replace(/\/\.[^\.]+$/, ""),
                // match parent dir for index module
                .../\/index[^\/]+$/.test(resolved) ? [(0, import_path.dirname)(resolved)] : []
              ] : []
            ])
          ],
          // collect subpath matches
          subpaths: [
            // avoid duplicate
            .../* @__PURE__ */ new Set([
              ...((_c = ret[pkg.name]) == null ? void 0 : _c.subpaths) || [],
              ...isSubpath ? [dep.url] : []
            ])
          ]
        };
      } else if ([".ts", ".tsx", ".js", ".jsx", ".mjs"].includes((0, import_path.extname)(resolved))) {
        queueDeps.push(resolved);
      }
    }
  }
  return ret;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createResolver,
  getContent,
  scan,
  scanContent
});
