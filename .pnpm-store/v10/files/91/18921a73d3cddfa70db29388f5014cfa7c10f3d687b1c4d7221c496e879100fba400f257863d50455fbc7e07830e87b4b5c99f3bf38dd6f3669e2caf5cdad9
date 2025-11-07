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

// src/styles.ts
var styles_exports = {};
__export(styles_exports, {
  normalizeStyle: () => normalizeStyle,
  normalizeStyles: () => normalizeStyles
});
module.exports = __toCommonJS(styles_exports);
var import_assert = __toESM(require("assert"));
function normalizeStyles(scripts) {
  return scripts.map(normalizeStyle);
}
var RE_URL = /^(http:|https:)?\/\//;
function normalizeStyle(style) {
  if (typeof style === "string") {
    const isUrl = RE_URL.test(style) || style.startsWith("/") && !style.startsWith("/*") || style.startsWith("./") || style.startsWith("../");
    return isUrl ? {
      src: style
    } : { content: style };
  } else if (typeof style === "object") {
    (0, import_assert.default)(
      typeof style.src === "string" || typeof style.content === "string",
      `Style must have either a "src" or a "content" property.`
    );
    return style;
  } else {
    throw new Error(`Invalid style type: ${typeof style}`);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  normalizeStyle,
  normalizeStyles
});
