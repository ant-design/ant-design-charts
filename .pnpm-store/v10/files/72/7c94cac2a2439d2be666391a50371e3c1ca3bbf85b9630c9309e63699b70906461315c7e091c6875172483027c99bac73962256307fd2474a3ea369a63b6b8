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

// src/features/prepare/build.ts
var build_exports = {};
__export(build_exports, {
  build: () => build
});
module.exports = __toCommonJS(build_exports);
var import_watchRebuild = require("@umijs/bundler-esbuild/dist/plugins/watchRebuild");
var import_esbuild = __toESM(require("@umijs/bundler-utils/compiled/esbuild"));
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = __toESM(require("path"));
var import_constant = require("../../libs/folderCache/constant");
var import_esbuildAliasPlugin = require("./esbuildPlugins/esbuildAliasPlugin");
var import_esbuildExternalPlugin = require("./esbuildPlugins/esbuildExternalPlugin");
async function build(opts) {
  var _a;
  const outdir = import_path.default.join(import_path.default.dirname(opts.entryPoints[0]), "out");
  const alias = ((_a = opts.config) == null ? void 0 : _a.alias) || {};
  const tsconfig = (0, import_fs.existsSync)(import_path.default.join(opts.config.cwd, "tsconfig.json")) ? "tsconfig.json" : void 0;
  const buildOptions = {
    // 需要指定 absWorkingDir 兼容 APP_ROOT 的情况
    absWorkingDir: opts.config.cwd,
    format: "esm",
    platform: "browser",
    target: "esnext",
    loader: {
      // use tsx loader for js/jsx/ts/tsx files
      // since only ts support paramDecorator
      ...import_constant.possibleExtUsingEmptyLoader,
      ".js": "tsx",
      ".jsx": "tsx",
      ".ts": "ts",
      ".tsx": "tsx"
    },
    tsconfig,
    // do I need this?
    // incremental: true,
    bundle: true,
    logLevel: "error",
    entryPoints: opts.entryPoints,
    write: opts.write || false,
    outdir,
    metafile: true,
    plugins: [
      // why externals must be in front of alias?
      // e.g.
      // if we have alias { 'foo': 'path' }
      // then we import 'foo/bar.less'
      // if we resolve alias first, we will get { path }
      // if we resolve externals first, we will get { external: true }
      (0, import_esbuildExternalPlugin.esbuildExternalPlugin)({ alias }),
      (0, import_esbuildAliasPlugin.esbuildAliasPlugin)({ alias }),
      (0, import_watchRebuild.esbuildWatchRebuildPlugin)({
        onRebuild(err, result) {
          if (err) {
            import_utils.logger.error(`[icons] build failed: ${err}`);
          } else {
            if (opts.watch) {
              opts.watch.onRebuildSuccess({ result });
            }
          }
        }
      }),
      ...opts.plugins || []
    ]
  };
  if (opts.watch) {
    const ctx = await import_esbuild.default.context(buildOptions);
    const result = await ctx.rebuild();
    await ctx.watch();
    return [result, ctx];
  } else {
    const result = await import_esbuild.default.build(buildOptions);
    return [result, void 0];
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  build
});
