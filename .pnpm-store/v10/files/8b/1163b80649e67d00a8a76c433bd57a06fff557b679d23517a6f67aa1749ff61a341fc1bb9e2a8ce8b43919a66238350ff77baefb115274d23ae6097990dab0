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

// src/features/transform/babelPlugin.ts
var babelPlugin_exports = {};
__export(babelPlugin_exports, {
  default: () => babelPlugin_default
});
module.exports = __toCommonJS(babelPlugin_exports);
var t = __toESM(require("@umijs/bundler-utils/compiled/babel/types"));
var import_utils = require("@umijs/utils");
var import_path = require("path");
function isModuleExports(node) {
  return t.isMemberExpression(node) && t.isIdentifier(node.object, { name: "module" }) && t.isIdentifier(node.property, { name: "exports" });
}
function isExportsMemberExpression(node) {
  return t.isMemberExpression(node) && t.isIdentifier(node.object, { name: "exports" });
}
function babelPlugin_default() {
  let opts;
  return {
    pre() {
      this.cache = /* @__PURE__ */ new Map();
    },
    post(state) {
      const { cache } = this;
      const filename = (0, import_utils.winPath)(state.opts.filename);
      if (cache.has(filename) && !filename.includes("bundler-webpack/client") && !filename.startsWith((0, import_utils.winPath)((0, import_path.join)(opts.cwd, "node_modules")))) {
        opts.onCheckCode({
          args: {
            ...cache.get(filename),
            file: filename,
            isFromTmp: filename.startsWith(opts.absTmpPath)
          }
        });
      }
    },
    visitor: {
      Program: {
        enter(path, state) {
          opts = state.opts;
          const file = (0, import_utils.winPath)(path == null ? void 0 : path.hub.file.opts.filename);
          const cache = this.cache;
          cache.set(file, {
            code: path.hub.getCode(),
            imports: [],
            cjsExports: []
          });
          path.node.body.forEach((node) => {
            if (t.isImportDeclaration(node)) {
              const ret = {
                source: node.source.value,
                loc: node.loc,
                kind: node.importKind
              };
              node.specifiers.forEach((specifier) => {
                if (t.isImportDefaultSpecifier(specifier)) {
                  ret.default = specifier.local.name;
                } else if (t.isImportNamespaceSpecifier(specifier)) {
                  ret.namespace = specifier.local.name;
                } else if (t.isImportSpecifier(specifier)) {
                  ret.specifiers || (ret.specifiers = {});
                  ret.specifiers[t.isIdentifier(specifier.imported) ? specifier.imported.name : specifier.imported.value] = {
                    name: specifier.local.name,
                    kind: specifier.importKind
                  };
                }
              });
              cache.get(file).imports.push(ret);
            }
            if (t.isExpressionStatement(node)) {
              const n = node;
              if (t.isAssignmentExpression(n.expression) && isModuleExports(n.expression.left)) {
                cache.get(file).cjsExports.push("default");
              }
              if (t.isAssignmentExpression(n.expression) && isExportsMemberExpression(n.expression.left)) {
                cache.get(file).cjsExports.push(
                  // @ts-ignore
                  n.expression.left.property.name
                );
              }
            }
          });
        }
      }
    }
  };
}
