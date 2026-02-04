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

// src/commands/help.ts
var help_exports = {};
__export(help_exports, {
  default: () => help_default
});
module.exports = __toCommonJS(help_exports);
var import_utils = require("@umijs/utils");
var help_default = (api) => {
  api.registerCommand({
    name: "help",
    description: "show commands help",
    details: `
umi help build
umi help dev
`,
    configResolveMode: "loose",
    fn() {
      const subCommand = api.args._[0];
      if (subCommand) {
        if (subCommand in api.service.commands) {
          showHelp(api.service.commands[subCommand]);
        } else {
          import_utils.logger.error(`Invalid sub command ${subCommand}.`);
        }
      } else {
        showHelps(api.service.commands);
      }
    }
  });
  function showHelp(command) {
    console.log(`
Usage: umi ${command.name} [options]
${command.description ? `${import_utils.chalk.gray(command.description)}.
` : ""}
${command.options ? `Options:
${padLeft(command.options)}
` : ""}
${command.details ? `Details:
${padLeft(command.details)}` : ""}
`);
  }
  function showHelps(commands) {
    console.log(`
Usage: umi <command> [options]

Commands:

${getDeps(commands)}
`);
    console.log(
      `Run \`${import_utils.chalk.bold(
        "umi help <command>"
      )}\` for more information of specific commands.`
    );
    console.log(
      `Visit ${import_utils.chalk.bold("https://umijs.org/")} to learn more about Umi.`
    );
    console.log();
  }
  function getDeps(commands) {
    return Object.keys(commands).map((key) => {
      return `    ${import_utils.chalk.green(import_utils.lodash.padEnd(key, 10))}${commands[key].description || ""}`;
    }).join("\n");
  }
  function padLeft(str) {
    return str.trim().split("\n").map((line) => `    ${line}`).join("\n");
  }
};
