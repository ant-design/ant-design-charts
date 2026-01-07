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

// src/config/definePlugin.ts
var definePlugin_exports = {};
__export(definePlugin_exports, {
  addDefinePlugin: () => addDefinePlugin,
  resolveDefine: () => resolveDefine
});
module.exports = __toCommonJS(definePlugin_exports);
var import_webpack = require("@umijs/bundler-webpack/compiled/webpack");
var prefixRE = /^UMI_APP_/;
var ENV_SHOULD_PASS = ["NODE_ENV", "HMR", "SOCKET_SERVER", "ERROR_OVERLAY"];
var SOCKET_IGNORE_HOSTS = ["0.0.0.0", "127.0.0.1", "localhost"];
var CUSTOM_ENV_GETTER = {
  SOCKET_SERVER: (opts) => {
    const { userConfig, host, port } = opts;
    const socketServer = process.env.SOCKET_SERVER;
    if (socketServer) {
      return socketServer;
    }
    if (host && !SOCKET_IGNORE_HOSTS.includes(host)) {
      const protocol = userConfig.https ? "https:" : "http:";
      return `${protocol}//${host}:${port || 8e3}`;
    }
    return;
  }
};
function resolveDefine(opts) {
  const { userConfig } = opts;
  const env = {};
  ENV_SHOULD_PASS.concat(
    Object.keys(process.env).filter((k) => prefixRE.test(k))
  ).forEach((key) => {
    const envValue = CUSTOM_ENV_GETTER[key] ? CUSTOM_ENV_GETTER[key](opts) : process.env[key];
    if (typeof envValue === "undefined") {
      return;
    }
    env[key] = envValue;
  });
  env.PUBLIC_PATH = userConfig.publicPath || "/";
  const define = {};
  if (userConfig.define) {
    for (const key in userConfig.define) {
      define[key] = JSON.stringify(userConfig.define[key]);
    }
  }
  for (const key in env) {
    env[key] = JSON.stringify(env[key]);
  }
  return {
    "process.env": env,
    "process.env.SSR_MANIFEST": "process.env.SSR_MANIFEST",
    ...define
  };
}
async function addDefinePlugin(opts) {
  const { config } = opts;
  config.plugin("define").use(import_webpack.DefinePlugin, [resolveDefine(opts)]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addDefinePlugin,
  resolveDefine
});
