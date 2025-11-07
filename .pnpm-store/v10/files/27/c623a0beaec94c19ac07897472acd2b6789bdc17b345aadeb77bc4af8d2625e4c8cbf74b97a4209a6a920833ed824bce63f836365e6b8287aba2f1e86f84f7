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

// src/setConfigByName/setConfigByName.ts
var setConfigByName_exports = {};
__export(setConfigByName_exports, {
  default: () => setConfigByName_default,
  setConfigByName: () => setConfigByName
});
module.exports = __toCommonJS(setConfigByName_exports);
var import_parser = require("@umijs/bundler-utils/compiled/babel/parser");
var traverse = __toESM(require("@umijs/bundler-utils/compiled/babel/traverse"));
var t = __toESM(require("@umijs/bundler-utils/compiled/babel/types"));
function setConfigByName(ast, name, value) {
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  let isChanged = false;
  let valueObject = t.stringLiteral(value);
  try {
    JSON.parse(value);
    valueObject = (0, import_parser.parseExpression)(value);
  } catch (error) {
  }
  traverse.default(ast, {
    ObjectProperty(path) {
      var _a;
      if (((_a = path.node.key) == null ? void 0 : _a.name) === name) {
        path.node.value = valueObject;
        isChanged = true;
        path.stop();
      }
    }
  });
  if (!isChanged) {
    let modified = false;
    traverse.default(ast, {
      CallExpression(path) {
        if (t.isExportDefaultDeclaration(path.parent) && t.isIdentifier(path.node.callee, { name: "defineConfig" }) && t.isObjectExpression(path.node.arguments[0])) {
          path.node.arguments[0].properties.push(
            t.objectProperty(t.identifier(name), valueObject)
          );
          modified = true;
          path.stop();
        }
      },
      ObjectExpression(path) {
        if (t.isExportDefaultDeclaration(path.parent)) {
          path.node.properties.push(
            t.objectProperty(t.identifier(name), valueObject)
          );
          modified = true;
          path.stop();
        }
      }
    });
    if (!modified) {
      console.error(
        `export config format can not be analysis, please reference to 
https://umijs.org/docs/guides/config-convention`
      );
      throw Error(`Can't modify config file, due to file format`);
    }
  }
  return ast;
}
var config = { dva: {} };
var setConfigByName_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setConfigByName
});
