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

// src/features/hmrGuardian/babelPlugin.ts
var babelPlugin_exports = {};
__export(babelPlugin_exports, {
  defaultRenameVisitor: () => defaultRenameVisitor
});
module.exports = __toCommonJS(babelPlugin_exports);
var t = __toESM(require("@umijs/bundler-utils/compiled/babel/types"));
var import_utils = require("@umijs/utils");
var import_path = require("path");
function defaultRenameVisitor() {
  return {
    visitor: {
      // @ts-ignore
      ExportDefaultDeclaration: {
        enter(path, state) {
          const def = path.node.declaration;
          const { cwd, filename } = state.file.opts;
          const relativePath = (0, import_path.relative)(cwd, filename);
          if (/^\.(tsx|jsx)$/.test((0, import_path.extname)(relativePath)) && // hidden relativePath
          !/(^|\/)\.[^\/.]/g.test(relativePath) && !relativePath.includes("node_modules")) {
            let componentName = path2Component(relativePath);
            if (!componentName) {
              return;
            }
            const identifiers = Object.keys(path.scope.bindings || {});
            let idx = 0;
            while (identifiers.includes(componentName)) {
              componentName = `${componentName}${idx}`;
              idx += 1;
            }
            const named = t.identifier(componentName);
            if (t.isArrowFunctionExpression(def)) {
              const varDec = t.variableDeclaration("const", [
                t.variableDeclarator(named, def)
              ]);
              const [varDeclPath] = path.insertBefore(varDec);
              path.scope.registerDeclaration(varDeclPath);
              path.replaceWith(t.exportDefaultDeclaration(named));
            } else if (t.isFunctionDeclaration(def) && !def.id) {
              def.id = named;
            }
          }
        }
      }
    }
  };
}
function path2Component(filePath) {
  const { ext } = (0, import_path.parse)(filePath);
  return filePath.replace(ext, "").split(import_path.sep).map((item) => import_utils.lodash.upperFirst(item.replace(/\W/g, ""))).join("");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultRenameVisitor
});
