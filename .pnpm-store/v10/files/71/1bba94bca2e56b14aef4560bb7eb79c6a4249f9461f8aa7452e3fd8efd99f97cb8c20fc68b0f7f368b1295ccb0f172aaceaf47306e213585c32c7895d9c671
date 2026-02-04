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

// src/node.ts
var node_exports = {};
__export(node_exports, {
  catchUnhandledRejection: () => catchUnhandledRejection,
  checkLocal: () => checkLocal,
  checkVersion: () => checkVersion,
  setNodeTitle: () => setNodeTitle
});
module.exports = __toCommonJS(node_exports);
var import__ = require("./");
var ver = parseInt(process.version.slice(1));
function checkVersion(minVersion, message) {
  if (ver < minVersion || ver === 15 || ver === 17 || ver === 19) {
    import__.logger.error(
      message || `Your node version ${ver} is not supported, please upgrade to ${minVersion} or above except 15 or 17.`
    );
    process.exit(1);
  }
}
function checkLocal() {
  if ((0, import__.isLocalDev)()) {
    import__.logger.info("@local");
  }
}
function setNodeTitle(name) {
  if (process.title === "node") {
    process.title = name;
  }
}
function catchUnhandledRejection() {
  if (ver <= 14) {
    process.on("unhandledRejection", (err) => {
      throw err;
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  catchUnhandledRejection,
  checkLocal,
  checkVersion,
  setNodeTitle
});
