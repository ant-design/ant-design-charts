"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Swatch = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactcss = _interopRequireDefault(require("reactcss"));
var _interaction = require("../../helpers/interaction");
var _Checkboard = _interopRequireDefault(require("./Checkboard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ENTER = 13;
var Swatch = function Swatch(_ref) {
  var color = _ref.color,
    style = _ref.style,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    onHover = _ref.onHover,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? color : _ref$title,
    children = _ref.children,
    focus = _ref.focus,
    _ref$focusStyle = _ref.focusStyle,
    focusStyle = _ref$focusStyle === void 0 ? {} : _ref$focusStyle;
  var transparent = color === 'transparent';
  var styles = (0, _reactcss.default)({
    default: {
      swatch: _objectSpread(_objectSpread({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style), focus ? focusStyle : {})
    }
  });
  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover = function handleHover(e) {
    return onHover(color, e);
  };
  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover;
  }
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    style: styles.swatch,
    onClick: handleClick,
    title: title,
    tabIndex: 0,
    onKeyDown: handleKeyDown
  }, optionalEvents), children, transparent && /*#__PURE__*/_react.default.createElement(_Checkboard.default, {
    borderRadius: styles.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }));
};
exports.Swatch = Swatch;
var _default = (0, _interaction.handleFocus)(Swatch);
exports.default = _default;