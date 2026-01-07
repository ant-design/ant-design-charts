'use strict';

var helperModuleImports = require('@babel/helper-module-imports');
var t = require('@babel/types');
var babelPluginMacros = require('babel-plugin-macros');

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

var t__namespace = /*#__PURE__*/_interopNamespaceDefault(t);

var macro = function macro(_ref) {
  var _references$useProxy;
  var references = _ref.references;
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[DEPRECATED] Use useProxy hook instead.');
  }
  (_references$useProxy = references.useProxy) == null || _references$useProxy.forEach(function (path) {
    var _path$parentPath, _path$parentPath2, _path$parentPath3;
    var hook = helperModuleImports.addNamed(path, 'useSnapshot', 'valtio');
    var proxy = (_path$parentPath = path.parentPath) == null || (_path$parentPath = _path$parentPath.get('arguments.0')) == null ? void 0 : _path$parentPath.node;
    if (!t__namespace.isIdentifier(proxy)) throw new babelPluginMacros.MacroError('no proxy object');
    var snap = t__namespace.identifier("valtio_macro_snap_" + proxy.name);
    (_path$parentPath2 = path.parentPath) == null || (_path$parentPath2 = _path$parentPath2.parentPath) == null || _path$parentPath2.replaceWith(t__namespace.variableDeclaration('const', [t__namespace.variableDeclarator(snap, t__namespace.callExpression(hook, [proxy]))]));
    var inFunction = 0;
    (_path$parentPath3 = path.parentPath) == null || (_path$parentPath3 = _path$parentPath3.getFunctionParent()) == null || _path$parentPath3.traverse({
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
};
var macro$1 = babelPluginMacros.createMacro(macro, {
  configName: 'valtio'
});

module.exports = macro$1;
