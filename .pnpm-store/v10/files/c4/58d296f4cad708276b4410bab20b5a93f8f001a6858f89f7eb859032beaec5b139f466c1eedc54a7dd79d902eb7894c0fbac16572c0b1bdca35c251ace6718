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

// src/commands/mfsu/mfsu.ts
var mfsu_exports = {};
__export(mfsu_exports, {
  default: () => mfsu_default
});
module.exports = __toCommonJS(mfsu_exports);
var import_utils = require("@umijs/utils");
var utils = (0, import_utils.importLazy)(require.resolve("./util"));
var HELP_TEXT = `
# MFSU CLI util
# umi mfsu [action]

# Show Help
$ umi mfsu

# Manually build mfsu dependencies
$ umi mfsu build
$ umi mfsu b

# list mfsu dependencies
$ umi mfsu list
$ umi mfsu ls

# remove mfsu dependencies
$ umi mfsu remove
$ umi mfsu remove --all
`.trim();
var mfsu_default = (api) => {
  api.describe({
    key: "mfsu-cli"
  });
  api.registerCommand({
    name: "mfsu",
    description: "mfsu CLI util",
    details: HELP_TEXT,
    configResolveMode: "strict",
    async fn({ args }) {
      var _a;
      const { _ } = args;
      const [command = "help"] = _;
      if (api.config.mfsu === false) {
        api.logger.info("MFSU is not enabled");
        return;
      }
      const { EagerUtil, NormalUtil } = utils;
      const util = ((_a = api.config.mfsu) == null ? void 0 : _a.strategy) === "eager" ? new EagerUtil(api) : new NormalUtil(api);
      switch (command) {
        case "build":
        case "b":
          try {
            const { force } = args;
            util.removeCacheJSON();
            await util.build(force);
            process.exit(0);
          } catch (e) {
            process.exit(-1);
          }
          break;
        case "list":
        case "ls":
        case "l":
          util.listDeps();
          break;
        case "remove":
          const { all } = args;
          if (all) {
            util.clearAllCache();
          } else {
            util.removeCacheJSON();
          }
          break;
        case "help":
          printHelpInfo(api);
          break;
        default:
          throw new Error(`Unsupported mfsu action`);
      }
    }
  });
};
function printHelpInfo(api) {
  console.log(HELP_TEXT.replace(/umi/g, api.appData.umi.cliName));
}
