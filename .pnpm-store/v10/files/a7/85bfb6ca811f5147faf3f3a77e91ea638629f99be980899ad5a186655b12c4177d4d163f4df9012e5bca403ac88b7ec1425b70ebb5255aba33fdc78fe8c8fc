'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var babelModuleImports = require('@babel/helper-module-imports');
var t = require('@babel/types');
var plugin = require('aslemammad-vite-plugin-macro');
var babelMacro = require('babel-plugin-macros');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var babelModuleImports__namespace = /*#__PURE__*/_interopNamespaceDefault(babelModuleImports);
var t__namespace = /*#__PURE__*/_interopNamespaceDefault(t);
var plugin__namespace = /*#__PURE__*/_interopNamespaceDefault(plugin);
var babelMacro__namespace = /*#__PURE__*/_interopNamespaceDefault(babelMacro);

var _ref = 'default' in plugin__namespace ? plugin__namespace.default : plugin__namespace,
  defineMacro = _ref.defineMacro,
  defineMacroProvider = _ref.defineMacroProvider,
  createMacroPlugin = _ref.createMacroPlugin;
var valtioMacro = defineMacro("useProxy").withSignature("<T extends object>(proxyObject: T): void").withHandler(function (ctx) {
  var _args$, _path$parentPath, _path$parentPath2;
  var path = ctx.path,
    args = ctx.args;
  var hook = babelModuleImports__namespace.addNamed(path, 'useSnapshot', 'valtio');
  var proxy = (_args$ = args[0]) == null ? void 0 : _args$.node;
  if (!t__namespace.isIdentifier(proxy)) {
    throw new babelMacro__namespace.MacroError('no proxy object');
  }
  var snap = t__namespace.identifier("valtio_macro_snap_" + proxy.name);
  (_path$parentPath = path.parentPath) == null || _path$parentPath.replaceWith(t__namespace.variableDeclaration('const', [t__namespace.variableDeclarator(snap, t__namespace.callExpression(hook, [proxy]))]));
  var inFunction = 0;
  (_path$parentPath2 = path.parentPath) == null || (_path$parentPath2 = _path$parentPath2.getFunctionParent()) == null || _path$parentPath2.traverse({
    Identifier: function Identifier(p) {
      if (inFunction === 0 && p.node !== proxy && p.node.name === proxy.name) {
        p.node.name = snap.name;
      }
    },
    Function: {
      enter: function enter() {
        ++inFunction;
      },
      exit: function exit() {
        --inFunction;
      }
    }
  });
});
function provideValtioMacro() {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[DEPRECATED] Use useProxy hook instead.');
  }
  return defineMacroProvider({
    id: 'valtio/macro',
    exports: {
      'valtio/macro': {
        macros: [valtioMacro]
      }
    }
  });
}
var macroPlugin = createMacroPlugin({}).use(provideValtioMacro());

exports.default = macroPlugin;
exports.provideValtioMacro = provideValtioMacro;
exports.valtioMacro = valtioMacro;
