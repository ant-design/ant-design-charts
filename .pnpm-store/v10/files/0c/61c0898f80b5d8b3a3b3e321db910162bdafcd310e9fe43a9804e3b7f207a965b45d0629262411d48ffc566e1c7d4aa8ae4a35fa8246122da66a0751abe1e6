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

// src/plugins/deleteOutputFiles.ts
var deleteOutputFiles_exports = {};
__export(deleteOutputFiles_exports, {
  default: () => deleteOutputFiles
});
module.exports = __toCommonJS(deleteOutputFiles_exports);
var import_utils = require("@umijs/utils");
function deleteOutputFiles(files, beforeDelete) {
  return {
    name: "bundler-vite:delete-output-files",
    generateBundle(_, output) {
      Object.keys(output).forEach((name) => {
        files = files.map((file) => (0, import_utils.winPath)(file));
        if (files.includes(output[name].fileName)) {
          beforeDelete(output[name]);
          delete output[name];
        }
      });
    }
  };
}
