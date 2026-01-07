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

// src/loaders/markdown/transformer/rehypeImg.ts
var rehypeImg_exports = {};
__export(rehypeImg_exports, {
  default: () => rehypeImg
});
module.exports = __toCommonJS(rehypeImg_exports);
var import_path = __toESM(require("path"));
var visit;
(async () => {
  ({ visit } = await import("unist-util-visit"));
})();
function isRelativeUrl(url) {
  return !url.startsWith("data:image") && !/^((blob:)?\w+:)?\/\//.test(url) && !import_path.default.isAbsolute(url);
}
function rehypeImg() {
  return (tree) => {
    visit(tree, "element", (node) => {
      var _a;
      if (node.tagName === "img" && typeof ((_a = node.properties) == null ? void 0 : _a.src) === "string") {
        const src = node.properties.src.trim();
        if (src && isRelativeUrl(src)) {
          delete node.properties.src;
          node.JSXAttributes = [
            {
              type: "JSXAttribute",
              name: "src",
              value: `require('${decodeURI(src)}')`
            }
          ];
        }
      }
    });
  };
}
