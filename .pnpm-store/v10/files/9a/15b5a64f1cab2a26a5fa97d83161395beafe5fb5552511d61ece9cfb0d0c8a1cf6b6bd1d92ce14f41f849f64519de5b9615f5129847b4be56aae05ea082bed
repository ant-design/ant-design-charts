function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var stringToStopParam = function stringToStopParam(str) {
  // rgb(0, 0, 0) 20% 需要拆分
  var _str$split$filter = str.split(/\s+(?=[^)]*(\(|$))/).filter(function (item) {
      return item;
    }),
    _str$split$filter2 = _toArray(_str$split$filter),
    color = _str$split$filter2[0],
    offsets = _str$split$filter2.slice(1);
  if (offsets.length === 0) {
    return color;
  }
  if (offsets.length === 1) {
    return {
      color: color,
      offset: parseFloat(offsets[0]) / 100
    };
  }
  return offsets.map(function (offset) {
    return {
      color: color,
      offset: parseFloat(offset) / 100
    };
  });
};
var pushStopParam = function pushStopParam(stopParams, str) {
  var stopParam = stringToStopParam(str);
  if (Array.isArray(stopParam)) {
    stopParams.push.apply(stopParams, _toConsumableArray(stopParam));
  } else {
    stopParams.push(stopParam);
  }
};

/**
 * 解析线性渐变
 *
 * ---
 * <linear-gradient> = linear-gradient(
 * [ [ <angle> | to <side-or-corner> ] ,]?
 * <color-stop>[, <color-stop>]+
 * )
 *
 * <side-or-corner> = [left | right] || [top | bottom]
 *
 * ---
 * * Example: "to top, rgba(67, 90, 111, 0.04), white"
 *
 * @param value
 * @see https://www.w3.org/TR/css3-images/#linear-gradients
 */
export var parseLinearGradient = function parseLinearGradient(value) {
  var parts = [];
  var currentPart = [];
  var i = 0;
  var skipComma = false;

  // There can be commas in colors, carefully break apart the value
  while (i < value.length) {
    var char = value.substr(i, 1);
    if (char === '(') {
      skipComma = true;
    } else if (char === ')') {
      skipComma = false;
    }
    if (char === ',' && !skipComma) {
      parts.push(currentPart.join('').trim());
      currentPart = [];
    } else {
      currentPart.push(char);
    }
    if (i === value.length - 1) {
      parts.push(currentPart.join('').trim());
    }
    i += 1;
  }
  if (parts.length < 2) {
    throw Error('Invalid linear-gradient value: ' + value);
  }
  return parts.reduce(function (result, part, index) {
    if (index === 0) {
      // 第一个参数不是角度的话默认 180deg
      if (part.includes('to') || part.includes('deg') || part.includes('rad') || part.includes('turn')) {
        result.angle = part;
      } else {
        pushStopParam(result.stops, part);
      }
      return result;
    }
    pushStopParam(result.stops, part);
    return result;
  }, {
    angle: '180deg',
    stops: []
  });
};

/**
 * 解析背景图片类型
 * The structure is as follows:
 * (Supports images and gradients)
 *
 * ---
 * <background-image> = <bg-image> [ , <bg-image> ]*
 * <bg-image> = <image> | none
 * <image> = <url> | <image-list> | <element-reference> | <image-combination> | <gradient>
 * ---
 * @param value
 * @see: https://www.w3.org/TR/css-backgrounds-3/#the-background-image
 * ---
 */
