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

// src/loaders/markdown/transformer/rehypeHighlightLine.ts
var rehypeHighlightLine_exports = {};
__export(rehypeHighlightLine_exports, {
  default: () => rehypeHighlightLine_default
});
module.exports = __toCommonJS(rehypeHighlightLine_exports);
var visit;
var isElement;
var RE = /{((?:\d+(?:-\d+)?,?)+)}/;
(async () => {
  ({ visit } = await import("unist-util-visit"));
  ({ isElement } = await import("hast-util-is-element"));
})();
var attrsToLines = (attrs) => {
  const result = [];
  attrs.split(",").map((v) => v.split("-").map((v2) => parseInt(v2, 10))).forEach(([start, end = start]) => {
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  });
  return result;
};
function rehypeHighlightLine() {
  return async (tree) => {
    visit(tree, "element", (node) => {
      var _a, _b;
      if (isElement(node, "code") && typeof ((_a = node.data) == null ? void 0 : _a.meta) === "string") {
        const lines = (_b = node.data.meta.match(RE)) == null ? void 0 : _b[1];
        if (lines) {
          node.data.meta = node.data.meta.replace(lines, "").trim();
          node.data.highlightLines = attrsToLines(lines);
        }
      }
    });
  };
}
var rehypeHighlightLine_default = rehypeHighlightLine;
