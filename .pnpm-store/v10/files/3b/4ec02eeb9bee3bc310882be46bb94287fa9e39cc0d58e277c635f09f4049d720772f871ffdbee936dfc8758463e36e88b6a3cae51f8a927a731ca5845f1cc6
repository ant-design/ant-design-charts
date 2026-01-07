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

// src/schema.ts
var schema_exports = {};
__export(schema_exports, {
  getSchemas: () => getSchemas
});
module.exports = __toCommonJS(schema_exports);
var import_types = require("./types");
function getSchemas() {
  return {
    alias: (Joi) => Joi.object(),
    analyze: (Joi) => Joi.object(),
    autoCSSModules: (Joi) => Joi.boolean(),
    autoprefixer: (Joi) => Joi.object(),
    copy: (Joi) => Joi.array().items(
      Joi.alternatives().try(
        Joi.string(),
        Joi.object().keys({
          from: Joi.string(),
          to: Joi.string()
        })
      )
    ),
    define: (Joi) => Joi.object(),
    externals: (Joi) => Joi.object().pattern(/^/, Joi.string()),
    extraBabelPlugins: (Joi) => Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.alternatives().try(Joi.string(), Joi.object()))
    ),
    extraBabelPresets: (Joi) => Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.alternatives().try(Joi.string(), Joi.object()))
    ),
    extraPostCSSPlugins: (Joi) => Joi.array(),
    extraVitePlugins: (Joi) => Joi.array(),
    hash: (Joi) => Joi.boolean(),
    inlineLimit: (Joi) => Joi.number(),
    jsMinifier: (Joi) => Joi.alternatives().try(
      Joi.string().valid(import_types.JSMinifier.esbuild, import_types.JSMinifier.terser),
      Joi.boolean()
    ),
    jsMinifierOptions: (Joi) => Joi.object(),
    legacy: (Joi) => Joi.alternatives().try(Joi.object(), Joi.boolean()),
    lessLoader: (Joi) => Joi.object().keys({
      lessOptions: Joi.object()
    }),
    manifest: (Joi) => Joi.boolean(),
    outputPath: (Joi) => Joi.string(),
    polyfill: (Joi) => Joi.object().keys({
      imports: Joi.array().items(Joi.string())
    }),
    postcssLoader: (Joi) => Joi.object().keys({
      postcssOptions: Joi.object()
    }),
    proxy: (Joi) => Joi.object(),
    publicPath: (Joi) => Joi.string(),
    svgo: (Joi) => Joi.alternatives().try(Joi.object(), Joi.boolean()),
    svgr: (Joi) => Joi.object(),
    targets: (Joi) => Joi.object(),
    theme: (Joi) => Joi.object()
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getSchemas
});
