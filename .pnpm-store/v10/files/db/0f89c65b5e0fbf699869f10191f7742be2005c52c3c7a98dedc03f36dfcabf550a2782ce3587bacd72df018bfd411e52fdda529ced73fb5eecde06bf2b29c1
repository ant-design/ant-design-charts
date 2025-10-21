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

// src/commands/config/set.ts
var set_exports = {};
__export(set_exports, {
  set: () => set
});
module.exports = __toCommonJS(set_exports);
var import_ast = require("@umijs/ast");
var import_fs = require("fs");
var import_path = require("path");
function set(api, name, value) {
  let { mainConfigFile } = api.appData;
  if (!mainConfigFile) {
    const absPath = (0, import_path.join)(api.cwd, ".umirc.ts");
    const content = `export default {};`;
    (0, import_fs.writeFileSync)(absPath, content, "utf-8");
    mainConfigFile = absPath;
    api.appData.mainConfigFile = absPath;
  }
  const ast = (0, import_ast.getASTByFilePath)(mainConfigFile);
  if (!ast)
    return;
  const generateCode = (0, import_ast.generate)((0, import_ast.setConfigByName)(ast, name, value));
  const prettier = require("@umijs/utils/compiled/prettier");
  const printStr = prettier.format(generateCode, {
    parser: "typescript"
  });
  (0, import_fs.writeFileSync)(mainConfigFile, printStr, "utf-8");
  console.log(`set config:${name} on ${mainConfigFile}`);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  set
});
