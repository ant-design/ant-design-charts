function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { isValidElement } from 'react';
import reactCSS from 'reactcss';
import * as checkboard from '../../helpers/checkboard';
export var Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
    grey = _ref.grey,
    size = _ref.size,
    renderers = _ref.renderers,
    borderRadius = _ref.borderRadius,
    boxShadow = _ref.boxShadow,
    children = _ref.children;
  var styles = reactCSS({
    default: {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: "url(".concat(checkboard.get(white, grey, size, renderers.canvas), ") center left")
      }
    }
  });
  return /*#__PURE__*/isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, children.props), {}, {
    style: _objectSpread(_objectSpread({}, children.props.style), styles.grid)
  })) : /*#__PURE__*/React.createElement("div", {
    style: styles.grid
  });
};
Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};
export default Checkboard;