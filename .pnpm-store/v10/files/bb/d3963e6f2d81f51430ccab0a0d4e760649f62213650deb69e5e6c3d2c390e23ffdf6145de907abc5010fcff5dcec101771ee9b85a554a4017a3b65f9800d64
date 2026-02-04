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

// src/loaders/markdown/transformer/rehypeJsxify.ts
var rehypeJsxify_exports = {};
__export(rehypeJsxify_exports, {
  default: () => rehypeJsxify
});
module.exports = __toCommonJS(rehypeJsxify_exports);
var parser = __toESM(require("@umijs/bundler-utils/compiled/babel/parser"));
var visitUnist;
var visitEstree;
var toEstree;
var toJs;
var jsx;
var JSX_PROP_PREFIX = "$jsx-prop-";
var JSX_SPREAD_PROP_PREFIX = "$jsx-spread-prop-";
(async () => {
  ({ visit: visitUnist } = await import("unist-util-visit"));
  ({ visit: visitEstree } = await import("estree-util-visit"));
  ({ toEstree } = await import("hast-util-to-estree"));
  ({ toJs, jsx } = await import("estree-util-to-js"));
})();
function getJSXAttrAST(node) {
  const tmpCode = `<a ${node.type === "JSXAttribute" ? `${node.name}={${node.value}}` : `{...${node.argument}}`} />`;
  const ast = parser.parseExpression(tmpCode, {
    plugins: ["jsx", "estree"]
  });
  return ast.openingElement.attributes[0];
}
function rehypeJsxify() {
  this.Compiler = function Compiler(ast) {
    visitUnist(ast, "element", (node) => {
      var _a;
      (_a = node.JSXAttributes) == null ? void 0 : _a.forEach((attr, i) => {
        node.properties ?? (node.properties = {});
        if (attr.type === "JSXAttribute") {
          node.properties[`${JSX_PROP_PREFIX}${attr.name}`] = attr.value;
        } else if (attr.type === "JSXSpreadAttribute") {
          node.properties[`${JSX_SPREAD_PROP_PREFIX}${i}`] = attr.argument;
        }
      });
    });
    const esTree = toEstree(ast, {
      handlers: {
        text: function text(node) {
          var _a;
          const value = String(node.value || "");
          if (!value)
            return null;
          return {
            type: "JSXExpressionContainer",
            expression: ((_a = node.data) == null ? void 0 : _a.expression) || {
              type: "Literal",
              value
            }
          };
        }
      }
    });
    visitEstree(esTree, (node) => {
      var _a, _b;
      const isStubJSXAttr = node.type === "JSXAttribute" && "name" in node && String(node.name.name).startsWith(JSX_PROP_PREFIX);
      const isStubJSXSpreadAttr = node.type === "JSXAttribute" && "name" in node && String(node.name.name).startsWith(JSX_SPREAD_PROP_PREFIX);
      if (isStubJSXAttr && ((_a = node.value) == null ? void 0 : _a.type) === "Literal") {
        const name = String(node.name.name).slice(JSX_PROP_PREFIX.length);
        const ast2 = getJSXAttrAST({
          type: "JSXAttribute",
          name,
          value: String(node.value.value)
        });
        node.type = ast2.type;
        node.name = ast2.name;
        node.value = ast2.value;
      } else if (isStubJSXSpreadAttr && ((_b = node.value) == null ? void 0 : _b.type) === "Literal") {
        const ast2 = getJSXAttrAST({
          type: "JSXSpreadAttribute",
          argument: String(node.value.value)
        });
        const copy = node;
        copy.type = ast2.type;
        copy.argument = ast2.argument;
        delete copy.name;
        delete copy.value;
      }
    });
    return toJs(esTree, { handlers: jsx }).value.trim().slice(0, -1);
  };
}
