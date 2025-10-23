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

// src/loaders/markdown/transformer/index.ts
var transformer_exports = {};
__export(transformer_exports, {
  default: () => transformer_default
});
module.exports = __toCommonJS(transformer_exports);
var import_constants = require("../../../constants");
var import_utils = require("../../../utils");
var import_enhanced_resolve = __toESM(require("enhanced-resolve"));
var import_rehypeDemo = __toESM(require("./rehypeDemo"));
var import_rehypeDesc = __toESM(require("./rehypeDesc"));
var import_rehypeEnhancedTag = __toESM(require("./rehypeEnhancedTag"));
var import_rehypeHighlightLine = __toESM(require("./rehypeHighlightLine"));
var import_rehypeImg = __toESM(require("./rehypeImg"));
var import_rehypeIsolation = __toESM(require("./rehypeIsolation"));
var import_rehypeJsxify = __toESM(require("./rehypeJsxify"));
var import_rehypeLink = __toESM(require("./rehypeLink"));
var import_rehypeRaw = __toESM(require("./rehypeRaw"));
var import_rehypeSlug = __toESM(require("./rehypeSlug"));
var import_rehypeStrip = __toESM(require("./rehypeStrip"));
var import_rehypeText = __toESM(require("./rehypeText"));
var import_remarkBreaks = __toESM(require("./remarkBreaks"));
var import_remarkContainer = __toESM(require("./remarkContainer"));
var import_remarkEmbed = __toESM(require("./remarkEmbed"));
var import_remarkMeta = __toESM(require("./remarkMeta"));
function keepSoftBreak(pkg) {
  var _a, _b, _c;
  if (((_a = pkg == null ? void 0 : pkg.name) == null ? void 0 : _a.startsWith("@examples/")) || (pkg == null ? void 0 : pkg.name) === "dumi")
    return false;
  const ver = ((_b = pkg == null ? void 0 : pkg.devDependencies) == null ? void 0 : _b.dumi) ?? ((_c = pkg == null ? void 0 : pkg.dependencies) == null ? void 0 : _c.dumi) ?? "^2.0.0";
  return !(0, import_utils.isVersionInRange)(ver, import_constants.VERSION_2_DEPRECATE_SOFT_BREAKS);
}
async function applyUnifiedPlugin(opts) {
  const [plugin, options] = Array.isArray(opts.plugin) ? opts.plugin : [opts.plugin];
  let mod = typeof plugin === "function" ? plugin : await import(plugin);
  const fn = mod.default || mod;
  opts.processor.use(fn, options);
}
var transformer_default = async (raw, opts) => {
  var _a;
  let fileLocaleLessPath = opts.fileAbsPath;
  const { unified } = await import("unified");
  const { default: remarkParse } = await import("remark-parse");
  const { default: remarkFrontmatter } = await import("remark-frontmatter");
  const { default: remarkDirective } = await import("remark-directive");
  const { default: remarkGfm } = await import("remark-gfm");
  const { default: remarkRehype } = await import("remark-rehype");
  const { default: rehypeAutolinkHeadings } = await import("rehype-autolink-headings");
  const { default: rehypeRemoveComments } = await import("rehype-remove-comments");
  const resolver = import_enhanced_resolve.default.create.sync({
    mainFields: ["browser", "module", "main"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // Common conditionName needs to be configured,
    // otherwise some common library paths cannot be parsed, such as vue, pinia, etc.
    conditionNames: ["import", "require", "default", "browser", "node"],
    alias: opts.alias
  });
  const fileLocale = (_a = opts.locales.find(
    (locale) => opts.fileAbsPath.endsWith(`.${locale.id}.md`)
  )) == null ? void 0 : _a.id;
  if (fileLocale) {
    fileLocaleLessPath = opts.fileAbsPath.replace(`.${fileLocale}.md`, ".md");
  }
  const processor = unified().use(remarkParse).use(import_remarkEmbed.default, { fileAbsPath: opts.fileAbsPath, alias: opts.alias }).use(remarkFrontmatter).use(import_remarkMeta.default, {
    cwd: opts.cwd,
    fileAbsPath: opts.fileAbsPath,
    fileLocaleLessPath,
    resolve: opts.resolve
  }).use(remarkDirective).use(import_remarkContainer.default).use(remarkGfm);
  if (keepSoftBreak(opts.pkg)) {
    processor.use(import_remarkBreaks.default, { fileAbsPath: opts.fileAbsPath });
  }
  for (const plugin of opts.extraRemarkPlugins ?? []) {
    await applyUnifiedPlugin({
      plugin,
      processor,
      cwd: opts.cwd
    });
  }
  processor.use(remarkRehype, { allowDangerousHtml: true }).use(import_rehypeRaw.default, {
    fileAbsPath: opts.fileAbsPath
  }).use(import_rehypeHighlightLine.default).use(rehypeRemoveComments, { removeConditional: true }).use(import_rehypeStrip.default).use(import_rehypeImg.default).use(import_rehypeDemo.default, {
    techStacks: opts.techStacks,
    cwd: opts.cwd,
    fileAbsPath: opts.fileAbsPath,
    fileLocaleLessPath,
    fileLocale,
    resolve: opts.resolve,
    resolver
  }).use(import_rehypeSlug.default).use(import_rehypeLink.default, {
    fileAbsPath: opts.fileAbsPath,
    routes: opts.routes
  }).use(rehypeAutolinkHeadings).use(import_rehypeIsolation.default).use(import_rehypeEnhancedTag.default).use(import_rehypeDesc.default).use(import_rehypeText.default);
  for (const plugin of opts.extraRehypePlugins ?? []) {
    await applyUnifiedPlugin({
      plugin,
      processor,
      cwd: opts.cwd
    });
  }
  processor.data("fileAbsPath", opts.fileAbsPath);
  const result = await processor.use(import_rehypeJsxify.default).process(raw);
  return {
    content: String(result.value),
    meta: result.data
  };
};
