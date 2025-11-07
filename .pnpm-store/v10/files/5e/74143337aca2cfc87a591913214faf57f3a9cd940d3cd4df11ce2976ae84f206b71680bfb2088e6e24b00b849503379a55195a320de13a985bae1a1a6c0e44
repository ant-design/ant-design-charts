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

// src/plugins/svgr.ts
var svgr_exports = {};
__export(svgr_exports, {
  default: () => svgrPlugin
});
module.exports = __toCommonJS(svgr_exports);
var import_core = require("@svgr/core");
var import_esbuild = require("@umijs/bundler-utils/compiled/esbuild");
var import_fs = __toESM(require("fs"));
function svgrPlugin(svgr = {}, svgo = {}, transformOptions) {
  return {
    name: "bundler-vite:svgr",
    async transform(code, id) {
      if (id.endsWith(".svg")) {
        let componentCode = code;
        if (svgr) {
          const svgFile = import_fs.default.readFileSync(id, "utf8");
          const svgrCode = await (0, import_core.transform)(
            svgFile,
            {
              icon: true,
              svgoConfig: {
                ...svgo || {}
              },
              ...svgr,
              svgo: !!svgo
            },
            { componentName: "ReactComponent" }
          );
          componentCode = svgrCode.replace(
            "export default ReactComponent",
            "export { ReactComponent }"
          ) + "\n" + code;
        }
        const result = await (0, import_esbuild.transform)(componentCode, {
          loader: "jsx",
          sourcefile: id,
          sourcemap: true,
          ...transformOptions
        });
        return {
          code: result.code,
          map: result.map || null
        };
      }
    }
  };
}
