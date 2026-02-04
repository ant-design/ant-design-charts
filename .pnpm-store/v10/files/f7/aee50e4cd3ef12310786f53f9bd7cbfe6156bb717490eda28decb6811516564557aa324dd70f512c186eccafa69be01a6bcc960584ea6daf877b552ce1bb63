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

// src/scripts.ts
var scripts_exports = {};
__export(scripts_exports, {
  normalizeScript: () => normalizeScript,
  normalizeScripts: () => normalizeScripts
});
module.exports = __toCommonJS(scripts_exports);
var import_assert = __toESM(require("assert"));
function normalizeScripts(scripts) {
  return scripts.map(normalizeScript);
}
var RE_URL = /^(http:|https:)?\/\//;
function normalizeScript(script) {
  if (typeof script === "string") {
    const isUrl = RE_URL.test(script) || script.startsWith("/") && !script.startsWith("/*") || script.startsWith("./") || script.startsWith("../");
    return isUrl ? {
      src: script
    } : { content: script };
  } else if (typeof script === "object") {
    (0, import_assert.default)(
      typeof script.src === "string" || typeof script.content === "string",
      `Script must have either a "src" or a "content" property.`
    );
    return script;
  } else {
    throw new Error(`Invalid script type: ${typeof script}`);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  normalizeScript,
  normalizeScripts
});
