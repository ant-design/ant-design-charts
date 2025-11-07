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

// src/service/cli.ts
var cli_exports = {};
__export(cli_exports, {
  run: () => run
});
module.exports = __toCommonJS(cli_exports);
var import_node = require("@umijs/utils/dist/node");
var import_plugin_utils = require("umi/plugin-utils");
var import_constants = require("./constants");
var import_dev = require("./dev");
var import_printHelp = require("./printHelp");
var import_service = require("./service");
(0, import_node.catchUnhandledRejection)();
async function run(opts) {
  (0, import_node.checkVersion)(import_constants.MIN_NODE_VERSION);
  (0, import_node.setNodeTitle)(import_constants.FRAMEWORK_NAME);
  (0, import_plugin_utils.setNoDeprecation)();
  const args = (0, import_plugin_utils.yParser)(process.argv.slice(2), {
    alias: {
      version: ["v"],
      help: ["h"]
    },
    boolean: ["version"]
  });
  const command = args._[0];
  if ([import_constants.DEV_COMMAND, "setup"].includes(command)) {
    process.env.NODE_ENV = "development";
  } else if (command === "build") {
    process.env.NODE_ENV = "production";
  }
  if (opts == null ? void 0 : opts.presets) {
    process.env.DUMI_PRESETS = opts.presets.join(",");
  }
  process.env.DID_YOU_KNOW = "none";
  if (command === import_constants.DEV_COMMAND) {
    (0, import_dev.dev)();
  } else {
    try {
      await new import_service.DumiService().run2({
        name: args._[0],
        args
      });
    } catch (e) {
      import_plugin_utils.logger.fatal(e);
      (0, import_printHelp.printHelp)();
      process.exit(1);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  run
});
