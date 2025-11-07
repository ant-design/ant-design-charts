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

// src/features/aiDev/aiDev.ts
var aiDev_exports = {};
__export(aiDev_exports, {
  default: () => aiDev_default
});
module.exports = __toCommonJS(aiDev_exports);
var import_utils = require("@umijs/utils");
var import_child_process = require("child_process");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
function checkBinExists(binName) {
  try {
    const command = process.platform === "win32" ? `where ${binName}` : `which ${binName}`;
    (0, import_child_process.execSync)(command, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}
var aiDev_default = (api) => {
  api.describe({
    key: "aiDev"
  });
  api.onDevCompileDone((args) => {
    var _a, _b;
    if (api.config.mako || api.config.utoopack) {
      return;
    }
    if (!process.env.UMI_AI_COMMAND || !process.env.UMI_AI_PACKAGE) return;
    try {
      const aiCommand = process.env.UMI_AI_COMMAND;
      const aiPackage = process.env.UMI_AI_PACKAGE;
      const aiCommandExists = checkBinExists(aiCommand);
      const npmClient = api.appData.npmClient;
      const hasErrors = ((_b = (_a = args.stats) == null ? void 0 : _a.hasErrors) == null ? void 0 : _b.call(_a)) || false;
      if (hasErrors) {
        const errorStats = args.stats.toString();
        const errorFilePath = import_path.default.join(api.paths.absTmpPath, "devError.txt");
        const relativeErrorFilePath = (0, import_utils.winPath)(
          import_path.default.relative(api.paths.cwd, errorFilePath)
        );
        const prefix = aiCommandExists ? "" : `${npmClient} install -g ${aiPackage} && `;
        try {
          import_fs.default.writeFileSync(errorFilePath, errorStats);
          console.log();
          console.log(import_utils.chalk.red("🤖 AI Dev: Compilation errors detected!"));
          console.log(`Error details saved to: ${errorFilePath}`);
        } catch (err) {
          console.log();
          console.log(import_utils.chalk.red("🤖 AI Dev: Compilation errors detected!"));
          console.log(import_utils.chalk.yellow("⚠️  Could not save error details"));
        }
        console.log(
          import_utils.chalk.yellow(
            `💡 Suggestion: Run \`${prefix}${aiCommand} "fix error in ${relativeErrorFilePath}"\` to get AI assistance`
          )
        );
        console.log();
      }
    } catch (err) {
      console.log(`[AI Dev] Error: ${err}`);
    }
  });
};
