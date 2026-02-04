var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Plugin.js
var Plugin_exports = {};
__export(Plugin_exports, {
  default: () => Plugin
});
module.exports = __toCommonJS(Plugin_exports);
var import_path = require("path");
var import_helper_module_imports = require("@babel/helper-module-imports");
function transCamel(_str, symbol) {
  const cells = _str.match(/([A-Z]+(?=[A-Z]|$))|([A-Z]?[^A-Z]+)/g) || [];
  return cells.map((c) => c.toLowerCase()).join(symbol);
}
function winPath(path) {
  return path.replace(/\\/g, "/");
}
function normalizeCustomName(originCustomName) {
  if (typeof originCustomName === "string") {
    const customNameExports = require(originCustomName);
    return typeof customNameExports === "function" ? customNameExports : customNameExports.default;
  }
  return originCustomName;
}
var Plugin = class {
  constructor(libraryName, libraryDirectory, style, styleLibraryDirectory, customStyleName, camel2DashComponentName, camel2UnderlineComponentName, fileName, customName, transformToDefaultImport, types, index = 0) {
    this.libraryName = libraryName;
    this.libraryDirectory = typeof libraryDirectory === "undefined" ? "lib" : libraryDirectory;
    this.camel2DashComponentName = typeof camel2DashComponentName === "undefined" ? true : camel2DashComponentName;
    this.camel2UnderlineComponentName = camel2UnderlineComponentName;
    this.style = style || false;
    this.styleLibraryDirectory = styleLibraryDirectory;
    this.customStyleName = normalizeCustomName(customStyleName);
    this.fileName = fileName || "";
    this.customName = normalizeCustomName(customName);
    this.transformToDefaultImport = typeof transformToDefaultImport === "undefined" ? true : transformToDefaultImport;
    this.types = types;
    this.pluginStateKey = `importPluginState${index}`;
  }
  getPluginState(state) {
    if (!state[this.pluginStateKey]) {
      state[this.pluginStateKey] = {};
    }
    return state[this.pluginStateKey];
  }
  importMethod(methodName, file, pluginState) {
    if (!pluginState.selectedMethods[methodName]) {
      const { style, libraryDirectory } = this;
      const transformedMethodName = this.camel2UnderlineComponentName ? transCamel(methodName, "_") : this.camel2DashComponentName ? transCamel(methodName, "-") : methodName;
      const path = winPath(
        this.customName ? this.customName(transformedMethodName, file) : (0, import_path.join)(this.libraryName, libraryDirectory, transformedMethodName, this.fileName)
        // eslint-disable-line
      );
      pluginState.selectedMethods[methodName] = this.transformToDefaultImport ? (0, import_helper_module_imports.addDefault)(file.path, path, { nameHint: methodName }) : (0, import_helper_module_imports.addNamed)(file.path, methodName, path);
      if (this.customStyleName) {
        const stylePath = winPath(this.customStyleName(transformedMethodName, file));
        (0, import_helper_module_imports.addSideEffect)(file.path, `${stylePath}`);
      } else if (this.styleLibraryDirectory) {
        const stylePath = winPath(
          (0, import_path.join)(this.libraryName, this.styleLibraryDirectory, transformedMethodName, this.fileName)
        );
        (0, import_helper_module_imports.addSideEffect)(file.path, `${stylePath}`);
      } else if (style === true) {
        (0, import_helper_module_imports.addSideEffect)(file.path, `${path}/style`);
      } else if (style === "css") {
        (0, import_helper_module_imports.addSideEffect)(file.path, `${path}/style/css`);
      } else if (typeof style === "function") {
        const stylePath = style(path, file);
        if (stylePath) {
          (0, import_helper_module_imports.addSideEffect)(file.path, stylePath);
        }
      }
    }
    return { ...pluginState.selectedMethods[methodName] };
  }
  buildExpressionHandler(node, props, path, state) {
    const file = path && path.hub && path.hub.file || state && state.file;
    const { types } = this;
    const pluginState = this.getPluginState(state);
    props.forEach((prop) => {
      if (!types.isIdentifier(node[prop]))
        return;
      if (pluginState.specified[node[prop].name] && types.isImportSpecifier(path.scope.getBinding(node[prop].name).path)) {
        node[prop] = this.importMethod(pluginState.specified[node[prop].name], file, pluginState);
      }
    });
  }
  buildDeclaratorHandler(node, prop, path, state) {
    const file = path && path.hub && path.hub.file || state && state.file;
    const { types } = this;
    const pluginState = this.getPluginState(state);
    const checkScope = (targetNode) => pluginState.specified[targetNode.name] && // eslint-disable-line
    path.scope.hasBinding(targetNode.name) && // eslint-disable-line
    path.scope.getBinding(targetNode.name).path.type === "ImportSpecifier";
    if (types.isIdentifier(node[prop]) && checkScope(node[prop])) {
      node[prop] = this.importMethod(pluginState.specified[node[prop].name], file, pluginState);
    } else if (types.isSequenceExpression(node[prop])) {
      node[prop].expressions.forEach((expressionNode, index) => {
        if (types.isIdentifier(expressionNode) && checkScope(expressionNode)) {
          node[prop].expressions[index] = this.importMethod(
            pluginState.specified[expressionNode.name],
            file,
            pluginState
          );
        }
      });
    }
  }
  ProgramEnter(path, state) {
    const pluginState = this.getPluginState(state);
    pluginState.specified = /* @__PURE__ */ Object.create(null);
    pluginState.libraryObjs = /* @__PURE__ */ Object.create(null);
    pluginState.selectedMethods = /* @__PURE__ */ Object.create(null);
    pluginState.pathsToRemove = [];
  }
  ProgramExit(path, state) {
    this.getPluginState(state).pathsToRemove.forEach((p) => !p.removed && p.remove());
  }
  ImportDeclaration(path, state) {
    const { node } = path;
    if (!node)
      return;
    const { value } = node.source;
    const { libraryName } = this;
    const { types } = this;
    const pluginState = this.getPluginState(state);
    if (value === libraryName) {
      node.specifiers.forEach((spec) => {
        if (types.isImportSpecifier(spec)) {
          pluginState.specified[spec.local.name] = spec.imported.name;
        } else {
          pluginState.libraryObjs[spec.local.name] = true;
        }
      });
      pluginState.pathsToRemove.push(path);
    }
  }
  CallExpression(path, state) {
    const { node } = path;
    const file = path && path.hub && path.hub.file || state && state.file;
    const { name } = node.callee;
    const { types } = this;
    const pluginState = this.getPluginState(state);
    if (types.isIdentifier(node.callee)) {
      if (pluginState.specified[name]) {
        node.callee = this.importMethod(pluginState.specified[name], file, pluginState);
      }
    }
    node.arguments = node.arguments.map((arg) => {
      const { name: argName } = arg;
      if (pluginState.specified[argName] && path.scope.hasBinding(argName) && path.scope.getBinding(argName).path.type === "ImportSpecifier") {
        return this.importMethod(pluginState.specified[argName], file, pluginState);
      }
      return arg;
    });
  }
  MemberExpression(path, state) {
    const { node } = path;
    const file = path && path.hub && path.hub.file || state && state.file;
    const pluginState = this.getPluginState(state);
    if (!node.object || !node.object.name)
      return;
    if (pluginState.libraryObjs[node.object.name]) {
      path.replaceWith(this.importMethod(node.property.name, file, pluginState));
    } else if (pluginState.specified[node.object.name] && path.scope.hasBinding(node.object.name)) {
      const { scope } = path.scope.getBinding(node.object.name);
      if (scope.path.parent.type === "File") {
        node.object = this.importMethod(pluginState.specified[node.object.name], file, pluginState);
      }
    }
  }
  Property(path, state) {
    const { node } = path;
    this.buildDeclaratorHandler(node, "value", path, state);
  }
  VariableDeclarator(path, state) {
    const { node } = path;
    this.buildDeclaratorHandler(node, "init", path, state);
  }
  ArrayExpression(path, state) {
    const { node } = path;
    const props = node.elements.map((_, index) => index);
    this.buildExpressionHandler(node.elements, props, path, state);
  }
  LogicalExpression(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["left", "right"], path, state);
  }
  ConditionalExpression(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["test", "consequent", "alternate"], path, state);
  }
  IfStatement(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["test"], path, state);
    this.buildExpressionHandler(node.test, ["left", "right"], path, state);
  }
  ExpressionStatement(path, state) {
    const { node } = path;
    const { types } = this;
    if (types.isAssignmentExpression(node.expression)) {
      this.buildExpressionHandler(node.expression, ["right"], path, state);
    }
  }
  ReturnStatement(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["argument"], path, state);
  }
  ExportDefaultDeclaration(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["declaration"], path, state);
  }
  BinaryExpression(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["left", "right"], path, state);
  }
  NewExpression(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["callee"], path, state);
    const argumentsProps = node.arguments.map((_, index) => index);
    this.buildExpressionHandler(node.arguments, argumentsProps, path, state);
  }
  SwitchStatement(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["discriminant"], path, state);
  }
  SwitchCase(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["test"], path, state);
  }
  ClassDeclaration(path, state) {
    const { node } = path;
    this.buildExpressionHandler(node, ["superClass"], path, state);
  }
  SequenceExpression(path, state) {
    const { node } = path;
    const expressionsProps = node.expressions.map((_, index) => index);
    this.buildExpressionHandler(node.expressions, expressionsProps, path, state);
  }
};
