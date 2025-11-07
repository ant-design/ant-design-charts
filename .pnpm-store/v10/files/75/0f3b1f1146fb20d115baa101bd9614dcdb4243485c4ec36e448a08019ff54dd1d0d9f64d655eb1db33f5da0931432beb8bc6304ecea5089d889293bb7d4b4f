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

// src/commands/config/config.ts
var config_exports = {};
__export(config_exports, {
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_list = require("./list");
var import_remove = require("./remove");
var import_set = require("./set");
var config_default = (api) => {
  api.registerCommand({
    name: "config",
    description: "umi config cli",
    details: `
# umi configs
$ umi config [type] [name] [value]

# List configs
$ umi config list

# Get the specific config
$ umi config list --name history
$ umi config get history

# Set the specific config (only local config) [beta]
$ umi config set history "{type:'hash'}"

# Remove the specific config (only local config) [beta]
$ umi config remove history
$ umi config r history
    `.trim(),
    configResolveMode: "loose",
    async fn({ args }) {
      const { _, all = false } = args;
      const [command, name, value] = _;
      switch (command) {
        case "list":
          (0, import_list.list)(all ? api.config : api.userConfig, args.name || "");
          break;
        case "get":
          (0, import_list.list)(api.config, name);
          break;
        case "set":
          (0, import_set.set)(api, name, value);
          break;
        case "remove":
        case "r":
          (0, import_remove.remove)(api.appData.mainConfigFile, name);
          break;
        default:
          throw new Error(`Unsupported sub command ${command} for umi config.`);
      }
    }
  });
};
