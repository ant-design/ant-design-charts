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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createConfig: () => createConfig
});
module.exports = __toCommonJS(src_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
function getJSTransformer(jsTransformer, opts) {
  switch (jsTransformer) {
    case "esbuild":
      return [
        require.resolve((0, import_path.join)(__dirname, "transformers/esbuild")),
        {
          // See https://github.com/umijs/umi/issues/10412
          target: "es2020",
          ...opts,
          sourcemap: true
        }
      ];
    case "swc":
      return require.resolve("@swc-node/jest");
    case "ts-jest":
      return require.resolve("ts-jest");
    default:
      throw new Error(`Unknown jsTransformer: ${jsTransformer}`);
  }
}
function createConfig(opts) {
  (0, import_utils.setNoDeprecation)();
  const config = {
    testMatch: ["**/*.test.(t|j)s(x)?"],
    testPathIgnorePatterns: [
      "/node_modules/",
      "<rootDir>/config/",
      // in case of config.test.ts
      "<rootDir>/mock/",
      "<rootDir>/.umirc.test.ts"
    ],
    transform: {
      "^.+\\.(t|j)sx?$": getJSTransformer(
        (opts == null ? void 0 : opts.jsTransformer) || "esbuild",
        opts == null ? void 0 : opts.jsTransformerOpts
      ),
      "^.+\\.mjs$": getJSTransformer(
        (opts == null ? void 0 : opts.jsTransformer) || "esbuild",
        opts == null ? void 0 : opts.jsTransformerOpts
      )
    },
    moduleNameMapper: {
      "^.+\\.(css|less|sass|scss|stylus)$": require.resolve("identity-obj-proxy")
    },
    testTimeout: 3e4,
    transformIgnorePatterns: [`/node_modules/(?!${[].join("|")})`],
    modulePathIgnorePatterns: [
      "<rootDir>/packages/.+/compiled",
      "<rootDir>/packages/.+/fixtures"
    ],
    setupFiles: [require.resolve("../setupFiles/shim")],
    resolver: require.resolve("./resolver.js")
  };
  if ((opts == null ? void 0 : opts.target) === "browser") {
    config.testEnvironment = "jsdom";
  }
  return config;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createConfig
});
