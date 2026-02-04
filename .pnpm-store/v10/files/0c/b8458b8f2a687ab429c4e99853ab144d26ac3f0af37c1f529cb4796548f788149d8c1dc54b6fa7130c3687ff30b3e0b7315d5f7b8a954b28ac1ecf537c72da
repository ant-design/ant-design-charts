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

// src/routes.ts
var routes_exports = {};
__export(routes_exports, {
  createServerRoute: () => createServerRoute,
  createServerRoutes: () => createServerRoutes
});
module.exports = __toCommonJS(routes_exports);
function createServerRoutes(opts) {
  const { routesById, parentId, createRoute } = opts;
  const createRouteFn = createRoute || createServerRoute;
  return Object.keys(routesById).filter((id) => routesById[id].parentId === parentId).map((id) => {
    const route = createRouteFn({
      route: routesById[id]
    });
    const children = createServerRoutes({
      routesById,
      parentId: route.id
    });
    if (children.length > 0) {
      route.children = children;
    }
    return route;
  });
}
function createServerRoute(opts) {
  const { route } = opts;
  return {
    id: route.id,
    path: route.path,
    index: route.index
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createServerRoute,
  createServerRoutes
});
