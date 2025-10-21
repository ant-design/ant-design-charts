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

// src/features/apiRoute/apiRoute.ts
var apiRoute_exports = {};
__export(apiRoute_exports, {
  default: () => apiRoute_default
});
module.exports = __toCommonJS(apiRoute_exports);
var import_utils = require("@umijs/utils");
var import_fs = __toESM(require("fs"));
var import_path = require("path");
var import_watch = require("../../commands/dev/watch");
var import_constants = require("../../constants");
var import_constants2 = require("./constants");
var import_esbuild = __toESM(require("./dev-server/esbuild"));
var import_utils2 = require("./utils");
var import_esbuild2 = __toESM(require("./vercel/esbuild"));
function getPlatform(p) {
  switch (p) {
    case "vercel":
      return "vercel" /* Vercel */;
    case "netlify":
      return "netlify" /* Netlify */;
    case "worker":
      return "worker" /* Worker */;
    default:
      return void 0;
  }
}
var apiRoute_default = (api) => {
  let platform;
  api.describe({
    key: "apiRoute",
    config: {
      schema({ zod }) {
        return zod.object({
          platform: zod.string()
        }).deepPartial();
      }
    },
    enableBy: () => {
      const hasApiRoutes = import_fs.default.existsSync((0, import_path.join)(api.paths.absSrcPath, "api"));
      if (!hasApiRoutes)
        return false;
      const config = api.userConfig.apiRoute;
      if (!config) {
        return false;
      }
      if (!config.platform) {
        import_utils.logger.warn(
          "Please set config.apiRoute.platform to enable API route feature!"
        );
        return false;
      }
      platform = getPlatform(config.platform);
      if (!platform) {
        import_utils.logger.warn(
          "There is an invalid value of config.apiRoute.platform: " + config.platform + ", so API route feature will not be enabled!"
        );
        return false;
      }
      if (platform !== "vercel" /* Vercel */) {
        import_utils.logger.warn(
          "Current version of Umi only supports deploying API routes to Vercel, so API route feature will not be enabled!"
        );
        return false;
      }
      if (!import_fs.default.existsSync((0, import_path.join)(api.paths.cwd, "vercel.json"))) {
        import_utils.logger.warn(
          "You have enabled the API route feature, but there is no vercel.json file in your work directory! Automatically creating a vercel.json file ..."
        );
        import_fs.default.writeFileSync(
          (0, import_path.join)(api.paths.cwd, "vercel.json"),
          JSON.stringify(
            { build: { env: { ENABLE_FILE_SYSTEM_API: "1" } } },
            null,
            2
          )
        );
      }
      return true;
    }
  });
  api.onStart(() => {
    import_utils.logger.warn(`ApiRoute feature is in beta, may be unstable`);
  });
  api.onGenerateFiles(async () => {
    const apiRoutes = Object.keys(api.appData.apiRoutes).map(
      (k) => api.appData.apiRoutes[k]
    );
    apiRoutes.map((apiRoute) => {
      api.writeTmpFile({
        noPluginDir: true,
        path: (0, import_path.join)("api", apiRoute.file),
        tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "apiRoute.tpl"),
        context: {
          adapterPath: (0, import_utils.winPath)((0, import_path.resolve)(__dirname, "../apiRoute/index.js")),
          apiRootDirPath: (0, import_utils.winPath)((0, import_path.join)(api.paths.absTmpPath, "api")),
          handlerPath: (0, import_utils.winPath)(
            (0, import_path.join)(api.paths.absSrcPath, "api", apiRoute.file)
          ),
          apiRoutes: JSON.stringify(apiRoutes)
        }
      });
    });
    const middlewares = await api.applyPlugins({
      key: "addApiMiddlewares"
    });
    middlewares.forEach((middleware) => {
      middleware.path = (0, import_utils.winPath)(middleware.path);
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "api/_middlewares.ts",
      tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "middlewares.tpl"),
      context: { middlewares }
    });
  });
  api.addBeforeMiddlewares(() => [
    async (req, res, next) => {
      if (req.path.startsWith("/api")) {
        const path = req.path.replace("/api", "");
        const apiRoutes = Object.keys(api.appData.apiRoutes).map(
          (k) => api.appData.apiRoutes[k]
        );
        const matchedApiRoute = (0, import_utils2.matchApiRoute)(apiRoutes, path);
        if (!matchedApiRoute) {
          import_utils.logger.warn(`404 - ${req.path}`);
          next();
          return;
        }
        await require((0, import_path.join)(
          api.paths.cwd,
          import_constants2.OUTPUT_PATH,
          matchedApiRoute.route.file
        ).replace(".ts", ".js")).default(req, res);
        return;
      }
      next();
    }
  ]);
  api.addTmpGenerateWatcherPaths(() => [api.paths.absApiRoutesPath]);
  api.onBeforeCompiler(async () => {
    if (api.env === "development") {
      (0, import_watch.watch)({
        path: (0, import_path.join)(api.paths.absApiRoutesPath),
        addToUnWatches: true,
        onChange(e, p) {
          if (e === "add") {
            import_utils.logger.event(
              `New API route ${(0, import_path.basename)(p)} detected, compiling ...`
            );
            api.restartServer();
            return;
          }
          if (e === "unlink") {
            import_utils.logger.event(
              `API route ${(0, import_path.basename)(p)} has been removed, compiling ...`
            );
            api.restartServer();
            return;
          }
        }
      });
    }
    const apiRoutes = Object.keys(api.appData.apiRoutes).map(
      (k) => api.appData.apiRoutes[k]
    );
    if (api.env === "development") {
      await (0, import_esbuild.default)(api, apiRoutes);
      return;
    }
    if (import_fs.default.existsSync((0, import_path.join)(api.paths.cwd, import_constants2.OUTPUT_PATH))) {
      await import_fs.default.rmdirSync((0, import_path.join)(api.paths.cwd, import_constants2.OUTPUT_PATH), {
        recursive: true
      });
    }
    switch (platform) {
      case "vercel" /* Vercel */:
        await (0, import_esbuild2.default)(api, apiRoutes);
        return;
      case "netlify" /* Netlify */:
        import_utils.logger.error("API routes bundle failed: Netlify is not supported yet!");
        return;
      case "worker" /* Worker */:
        import_utils.logger.error(
          "API routes bundle failed: Cloudflare Worker is not supported yet!"
        );
        return;
      default:
        throw new Error(
          `API routes bundle failed: Unsupported platform: ${platform}`
        );
    }
  });
};
