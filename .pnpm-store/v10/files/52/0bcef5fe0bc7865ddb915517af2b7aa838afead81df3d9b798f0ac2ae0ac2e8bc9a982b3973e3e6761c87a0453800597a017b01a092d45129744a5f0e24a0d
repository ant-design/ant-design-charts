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

// src/features/tmpFiles/getModuleExports.ts
var getModuleExports_exports = {};
__export(getModuleExports_exports, {
  getModuleExports: () => getModuleExports
});
module.exports = __toCommonJS(getModuleExports_exports);
var import_bundler_utils = require("@umijs/bundler-utils");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
async function getModuleExports(opts) {
  const { file } = opts;
  const content = (0, import_fs.readFileSync)(file, "utf-8");
  try {
    const [_, exports] = await (0, import_bundler_utils.parseModule)({ content, path: file });
    return exports || [];
  } catch (e) {
    console.log(
      `Parse file ${import_utils.chalk.red(
        file
      )} exports error, please check this file esm format.`
    );
    return [];
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getModuleExports
});
