/* global test, expect, describe */

import * as color from './color';
describe('helpers/color', function () {
  describe('simpleCheckForValidColor', function () {
    test('throws on null', function () {
      var data = null;
      expect(function () {
        return color.simpleCheckForValidColor(data);
      }).toThrowError(TypeError);
    });
    test('throws on undefined', function () {
      var data = undefined;
      expect(function () {
        return color.simpleCheckForValidColor(data);
      }).toThrowError(TypeError);
    });
    test('no-op on number', function () {
      var data = 255;
      expect(color.simpleCheckForValidColor(data)).toEqual(data);
    });
    test('no-op on NaN', function () {
      var data = NaN;
      expect(isNaN(color.simpleCheckForValidColor(data))).toBeTruthy();
    });
    test('no-op on string', function () {
      var data = 'ffffff';
      expect(color.simpleCheckForValidColor(data)).toEqual(data);
    });
    test('no-op on array', function () {
      var data = [];
      expect(color.simpleCheckForValidColor(data)).toEqual(data);
    });
    test('no-op on rgb objects with numeric keys', function () {
      var data = {
        r: 0,
        g: 0,
        b: 0
      };
      expect(color.simpleCheckForValidColor(data)).toEqual(data);
    });
    test('no-op on an object with an r g b a h s v key mapped to a NaN value', function () {
      var data = {
        r: NaN
      };
      expect(color.simpleCheckForValidColor(data)).toEqual(data);
    });
    test('no-op on hsl "s" percentage', function () {
      var data = {
        s: '15%'
      };
      expect(color.simpleCheckForValidColor(data)).toEqual(data);
    });
    test('no-op on hsl "l" percentage', function () {
      var data = {
        l: '100%'
      };
      expect(color.simpleCheckForValidColor(data)).toEqual(data);
    });
    test('should return false for invalid percentage', function () {
      var data = {
        l: '100%2'
      };
      expect(color.simpleCheckForValidColor(data)).toBe(false);
    });
  });
  describe('toState', function () {
    test('returns an object giving a color in all formats', function () {
      expect(color.toState('red')).toEqual({
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
        },
        oldHue: 0,
        source: undefined
      });
    });
    test('gives hex color with leading hash', function () {
      expect(color.toState('blue').hex).toEqual('#0000ff');
    });
    test('doesn\'t mutate hsl color object', function () {
      var originalData = {
        h: 0,
        s: 0,
        l: 0,
        a: 1
      };
      var data = Object.assign({}, originalData);
      color.toState(data);
      expect(data).toEqual(originalData);
    });
    test('doesn\'t mutate hsv color object', function () {
      var originalData = {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      };
      var data = Object.assign({}, originalData);
      color.toState(data);
      expect(data).toEqual(originalData);
    });
  });
  describe('isValidHex', function () {
    test('allows strings of length 3 or 6', function () {
      expect(color.isValidHex('f')).toBeFalsy();
      expect(color.isValidHex('ff')).toBeFalsy();
      expect(color.isValidHex('fff')).toBeTruthy();
      expect(color.isValidHex('ffff')).toBeFalsy();
      expect(color.isValidHex('fffff')).toBeFalsy();
      expect(color.isValidHex('ffffff')).toBeTruthy();
      expect(color.isValidHex('fffffff')).toBeFalsy();
      expect(color.isValidHex('ffffffff')).toBeFalsy();
      expect(color.isValidHex('fffffffff')).toBeFalsy();
      expect(color.isValidHex('ffffffffff')).toBeFalsy();
      expect(color.isValidHex('fffffffffff')).toBeFalsy();
      expect(color.isValidHex('ffffffffffff')).toBeFalsy();
    });
    test('allows strings without leading hash', function () {
      // Check a sample of possible colors - doing all takes too long.
      for (var i = 0; i <= 0xffffff; i += 0x010101) {
        var hex = "000000".concat(i.toString(16)).slice(-6);
        expect(color.isValidHex(hex)).toBeTruthy();
      }
    });
    test('allows strings with leading hash', function () {
      // Check a sample of possible colors - doing all takes too long.
      for (var i = 0; i <= 0xffffff; i += 0x010101) {
        var hex = "000000".concat(i.toString(16)).slice(-6);
        expect(color.isValidHex("#".concat(hex))).toBeTruthy();
      }
    });
    test('is case-insensitive', function () {
      expect(color.isValidHex('ffffff')).toBeTruthy();
      expect(color.isValidHex('FfFffF')).toBeTruthy();
      expect(color.isValidHex('FFFFFF')).toBeTruthy();
    });
    test('allow transparent color', function () {
      expect(color.isValidHex('transparent')).toBeTruthy();
    });
    test('does not allow non-hex characters', function () {
      expect(color.isValidHex('gggggg')).toBeFalsy();
    });
    test('does not allow numbers', function () {
      expect(color.isValidHex(0xffffff)).toBeFalsy();
    });
  });
  describe('getContrastingColor', function () {
    test('returns a light color for a giving dark color', function () {
      expect(color.getContrastingColor('red')).toEqual('#fff');
    });
    test('returns a dark color for a giving light color', function () {
      expect(color.getContrastingColor('white')).toEqual('#000');
    });
    test('returns a predefined color for Transparent', function () {
      expect(color.getContrastingColor('transparent')).toEqual('rgba(0,0,0,0.4)');
    });
    test('returns a light color as default for undefined', function () {
      expect(color.getContrastingColor(undefined)).toEqual('#fff');
    });
  });
});
describe('validColorString', function () {
  test('checks for valid RGB string', function () {
    expect(color.isvalidColorString('23, 32, 3', 'rgb')).toBeTruthy();
    expect(color.isvalidColorString('290, 302, 3', 'rgb')).toBeTruthy();
    expect(color.isvalidColorString('23', 'rgb')).toBeFalsy();
    expect(color.isvalidColorString('230, 32', 'rgb')).toBeFalsy();
  });
  test('checks for valid HSL string', function () {
    expect(color.isvalidColorString('200, 12, 93', 'hsl')).toBeTruthy();
    expect(color.isvalidColorString('200, 12%, 93%', 'hsl')).toBeTruthy();
    expect(color.isvalidColorString('200, 120, 93%', 'hsl')).toBeTruthy();
    expect(color.isvalidColorString('335°, 64%, 99%', 'hsl')).toBeTruthy();
    expect(color.isvalidColorString('100', 'hsl')).toBeFalsy();
    expect(color.isvalidColorString('20, 32', 'hsl')).toBeFalsy();
  });
  test('checks for valid HSV string', function () {
    expect(color.isvalidColorString('200, 12, 93', 'hsv')).toBeTruthy();
    expect(color.isvalidColorString('200, 120, 93%', 'hsv')).toBeTruthy();
    expect(color.isvalidColorString('200°, 6%, 100%', 'hsv')).toBeTruthy();
    expect(color.isvalidColorString('1', 'hsv')).toBeFalsy();
    expect(color.isvalidColorString('20, 32', 'hsv')).toBeFalsy();
    expect(color.isvalidColorString('200°, ee3, 100%', 'hsv')).toBeFalsy();
  });
});