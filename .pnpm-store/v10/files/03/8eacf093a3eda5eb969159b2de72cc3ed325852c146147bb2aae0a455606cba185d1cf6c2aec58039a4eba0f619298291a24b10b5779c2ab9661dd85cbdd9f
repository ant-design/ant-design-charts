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

// src/commands/plugin.ts
var plugin_exports = {};
__export(plugin_exports, {
  default: () => plugin_default
});
module.exports = __toCommonJS(plugin_exports);
var import_utils = require("@umijs/utils");
var plugin_default = (api) => {
  api.describe({
    key: "command:plugin"
  });
  api.registerCommand({
    name: "plugin",
    description: "inspect umi plugins",
    fn({ args }) {
      const command = args._[0];
      if (!command) {
        throw new Error(`
Sub command not found: umi plugin
Did you mean:
  umi plugin list
        `);
      }
      switch (command) {
        case "list":
          getPluginList();
          break;
        default:
          throw new Error(`Unsupported sub command ${command} for umi plugin.`);
      }
      function getPluginList() {
        const localPlugins = ["./plugin.ts", "./plugin.js"];
        Object.keys(api.service.plugins).forEach((pluginId) => {
          const plugin = api.service.plugins[pluginId];
          if (localPlugins.includes(plugin.id))
            return console.info(
              `- ${plugin.id} ${import_utils.chalk.greenBright("(from local)")}`
            );
          if (plugin.id.startsWith("@umijs/preset"))
            return console.info(
              `- ${plugin.id} ${import_utils.chalk.cyanBright("(from preset)")}`
            );
          console.info(`- ${plugin.id}`);
        });
      }
    }
  });
};
