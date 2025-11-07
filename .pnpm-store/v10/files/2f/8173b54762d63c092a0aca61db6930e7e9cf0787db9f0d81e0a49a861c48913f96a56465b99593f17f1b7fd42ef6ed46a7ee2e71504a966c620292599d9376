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

// src/features/hmrGuardian/hmrGuardian.ts
var hmrGuardian_exports = {};
__export(hmrGuardian_exports, {
  default: () => hmrGuardian_default
});
module.exports = __toCommonJS(hmrGuardian_exports);
var import_babelPlugin = require("./babelPlugin");
function hmrGuardian_default(api) {
  api.describe({
    key: "hmrGuardian",
    config: {
      schema: ({ zod }) => zod.boolean()
    },
    enableBy: ({ env }) => {
      if (env === "production" || process.env.HMR === "none" || process.env.IS_UMI_BUILD_WORKER) {
        return false;
      }
      return api.config.hmrGuardian;
    }
  });
  api.onCheckConfig(({ userConfig }) => {
    var _a;
    (_a = userConfig.headScripts) == null ? void 0 : _a.some((script) => {
      const url = typeof script === "string" ? script : script.src;
      if (url == null ? void 0 : url.includes("react.production")) {
        api.logger.warn(
          "Using react/react-dom production scripts, HMR will not work."
        );
        api.logger.warn(
          "Use ternary expression to use development scripts in dev environment"
        );
      }
    });
  });
  api.addBeforeBabelPlugins(() => {
    return [(0, import_babelPlugin.defaultRenameVisitor)()];
  });
}
