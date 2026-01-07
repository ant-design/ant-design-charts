import each from 'lodash/each';
import tinycolor from 'tinycolor2';
export var simpleCheckForValidColor = function simpleCheckForValidColor(data) {
  var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
  var checked = 0;
  var passed = 0;
  each(keysToCheck, function (letter) {
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
export var toState = function toState(data, oldHue) {
  // @ts-ignore
  var color = data.hex ? tinycolor(data.hex) : tinycolor(data);
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
export var isValidHex = function isValidHex(hex) {
  if (hex === 'transparent') {
    return true;
  }
  // disable hex4 and hex8
  var lh = String(hex).charAt(0) === '#' ? 1 : 0;
  // @ts-ignore
  return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid();
};
export var getContrastingColor = function getContrastingColor(data) {
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
export var red = {
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
export var isvalidColorString = function isvalidColorString(string, type) {
  var stringWithoutDegree = string.replace('°', '');
  // @ts-ignore
  return tinycolor("".concat(type, " (").concat(stringWithoutDegree, ")"))._ok;
};