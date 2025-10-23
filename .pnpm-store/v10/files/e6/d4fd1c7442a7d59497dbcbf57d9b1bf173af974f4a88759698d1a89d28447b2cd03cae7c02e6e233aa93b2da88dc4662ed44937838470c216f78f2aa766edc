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

// src/commands/generators/prettier.ts
var prettier_exports = {};
__export(prettier_exports, {
  default: () => prettier_default
});
module.exports = __toCommonJS(prettier_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_utils2 = require("./utils");
var prettier_default = (api) => {
  api.describe({
    key: "generator:prettier"
  });
  api.registerGenerator({
    key: "prettier",
    name: "Enable Prettier",
    description: "Setup Prettier Configurations",
    type: import_core.GeneratorType.enable,
    checkEnable: () => {
      return !(0, import_fs.existsSync)((0, import_path.join)(api.cwd, ".prettierrc"));
    },
    disabledDescription: "prettier has been enabled; You can remove `.prettierrc` to run this again to re-setup.",
    fn: async () => {
      const h = new import_utils2.GeneratorHelper(api);
      h.addDevDeps({
        prettier: "^2.8.8",
        "prettier-plugin-organize-imports": "^3.2.2",
        "prettier-plugin-packagejson": "^2.4.3"
      });
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, ".prettierrc"),
        `
{
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "all",
  "proseWrap": "never",
  "overrides": [{ "files": ".prettierrc", "options": { "parser": "json" } }],
  "plugins": ["prettier-plugin-organize-imports", "prettier-plugin-packagejson"]
}
`.trimStart()
      );
      import_utils.logger.info("Write .prettierrc");
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, ".prettierignore"),
        `
node_modules
.umi
.umi-production
`.trimStart()
      );
      import_utils.logger.info("Write .prettierignore");
      h.installDeps();
    }
  });
};
