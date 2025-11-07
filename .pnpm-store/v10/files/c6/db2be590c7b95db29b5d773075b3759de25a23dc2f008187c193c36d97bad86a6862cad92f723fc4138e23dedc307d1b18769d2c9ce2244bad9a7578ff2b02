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

// src/features/esmi/esmi.ts
var esmi_exports = {};
__export(esmi_exports, {
  default: () => esmi_default
});
module.exports = __toCommonJS(esmi_exports);
var import_es_module_lexer = require("@umijs/bundler-utils/compiled/es-module-lexer");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_scan = require("../../libs/scan");
var import_requireToImport = __toESM(require("./esbuildPlugins/requireToImport"));
var import_topLevelExternal = __toESM(require("./esbuildPlugins/topLevelExternal"));
var import_Service = __toESM(require("./Service"));
var importmap = { imports: {}, scopes: {} };
var importmatches = {};
function esmi(opts) {
  return {
    name: "preset-umi:esmi",
    configResolved(config) {
      var _a, _b;
      const { include, exclude } = config.optimizeDeps;
      (_a = config.optimizeDeps).include ?? (_a.include = []);
      if (include == null ? void 0 : include.length) {
        config.optimizeDeps.include = include.filter(
          (item) => !importmatches[item] && !importmap.imports[item]
        );
      }
      config.optimizeDeps.exclude = [
        .../* @__PURE__ */ new Set([
          // deps from user config
          ...exclude || [],
          // deps from local scan
          ...Object.keys(importmatches),
          // deps from esmi analyze result
          ...Object.keys(importmap.imports)
        ])
      ];
      (_b = config.optimizeDeps).esbuildOptions ?? (_b.esbuildOptions = {});
      config.optimizeDeps.esbuildOptions.plugins = [
        // transform require call to import
        (0, import_requireToImport.default)({ exclude: config.optimizeDeps.exclude }),
        // make sure vite only external top-level npm imports, and resolve sub-path npm imports
        (0, import_topLevelExternal.default)({
          exclude: config.optimizeDeps.exclude,
          resolver: opts.resolver
        })
        // @ts-ignore
      ].concat(config.optimizeDeps.esbuildOptions.plugins || []);
    },
    transform(source) {
      try {
        const imports = (0, import_es_module_lexer.parse)(source)[0];
        let s;
        imports.forEach((item) => {
          const { n: specifier, s: start, e: end } = item;
          if (specifier) {
            const replacement = (
              // search from local scan matches first (for alias)
              importmatches[specifier] && importmap.imports[importmatches[specifier]] || // search from esmi analyze result
              importmap.imports[specifier]
            );
            if (replacement) {
              s ?? (s = new import_utils.MagicString(source));
              s.overwrite(start, end, replacement);
            }
          }
        });
        return (s == null ? void 0 : s.toString()) || source;
      } catch {
        return null;
      }
    },
    handleHotUpdate(ctx) {
      return opts.handleHotUpdate(ctx);
    }
  };
}
function generatePkgData(api) {
  return {
    pkgJsonContent: {
      dependencies: api.pkg.dependencies || {},
      devDependencies: api.pkg.devDependencies || {}
    },
    pkgInfo: {
      name: api.pkg.name,
      version: api.pkg.version,
      type: "esm",
      exports: [
        {
          name: "default",
          path: "es/index.js",
          from: "",
          deps: Object.entries(api.appData.deps).filter(([_, { matches }]) => matches.length).map(([name, { version }]) => ({
            name,
            version,
            usedMap: {
              [name]: { usedNamespace: true, usedNames: [] }
            }
          }))
        }
      ],
      assets: []
    }
  };
}
var esmi_default = (api) => {
  let service;
  let resolver;
  async function refreshImportMap() {
    var _a;
    await api.applyPlugins({
      key: "updateAppDataDeps",
      type: api.ApplyPluginsType.event
    });
    delete api.appData.deps["umi"];
    const data = generatePkgData(api);
    const deps = data.pkgInfo.exports.reduce(
      (r, exp) => r.concat(exp.deps.map((dep) => dep.name)),
      []
    );
    const hasNewDep = deps.some((i) => !importmap.imports[i]);
    if (hasNewDep) {
      importmap = (_a = await service.getImportmap(data)) == null ? void 0 : _a.importMap;
      importmatches = Object.keys(api.appData.deps).reduce((r, dep) => {
        if (!api.appData.deps[dep].subpaths.length) {
          api.appData.deps[dep].matches.forEach((m) => {
            r[m] = dep;
          });
        }
        return r;
      }, {});
      Object.keys(importmap.scopes || {}).filter((item) => importmap.imports[item]).forEach((item) => {
        importmap.scopes[importmap.imports[item]] = importmap.scopes[item];
      });
    }
  }
  api.describe({
    key: "esmi",
    config: {
      schema({ zod }) {
        return zod.object({
          cdnOrigin: zod.string(),
          shimUrl: zod.string().optional()
        });
      }
    },
    enableBy: api.EnableBy.config
  });
  api.onStart(() => {
    if (!api.config.vite) {
      throw new Error(`esmi can only be used in vite mode.`);
    }
  });
  api.onBeforeCompiler(async () => {
    if (api.config.vite) {
      service = new import_Service.default({
        cdnOrigin: api.config.esmi.cdnOrigin,
        cacheDir: (0, import_path.join)(api.cwd, ".esmi")
      });
      resolver = (0, import_scan.createResolver)({
        alias: api.config.alias
      });
      await refreshImportMap();
    }
  });
  api.modifyHTML(($) => {
    const scp = $('<script type="importmap"></script>\n');
    scp.html(JSON.stringify(importmap, null, 2));
    $("head > script:eq(0)").before(scp);
    if (api.config.esmi.shimUrl) {
      $("body > script:eq(0)").before(
        $(`<script src="${api.config.esmi.shimUrl}"></script>
`)
      );
    }
    Object.values(importmap.imports).forEach((url) => {
      scp.before($(`<link rel="modulepreload" href="${url}" />
`));
    });
    return $;
  });
  if (api.config.vite) {
    api.modifyViteConfig((memo) => {
      memo.plugins = (memo.plugins || []).concat(
        esmi({
          handleHotUpdate: async (ctx) => {
            ctx.file;
            await refreshImportMap();
          },
          resolver
        })
      );
      return memo;
    });
  } else {
  }
};
