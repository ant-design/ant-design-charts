"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omitBy = _interopRequireDefault(require("lodash/omitBy"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _reactIs = require("react-is");

var _RSTTraversal = require("enzyme/build/RSTTraversal");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChildren(node, options) {
  const children = (0, _utils.compact)((0, _RSTTraversal.childrenOfNode)(node).map(n => internalNodeToJson(n, options)));

  if (children.length > 0) {
    return children;
  }

  return null;
}

function getProps(node, options) {
  const props = (0, _omitBy.default)(Object.assign({}, (0, _RSTTraversal.propsOfNode)(node)), (val, key) => {
    if (key === 'children' || val === undefined) {
      return true;
    }

    if (options.ignoreDefaultProps === true && (0, _reactIs.isValidElementType)(node.type) && node.type.defaultProps && key in node.type.defaultProps && node.type.defaultProps[key] === val) {
      return true;
    }
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

  const json = (0, _utils.applyMap)({
    node,
    type: (0, _utils.extractTypeName)(node),
    props: getProps(node, options),
    children: getChildren(node, options),
    $$typeof: Symbol.for('react.test.json')
  }, options);

  if (!(0, _isNil.default)(json) && !(0, _isNil.default)(json.type)) {
    return json;
  }
}

const shallowToJson = (wrapper, options = {}) => {
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

var _default = shallowToJson;
exports.default = _default;