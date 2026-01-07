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

// src/loaders/markdown/transformer/rehypeRaw.ts
var rehypeRaw_exports = {};
__export(rehypeRaw_exports, {
  default: () => rehypeRaw
});
module.exports = __toCommonJS(rehypeRaw_exports);
var import_plugin_utils = require("umi/plugin-utils");
var raw;
var visit;
var COMPONENT_NAME_REGEX = /(<)([A-Z][a-zA-Z\d]*)([\s|>])/g;
var COMPONENT_PROP_REGEX = /\s[a-z][a-z\d]*[A-Z]+[a-zA-Z\d]*(=|\s|>)/g;
var COMPONENT_STUB_ATTR = "$tag-name";
var PROP_STUB_ATTR = "-$u";
var PROP_STUB_ATTR_REGEX = new RegExp(
  `${PROP_STUB_ATTR.replace("$", "\\$")}[a-z]`,
  "g"
);
var CODE_META_STUB_ATTR = "$code-meta";
(async () => {
  ({ visit } = await import("unist-util-visit"));
  ({ raw } = await import("hast-util-raw"));
})();
function rehypeRaw(opts) {
  return (tree, vFile) => {
    visit(tree, (node) => {
      var _a;
      if (node.type === "raw" && COMPONENT_NAME_REGEX.test(node.value)) {
        node.value = node.value.replace(
          COMPONENT_NAME_REGEX,
          (str, bracket, tagName, next, i, full) => {
            const isWithinQuotes = /="[^"]*$/.test(full.slice(0, i)) && /^[^"]*"/.test(full.slice(i)) || /='[^']*$/.test(full.slice(0, i)) && /^[^']*'/.test(full.slice(i));
            return isWithinQuotes ? str : `${bracket}${tagName} ${COMPONENT_STUB_ATTR}="${tagName}"${next}`;
          }
        );
        node.value = node.value.replace(COMPONENT_PROP_REGEX, (str) => {
          return str.replace(
            /[A-Z]/g,
            (s) => `${PROP_STUB_ATTR}${s.toLowerCase()}`
          );
        });
      } else if (node.type === "element" && ((_a = node.data) == null ? void 0 : _a.meta)) {
        node.properties ?? (node.properties = {});
        node.properties[CODE_META_STUB_ATTR] = node.data.meta;
      }
      if (node.type === "raw" && /<code[^>]*src=[^>]*\/>/.test(node.value)) {
        import_plugin_utils.logger.warn(`<code /> is not supported, please use <code></code> instead.
File: ${opts.fileAbsPath}`);
      }
    });
    const newTree = raw(tree, { file: vFile });
    visit(newTree, "element", (node) => {
      var _a, _b;
      if ((_a = node.properties) == null ? void 0 : _a[COMPONENT_STUB_ATTR]) {
        node.tagName = node.properties[COMPONENT_STUB_ATTR];
        delete node.properties[COMPONENT_STUB_ATTR];
      } else if ((_b = node.properties) == null ? void 0 : _b[CODE_META_STUB_ATTR]) {
        node.data = { meta: node.properties[CODE_META_STUB_ATTR] };
        delete node.properties[CODE_META_STUB_ATTR];
      }
      Object.keys(node.properties || {}).forEach((p) => {
        if (PROP_STUB_ATTR_REGEX.test(p)) {
          const originalName = p.replace(
            PROP_STUB_ATTR_REGEX,
            (s) => s.slice(PROP_STUB_ATTR.length).toUpperCase()
          );
          node.properties[originalName] = node.properties[p];
          node.properties[originalName.toLowerCase()] = node.properties[p];
          delete node.properties[p];
        }
      });
    });
    return newTree;
  };
}
