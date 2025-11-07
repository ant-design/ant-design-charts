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

// src/features/vite/vite.ts
var vite_exports = {};
__export(vite_exports, {
  default: () => vite_default
});
module.exports = __toCommonJS(vite_exports);
var vite_default = (api) => {
  api.describe({
    key: "vite",
    config: {
      schema({ zod }) {
        return zod.object({});
      }
    },
    enableBy: api.EnableBy.config
  });
  api.modifyAppData((memo) => {
    memo.bundler = "vite";
    return memo;
  });
  api.modifyConfig((memo) => {
    memo.alias["@fs"] = api.cwd;
    return memo;
  });
  api.modifyDefaultConfig((memo) => {
    if (api.env === "development") {
      memo.polyfill = false;
    }
    return memo;
  });
  api.register({
    key: "onBeforeCompiler",
    stage: Number.POSITIVE_INFINITY,
    async fn() {
      await api.applyPlugins({
        key: "updateAppDataDeps",
        type: api.ApplyPluginsType.event
      });
    }
  });
  api.modifyViteConfig((memo) => {
    var _a, _b;
    memo.optimizeDeps = {
      ...memo.optimizeDeps || {},
      include: (_b = (_a = memo.optimizeDeps) == null ? void 0 : _a.include) == null ? void 0 : _b.concat(
        Object.values(api.appData.deps).map(({ matches }) => matches[0]).filter(
          (item) => (item == null ? void 0 : item.startsWith("@fs")) && !(item == null ? void 0 : item.includes("node_modules"))
        )
      )
    };
    return memo;
  });
  let buildStats;
  api.onBuildComplete(({ err, stats }) => {
    if (!err) {
      buildStats = stats;
    }
  });
  api.modifyHTML(($) => {
    if (buildStats) {
      $("head").append(buildStats.extraHtml.head);
      $("body").append(buildStats.extraHtml.body);
    }
    return $;
  });
};
