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

// src/loaders/markdown/transformer/remarkContainer.ts
var remarkContainer_exports = {};
__export(remarkContainer_exports, {
  default: () => remarkContainer
});
module.exports = __toCommonJS(remarkContainer_exports);
var import_rehypeDemo = require("./rehypeDemo");
var visit;
var SKIP;
var CONTINUE;
var VALID_CONTAINER_TYPES = ["info", "warning", "success", "error"];
var CODE_GROUP_SPECIFIER = "code-group";
(async () => {
  ({ visit, SKIP, CONTINUE } = await import("unist-util-visit"));
})();
var transformAttributes = (attributes) => Object.entries(attributes ?? {}).reduce(
  (ret, [name, value]) => `${ret} ${value ? `${name}="${value}"` : name}`,
  ""
);
function remarkContainer() {
  const data = this.data();
  const micromarkExtensions = data.micromarkExtensions.find(
    ({ flow, text }) => flow && "58" in flow && text && "58" in text
  );
  delete micromarkExtensions.text;
  micromarkExtensions.flow["58"].splice(1, 1);
  return (tree) => {
    visit(tree, (node, i, parent) => {
      if (node.type !== "containerDirective")
        return CONTINUE;
      if (VALID_CONTAINER_TYPES.includes(node.name)) {
        const attrs = transformAttributes(node.attributes);
        parent.children.splice(
          i,
          1,
          {
            type: "html",
            value: `<Container type="${node.name}"${attrs}>`,
            position: node.position
          },
          ...(node.children || []).concat({
            type: "html",
            value: "</Container>"
          })
        );
        return SKIP;
      }
      if (node.name === CODE_GROUP_SPECIFIER) {
        const codeChildren = node.children.filter(({ type }) => type === "code").map((child) => ({
          ...child,
          data: {
            ...child.data,
            //  dumi 默认会编译有关联技术栈的代码块, 标记为不需要编译
            [import_rehypeDemo.SKIP_DEMO_PARSE]: true
          }
        }));
        parent.children.splice(
          i,
          1,
          {
            type: "html",
            value: `<CodeGroup>`,
            position: node.position
          },
          ...codeChildren,
          {
            type: "html",
            value: "</CodeGroup>"
          }
        );
        return SKIP;
      }
    });
  };
}
