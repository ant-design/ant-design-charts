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

// src/features/tmpFiles/routes.ts
var routes_exports = {};
__export(routes_exports, {
  componentToChunkName: () => componentToChunkName,
  getApiRoutes: () => getApiRoutes,
  getRouteComponents: () => getRouteComponents,
  getRoutes: () => getRoutes
});
module.exports = __toCommonJS(routes_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_getModuleExports = require("./getModuleExports");
async function getApiRoutes(opts) {
  const routes = (0, import_core.getConventionRoutes)({
    base: opts.api.paths.absApiRoutesPath,
    prefix: ""
  });
  function localPath(path) {
    if (path.charAt(0) !== ".") {
      return `./${path}`;
    }
    {
      return path;
    }
  }
  for (const id of Object.keys(routes)) {
    if (routes[id].file) {
      const file = (0, import_path.isAbsolute)(routes[id].file) ? routes[id].file : import_utils.resolve.sync(localPath(routes[id].file), {
        basedir: opts.api.paths.absApiRoutesPath,
        extensions: [".js", ".jsx", ".tsx", ".ts"]
      });
      routes[id].__content = (0, import_fs.readFileSync)(file, "utf-8");
    }
  }
  return routes;
}
async function getRoutes(opts) {
  var _a, _b, _c, _d;
  let routes = null;
  if (opts.api.config.routes) {
    routes = (0, import_core.getConfigRoutes)({
      routes: opts.api.config.routes,
      onResolveComponent(component) {
        if ((0, import_path.isAbsolute)(component)) {
          return component;
        }
        if (component.startsWith("@/")) {
          component = component.replace("@/", "../");
        }
        component = (0, import_utils.winPath)(
          import_utils.resolve.sync(localPath(component), {
            basedir: opts.api.paths.absPagesPath,
            extensions: [".js", ".jsx", ".tsx", ".ts", ".vue"]
          })
        );
        component = component.replace(
          (0, import_utils.winPath)(`${opts.api.paths.absSrcPath}/`),
          "@/"
        );
        return component;
      }
    });
  } else {
    routes = (0, import_core.getConventionRoutes)({
      base: ((_a = opts.api.config.conventionRoutes) == null ? void 0 : _a.base) || opts.api.paths.absPagesPath,
      exclude: (_b = opts.api.config.conventionRoutes) == null ? void 0 : _b.exclude,
      prefix: ""
    });
  }
  function localPath(path) {
    if (path.charAt(0) !== ".") {
      return `./${path}`;
    } else {
      return path;
    }
  }
  const absLayoutPath = ((_c = opts.api.config) == null ? void 0 : _c.conventionLayout) === false ? false : (0, import_utils.tryPaths)([
    (0, import_path.join)(opts.api.paths.absSrcPath, "layouts/index.tsx"),
    (0, import_path.join)(opts.api.paths.absSrcPath, "layouts/index.vue"),
    (0, import_path.join)(opts.api.paths.absSrcPath, "layouts/index.jsx"),
    (0, import_path.join)(opts.api.paths.absSrcPath, "layouts/index.js")
  ]);
  const layouts = await opts.api.applyPlugins({
    key: "addLayouts",
    initialValue: [
      absLayoutPath && {
        id: "@@/global-layout",
        file: (0, import_utils.winPath)(absLayoutPath),
        test(route) {
          return route.layout !== false;
        }
      }
    ].filter(Boolean)
  });
  for (const layout of layouts) {
    (0, import_core.addParentRoute)({
      addToAll: true,
      target: {
        id: layout.id,
        path: "/",
        file: layout.file,
        parentId: void 0,
        absPath: "/",
        isLayout: true
      },
      routes,
      test: layout.test
    });
  }
  for (const id of Object.keys(routes)) {
    if (routes[id].file) {
      let file = routes[id].file;
      const basedir = ((_d = opts.api.config.conventionRoutes) == null ? void 0 : _d.base) || opts.api.paths.absPagesPath;
      if (!(0, import_path.isAbsolute)(file)) {
        if (file.startsWith("@/")) {
          file = file.replace("@/", "../");
        }
        file = import_utils.resolve.sync(localPath(file), {
          basedir,
          extensions: [".js", ".jsx", ".tsx", ".ts", ".vue"]
        });
      }
      const isJSFile = /.[jt]sx?$/.test(file);
      if (!routes[id].isLayout) {
        routes[id].__content = (0, import_fs.readFileSync)(file, "utf-8");
        routes[id].__isJSFile = isJSFile;
      }
      routes[id].__absFile = (0, import_utils.winPath)(file);
      const enableSSR = opts.api.config.ssr;
      const enableClientLoader = opts.api.config.clientLoader;
      const enableRouteProps = !opts.api.userConfig.routes;
      const needCollectExports = enableSSR || enableClientLoader || enableRouteProps;
      if (needCollectExports) {
        const exports = isJSFile && (0, import_fs.existsSync)(file) ? await (0, import_getModuleExports.getModuleExports)({
          file
        }) : [];
        if (enableSSR) {
          routes[id].hasServerLoader = exports.includes("serverLoader");
          routes[id].hasMetadataLoader = exports.includes("metadataLoader");
        }
        if (enableClientLoader && exports.includes("clientLoader")) {
          routes[id].clientLoader = `clientLoaders['${id}']`;
        }
        if (enableRouteProps && exports.includes("routeProps")) {
          routes[id].routeProps = `routeProps['${id}']`;
        }
      }
    }
  }
  for (const id of Object.keys(routes)) {
    await opts.api.applyPlugins({
      key: "onPatchRoute",
      args: {
        route: routes[id]
      }
    });
  }
  routes = await opts.api.applyPlugins({
    key: "modifyRoutes",
    initialValue: routes
  });
  return routes;
}
var IMPORT_EMPTY_ROUTE_CJS = `() => Promise.resolve(require('./EmptyRoute'))`;
var IMPORT_EMPTY_ROUTE_ESM = `() => import('./EmptyRoute')`;
async function getRouteComponents(opts) {
  const imports = Object.keys(opts.routes).map((key) => {
    var _a;
    const useSuspense = opts.api.appData.framework === "react" ? true : false;
    const route = opts.routes[key];
    const useCjsModule = ((_a = opts.api.config.routeLoader) == null ? void 0 : _a.moduleType) === "cjs";
    if (!route.file) {
      if (process.env.NODE_ENV === "test") {
        return `'${key}': require('./EmptyRoute').default,`;
      }
      const importEmptyRoute = useCjsModule ? IMPORT_EMPTY_ROUTE_CJS : IMPORT_EMPTY_ROUTE_ESM;
      return useSuspense ? `'${key}': React.lazy(${importEmptyRoute}),` : `'${key}': ${importEmptyRoute},`;
    }
    if (route.hasClientLoader) {
      route.file = (0, import_path.join)(
        opts.api.paths.absTmpPath,
        "pages",
        route.id.replace(/[\/\-]/g, "_") + ".js"
      );
    }
    if (route.file.startsWith("(")) {
      return useSuspense ? (
        // Compatible with none default route exports
        // e.g. https://github.com/umijs/umi/blob/0d40a07bf28b0760096cbe2f22da4d639645b937/packages/plugins/src/qiankun/master.ts#L55
        `'${key}': React.lazy(
              () => Promise.resolve(${route.file}).then(e => e?.default ? e : ({ default: e }))
            ),`
      ) : `'${key}': () => Promise.resolve(${route.file}),`;
    }
    const path = (0, import_path.isAbsolute)(route.file) || route.file.startsWith("@/") ? route.file : `${opts.prefix}${route.file}`;
    const webpackChunkName = componentToChunkName(path, opts.api.cwd);
    if (process.env.NODE_ENV === "test") {
      return `'${key}': require('${(0, import_utils.winPath)(path)}').default,`;
    }
    if (useCjsModule) {
      return useSuspense ? `'${key}': React.lazy(() => Promise.resolve(require('${(0, import_utils.winPath)(
        path
      )}'))),` : `'${key}': () => Promise.resolve(require('${(0, import_utils.winPath)(path)}')),`;
    }
    return useSuspense ? `'${key}': React.lazy(() => import(/* webpackChunkName: "${webpackChunkName}" */'${(0, import_utils.winPath)(
      path
    )}')),` : `'${key}': () => import(/* webpackChunkName: "${webpackChunkName}" */'${(0, import_utils.winPath)(
      path
    )}'),`;
  }).join("\n");
  return `{
${imports}
}`;
}
function lastSlash(str) {
  return str[str.length - 1] === "/" ? str : `${str}/`;
}
function getProjectRootCwd(cwd) {
  const splittedCwd = cwd.split("/");
  for (let level = -1; level >= -3; level -= 1) {
    const rootCwd = splittedCwd.slice(0, level).join("/");
    if (!rootCwd)
      break;
    if ((0, import_utils.isMonorepo)({ root: rootCwd })) {
      return rootCwd;
    }
  }
  return cwd;
}
function componentToChunkName(component, cwd = "/") {
  cwd = (0, import_utils.winPath)(cwd);
  return typeof component === "string" ? component.replace(
    new RegExp(
      `^(${// match app cwd first
      import_utils.lodash.escapeRegExp(lastSlash(cwd))}|${// then try to match monorepo root cwd, because route files may be in root node_modules (such as dumi)
      import_utils.lodash.escapeRegExp(lastSlash(getProjectRootCwd(cwd)))})`
    ),
    ""
  ).replace(/.+(node_modules(\/|\\))/, "$1").replace(/(\/|\\)_@?([^@]+@){2}/, "$1").replace(/^.(\/|\\)/, "").replace(/(\/|\\)/g, "__").replace(/@/g, "_").replace(/\.jsx?$/, "").replace(/\.tsx?$/, "").replace(/\.vue?$/, "").replace(/^src__/, "").replace(/\.\.__/g, "").replace(/[\[\]]/g, "").replace(/^node_modules__/, "nm__").replace(/^.umi-production__/, "t__").replace(/^\./, "").replace(/^pages__/, "p__") : "";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  componentToChunkName,
  getApiRoutes,
  getRouteComponents,
  getRoutes
});
