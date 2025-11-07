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

// src/loaders/markdown/transformer/rehypeText.ts
var rehypeText_exports = {};
__export(rehypeText_exports, {
  CONTENT_TEXTS_OBJ_NAME: () => CONTENT_TEXTS_OBJ_NAME,
  default: () => rehypeText
});
module.exports = __toCommonJS(rehypeText_exports);
var import_rehypeIsolation = require("./rehypeIsolation");
var import_rehypeSlug = require("./rehypeSlug");
var CONTENT_TEXTS_OBJ_NAME = "$$contentTexts";
var visit;
(async () => {
  ({ visitParents: visit } = await import("unist-util-visit-parents"));
})();
function findParagraphAncestor(ancestors) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const node = ancestors[i];
    if (node.type === "element" && (["p", "ul", "ol"].includes(node.tagName) || (0, import_rehypeIsolation.isReactComponent)(node)) || node.type === "root") {
      return node;
    }
  }
}
function findClosestTitle(ancestors, node) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const parent = ancestors[i];
    const current = ancestors[i + 1] || node;
    for (let i2 = parent.children.indexOf(current) - 1; i2 >= 0; i2--) {
      const child = parent.children[i2];
      if (child.type === "element" && import_rehypeSlug.HEADING_TAGS.includes(child.tagName)) {
        return child;
      }
    }
  }
}
function rehypeText() {
  return (tree, vFile) => {
    let textId = 0;
    let paraId = 0;
    vFile.data.texts = [];
    visit(tree, "text", (node, ancestors) => {
      var _a, _b, _c;
      const parent = ancestors[ancestors.length - 1];
      if (parent.type !== "element" || !import_rehypeSlug.HEADING_TAGS.includes(parent.tagName)) {
        const paraNode = findParagraphAncestor(ancestors);
        const titleNode = paraNode.type === "element" && findClosestTitle(ancestors, paraNode);
        let tocIndex = -1;
        if (titleNode) {
          tocIndex = vFile.data.toc.findIndex(
            ({ id }) => {
              var _a2;
              return id === ((_a2 = titleNode.properties) == null ? void 0 : _a2.id);
            }
          );
        }
        paraNode.data ?? (paraNode.data = {});
        (_a = paraNode.data).id ?? (_a.id = paraId++);
        node.data = {
          expression: {
            type: "MemberExpression",
            start: (_b = node.position) == null ? void 0 : _b.start,
            end: (_c = node.position) == null ? void 0 : _c.end,
            object: {
              type: "MemberExpression",
              computed: true,
              object: {
                type: "Identifier",
                name: CONTENT_TEXTS_OBJ_NAME
              },
              property: {
                type: "Literal",
                value: textId++
              }
            },
            property: {
              type: "Identifier",
              name: "value"
            }
          }
        };
        vFile.data.texts.push({
          value: node.value,
          paraId: paraNode.data.id,
          ...tocIndex > -1 ? { tocIndex } : {}
        });
      }
    });
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CONTENT_TEXTS_OBJ_NAME
});
