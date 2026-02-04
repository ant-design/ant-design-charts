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

// src/loaders/markdown/transformer/remarkBreaks.ts
var remarkBreaks_exports = {};
__export(remarkBreaks_exports, {
  default: () => remarkBreaks
});
module.exports = __toCommonJS(remarkBreaks_exports);
var import_plugin_utils = require("umi/plugin-utils");
var findAndReplace;
(async () => {
  ({ findAndReplace } = await import("mdast-util-find-and-replace"));
})();
var warningLock = /* @__PURE__ */ new Map();
function logDeprecationWarning(fileAbsPath) {
  if (warningLock.get(fileAbsPath))
    return;
  warningLock.set(fileAbsPath, true);
  import_plugin_utils.logger.warn(
    "Detected that you are using soft breaks, dumi will transform them into spaces after the declaration",
    "version greater than or equal to `2.2.0`, however, they are still being transformed as line breaks now, please",
    "migrate them to hard breaks before upgrading the declaration version for dumi.\n",
    import_plugin_utils.chalk.grey(`  at ${fileAbsPath}
`),
    import_plugin_utils.chalk.grey("  see also: https://github.com/umijs/dumi/issues/1683\n")
  );
}
function remarkBreaks(opts) {
  const replace = (_, match) => {
    if (match.input === "\n" || match.input === "\r" || match.input === "\r\n") {
      return false;
    }
    logDeprecationWarning(opts.fileAbsPath);
    return { type: "break" };
  };
  return (tree) => {
    findAndReplace(tree, /\r?\n|\r/g, replace);
  };
}
