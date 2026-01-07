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

// src/features/routes.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_constants = require("../constants");
var import_core = require("@umijs/core");
var import_utils = require("@umijs/core/dist/route/utils");
var import_path = __toESM(require("path"));
var import_pluralize = require("pluralize");
var import_plugin_utils = require("umi/plugin-utils");
var CTX_LAYOUT_ID = "dumi-context-layout";
function normalizeDocDir(docDir) {
  return typeof docDir === "object" ? docDir : { dir: docDir };
}
function kebabCaseRoutePath(routePath) {
  const replacer = (_, s1, s2, i) => {
    const symbol = ["", "/"].includes(s1) || !i ? "" : "-";
    return `${s1 || ""}${symbol}${s2.toLowerCase()}`;
  };
  return routePath.replace(/(.)?([A-Z][^A-Z/])/g, replacer).replace(/(.)?([A-Z]+)/g, replacer);
}
function localizeUmiRoute(route, locales, forceKebabCase) {
  const locale = locales.find(
    (locale2) => route.path.endsWith(`/${locale2.id}`) && // avoid locale id conflict with folder/file name
    import_path.default.parse(route.file).name.endsWith(`.${locale2.id}`)
  );
  const format = forceKebabCase ? kebabCaseRoutePath : (str) => str;
  if (locale) {
    const base = !("base" in locale) || locale.base === "/" ? "" : locale.base.replace(/^(\/)(.+)$/, "$2$1");
    const suffix = "suffix" in locale ? locale.suffix : "";
    route.path = `${base}${format(
      route.path.replace(new RegExp(`/${locale.id}$`), "").replace(/((^|\/)(index|README))$/, "")
    )}${suffix}`;
    route.absPath = route.path !== "/" ? `/${route.path}` : route.path;
  } else {
    route.path = format(route.path);
    route.absPath = format(route.absPath);
  }
}
function flatRoute(route, docLayoutId) {
  if (route.parentId !== docLayoutId) {
    route.parentId = docLayoutId;
    route.path = route.path === "*" ? (
      // FIXME: compatible with wrong conventional 404 absPath, wait for umi fix
      // from: https://github.com/umijs/umi/blob/9e8f143229d6f5d8547e951c23cbb2c66cbfd190/packages/preset-umi/src/features/404/404.ts#L8
      route.path
    ) : route.absPath.slice(1);
  }
}
var routes_default = (api) => {
  api.describe({ key: "dumi:routes" });
  api.addTmpGenerateWatcherPaths(
    () => [
      ...api.config.resolve.atomDirs,
      ...api.config.resolve.docDirs.map(normalizeDocDir)
    ].map(({ dir }) => import_path.default.join(api.cwd, dir, "**/*.md"))
  );
  api.modifyDefaultConfig((memo) => {
    if (api.userConfig.resolve) {
      const keys = ["docDirs", "atomDirs"];
      keys.forEach((key) => {
        var _a;
        if (((_a = api.userConfig.resolve[key]) == null ? void 0 : _a.length) === 0)
          memo.resolve[key] = [];
      });
    }
    return memo;
  });
  api.modifyRoutes((oRoutes) => {
    const pages = {};
    const routes = Object.values(oRoutes).reduce(
      (ret, route) => {
        if (route.isLayout) {
          ret[route.id] = route;
        } else {
          pages[route.id] = route;
        }
        return ret;
      },
      {}
    );
    const { DocLayout, DemoLayout } = api.service.themeData.layouts;
    const { docDirs, atomDirs } = api.config.resolve;
    const layoutRouteValues = Object.values(routes);
    const lastLayoutId = layoutRouteValues.find(
      ({ id }) => layoutRouteValues.every(({ parentId }) => id !== parentId)
    ).id;
    let docLayoutId = lastLayoutId;
    let demoLayoutId = lastLayoutId;
    if (DocLayout) {
      docLayoutId = DocLayout.specifier;
      routes[DocLayout.specifier] = {
        id: DocLayout.specifier,
        path: "/",
        file: DocLayout.source,
        parentId: lastLayoutId,
        absPath: "/",
        isLayout: true
      };
    }
    if (DemoLayout) {
      demoLayoutId = DemoLayout.specifier;
      routes[DemoLayout.specifier] = {
        id: DemoLayout.specifier,
        path: "/",
        file: DemoLayout.source,
        parentId: lastLayoutId,
        absPath: "/",
        isLayout: true
      };
    }
    Object.entries(pages).forEach(([, route]) => {
      const { base } = api.config.conventionRoutes;
      route.file = (0, import_plugin_utils.winPath)(import_path.default.resolve(base, route.file));
      routes[route.id] = route;
    });
    docDirs.map(normalizeDocDir).forEach(({ type, dir }) => {
      const base = import_path.default.join(api.cwd, dir);
      const dirRoutes = (0, import_core.getConventionRoutes)({
        base,
        exclude: [/.*(?<!md)$/, /(\/|^)(\.|_)/]
      });
      Object.entries(dirRoutes).forEach(([key, route]) => {
        route.id = `${dir}/${key}`;
        if (type) {
          const pluralType = (0, import_pluralize.plural)(type);
          route.path = `${pluralType}/${route.path}`.replace(/\/+$/, "/");
          route.absPath = `/${route.path}`;
        }
        route.file = (0, import_plugin_utils.winPath)(import_path.default.resolve(base, route.file));
        routes[route.id] = route;
      });
    });
    atomDirs.forEach(({ type, subType = "", dir }) => {
      const base = import_path.default.join(api.cwd, dir);
      const atomFiles = import_plugin_utils.glob.sync(
        "{*,*/index,*/index.*,*/README,*/README.*}.md",
        { cwd: base }
      );
      atomFiles.forEach((file) => {
        const routeFile = (0, import_plugin_utils.winPath)(import_path.default.join((0, import_pluralize.plural)(type), subType, file));
        const routePath = routeFile.replace(/(\/index|\/README)?\.md$/, "").replace(/\./g, "/");
        const routeId = (0, import_utils.createRouteId)(routeFile);
        routes[routeId] = {
          id: routeId,
          path: routePath,
          absPath: `/${routePath}`,
          parentId: docLayoutId,
          file: (0, import_plugin_utils.winPath)(import_path.default.resolve(base, file)),
          meta: { _atom_route: true }
        };
      });
    });
    Object.values(routes).forEach((route) => {
      if (route.path !== encodeURI(route.path)) {
        throw new Error(
          `Invalid route path: ${route.path}, please rename it with only alphanumeric, dash and slash.
    at ${route.file}`
        );
      } else if (!route.isLayout) {
        flatRoute(route, docLayoutId);
        localizeUmiRoute(
          route,
          api.config.locales,
          api.config.resolve.forceKebabCaseRouting
        );
      }
    });
    if (Object.values(pages).every((route) => route.path !== "*")) {
      routes["404"] = {
        id: "404",
        path: "*",
        absPath: "/*",
        parentId: docLayoutId,
        file: require.resolve("../client/pages/404")
      };
    }
    routes["demo-render"] = {
      id: "demo-render",
      path: `${import_constants.SP_ROUTE_PREFIX}demos/:id`,
      absPath: `/${import_constants.SP_ROUTE_PREFIX}demos/:id`,
      parentId: demoLayoutId,
      file: require.resolve("../client/pages/Demo")
    };
    return routes;
  });
  api.addLayouts(() => {
    const layouts = [
      {
        id: CTX_LAYOUT_ID,
        file: `${api.paths.absTmpPath}/dumi/theme/ContextWrapper`
      }
    ];
    const { GlobalLayout } = api.service.themeData.layouts;
    if (GlobalLayout) {
      layouts.unshift({
        id: GlobalLayout.specifier,
        file: GlobalLayout.source
      });
    }
    return layouts;
  });
  api.addEntryCodeAhead(
    () => `
// always remove trailing slash from location.pathname
if (
  typeof history !== 'undefined' &&
  location.pathname.length > 1 &&
  location.pathname.endsWith('/')
) {
  history.replaceState(
    {},
    '',
    location.pathname.slice(0, -1) + location.search + location.hash,
  );
}
`
  );
};
