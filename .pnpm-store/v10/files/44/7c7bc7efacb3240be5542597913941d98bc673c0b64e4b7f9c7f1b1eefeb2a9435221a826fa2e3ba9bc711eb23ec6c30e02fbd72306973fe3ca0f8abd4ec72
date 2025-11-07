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

// src/index.js
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_assert = __toESM(require("assert"));
var import_Plugin = __toESM(require("./Plugin"));
function src_default({ types }) {
  let plugins = null;
  global.__clearBabelAntdPlugin = () => {
    plugins = null;
  };
  function applyInstance(method, args, context) {
    for (const plugin of plugins) {
      if (plugin[method]) {
        plugin[method].apply(plugin, [...args, context]);
      }
    }
  }
  const Program = {
    enter(path, { opts = {} }) {
      if (!plugins) {
        if (Array.isArray(opts)) {
          plugins = opts.map(
            ({
              libraryName,
              libraryDirectory,
              style,
              styleLibraryDirectory,
              customStyleName,
              camel2DashComponentName,
              camel2UnderlineComponentName,
              fileName,
              customName,
              transformToDefaultImport
            }, index) => {
              (0, import_assert.default)(libraryName, "libraryName should be provided");
              return new import_Plugin.default(
                libraryName,
                libraryDirectory,
                style,
                styleLibraryDirectory,
                customStyleName,
                camel2DashComponentName,
                camel2UnderlineComponentName,
                fileName,
                customName,
                transformToDefaultImport,
                types,
                index
              );
            }
          );
        } else {
          (0, import_assert.default)(opts.libraryName, "libraryName should be provided");
          plugins = [
            new import_Plugin.default(
              opts.libraryName,
              opts.libraryDirectory,
              opts.style,
              opts.styleLibraryDirectory,
              opts.customStyleName,
              opts.camel2DashComponentName,
              opts.camel2UnderlineComponentName,
              opts.fileName,
              opts.customName,
              opts.transformToDefaultImport,
              types
            )
          ];
        }
      }
      applyInstance("ProgramEnter", arguments, this);
    },
    exit() {
      applyInstance("ProgramExit", arguments, this);
    }
  };
  const methods = [
    "ImportDeclaration",
    "CallExpression",
    "MemberExpression",
    "Property",
    "VariableDeclarator",
    "ArrayExpression",
    "LogicalExpression",
    "ConditionalExpression",
    "IfStatement",
    "ExpressionStatement",
    "ReturnStatement",
    "ExportDefaultDeclaration",
    "BinaryExpression",
    "NewExpression",
    "ClassDeclaration",
    "SwitchStatement",
    "SwitchCase",
    "SequenceExpression"
  ];
  const ret = {
    visitor: { Program }
  };
  for (const method of methods) {
    ret.visitor[method] = function() {
      applyInstance(method, arguments, ret.visitor);
    };
  }
  return ret;
}
