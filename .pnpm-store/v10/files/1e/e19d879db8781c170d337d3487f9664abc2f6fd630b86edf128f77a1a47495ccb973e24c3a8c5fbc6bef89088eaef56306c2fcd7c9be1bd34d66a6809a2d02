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

// src/features/sitemap.ts
var sitemap_exports = {};
__export(sitemap_exports, {
  default: () => sitemap_default
});
module.exports = __toCommonJS(sitemap_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_sitemap = require("sitemap");
var sitemap_default = (api) => {
  api.describe({
    key: "sitemap",
    config: {
      schema(joi) {
        return joi.object({
          hostname: joi.string().required(),
          exclude: joi.array().items(joi.string())
        });
      }
    },
    enableBy: ({ userConfig, env }) => userConfig.sitemap && env === "production"
  });
  api.onBuildComplete(async () => {
    const smis = new import_sitemap.SitemapStream({
      hostname: api.config.sitemap.hostname,
      xmlns: { video: false, image: false, news: false, xhtml: false }
    });
    const exclude = ["/404"].concat(api.config.sitemap.exclude || []);
    const writeStream = import_fs.default.createWriteStream(
      import_path.default.join(api.paths.absOutputPath, "sitemap.xml")
    );
    smis.pipe(writeStream);
    Object.values(api.appData.routes).forEach((route) => {
      if (
        // ignore specific paths
        !exclude.includes(route.path) && // ignore dynamic route, such as /~demos/:uuid
        ![":", "*"].some((char) => route.path.includes(char)) && // ignore duplicate URLs
        !route.isLayout
      ) {
        smis.write({ url: route.path });
      }
    });
    smis.end();
    await new Promise((resolve) => {
      writeStream.on("close", resolve);
    });
  });
};
