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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  build: () => build,
  dev: () => dev,
  findRootDir: () => import_pack.findRootDir
});
module.exports = __toCommonJS(src_exports);
var import_bundler_utils = require("@umijs/bundler-utils");
var import_express = __toESM(require("@umijs/bundler-utils/compiled/express"));
var import_http_proxy_middleware = require("@umijs/bundler-utils/compiled/http-proxy-middleware");
var import_utils = require("@umijs/utils");
var import_fs = __toESM(require("fs"));
var import_http = __toESM(require("http"));
var import_path = __toESM(require("path"));
var import_config = require("./config");
var import_pack = require("@utoo/pack");
__reExport(src_exports, require("./config"), module.exports);
async function build(opts) {
  var _a;
  const { cwd, onBuildComplete } = opts;
  const { build: utooPackBuild, findRootDir: findRootDir2 } = require("@utoo/pack");
  const rootDir = findRootDir2(cwd);
  const utooPackConfig = await (0, import_config.getProdUtooPackConfig)({
    ...opts,
    rootDir
  });
  try {
    await utooPackBuild(utooPackConfig, cwd, rootDir);
  } catch (e) {
    console.error(e.message);
    const err = new Error("Build with utoopack failed.");
    err.stack = null;
    throw err;
  }
  const statsPath = import_path.default.join(
    ((_a = utooPackConfig.config.output) == null ? void 0 : _a.path) || "dist",
    "stats.json"
  );
  const stats = JSON.parse(import_fs.default.readFileSync(statsPath, "utf-8"));
  stats.hasErrors = () => false;
  stats.toJson = () => stats;
  stats.toString = () => {
  };
  stats.compilation = {
    ...stats,
    assets: stats.assets.reduce(
      (acc, cur) => Object.assign(acc, { [cur.name]: cur }),
      {}
    )
  };
  await (onBuildComplete == null ? void 0 : onBuildComplete({
    stats
  }));
  return stats;
}
async function dev(opts) {
  const { cwd, onDevCompileDone } = opts;
  if (!opts) {
    throw new Error("opts should be supplied");
  }
  const { findRootDir: findRootDir2, serve: utooPackServe } = require("@utoo/pack");
  const rootDir = findRootDir2(cwd);
  const utooPackConfig = await (0, import_config.getDevUtooPackConfig)({
    ...opts,
    rootDir
  });
  const app = (0, import_express.default)();
  const cors = require("cors");
  const proxy = require("express-http-proxy");
  const port = opts.port || 8e3;
  const utooServePort = port + 1;
  app.use(
    cors({
      origin: true,
      methods: ["GET", "HEAD", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
      credentials: true
    })
  );
  app.use(require("compression")());
  if (opts.onBeforeMiddleware) {
    opts.onBeforeMiddleware(app);
  }
  (opts.beforeMiddlewares || []).forEach((m) => app.use(m));
  const wsProxy = (0, import_http_proxy_middleware.createProxyMiddleware)({
    target: `http://127.0.0.1:${utooServePort}`,
    ws: true,
    logLevel: "silent"
  });
  app.use("/turbopack-hmr", wsProxy);
  if (opts.config.proxy) {
    (0, import_bundler_utils.createProxy)(opts.config.proxy, app);
  }
  app.use(
    proxy(`http://127.0.0.1:${utooServePort}`, {
      proxyReqOptDecorator: function(proxyReqOpts) {
        proxyReqOpts.agent = false;
        return proxyReqOpts;
      },
      filter: function(req, _res) {
        return req.method == "GET" || req.method == "HEAD";
      },
      skipToNextHandlerFilter: function(proxyRes) {
        return proxyRes.statusCode !== 200 && proxyRes.statusCode !== 304;
      }
    })
  );
  (opts.afterMiddlewares || []).forEach((m) => {
    if (m.toString().includes("{ compiler }")) {
      app.use(m({}));
    } else {
      app.use(m);
    }
  });
  app.use(
    require("connect-history-api-fallback")({
      index: "/"
    })
  );
  let server;
  const httpsOpts = opts.config.https;
  if (httpsOpts) {
    httpsOpts.hosts || (httpsOpts.hosts = import_utils.lodash.uniq(
      [
        ...httpsOpts.hosts || [],
        // always add localhost, 127.0.0.1, ip and host
        "127.0.0.1",
        "localhost",
        opts.ip,
        opts.host !== "0.0.0.0" && opts.host
      ].filter(Boolean)
    ));
    server = await (0, import_bundler_utils.createHttpsServer)(app, httpsOpts);
  } else {
    server = import_http.default.createServer(app);
  }
  server.listen(port, () => {
    const protocol = opts.config.https ? "https:" : "http:";
    const banner = getDevBanner(
      protocol,
      opts.host,
      port,
      opts.ip ?? "0.0.0.0"
    );
    console.log(banner);
  });
  if (wsProxy.upgrade) {
    server.on("upgrade", wsProxy.upgrade);
  }
  const createStatsObject = () => {
    var _a;
    let stats;
    try {
      const statsPath = import_path.default.join(
        ((_a = utooPackConfig.config.output) == null ? void 0 : _a.path) || "dist",
        "stats.json"
      );
      stats = JSON.parse(import_fs.default.readFileSync(statsPath, "utf-8"));
    } catch (e) {
      throw new Error("Stats.json not found by utoopack dev");
    }
    stats.hasErrors = () => false;
    stats.toJson = () => stats;
    stats.toString = () => {
    };
    stats.compilation = {
      ...stats,
      assets: stats.assets.reduce(
        (acc, cur) => Object.assign(acc, { [cur.name]: cur }),
        {}
      )
    };
    return stats;
  };
  try {
    await utooPackServe(utooPackConfig, cwd, rootDir, {
      port: utooServePort,
      hostname: opts.host
    });
    const stats = createStatsObject();
    await (onDevCompileDone == null ? void 0 : onDevCompileDone({
      stats
    }));
    return stats;
  } catch (e) {
    console.error(e.message);
  }
}
function getDevBanner(protocol, host, port, ip) {
  const hostStr = host === "0.0.0.0" ? "localhost" : host;
  const messages = [];
  messages.push("  App listening at:");
  messages.push(
    `  - Local:   ${import_utils.chalk.cyan(`${protocol}//${hostStr}:${port}`)}`
  );
  messages.push(`  - Network: ${import_utils.chalk.cyan(`${protocol}//${ip}:${port}`)}`);
  return messages.join("\n");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  build,
  dev,
  findRootDir,
  ...require("./config")
});
