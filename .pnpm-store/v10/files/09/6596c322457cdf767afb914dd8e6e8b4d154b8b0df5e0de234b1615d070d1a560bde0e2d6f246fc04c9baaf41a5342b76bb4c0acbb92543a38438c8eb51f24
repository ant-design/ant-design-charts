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

// src/utils/routeExportExtractor.ts
var routeExportExtractor_exports = {};
__export(routeExportExtractor_exports, {
  setupRouteExportExtractor: () => setupRouteExportExtractor
});
module.exports = __toCommonJS(routeExportExtractor_exports);
var import_esbuild = __toESM(require("@umijs/bundler-utils/compiled/esbuild"));
var import_path = require("path");
function setupRouteExportExtractor(opts) {
  const { api, entryFile, propertyName, outFile } = opts;
  api.onGenerateFiles(() => {
    generateRouteExportTmpFile({
      api,
      propertyName,
      entryFile
    });
  });
  api.onBeforeCompiler(async () => {
    await setupExportExtractBuilder({
      api,
      entryFile,
      outFile
    });
  });
}
function generateRouteExportTmpFile(opts) {
  const { api, entryFile, propertyName } = opts;
  const imports = [];
  const defines = [];
  const routeIds = Object.keys(api.appData.routes);
  let index = 0;
  for (const id of routeIds) {
    const route = api.appData.routes[id];
    if (route[propertyName]) {
      index += 1;
      imports.push(
        `import { ${propertyName} as ${propertyName}_${index} } from '${route.__absFile}';`
      );
      defines.push(`  '${id}': ${propertyName}_${index},`);
    }
  }
  api.writeTmpFile({
    noPluginDir: true,
    path: entryFile,
    content: `
${imports.join("\n")}
export default {
${defines.join("\n")}
};
    `
  });
}
async function setupExportExtractBuilder(opts) {
  const { api, entryFile, outFile } = opts;
  const buildOptions = {
    format: "esm",
    platform: "browser",
    target: "esnext",
    loader,
    bundle: true,
    logLevel: "error",
    entryPoints: [(0, import_path.join)(api.paths.absTmpPath, entryFile)],
    outfile: (0, import_path.join)(api.paths.absTmpPath, outFile),
    absWorkingDir: api.cwd,
    plugins: [
      {
        name: "imports",
        setup(build) {
          let entry;
          build.onResolve({ filter: /.*/ }, (args) => {
            if (args.kind === "entry-point")
              entry = args.path;
            if (args.kind === "entry-point" || args.importer === entry) {
              return { path: (0, import_path.resolve)(args.resolveDir, args.path) };
            }
            return {
              path: !args.path.startsWith(".") && !args.path.startsWith("/") ? args.path : (0, import_path.resolve)(args.resolveDir, args.path),
              external: true,
              sideEffects: false
            };
          });
        }
      }
    ]
  };
  if (api.env === "development") {
    const ctx = await import_esbuild.default.context(buildOptions);
    await ctx.rebuild();
    await ctx.watch();
  } else {
    await import_esbuild.default.build(buildOptions);
  }
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
  setupRouteExportExtractor
});
