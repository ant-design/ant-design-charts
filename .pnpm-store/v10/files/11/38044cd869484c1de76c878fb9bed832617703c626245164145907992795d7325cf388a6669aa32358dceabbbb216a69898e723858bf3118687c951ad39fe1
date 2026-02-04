function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import reactCSS from 'reactcss';
import merge from 'lodash/merge';
import { ColorWrap, Saturation, Hue, Alpha, Checkboard } from '../common';
import SketchFields from './SketchFields';
import SketchPresetColors from './SketchPresetColors';
export var Sketch = function Sketch(_ref) {
  var width = _ref.width,
    rgb = _ref.rgb,
    hex = _ref.hex,
    hsv = _ref.hsv,
    hsl = _ref.hsl,
    onChange = _ref.onChange,
    onSwatchHover = _ref.onSwatchHover,
    disableAlpha = _ref.disableAlpha,
    presetColors = _ref.presetColors,
    renderers = _ref.renderers,
    _ref$styles = _ref.styles,
    passedStyles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var styles = reactCSS(
  //@ts-ignore
  merge({
    default: _objectSpread({
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"),
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    }, passedStyles),
    disableAlpha: {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, passedStyles), {
    disableAlpha: disableAlpha
  });
  return /*#__PURE__*/React.createElement("div", {
    style: styles.picker,
    className: "sketch-picker ".concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.saturation
  }, /*#__PURE__*/React.createElement(Saturation, {
    style: styles.Saturation,
    hsl: hsl,
    hsv: hsv,
    onChange: onChange
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.controls,
    className: "flexbox-fix"
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.sliders
  }, /*#__PURE__*/React.createElement("div", {
    style: styles.hue
  }, /*#__PURE__*/React.createElement(Hue, {
    style: styles.Hue,
    hsl: hsl,
    onChange: onChange
  })), /*#__PURE__*/React.createElement("div", {
    style: styles.alpha
  }, /*#__PURE__*/React.createElement(Alpha, {
    style: styles.Alpha,
    rgb: rgb,
    hsl: hsl,
    renderers: renderers,
    onChange: onChange
  }))), /*#__PURE__*/React.createElement("div", {
    style: styles.color
  }, /*#__PURE__*/React.createElement(Checkboard, null), /*#__PURE__*/React.createElement("div", {
    style: styles.activeColor
  }))), /*#__PURE__*/React.createElement(SketchFields, {
    rgb: rgb,
    hsl: hsl,
    hex: hex,
    onChange: onChange,
    disableAlpha: disableAlpha
  }), /*#__PURE__*/React.createElement(SketchPresetColors, {
    colors: presetColors,
    onClick: onChange,
    onSwatchHover: onSwatchHover
  }));
};
Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};
var SketchPicker = ColorWrap(Sketch);
export { SketchPicker };