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

// src/loaders/markdown/transformer/rehypeLink.ts
var rehypeLink_exports = {};
__export(rehypeLink_exports, {
  default: () => rehypeLink
});
module.exports = __toCommonJS(rehypeLink_exports);
var import_tabs = require("../../../features/tabs");
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_url = __toESM(require("url"));
var visit;
var SKIP;
(async () => {
  ({ visit, SKIP } = await import("unist-util-visit"));
})();
function rehypeLink(opts) {
  return (tree) => {
    visit(tree, "element", (node, i, parent) => {
      var _a, _b, _c;
      if (node.tagName === "a" && typeof ((_a = node.properties) == null ? void 0 : _a.href) === "string" && // skip target specified link
      !((_b = node.properties) == null ? void 0 : _b.target) && // skip download link
      !((_c = node.properties) == null ? void 0 : _c.download)) {
        const href = node.properties.href;
        const parsedUrl = import_url.default.parse(href);
        const hostAbsPath = (0, import_tabs.getHostForTabRouteFile)(opts.fileAbsPath);
        if (parsedUrl.protocol || href.startsWith("//"))
          return SKIP;
        if (/\.md$/i.test(parsedUrl.pathname)) {
          const { routes } = opts;
          const absPath = (0, import_plugin_utils.winPath)(
            import_path.default.resolve(hostAbsPath, "..", parsedUrl.pathname)
          );
          Object.keys(routes).forEach((key) => {
            if (routes[key].file === absPath) {
              parsedUrl.pathname = routes[key].absPath;
            }
          });
        } else if (parsedUrl.pathname && /^[^/]+/.test(parsedUrl.pathname)) {
          const routes = Object.values(opts.routes);
          const basePath = routes.find(
            (route) => route.file === hostAbsPath
          ).absPath;
          const htmlTargetPath = import_url.default.resolve(basePath, parsedUrl.pathname);
          const rr6TargetPath = (0, import_plugin_utils.winPath)(
            import_path.default.resolve(basePath, parsedUrl.pathname)
          );
          parsedUrl.pathname = htmlTargetPath;
          if (routes.every((route) => route.absPath !== htmlTargetPath) && routes.some((route) => route.absPath === rr6TargetPath)) {
            parsedUrl.pathname = rr6TargetPath;
            import_plugin_utils.logger.warn(
              `Detected ambiguous link \`${href}\` in \`${opts.fileAbsPath}\`, please use \`./xxx.md\` file path instead of normal relative path, dumi will deprecate this behavior in the future.
        See more: https://github.com/umijs/dumi/pull/1491`
            );
          }
        }
        parent.children.splice(i, 1, {
          type: "element",
          tagName: "Link",
          children: node.children,
          properties: {
            ...import_plugin_utils.lodash.omit(node.properties, ["href"]),
            to: import_url.default.format(parsedUrl)
          }
        });
      }
    });
  };
}
