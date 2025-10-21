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

// src/features/codeSplitting/codeSplitting.ts
var codeSplitting_exports = {};
__export(codeSplitting_exports, {
  default: () => codeSplitting_default
});
module.exports = __toCommonJS(codeSplitting_exports);
var import_crypto = __toESM(require("crypto"));
var codeSplitting_default = (api) => {
  api.describe({
    key: "codeSplitting",
    config: {
      schema({ zod }) {
        return zod.object({
          jsStrategy: zod.enum(["bigVendors", "depPerChunk", "granularChunks"]),
          jsStrategyOptions: zod.object({}).optional(),
          cssStrategy: zod.enum(["mergeAll"]).optional(),
          cssStrategyOptions: zod.object({}).optional()
        });
      }
    },
    enableBy: api.EnableBy.config
  });
  api.chainWebpack((memo) => {
    if (api.env !== "production")
      return;
    const { jsStrategy, jsStrategyOptions, cssStrategy } = api.config.codeSplitting;
    if (jsStrategy === "bigVendors") {
      memo.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            name: "vendors",
            chunks: "async",
            ...jsStrategyOptions
          }
        }
      });
    }
    if (jsStrategy === "depPerChunk") {
      memo.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "async",
            name(module2) {
              const path = module2.context.replace(/.pnpm[\\/]/, "");
              const match = path.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              if (!match)
                return "npm.unknown";
              const packageName = match[1];
              return `npm.${packageName.replace(/@/g, "_at_").replace(/\+/g, "_")}`;
            }
          }
        }
      });
    }
    if (jsStrategy === "granularChunks") {
      const FRAMEWORK_BUNDLES = [
        "react-dom",
        "react",
        // 'core-js',
        // 'regenerator-runtime',
        "history",
        "react-router",
        "react-router-dom",
        "scheduler"
        // TODO
        // add renderer-react
      ];
      memo.optimization.splitChunks({
        cacheGroups: {
          default: false,
          defaultVendors: false,
          framework: {
            name: "framework",
            chunks: "all",
            test: new RegExp(
              `[\\\\/]node_modules[\\\\/](${FRAMEWORK_BUNDLES.join(
                `|`
              )})[\\\\/]`
            ),
            priority: 40,
            enforce: true
          },
          lib: {
            test(module2) {
              return !isModuleCSS(module2) && module2.size() > 16e4 && /node_modules[/\\]/.test(module2.identifier());
            },
            name(module2) {
              const rawRequest = module2.rawRequest && module2.rawRequest.replace(/^@(\w+)[/\\]/, "$1-");
              if (rawRequest) {
                return `${// when `require()` a package with relative path,
                // need remove leading `.` and `/`, otherwise will not found `.js` file
                // e.g. require('../../lib/codemirror')
                rawRequest.replace(/\./g, "_").replace(/\//g, "-")}-lib`;
              }
              const identifier = module2.identifier();
              const trimmedIdentifier = /(?:^|[/\\])node_modules[/\\](.*)/.exec(
                identifier
              );
              const processedIdentifier = trimmedIdentifier && trimmedIdentifier[1].replace(/^@(\w+)[/\\]/, "$1-");
              return `${processedIdentifier || identifier}-lib`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
            chunks: "async"
          },
          shared: {
            name(_module, chunks) {
              const cryptoName = import_crypto.default.createHash("sha1").update(
                chunks.reduce((acc, chunk) => {
                  return acc + chunk.name;
                }, "")
              ).digest("base64").replace(/\//g, "").replace(/\+/g, "-").replace(/=/g, "_");
              return `shared-${cryptoName}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
            chunks: "async"
          }
        }
      });
    }
    if (cssStrategy) {
      throw new Error(`codeSplitting.cssStrategy is not supported yet`);
    }
    return memo;
  });
};
function isModuleCSS(module2) {
  return (
    // mini-css-extract-plugin
    module2.type === `css/mini-extract` || // extract-css-chunks-webpack-plugin (old)
    module2.type === `css/extract-chunks` || // extract-css-chunks-webpack-plugin (new)
    module2.type === `css/extract-css-chunks`
  );
}
