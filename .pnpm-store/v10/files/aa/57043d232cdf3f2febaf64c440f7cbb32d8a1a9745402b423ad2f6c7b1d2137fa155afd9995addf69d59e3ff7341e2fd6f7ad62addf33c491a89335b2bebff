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

// src/features/configPlugins/index.ts
var configPlugins_exports = {};
__export(configPlugins_exports, {
  default: () => configPlugins_default
});
module.exports = __toCommonJS(configPlugins_exports);
var import_schema = require("./schema");
var configPlugins_default = (api) => {
  const configDefaults = {
    resolve: {
      docDirs: ["docs"],
      atomDirs: [{ type: "component", dir: "src" }],
      codeBlockMode: "active",
      forceKebabCaseRouting: true
    },
    themeConfig: {
      footer: `Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>`,
      prefersColor: { default: "light", switch: true },
      nprogress: true,
      lastUpdated: true
    }
  };
  const schemas = (0, import_schema.getSchemas)();
  for (const key of Object.keys(schemas)) {
    const config = {
      schema: schemas[key] || ((joi) => joi.any())
    };
    if (key in configDefaults) {
      config.default = configDefaults[key];
    }
    api.registerPlugins([
      {
        id: `virtual: config-${key}`,
        key,
        config
      }
    ]);
  }
};
