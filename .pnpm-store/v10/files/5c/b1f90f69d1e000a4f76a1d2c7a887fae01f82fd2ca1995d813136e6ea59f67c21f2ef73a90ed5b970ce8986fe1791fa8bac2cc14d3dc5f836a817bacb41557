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

// src/features/utoopack/utoopack.ts
var utoopack_exports = {};
__export(utoopack_exports, {
  default: () => utoopack_default
});
module.exports = __toCommonJS(utoopack_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_extractEntryAssets = require("../../utils/extractEntryAssets");
var utoopack_default = (api) => {
  api.describe({
    key: "utoopack",
    config: {
      schema({ zod }) {
        return zod.object({}).partial();
      }
    },
    enableBy: () => Boolean(api.userConfig.utoopack) || Boolean(process.env.FORCE_UTOOPACK)
  });
  api.onCheck(() => {
    (0, import_utils.checkVersion)(20, `Node 20 is required when using utoopack.`);
  });
  const assets = {
    // Will contain all js and mjs files
    js: [],
    // Will contain all css files
    css: []
  };
  api.modifyAppData((memo) => {
    memo.bundler = "utoopack";
    return memo;
  });
  api.modifyConfig((memo) => {
    if (!api.userConfig.utoopack) {
      return memo;
    }
    return {
      ...memo,
      mfsu: false,
      hmrGuardian: false,
      utoopack: {
        ...memo.utoopack
      }
    };
  });
  api.onStart(() => {
    process.env.UTOOPACK = process.env.UTOOPACK || require.resolve("@umijs/bundler-utoopack");
    try {
      const pkg = require((0, import_path.join)(
        require.resolve("@utoo/pack"),
        "../../package.json"
      ));
      api.logger.info(`Using @utoo/pack@${pkg.version}`);
    } catch (e) {
      console.error(e);
    }
  });
  api.onDevCompileDone(({ stats }) => {
    var _a, _b, _c;
    const entryPointFiles = /* @__PURE__ */ new Set();
    for (const chunk of ((_b = (_a = stats.entrypoints) == null ? void 0 : _a["umi"]) == null ? void 0 : _b.chunks) || []) {
      const files = ((_c = ((stats == null ? void 0 : stats.chunks) || []).find((c) => (c == null ? void 0 : c.id) === chunk)) == null ? void 0 : _c.files) || [];
      for (const file of files) {
        entryPointFiles.add(file);
      }
    }
    const entryAssets = (0, import_extractEntryAssets.extractEntryAssets)(Array.from(entryPointFiles));
    Object.entries(entryAssets).forEach(([ext, files]) => {
      if (!Array.isArray(assets[ext])) {
        assets[ext] = [];
      }
      assets[ext].push(...files);
    });
    const allAssets = (stats.assets || []).map((asset) => asset.name);
    for (const asset of allAssets) {
      if (asset.endsWith(".js") && !assets.js.includes(asset) && !asset.includes("umi.js")) {
        assets.js.push(asset);
      } else if (asset.endsWith(".css") && !assets.css.includes(asset)) {
        assets.css.push(asset);
      }
    }
  });
  api.onBuildComplete(({ stats }) => {
    var _a, _b, _c;
    const entryPointFiles = /* @__PURE__ */ new Set();
    for (const chunk of ((_b = (_a = stats.entrypoints) == null ? void 0 : _a["umi"]) == null ? void 0 : _b.chunks) || []) {
      const files = ((_c = ((stats == null ? void 0 : stats.chunks) || []).find((c) => (c == null ? void 0 : c.id) === chunk)) == null ? void 0 : _c.files) || [];
      for (const file of files) {
        entryPointFiles.add(file);
      }
    }
    const entryAssets = (0, import_extractEntryAssets.extractEntryAssets)(Array.from(entryPointFiles));
    Object.entries(entryAssets).forEach(([ext, files]) => {
      if (!Array.isArray(assets[ext])) {
        assets[ext] = [];
      }
      assets[ext].push(...files);
    });
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
