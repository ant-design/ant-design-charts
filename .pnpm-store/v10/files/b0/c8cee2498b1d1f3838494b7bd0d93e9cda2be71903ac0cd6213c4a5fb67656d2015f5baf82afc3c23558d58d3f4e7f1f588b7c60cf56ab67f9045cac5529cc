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

// src/loaders/markdown/transformer/rehypeEnhancedTag.ts
var rehypeEnhancedTag_exports = {};
__export(rehypeEnhancedTag_exports, {
  default: () => rehypeEnhancedTag
});
module.exports = __toCommonJS(rehypeEnhancedTag_exports);
var visit;
var isElement;
var toString;
(async () => {
  ({ visit } = await import("unist-util-visit"));
  ({ isElement } = await import("hast-util-is-element"));
  ({ toString } = await import("hast-util-to-string"));
})();
var rawMetaRE = /\[(.+)\]/;
function rehypeCodeMeta(meta) {
  if (typeof meta !== "string")
    return {};
  const [title] = (rawMetaRE.exec(meta.trim()) || []).slice(1);
  return { title };
}
function rehypeEnhancedTag() {
  return async (tree) => {
    visit(tree, "element", (node, i, parent) => {
      var _a, _b, _c, _d, _e;
      if (node.tagName === "pre" && isElement((_a = node.children) == null ? void 0 : _a[0]) && node.children[0].tagName === "code") {
        const className = ((_b = node.children[0].properties) == null ? void 0 : _b.className) || [];
        const lang = (_c = className.join("").match(/language-(\w+)(?:$| )/)) == null ? void 0 : _c[1];
        const highlightLines = (_d = node.children[0].data) == null ? void 0 : _d.highlightLines;
        parent.children.splice(i, 1, {
          type: "element",
          tagName: "SourceCode",
          properties: {
            ...rehypeCodeMeta((_e = node.children[0].data) == null ? void 0 : _e.meta),
            lang
          },
          data: node.children[0].data,
          JSXAttributes: [
            {
              type: "JSXAttribute",
              name: "highlightLines",
              value: JSON.stringify(highlightLines)
            }
          ],
          children: [
            {
              type: "text",
              value: toString(node.children[0])
            }
          ]
        });
      } else if (node.tagName === "table") {
        node.tagName = "Table";
      } else if (node.tagName === "style") {
        node.JSXAttributes = [
          {
            type: "JSXAttribute",
            name: "dangerouslySetInnerHTML",
            value: JSON.stringify({
              __html: toString(node)
            })
          }
        ];
        node.children = [];
      }
    });
  };
}
