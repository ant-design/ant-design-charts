"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omitBy = _interopRequireDefault(require("lodash/omitBy"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _reactIs = require("react-is");

var _Debug = require("enzyme/build/Debug");

var _RSTTraversal = require("enzyme/build/RSTTraversal");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getChildren(node, options) {
  if (options.mode === 'shallow' && typeof node.type === 'function') {
    return null;
  }

  const children = (0, _utils.compact)((0, _RSTTraversal.childrenOfNode)(node).map(n => internalNodeToJson(n, options)));
  return children.length > 0 ? children : null;
}

function getProps(node, options) {
  const props = (0, _omitBy.default)(_objectSpread({}, (0, _RSTTraversal.propsOfNode)(node)), (val, key) => {
    return key === 'children' || val === undefined;
  });

  if (!(0, _isNil.default)(node.key) && options.noKey !== true) {
    props.key = node.key;
  }

  return props;
}

function internalNodeToJson(node, options) {
  if (typeof node === 'string' || typeof node === 'number') {
    return node;
  }

  if ((0, _isNil.default)(node) || node === false) {
    return '';
  }

  if (Array.isArray(node)) {
    // enzyme does some funny stuff with memo function components turning the children
    // into an array resulting in undesirable snapshots
    if (node.length === 1) {
      return internalNodeToJson(node[0], options);
    }

    return node.map(child => internalNodeToJson(child, options));
  }

  if (options.mode === 'deep' && (typeof node.type === 'function' || node.type.$$typeof === _reactIs.ForwardRef || node.type.$$typeof === _reactIs.Memo)) {
    return internalNodeToJson(node.rendered, options);
  }

  return (0, _utils.applyMap)({
    node,
    type: (0, _Debug.typeName)(node),
    props: getProps(node, options),
    children: getChildren(node, options),
    $$typeof: Symbol.for('react.test.json')
  }, options);
}

const mountToJson = (wrapper, options = {}) => {
  if ((0, _isNil.default)(wrapper) || wrapper.length === 0) {
    return null;
  }

  if (wrapper.length > 1 && typeof wrapper.getNodesInternal === 'function') {
    const nodes = wrapper.getNodesInternal();
    return nodes.map(node => internalNodeToJson(node, options));
  }

  if (typeof wrapper.getNodeInternal === 'function') {
    const node = wrapper.getNodeInternal();
    return internalNodeToJson(node, options);
  }

  return null;
};

var _default = mountToJson;
exports.default = _default;