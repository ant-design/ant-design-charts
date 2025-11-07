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

// src/commands/generators/cypress.ts
var cypress_exports = {};
__export(cypress_exports, {
  default: () => cypress_default
});
module.exports = __toCommonJS(cypress_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_constants = require("../../constants");
var import_utils2 = require("./utils");
var cypress_default = (api) => {
  api.describe({
    key: "generator:cypress"
  });
  api.registerGenerator({
    key: "cypress",
    name: "Enable E2E Testing with Cypress",
    description: "Setup Cypress Configuration",
    type: import_core.GeneratorType.enable,
    checkEnable: () => {
      return !(0, import_fs.existsSync)((0, import_path.join)(api.paths.cwd, "cypress.config.ts"));
    },
    disabledDescription: "cypress has already enabled. You can remove cypress.config.ts, then run this again to re-setup.",
    fn: async () => {
      const h = new import_utils2.GeneratorHelper(api);
      const basicDeps = {
        cypress: "^10.0.0",
        "start-server-and-test": "^1.0.0"
      };
      h.addDevDeps(basicDeps);
      h.addScripts({
        e2e: "cypress run",
        "e2e:ci": "start-server-and-test preview http://127.0.0.1:9572  e2e"
      });
      h.appendGitIgnore(["/cypress/screenshots", "/cypress/videos"]);
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, "cypress.config.ts"),
        `
import { defineConfig } from "cypress";

const PORT = process.env.PORT || "8000";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: \`http://localhost:\${PORT}\`,
  },
});
`.trim()
      );
      import_utils.logger.info("Write cypress.config.ts");
      await (0, import_utils.generateFile)({
        target: (0, import_path.join)(api.paths.cwd, "cypress"),
        path: CYPRESS_TPL_FOLDER,
        baseDir: api.paths.cwd,
        data: {}
      });
      h.installDeps();
    }
  });
};
var CYPRESS_TPL_FOLDER = (0, import_path.join)(import_constants.TEMPLATES_DIR, "generate/cypress");
