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

// src/features/exportStatic.ts
var exportStatic_exports = {};
__export(exportStatic_exports, {
  default: () => exportStatic_default
});
module.exports = __toCommonJS(exportStatic_exports);
var import_constants = require("../constants");
var import_assets = require("./assets");
var NO_PRERENDER_ROUTES = [
  // disable prerender for demo render page, because umi-hd doesn't support ssr
  // ref: https://github.com/umijs/dumi/pull/1451
  "demo-render"
];
var exportStatic_default = (api) => {
  api.describe({
    key: "dumi:exportStatic",
    enableBy: ({ env }) => env === "production" && api.isPluginEnable("exportStatic")
  });
  api.modifyRoutes({
    // make sure be the last
    stage: Infinity,
    fn(memo) {
      NO_PRERENDER_ROUTES.forEach((id) => {
        if (memo[id])
          memo[id].prerender = false;
      });
      return memo;
    }
  });
  api.modifyExportHTMLFiles({
    // make sure before umi exportStatic
    before: "exportStatic",
    fn(memo) {
      const routePrefix = `${import_constants.SP_ROUTE_PREFIX}demos`;
      const examples = (0, import_assets.getExampleAssets)();
      api.appData.exportHtmlData.push(
        ...examples.map(({ id }) => ({
          route: { path: `/${routePrefix}/${id}` },
          file: `${routePrefix}/${id}/index.html`,
          prerender: false
        }))
      );
      return memo;
    }
  });
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: "dumi/exportStaticRuntimePlugin.ts",
      content: `
export function modifyClientRenderOpts(memo: any) {
  const { history, hydrate } = memo;

  return {
    ...memo,
    hydrate: hydrate && !history.location.pathname.startsWith('/${import_constants.SP_ROUTE_PREFIX}demos'),
  };
}
      `.trim(),
      noPluginDir: true
    });
  });
  api.addRuntimePlugin(() => {
    return [`@@/dumi/exportStaticRuntimePlugin.ts`];
  });
};
