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

// src/utils/projectFileList.ts
var projectFileList_exports = {};
__export(projectFileList_exports, {
  getProjectFileList: () => getProjectFileList
});
module.exports = __toCommonJS(projectFileList_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
function getProjectFileList(api) {
  const result = api.appData.prepare.buildResult;
  const srcPath = (0, import_utils.winPath)((0, import_path.normalize)(api.paths.absSrcPath));
  return Object.keys(result.metafile.inputs).map((f) => (0, import_utils.winPath)((0, import_path.resolve)(api.paths.cwd, f))).filter((f) => f.startsWith(srcPath));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProjectFileList
});
