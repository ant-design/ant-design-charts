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

// src/cli/cli.ts
var cli_exports = {};
__export(cli_exports, {
  run: () => run
});
module.exports = __toCommonJS(cli_exports);
var import_utils = require("@umijs/utils");
var import_constants = require("../constants");
var import_service = require("../service/service");
var import_dev = require("./dev");
(0, import_utils.catchUnhandledRejection)();
async function run(opts) {
  (0, import_utils.checkVersion)(import_constants.MIN_NODE_VERSION);
  (0, import_utils.checkLocal)();
  (0, import_utils.setNodeTitle)(import_constants.FRAMEWORK_NAME);
  (0, import_utils.setNoDeprecation)();
  const args = (0, import_utils.yParser)(process.argv.slice(2), {
    alias: {
      version: ["v"],
      help: ["h"]
    },
    boolean: ["version"]
  });
  const command = args._[0];
  const FEATURE_COMMANDS = ["mfsu", "setup", "deadcode"];
  if ([import_constants.DEV_COMMAND, ...FEATURE_COMMANDS].includes(command)) {
    process.env.NODE_ENV = "development";
  } else if (command === "build") {
    process.env.NODE_ENV = "production";
  }
  if (opts == null ? void 0 : opts.presets) {
    process.env[`${import_constants.FRAMEWORK_NAME}_PRESETS`.toUpperCase()] = opts.presets.join(",");
  }
  if (command === import_constants.DEV_COMMAND) {
    (0, import_dev.dev)();
  } else {
    try {
      await new import_service.Service().run2({
        name: args._[0],
        args
      });
    } catch (e) {
      import_utils.logger.fatal(e);
      import_utils.printHelp.exit();
      process.exit(1);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  run
});
