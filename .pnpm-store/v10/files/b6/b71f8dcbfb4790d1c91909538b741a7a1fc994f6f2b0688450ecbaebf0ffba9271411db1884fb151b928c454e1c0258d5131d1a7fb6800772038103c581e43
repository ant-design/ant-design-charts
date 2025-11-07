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

// src/commands/generators/precommit.ts
var precommit_exports = {};
__export(precommit_exports, {
  default: () => precommit_default
});
module.exports = __toCommonJS(precommit_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_utils2 = require("./utils");
var precommit_default = (api) => {
  api.describe({
    key: "generator:precommit"
  });
  api.registerGenerator({
    key: "precommit",
    name: "Generate Precommit",
    description: "Generate precommit boilerplate code",
    type: import_core.GeneratorType.generate,
    fn: async () => {
      const h = new import_utils2.GeneratorHelper(api);
      const cliName = api.appData.umi.cliName;
      h.addDevDeps({
        husky: "^9",
        prettier: "^2",
        typescript: "^5",
        "lint-staged": "^13"
      });
      h.addScript("prepare", "husky");
      if (!(0, import_fs.existsSync)((0, import_path.join)(api.cwd, ".lintstagedrc")) && !api.pkg["lint-staged"]) {
        (0, import_fs.writeFileSync)(
          (0, import_path.join)(api.cwd, ".lintstagedrc"),
          `
{
  "*.{md,json}": [
    "prettier --cache --write"
  ],
  "*.{js,jsx}": [
    "${cliName} lint --fix --eslint-only",
    "prettier --cache --write"
  ],
  "*.{css,less}": [
    "${cliName} lint --fix --stylelint-only",
    "prettier --cache --write"
  ],
  "*.ts?(x)": [
    "${cliName} lint --fix --eslint-only",
    "prettier --cache --parser=typescript --write"
  ]
}
`.trimStart()
        );
        import_utils.logger.info("Write .lintstagedrc");
      }
      if (!(0, import_fs.existsSync)((0, import_path.join)(api.cwd, ".husky"))) {
        (0, import_fs.mkdirSync)((0, import_path.join)(api.cwd, ".husky"));
        import_utils.logger.info("Create .husky");
      }
      if (!(0, import_fs.existsSync)((0, import_path.join)(api.cwd, ".husky/commit-msg"))) {
        (0, import_fs.writeFileSync)(
          (0, import_path.join)(api.cwd, ".husky/commit-msg"),
          `
npx --no-install ${cliName} verify-commit $1
`.trimStart()
        );
        import_utils.logger.info("Write commit-msg");
        if (process.platform !== "win32") {
          import_utils.execa.execaCommandSync("chmod +x .husky/commit-msg");
        }
      }
      if (!(0, import_fs.existsSync)((0, import_path.join)(api.cwd, ".husky/pre-commit"))) {
        (0, import_fs.writeFileSync)(
          (0, import_path.join)(api.cwd, ".husky/pre-commit"),
          `
npx --no-install lint-staged --quiet
`.trimStart()
        );
        import_utils.logger.info("Write pre-commit");
        if (process.platform !== "win32") {
          import_utils.execa.execaCommandSync("chmod +x .husky/pre-commit");
        }
      }
      h.installDeps();
    }
  });
};
