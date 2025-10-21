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

// src/features/apiRoute/utils.ts
var utils_exports = {};
__export(utils_exports, {
  esbuildIgnorePathPrefixPlugin: () => esbuildIgnorePathPrefixPlugin,
  matchApiRoute: () => matchApiRoute
});
module.exports = __toCommonJS(utils_exports);
function esbuildIgnorePathPrefixPlugin() {
  return {
    name: "ignore-path-prefix",
    setup(build) {
      build.onResolve({ filter: /^@fs/ }, (args) => ({
        path: args.path.replace(/^@fs/, "")
      }));
    }
  };
}
function matchApiRoute(apiRoutes, path) {
  if (path.startsWith("/"))
    path = path.substring(1);
  if (path.startsWith("api/"))
    path = path.substring(4);
  const pathSegments = path.split("/").filter((p) => p !== "");
  if (pathSegments.length === 0 || pathSegments.length === 1 && pathSegments[0] === "api") {
    const route2 = apiRoutes.find((r) => r.path === "/");
    if (route2)
      return { route: route2, params: {} };
    else
      return void 0;
  }
  const params = {};
  const route = apiRoutes.find((route2) => {
    const routePathSegments = route2.path.split("/").filter((p) => p !== "");
    if (routePathSegments.length !== pathSegments.length)
      return false;
    for (let i = 0; i < routePathSegments.length; i++) {
      const routePathSegment = routePathSegments[i];
      if (routePathSegment.match(/^\[.*]$/)) {
        params[routePathSegment.substring(1, routePathSegment.length - 1)] = pathSegments[i];
        if (i == routePathSegments.length - 1)
          return true;
        continue;
      }
      if (routePathSegment !== pathSegments[i])
        return false;
      if (i == routePathSegments.length - 1)
        return true;
    }
  });
  if (route)
    return { route, params };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  esbuildIgnorePathPrefixPlugin,
  matchApiRoute
});
