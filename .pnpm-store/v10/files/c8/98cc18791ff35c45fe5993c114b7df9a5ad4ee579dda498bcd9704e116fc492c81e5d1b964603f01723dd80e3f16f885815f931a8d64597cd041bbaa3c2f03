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

// src/features/routeProps/routeProps.ts
var routeProps_exports = {};
__export(routeProps_exports, {
  default: () => routeProps_default
});
module.exports = __toCommonJS(routeProps_exports);
var import_routeExportExtractor = require("../../utils/routeExportExtractor");
var routeProps_default = (api) => {
  api.describe({
    config: {
      schema({ zod }) {
        return zod.object({});
      }
    },
    enableBy: () => {
      return !api.userConfig.routes;
    }
  });
  const entryFile = "core/routeProps.ts";
  const outFile = "core/routeProps.js";
  (0, import_routeExportExtractor.setupRouteExportExtractor)({
    api,
    entryFile,
    outFile,
    propertyName: "routeProps"
  });
};
