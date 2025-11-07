"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SketchPresetColors = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("../common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    onSwatchHover = _ref.onSwatchHover;
  var styles = {
    colors: {
      margin: '0 -10px',
      padding: '10px 0 0 10px',
      borderTop: '1px solid #eee',
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative'
    },
    swatchWrap: {
      width: '16px',
      height: '16px',
      margin: '0 10px 10px 0'
    },
    swatch: {
      msBorderRadius: '3px',
      MozBorderRadius: '3px',
      OBorderRadius: '3px',
      WebkitBorderRadius: '3px',
      borderRadius: '3px',
      msBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      MozBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      OBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      WebkitBoxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
    }
  };
  var handleClick = function handleClick(hex, e) {
    onClick === null || onClick === void 0 ? void 0 : onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles.colors,
    className: "flexbox-fix"
  }, colors === null || colors === void 0 ? void 0 : colors.map(function (colorObjOrString) {
    var c = typeof colorObjOrString === 'string' ? {
      color: colorObjOrString,
      title: undefined
    } : colorObjOrString;
    var key = "".concat(c.color).concat((c === null || c === void 0 ? void 0 : c.title) || '');
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key,
      style: styles.swatchWrap
    }, /*#__PURE__*/_react.default.createElement(_common.Swatch, _objectSpread(_objectSpread({}, c), {}, {
      style: styles.swatch,
      onClick: handleClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ".concat(c.color)
      }
    })));
  }));
};
exports.SketchPresetColors = SketchPresetColors;
var _default = SketchPresetColors;
exports.default = _default;