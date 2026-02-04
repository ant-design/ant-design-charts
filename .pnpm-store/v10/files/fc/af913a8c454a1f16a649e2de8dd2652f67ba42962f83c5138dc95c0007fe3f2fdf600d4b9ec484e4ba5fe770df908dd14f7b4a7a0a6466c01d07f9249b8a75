"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toState = exports.simpleCheckForValidColor = exports.red = exports.isvalidColorString = exports.isValidHex = exports.getContrastingColor = void 0;
var _each = _interopRequireDefault(require("lodash/each"));
var _tinycolor = _interopRequireDefault(require("tinycolor2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var simpleCheckForValidColor = function simpleCheckForValidColor(data) {
  var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
  var checked = 0;
  var passed = 0;
  (0, _each.default)(keysToCheck, function (letter) {
    if (data[letter]) {
      checked += 1;
      // @ts-ignore
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === 's' || letter === 'l') {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};
exports.simpleCheckForValidColor = simpleCheckForValidColor;
var toState = function toState(data, oldHue) {
  // @ts-ignore
  var color = data.hex ? (0, _tinycolor.default)(data.hex) : (0, _tinycolor.default)(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  var rgb = color.toRgb();
  var hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === '000000' && rgb.a === 0;
  return {
    hsl: hsl,
    hex: transparent ? 'transparent' : "#".concat(hex),
    rgb: rgb,
    hsv: hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};
exports.toState = toState;
var isValidHex = function isValidHex(hex) {
  if (hex === 'transparent') {
    return true;
  }
  // disable hex4 and hex8
  var lh = String(hex).charAt(0) === '#' ? 1 : 0;
  // @ts-ignore
  return hex.length !== 4 + lh && hex.length < 7 + lh && (0, _tinycolor.default)(hex).isValid();
};
exports.isValidHex = isValidHex;
var getContrastingColor = function getContrastingColor(data) {
  if (!data) {
    return '#fff';
  }
  var col = toState(data);
  if (col.hex === 'transparent') {
    return 'rgba(0,0,0,0.4)';
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};
exports.getContrastingColor = getContrastingColor;
var red = {
  hsl: {
    a: 1,
    h: 0,
    l: 0.5,
    s: 1
  },
  hex: '#ff0000',
  rgb: {
    r: 255,
    g: 0,
    b: 0,
    a: 1
  },
  hsv: {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  }
};
exports.red = red;
var isvalidColorString = function isvalidColorString(string, type) {
  var stringWithoutDegree = string.replace('°', '');
  // @ts-ignore
  return (0, _tinycolor.default)("".concat(type, " (").concat(stringWithoutDegree, ")"))._ok;
};
exports.isvalidColorString = isvalidColorString;