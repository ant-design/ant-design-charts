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

// src/loaders/markdown/transformer/remarkEmbed.ts
var remarkEmbed_exports = {};
__export(remarkEmbed_exports, {
  default: () => remarkEmbed
});
module.exports = __toCommonJS(remarkEmbed_exports);
var import_utils = require("../../../utils");
var import_enhanced_resolve = __toESM(require("enhanced-resolve"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_url = __toESM(require("url"));
var import_remarkContainer = __toESM(require("./remarkContainer"));
var EMBED_OPEN_TAG = "<embed ";
var EMBED_CLOSE_TAG = "</embed>";
var unified;
var remarkParse;
var remarkFrontmatter;
var remarkDirective;
var remarkGfm;
var visit;
(async () => {
  ({ visitParents: visit } = await import("unist-util-visit-parents"));
  ({ unified } = await import("unified"));
  ({ default: remarkParse } = await import("remark-parse"));
  ({ default: remarkFrontmatter } = await import("remark-frontmatter"));
  ({ default: remarkDirective } = await import("remark-directive"));
  ({ default: remarkGfm } = await import("remark-gfm"));
})();
function remarkReplaceSrc(opts) {
  function getEmbedRltPath(value) {
    const { fileAbsPath, parentAbsPath } = opts;
    const absPath = import_path.default.resolve(fileAbsPath, "..", value);
    return (0, import_plugin_utils.winPath)(import_path.default.relative(import_path.default.dirname(parentAbsPath), absPath)).replace(/^([^.])/, "./$1");
  }
  return (ast) => {
    visit(
      ast,
      ["html", "image", "link"],
      (node) => {
        switch (node.type) {
          case "html":
            if (/^<(code|img|a)[^>]+(src|href)=('|")\.\.?\//.test(node.value)) {
              node.value = node.value.replace(
                /(src|href)=("|')([^]+?)\2/,
                (_, tag, quote, value) => `${tag}=${quote}${getEmbedRltPath(value)}${quote}`
              );
            }
            break;
          case "image":
          case "link":
            if (/^\.\.?\//.test(node.url)) {
              node.url = getEmbedRltPath(node.url);
            }
            break;
          default:
        }
      }
    );
  };
}
function remarkRawAST() {
  this.Compiler = function Compiler(ast) {
    visit(ast, "yaml", (node, ancestors) => {
      const parent = ancestors[ancestors.length - 1];
      ancestors[ancestors.length - 1].children.splice(
        parent.children.indexOf(node),
        1
      );
    });
    return ast;
  };
}
function remarkEmbed(opts) {
  const resolver = import_enhanced_resolve.default.create.sync({
    extensions: [".md"],
    alias: opts.alias
  });
  return (tree, vFile) => {
    vFile.data.embeds = [];
    visit(tree, "html", (node, ancestors) => {
      var _a;
      if (node.value.startsWith(EMBED_OPEN_TAG)) {
        let relatedNodeCount = 1;
        const parent = ancestors[ancestors.length - 1];
        const grandParent = ancestors[ancestors.length - 2];
        const i = parent.children.indexOf(node);
        const src = (_a = node.value.match(/src=("|')([^"']+)\1/)) == null ? void 0 : _a[2];
        if (src) {
          const parsed = import_url.default.parse(src);
          const hash = decodeURIComponent(parsed.hash || "").replace("#", "");
          const absPath = resolver(
            import_path.default.dirname(opts.fileAbsPath),
            parsed.pathname
          );
          let content = import_fs.default.readFileSync(absPath, "utf-8");
          if (hash.startsWith("L")) {
            content = (0, import_utils.getFileRangeLines)(content, hash);
          } else if (hash.startsWith("RE-")) {
            content = (0, import_utils.getFileContentByRegExp)(content, hash.slice(3), absPath);
          }
          const {
            result: mdast,
            data: { embeds }
          } = unified().use(remarkParse).use(remarkEmbed, { ...opts, fileAbsPath: absPath }).use(remarkFrontmatter).use(remarkDirective).use(import_remarkContainer.default).use(remarkGfm).use(remarkReplaceSrc, {
            fileAbsPath: absPath,
            parentAbsPath: opts.fileAbsPath
          }).use(remarkRawAST).processSync(content);
          if (!node.value.endsWith(EMBED_CLOSE_TAG)) {
            for (let j = i; j < parent.children.length; j++) {
              const sibling = parent.children[j];
              const isCloseTag = sibling.type === "html" && sibling.value === EMBED_CLOSE_TAG;
              if (isCloseTag) {
                relatedNodeCount += j - i;
                break;
              } else if (j === parent.children.length - 1) {
                throw new Error(`Missing close tag for \`${node.value}\``);
              }
            }
          }
          const newParentNodes = [
            ...mdast.children
          ];
          const before = parent.children.slice(0, i);
          const after = parent.children.slice(i + relatedNodeCount);
          if (before.length) {
            newParentNodes.unshift({
              type: "paragraph",
              children: before
            });
          }
          if (after.length) {
            newParentNodes.push({
              type: "paragraph",
              children: after
            });
          }
          grandParent.children.splice(
            grandParent.children.indexOf(parent),
            1,
            ...newParentNodes
          );
          vFile.data.embeds.push(...[absPath].concat(embeds));
        }
      }
    });
  };
}
