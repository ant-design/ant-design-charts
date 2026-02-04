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

// src/commands/generators/tsconfig.ts
var tsconfig_exports = {};
__export(tsconfig_exports, {
  default: () => tsconfig_default
});
module.exports = __toCommonJS(tsconfig_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_utils2 = require("./utils");
var tsconfig_default = (api) => {
  api.describe({
    key: "generator:tsconfig"
  });
  api.registerGenerator({
    key: "tsconfig",
    name: "Enable Typescript",
    description: "Setup tsconfig.json",
    type: import_core.GeneratorType.enable,
    checkEnable: () => {
      return !(0, import_fs.existsSync)((0, import_path.join)(api.paths.cwd, "tsconfig.json"));
    },
    disabledDescription: "tsconfig has been enabled; you can remove tsconfig.json then run this again to re-setup",
    fn: async () => {
      const h = new import_utils2.GeneratorHelper(api);
      const reactVersion = api.appData.react.version;
      const reactDomVersion = api.appData["react-dom"].version;
      if (import_utils.semver.neq(reactVersion, reactDomVersion)) {
        import_utils.logger.warn(
          `The react version ${reactVersion} is not equal to the react-dom version ${reactDomVersion}, please check.`
        );
      }
      const reactMajorVersion = parseInt(reactVersion.split(".")[0], 10) || 18;
      h.addDevDeps({
        typescript: "^5",
        "@types/react": `^${reactMajorVersion}`,
        "@types/react-dom": `^${reactMajorVersion}`
      });
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, "tsconfig.json"),
        `
{
  "extends": "./${api.appData.hasSrcDir ? "src/" : ""}.umi/tsconfig.json"
}
`.trimStart()
      );
      import_utils.logger.info("Write tsconfig.json");
      const importSource = api.appData.umi.importSource;
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, "typings.d.ts"),
        `import '${importSource}/typings';`.trimStart()
      );
      import_utils.logger.info("Write typings.d.ts");
      h.installDeps();
    }
  });
};
