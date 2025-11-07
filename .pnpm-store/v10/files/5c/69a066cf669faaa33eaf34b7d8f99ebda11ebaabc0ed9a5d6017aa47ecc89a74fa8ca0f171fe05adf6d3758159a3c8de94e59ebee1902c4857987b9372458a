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

// src/features/lowImport/babelPlugin.ts
var babelPlugin_exports = {};
__export(babelPlugin_exports, {
  default: () => babelPlugin_default
});
module.exports = __toCommonJS(babelPlugin_exports);
var import_helper_module_imports = require("@umijs/bundler-utils/compiled/babel/helper-module-imports");
var t = __toESM(require("@umijs/bundler-utils/compiled/babel/types"));
var import_path = require("path");
var CACHE_LIBS = "cacheLibs";
function save(file, libName, name, newNode) {
  const cacheLibs = file.get(CACHE_LIBS);
  const cache = cacheLibs[libName] || {};
  cache[name] = newNode;
  cacheLibs[libName] = cache;
  file.set(CACHE_LIBS, cacheLibs);
}
function getCache(file, libName, name) {
  const cacheLibs = file.get(CACHE_LIBS);
  const cache = cacheLibs[libName] || {};
  return cache[name];
}
function replaceWith(path, name, libName, file, getNode) {
  let newNode = getCache(file, name, libName);
  if (!newNode) {
    newNode = getNode();
    save(file, name, libName, newNode);
  }
  path.replaceWith(newNode);
}
function babelPlugin_default() {
  return {
    pre(file) {
      file.set(CACHE_LIBS, {});
    },
    visitor: {
      Identifier(path, state) {
        var _a, _b, _c, _d, _e;
        const { name } = path.node;
        if (path.scope.hasBinding(path.node.name)) {
          return;
        }
        const parentNode = path.parentPath.node;
        if (t.isImportSpecifier(parentNode) || t.isImportDefaultSpecifier(parentNode) || t.isImportNamespaceSpecifier(parentNode)) {
          return;
        }
        if (t.isMemberExpression(parentNode) && path.node === parentNode.property) {
          return;
        }
        if (t.isObjectProperty(parentNode) && path.node === parentNode.key) {
          return;
        }
        if ((_a = state.opts.opts.identifierToLib) == null ? void 0 : _a.hasOwnProperty(name)) {
          const libName = state.opts.opts.identifierToLib[name];
          replaceWith(
            path,
            name,
            libName,
            state.file,
            () => (0, import_helper_module_imports.addNamed)(path, name, libName)
          );
        } else if ((_b = state.opts.opts.defaultToLib) == null ? void 0 : _b.hasOwnProperty(name)) {
          const libName = state.opts.opts.defaultToLib[name];
          replaceWith(
            path,
            name,
            libName,
            state.file,
            () => (0, import_helper_module_imports.addDefault)(path, libName, {
              nameHint: name
            })
          );
        } else if ((_c = state.opts.opts.namespaceToLib) == null ? void 0 : _c.hasOwnProperty(name)) {
          const libName = state.opts.opts.namespaceToLib[name];
          replaceWith(
            path,
            name,
            libName,
            state.file,
            () => (0, import_helper_module_imports.addNamespace)(path, libName)
          );
        }
        if (name === "styles" && state.opts.css) {
          const { filename } = state.file.opts;
          const cssFilename = (0, import_path.basename)(filename, (0, import_path.extname)(filename)) + "." + state.opts.css;
          replaceWith(
            path,
            name,
            "./" + cssFilename,
            state.file,
            () => (0, import_helper_module_imports.addDefault)(path, "./" + cssFilename, { nameHint: name })
          );
        }
        if ((_d = state.opts.umiImportItems) == null ? void 0 : _d.includes(name)) {
          replaceWith(
            path,
            name,
            "umi",
            state.file,
            () => (0, import_helper_module_imports.addNamed)(path, name, "umi")
          );
        }
        if (name === "React") {
          replaceWith(
            path,
            name,
            "react",
            state.file,
            () => (0, import_helper_module_imports.addDefault)(path, "react", { nameHint: name })
          );
        }
        if ((_e = state.opts.reactImportItems) == null ? void 0 : _e.includes(name)) {
          replaceWith(
            path,
            name,
            "react",
            state.file,
            () => (0, import_helper_module_imports.addNamed)(path, name, "react")
          );
        }
      },
      MemberExpression(path, state) {
        var _a, _b;
        const { object, property } = path.node;
        if (path.scope.hasBinding(object.name)) {
          return;
        }
        const parentNode = path.parentPath.node;
        if (t.isImportSpecifier(parentNode) || t.isImportDefaultSpecifier(parentNode) || t.isImportNamespaceSpecifier(parentNode)) {
          return;
        }
        if (((_a = state.opts.opts.withObjs) == null ? void 0 : _a[object.name]) && (((_b = state.opts.opts.withObjs) == null ? void 0 : _b[object.name].members) || []).includes(
          property.name
        )) {
          const libName = state.opts.opts.withObjs[object.name].importFrom;
          replaceWith(
            path,
            property.name,
            libName,
            state.file,
            () => (0, import_helper_module_imports.addNamed)(path, property.name, libName)
          );
        }
      }
    }
  };
}
