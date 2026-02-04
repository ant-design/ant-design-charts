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

// src/commands/preview.ts
var preview_exports = {};
__export(preview_exports, {
  default: () => preview_default
});
module.exports = __toCommonJS(preview_exports);
var import_bundler_utils = require("@umijs/bundler-utils");
var import_express = __toESM(require("@umijs/bundler-utils/compiled/express"));
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_fs = require("fs");
var import_http = __toESM(require("http"));
var import_path = require("path");
var import_sirv = __toESM(require("../../compiled/sirv"));
var import_createMockMiddleware = require("../features/mock/createMockMiddleware");
var import_getMockData = require("../features/mock/getMockData");
var preview_default = (api) => {
  api.registerCommand({
    name: "preview",
    description: "locally preview production build",
    details: `
umi preview

# specify hostname
umi preview --host [host]

# specify port
umi preview --port [port]
`,
    fn: async function() {
      const distDir = (0, import_path.resolve)(api.cwd, api.paths.absOutputPath);
      (0, import_assert.default)(
        (0, import_fs.existsSync)(distDir),
        "build output dir not found, please run umi build"
      );
      const app = (0, import_express.default)();
      app.use((_req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
          "Access-Control-Allow-Headers",
          "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
        );
        res.header(
          "Access-Control-Allow-Methods",
          "GET, HEAD, PUT, POST, PATCH, DELETE, OPTIONS"
        );
        next();
      });
      app.use(require("@umijs/bundler-webpack/compiled/compression")());
      const { proxy } = api.userConfig;
      if (proxy) {
        (0, import_bundler_utils.createProxy)(proxy, app);
      }
      app.use(
        (0, import_createMockMiddleware.createMockMiddleware)({
          context: {
            mockData: (0, import_getMockData.getMockData)({
              cwd: api.cwd,
              mockConfig: api.config.mock || {}
            })
          }
        })
      );
      app.use(
        api.config.base,
        (0, import_sirv.default)(distDir, {
          etag: true,
          dev: true,
          single: true
        })
      );
      app.use(
        require("@umijs/bundler-webpack/compiled/connect-history-api-fallback")()
      );
      app.use((_req, res, next) => {
        var _a;
        const historyType = ((_a = api.config.history) == null ? void 0 : _a.type) || "browser";
        if (historyType === "browser" && api.config.base !== "/" && (_req.path === "/" || _req.path === "/index.html")) {
          return res.redirect(api.config.base);
        }
        next();
      });
      const server = api.userConfig.https ? await (0, import_bundler_utils.createHttpsServer)(app, api.userConfig.https) : import_http.default.createServer(app);
      if (!server) {
        return null;
      }
      const port = await import_utils.portfinder.getPortPromise({
        port: parseInt(String(api.args.port || 4172), 10)
      });
      const protocol = api.userConfig.https ? "https:" : "http:";
      server.listen(port, () => {
        const host = api.args.host && api.args.host !== "0.0.0.0" ? api.args.host : "localhost";
        import_utils.logger.ready(
          `App listening at ${import_utils.chalk.green(`${protocol}//${host}:${port}`)}`
        );
      });
    }
  });
};
