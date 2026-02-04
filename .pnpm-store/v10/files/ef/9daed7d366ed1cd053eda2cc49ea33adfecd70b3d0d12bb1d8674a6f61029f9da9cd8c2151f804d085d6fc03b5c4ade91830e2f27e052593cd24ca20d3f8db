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

// src/features/check/check.ts
var check_exports = {};
__export(check_exports, {
  default: () => check_default
});
module.exports = __toCommonJS(check_exports);
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var check_default = (api) => {
  api.onCheck(async () => {
    (0, import_assert.default)(
      api.appData.routes,
      `routes not found, you may be run umi on the wrong directory.`
    );
    await api.applyPlugins({
      key: "onChangePkgJSON",
      args: {
        current: api.appData.pkg
      }
    });
    await api.applyPlugins({
      key: "onCheckConfig",
      args: {
        config: api.config,
        userConfig: api.userConfig
      }
    });
  });
  api.onCheckCode(({ CodeFrameError, ...args }) => {
    args.imports.forEach(({ source, loc }) => {
      if (["cnpm", "tnpm"].includes(api.appData.npmClient)) {
        if (!isAbsolutePath(source) && /@\d/.test(source)) {
          throw new CodeFrameError(`${source} is not allowed to import.`, loc);
        }
      }
      if (!isAbsolutePath(source) && /\/\.umi(-(test|production))?\//.test(source)) {
        const { importSource } = api.appData.umi;
        throw new CodeFrameError(
          `${source} includes /.umi/, /.umi-test/ or /.umi-production/. It's not allowed to import. Please import from ${importSource} or the corresponding plugin.`,
          loc
        );
      }
    });
  });
  api.onCheckConfig(({ config }) => {
    if (config.publicPath.startsWith("./") && api.env === "development") {
      console.log(
        `
${import_utils.chalk.red(
          `\`publicPath\` does not support start with ${import_utils.chalk.bold.blue(
            "./"
          )} in development environment.`
        )}
  You should use :
    ${import_utils.chalk.green(
          `publicPath: process.env.NODE_ENV === 'production' ? './' : '/'`
        )}
`
      );
      throw new Error(
        `publicPath can not start with './' in development environment.`
      );
    }
  });
  api.onPrepareBuildSuccess(({ result }) => {
    var _a;
    const imps = Object.keys(((_a = result.metafile) == null ? void 0 : _a.inputs) || {}).filter(
      (f) => f.startsWith("mock/")
    );
    if (imps.length) {
      throw new Error(
        `Detected mock imports from src: ${imps.join(
          ", "
        )}. \`mock/**\` is not allowed to import.`
      );
    }
  });
  function isAbsolutePath(path) {
    return path.startsWith("/") || path.startsWith("@fs/") || /^[A-Za-z]:\//.test(path);
  }
};
