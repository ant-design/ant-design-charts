var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/routePreloadOnLoad/routePreloadOnLoad.ts
var routePreloadOnLoad_exports = {};
__export(routePreloadOnLoad_exports, {
  default: () => routePreloadOnLoad_default
});
module.exports = __toCommonJS(routePreloadOnLoad_exports);
var import_utils = require("@umijs/utils");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_path = require("path");
var import_constants = require("../../constants");
var import_scan = require("../../libs/scan");
var import_utils2 = require("./utils");
var import_terser = require("@umijs/bundler-webpack/compiled/terser");
var routeScoreCache = /* @__PURE__ */ new Map();
function computeRouteScore(path) {
  if (!routeScoreCache.get(path)) {
    const paramRe = /^:[\w-]+$/;
    const dynamicSegmentValue = 3;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s) => s === "*";
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    routeScoreCache.set(
      path,
      segments.filter((s) => !isSplat(s)).reduce(
        (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
        initialScore
      )
    );
  }
  return routeScoreCache.get(path);
}
async function getRouteChunkFilesMap(chunks, opts) {
  var _a;
  const { resolver, routeModuleName, routeModulePath } = opts;
  const routeChunkFiles = {};
  const routeFileChunksMap = {};
  const pickPreloadFiles = (files) => files.filter((f) => f.endsWith(".js") || f.endsWith(".css"));
  const routeFileResolveCache = {};
  for (const chunk of chunks) {
    if (chunk.entry) continue;
    const pickedFiles = pickPreloadFiles(chunk.files);
    const routeOrigins = (chunk.origins || []).filter(
      (origin) => {
        var _a2;
        return (_a2 = origin.moduleName) == null ? void 0 : _a2.endsWith(routeModuleName);
      }
    );
    for (const origin of routeOrigins) {
      let fileAbsPath;
      try {
        fileAbsPath = routeFileResolveCache[_a = origin.request] ?? (routeFileResolveCache[_a] = await resolver.resolve((0, import_path.dirname)(routeModulePath), origin.request));
      } catch (err) {
        import_utils.logger.error(
          `[routePreloadOnLoad]: route file resolve error, cannot preload for ${origin.request}`
        );
        continue;
      }
      pickedFiles.forEach((file) => {
        routeChunkFiles[file] ?? (routeChunkFiles[file] = {
          index: Object.keys(routeChunkFiles).length,
          id: chunk.id
        });
      });
      (routeFileChunksMap[fileAbsPath] ?? (routeFileChunksMap[fileAbsPath] = {
        files: pickedFiles.slice()
      })).files.push(...pickedFiles);
    }
  }
  Object.values(routeFileChunksMap).forEach((item) => {
    item.indexes = item.files.map((f) => routeChunkFiles[f].index);
  });
  return {
    routeChunkFiles,
    routeFileChunksMap
  };
}
async function getRoutePathFilesMap(routes, fileChunksMap, opts) {
  var _a;
  const { resolver, absPagesPath } = opts;
  const routeFilesMap = {};
  for (const route of Object.values(routes)) {
    if (!route.file) continue;
    if (!((_a = route.absPath) == null ? void 0 : _a.startsWith("/"))) {
      import_utils.logger.error(
        `[routePreloadOnLoad]: route absPath error, cannot preload for ${route.absPath}`
      );
      continue;
    }
    let current = route;
    const files = [];
    do {
      if (current.file && !current.file.startsWith("(")) {
        try {
          const fileReqPath = (0, import_path.isAbsolute)(current.file) || current.file.startsWith("@/") ? current.file : (
            // a => ./a
            // .a => ./.a
            current.file.replace(/^([^.]|\.[^./])/, "./$1")
          );
          const fileAbsPath = await resolver.resolve(absPagesPath, fileReqPath);
          files.push(fileAbsPath);
        } catch {
          import_utils.logger.error(
            `[routePreloadOnLoad]: route file resolve error, cannot preload for ${current.file}`
          );
        }
      }
      current = current.parentId ? routes[current.parentId] : void 0;
    } while (current);
    const indexes = Array.from(
      // use set to avoid duplicated indexes
      files.reduce((indexSet, file) => {
        var _a2;
        (_a2 = fileChunksMap[file]) == null ? void 0 : _a2.indexes.forEach((i) => indexSet.add(i));
        return indexSet;
      }, /* @__PURE__ */ new Set())
    );
    const { absPath } = route;
    routeFilesMap[absPath] = // why different route may has same absPath?
    // because umi implement route.wrappers via nested routes way, the wrapper route will has same absPath with the nested route
    // so we always select the longest file indexes for the nested route
    !routeFilesMap[absPath] || routeFilesMap[absPath].length < indexes.length ? indexes : routeFilesMap[absPath];
  }
  return routeFilesMap;
}
var routePreloadOnLoad_default = (api) => {
  let routeChunkFilesMap;
  let preloadJSFileExt = ".js";
  api.describe({
    enableBy: () => {
      var _a;
      return (
        // enable when package name available
        // because preload script use package name as attribute prefix value
        Boolean(api.pkg.name) && // vite mode is not supported currently
        !api.config.vite && // mpa mode is unnecessary
        !api.config.mpa && // only esm router needs this feature
        ((_a = api.config.routeLoader) == null ? void 0 : _a.moduleType) === "esm"
      );
    }
  });
  api.addHTMLHeadScripts({
    fn: () => {
      if (api.name === "build" && routeChunkFilesMap) {
        const { publicPath } = api.config;
        const displayPublicPath = publicPath === "auto" ? "/" : publicPath;
        return api.config.tern ? (
          // map mode
          [
            {
              type: import_utils2.PRELOAD_ROUTE_MAP_SCP_TYPE,
              content: JSON.stringify(routeChunkFilesMap)
            }
          ]
        ) : (
          // script mode
          [
            {
              src: `${displayPublicPath}${import_utils2.PRELOAD_ROUTE_HELPER}${preloadJSFileExt}`
            }
          ]
        );
      }
      return [];
    },
    stage: Infinity
  });
  api.onBuildComplete(async ({ err, stats }) => {
    if (!err && !stats.hasErrors()) {
      const routeModulePath = (0, import_path.join)(api.paths.absTmpPath, "core/route.tsx");
      const resolver = (0, import_scan.createResolver)({ alias: api.config.alias });
      const { chunks = [] } = stats.toJson ? (
        // webpack
        stats.toJson()
      ) : (
        // mako
        stats.compilation
      );
      const { routeChunkFiles, routeFileChunksMap } = await getRouteChunkFilesMap(chunks, {
        resolver,
        routeModulePath,
        routeModuleName: (0, import_utils.winPath)((0, import_path.relative)(api.cwd, routeModulePath))
      });
      const routeFilesMap = await getRoutePathFilesMap(
        api.appData.routes,
        routeFileChunksMap,
        { resolver, absPagesPath: api.paths.absPagesPath }
      );
      if (!import_utils.lodash.isEmpty(routeChunkFiles) && !import_utils.lodash.isEmpty(routeFilesMap)) {
        routeChunkFilesMap = {
          p: api.pkg.name,
          b: api.appData.bundler,
          f: Object.entries(routeChunkFiles).sort((a, b) => a[1].index - b[1].index).map(([k, { id }]) => [k, id]),
          // sort similar to react-router@6
          r: (0, import_utils.lodash)(routeFilesMap).toPairs().sort(
            ([a], [b]) => computeRouteScore(a) - computeRouteScore(b)
          ).fromPairs().value()
        };
      }
      if (api.name === "build" && routeChunkFilesMap && !api.config.tern) {
        let content = (0, import_fs.readFileSync)(
          (0, import_path.join)(import_constants.TEMPLATES_DIR, "routePreloadOnLoad/preloadRouteFilesScp.js"),
          "utf-8"
        ).replace(
          '"{{routeChunkFilesMap}}"',
          JSON.stringify(routeChunkFilesMap)
        ).replace("{{basename}}", api.config.base).replace(
          '"{{publicPath}}"',
          `${// handle runtimePublicPath
          api.config.runtimePublicPath ? "window.publicPath||" : ""}"${api.config.publicPath}"`
        );
        if (api.env === "production") {
          try {
            const minified = await (0, import_terser.minify)(content, {
              compress: {
                drop_console: false,
                // Keep console logs if any
                drop_debugger: true
              },
              mangle: true,
              format: {
                comments: false
                // Remove comments
              }
            });
            content = minified.code || content;
          } catch (err2) {
            import_utils.logger.warn(
              `Failed to minify ${import_utils2.PRELOAD_ROUTE_HELPER}.js, using unminified version.`
            );
            import_utils.logger.warn(err2);
          }
        }
        if (api.config.hash) {
          preloadJSFileExt = `.${(0, import_crypto.createHash)("md5").update(content).digest("hex").substring(0, 8)}.js`;
        }
        (0, import_fs.writeFileSync)(
          (0, import_path.join)(
            api.paths.absOutputPath,
            `${import_utils2.PRELOAD_ROUTE_HELPER}${preloadJSFileExt}`
          ),
          content,
          "utf-8"
        );
      }
    }
  });
};
