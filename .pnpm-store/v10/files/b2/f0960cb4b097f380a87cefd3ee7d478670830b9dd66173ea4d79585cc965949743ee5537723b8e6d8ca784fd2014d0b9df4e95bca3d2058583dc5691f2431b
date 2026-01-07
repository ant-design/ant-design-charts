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

// src/commands/setup.ts
var setup_exports = {};
__export(setup_exports, {
  default: () => setup_default
});
module.exports = __toCommonJS(setup_exports);
var import_utils = require("@umijs/utils");
var setup_default = (api) => {
  api.registerCommand({
    name: "setup",
    description: "setup project",
    async fn() {
      import_utils.rimraf.sync(api.paths.absTmpPath);
      import_utils.logger.info("generate files");
      await api.applyPlugins({
        key: "onGenerateFiles",
        args: {
          files: null,
          isFirstTime: true
        }
      });
    }
  });
};
