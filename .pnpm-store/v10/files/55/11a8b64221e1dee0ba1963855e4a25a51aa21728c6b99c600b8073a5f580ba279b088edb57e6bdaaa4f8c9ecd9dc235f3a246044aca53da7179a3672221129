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

// src/loaders/markdown/transformer/rehypeIsolation.ts
var rehypeIsolation_exports = {};
__export(rehypeIsolation_exports, {
  default: () => rehypeIsolation,
  isReactComponent: () => isReactComponent
});
module.exports = __toCommonJS(rehypeIsolation_exports);
var visit;
(async () => {
  ({ visit } = await import("unist-util-visit"));
})();
function isDemoNode(node) {
  return ["DumiDemo", "DumiDemoGrid"].includes(node.tagName);
}
function isReactComponent(node) {
  return /^[A-Z].+/.test(node.tagName);
}
function rehypeIsolation() {
  return (tree) => {
    visit(tree, "root", (node) => {
      node.children = node.children.reduce(
        (nextChildren, current) => {
          var _a, _b;
          let prevSibling = nextChildren[nextChildren.length - 1];
          if (isDemoNode(current)) {
            nextChildren.push(current);
          } else if (
            // <p><Test></Test></p> or <Test></Test>
            current.tagName === "p" && ((_a = current.children) == null ? void 0 : _a.length) === 1 && isReactComponent(current.children[0]) || isReactComponent(current)
          ) {
            nextChildren.push(
              current.tagName === "p" ? (_b = current.children) == null ? void 0 : _b[0] : current
            );
          } else {
            if (!prevSibling || isDemoNode(prevSibling) || isReactComponent(prevSibling)) {
              prevSibling = {
                type: "element",
                tagName: "div",
                properties: { className: ["markdown"] },
                children: []
              };
              nextChildren.push(prevSibling);
            }
            prevSibling.children.push(current);
          }
          return nextChildren;
        },
        []
      );
    });
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isReactComponent
});
