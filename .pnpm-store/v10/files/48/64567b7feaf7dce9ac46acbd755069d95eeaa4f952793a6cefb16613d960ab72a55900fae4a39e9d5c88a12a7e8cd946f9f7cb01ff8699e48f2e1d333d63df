var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/configPlugins/configPlugins.ts
var configPlugins_exports = {};
__export(configPlugins_exports, {
  default: () => configPlugins_default
});
module.exports = __toCommonJS(configPlugins_exports);
var import_schema = require("@umijs/bundler-vite/dist/schema");
var import_schema2 = require("@umijs/bundler-webpack/dist/schema");
var import_path = require("path");
var import_resolveProjectDep = require("../../utils/resolveProjectDep");
var import_schema3 = require("./schema");
var configPlugins_default = (api) => {
  var _a;
  const { userConfig } = api;
  const reactDOMPath = (0, import_resolveProjectDep.resolveProjectDep)({
    pkg: api.pkg,
    cwd: api.cwd,
    dep: "react-dom"
  }) || (0, import_path.dirname)(require.resolve("react-dom/package.json"));
  const isLT18 = (() => {
    const reactDOMVersion = require((0, import_path.join)(reactDOMPath, "package.json")).version;
    const majorVersion = parseInt(reactDOMVersion.split(".")[0], 10);
    return majorVersion < 18;
  })();
  const configDefaults = {
    alias: {
      umi: "@@/exports",
      react: (0, import_resolveProjectDep.resolveProjectDep)({
        pkg: api.pkg,
        cwd: api.cwd,
        dep: "react"
      }) || (0, import_path.dirname)(require.resolve("react/package.json")),
      ...isLT18 ? {
        "react-dom/client": reactDOMPath
      } : {},
      "react-dom": reactDOMPath,
      // mpa don't need to use react-router
      ...userConfig.mpa ? {} : {
        "react-router": (0, import_path.dirname)(
          require.resolve("react-router/package.json")
        ),
        "react-router-dom": (0, import_path.dirname)(
          require.resolve("react-router-dom/package.json")
        )
      }
    },
    externals: {
      // Keep the `react-dom/client` external consistent with the `react-dom` external when react < 18.
      // Otherwise, `react-dom/client` will still bundled in the outputs.
      ...isLT18 && ((_a = userConfig.externals) == null ? void 0 : _a["react-dom"]) ? {
        "react-dom/client": userConfig.externals["react-dom"]
      } : {}
    },
    autoCSSModules: true,
    publicPath: "/",
    mountElementId: "root",
    base: "/",
    history: { type: "browser" },
    svgr: {},
    ignoreMomentLocale: true,
    mfsu: { strategy: "eager" },
    routeLoader: { moduleType: "esm" }
  };
  const bundleSchemas = api.config.vite ? (0, import_schema.getSchemas)() : (0, import_schema2.getSchemas)();
  const extraSchemas = (0, import_schema3.getSchemas)();
  const schemas = {
    ...bundleSchemas,
    ...extraSchemas
  };
  for (const key of Object.keys(schemas)) {
    const config = {
      schema: schemas[key] || ((Joi) => Joi.any())
    };
    if (key in configDefaults) {
      config.default = configDefaults[key];
    }
    if (["routes"].includes(key)) {
      config.onChange = api.ConfigChangeType.regenerateTmpFiles;
    }
    api.registerPlugins([
      {
        id: `virtual: config-${key}`,
        key,
        config
      }
    ]);
  }
  api.modifyConfig((memo, args) => {
    memo.alias = {
      ...memo.alias,
      "@": args.paths.absSrcPath,
      "@@": args.paths.absTmpPath
    };
    return memo;
  });
};
