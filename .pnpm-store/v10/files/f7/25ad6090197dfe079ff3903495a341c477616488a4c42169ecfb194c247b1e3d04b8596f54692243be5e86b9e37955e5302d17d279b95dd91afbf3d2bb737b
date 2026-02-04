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

// src/commands/dev/plugins/ViteHtmlPlugin.ts
var ViteHtmlPlugin_exports = {};
__export(ViteHtmlPlugin_exports, {
  default: () => ViteHtmlPlugin
});
module.exports = __toCommonJS(ViteHtmlPlugin_exports);
var import_server = require("@umijs/server");
var import_getMarkupArgs = require("../getMarkupArgs");
function ViteHtmlPlugin(api) {
  return {
    name: "vite-plugin-umi-html",
    configureServer(server) {
      return () => {
        server.middlewares.use(async function kmiViteHtmlMiddleware(req, res, next) {
          var _a, _b, _c;
          if (!((_a = req.url) == null ? void 0 : _a.endsWith(".html")) && req.url !== "/") {
            return next();
          }
          if ((_b = req.headers.accept) == null ? void 0 : _b.includes("text/html")) {
            try {
              const viteScripts = [
                `${api.appData.hasSrcDir ? "/src" : ""}/.${api.service.frameworkName}/umi.ts`
              ];
              const markupArgs = await (0, import_getMarkupArgs.getMarkupArgs)({ api });
              const opts = {
                ...markupArgs,
                esmScript: true,
                scripts: viteScripts.concat(markupArgs.scripts),
                historyType: ((_c = api.config.history) == null ? void 0 : _c.type) || "browser"
              };
              const html = await (0, import_server.getMarkup)({ ...opts });
              res.setHeader("Content-Type", "text/html");
              res.end(await server.transformIndexHtml(req.url, html));
            } catch (e) {
              return next(e);
            }
          }
          next();
        });
      };
    }
  };
}
