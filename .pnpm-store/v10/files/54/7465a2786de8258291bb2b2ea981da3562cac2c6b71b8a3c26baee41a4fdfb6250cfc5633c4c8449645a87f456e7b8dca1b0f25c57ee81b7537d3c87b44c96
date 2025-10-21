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

// src/features/configPlugins/schema.ts
var schema_exports = {};
__export(schema_exports, {
  getSchemas: () => getSchemas
});
module.exports = __toCommonJS(schema_exports);
function getUnifiedPluginSchema(Joi) {
  return Joi.array().items(
    Joi.alternatives(
      Joi.string(),
      Joi.func(),
      Joi.array().items(Joi.alternatives(Joi.string(), Joi.func()), Joi.object()).length(2)
    )
  ).optional();
}
function getSchemas() {
  return {
    resolve: (Joi) => Joi.object({
      docDirs: Joi.array().items(
        Joi.alternatives(
          Joi.string(),
          Joi.object({ dir: Joi.string(), type: Joi.string().optional() })
        )
      ).optional(),
      atomDirs: Joi.array().items(
        Joi.object({
          type: Joi.string(),
          subType: Joi.string().optional(),
          dir: Joi.string()
        })
      ).optional(),
      codeBlockMode: Joi.string().valid("active", "passive").optional(),
      entryFile: Joi.string().optional(),
      forceKebabCaseRouting: Joi.bool().optional()
    }).optional(),
    extraRemarkPlugins: getUnifiedPluginSchema,
    extraRehypePlugins: getUnifiedPluginSchema,
    themeConfig: (Joi) => Joi.object().optional(),
    logo: (Joi) => Joi.string(),
    // FIXME: remove before 2.3.0
    live: (Joi) => Joi.bool().optional()
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getSchemas
});
