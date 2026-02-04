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

// src/loaders/markdown/transformer/rehypeDemo.ts
var rehypeDemo_exports = {};
__export(rehypeDemo_exports, {
  DEMO_PROP_VALUE_KEY: () => DEMO_PROP_VALUE_KEY,
  DUMI_DEMO_GRID_TAG: () => DUMI_DEMO_GRID_TAG,
  DUMI_DEMO_TAG: () => DUMI_DEMO_TAG,
  SKIP_DEMO_PARSE: () => SKIP_DEMO_PARSE,
  default: () => rehypeDemo
});
module.exports = __toCommonJS(rehypeDemo_exports);
var import_block = __toESM(require("../../../assetParsers/block"));
var import_utils = require("../../../utils");
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var visit;
var SKIP;
var EXIT;
var toString;
var isElement;
var DEMO_NODE_CONTAINER = "$demo-container";
var DEMO_PROP_VALUE_KEY = "$demo-prop-value-key";
var DUMI_DEMO_TAG = "DumiDemo";
var DUMI_DEMO_GRID_TAG = "DumiDemoGrid";
var SKIP_DEMO_PARSE = "pure";
var ALWAYS_DEMO_PARSE = "demo";
var skipDemoRE = new RegExp(
  /** 注意前面有空格 ==> */
  ` ${SKIP_DEMO_PARSE}`
);
var alwaysDemoRE = new RegExp(
  /** 注意前面有空格 ==> */
  ` ${ALWAYS_DEMO_PARSE}`
);
(async () => {
  ({ visit, SKIP, EXIT } = await import("unist-util-visit"));
  ({ toString } = await import("hast-util-to-string"));
  ({ isElement } = await import("hast-util-is-element"));
})();
function getCodeLang(node, opts) {
  var _a, _b, _c, _d;
  let lang = "";
  if (typeof ((_a = node.properties) == null ? void 0 : _a.src) === "string") {
    node.properties.src = opts.resolver(
      import_path.default.dirname(opts.fileAbsPath),
      node.properties.src
    );
    lang = import_path.default.extname(node.properties.src).slice(1);
  } else if ([
    // 插件开发者可配置 [SKIP_DEMO_PARSE_SIGN] 表示不解析 demo (优先级最高)
    !Object.prototype.hasOwnProperty.call(node.data ?? {}, SKIP_DEMO_PARSE),
    Array.isArray((_b = node.properties) == null ? void 0 : _b.className),
    // 根据用户配置判断 pure 或者 demo
    opts.resolve.codeBlockMode === "passive" ? alwaysDemoRE.test(String((_c = node.data) == null ? void 0 : _c.meta)) : !skipDemoRE.test(String((_d = node.data) == null ? void 0 : _d.meta))
    // active mode (default)
  ].every(Boolean)) {
    lang = String(node.properties.className[0]).replace(
      "language-",
      ""
    );
  }
  return lang;
}
function getCodeId(cwd, fileAbsPath, localId, atomId) {
  const prefix = atomId || (0, import_utils.getFileIdFromFsPath)(import_path.default.relative(cwd, fileAbsPath));
  return [prefix.toLowerCase(), "demo", localId.toLowerCase()].filter(Boolean).join("-");
}
function tryMarkDemoNode(node, opts) {
  var _a, _b;
  let isDemoNode = Boolean((_a = node.data) == null ? void 0 : _a.techStack);
  if (!isDemoNode) {
    const lang = getCodeLang(node, opts);
    const techStack = lang && opts.techStacks.find((ts) => ts.isSupported(node, lang));
    if (techStack) {
      isDemoNode = true;
      node.data ?? (node.data = {});
      node.data.techStack = techStack;
      node.data.lang = lang;
      node.data.type = typeof ((_b = node.properties) == null ? void 0 : _b.src) === "string" ? "external" : "code-block";
    }
  }
  return isDemoNode;
}
function rehypeDemo(opts) {
  return async (tree, vFile) => {
    const deferrers = [];
    const demoIds = [];
    const replaceNodes = [];
    let index = 0;
    visit(tree, "element", (node) => {
      if (isElement(node, "pre") && node.children.length === 1 && isElement(node.children[0], "code") && tryMarkDemoNode(node.children[0], opts)) {
        node.tagName = "p";
        node.data ?? (node.data = {});
        node.data[DEMO_NODE_CONTAINER] = true;
      }
    });
    visit(tree, "element", (node, nodeIndex, parent) => {
      if (isElement(node, "p")) {
        for (let childIndex = 0; childIndex < node.children.length; childIndex += 1) {
          let child = node.children[childIndex];
          if (isElement(child, "code") && tryMarkDemoNode(child, opts)) {
            const isFirstChild = childIndex === 0;
            let nextChildIndex = childIndex + 1;
            let nextChild = node.children[nextChildIndex];
            let splitFrom = childIndex;
            if (isFirstChild) {
              node.data ?? (node.data = {});
              node.data[DEMO_NODE_CONTAINER] = true;
              while (nextChild) {
                if (isElement(nextChild, "code") && tryMarkDemoNode(nextChild, opts) || isElement(nextChild, "br")) {
                  splitFrom += 1;
                  nextChildIndex = splitFrom + 1;
                  nextChild = node.children[nextChildIndex];
                } else {
                  splitFrom += 1;
                  break;
                }
              }
              if (!nextChild)
                return SKIP;
            }
            const splitChildren = node.children.splice(splitFrom);
            parent.children.splice(nodeIndex + 1, 0, {
              type: "element",
              tagName: "p",
              children: splitChildren
            });
            return SKIP;
          }
        }
      }
    });
    let hasOnlySign = false;
    let hasSkipSign = false;
    visit(tree, "element", (node) => {
      var _a;
      if (isElement(node, "p") && ((_a = node.data) == null ? void 0 : _a[DEMO_NODE_CONTAINER])) {
        for (const codeNode of node.children) {
          if (isElement(codeNode, "code")) {
            hasSkipSign || (hasSkipSign = "skip" in codeNode.properties);
            if ("only" in codeNode.properties) {
              hasOnlySign = true;
              return EXIT;
            }
          }
        }
      }
    });
    if (process.env.NODE_ENV === "production" && (hasOnlySign || hasSkipSign)) {
      import_plugin_utils.logger.warn(
        `The 'only' or 'skip' mark is not supported in production environment, please remove it. at ${vFile.data.frontmatter.filename}`
      );
    }
    visit(tree, "element", (node) => {
      var _a, _b, _c;
      if (isElement(node, "p") && ((_a = node.data) == null ? void 0 : _a[DEMO_NODE_CONTAINER])) {
        const demosPropData = [];
        for (const codeNode of node.children) {
          if (isElement(codeNode, "code")) {
            const shouldSkipNonOnlyDemos = hasOnlySign && !("only" in codeNode.properties);
            if (process.env.NODE_ENV !== "production" && ("skip" in codeNode.properties || shouldSkipNonOnlyDemos)) {
              continue;
            }
            const codeType = codeNode.data.type;
            const techStack = codeNode.data.techStack;
            const codeValue = toString(codeNode).trim();
            const parseOpts = {
              id: "",
              refAtomIds: vFile.data.frontmatter.atomId ? [vFile.data.frontmatter.atomId] : [],
              fileAbsPath: "",
              lang: codeNode.data.lang,
              fileLocale: opts.fileLocale,
              entryPointCode: codeType === "external" ? void 0 : codeValue,
              resolver: opts.resolver,
              techStack
            };
            const runtimeOpts = techStack.runtimeOpts;
            const previewerProps = {};
            let component = "";
            if (codeType === "external") {
              const chunkName = [vFile.data.frontmatter.atomId, "demos"].filter(Boolean).join("__");
              parseOpts.fileAbsPath = (0, import_plugin_utils.winPath)(
                codeNode.properties.src
              );
              let localId = ((_b = codeNode.properties) == null ? void 0 : _b.id) ?? import_path.default.parse(
                parseOpts.fileAbsPath.replace(/\/index\.(j|t)sx?$/, "")
              ).name;
              parseOpts.id = getCodeId(
                opts.cwd,
                opts.fileLocaleLessPath,
                localId,
                vFile.data.frontmatter.atomId
              );
              const importChunk = `import( /* webpackChunkName: "${chunkName}" */ '${(0, import_plugin_utils.winPath)(
                parseOpts.fileAbsPath
              )}?techStack=${techStack.name}')`;
              if (runtimeOpts == null ? void 0 : runtimeOpts.rendererPath) {
                component = `(async () => ${importChunk})()`;
              } else {
                component = `React.memo(React.lazy(() => ${importChunk}))`;
              }
              if (codeValue)
                codeNode.properties.title = codeValue;
              (_c = codeNode.properties).filename ?? (_c.filename = (0, import_plugin_utils.winPath)(
                import_path.default.relative(opts.cwd, parseOpts.fileAbsPath)
              ));
            } else {
              const localId = [opts.fileLocale, String(index++)].filter(Boolean).join("-");
              parseOpts.fileAbsPath = opts.fileAbsPath.replace(
                ".md",
                `.${parseOpts.lang}`
              );
              parseOpts.id = getCodeId(
                opts.cwd,
                opts.fileLocaleLessPath,
                localId,
                vFile.data.frontmatter.atomId
              );
              component = techStack.transformCode(codeValue, {
                type: "code-block",
                fileAbsPath: parseOpts.fileAbsPath
              });
            }
            const propDemo = { id: parseOpts.id };
            demoIds.push(parseOpts.id);
            deferrers.push(
              (0, import_block.default)(parseOpts).then(
                async ({ asset, resolveMap, frontmatter }) => {
                  var _a2, _b2, _c2;
                  if (demoIds.indexOf(parseOpts.id) !== demoIds.lastIndexOf(parseOpts.id)) {
                    const startLine = (_a2 = node.position) == null ? void 0 : _a2.start.line;
                    const suffix = startLine ? `:${startLine}` : "";
                    import_plugin_utils.logger.warn(
                      `Duplicate demo id found due to filename conflicts, please consider adding a unique id to code tag to resolve this.
        at ${opts.fileAbsPath}${suffix}`
                    );
                  }
                  const { src, className, ...restAttrs } = codeNode.properties || {};
                  const validAssetAttrs = [
                    "title",
                    "snapshot",
                    "keywords"
                  ];
                  const techStackOpts = {
                    type: codeType,
                    mdAbsPath: opts.fileAbsPath,
                    fileAbsPath: codeType === "external" ? parseOpts.fileAbsPath : void 0,
                    entryPointCode: parseOpts.entryPointCode
                  };
                  Object.keys(restAttrs).forEach((key) => {
                    if (restAttrs[key] === "")
                      restAttrs[key] = true;
                  });
                  const originalProps = Object.assign(
                    {},
                    frontmatter,
                    restAttrs
                  );
                  validAssetAttrs.forEach((key) => {
                    if (originalProps[key])
                      asset[key] = originalProps[key];
                  });
                  if (/ inline/.test(String((_b2 = codeNode.data) == null ? void 0 : _b2.meta)) || originalProps.inline) {
                    propDemo.inline = true;
                    return {
                      // TODO: special id for inline demo
                      id: asset.id,
                      component,
                      renderOpts: {
                        rendererPath: runtimeOpts == null ? void 0 : runtimeOpts.rendererPath,
                        preflightPath: runtimeOpts == null ? void 0 : runtimeOpts.preflightPath
                      }
                    };
                  }
                  Object.assign(
                    previewerProps,
                    await ((_c2 = techStack.generatePreviewerProps) == null ? void 0 : _c2.call(
                      techStack,
                      originalProps,
                      techStackOpts
                    )) || originalProps
                  );
                  if (previewerProps.description) {
                    const { unified } = await import("unified");
                    const { default: remarkParse } = await import("remark-parse");
                    const { default: remarkGfm } = await import("remark-gfm");
                    const { default: remarkRehype } = await import("remark-rehype");
                    const { default: rehypeStringify } = await import("rehype-stringify");
                    const { convert } = require("html-to-text");
                    const result = await unified().use(remarkParse).use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeStringify, { allowDangerousHtml: true }).process(previewerProps.description);
                    previewerProps.description = String(result.value);
                    asset.description = convert(result.value, {
                      wordwrap: false
                    });
                  }
                  return {
                    id: asset.id,
                    component,
                    asset: techStack.generateMetadata ? await techStack.generateMetadata(asset, techStackOpts) : asset,
                    /**
                     * keep `generateSources` rather than `generateResolveMap` for compatibility
                     */
                    resolveMap: techStack.generateSources ? await techStack.generateSources(
                      resolveMap,
                      techStackOpts
                    ) : resolveMap,
                    renderOpts: {
                      rendererPath: runtimeOpts == null ? void 0 : runtimeOpts.rendererPath,
                      compilePath: runtimeOpts == null ? void 0 : runtimeOpts.compilePath,
                      preflightPath: runtimeOpts == null ? void 0 : runtimeOpts.preflightPath
                    }
                  };
                }
              )
            );
            demosPropData.push({
              demo: propDemo,
              previewerProps
            });
            if (process.env.NODE_ENV !== "production" && "only" in codeNode.properties) {
              break;
            }
          }
        }
        replaceNodes.push(node);
        node.children = [];
        if (demosPropData.length === 1) {
          node.tagName = DUMI_DEMO_TAG;
          node.data[DEMO_PROP_VALUE_KEY] = demosPropData[0];
          node.JSXAttributes = [{ type: "JSXSpreadAttribute", argument: "" }];
        } else {
          node.tagName = DUMI_DEMO_GRID_TAG;
          node.data[DEMO_PROP_VALUE_KEY] = demosPropData;
          node.JSXAttributes = [
            { type: "JSXAttribute", name: "items", value: "" }
          ];
        }
        return SKIP;
      }
    });
    await Promise.all(deferrers).then((demos) => {
      vFile.data.demos = demos;
      replaceNodes.forEach((node) => {
        const value = JSON.stringify(node.data[DEMO_PROP_VALUE_KEY]);
        if (node.JSXAttributes[0].type === "JSXAttribute") {
          node.JSXAttributes[0].value = value;
        } else {
          node.JSXAttributes[0].argument = value;
        }
      });
    });
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEMO_PROP_VALUE_KEY,
  DUMI_DEMO_GRID_TAG,
  DUMI_DEMO_TAG,
  SKIP_DEMO_PARSE
});
