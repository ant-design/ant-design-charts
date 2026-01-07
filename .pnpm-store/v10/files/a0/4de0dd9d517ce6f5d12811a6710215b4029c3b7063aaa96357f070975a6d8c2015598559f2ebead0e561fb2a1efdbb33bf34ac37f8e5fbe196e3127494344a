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

// src/service/cwd.ts
var cwd_exports = {};
__export(cwd_exports, {
  getCwd: () => getCwd
});
module.exports = __toCommonJS(cwd_exports);
var import_path = require("path");
function getCwd() {
  const cwd = process.cwd();
  const appRoot = process.env.APP_ROOT;
  if (appRoot) {
    return (0, import_path.isAbsolute)(appRoot) ? appRoot : (0, import_path.join)(cwd, appRoot);
  }
  return cwd;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCwd
});
