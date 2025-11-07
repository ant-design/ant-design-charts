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

// src/features/routePrefetch/routePrefetch.ts
var routePrefetch_exports = {};
__export(routePrefetch_exports, {
  default: () => routePrefetch_default
});
module.exports = __toCommonJS(routePrefetch_exports);
var routePrefetch_default = (api) => {
  api.describe({
    config: {
      schema({ zod }) {
        return zod.object({
          defaultPrefetch: zod.enum(["none", "intent", "render", "viewport"]).optional(),
          defaultPrefetchTimeout: zod.number().optional()
        });
      }
    },
    enableBy: api.EnableBy.config
  });
  api.addEntryCodeAhead(() => {
    return `if(typeof window !== 'undefined') window.__umi_route_prefetch__ =
      {
        defaultPrefetch: ${JSON.stringify(
      api.config.routePrefetch.defaultPrefetch || "none"
    )},
        defaultPrefetchTimeout: ${JSON.stringify(
      api.config.routePrefetch.defaultPrefetchTimeout || 50
    )},
      };
    `;
  });
};
