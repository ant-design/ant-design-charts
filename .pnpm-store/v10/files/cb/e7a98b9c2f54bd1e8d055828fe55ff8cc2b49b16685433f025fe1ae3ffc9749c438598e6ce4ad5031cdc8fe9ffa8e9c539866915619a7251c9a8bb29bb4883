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

// src/features/crossorigin/crossorigin.ts
var crossorigin_exports = {};
__export(crossorigin_exports, {
  default: () => crossorigin_default
});
module.exports = __toCommonJS(crossorigin_exports);
var crossorigin_default = (api) => {
  api.describe({
    key: "crossorigin",
    config: {
      schema({ zod }) {
        return zod.union([
          zod.boolean(),
          zod.object({
            includes: zod.array(zod.instanceof(RegExp)).optional()
          })
        ]);
      }
    },
    enableBy: api.EnableBy.config
  });
  api.chainWebpack((webpackConfig) => {
    webpackConfig.output.crossOriginLoading("anonymous");
    return webpackConfig;
  });
  api.modifyHTML({
    fn: ($) => {
      const opts = api.config.crossorigin || {};
      const includes = opts.includes || [];
      $("script").each((_i, elem) => {
        const el = $(elem);
        const scriptSrc = el.attr("src");
        if (!scriptSrc) {
          return;
        }
        if (!/^(https?:)?\/\//.test(scriptSrc)) {
          el.attr("crossorigin", "anonymous");
        }
        if (includes.some((reg) => reg.test(scriptSrc))) {
          el.attr("crossorigin", "anonymous");
        }
      });
      return $;
    },
    stage: Infinity
  });
};
