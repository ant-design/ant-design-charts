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

// src/dev.ts
var dev_exports = {};
__export(dev_exports, {
  dev: () => dev
});
module.exports = __toCommonJS(dev_exports);
var import_config = require("./config/config");
var import_server = require("./server/server");
var import_types = require("./types");
async function dev(opts) {
  const viteConfig = await (0, import_config.getConfig)({
    cwd: opts.cwd,
    env: import_types.Env.development,
    entry: opts.entry,
    userConfig: opts.config,
    extraBabelPlugins: [
      ...opts.beforeBabelPlugins || [],
      ...opts.extraBabelPlugins || []
    ],
    extraBabelPresets: [
      ...opts.beforeBabelPresets || [],
      ...opts.extraBabelPresets || []
    ],
    modifyViteConfig: opts.modifyViteConfig
  });
  await (0, import_server.createServer)({
    viteConfig,
    userConfig: opts.config,
    cwd: opts.cwd,
    port: opts.port,
    host: opts.host,
    beforeMiddlewares: opts.beforeMiddlewares,
    afterMiddlewares: opts.afterMiddlewares,
    onDevCompileDone: opts.onDevCompileDone,
    onBeforeMiddleware: opts.onBeforeMiddleware
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dev
});
