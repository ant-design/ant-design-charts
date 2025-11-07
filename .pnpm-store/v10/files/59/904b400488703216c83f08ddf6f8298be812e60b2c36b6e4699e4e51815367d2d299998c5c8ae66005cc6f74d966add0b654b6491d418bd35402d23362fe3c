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

// src/features/icons/extract.ts
var extract_exports = {};
__export(extract_exports, {
  extractIcons: () => extractIcons
});
module.exports = __toCommonJS(extract_exports);
function extractIcons(code) {
  const icons = /* @__PURE__ */ new Set();
  let current = 0;
  function isIconStart() {
    return code[current] === "<" && code[current + 1] === "I" && code[current + 2] === "c" && code[current + 3] === "o" && code[current + 4] === "n" && isEmptyChar(code[current + 5]);
  }
  let quotationMark = "";
  function isIconAttributeStart() {
    if (isEmptyChar(code[current]) && code[current + 1] === "i" && code[current + 2] === "c" && code[current + 3] === "o" && code[current + 4] === "n" && code[current + 5] === "=" && (code[current + 6] === "'" || code[current + 6] === '"')) {
      quotationMark = code[current + 6];
      return true;
    } else {
      return false;
    }
  }
  function isHoverAttributeStart() {
    if (isEmptyChar(code[current]) && code[current + 1] === "h" && code[current + 2] === "o" && code[current + 3] === "v" && code[current + 4] === "e" && code[current + 5] === "r" && code[current + 6] === "=" && (code[current + 7] === "'" || code[current + 7] === '"')) {
      quotationMark = code[current + 7];
      return true;
    } else {
      return false;
    }
  }
  function isEmptyChar(char) {
    return char === " " || char === "\n" || char === "\r";
  }
  function findAttributeValue() {
    let value = "";
    while (code[current] !== quotationMark && code[current] !== ">") {
      value += code[current];
      current += 1;
    }
    return value;
  }
  function finishJSXTag() {
    let icon = null;
    while (code[current] !== ">") {
      if (isIconAttributeStart()) {
        current += 7;
        icon = findAttributeValue();
        if (icon) {
          icons.add(icon);
        }
      } else if (isHoverAttributeStart()) {
        current += 8;
        icon = findAttributeValue();
        if (icon) {
          icons.add(icon);
        }
      } else {
        current += 1;
      }
    }
    if (code[current] === ">") {
      current += 1;
      return;
    }
  }
  while (current < code.length) {
    if (isIconStart()) {
      current += 5;
      finishJSXTag();
    } else {
      current += 1;
    }
  }
  return Array.from(icons);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extractIcons
});
