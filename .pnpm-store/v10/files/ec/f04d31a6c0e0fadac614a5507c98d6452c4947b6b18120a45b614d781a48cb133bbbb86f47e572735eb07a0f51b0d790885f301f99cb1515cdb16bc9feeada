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

// src/features/tmpFiles/tmpFiles.ts
var tmpFiles_exports = {};
__export(tmpFiles_exports, {
  default: () => tmpFiles_default
});
module.exports = __toCommonJS(tmpFiles_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_umi = require("umi");
var import_getMarkupArgs = require("../../commands/dev/getMarkupArgs");
var import_constants = require("../../constants");
var import_getModuleExports = require("./getModuleExports");
var import_importsToStr = require("./importsToStr");
var routesApi = (0, import_utils.importLazy)(
  require.resolve("./routes")
);
var tmpFiles_default = (api) => {
  const umiDir = process.env.UMI_DIR;
  api.describe({
    key: "tmpFiles",
    config: {
      schema({ zod }) {
        return zod.boolean();
      }
    }
  });
  const TSCONFIG_FILE_NAME = "tsconfig.json";
  api.onGenerateFiles(async (opts) => {
    var _a, _b, _c, _d;
    const rendererPath = (0, import_utils.winPath)(
      await api.applyPlugins({
        key: "modifyRendererPath",
        initialValue: (0, import_path.dirname)(
          require.resolve("@umijs/renderer-react/package.json")
        )
      })
    );
    const serverRendererPath = (0, import_utils.winPath)(
      await api.applyPlugins({
        key: "modifyServerRendererPath",
        initialValue: (0, import_path.join)(rendererPath, "dist/server.js")
      })
    );
    const frameworkName = api.service.frameworkName;
    const srcPrefix = api.appData.hasSrcDir ? "src/" : "";
    const umiTempDir = `${srcPrefix}.${frameworkName}`;
    const baseUrl = api.appData.hasSrcDir ? "../../" : "../";
    const isTs5 = (_a = api.appData.typescript.tsVersion) == null ? void 0 : _a.startsWith("5");
    const isTslibInstalled = !!api.appData.typescript.tslibVersion;
    const tsconfigFilePath = (0, import_path.join)(api.paths.absTmpPath, TSCONFIG_FILE_NAME);
    const relativeUmiDirPath = (0, import_utils.winPath)(
      (0, import_path.relative)((0, import_path.dirname)(tsconfigFilePath), umiDir)
    );
    let umiTsConfig = {
      compilerOptions: {
        target: "esnext",
        module: "esnext",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        moduleResolution: isTs5 ? "bundler" : "node",
        importHelpers: isTslibInstalled,
        noEmit: true,
        jsx: api.appData.framework === "vue" ? "preserve" : "react-jsx",
        esModuleInterop: true,
        sourceMap: true,
        baseUrl,
        strict: true,
        resolveJsonModule: true,
        allowSyntheticDefaultImports: true,
        // Supported by vue only
        ...api.appData.framework === "vue" ? {
          // TODO Actually, it should be vite mode, but here it is written as vue only
          // Required in Vite https://vitejs.dev/guide/features.html#typescript
          isolatedModules: true
        } : {},
        paths: {
          "@/*": [`${srcPrefix}*`],
          "@@/*": [`${umiTempDir}/*`],
          [`${api.appData.umi.importSource}`]: [relativeUmiDirPath],
          [`${api.appData.umi.importSource}/typings`]: [
            `${umiTempDir}/typings`
          ],
          ...api.config.vite ? {
            "@fs/*": ["*"]
          } : {}
        }
      },
      include: [
        `${baseUrl}.${frameworkName}rc.ts`,
        `${baseUrl}.${frameworkName}rc.*.ts`,
        `${baseUrl}**/*.d.ts`,
        `${baseUrl}**/*.ts`,
        `${baseUrl}**/*.tsx`,
        api.appData.framework === "vue" && `${baseUrl}**/*.vue`
      ].filter(Boolean)
    };
    umiTsConfig = await api.applyPlugins({
      key: "modifyTSConfig",
      type: api.ApplyPluginsType.modify,
      initialValue: umiTsConfig
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: TSCONFIG_FILE_NAME,
      content: JSON.stringify(umiTsConfig, null, 2)
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "typings.d.ts",
      content: `
type CSSModuleClasses = { readonly [key: string]: string }
declare module '*.css' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.scss' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.sass' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.less' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.styl' {
  const classes: CSSModuleClasses
  export default classes
}
declare module '*.stylus' {
  const classes: CSSModuleClasses
  export default classes
}

// images
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.gif' {
  const src: string
  export default src
}
declare module '*.svg' {
  ${api.config.svgr ? `
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<
  SVGSVGElement
  > & { title?: string }>;
`.trimStart() : ""}
  const src: string
  export default src
}
declare module '*.ico' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}
declare module '*.avif' {
  const src: string
  export default src
}

// media
declare module '*.mp4' {
  const src: string
  export default src
}
declare module '*.webm' {
  const src: string
  export default src
}
declare module '*.ogg' {
  const src: string
  export default src
}
declare module '*.mp3' {
  const src: string
  export default src
}
declare module '*.wav' {
  const src: string
  export default src
}
declare module '*.flac' {
  const src: string
  export default src
}
declare module '*.aac' {
  const src: string
  export default src
}

// fonts
declare module '*.woff' {
  const src: string
  export default src
}
declare module '*.woff2' {
  const src: string
  export default src
}
declare module '*.eot' {
  const src: string
  export default src
}
declare module '*.ttf' {
  const src: string
  export default src
}
declare module '*.otf' {
  const src: string
  export default src
}

// other
declare module '*.wasm' {
  const initWasm: (options: WebAssembly.Imports) => Promise<WebAssembly.Exports>
  export default initWasm
}
declare module '*.webmanifest' {
  const src: string
  export default src
}
declare module '*.pdf' {
  const src: string
  export default src
}
declare module '*.txt' {
  const src: string
  export default src
}
`.trimEnd()
    });
    const entryCode = (await api.applyPlugins({
      key: "addEntryCode",
      initialValue: []
    })).join("\n");
    const entryCodeAhead = (await api.applyPlugins({
      key: "addEntryCodeAhead",
      initialValue: []
    })).join("\n");
    const importsAhead = (0, import_importsToStr.importsToStr)(
      await api.applyPlugins({
        key: "addEntryImportsAhead",
        initialValue: [
          api.appData.globalCSS.length && {
            source: api.appData.globalCSS[0]
          },
          api.appData.globalJS.length && {
            source: api.appData.globalJS[0]
          }
        ].filter(Boolean)
      })
    ).join("\n");
    const imports = (0, import_importsToStr.importsToStr)(
      await api.applyPlugins({
        key: "addEntryImports",
        initialValue: []
      })
    ).join("\n");
    const ssrConfig = api.config.ssr;
    const __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ((_b = api.config.ssr) == null ? void 0 : _b.__INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ?? {
      pureApp: false,
      pureHtml: false
    };
    api.writeTmpFile({
      noPluginDir: true,
      path: "umi.ts",
      tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "umi.tpl"),
      context: {
        mountElementId: api.config.mountElementId,
        rendererPath,
        publicPath: api.config.publicPath,
        runtimePublicPath: api.config.runtimePublicPath ? "true" : "false",
        entryCode,
        entryCodeAhead,
        polyfillImports: (0, import_importsToStr.importsToStr)(
          await api.applyPlugins({
            key: "addPolyfillImports",
            initialValue: []
          })
        ).join("\n"),
        importsAhead,
        imports,
        basename: api.config.base,
        historyType: api.config.history.type,
        __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: JSON.stringify(
          __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        ),
        hydrate: !!ssrConfig,
        useStream: (ssrConfig == null ? void 0 : ssrConfig.useStream) ?? true,
        reactRouter5Compat: !!api.config.reactRouter5Compat,
        loadingComponent: api.appData.globalLoading
      }
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "core/EmptyRoute.tsx",
      // https://github.com/umijs/umi/issues/8782
      // Empty <Outlet /> needs to pass through outlet context, otherwise nested route will not get context value.
      content: `
import React from 'react';
import { Outlet, useOutletContext } from 'umi';
export default function EmptyRoute() {
  const context = useOutletContext();
  return <Outlet context={context} />;
}
      `
    });
    let routes;
    if (opts.isFirstTime) {
      routes = api.appData.routes;
    } else {
      routes = await routesApi.getRoutes({
        api
      });
      api.appData.routes = routes;
    }
    const hasSrc = api.appData.hasSrcDir;
    const pages = (0, import_path.basename)(
      ((_c = api.config.conventionRoutes) == null ? void 0 : _c.base) || api.paths.absPagesPath
    );
    const prefix = hasSrc ? `../../../src/${pages}/` : `../../${pages}/`;
    const clonedRoutes = import_utils.lodash.cloneDeep(routes);
    for (const id of Object.keys(clonedRoutes)) {
      for (const key of Object.keys(clonedRoutes[id])) {
        const route = clonedRoutes[id];
        if (key.startsWith("__") || ["absPath", "file"].includes(key)) {
          delete route[key];
        }
      }
    }
    const headerImports = [];
    let routesString = JSON.stringify(clonedRoutes);
    if (api.config.clientLoader) {
      routesString = routesString.replace(/"(clientLoaders\[.*?)"/g, "$1");
      headerImports.push(`import clientLoaders from './loaders.js';`);
    }
    if (!api.userConfig.routes && api.isPluginEnable("routeProps")) {
      routesString = routesString.replace(
        /"routeProps":"(routeProps\[.*?)"/g,
        "...$1"
      );
      headerImports.push(`import routeProps from './routeProps';`);
      headerImports.push(`
if (process.env.NODE_ENV === 'development') {
  Object.entries(routeProps).forEach(([key, value]) => {
    const internalProps = ['path', 'id', 'parentId', 'isLayout', 'isWrapper', 'layout', 'clientLoader'];
    Object.keys(value).forEach((prop) => {
      if (internalProps.includes(prop)) {
        throw new Error(
          \`[UmiJS] route '\${key}' should not have '\${prop}' prop, please remove this property in 'routeProps'.\`
        )
      }
    })
  })
}
`);
    }
    if (api.appData.framework === "react") {
      headerImports.push(`import React from 'react';`);
    }
    api.writeTmpFile({
      noPluginDir: true,
      path: "core/route.tsx",
      tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "route.tpl"),
      context: {
        headerImports: headerImports.join("\n"),
        routes: routesString,
        routeComponents: await routesApi.getRouteComponents({
          routes,
          prefix,
          api
        })
      }
    });
    const plugins = await api.applyPlugins({
      key: "addRuntimePlugin",
      initialValue: [(_d = api.appData.appJS) == null ? void 0 : _d.path].filter(Boolean)
    });
    function checkDuplicatePluginKeys(arr) {
      const duplicates = [];
      arr.reduce((prev, curr) => {
        if (prev[curr]) {
          duplicates.push(curr);
        } else {
          prev[curr] = true;
        }
        return prev;
      }, {});
      if (duplicates.length) {
        throw new Error(
          `The plugin key cannot be duplicated. (${duplicates.join(", ")})`
        );
      }
    }
    const validKeys = await api.applyPlugins({
      key: "addRuntimePluginKey",
      initialValue: [
        // why add default?
        // ref: https://github.com/umijs/mako/issues/1026
        ...process.env.OKAM ? ["default"] : [],
        "patchRoutes",
        "patchClientRoutes",
        "modifyContextOpts",
        "modifyClientRenderOpts",
        "rootContainer",
        "innerProvider",
        "i18nProvider",
        "accessProvider",
        "dataflowProvider",
        "outerProvider",
        "render",
        "onRouteChange"
      ]
    });
    checkDuplicatePluginKeys(validKeys);
    const appPluginRegExp = /(\/|\\)app.(ts|tsx|jsx|js)$/;
    api.writeTmpFile({
      noPluginDir: true,
      path: "core/plugin.ts",
      tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "plugin.tpl"),
      context: {
        plugins: plugins.map((plugin, index) => ({
          index,
          // 在 app.ts 中，如果使用了 defineApp 方法，会存在 export default 的情况
          hasDefaultExport: appPluginRegExp.test(plugin),
          path: (0, import_utils.winPath)(plugin)
        })),
        validKeys,
        // Inject code for vite only
        isViteMode: !!api.config.vite
      }
    });
    if (ssrConfig) {
      const umiPluginPath = (0, import_utils.winPath)((0, import_path.join)(umiDir, "client/client/plugin.js"));
      const umiServerPath = (0, import_utils.winPath)(require.resolve("@umijs/server/dist/ssr"));
      const mountElementId = api.config.mountElementId;
      const routesWithServerLoader = Object.keys(routes).reduce((memo, id) => {
        if (routes[id].hasServerLoader) {
          memo.push({
            id,
            path: routes[id].__absFile
          });
        }
        return memo;
      }, []);
      const { headScripts, scripts, styles, title, favicons, links, metas } = await (0, import_getMarkupArgs.getMarkupArgs)({ api });
      api.writeTmpFile({
        noPluginDir: true,
        path: "umi.server.ts",
        tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "server.tpl"),
        context: {
          routes: JSON.stringify(clonedRoutes, null, 2).replace(
            /"component": "await import\((.*)\)"/g,
            '"component": await import("$1")'
          ),
          version: api.appData.umi.version,
          reactVersion: api.appData.react.version,
          entryCode,
          entryCodeAhead,
          routesWithServerLoader,
          importsAhead,
          imports,
          umiPluginPath,
          serverRendererPath,
          umiServerPath,
          validKeys,
          assetsPath: (0, import_utils.winPath)(
            (0, import_path.join)(api.paths.absOutputPath, "build-manifest.json")
          ),
          env: JSON.stringify(api.env),
          htmlPageOpts: JSON.stringify({
            headScripts,
            styles,
            title,
            favicons,
            links,
            metas,
            scripts: scripts || []
          }),
          __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: JSON.stringify(
            __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          ),
          mountElementId,
          basename: api.config.base,
          useStream: (ssrConfig == null ? void 0 : ssrConfig.useStream) ?? true
        }
      });
    }
    if (api.appData.framework === "react") {
      const { historyWithQuery, reactRouter5Compat } = api.config;
      const historyPath = historyWithQuery ? (0, import_utils.winPath)((0, import_path.dirname)(require.resolve("@umijs/history/package.json"))) : rendererPath;
      api.writeTmpFile({
        noPluginDir: true,
        path: "core/history.ts",
        tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "history.tpl"),
        context: {
          historyPath,
          reactRouter5Compat
        }
      });
      api.writeTmpFile({
        noPluginDir: true,
        path: "core/historyIntelli.ts",
        tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "historyIntelli.tpl"),
        context: {
          historyPath,
          reactRouter5Compat
        }
      });
    }
  });
  function checkMembers(opts) {
    const conflicts = import_utils.lodash.intersection(opts.exportMembers, opts.members);
    if (conflicts.length) {
      throw new Error(
        `Conflict members: ${conflicts.join(", ")} in ${opts.path}`
      );
    }
  }
  async function getExportsAndCheck(opts) {
    const members = await (0, import_getModuleExports.getModuleExports)({ file: opts.path });
    checkMembers({
      members,
      exportMembers: opts.exportMembers,
      path: opts.path
    });
    opts.exportMembers.push(...members);
    return members;
  }
  api.register({
    key: "onGenerateFiles",
    fn: async () => {
      const rendererPath = (0, import_utils.winPath)(
        await api.applyPlugins({
          key: "modifyRendererPath",
          initialValue: (0, import_path.dirname)(
            require.resolve("@umijs/renderer-react/package.json")
          )
        })
      );
      const exports2 = [];
      const beforeExports = [];
      const afterExports = [];
      const exportMembers = ["default"];
      exports2.push("// @umijs/renderer-*");
      exports2.push(
        `export { ${(await getExportsAndCheck({
          path: (0, import_path.join)(rendererPath, "dist/index.js"),
          exportMembers
        })).join(", ")} } from '${rendererPath}';`
      );
      exports2.push(
        `export type { History, ClientLoader } from '${rendererPath}'`
      );
      exports2.push("// umi/client/client/plugin");
      const umiPluginPath = (0, import_utils.winPath)((0, import_path.join)(umiDir, "client/client/plugin.js"));
      exports2.push(
        `export { ${(await getExportsAndCheck({
          path: umiPluginPath,
          exportMembers
        })).join(", ")} } from '${umiPluginPath}';`
      );
      exports2.push(`export { history, createHistory } from './core/history';`);
      checkMembers({
        members: ["history", "createHistory"],
        exportMembers,
        path: "@@/core/history.ts"
      });
      if (api.service.config.terminal !== false) {
        exports2.push(`export { terminal } from './core/terminal';`);
        checkMembers({
          members: ["terminal"],
          exportMembers,
          path: "@@/core/terminal.ts"
        });
      }
      if (api.config.test !== false && api.appData.framework === "react") {
        if (process.env.NODE_ENV === "test" || // development is for TestBrowser's type
        process.env.NODE_ENV === "development") {
          afterExports.push(
            `// test`,
            `export { TestBrowser } from './testBrowser';`
          );
        }
      }
      if (api.appData.framework === "react") {
        exports2.push("// react ssr");
        if (api.config.ssr) {
          exports2.push(
            `export { useServerInsertedHTML } from './core/serverInsertedHTMLContext';`
          );
        } else {
          exports2.push(
            `export const useServerInsertedHTML: Function = () => {};`
          );
        }
      }
      beforeExports.push("// plugins");
      const allPlugins = (0, import_fs.readdirSync)(api.paths.absTmpPath).filter(
        (file) => file.startsWith("plugin-")
      );
      const plugins = allPlugins.filter((file) => {
        if ((0, import_fs.existsSync)((0, import_path.join)(api.paths.absTmpPath, file, "index.ts")) || (0, import_fs.existsSync)((0, import_path.join)(api.paths.absTmpPath, file, "index.tsx"))) {
          return true;
        }
      });
      for (const plugin of plugins) {
        let file;
        if ((0, import_fs.existsSync)((0, import_path.join)(api.paths.absTmpPath, plugin, "index.ts"))) {
          file = (0, import_path.join)(api.paths.absTmpPath, plugin, "index.ts");
        }
        if ((0, import_fs.existsSync)((0, import_path.join)(api.paths.absTmpPath, plugin, "index.tsx"))) {
          file = (0, import_path.join)(api.paths.absTmpPath, plugin, "index.tsx");
        }
        const pluginExports = await getExportsAndCheck({
          path: file,
          exportMembers
        });
        if (pluginExports.length) {
          beforeExports.push(
            `export { ${pluginExports.join(", ")} } from '${(0, import_utils.winPath)(
              (0, import_path.join)(api.paths.absTmpPath, plugin)
            )}';`
          );
        }
      }
      beforeExports.push("// plugins types.d.ts");
      for (const plugin of allPlugins) {
        const file = (0, import_utils.winPath)((0, import_path.join)(api.paths.absTmpPath, plugin, "types.d.ts"));
        if ((0, import_fs.existsSync)(file)) {
          const noSuffixFile = file.replace(/\.ts$/, "");
          beforeExports.push(`export * from '${noSuffixFile}';`);
        }
      }
      let pluginIndex = 0;
      const beforeImport = [];
      let runtimeConfigType = "export type RuntimeConfig = IDefaultRuntimeConfig";
      for (const plugin of allPlugins) {
        const runtimeConfigFile = (0, import_utils.winPath)(
          (0, import_path.join)(api.paths.absTmpPath, plugin, import_umi.RUNTIME_TYPE_FILE_NAME)
        );
        if ((0, import_fs.existsSync)(runtimeConfigFile)) {
          const noSuffixRuntimeConfigFile = runtimeConfigFile.replace(
            /\.ts$/,
            ""
          );
          beforeImport.push(
            `import type { IRuntimeConfig as Plugin${pluginIndex} } from '${noSuffixRuntimeConfigFile}'`
          );
          runtimeConfigType += ` & Plugin${pluginIndex}`;
          pluginIndex += 1;
        }
      }
      api.writeTmpFile({
        noPluginDir: true,
        path: "core/defineApp.ts",
        tplPath: (0, import_path.join)(import_constants.TEMPLATES_DIR, "defineApp.tpl"),
        context: {
          beforeImport: beforeImport.join("\n"),
          runtimeConfigType
        }
      });
      beforeExports.unshift(
        // `app.ts` should be in the first, otherwise it will be circular dependency
        `// defineApp`,
        `export { defineApp } from './core/defineApp'`,
        // https://javascript.plainenglish.io/leveraging-type-only-imports-and-exports-with-typescript-3-8-5c1be8bd17fb
        `export type { RuntimeConfig } from './core/defineApp'`
      );
      api.writeTmpFile({
        noPluginDir: true,
        path: "exports.ts",
        content: [...beforeExports, ...exports2, ...afterExports].join("\n")
      });
    },
    stage: 1e4
  });
};
