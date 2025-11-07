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
var import_utils = require("@umijs/utils");
function getSchemas() {
  const scriptsSchema = ({ zod }) => zod.array(
    zod.union([
      zod.string(),
      zod.object({
        src: zod.string().optional()
      }),
      zod.object({
        content: zod.string().optional()
      }),
      zod.record(zod.string(), zod.any())
    ])
  );
  return {
    analyze: ({ zod }) => zod.object({}),
    base: ({ zod }) => zod.string(),
    conventionLayout: ({ zod }) => zod.boolean(),
    conventionRoutes: ({ zod }) => zod.object({
      base: zod.string().optional(),
      exclude: zod.array(zod.any()).optional()
    }),
    esbuildMinifyIIFE: ({ zod }) => zod.boolean(),
    headScripts: scriptsSchema,
    history: ({ zod }) => zod.object({
      type: zod.enum(["browser", "hash", "memory"])
    }),
    historyWithQuery: ({ zod }) => zod.object({}),
    links: ({ zod }) => zod.array(
      zod.union([
        zod.object({
          crossorigin: zod.string(),
          href: zod.string(),
          hreflang: zod.string(),
          media: zod.string(),
          referrerpolicy: zod.string(),
          rel: zod.string(),
          sizes: zod.any(),
          title: zod.any(),
          type: zod.any()
        }).deepPartial(),
        zod.record(zod.string(), zod.any())
      ])
    ),
    metas: ({ zod }) => zod.array(
      zod.union([
        zod.object({
          charset: zod.string(),
          content: zod.string(),
          "http-equiv": zod.string(),
          name: zod.string()
        }).deepPartial(),
        zod.record(zod.string(), zod.any())
      ])
    ),
    mountElementId: ({ zod }) => zod.string(),
    npmClient: ({ zod }) => zod.enum([
      import_utils.NpmClientEnum.pnpm,
      import_utils.NpmClientEnum.tnpm,
      import_utils.NpmClientEnum.cnpm,
      import_utils.NpmClientEnum.yarn,
      import_utils.NpmClientEnum.npm
    ]),
    plugins: ({ zod }) => zod.array(zod.string()),
    presets: ({ zod }) => zod.array(zod.string()),
    publicPath: ({ zod }) => zod.string().regex(/(\/|^auto)$/, {
      message: 'publicPath must be "auto" or end with /'
    }),
    reactRouter5Compat: ({ zod }) => zod.union([zod.boolean(), zod.object({})]),
    routeLoader: ({ zod }) => zod.object({
      moduleType: zod.enum(["esm", "cjs"])
    }),
    routes: ({ zod }) => {
      const routeSchema = zod.union([
        zod.object({
          component: zod.string(),
          layout: zod.literal(false),
          path: zod.string(),
          redirect: zod.string(),
          // lazy schema need replace type when `zod2ts`
          routes: zod.lazy(() => routeSchema.array()),
          wrappers: zod.array(zod.string())
        }).deepPartial(),
        zod.record(zod.string(), zod.any())
      ]);
      return routeSchema.array();
    },
    scripts: scriptsSchema,
    styles: scriptsSchema,
    title: ({ zod }) => zod.string()
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getSchemas
});
