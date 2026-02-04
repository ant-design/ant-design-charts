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

// src/features/forget/forget.ts
var forget_exports = {};
__export(forget_exports, {
  default: () => forget_default
});
module.exports = __toCommonJS(forget_exports);
var import_path = require("path");
var import_resolveProjectDep = require("../../utils/resolveProjectDep");
var forget_default = (api) => {
  api.describe({
    key: "forget",
    config: {
      schema({ zod }) {
        return zod.object({
          ReactCompilerConfig: zod.object({}).optional()
        });
      }
    },
    enableBy: api.EnableBy.config
  });
  api.onCheckConfig(() => {
    if (api.config.mfsu) {
      throw new Error(
        `forget is not compatible with mfsu, please disable mfsu first.`
      );
    }
    if (api.config.mako) {
      throw new Error(
        `forget is not compatible with mako, please disable mako first.`
      );
    }
    if (api.config.utoopack) {
      throw new Error(
        `forget is not compatible with utoopack, please disable utoopack first.`
      );
    }
  });
  api.onCheck(() => {
    let reactMajorVersion = api.appData.react.version.split(".")[0];
    if (reactMajorVersion < 19) {
      throw new Error(
        `forget is only compatible with React 19 and above, please upgrade your React version.`
      );
    }
  });
  const BABEL_PLUGIN_NAME = `babel-plugin-react-compiler`;
  let libPath;
  try {
    libPath = (0, import_resolveProjectDep.resolveProjectDep)({
      pkg: api.pkg,
      cwd: api.cwd,
      dep: BABEL_PLUGIN_NAME
    }) || (0, import_path.dirname)(require.resolve(`${BABEL_PLUGIN_NAME}/package.json`));
  } catch (e) {
  }
  api.modifyConfig((memo) => {
    let ReactCompilerConfig = api.userConfig.forget.ReactCompilerConfig || {};
    return {
      ...memo,
      extraBabelPlugins: [
        ...memo.extraBabelPlugins || [],
        [libPath, ReactCompilerConfig]
      ]
    };
  });
};
