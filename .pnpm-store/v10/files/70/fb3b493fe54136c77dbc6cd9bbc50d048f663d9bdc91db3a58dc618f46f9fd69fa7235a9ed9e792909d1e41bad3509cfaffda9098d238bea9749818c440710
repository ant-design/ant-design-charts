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

// src/features/exportStatic/exportStatic.ts
var exportStatic_exports = {};
__export(exportStatic_exports, {
  default: () => exportStatic_default
});
module.exports = __toCommonJS(exportStatic_exports);
var import_server = require("@umijs/server");
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_path = require("path");
var import_utils2 = require("../ssr/utils");
var markupRender;
var IS_WIN = process.platform === "win32";
function getExportHtmlData(routes) {
  const map = /* @__PURE__ */ new Map();
  Object.values(routes).forEach((route) => {
    const is404 = route.absPath === "/*";
    if (
      // skip layout
      !route.isLayout && // skip dynamic route for win, because `:` is not allowed in file name
      (!IS_WIN || !route.path.includes("/:")) && // skip `*` route, because `*` is not working for most site serve services
      (!route.path.includes("*") || // except `404.html`
      is404)
    ) {
      const file = is404 ? "404.html" : (0, import_path.join)(".", route.absPath, "index.html");
      map.set(file, {
        route: {
          path: is404 ? "/404" : route.absPath,
          redirect: route.redirect
        },
        prerender: route.prerender !== false,
        file
      });
    }
  });
  return Array.from(map.values());
}
async function getPreRenderedHTML(api, htmlTpl, path) {
  const {
    exportStatic: { ignorePreRenderError = false },
    base
  } = api.config;
  await import((0, import_utils2.absServerBuildPath)(api)).then(
    (res) => markupRender ?? (markupRender = res.default._markupGenerator)
  );
  try {
    const location = `${base.endsWith("/") ? base.slice(0, -1) : base}${path}`;
    const html = await markupRender(location);
    import_utils.logger.info(`Pre-render for ${path}`);
    return html;
  } catch (err) {
    import_utils.logger.error(`Pre-render ${path} error: ${err}`);
    if (!ignorePreRenderError) {
      throw err;
    }
  }
  return htmlTpl;
}
var exportStatic_default = (api) => {
  async function getRoutesFromUserExtraPaths(routePaths) {
    const paths = typeof routePaths === "function" ? await routePaths() : routePaths;
    return paths.reduce((acc, item) => {
      const routePath = typeof item === "string" ? item : item.path;
      acc[routePath] = {
        id: routePath,
        absPath: routePath,
        path: routePath.slice(1),
        file: "",
        // allow user to disable prerender for extra route
        ...typeof item === "object" && item.prerender === false ? { prerender: false } : {}
      };
      return acc;
    }, {});
  }
  api.describe({
    config: {
      schema: ({ zod }) => zod.object({
        extraRoutePaths: zod.union([
          zod.function(),
          zod.array(zod.string())
        ]),
        ignorePreRenderError: zod.boolean().default(false)
      }).deepPartial()
    },
    enableBy: api.EnableBy.config
  });
  api.onCheck(() => {
    (0, import_assert.default)(!api.config.mpa, "`exportStatic` is not supported in `mpa` mode.");
  });
  api.modifyExportHTMLFiles(async (_defaultFiles, opts) => {
    const { publicPath } = api.config;
    const htmlData = api.appData.exportHtmlData;
    const htmlFiles = [];
    const { markupArgs: defaultMarkupArgs } = opts;
    for (const { file, route, prerender } of htmlData) {
      let markupArgs = defaultMarkupArgs;
      if (publicPath.startsWith(".")) {
        (0, import_assert.default)(
          api.config.runtimePublicPath,
          "`runtimePublicPath` should be enable when `publicPath` is relative!"
        );
        const rltPrefix = (0, import_path.relative)((0, import_path.dirname)(file), ".");
        if (rltPrefix) {
          const picked = import_utils.lodash.cloneDeep(
            import_utils.lodash.pick(markupArgs, [
              "favicons",
              "links",
              "styles",
              "headScripts",
              "scripts"
            ])
          );
          picked.favicons.forEach((item, i) => {
            if (item.startsWith(publicPath)) {
              picked.favicons[i] = (0, import_utils.winPath)((0, import_path.join)(rltPrefix, item));
            }
          });
          picked.links.forEach((link) => {
            var _a;
            if ((_a = link.href) == null ? void 0 : _a.startsWith(publicPath)) {
              link.href = (0, import_utils.winPath)((0, import_path.join)(rltPrefix, link.href));
            }
          });
          [picked.headScripts, picked.scripts, picked.styles].forEach(
            (group) => {
              group.forEach((script, i) => {
                var _a;
                if (typeof script === "string" && script.startsWith(publicPath)) {
                  group[i] = (0, import_utils.winPath)((0, import_path.join)(rltPrefix, script));
                } else if (typeof script === "object" && ((_a = script.src) == null ? void 0 : _a.startsWith(publicPath))) {
                  script.src = (0, import_utils.winPath)((0, import_path.join)(rltPrefix, script.src));
                }
              });
            }
          );
          markupArgs = Object.assign({}, markupArgs, picked);
        }
      }
      const htmlContent = await (0, import_server.getMarkup)({
        ...markupArgs,
        // https://github.com/umijs/umi/issues/12108
        path: route.path
      });
      htmlFiles.push({
        path: file,
        content: api.config.ssr && prerender ? await getPreRenderedHTML(api, htmlContent, route.path) : htmlContent
      });
    }
    return htmlFiles;
  });
  api.onGenerateFiles(async () => {
    const {
      exportStatic: { extraRoutePaths = [] }
    } = api.config;
    const extraHtmlData = getExportHtmlData(
      await getRoutesFromUserExtraPaths(extraRoutePaths)
    );
    const htmlData = getExportHtmlData(api.appData.routes).concat(
      extraHtmlData
    );
    api.appData.exportHtmlData = htmlData;
    api.writeTmpFile({
      path: "core/exportStaticRuntimePlugin.ts",
      content: import_utils.Mustache.render(
        `
export function modifyClientRenderOpts(memo: any) {
  const { history, hydrate } = memo;

  return {
    ...memo,
    hydrate: hydrate && !{{{ ignorePaths }}}.includes(history.location.pathname),
  };
}
      `.trim(),
        {
          ignorePaths: JSON.stringify(
            htmlData.filter(({ prerender }) => prerender === false).map(({ route }) => route.path)
          )
        }
      ),
      noPluginDir: true
    });
  });
  api.addRuntimePlugin(() => {
    return [`@@/core/exportStaticRuntimePlugin.ts`];
  });
};
