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

// src/features/routePreloadOnLoad/utils.ts
var utils_exports = {};
__export(utils_exports, {
  PRELOAD_ROUTE_HELPER: () => PRELOAD_ROUTE_HELPER,
  PRELOAD_ROUTE_MAP_SCP_TYPE: () => PRELOAD_ROUTE_MAP_SCP_TYPE,
  getPreloadRouteFiles: () => getPreloadRouteFiles
});
module.exports = __toCommonJS(utils_exports);
var PRELOAD_ROUTE_MAP_SCP_TYPE = "umi-route-chunk-files-map";
var PRELOAD_ROUTE_HELPER = "preload_helper";
function getPreloadRouteFiles(path, map, opts) {
  var _a;
  const matched = (
    // search for static route
    map.r[path] || // search for dynamic route
    ((_a = Object.entries(map.r).find((p) => {
      const route = p[0];
      const reg = new RegExp(
        // replace /:id to /[^/]+
        // replace /* to /.+
        `^${route.replace(/\/:[^/]+/g, "/[^/]+").replace("/*", "/.+")}$`
      );
      return reg.test(path);
    })) == null ? void 0 : _a[1])
  );
  return matched == null ? void 0 : matched.map((i) => {
    const id = map.f[i][1];
    const file = map.f[i][0];
    const ext = file.split(".").pop();
    return {
      type: ext,
      url: `${opts.publicPath}${file}`,
      attrs: [[`data-${map.b}`, `${map.p}:${id}`]]
    };
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PRELOAD_ROUTE_HELPER,
  PRELOAD_ROUTE_MAP_SCP_TYPE,
  getPreloadRouteFiles
});
