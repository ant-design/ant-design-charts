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

// src/assetParsers/block.ts
var block_exports = {};
__export(block_exports, {
  default: () => block_default
});
module.exports = __toCommonJS(block_exports);
var import_utils = require("../utils");
var import_esbuild = require("@umijs/bundler-utils/compiled/esbuild");
var import_assert = __toESM(require("assert"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_constants = require("../constants");
async function parseBlockAsset(opts) {
  const asset = {
    type: "BLOCK",
    id: opts.id,
    refAtomIds: opts.refAtomIds,
    dependencies: {},
    entry: ""
  };
  const result = {
    asset,
    resolveMap: {},
    frontmatter: null
  };
  const deferrer = (0, import_esbuild.build)({
    // do not emit file
    write: false,
    // enable bundle for trigger onResolve hook, but all deps will be externalized
    bundle: true,
    logLevel: "silent",
    format: "esm",
    target: "esnext",
    // esbuild need relative entry path
    entryPoints: [import_path.default.basename(opts.fileAbsPath)],
    absWorkingDir: import_path.default.dirname(opts.fileAbsPath),
    plugins: [
      {
        name: "plugin-dumi-collect-deps",
        setup: (builder) => {
          builder.onResolve({ filter: /.*/ }, (args) => {
            if (args.kind !== "entry-point" && !args.path.startsWith(".")) {
              const resolved = opts.resolver(args.resolveDir, args.path);
              (0, import_assert.default)(
                resolved,
                `Can't resolve ${args.path} from ${args.resolveDir}`
              );
              const pkgJsonPath = import_plugin_utils.pkgUp.pkgUpSync({
                cwd: resolved
              });
              if (pkgJsonPath) {
                const pkg = require(pkgJsonPath);
                asset.dependencies[pkg.name] = {
                  type: "NPM",
                  value: pkg.version
                };
                if (opts.techStack.runtimeOpts)
                  result.resolveMap[args.path] = args.path;
              }
              return { path: args.path, external: true };
            }
            return {
              path: args.kind !== "entry-point" ? opts.resolver(args.resolveDir, args.path) : import_path.default.join(args.resolveDir, args.path),
              pluginData: {
                kind: args.kind,
                resolveDir: args.resolveDir,
                source: args.path
              }
            };
          });
          builder.onLoad({ filter: /.*/ }, (args) => {
            let ext = import_path.default.extname(args.path);
            const techStack = opts.techStack;
            const isEntryPoint = args.pluginData.kind === "entry-point";
            const filename = `${isEntryPoint ? "index" : (0, import_plugin_utils.winPath)(
              import_path.default.format({
                ...import_path.default.parse(args.pluginData.source),
                base: "",
                ext: ""
              })
            )}${ext}`;
            let entryPointCode = opts.entryPointCode;
            let contents = void 0;
            if (techStack.onBlockLoad) {
              const result2 = techStack.onBlockLoad({
                filename,
                entryPointCode: entryPointCode ?? (entryPointCode = import_fs.default.readFileSync(
                  args.path,
                  "utf-8"
                )),
                ...args
              });
              if (result2) {
                ext = `.${result2.type}`;
                contents = result2.content;
              }
            }
            let isModule = import_constants.DEFAULT_DEMO_MODULE_EXTENSIONS.includes(ext);
            let isPlainText = import_constants.DEFAULT_DEMO_PLAIN_TEXT_EXTENSIONS.includes(ext);
            if (isModule || isPlainText) {
              asset.dependencies[filename] = {
                type: "FILE",
                value: opts.entryPointCode ?? import_fs.default.readFileSync(args.path, "utf-8")
              };
              const file = asset.dependencies[filename];
              if (isEntryPoint) {
                const { code, frontmatter } = (0, import_utils.parseCodeFrontmatter)(file.value);
                asset.entry = filename;
                if (frontmatter) {
                  file.value = code;
                  asset.dependencies[filename].value = code;
                  ["description", "title", "snapshot", "keywords"].forEach(
                    (key) => {
                      asset[key] = frontmatter == null ? void 0 : frontmatter[key];
                    }
                  );
                  ["description", "title"].forEach((key) => {
                    frontmatter[key] = frontmatter[`${key}.${opts.fileLocale}`] || frontmatter[key];
                  });
                  result.frontmatter = frontmatter;
                }
              }
              if (opts.techStack.runtimeOpts && (!isEntryPoint || !opts.entryPointCode)) {
                result.resolveMap[filename] = args.path;
              }
              return {
                // only continue to load for module files
                contents: isModule ? contents ?? file.value : "",
                loader: isModule ? ext.slice(1) : "text"
              };
            }
          });
        }
      }
    ]
  });
  try {
    await deferrer;
  } catch {
  }
  return result;
}
var block_default = parseBlockAsset;
