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

// src/features/ssr/ssr.ts
var ssr_exports = {};
__export(ssr_exports, {
  default: () => ssr_default
});
module.exports = __toCommonJS(ssr_exports);
var import_types = require("@umijs/core/dist/types");
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_fs = require("fs");
var import_path = require("path");
var import_platform = require("../../utils/platform");
var import_utils2 = require("./utils");
var ssr_default = (api) => {
  const esbuildBuilder = (0, import_utils.importLazy)(
    require.resolve("./builder/builder")
  );
  const webpackBuilder = (0, import_utils.importLazy)(
    require.resolve("./webpack/webpack")
  );
  const makoBuiler = (0, import_utils.importLazy)(
    require.resolve("./mako/mako")
  );
  let serverBuildTarget;
  api.describe({
    key: "ssr",
    config: {
      schema({ zod }) {
        return zod.object({
          serverBuildPath: zod.string(),
          serverBuildTarget: zod.enum(["express", "worker"]),
          platform: zod.string(),
          builder: zod.enum(["esbuild", "webpack", "mako"]),
          __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: zod.object({
            pureApp: zod.boolean(),
            pureHtml: zod.boolean()
          }),
          useStream: zod.boolean().default(true)
        }).deepPartial();
      }
    },
    enableBy: import_types.EnableBy.config
  });
  api.onCheck(() => {
    const reactVersion = parseInt(api.appData.react.version.split(".")[0], 10) || 0;
    if (reactVersion < 18) {
      throw new Error(
        `SSR requires React version >= 18.0.0, but got ${reactVersion}.`
      );
    }
  });
  api.onStart(() => {
    import_utils.logger.warn(`SSR feature is in beta, may be unstable`);
  });
  api.modifyDefaultConfig((memo) => {
    if (serverBuildTarget === "worker") {
      const oReactDom = memo.alias["react-dom"];
      delete memo.alias["react-dom"];
      memo.alias["react-dom/server$"] = (0, import_utils.winPath)(
        (0, import_path.join)(
          api.service.configDefaults.alias["react-dom"],
          "server.browser.js"
        )
      );
      memo.alias["react-dom"] = oReactDom;
    }
    return memo;
  });
  api.modifyConfig((memo) => {
    memo.define ?? (memo.define = {});
    serverBuildTarget = memo.define["process.env.SSR_BUILD_TARGET"] = memo.ssr.serverBuildTarget || "express";
    if (memo.ssr.builder === "mako") {
      (0, import_assert.default)(
        memo.mako,
        `The \`ssr.builder mako\` config is now allowed when \`mako\` is enable!`
      );
      memo.manifest ?? (memo.manifest = {});
      if (import_platform.isWindows) {
        memo.ssr.builder = "webpack";
      }
    }
    return memo;
  });
  api.addMiddlewares(() => [
    async (req, res, next) => {
      if (serverBuildTarget === "worker") {
        return next();
      }
      const modulePath = (0, import_utils2.absServerBuildPath)(api);
      if ((0, import_fs.existsSync)(modulePath)) {
        delete require.cache[modulePath];
        (await require(modulePath)).default(req, res, next);
      } else {
        res.end("umi.server.js is compiling ...");
      }
    }
  ]);
  const serverPackagePath = (0, import_path.dirname)(
    require.resolve("@umijs/server/package.json")
  );
  const ssrTypesPath = (0, import_path.join)(serverPackagePath, "./dist/types");
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      noPluginDir: true,
      path: "ssr/react-shim.js",
      content: `
      import * as React from 'react';
export { React };
`
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "core/serverInsertedHTMLContext.ts",
      content: `
// Use React.createContext to avoid errors from the RSC checks because
// it can't be imported directly in Server Components:
import React from 'react'

export type ServerInsertedHTMLHook = (callbacks: () => React.ReactNode) => void;
// More info: https://github.com/vercel/next.js/pull/40686
export const ServerInsertedHTMLContext =
  React.createContext<ServerInsertedHTMLHook | null>(null as any);

// copy form https://github.com/vercel/next.js/blob/fa076a3a69c9ccf63c9d1e53e7b681aa6dc23db7/packages/next/src/shared/lib/server-inserted-html.tsx#L13
export function useServerInsertedHTML(callback: () => React.ReactNode): void {
  const addInsertedServerHTMLCallback = React.useContext(ServerInsertedHTMLContext);
  // Should have no effects on client where there's no flush effects provider
  if (addInsertedServerHTMLCallback) {
    addInsertedServerHTMLCallback(callback);
  }
}
`
    });
    api.writeTmpFile({
      path: "types.d.ts",
      content: `
export type {
  // server loader
  IServerLoaderArgs,
  UmiRequest,
  ServerLoader,
  // metadata loader
  MetadataLoader,
  IMetadata,
  IMetaTag,
} from '${(0, import_utils.winPath)(ssrTypesPath)}'
`
    });
  });
  api.onBeforeCompiler(async ({ opts }) => {
    const { builder = "webpack" } = api.config.ssr;
    if (builder === "esbuild") {
      await esbuildBuilder.build({
        api,
        watch: api.env === "development"
      });
    } else if (builder === "webpack") {
      (0, import_assert.default)(
        !api.config.vite,
        `The \`vite\` config is now allowed when \`ssr.builder\` is webpack!`
      );
      await webpackBuilder.build(api, opts);
    } else if (api.config.mako && builder === "mako") {
      await makoBuiler.build(api);
    }
  });
  api.onDevCompileDone(() => {
    if (api.config.mako) {
      (0, import_utils2.generateBuildManifest)(api);
    }
  });
  api.onBuildComplete(() => {
    if (api.config.mako) {
      (0, import_utils2.generateBuildManifest)(api);
    }
  });
  api.onBuildComplete(async ({ err }) => {
    if (err)
      return;
    if (api.config.ssr.platform === "vercel") {
      const jsonFile = (0, import_path.join)(api.cwd, "vercel.json");
      const json = (0, import_fs.existsSync)(jsonFile) ? import_utils.fsExtra.readJSONSync(jsonFile) : {};
      json.routes = (json.routes || []).filter((route) => {
        return !["/", "/__serverLoader"].includes(route.src);
      });
      json.routes.push({ src: "/", dest: "/api/umi.server" });
      json.routes.push({ src: "/__serverLoader", dest: "/api/umi.server" });
      (0, import_fs.writeFileSync)(jsonFile, JSON.stringify(json, null, 2));
      import_utils.logger.info(`[SSR] vercel.json updated`);
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, "api/umi.server.js"),
        `
const manifest = require('../server/build-manifest.json');
export default function handler(request, response) {
    require(manifest.assets["umi.js"]).default(request, response);
}
      `.trimStart(),
        "utf-8"
      );
      import_utils.logger.info(`[SSR] write api/umi.server.js`);
    }
  });
  const pluginName = "ProcessAssetsPlugin";
  class ProcessAssetsPlugin {
    apply(compiler) {
      compiler.hooks.compilation.tap(pluginName, (compilation) => {
        compilation.hooks.afterProcessAssets.tap(pluginName, () => {
          const modulePath = (0, import_utils2.absServerBuildPath)(api);
          delete require.cache[modulePath];
        });
      });
    }
  }
  api.modifyWebpackConfig((config) => {
    var _a;
    config.plugins.push(new ProcessAssetsPlugin());
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...(_a = config.optimization) == null ? void 0 : _a.splitChunks,
        cacheGroups: {
          styles: {
            // TODO: no umi specified
            name: "umi",
            test: /\.(less|css|scss|sass)$/,
            chunks: "all",
            minChunks: 1,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    };
    return config;
  });
};
