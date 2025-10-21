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

// src/features/404/404.ts
var __exports = {};
__export(__exports, {
  default: () => __default,
  patchRoutes: () => patchRoutes
});
module.exports = __toCommonJS(__exports);
function patchRoutes(routes) {
  Object.keys(routes).forEach((key) => {
    if (routes[key].path === "404") {
      routes[key].path = "*";
      routes[key].absPath = "/*";
    }
  });
  return routes;
}
var __default = (api) => {
  api.describe({
    key: "404"
  });
  api.modifyRoutes(async (routes) => {
    if (api.config.routes) {
      return routes;
    }
    return patchRoutes(routes);
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  patchRoutes
});
