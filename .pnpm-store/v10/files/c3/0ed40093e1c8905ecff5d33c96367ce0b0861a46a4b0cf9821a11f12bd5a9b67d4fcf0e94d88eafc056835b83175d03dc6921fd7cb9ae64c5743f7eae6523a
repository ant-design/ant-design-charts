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

// src/features/mako/mako.ts
var mako_exports = {};
__export(mako_exports, {
  default: () => mako_default
});
module.exports = __toCommonJS(mako_exports);
var import_path = __toESM(require("path"));
var import_extractEntryAssets = require("../../utils/extractEntryAssets");
var mako_default = (api) => {
  api.describe({
    key: "mako",
    config: {
      schema({ zod }) {
        return zod.object({
          plugins: zod.array(
            zod.object({
              load: zod.function(),
              generateEnd: zod.function()
            }).partial()
          ),
          px2rem: zod.object({
            root: zod.number(),
            propBlackList: zod.array(zod.string()),
            propWhiteList: zod.array(zod.string()),
            selectorBlackList: zod.array(zod.string()),
            selectorWhiteList: zod.array(zod.string()),
            selectorDoubleList: zod.array(zod.string())
          }).partial(),
          experimental: zod.object({
            webpackSyntaxValidate: zod.array(zod.string())
          }).partial(),
          flexBugs: zod.boolean(),
          optimization: zod.object({
            skipModules: zod.boolean()
          }).partial()
        }).partial();
      }
    },
    enableBy: api.EnableBy.config
  });
  const assets = {
    // Will contain all js and mjs files
    js: [],
    // Will contain all css files
    css: []
  };
  api.modifyConfig((memo) => {
    var _a;
    const makoPlugins = ((_a = memo.mako) == null ? void 0 : _a.plugins) || [];
    if (!api.config.mpa) {
      makoPlugins.push({
        name: "UmiHtmlGenerationMako",
        generateEnd: ({ stats }) => {
          var _a2;
          const entryPointFiles = /* @__PURE__ */ new Set();
          for (const chunk of ((_a2 = stats.entrypoints["umi"]) == null ? void 0 : _a2.chunks) || []) {
            const files = stats.chunks.find((c) => c.id === chunk).files;
            for (const file of files) {
              entryPointFiles.add(file);
            }
          }
          let entryAssets = (0, import_extractEntryAssets.extractEntryAssets)(Array.from(entryPointFiles));
          Object.entries(entryAssets).forEach(([ext, files]) => {
            if (!Array.isArray(assets[ext])) {
              assets[ext] = [];
            }
            assets[ext].push(...files);
          });
        }
      });
    }
    return {
      ...memo,
      mfsu: false,
      hmrGuardian: false,
      mako: {
        ...memo.mako,
        plugins: makoPlugins
      }
    };
  });
  api.onStart(() => {
    process.env.OKAM = process.env.OKAM || require.resolve("@umijs/bundler-mako");
    try {
      const pkg = require(import_path.default.join(
        require.resolve(process.env.OKAM),
        "../package.json"
      ));
      api.logger.info(`Using mako@${pkg.version}`);
      const isBigfish = process.env.BIGFISH_INFO;
      if (!isBigfish) {
        api.logger.info(
          `Mako is an extremely fast, production-grade web bundler based on Rust. If you encounter any issues, please checkout https://makojs.dev/ to join the community and report the issue.`
        );
      }
    } catch (e) {
      console.error(e);
    }
  });
  api.addHTMLStyles(() => {
    const { publicPath } = api.config;
    const displayPublicPath = publicPath === "auto" ? "/" : publicPath;
    return assets.css.map((css) => {
      return `${displayPublicPath}${css}`;
    });
  });
  api.addHTMLHeadScripts(() => {
    const { publicPath } = api.config;
    const displayPublicPath = publicPath === "auto" ? "/" : publicPath;
    return assets.js.map((js) => {
      return `${displayPublicPath}${js}`;
    });
  });
};
