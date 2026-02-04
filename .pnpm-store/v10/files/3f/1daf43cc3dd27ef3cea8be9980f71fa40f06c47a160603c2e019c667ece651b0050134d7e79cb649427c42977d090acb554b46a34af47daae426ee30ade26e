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

// src/loaders/markdown/transformer/remarkMeta.ts
var remarkMeta_exports = {};
__export(remarkMeta_exports, {
  default: () => remarkMeta
});
module.exports = __toCommonJS(remarkMeta_exports);
var import_tabs = require("../../../features/tabs");
var import_child_process = require("child_process");
var import_fs = __toESM(require("fs"));
var import_js_yaml = __toESM(require("js-yaml"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var visit;
var toString;
(async () => {
  ({ visit } = await import("unist-util-visit"));
  ({ toString } = await import("mdast-util-to-string"));
})();
function getGuessAtomId(opts) {
  const parsed = import_path.default.parse(opts.fileLocaleLessPath);
  const clearFileName = (0, import_tabs.getHostForTabRouteFile)(parsed.name);
  const atomFile = [".tsx", ".jsx"].map((ext) => import_path.default.join(parsed.dir, `${clearFileName}${ext}`)).find(import_fs.default.existsSync);
  if (atomFile) {
    const atomAbsDir = opts.resolve.atomDirs.map(({ dir }) => import_path.default.resolve(opts.cwd, dir)).sort((a, b) => b.split("/").length - a.split("/").length).find((dir) => atomFile.startsWith(dir));
    if (atomAbsDir) {
      return (0, import_plugin_utils.winPath)(import_path.default.relative(atomAbsDir, atomFile)).replace(
        /((^|\/)index)?\.\w+$/,
        ""
      );
    }
  }
}
function remarkMeta(opts) {
  return (tree, vFile) => {
    const guessAtomId = getGuessAtomId(opts);
    vFile.data.frontmatter = {
      title: "",
      toc: "menu",
      filename: (0, import_plugin_utils.winPath)(import_path.default.relative(opts.cwd, opts.fileAbsPath)),
      ...guessAtomId && { atomId: guessAtomId }
    };
    try {
      vFile.data.frontmatter.lastUpdated = parseInt(
        (0, import_child_process.execSync)(`git log -1 --format=%at ${opts.fileAbsPath}`, {
          stdio: "pipe"
        }).toString(),
        10
      ) * 1e3;
    } catch {
    }
    if (Number.isNaN(vFile.data.frontmatter.lastUpdated)) {
      vFile.data.frontmatter.lastUpdated = +/* @__PURE__ */ new Date();
    }
    visit(tree, "yaml", (node) => {
      try {
        Object.assign(vFile.data.frontmatter, import_js_yaml.default.load(node.value));
      } catch {
      }
    });
    const titleReaders = [
      // use first heading as title
      () => {
        visit(tree, "heading", (node) => {
          if (node.depth === 1) {
            vFile.data.frontmatter.title = toString(node.children);
          }
        });
      },
      // use filename as title
      () => {
        if ((0, import_tabs.isTabRouteFile)(opts.fileAbsPath)) {
          vFile.data.frontmatter.title = import_plugin_utils.lodash.startCase(
            (0, import_tabs.getTabKeyFromFile)(opts.fileAbsPath)
          );
        } else {
          const pathWithoutIndex = opts.fileAbsPath.replace(
            /(\/index([^/]+)?)?\.md$/,
            ""
          );
          vFile.data.frontmatter.title = import_plugin_utils.lodash.startCase(
            import_path.default.basename(pathWithoutIndex)
          );
        }
      }
    ];
    while (!vFile.data.frontmatter.title && titleReaders.length) {
      titleReaders.shift()();
    }
  };
}
