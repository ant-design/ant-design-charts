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

// src/getExportProps/getExportProps.ts
var getExportProps_exports = {};
__export(getExportProps_exports, {
  getExportProps: () => getExportProps
});
module.exports = __toCommonJS(getExportProps_exports);
var traverse = __toESM(require("@umijs/bundler-utils/compiled/babel/traverse"));
var t = __toESM(require("@umijs/bundler-utils/compiled/babel/types"));
var import_parse = require("../utils/parse");
var import_propertyResolver = require("./propertyResolver");
function getExportProps(code) {
  const ast = (0, import_parse.parse)(code);
  let props = void 0;
  traverse.default(ast, {
    Program: {
      enter(path) {
        const node = path.node;
        const defaultExport = findExportDefault(node);
        if (!defaultExport)
          return;
        if (t.isIdentifier(defaultExport)) {
          const { name } = defaultExport;
          props = findAssignmentExpressionProps({
            programNode: node,
            name
          });
        } else if (t.isObjectExpression(defaultExport)) {
          props = (0, import_propertyResolver.findObjectMembers)(defaultExport);
        } else if (t.isArrayExpression(defaultExport)) {
          props = (0, import_propertyResolver.findArrayElements)(defaultExport);
        } else {
          const resolver = import_propertyResolver.NODE_RESOLVERS.find(
            (resolver2) => resolver2.is(defaultExport)
          );
          if (resolver) {
            props = resolver.get(defaultExport);
          }
        }
      }
    }
  });
  return props;
}
function findExportDefault(programNode) {
  for (const n of programNode.body) {
    if (t.isExportDefaultDeclaration(n)) {
      return n.declaration;
    }
  }
  return null;
}
function findAssignmentExpressionProps(opts) {
  const props = {};
  for (const n of opts.programNode.body) {
    let node = n;
    if (t.isExpressionStatement(node)) {
      node = node.expression;
    }
    if (t.isAssignmentExpression(node) && t.isMemberExpression(node.left) && t.isIdentifier(node.left.object) && node.left.object.name === opts.name) {
      const resolver = import_propertyResolver.NODE_RESOLVERS.find(
        (resolver2) => resolver2.is(t.isAssignmentExpression(node) && node.right)
      );
      if (resolver) {
        props[node.left.property.name] = resolver.get(
          node.right
        );
      }
    }
  }
  return props;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getExportProps
});
