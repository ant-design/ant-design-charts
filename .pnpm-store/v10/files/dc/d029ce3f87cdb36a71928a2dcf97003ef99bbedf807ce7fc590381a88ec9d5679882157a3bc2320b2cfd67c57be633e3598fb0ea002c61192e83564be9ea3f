"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _range = _interopRequireDefault(require("lodash/range"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderChildToJson = (child, options) => {
  if ((0, _isNil.default)(child)) {
    return null;
  }

  if (['tag', 'script'].includes(child.type)) {
    return (0, _utils.applyMap)({
      node: child,
      type: child.name,
      props: child.attribs,
      children: (0, _utils.compact)(child.children.map(c => renderChildToJson(c, options))),
      $$typeof: Symbol.for('react.test.json')
    }, options);
  } else if (child.type === 'text') {
    return child.data;
  }

  return null;
};

const renderToJson = (wrapper, options = {}) => {
  if ((0, _isNil.default)(wrapper) || wrapper.length === 0) {
    return null;
  }

  return wrapper.length > 1 ? (0, _range.default)(0, wrapper.length).map(node => renderChildToJson(wrapper[node], options)) : renderChildToJson(wrapper[0], options);
};

var _default = renderToJson;
exports.default = _default;