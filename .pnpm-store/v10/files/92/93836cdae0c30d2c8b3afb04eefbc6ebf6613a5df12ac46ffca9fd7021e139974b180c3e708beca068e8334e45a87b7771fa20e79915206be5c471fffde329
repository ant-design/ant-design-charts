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

// src/getASTByFilePath/getASTByFilePath.ts
var getASTByFilePath_exports = {};
__export(getASTByFilePath_exports, {
  getASTByFilePath: () => getASTByFilePath
});
module.exports = __toCommonJS(getASTByFilePath_exports);
var import_fs = require("fs");
var import_parse = require("../utils/parse");
function getASTByFilePath(filePath) {
  if ((0, import_fs.existsSync)(filePath)) {
    const code = (0, import_fs.readFileSync)(filePath, "utf-8");
    const ast = (0, import_parse.parse)(code);
    return ast;
  }
  console.warn(`${filePath} is not found`);
  return null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getASTByFilePath
});
