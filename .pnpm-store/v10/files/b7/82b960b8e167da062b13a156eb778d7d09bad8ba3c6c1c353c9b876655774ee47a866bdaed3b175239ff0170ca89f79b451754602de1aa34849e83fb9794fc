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

// src/features/ssr/builder/builder.ts
var builder_exports = {};
__export(builder_exports, {
  build: () => build,
  loader: () => loader
});
module.exports = __toCommonJS(builder_exports);
var import_watchRebuild = require("@umijs/bundler-esbuild/dist/plugins/watchRebuild");
var import_esbuild = __toESM(require("@umijs/bundler-utils/compiled/esbuild"));
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_utils2 = require("../utils");
var import_assets_loader = require("./assets-loader");
var import_css_loader = require("./css-loader");
var import_less_loader = require("./less-loader");
var import_svg_loader = __toESM(require("./svg-loader"));
async function build(opts) {
  const { api, watch } = opts;
  import_utils.logger.wait("[SSR] Compiling...");
  const now = (/* @__PURE__ */ new Date()).getTime();
  function getExternal() {
    if ((0, import_utils.isMonorepo)({ root: api.paths.cwd })) {
      return [];
    } else {
      const dependencies = Object.keys(api.pkg.dependencies || {});
      const devDependencies = Object.keys(api.pkg.devDependencies || {});
      return [...dependencies, ...devDependencies];
    }
  }
  const alias = import_utils.aliasUtils.parseCircleAlias({ alias: api.config.alias });
  const buildOptions = {
    alias,
    format: "cjs",
    platform: "node",
    target: "esnext",
    bundle: true,
    logLevel: "silent",
    inject: [(0, import_path.resolve)(api.paths.absTmpPath, "ssr/react-shim.js")],
    loader,
    entryPoints: [(0, import_path.resolve)(api.paths.absTmpPath, "umi.server.ts")],
    plugins: [
      (0, import_utils2.esbuildUmiPlugin)(api),
      (0, import_less_loader.lessLoader)({ cwd: api.cwd }),
      (0, import_css_loader.cssLoader)({ cwd: api.cwd }),
      (0, import_svg_loader.default)({ cwd: api.cwd }),
      (0, import_assets_loader.assetsLoader)({ cwd: api.cwd }),
      (0, import_watchRebuild.esbuildWatchRebuildPlugin)({
        onRebuild(err) {
          import_utils.logger.event("[SSR] Rebuilt");
          delete require.cache[(0, import_utils2.absServerBuildPath)(api)];
          if (err) {
            import_utils.logger.error(err);
          }
        }
      })
    ],
    outfile: (0, import_utils2.absServerBuildPath)(api),
    external: getExternal()
  };
  if (watch) {
    const ctx = await import_esbuild.default.context(buildOptions);
    await ctx.rebuild();
    await ctx.watch();
  } else {
    await import_esbuild.default.build(buildOptions);
  }
  const diff = (/* @__PURE__ */ new Date()).getTime() - now;
  import_utils.logger.info(`[SSR] Compiled in ${diff}ms`);
}
var loader = {
  ".aac": "file",
  ".css": "text",
  ".less": "text",
  ".sass": "text",
  ".scss": "text",
  ".eot": "file",
  ".flac": "file",
  ".gif": "file",
  ".htm": "file",
  ".html": "file",
  ".ico": "file",
  ".icon": "file",
  ".jpeg": "file",
  ".jpg": "file",
  ".js": "jsx",
  ".jsx": "jsx",
  ".json": "json",
  ".md": "jsx",
  ".mdx": "jsx",
  ".mp3": "file",
  ".mp4": "file",
  ".ogg": "file",
  ".otf": "file",
  ".png": "file",
  ".svg": "file",
  ".ts": "ts",
  ".tsx": "tsx",
  ".ttf": "file",
  ".wav": "file",
  ".webm": "file",
  ".webp": "file",
  ".woff": "file",
  ".woff2": "file"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  build,
  loader
});