export var parseBackgroundImageType = function parseBackgroundImageType(value) {
  if (value === 'none') {
    return;
  }
  var urlMatches = value.match(/^url\("(.+)"\)$/i);
  var linearGradientMatches = value.match(/^linear-gradient\((.+)\)$/i);
  var radialGradientMatches = value.match(/^radial-gradient\((.+)\)$/i);
  if (urlMatches && urlMatches.length === 2) {
    // Image
    // eslint-disable-next-line consistent-return
    return {
      type: 'Image',
      value: urlMatches[1]
    };
  }
  if (linearGradientMatches && linearGradientMatches.length === 2) {
    // Linear gradient
    var linearGradientConfig = parseLinearGradient(linearGradientMatches[1]);
    if (linearGradientConfig) {
      // eslint-disable-next-line consistent-return
      return {
        type: 'LinearGradient',
        value: linearGradientConfig
      };
    }
  }
  if (radialGradientMatches && radialGradientMatches.length === 2) {
    // 辐射渐变
    // const linearGradientConfig = parseLinearGradient(linearGradientMatches[1]);

    if (radialGradientMatches) {
      // eslint-disable-next-line consistent-return
      return {
        type: 'radialGradient',
        value: ''
      };
    }
  }
};

/**
 * 获取真实图像尺寸
 * @param {string} backgroundSize value of background-size CSS property
 * @param {{width: number, height: number}} imageSize natural size of the image
 * @param {{width: number, height: number}} containerSize size of the container
 * @return {{width: number, height: number}} actual image size
 */
export var getActualImageSize = function getActualImageSize(backgroundSize, imageSize, containerSize) {
  var width = 0;
  var height = 0;
  var imgH = imageSize.height,
    imgW = imageSize.width;

  // sanity check
  if (imgW === 0 || imgH === 0 || containerSize.width === 0 || containerSize.height === 0) {
    width = 0;
    height = 0;
  } else if (backgroundSize === 'cover') {
    if (imgW > imgH) {
      height = containerSize.height;
      width = height / imgH * imgW;
    } else {
      width = containerSize.width;
      height = width / imgW * imgH;
    }
  } else if (backgroundSize === 'contain') {
    if (imgW > imgH) {
      width = containerSize.width;
      height = width / imgW * imgH;
    } else {
      height = containerSize.height;
      width = height / imgH * imgW;
    }
  } else if (backgroundSize === 'auto') {
    width = imgW;
    height = imgH;
  } else {
    // we currently don't support multiple backgrounds
    var _backgroundSize$split = backgroundSize.split(','),
      _backgroundSize$split2 = _slicedToArray(_backgroundSize$split, 1),
      singleBackgroundSize = _backgroundSize$split2[0];
    var _singleBackgroundSize = singleBackgroundSize.trim().split(' '),
      _singleBackgroundSize2 = _slicedToArray(_singleBackgroundSize, 2),
      backgroundSizeWidth = _singleBackgroundSize2[0],
      backgroundSizeHeight = _singleBackgroundSize2[1];
    if (backgroundSizeWidth === 'auto' || backgroundSizeWidth === undefined) {
      backgroundSizeWidth = '';
    } else if (backgroundSizeWidth.endsWith('%')) {
      backgroundSizeWidth = (parseFloat(backgroundSizeWidth) / 100 * containerSize.width).toString();
    } else if (backgroundSizeWidth.endsWith('px')) {
      backgroundSizeWidth = parseFloat(backgroundSizeWidth).toString();
    }
    if (backgroundSizeHeight === 'auto' || backgroundSizeHeight === undefined) {
      backgroundSizeHeight = '';
    } else if (backgroundSizeHeight.endsWith('%')) {
      backgroundSizeHeight = (parseFloat(backgroundSizeHeight) / 100 * containerSize.height).toString();
    } else if (backgroundSizeHeight.endsWith('px')) {
      backgroundSizeHeight = parseFloat(backgroundSizeHeight).toString();
    }
    if (backgroundSizeWidth !== '' && backgroundSizeHeight === '') {
      width = Number(backgroundSizeWidth);
      height = width / imgW * imgH;
    } else if (backgroundSizeWidth === '' && backgroundSizeHeight !== '') {
      height = Number(backgroundSizeHeight);
      width = height / imgH * imgW;
    } else if (backgroundSizeWidth !== '' && backgroundSizeHeight !== '') {
      width = Number(backgroundSizeWidth);
      height = Number(backgroundSizeHeight);
    }
  }
  return {
    width: width,
    height: height
  };
};