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

// src/features/apiRoute/vercel/esbuild.ts
var esbuild_exports = {};
__export(esbuild_exports, {
  default: () => esbuild_default
});
module.exports = __toCommonJS(esbuild_exports);
var import_esbuild = __toESM(require("@umijs/bundler-utils/compiled/esbuild"));
var import_path = require("path");
var import_constants = require("../constants");
var import_utils = require("../utils");
async function esbuild_default(api, apiRoutes) {
  const apiRoutePaths = apiRoutes.map(
    (r) => (0, import_path.join)(api.paths.absTmpPath, "api", r.file)
  );
  const pkg = require((0, import_path.join)(api.cwd, "./package.json"));
  await import_esbuild.default.build({
    format: "cjs",
    platform: "node",
    bundle: true,
    entryPoints: [
      ...apiRoutePaths,
      (0, import_path.resolve)(api.paths.absTmpPath, "api/_middlewares.ts")
    ],
    outdir: (0, import_path.resolve)(api.paths.cwd, import_constants.OUTPUT_PATH),
    plugins: [(0, import_utils.esbuildIgnorePathPrefixPlugin)()],
    external: [...Object.keys(pkg.dependencies || {})]
  });
}
