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

// src/transformers/esbuild/index.ts
var esbuild_exports = {};
__export(esbuild_exports, {
  default: () => esbuild_default
});
module.exports = __toCommonJS(esbuild_exports);
var import_crypto = require("crypto");
var import_esbuild = require("esbuild");
var import_fs = __toESM(require("fs"));
var import_path = require("path");
var import_options = require("./options");
var THIS_FILE = import_fs.default.readFileSync(__filename);
var TS_TSX_REGEX = /\.tsx?$/;
var JS_JSX_REGEX = /\.jsx?$/;
function isTarget(path) {
  return JS_JSX_REGEX.test(path) || TS_TSX_REGEX.test(path) || path.endsWith(".mjs");
}
var createTransformer = (userOptions = {}) => {
  const options = (0, import_options.resolveOptions)(userOptions);
  return {
    canInstrument: false,
    getCacheKey(fileData, filePath, transformOptions) {
      const { config, instrument, configString } = transformOptions;
      return (0, import_crypto.createHash)("md5").update(THIS_FILE).update("\0", "utf8").update(JSON.stringify(options)).update("\0", "utf8").update(fileData).update("\0", "utf8").update((0, import_path.relative)(config.rootDir, filePath)).update("\0", "utf8").update(configString).update("\0", "utf8").update(filePath).update("\0", "utf8").update(instrument ? "instrument" : "").update("\0", "utf8").update(process.env.NODE_ENV || "").digest("hex");
    },
    process(source, path, transformOptions) {
      const { config } = transformOptions;
      if (!isTarget(path))
        return {
          code: source
        };
      let rawCode = source;
      if (rawCode.indexOf("jest.mock(") >= 0 || rawCode.indexOf("jest.doMock(") >= 0) {
        rawCode = require("./transformer").babelTransform({
          sourceText: rawCode,
          sourcePath: path,
          config: transformOptions
        });
      }
      const result = (0, import_esbuild.transformSync)(rawCode, {
        ...options,
        ...config.globals["jest-esbuild"],
        loader: userOptions.loader || ext2Loader((0, import_path.extname)(path)),
        sourcefile: path,
        sourcesContent: false
      });
      if (result.warnings.length) {
        result.warnings.forEach((m) => {
          console.warn(m);
        });
      }
      let { map, code } = result;
      map = {
        ...JSON.parse(result.map),
        sourcesContent: null
      };
      code = code + "\n//# sourceMappingURL=data:application/json;base64," + Buffer.from(JSON.stringify(map)).toString("base64");
      return { code, map };
    }
  };
};
var EXT_MAP = {
  ".js": "js",
  ".jsx": "jsx",
  ".ts": "ts",
  ".tsx": "tsx",
  ".mjs": "js"
};
function ext2Loader(ext) {
  return EXT_MAP[ext] || "js";
}
var esbuild_default = {
  createTransformer
};
