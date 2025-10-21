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

// src/commands/config/remove.ts
var remove_exports = {};
__export(remove_exports, {
  remove: () => remove
});
module.exports = __toCommonJS(remove_exports);
var import_ast = require("@umijs/ast");
var import_fs = require("fs");
function remove(mainConfigFile, name) {
  const ast = (0, import_ast.getASTByFilePath)(mainConfigFile);
  if (!ast)
    return;
  const generateCode = (0, import_ast.generate)((0, import_ast.removeConfigByName)(ast, name));
  const prettier = require("@umijs/utils/compiled/prettier");
  const printStr = prettier.format(generateCode, {
    parser: "typescript"
  });
  (0, import_fs.writeFileSync)(mainConfigFile, printStr, "utf-8");
  console.log(`remove config:${name} on ${mainConfigFile}`);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  remove
});
