/*!
 * @antv/g-plugin-svg-renderer
 * @description A G plugin of renderer implementation with SVG
 * @version 2.2.24
 * @date 7/30/2025, 1:36:09 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
'use strict';

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _callSuper = require('@babel/runtime/helpers/callSuper');
var _inherits = require('@babel/runtime/helpers/inherits');
var gLite = require('@antv/g-lite');
var util = require('@antv/util');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var glMatrix = require('gl-matrix');
var _objectSpread = require('@babel/runtime/helpers/objectSpread2');

var ElementSVG = /*#__PURE__*/_createClass(function ElementSVG() {
  _classCallCheck(this, ElementSVG);
});
ElementSVG.tag = 'c-svg-element';

function updateImageElementAttribute($el, parsedStyle) {
  var _parsedStyle$src = parsedStyle.src,
    src = _parsedStyle$src === void 0 ? '' : _parsedStyle$src,
    _parsedStyle$x = parsedStyle.x,
    x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
    _parsedStyle$y = parsedStyle.y,
    y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
    width = parsedStyle.width,
    height = parsedStyle.height;
  $el.setAttribute('x', "".concat(x));
  $el.setAttribute('y', "".concat(y));
  if (util.isString(src)) {
    $el.setAttribute('href', src);
  } else if (src instanceof Image) {
    if (!width) {
      $el.setAttribute('width', "".concat(src.width));
    }
    if (!height) {
      $el.setAttribute('height', "".concat(src.height));
    }
    $el.setAttribute('href', src.src);
  } else if (
  // @ts-ignore
  src instanceof HTMLElement && util.isString(src.nodeName) && src.nodeName.toUpperCase() === 'CANVAS') {
    $el.setAttribute('href', src.toDataURL());
    // @ts-ignore
  } else if (src instanceof ImageData) {
    var canvas = document.createElement('canvas');
    // @ts-ignore
    canvas.setAttribute('width', "".concat(src.width));
    // @ts-ignore
    canvas.setAttribute('height', "".concat(src.height));
    var context = canvas.getContext('2d');
    if (context) {
      context.putImageData(src, 0, 0);
      if (!width) {
        // @ts-ignore
        $el.setAttribute('width', "".concat(src.width));
      }
      if (!height) {
        // @ts-ignore
        $el.setAttribute('height', "".concat(src.height));
      }
      $el.setAttribute('href', canvas.toDataURL());
    }
  }
}

function updateLineElementAttribute($el, parsedStyle) {
  var x1 = parsedStyle.x1,
    y1 = parsedStyle.y1,
    x2 = parsedStyle.x2,
    y2 = parsedStyle.y2,
    markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && gLite.isDisplayObject(markerStart) && markerStartOffset) {
    x = x2 - x1;
    y = y2 - y1;
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && gLite.isDisplayObject(markerEnd) && markerEndOffset) {
    x = x1 - x2;
    y = y1 - y2;
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }

  // @see https://github.com/antvis/g/issues/1038
  $el.setAttribute('x1', "".concat(x1 + startOffsetX));
  $el.setAttribute('y1', "".concat(y1 + startOffsetY));
  $el.setAttribute('x2', "".concat(x2 + endOffsetX));
  $el.setAttribute('y2', "".concat(y2 + endOffsetY));
}

function updatePathElementAttribute($el, parsedStyle) {
  var d = parsedStyle.d,
    markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && gLite.isDisplayObject(markerStart) && markerStartOffset) {
    var _getStartTangent = markerStart.parentNode.getStartTangent(),
      _getStartTangent2 = _slicedToArray(_getStartTangent, 2),
      p1 = _getStartTangent2[0],
      p2 = _getStartTangent2[1];
    x = p1[0] - p2[0];
    y = p1[1] - p2[1];
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && gLite.isDisplayObject(markerEnd) && markerEndOffset) {
    var _getEndTangent = markerEnd.parentNode.getEndTangent(),
      _getEndTangent2 = _slicedToArray(_getEndTangent, 2),
      _p = _getEndTangent2[0],
      _p2 = _getEndTangent2[1];
    x = _p[0] - _p2[0];
    y = _p[1] - _p2[1];
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  $el.setAttribute('d', gLite.translatePathToString(d.absolutePath, startOffsetX, startOffsetY, endOffsetX, endOffsetY));
}

function updatePolylineElementAttribute($el, parsedStyle) {
  var points = parsedStyle.points.points,
    markerStart = parsedStyle.markerStart,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEnd = parsedStyle.markerEnd,
    markerEndOffset = parsedStyle.markerEndOffset;
  var length = points.length;
  if (points && length >= 2) {
    var startOffsetX = 0;
    var startOffsetY = 0;
    var endOffsetX = 0;
    var endOffsetY = 0;
    var rad = 0;
    var x;
    var y;
    if (markerStart && gLite.isDisplayObject(markerStart) && markerStartOffset) {
      x = points[1][0] - points[0][0];
      y = points[1][1] - points[0][1];
      rad = Math.atan2(y, x);
      startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
      startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
    }
    if (markerEnd && gLite.isDisplayObject(markerEnd) && markerEndOffset) {
      x = points[length - 2][0] - points[length - 1][0];
      y = points[length - 2][1] - points[length - 1][1];
      rad = Math.atan2(y, x);
      endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
      endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
    }
    $el.setAttribute('points', points.map(function (point, i) {
      var offsetX = 0;
      var offsetY = 0;
      if (i === 0) {
        offsetX = startOffsetX;
        offsetY = startOffsetY;
      } else if (i === length - 1) {
        offsetX = endOffsetX;
        offsetY = endOffsetY;
      }
      return "".concat(point[0] + offsetX, ",").concat(point[1] + offsetY);
    }).join(' '));
  }
}

function updateRectElementAttribute($el, parsedStyle) {
  var radius = parsedStyle.radius,
    _parsedStyle$x = parsedStyle.x,
    x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
    _parsedStyle$y = parsedStyle.y,
    y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
    width = parsedStyle.width,
    height = parsedStyle.height;

  // CSSKeyword: auto
  if (!isFinite(width) || !isFinite(height)) {
    return;
  }
  var hasRadius = radius && radius.some(function (r) {
    return r !== 0;
  });
  var d = '';
  if (!hasRadius) {
    d = "M ".concat(x, ",").concat(y, " l ").concat(width, ",0 l 0,").concat(height, " l").concat(-width, " 0 z");
  } else {
    var _radius$map = radius.map(function (r) {
        return util.clamp(r, 0, Math.min(Math.abs(width) / 2, Math.abs(height) / 2));
      }),
      _radius$map2 = _slicedToArray(_radius$map, 4),
      tlr = _radius$map2[0],
      trr = _radius$map2[1],
      brr = _radius$map2[2],
      blr = _radius$map2[3];
    var signX = width > 0 ? 1 : -1;
    var signY = height > 0 ? 1 : -1;
    // sweep-flag @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths#arcs
    var sweepFlag = signX + signY !== 0 ? 1 : 0;
    d = [["M ".concat(signX * tlr + x, ",").concat(y)], ["l ".concat(width - signX * (tlr + trr), ",0")], ["a ".concat(trr, ",").concat(trr, ",0,0,").concat(sweepFlag, ",").concat(signX * trr, ",").concat(signY * trr)], ["l 0,".concat(height - signY * (trr + brr))], ["a ".concat(brr, ",").concat(brr, ",0,0,").concat(sweepFlag, ",").concat(-signX * brr, ",").concat(signY * brr)], ["l ".concat(signX * (brr + blr) - width, ",0")], ["a ".concat(blr, ",").concat(blr, ",0,0,").concat(sweepFlag, ",").concat(-signX * blr, ",").concat(-signY * blr)], ["l 0,".concat(signY * (blr + tlr) - height)], ["a ".concat(tlr, ",").concat(tlr, ",0,0,").concat(sweepFlag, ",").concat(signX * tlr, ",").concat(-signY * tlr)], ['z']].join(' ');
  }
  $el.setAttribute('d', d);
}

function createSVGElement(type, doc) {
  return (doc || document).createElementNS('http://www.w3.org/2000/svg', type);
}

var FILTER_PREFIX = 'g-filter-';

/**
 * use SVG filters, eg. blur, brightness, contrast...
 * @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/filter
 */
function createOrUpdateFilter(document, $def, object, $el, filters) {
  // eg. filter="url(#f1) url(#f2)"
  var filterName = FILTER_PREFIX + object.entity;
  var $existedFilters = $def.querySelectorAll("[name=".concat(filterName, "]"));
  if ($existedFilters.length) {
    $existedFilters.forEach(function ($filter) {
      $def.removeChild($filter);
    });
  }
  if (filters.length === 0) {
    // 'none'
    $el === null || $el === void 0 || $el.removeAttribute('filter');
  } else {
    var filterIds = filters.map(function (_ref, i) {
      var name = _ref.name,
        params = _ref.params;
      var $filter = createSVGElement('filter', document);
      // @see https://github.com/antvis/g/issues/1025
      $filter.setAttribute('filterUnits', 'userSpaceOnUse');
      if (name === 'blur') {
        createBlur(document, $filter, params);
      } else if (name === 'brightness') {
        createBrightness(document, $filter, params);
      } else if (name === 'drop-shadow') {
        createDropShadow(document, $filter, params);
      } else if (name === 'contrast') {
        createContrast(document, $filter, params);
      } else if (name === 'grayscale') {
        createGrayscale(document, $filter, params);
      } else if (name === 'sepia') {
        createSepia(document, $filter, params);
      } else if (name === 'saturate') {
        createSaturate(document, $filter, params);
      } else if (name === 'hue-rotate') {
        createHueRotate(document, $filter, params);
      } else if (name === 'invert') {
        createInvert(document, $filter, params);
      }
      $filter.id = "".concat(filterName, "-").concat(i);
      $filter.setAttribute('name', filterName);
      $def.appendChild($filter);
      return $filter.id;
    });

    // @see https://github.com/antvis/G/issues/1114
    setTimeout(function () {
      $el === null || $el === void 0 || $el.setAttribute('filter', filterIds.map(function (filterId) {
        return "url(#".concat(filterId, ")");
      }).join(' '));
    });
  }
}
function convertToAbsoluteValue(param) {
  return param.unit === gLite.UnitType.kPercentage ? param.value / 100 : param.value;
}

/**
 * @see https://drafts.fxtf.org/filter-effects/#blurEquivalent
 */
function createBlur(document, $filter, params) {
  var $feGaussianBlur = createSVGElement('feGaussianBlur', document);
  $feGaussianBlur.setAttribute('in', 'SourceGraphic');
  $feGaussianBlur.setAttribute('stdDeviation', "".concat(params[0].value));
  $filter.appendChild($feGaussianBlur);
}
function createFeComponentTransfer(document, $filter, _ref2) {
  var type = _ref2.type,
    slope = _ref2.slope,
    intercept = _ref2.intercept,
    tableValues = _ref2.tableValues;
  var $feComponentTransfer = createSVGElement('feComponentTransfer', document);
  [createSVGElement('feFuncR', document), createSVGElement('feFuncG', document), createSVGElement('feFuncB', document)].forEach(function ($feFunc) {
    $feFunc.setAttribute('type', type);
    if (type === 'table') {
      $feFunc.setAttribute('tableValues', "".concat(tableValues));
    } else {
      $feFunc.setAttribute('slope', "".concat(slope));
      $feFunc.setAttribute('intercept', "".concat(intercept));
    }
    $feComponentTransfer.appendChild($feFunc);
  });
  $filter.appendChild($feComponentTransfer);
}
function createContrast(document, $filter, params) {
  var slope = convertToAbsoluteValue(params[0]);
  createFeComponentTransfer(document, $filter, {
    type: 'linear',
    slope: slope,
    intercept: -(0.5 * slope) + 0.5
  });
}
function createInvert(document, $filter, params) {
  var amount = convertToAbsoluteValue(params[0]);
  createFeComponentTransfer(document, $filter, {
    type: 'table',
    tableValues: "".concat(amount, " ").concat(1 - amount)
  });
}
function createBrightness(document, $filter, params) {
  var slope = convertToAbsoluteValue(params[0]);
  createFeComponentTransfer(document, $filter, {
    type: 'linear',
    slope: slope,
    intercept: 0
  });
}
function createSaturate(document, $filter, params) {
  var amount = convertToAbsoluteValue(params[0]);
  var $feColorMatrix = createSVGElement('feColorMatrix', document);
  $feColorMatrix.setAttribute('type', 'saturate');
  $feColorMatrix.setAttribute('values', "".concat(amount));
  $filter.appendChild($feColorMatrix);
}
function createHueRotate(document, $filter, params) {
  var $feColorMatrix = createSVGElement('feColorMatrix', document);
  $feColorMatrix.setAttribute('type', 'hueRotate');
  // $feColorMatrix.setAttribute('values', `${params[0].to(UnitType.kDegrees).value}`);
  // FIXME: convert to degrees
  $feColorMatrix.setAttribute('values', "".concat(params[0].value));
  $filter.appendChild($feColorMatrix);
}
function createDropShadow(document, $filter, params) {
  var shadowOffsetX = params[0].value;
  var shadowOffsetY = params[1].value;
  var shadowBlur = params[2].value;
  // @ts-ignore
  var shadowColor = params[3].formatted;
  var $feGaussianBlur = createSVGElement('feGaussianBlur', document);
  $feGaussianBlur.setAttribute('in', 'SourceAlpha');
  $feGaussianBlur.setAttribute('stdDeviation', "".concat(shadowBlur));
  $filter.appendChild($feGaussianBlur);
  var $feOffset = createSVGElement('feOffset', document);
  $feOffset.setAttribute('dx', "".concat(shadowOffsetX));
  $feOffset.setAttribute('dy', "".concat(shadowOffsetY));
  $feOffset.setAttribute('result', 'offsetblur');
  $filter.appendChild($feOffset);
  var $feFlood = createSVGElement('feFlood', document);
  $feFlood.setAttribute('flood-color', shadowColor);
  $filter.appendChild($feFlood);
  var $feComposite = createSVGElement('feComposite', document);
  $feComposite.setAttribute('in2', 'offsetblur');
  $feComposite.setAttribute('operator', 'in');
  $filter.appendChild($feComposite);
  var $feMerge = createSVGElement('feMerge', document);
  $filter.appendChild($feMerge);
  var $feMergeNode1 = createSVGElement('feMergeNode', document);
  var $feMergeNode2 = createSVGElement('feMergeNode', document);
  $feMergeNode2.setAttribute('in', 'SourceGraphic');
  $feMerge.appendChild($feMergeNode1);
  $feMerge.appendChild($feMergeNode2);
}
function createFeColorMatrix(document, $filter, matrix) {
  var $feColorMatrix = createSVGElement('feColorMatrix', document);
  $feColorMatrix.setAttribute('type', 'matrix');
  $feColorMatrix.setAttribute('values', matrix.join(' '));
  $filter.appendChild($feColorMatrix);
}

/**
 * @see https://drafts.fxtf.org/filter-effects/#grayscaleEquivalent
 */
function createGrayscale(document, $filter, params) {
  var amount = convertToAbsoluteValue(params[0]);
  createFeColorMatrix(document, $filter, [0.2126 + 0.7874 * (1 - amount), 0.7152 - 0.7152 * (1 - amount), 0.0722 - 0.0722 * (1 - amount), 0, 0, 0.2126 - 0.2126 * (1 - amount), 0.7152 + 0.2848 * (1 - amount), 0.0722 - 0.0722 * (1 - amount), 0, 0, 0.2126 - 0.2126 * (1 - amount), 0.7152 - 0.7152 * (1 - amount), 0.0722 + 0.9278 * (1 - amount), 0, 0, 0, 0, 0, 1, 0]);
}

/**
 * @see https://drafts.fxtf.org/filter-effects/#sepiaEquivalent
 */
function createSepia(document, $filter, params) {
  var amount = convertToAbsoluteValue(params[0]);
  createFeColorMatrix(document, $filter, [0.393 + 0.607 * (1 - amount), 0.769 - 0.769 * (1 - amount), 0.189 - 0.189 * (1 - amount), 0, 0, 0.349 - 0.349 * (1 - amount), 0.686 + 0.314 * (1 - amount), 0.168 - 0.168 * (1 - amount), 0, 0, 0.272 - 0.272 * (1 - amount), 0.534 - 0.534 * (1 - amount), 0.131 + 0.869 * (1 - amount), 0, 0, 0, 0, 0, 1, 0]);
}

var PATTERN_PREFIX = 'g-pattern-';
var cacheKey2IDMap = {};
var counter = 0;
function resetPatternCounter() {
  counter = 0;
  cacheKey2IDMap = {};
}
function createOrUpdateGradientAndPattern(document, $def, object, $el, parsedColor, name, createImage, plugin) {
  // eg. clipPath don't have fill/stroke
  if (!parsedColor) {
    return '';
  }
  if (gLite.isCSSRGB(parsedColor)) {
    // keep using currentColor @see https://github.com/d3/d3-axis/issues/49
    if (object.style[name] === 'currentColor') {
      $el === null || $el === void 0 || $el.setAttribute(name, 'currentColor');
    } else {
      // constant value, eg. '#fff'
      $el === null || $el === void 0 || $el.setAttribute(name, parsedColor.isNone ? 'none' : parsedColor.toString());
    }
  } else if (gLite.isPattern(parsedColor)) {
    var patternId = createOrUpdatePattern(document, $def, object, parsedColor, createImage, plugin);
    // use style instead of attribute when applying <pattern>
    // @see https://stackoverflow.com/a/7723115
    $el.style[name] = "url(#".concat(patternId, ")");
    return patternId;
  } else {
    if (parsedColor.length === 1) {
      var gradientId = createOrUpdateGradient(document, object, $def, $el, parsedColor[0]);
      $el === null || $el === void 0 || $el.setAttribute(name, "url(#".concat(gradientId, ")"));
      return gradientId;
    }
    // @see https://stackoverflow.com/questions/20671502/can-i-blend-gradients-in-svg
    var filterId = createOrUpdateMultiGradient(document, object, $def, $el, parsedColor);
    $el === null || $el === void 0 || $el.setAttribute('filter', "url(#".concat(filterId, ")"));
    $el === null || $el === void 0 || $el.setAttribute('fill', 'black');
    return filterId;
  }
  return '';
}
function generateCacheKey(src) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cacheKey = '';
  if (gLite.isCSSGradientValue(src)) {
    var type = src.type,
      value = src.value;
    if (type === gLite.GradientType.LinearGradient || type === gLite.GradientType.RadialGradient) {
      // @ts-ignore
      var _value$options = _objectSpread(_objectSpread({}, value), options),
        _type = _value$options.type,
        x = _value$options.x,
        y = _value$options.y,
        width = _value$options.width,
        height = _value$options.height,
        steps = _value$options.steps,
        angle = _value$options.angle,
        cx = _value$options.cx,
        cy = _value$options.cy,
        size = _value$options.size;
      cacheKey = "gradient-".concat(_type, "-").concat((x === null || x === void 0 ? void 0 : x.toString()) || 0, "-").concat((y === null || y === void 0 ? void 0 : y.toString()) || 0, "-").concat((angle === null || angle === void 0 ? void 0 : angle.toString()) || 0, "-").concat((cx === null || cx === void 0 ? void 0 : cx.toString()) || 0, "-").concat((cy === null || cy === void 0 ? void 0 : cy.toString()) || 0, "-").concat((size === null || size === void 0 ? void 0 : size.toString()) || 0, "-").concat(width, "-").concat(height, "-").concat(steps.map(function (_ref) {
        var offset = _ref.offset,
          color = _ref.color;
        return "".concat(offset).concat(color);
      }).join('-'));
    }
  } else if (gLite.isPattern(src)) {
    if (util.isString(src.image)) {
      cacheKey = "pattern-".concat(src.image, "-").concat(src.repetition);
    } else if (src.image.nodeName === 'rect') {
      // use rect's entity as key
      cacheKey = "pattern-rect-".concat(src.image.entity);
    } else {
      cacheKey = "pattern-".concat(counter);
    }
  }
  if (cacheKey) {
    if (!cacheKey2IDMap[cacheKey]) {
      cacheKey2IDMap[cacheKey] = "".concat(PATTERN_PREFIX).concat(counter++);
    }
  }
  return cacheKey2IDMap[cacheKey];
}
function formatTransform(transform) {
  // @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/patternTransform
  // should remove unit: rotate(20deg) -> rotate(20)
  return gLite.parseTransform(transform).map(function (parsed) {
    var t = parsed.t,
      d = parsed.d;
    if (t === 'translate') {
      return "translate(".concat(d[0].value, " ").concat(d[1].value, ")");
    }
    if (t === 'translateX') {
      return "translate(".concat(d[0].value, " 0)");
    }
    if (t === 'translateY') {
      return "translate(0 ".concat(d[0].value, ")");
    }
    if (t === 'rotate') {
      return "rotate(".concat(d[0].value, ")");
    }
    if (t === 'scale') {
      // scale(1) scale(1, 1)
      var newScale = (d === null || d === void 0 ? void 0 : d.map(function (s) {
        return s.value;
      })) || [1, 1];
      return "scale(".concat(newScale[0], ", ").concat(newScale[1], ")");
    }
    if (t === 'scaleX') {
      var _newScale = (d === null || d === void 0 ? void 0 : d.map(function (s) {
        return s.value;
      })) || [1];
      return "scale(".concat(_newScale[0], ", 1)");
    }
    if (t === 'scaleY') {
      var _newScale2 = (d === null || d === void 0 ? void 0 : d.map(function (s) {
        return s.value;
      })) || [1];
      return "scale(1, ".concat(_newScale2[0], ")");
    }
    if (t === 'skew') {
      var newSkew = (d === null || d === void 0 ? void 0 : d.map(function (s) {
        return s.value;
      })) || [0, 0];
      return "skewX(".concat(newSkew[0], ") skewY(").concat(newSkew[1], ")");
    }
    if (t === 'skewZ') {
      var _newSkew = (d === null || d === void 0 ? void 0 : d.map(function (s) {
        return s.value;
      })) || [0];
      return "skewX(".concat(_newSkew[0], ")");
    }
    if (t === 'skewY') {
      var _newSkew2 = (d === null || d === void 0 ? void 0 : d.map(function (s) {
        return s.value;
      })) || [0];
      return "skewY(".concat(_newSkew2[0], ")");
    }
    if (t === 'matrix') {
      var _d$map = d.map(function (s) {
          return s.value;
        }),
        _d$map2 = _slicedToArray(_d$map, 6),
        a = _d$map2[0],
        b = _d$map2[1],
        c = _d$map2[2],
        dd = _d$map2[3],
        tx = _d$map2[4],
        ty = _d$map2[5];
      return "matrix(".concat(a, " ").concat(b, " ").concat(c, " ").concat(dd, " ").concat(tx, " ").concat(ty, ")");
    }
    return null;
  }).filter(function (item) {
    return item !== null;
  }).join(' ');
}
function create$Pattern(document, $def, object, pattern, patternId, width, height) {
  var repetition = pattern.repetition,
    transform = pattern.transform;

  // @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/pattern
  var $pattern = createSVGElement('pattern', document);
  if (transform) {
    $pattern.setAttribute('patternTransform', formatTransform(transform));
  }
  $pattern.setAttribute('patternUnits', 'userSpaceOnUse');
  $pattern.id = patternId;
  $def.appendChild($pattern);
  var _object$getGeometryBo = object.getGeometryBounds(),
    halfExtents = _object$getGeometryBo.halfExtents,
    min = _object$getGeometryBo.min;
  $pattern.setAttribute('x', "".concat(min[0]));
  $pattern.setAttribute('y', "".concat(min[1]));

  // There is no equivalent to CSS no-repeat for SVG patterns
  // @see https://stackoverflow.com/a/33481956
  var patternWidth = width;
  var patternHeight = height;
  if (repetition === 'repeat-x') {
    patternHeight = halfExtents[1] * 2;
  } else if (repetition === 'repeat-y') {
    patternWidth = halfExtents[0] * 2;
  } else if (repetition === 'no-repeat') {
    patternWidth = halfExtents[0] * 2;
    patternHeight = halfExtents[1] * 2;
  }
  $pattern.setAttribute('width', "".concat(patternWidth));
  $pattern.setAttribute('height', "".concat(patternHeight));
  return $pattern;
}
function createOrUpdatePattern(document, $def, object, pattern, createImage, plugin) {
  var patternId = generateCacheKey(pattern);
  var $existed = $def.querySelector("#".concat(patternId));
  if (!$existed) {
    var image = pattern.image;
    var imageURL = '';
    if (util.isString(image)) {
      imageURL = image;
    } else if (gLite.isBrowser) {
      if (image instanceof HTMLImageElement) {
        imageURL = image.src;
      } else if (image instanceof HTMLCanvasElement) {
        imageURL = image.toDataURL();
      } else ;
    }
    if (imageURL) {
      var $image = createSVGElement('image', document);
      // use href instead of xlink:href
      // @see https://stackoverflow.com/a/13379007
      $image.setAttribute('href', imageURL);
      var img = createImage();
      if (!imageURL.match(/^data:/i)) {
        img.crossOrigin = 'Anonymous';
        $image.setAttribute('crossorigin', 'anonymous');
      }
      img.src = imageURL;
      var onload = function onload() {
        var $pattern = create$Pattern(document, $def, object, pattern, patternId, img.width, img.height);
        $def.appendChild($pattern);
        $pattern.appendChild($image);
        $image.setAttribute('x', '0');
        $image.setAttribute('y', '0');
        $image.setAttribute('width', "".concat(img.width));
        $image.setAttribute('height', "".concat(img.height));
      };
      if (img.complete) {
        onload();
      } else {
        img.onload = onload;
        // Fix onload() bug in IE9
        // img.src = img.src;
      }
    }
    if (image.nodeName === 'rect') {
      var _parsedStyle = image.parsedStyle,
        width = _parsedStyle.width,
        height = _parsedStyle.height;
      var $pattern = create$Pattern(document, $def, image, pattern, patternId, width, height);

      // traverse subtree of pattern
      image.forEach(function (object) {
        plugin.createSVGDom(document, object, null);

        // @ts-ignore
        var svgElement = object.elementSVG;

        // apply local RTS transformation to <group> wrapper
        var localTransform = object.getLocalTransform();
        plugin.applyTransform(svgElement.$groupEl, localTransform);
      });

      // @ts-ignore
      var svgElement = image.elementSVG;
      $pattern.appendChild(svgElement.$groupEl);
    }
  }
  return patternId;
}
function createOrUpdateGradient(document, object, $def, $el, parsedColor) {
  var bounds = object.getGeometryBounds();
  var width = bounds && bounds.halfExtents[0] * 2 || 0;
  var height = bounds && bounds.halfExtents[1] * 2 || 0;
  var min = bounds && bounds.min || [0, 0];
  var gradientId = generateCacheKey(parsedColor, {
    x: min[0],
    y: min[1],
    width: width,
    height: height
  });
  var $existed = $def.querySelector("#".concat(gradientId));
  if (!$existed) {
    // <linearGradient> <radialGradient>
    // @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/linearGradient
    // @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/radialGradient
    $existed = createSVGElement(parsedColor.type === gLite.GradientType.LinearGradient ? 'linearGradient' : 'radialGradient', document);
    // @see https://github.com/antvis/g/issues/1025
    $existed.setAttribute('gradientUnits', 'userSpaceOnUse');
    // add stops
    var innerHTML = '';
    parsedColor.value.steps
    // sort by offset @see https://github.com/antvis/G/issues/1171
    .sort(function (a, b) {
      return a.offset.value - b.offset.value;
    }).forEach(function (_ref2) {
      var offset = _ref2.offset,
        color = _ref2.color;
      // TODO: support absolute unit like `px`
      innerHTML += "<stop offset=\"".concat(offset.value / 100, "\" stop-color=\"").concat(color, "\"></stop>");
    });
    $existed.innerHTML = innerHTML;
    $existed.id = gradientId;
    $def.appendChild($existed);
  }
  if (parsedColor.type === gLite.GradientType.LinearGradient) {
    var _ref3 = parsedColor.value,
      angle = _ref3.angle;
    var _computeLinearGradien = gLite.computeLinearGradient([min[0], min[1]], width, height, angle),
      x1 = _computeLinearGradien.x1,
      y1 = _computeLinearGradien.y1,
      x2 = _computeLinearGradien.x2,
      y2 = _computeLinearGradien.y2;
    $existed.setAttribute('x1', "".concat(x1));
    $existed.setAttribute('y1', "".concat(y1));
    $existed.setAttribute('x2', "".concat(x2));
    $existed.setAttribute('y2', "".concat(y2));

    // $existed.setAttribute('gradientTransform', `rotate(${angle})`);
  } else {
    var _ref4 = parsedColor.value,
      cx = _ref4.cx,
      cy = _ref4.cy,
      size = _ref4.size;
    var _computeRadialGradien = gLite.computeRadialGradient([min[0], min[1]], width, height, cx, cy, size),
      x = _computeRadialGradien.x,
      y = _computeRadialGradien.y,
      r = _computeRadialGradien.r;
    $existed.setAttribute('cx', "".concat(x));
    $existed.setAttribute('cy', "".concat(y));
    $existed.setAttribute('r', "".concat(r));
  }
  return gradientId;
}
function createOrUpdateMultiGradient(document, object, $def, $el, gradients) {
  var filterId = "".concat(FILTER_PREFIX + object.entity, "-gradient");
  var $existed = $def.querySelector("#".concat(filterId));
  if (!$existed) {
    $existed = createSVGElement('filter', document);
    $existed.setAttribute('filterUnits', 'userSpaceOnUse');
    // @see https://github.com/antvis/g/issues/1025
    $existed.setAttribute('x', '0%');
    $existed.setAttribute('y', '0%');
    $existed.setAttribute('width', '100%');
    $existed.setAttribute('height', '100%');
    $existed.id = filterId;
    $def.appendChild($existed);
  }

  /**
   * <rect id="wave-rect" x="0" y="0" width="100%" height="100%" fill="url(#wave)"></rect>
   * <filter id="blend-it" x="0%" y="0%" width="100%" height="100%">
        <feImage xlink:href="#wave-rect" result="myWave" x="100" y="100"/>
        <feImage xlink:href="#ry-rect" result="myRY"  x="100" y="100"/>
        <feBlend in="myWave" in2="myRY" mode="multiply" result="blendedGrad"/>
        <feComposite in="blendedGrad" in2="SourceGraphic" operator="in"/>
    </filter>
   */

  var blended = 0;
  gradients.forEach(function (gradient, i) {
    var gradientId = createOrUpdateGradient(document, object, $def, $el, gradient);
    var rectId = "".concat(gradientId, "_rect");
    var $rect = createSVGElement('rect', document);
    $rect.setAttribute('x', '0');
    $rect.setAttribute('y', '0');
    $rect.setAttribute('width', '100%');
    $rect.setAttribute('height', '100%');
    $rect.setAttribute('fill', "url(#".concat(gradientId, ")"));
    $rect.id = rectId;
    $def.appendChild($rect);
    var $feImage = createSVGElement('feImage', document);
    $feImage.setAttribute('href', "#".concat(rectId));
    $feImage.setAttribute('result', "".concat(filterId, "-").concat(i));
    $existed.appendChild($feImage);
    if (i > 0) {
      var $feBlend = createSVGElement('feBlend', document);
      $feBlend.setAttribute('in', i === 1 ? "".concat(filterId, "-").concat(i - 1) : "".concat(filterId, "-blended-").concat(blended - 1));
      $feBlend.setAttribute('in2', "".concat(filterId, "-").concat(i));
      $feBlend.setAttribute('result', "".concat(filterId, "-blended-").concat(blended++));
      // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/blend-mode
      $feBlend.setAttribute('mode', 'multiply');
      $existed.appendChild($feBlend);
    }
  });
  var $feComposite = createSVGElement('feComposite', document);
  $feComposite.setAttribute('in', "".concat(filterId, "-blended-").concat(blended));
  $feComposite.setAttribute('in2', 'SourceGraphic');
  $feComposite.setAttribute('operator', 'in');
  $existed.appendChild($feComposite);
  return filterId;
}

var FILTER_DROPSHADOW_PREFIX = 'g-filter-dropshadow-';

/**
 * use SVG filters
 * @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/filter
 */
function createOrUpdateShadow(document, $def, object, $el, name) {
  var _object$parsedStyle = object.parsedStyle,
    _object$parsedStyle$s = _object$parsedStyle.shadowType,
    shadowType = _object$parsedStyle$s === void 0 ? 'outer' : _object$parsedStyle$s,
    shadowBlur = _object$parsedStyle.shadowBlur,
    shadowColor = _object$parsedStyle.shadowColor,
    shadowOffsetX = _object$parsedStyle.shadowOffsetX,
    shadowOffsetY = _object$parsedStyle.shadowOffsetY;
  var hasShadow = !util.isNil(shadowColor) && shadowBlur > 0;
  var shadowId = FILTER_DROPSHADOW_PREFIX + object.entity;
  var $existedFilter = $def.querySelector("#".concat(shadowId));
  if ($existedFilter) {
    var existedShadowType = $existedFilter.getAttribute('data-type');
    if (existedShadowType !== shadowType || !hasShadow) {
      // remove existed shadow
      $existedFilter.remove();
      $existedFilter = null;
    }
  }

  // <Group> also has shadowType as its default value
  // only apply shadow when blur > 0
  if (hasShadow) {
    // use filter <feDropShadow>
    // @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow
    $el === null || $el === void 0 || $el.setAttribute('filter', "url(#".concat(shadowId, ")"));
  } else {
    $el === null || $el === void 0 || $el.removeAttribute('filter');
    return;
  }
  if (!$existedFilter) {
    $existedFilter = createSVGElement('filter', document);
    $existedFilter.setAttribute('data-type', shadowType);
    if (shadowType === 'outer') {
      var $feDropShadow = createSVGElement('feDropShadow', document);
      $feDropShadow.setAttribute('dx', "".concat((shadowOffsetX || 0) / 2));
      $feDropShadow.setAttribute('dy', "".concat((shadowOffsetY || 0) / 2));
      $feDropShadow.setAttribute('stdDeviation', "".concat((shadowBlur || 0) / 4));
      $feDropShadow.setAttribute('flood-color', shadowColor.toString());
      $existedFilter.appendChild($feDropShadow);
    } else if (shadowType === 'inner') {
      var $feComponentTransfer = createSVGElement('feComponentTransfer', document);
      $feComponentTransfer.setAttribute('in', 'SourceAlpha');
      var $feFuncA = createSVGElement('feFuncA', document);
      $feFuncA.setAttribute('type', 'table');
      $feFuncA.setAttribute('tableValues', '1 0');
      $feComponentTransfer.appendChild($feFuncA);
      $existedFilter.appendChild($feComponentTransfer);
      var $feGaussianBlur = createSVGElement('feGaussianBlur', document);
      $feGaussianBlur.setAttribute('stdDeviation', "".concat((shadowBlur || 0) / 4));
      $existedFilter.appendChild($feGaussianBlur);
      var $feOffset = createSVGElement('feOffset', document);
      $feOffset.setAttribute('dx', "".concat((shadowOffsetX || 0) / 2));
      $feOffset.setAttribute('dy', "".concat((shadowOffsetY || 0) / 2));
      $feOffset.setAttribute('result', 'offsetblur');
      $existedFilter.appendChild($feOffset);
      var $feFlood = createSVGElement('feFlood', document);
      $feFlood.setAttribute('flood-color', shadowColor.toString());
      $feFlood.setAttribute('result', 'color');
      $existedFilter.appendChild($feFlood);
      var $feComposite = createSVGElement('feComposite', document);
      $feComposite.setAttribute('in2', 'offsetblur');
      $feComposite.setAttribute('operator', 'in');
      $existedFilter.appendChild($feComposite);
      var $feComposite2 = createSVGElement('feComposite', document);
      $feComposite2.setAttribute('in2', 'SourceAlpha');
      $feComposite2.setAttribute('operator', 'in');
      $existedFilter.appendChild($feComposite2);
      var $feMerge = createSVGElement('feMerge', document);
      $existedFilter.appendChild($feMerge);
      var $feMergeNode = createSVGElement('feMergeNode', document);
      $feMergeNode.setAttribute('in', 'SourceGraphic');
      var $feMergeNode2 = createSVGElement('feMergeNode', document);
      $feMerge.appendChild($feMergeNode);
      $feMerge.appendChild($feMergeNode2);
    }
    $existedFilter.id = shadowId;
    // @see https://github.com/antvis/g/issues/1025
    $existedFilter.setAttribute('filterUnits', 'userSpaceOnUse');
    $def.appendChild($existedFilter);
    return;
  }
  if (shadowType === 'inner') {
    var _$feGaussianBlur = $existedFilter.children[1];
    var _$feOffset = $existedFilter.children[2];
    var _$feFlood = $existedFilter.children[3];
    if (name === 'shadowColor') {
      _$feFlood.setAttribute('flood-color', shadowColor.toString());
    } else if (name === 'shadowBlur') {
      // half the blur radius
      // @see https://drafts.csswg.org/css-backgrounds/#shadow-blur
      // @see https://css-tricks.com/breaking-css-box-shadow-vs-drop-shadow/
      _$feGaussianBlur.setAttribute('stdDeviation', "".concat((shadowBlur || 0) / 4));
    } else if (name === 'shadowOffsetX') {
      _$feOffset.setAttribute('dx', "".concat((shadowOffsetX || 0) / 2));
    } else if (name === 'shadowOffsetY') {
      _$feOffset.setAttribute('dy', "".concat((shadowOffsetY || 0) / 2));
    }
  } else if (shadowType === 'outer') {
    var _$feDropShadow = $existedFilter.children[0];
    if (name === 'shadowColor') {
      _$feDropShadow.setAttribute('flood-color', shadowColor.toString());
    } else if (name === 'shadowBlur') {
      // half the blur radius
      // @see https://drafts.csswg.org/css-backgrounds/#shadow-blur
      // @see https://css-tricks.com/breaking-css-box-shadow-vs-drop-shadow/
      _$feDropShadow.setAttribute('stdDeviation', "".concat((shadowBlur || 0) / 4));
    } else if (name === 'shadowOffsetX') {
      _$feDropShadow.setAttribute('dx', "".concat((shadowOffsetX || 0) / 2));
    } else if (name === 'shadowOffsetY') {
      _$feDropShadow.setAttribute('dy', "".concat((shadowOffsetY || 0) / 2));
    }
  }
}

var urlRegexp = /url\("?#(.*)\)/;
var DefElementManager = /*#__PURE__*/function () {
  function DefElementManager(context) {
    _classCallCheck(this, DefElementManager);
    this.gradientCache = {};
    this.context = context;
  }

  /**
   * container for <gradient> <clipPath>...
   */
  return _createClass(DefElementManager, [{
    key: "getDefElement",
    value: function getDefElement() {
      return this.$def;
    }
  }, {
    key: "init",
    value: function init() {
      var document = this.context.config.document;
      var $svg = this.context.contextService.getContext();
      this.$def = createSVGElement('defs', document);
      $svg.appendChild(this.$def);
    }
  }, {
    key: "clear",
    value: function clear(entity) {
      var _this = this;
      Object.keys(this.gradientCache).forEach(function (id) {
        _this.clearUnusedDefElement(_this.gradientCache, id, entity);
      });
    }
  }, {
    key: "clearUnusedDefElement",
    value: function clearUnusedDefElement(cache, id, entity) {
      if (cache[id] && cache[id].size === 1 && cache[id].has(entity)) {
        var targetElement = this.$def.querySelector("#".concat(id));
        if (targetElement) {
          this.$def.removeChild(targetElement);
        }
      }
    }
  }, {
    key: "createOrUpdateGradientAndPattern",
    value: function createOrUpdateGradientAndPattern$1(object, $el, parsedColor, name, plugin) {
      var _this$context$config = this.context.config,
        doc = _this$context$config.document,
        createImage = _this$context$config.createImage;
      if ($el) {
        var attributeValue = '';
        if (gLite.isPattern(parsedColor)) {
          // `fill: url(#${patternId})`
          attributeValue = $el.style[name];
        } else {
          // `url(#${gradientId})`
          attributeValue = $el.getAttribute(name) || '';
        }
        var matches = attributeValue.match(urlRegexp);
        if (matches && matches.length > 1) {
          this.clearUnusedDefElement(this.gradientCache, matches[1].replace('"', ''), object.entity);
        }
        var newDefElementId = createOrUpdateGradientAndPattern(doc || document, this.$def, object, $el, parsedColor, name, createImage, plugin);
        if (newDefElementId) {
          if (!this.gradientCache[newDefElementId]) {
            this.gradientCache[newDefElementId] = new Set();
          }
          this.gradientCache[newDefElementId].add(object.entity);
        }
      }
    }
  }, {
    key: "createOrUpdateShadow",
    value: function createOrUpdateShadow$1(object, $el, name) {
      var doc = this.context.config.document;
      createOrUpdateShadow(doc || document, this.$def, object, $el, name);
    }
  }, {
    key: "createOrUpdateFilter",
    value: function createOrUpdateFilter$1(object, $el, filters) {
      var doc = this.context.config.document;
      createOrUpdateFilter(doc || document, this.$def, object, $el, filters);
    }
  }]);
}();

function numberToLongString(x) {
  return x.toFixed(6).replace('.000000', '');
}
function convertHTML(str) {
  var regex = /[&|<|>|"|']/g;
  return str.replace(regex, function (match) {
    if (match === '&') {
      return '&amp;';
    }
    if (match === '<') {
      return '&lt;';
    }
    if (match === '>') {
      return '&gt;';
    }
    if (match === '"') {
      return '&quot;';
    }
    return '&apos;';
  });
}

var SVG_ATTR_MAP = {
  opacity: 'opacity',
  fillStyle: 'fill',
  fill: 'fill',
  fillRule: 'fill-rule',
  fillOpacity: 'fill-opacity',
  strokeStyle: 'stroke',
  strokeOpacity: 'stroke-opacity',
  stroke: 'stroke',
  clipPath: 'clip-path',
  textPath: 'text-path',
  r: 'r',
  cx: 'cx',
  cy: 'cy',
  rx: 'rx',
  ry: 'ry',
  x: 'x',
  y: 'y',
  width: 'width',
  height: 'height',
  lineCap: 'stroke-linecap',
  lineJoin: 'stroke-linejoin',
  lineWidth: 'stroke-width',
  lineDash: 'stroke-dasharray',
  lineDashOffset: 'stroke-dashoffset',
  miterLimit: 'stroke-miterlimit',
  font: 'font',
  fontSize: 'font-size',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  fontFamily: 'font-family',
  letterSpacing: 'letter-spacing',
  startArrow: 'marker-start',
  endArrow: 'marker-end',
  "class": 'class',
  id: 'id',
  // style: 'style',
  preserveAspectRatio: 'preserveAspectRatio',
  visibility: 'visibility',
  shadowColor: 'flood-color',
  shadowBlur: 'stdDeviation',
  shadowOffsetX: 'dx',
  shadowOffsetY: 'dy',
  filter: 'filter',
  innerHTML: 'innerHTML',
  textAlign: 'text-anchor',
  pointerEvents: 'pointer-events'
};
var FORMAT_VALUE_MAP = {
  textAlign: {
    inherit: 'inherit',
    left: 'left',
    start: 'left',
    center: 'middle',
    right: 'end',
    end: 'end'
  }
};
var DEFAULT_VALUE_MAP = {
  textAlign: 'inherit',
  // textBaseline: 'alphabetic',
  // @see https://www.w3.org/TR/SVG/painting.html#LineCaps
  lineCap: 'butt',
  // @see https://www.w3.org/TR/SVG/painting.html#LineJoin
  lineJoin: 'miter',
  // @see https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-width
  lineWidth: '1px',
  opacity: '1',
  fillOpacity: '1',
  fillRule: 'nonzero',
  strokeOpacity: '1',
  strokeWidth: '0',
  strokeMiterLimit: '4',
  letterSpacing: '0',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  pointerEvents: 'auto',
  transform: 'matrix(1,0,0,1,0,0)'
};
/**
 * G_SVG_PREFIX + nodeName + entity
 *
 * eg. g_svg_circle_345
 */
var G_SVG_PREFIX = 'g-svg';
var CLIP_PATH_PREFIX = 'clip-path-';
var TEXT_PATH_PREFIX = 'text-path-';
var SVGRendererPlugin = /*#__PURE__*/function () {
  function SVGRendererPlugin(pluginOptions, defElementManager, context) {
    _classCallCheck(this, SVGRendererPlugin);
    /**
     * Will be used in g-plugin-svg-picker for finding relative SVG element of current DisplayObject.
     */
    this.svgElementMap = new WeakMap();
    /**
     * render at the end of frame
     */
    this.renderQueue = [];
    /**
     * dirty attributes at the end of frame
     */
    this.dirtyAttributes = new WeakMap();
    /**
     * reorder after mounted
     */
    this.pendingReorderQueue = new Set();
    /**
     * <use> elements in <clipPath>, which should be sync with clipPath
     *
     * @example
     * <clipPath transform="matrix(1,0,0,1,-100,-155)" id="clip-path-0-2">
     *  <use href="#g_svg_circle_0" transform="matrix(1.477115,0,0,1.477115,150,150)">
     *  </use>
     * </clipPath>
     */
    this.clipPathUseMap = new WeakMap();
    this.pluginOptions = pluginOptions;
    this.defElementManager = defElementManager;
    this.context = context;
  }
  return _createClass(SVGRendererPlugin, [{
    key: "apply",
    value: function apply(context) {
      var _this = this;
      var renderingService = context.renderingService,
        renderingContext = context.renderingContext;
      this.context = context;
      // @ts-ignore
      this.context.svgElementMap = this.svgElementMap;
      var canvas = renderingContext.root.ownerDocument.defaultView;
      var document = this.context.config.document;
      var handleMounted = function handleMounted(e) {
        var object = e.target;

        // should remove clipPath already existed in <defs>
        var $useRefs = _this.clipPathUseMap.get(object);
        if ($useRefs) {
          var $def = _this.defElementManager.getDefElement();
          var existed = $def.querySelector("#".concat(_this.getId(object)));
          if (existed) {
            existed.remove();
          }
        }

        // create SVG DOM Node
        _this.createSVGDom(document, object, _this.$camera);
      };
      var handleUnmounted = function handleUnmounted(e) {
        var object = e.target;
        _this.defElementManager.clear(object.entity);
        _this.clipPathUseMap["delete"](object);
        _this.removeSVGDom(object);
      };
      var reorderChildren = function reorderChildren(object) {
        var _object$parentNode;
        var parent = object.parentNode;
        // @ts-ignore
        var $groupEl = (_object$parentNode = object.parentNode) === null || _object$parentNode === void 0 || (_object$parentNode = _object$parentNode.elementSVG) === null || _object$parentNode === void 0 ? void 0 : _object$parentNode.$groupEl;
        var children = ((parent === null || parent === void 0 ? void 0 : parent.children) || []).slice();
        if ($groupEl) {
          _this.reorderChildren(document, $groupEl, children);
        }
      };
      var handleReparent = function handleReparent(e) {
        var object = e.target;
        reorderChildren(object);
      };
      var handleAttributeChanged = function handleAttributeChanged(e) {
        var object = e.target;

        // @see https://github.com/antvis/g/issues/994
        // @ts-ignore
        if (!object.elementSVG) {
          return;
        }
        var attrName = e.attrName;
        var attribtues = _this.dirtyAttributes.get(object);
        if (!attribtues) {
          _this.dirtyAttributes.set(object, []);
          attribtues = _this.dirtyAttributes.get(object);
        }
        attribtues.push(attrName);
      };
      var handleGeometryBoundsChanged = function handleGeometryBoundsChanged(e) {
        var target = e.target;
        var nodes = target.nodeName === gLite.Shape.FRAGMENT ? target.childNodes : [target];
        nodes.forEach(function (object) {
          var _object$elementSVG;
          // @ts-ignore
          var $el = (_object$elementSVG = object.elementSVG) === null || _object$elementSVG === void 0 ? void 0 : _object$elementSVG.$el;
          var _object$parsedStyle = object.parsedStyle,
            fill = _object$parsedStyle.fill,
            stroke = _object$parsedStyle.stroke,
            clipPath = _object$parsedStyle.clipPath;
          if (fill && !gLite.isCSSRGB(fill)) {
            _this.defElementManager.createOrUpdateGradientAndPattern(object, $el, fill, 'fill', _this);
          }
          if (stroke && !gLite.isCSSRGB(stroke)) {
            _this.defElementManager.createOrUpdateGradientAndPattern(object, $el, stroke, 'stroke', _this);
          }
          if (clipPath) {
            var parentInvert = glMatrix.mat4.invert(glMatrix.mat4.create(), object.getWorldTransform());
            var clipPathId = "".concat(CLIP_PATH_PREFIX + clipPath.entity, "-").concat(object.entity);
            var $def = _this.defElementManager.getDefElement();
            var $existed = $def.querySelector("#".concat(clipPathId));
            if ($existed) {
              _this.applyTransform($existed, parentInvert);
            }
          }
        });
      };
      renderingService.hooks.init.tap(SVGRendererPlugin.tag, function () {
        var _this$context$config = _this.context.config,
          background = _this$context$config.background,
          document = _this$context$config.document;

        // <defs>
        _this.defElementManager.init();
        var $svg = _this.context.contextService.getContext();
        if (background) {
          $svg.style.background = background;
        }

        // @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters
        $svg.setAttribute('color-interpolation-filters', 'sRGB');
        _this.$camera = createSVGElement('g', document);
        _this.$camera.id = "".concat(G_SVG_PREFIX, "-camera");
        _this.applyTransform(_this.$camera, _this.context.camera.getOrthoMatrix());
        $svg.appendChild(_this.$camera);
        canvas.addEventListener(gLite.ElementEvent.MOUNTED, handleMounted);
        canvas.addEventListener(gLite.ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.addEventListener(gLite.ElementEvent.REPARENT, handleReparent);
        canvas.addEventListener(gLite.ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
        canvas.addEventListener(gLite.ElementEvent.BOUNDS_CHANGED, handleGeometryBoundsChanged);
      });
      renderingService.hooks.destroy.tap(SVGRendererPlugin.tag, function () {
        canvas.removeEventListener(gLite.ElementEvent.MOUNTED, handleMounted);
        canvas.removeEventListener(gLite.ElementEvent.UNMOUNTED, handleUnmounted);
        canvas.removeEventListener(gLite.ElementEvent.REPARENT, handleReparent);
        canvas.removeEventListener(gLite.ElementEvent.ATTR_MODIFIED, handleAttributeChanged);
        canvas.removeEventListener(gLite.ElementEvent.BOUNDS_CHANGED, handleGeometryBoundsChanged);
        resetPatternCounter();
      });
      renderingService.hooks.render.tap(SVGRendererPlugin.tag, function (object) {
        _this.renderQueue.push(object);
      });
      renderingService.hooks.beginFrame.tap(SVGRendererPlugin.tag, function () {
        var doc = _this.context.config.document;
        if (_this.pendingReorderQueue.size) {
          _this.pendingReorderQueue.forEach(function (object) {
            var _object$elementSVG2;
            var children = ((object === null || object === void 0 ? void 0 : object.children) || []).slice();
            var $parentGroupEl = // @ts-ignore
            object === null || object === void 0 || (_object$elementSVG2 = object.elementSVG) === null || _object$elementSVG2 === void 0 ? void 0 : _object$elementSVG2.$groupEl;
            if ($parentGroupEl) {
              _this.reorderChildren(doc || document, $parentGroupEl, children || []);
            }
          });
          _this.pendingReorderQueue.clear();
        }
      });
      renderingService.hooks.endFrame.tap(SVGRendererPlugin.tag, function () {
        if (renderingContext.renderReasons.has(gLite.RenderReason.CAMERA_CHANGED)) {
          _this.applyTransform(_this.$camera, _this.context.camera.getOrthoMatrix());
        }
        _this.renderQueue.forEach(function (object) {
          var _elementSVG, _elementSVG2;
          var $el = (_elementSVG = object.elementSVG) === null || _elementSVG === void 0 ? void 0 : _elementSVG.$el;
          var $groupEl = (_elementSVG2 = object.elementSVG) === null || _elementSVG2 === void 0 ? void 0 : _elementSVG2.$groupEl;
          if ($el && $groupEl) {
            // apply local RTS transformation to <group> wrapper
            // account for anchor
            var localTransform = object.getLocalTransform();
            _this.applyTransform($groupEl, localTransform);

            // clipped shapes should also be informed

            var $useRefs = _this.clipPathUseMap.get(object);
            if ($useRefs && $useRefs.length) {
              $useRefs.forEach(function ($use) {
                // <clipPath transform="matrix()"><circle /></clipPath>
                _this.applyTransform($use, object.getWorldTransform());
                // const parentInvert = mat4.invert(
                //   mat4.create(),
                //   (object as DisplayObject).getWorldTransform(),
                // );
                // this.applyTransform($clipPath, parentInvert);
              });
            }

            // finish rendering, clear dirty flag
            object.renderable.dirty = false;
          }

          // update dirty attributes
          var attributes = _this.dirtyAttributes.get(object);
          if (attributes) {
            attributes.forEach(function (attrName) {
              if (attrName === 'zIndex') {
                reorderChildren(object);
              } else if (attrName === 'increasedLineWidthForHitTesting') {
                _this.createOrUpdateHitArea(object, $el, $groupEl);
              }
              _this.updateAttribute(object, [attrName]);
            });
            _this.dirtyAttributes["delete"](object);
          }
        });
        _this.renderQueue = [];
      });
    }
  }, {
    key: "getId",
    value: function getId(object) {
      return object.id || "".concat(G_SVG_PREFIX, "-").concat(object.entity);
    }
  }, {
    key: "reorderChildren",
    value: function reorderChildren(doc, $groupEl, children) {
      // need to reorder parent's children
      children.sort(function (a, b) {
        return a.sortable.renderOrder - b.sortable.renderOrder;
      });
      if (children.length) {
        // create empty fragment
        var fragment = (doc || document).createDocumentFragment();
        children.forEach(function (child) {
          if (child.isConnected) {
            var $el = child.elementSVG.$groupEl;
            if ($el) {
              fragment.appendChild($el);
            }
          }
        });
        $groupEl.appendChild(fragment);
      }
    }
  }, {
    key: "applyTransform",
    value: function applyTransform($el, rts) {
      var matrix = "matrix(".concat(numberToLongString(rts[0]), ",").concat(numberToLongString(rts[1]), ",").concat(numberToLongString(rts[4]), ",").concat(numberToLongString(rts[5]), ",").concat(numberToLongString(rts[12]), ",").concat(numberToLongString(rts[13]), ")");
      if (matrix !== $el.getAttribute('transform')) {
        // use proper precision avoiding too long string in `transform`
        // @see https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
        $el.setAttribute('transform', matrix);
      }
      if (matrix === DEFAULT_VALUE_MAP.transform) {
        $el.removeAttribute('transform');
      }
    }
  }, {
    key: "applyAttributes",
    value: function applyAttributes(object) {
      var elementSVG = object.elementSVG;
      var $el = elementSVG === null || elementSVG === void 0 ? void 0 : elementSVG.$el;
      var $groupEl = elementSVG === null || elementSVG === void 0 ? void 0 : elementSVG.$groupEl;
      if ($el && $groupEl) {
        var nodeName = object.nodeName,
          attributes = object.attributes;
        if (nodeName !== gLite.Shape.HTML) {
          $el.setAttribute('fill', 'none');
        }
        if (nodeName === gLite.Shape.IMAGE) {
          $el.setAttribute('preserveAspectRatio', 'none');
        }

        // apply attributes
        this.updateAttribute(object, Object.keys(attributes));
      }
    }
  }, {
    key: "updateAttribute",
    value: function updateAttribute(object, attributes) {
      var _this2 = this;
      var document = this.context.config.document;
      var _ref = object.elementSVG,
        $el = _ref.$el,
        $hitTestingEl = _ref.$hitTestingEl;
      var parsedStyle = object.parsedStyle,
        nodeName = object.nodeName;
      var shouldUpdateElementAttribute = attributes.some(function (name) {
        return (
          // @ts-ignore
          _this2.context.SVGElementLifeCycleContribution.shouldUpdateElementAttribute(object, name)
        );
      });

      // need re-generate path
      if (shouldUpdateElementAttribute && $el) {
        [$el, $hitTestingEl].forEach(function ($el) {
          if ($el) {
            // @ts-ignore
            _this2.context.SVGElementLifeCycleContribution.updateElementAttribute(object, $el, _this2.svgElementMap);
          }
        });
      }

      // update common attributes
      attributes.forEach(function (name) {
        var _FORMAT_VALUE_MAP$nam, _propertyMetadataCach;
        var usedName = SVG_ATTR_MAP[name];
        var computedValue = parsedStyle[name];
        var computedValueStr = !util.isNil(computedValue) && computedValue.toString();
        var formattedValueStr = ((_FORMAT_VALUE_MAP$nam = FORMAT_VALUE_MAP[name]) === null || _FORMAT_VALUE_MAP$nam === void 0 ? void 0 : _FORMAT_VALUE_MAP$nam[computedValueStr]) || computedValueStr;
        var usedValue = parsedStyle[name];
        var inherited = usedName && !!((_propertyMetadataCach = gLite.propertyMetadataCache[name]) !== null && _propertyMetadataCach !== void 0 && _propertyMetadataCach.inh);

        // <foreignObject>
        if (nodeName === gLite.Shape.HTML) {
          if (name === 'fill') {
            $el.style.background = usedValue.toString();
          } else if (name === 'stroke') {
            $el.style['border-color'] = usedValue.toString();
            $el.style['border-style'] = 'solid';
          } else if (name === 'lineWidth') {
            $el.style['border-width'] = "".concat(usedValue || 0, "px");
          } else if (name === 'lineDash') {
            $el.style['border-style'] = 'dashed';
          } else if (name === 'innerHTML') {
            _this2.createOrUpdateInnerHTML(document, $el, usedValue);
          } else if (name === 'width' || name === 'height' || name === 'class' || name === 'x' || name === 'y') {
            // width & height are both required for <foreignObject> and cannot be used as style.
            $el.setAttribute(name, usedValue.toString());
          } else if (!util.isNil(object.style[name]) && object.style[name] !== '') {
            $el.style[name] = object.style[name];
          }
        } else {
          if (!usedName || (nodeName === gLite.Shape.GROUP || object.isCustomElement) && (inherited || usedName === 'fill' || usedName === 'stroke')) {
            return;
          }
          if (name === 'fill') {
            _this2.defElementManager.createOrUpdateGradientAndPattern(object, $el, usedValue, usedName, _this2);
          } else if (name === 'stroke') {
            _this2.defElementManager.createOrUpdateGradientAndPattern(object, $el, usedValue, usedName, _this2);
          } else if (name === 'clipPath') {
            _this2.createOrUpdateClipOrTextPath(document, usedValue, object);
          } else if (name === 'textPath') {
            _this2.createOrUpdateClipOrTextPath(document, usedValue, object, true);
          } else if (name === 'shadowType' || name === 'shadowColor' || name === 'shadowBlur' || name === 'shadowOffsetX' || name === 'shadowOffsetY') {
            _this2.defElementManager.createOrUpdateShadow(object, $el, name);
          } else if (name === 'filter') {
            _this2.defElementManager.createOrUpdateFilter(object, $el, usedValue);
          } else if (!util.isNil(computedValue)) {
            // use computed value so that we can use cascaded effect in SVG
            // ignore 'unset' and default value
            [$el, $hitTestingEl].forEach(function ($el) {
              if ($el && usedName) {
                if (computedValueStr !== 'unset' && computedValueStr !== DEFAULT_VALUE_MAP[name]) {
                  $el.setAttribute(usedName, formattedValueStr);
                } else {
                  $el.removeAttribute(usedName);
                }
              }
            });
          }
        }
      });
    }
  }, {
    key: "createSVGDom",
    value: function createSVGDom(document, object, root) {
      var noWrapWithGroup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      // create svg element
      // @ts-ignore
      object.elementSVG = new ElementSVG();
      // @ts-ignore
      var svgElement = object.elementSVG;

      // use <group> as default, eg. CustomElement
      var $el =
      // @ts-ignore
      this.context.SVGElementLifeCycleContribution.createElement(object, this.svgElementMap);
      if ($el) {
        var _object$parentNode$el;
        var $groupEl;

        // save $el on parsedStyle, which will be returned in getDomElement()
        if (object.nodeName === gLite.Shape.HTML) {
          object.parsedStyle.$el = $el;
        }
        if (this.pluginOptions.outputSVGElementId) {
          // use user-defined id first.
          $el.id = this.getId(object);
        }
        if (this.pluginOptions.outputSVGElementName && object.name) {
          $el.setAttribute('name', object.name);
        }
        if (($el.hasAttribute('data-wrapgroup') || $el.nodeName !== 'g') && !noWrapWithGroup) {
          $groupEl = createSVGElement('g', document);
          // if (this.pluginOptions.outputSVGElementId) {
          //   $groupEl.id = $el.id + '-g';
          // }
          $groupEl.appendChild($el);
        } else {
          $groupEl = $el;
        }
        svgElement.$el = $el;
        svgElement.$groupEl = $groupEl;

        // apply attributes at first time
        this.applyAttributes(object);

        // create hitArea if necessary
        this.createOrUpdateHitArea(object, $el, $groupEl);
        var $parentGroupEl = root ||
        // @ts-ignore
        object.parentNode && ((_object$parentNode$el = object.parentNode.elementSVG) === null || _object$parentNode$el === void 0 ? void 0 : _object$parentNode$el.$groupEl);
        if ($parentGroupEl) {
          $parentGroupEl.appendChild($groupEl);

          // need reorder children later
          this.pendingReorderQueue.add(object.parentNode);
        }
      }
    }
  }, {
    key: "removeSVGDom",
    value: function removeSVGDom(object) {
      var _object$elementSVG3;
      // @ts-ignore
      var $groupEl = (_object$elementSVG3 = object.elementSVG) === null || _object$elementSVG3 === void 0 ? void 0 : _object$elementSVG3.$groupEl;
      if ($groupEl && $groupEl.parentNode) {
        $groupEl.parentNode.removeChild($groupEl);

        // @ts-ignore
        this.context.SVGElementLifeCycleContribution.destroyElement(object, $groupEl);
        // object.entity.removeComponent(ElementSVG, true);
      }
    }
  }, {
    key: "createOrUpdateHitArea",
    value: function createOrUpdateHitArea(object, $el, $groupEl) {
      var svgElement = object.elementSVG;
      var $hitTestingEl = svgElement.$hitTestingEl;
      var increasedLineWidthForHitTesting = Number(object.parsedStyle.increasedLineWidthForHitTesting);

      // account for hitArea
      if (increasedLineWidthForHitTesting) {
        if (!$hitTestingEl) {
          $hitTestingEl = $el.cloneNode();
          // clear attributes like `filter` `font-size`
          ['filter'].forEach(function (attribute) {
            $hitTestingEl.removeAttribute(attribute);
          });
          // hitArea should be 'transparent' but not 'none'
          var hasFill = $el.getAttribute('fill') !== 'none';
          $hitTestingEl.setAttribute('fill', hasFill ? 'transparent' : 'none');
          $hitTestingEl.setAttribute('stroke', 'transparent');
          $groupEl.appendChild($hitTestingEl);
          svgElement.$hitTestingEl = $hitTestingEl;

          // g-plugin-svg-picker will use this map to find target object
          this.svgElementMap.set($hitTestingEl, object);
        }

        // increase interactive line width
        $hitTestingEl.setAttribute('stroke-width', "".concat(increasedLineWidthForHitTesting + object.parsedStyle.lineWidth));
      } else if ($hitTestingEl) {
        $groupEl.removeChild($hitTestingEl);
        svgElement.$hitTestingEl = null;
      }
    }
  }, {
    key: "createOrUpdateInnerHTML",
    value: function createOrUpdateInnerHTML(doc, $el, usedValue) {
      var $div = (doc || document).createElement('div');
      if (typeof usedValue === 'string') {
        $div.innerHTML = usedValue;
      } else {
        $div.appendChild(usedValue);
      }
      $el.innerHTML = '';
      $el.appendChild($div);
    }
  }, {
    key: "createOrUpdateClipOrTextPath",
    value: function createOrUpdateClipOrTextPath(document, clipPath, object) {
      var isTextPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var _ref2 = object.elementSVG,
        $groupEl = _ref2.$groupEl;
      var PREFIX = isTextPath ? TEXT_PATH_PREFIX : CLIP_PATH_PREFIX;
      var attributeNameCamel = isTextPath ? 'g' : 'clipPath';
      var attributeNameHyphen = isTextPath ? 'text-path' : 'clip-path';
      if (clipPath) {
        var clipPathId = "".concat(PREFIX + clipPath.entity, "-").concat(object.entity);
        var $def = this.defElementManager.getDefElement();
        var existed = $def.querySelector("#".concat(clipPathId));
        if (!existed) {
          var $clipPath;
          if (isTextPath) {
            // use <path> directly instead of wrapping with <g>
            this.createSVGDom(document, clipPath, null, true);
            // @ts-ignore
            $clipPath = clipPath.elementSVG.$el;
          } else {
            // the clipPath is allowed to be detached from canvas
            if (!clipPath.isConnected) {
              var $existedClipPath = $def.querySelector("#".concat(this.getId(clipPath)));
              if (!$existedClipPath) {
                this.createSVGDom(document, clipPath, $def, true);
              }
            }

            // create <clipPath> dom node
            $clipPath = createSVGElement(attributeNameCamel, document);
            var $use = createSVGElement('use', document);
            // @ts-ignore
            $use.setAttribute('href', "#".concat(clipPath.elementSVG.$el.id));
            $clipPath.appendChild($use);
            var $useRefs = this.clipPathUseMap.get(clipPath);
            if (!$useRefs) {
              this.clipPathUseMap.set(clipPath, []);
              $useRefs = this.clipPathUseMap.get(clipPath);
            }
            $useRefs.push($use);

            // <clipPath transform="matrix()"><circle /></clipPath>
            this.applyTransform($use, clipPath.getWorldTransform());
            var parentInvert = glMatrix.mat4.invert(glMatrix.mat4.create(), object.getWorldTransform());
            this.applyTransform($clipPath, parentInvert);
          }
          if (this.pluginOptions.outputSVGElementId) {
            $clipPath.id = clipPathId;
          }
          // append it to <defs>
          $def.appendChild($clipPath);
        }

        // apply attributes
        this.applyAttributes(clipPath);
        if (!isTextPath) {
          // apply clipPath to $group
          // @see https://github.com/antvis/g/issues/961
          $groupEl.setAttribute(attributeNameHyphen, "url(#".concat(clipPathId, ")"));
        }
      } else if (!isTextPath) {
        // remove clip path
        $groupEl.removeAttribute(attributeNameHyphen);
      }
    }
  }]);
}();
SVGRendererPlugin.tag = 'SVGRenderer';

// @see https://github.com/plouc/nivo/issues/164
var BASELINE_MAP = {
  top: 'hanging',
  // Use hanging here.
  middle: 'central',
  bottom: 'text-after-edge',
  // FIXME: It is not a standard property.
  alphabetic: 'alphabetic',
  ideographic: 'ideographic',
  hanging: 'hanging'
};
function updateTextElementAttribute($el, parsedStyle, text, runtime) {
  // Trigger text geometry calculation.
  text.getBounds();
  var _parsedStyle$lineWidt = parsedStyle.lineWidth,
    lineWidth = _parsedStyle$lineWidt === void 0 ? 1 : _parsedStyle$lineWidt,
    _parsedStyle$x = parsedStyle.x,
    x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
    _parsedStyle$y = parsedStyle.y,
    y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
    _parsedStyle$dx = parsedStyle.dx,
    dx = _parsedStyle$dx === void 0 ? 0 : _parsedStyle$dx,
    _parsedStyle$dy = parsedStyle.dy,
    dy = _parsedStyle$dy === void 0 ? 0 : _parsedStyle$dy,
    textPath = parsedStyle.textPath,
    _parsedStyle$textPath = parsedStyle.textPathSide,
    textPathSide = _parsedStyle$textPath === void 0 ? 'left' : _parsedStyle$textPath,
    _parsedStyle$textPath2 = parsedStyle.textPathStartOffset,
    textPathStartOffset = _parsedStyle$textPath2 === void 0 ? 0 : _parsedStyle$textPath2,
    _parsedStyle$textDeco = parsedStyle.textDecorationLine,
    textDecorationLine = _parsedStyle$textDeco === void 0 ? '' : _parsedStyle$textDeco,
    _parsedStyle$textDeco2 = parsedStyle.textDecorationColor,
    textDecorationColor = _parsedStyle$textDeco2 === void 0 ? '' : _parsedStyle$textDeco2,
    _parsedStyle$textDeco3 = parsedStyle.textDecorationStyle,
    textDecorationStyle = _parsedStyle$textDeco3 === void 0 ? '' : _parsedStyle$textDeco3,
    metrics = parsedStyle.metrics;
  var _parsedStyle$textBase = parsedStyle.textBaseline,
    textBaseline = _parsedStyle$textBase === void 0 ? 'alphabetic' : _parsedStyle$textBase;
  if (textBaseline === 'alphabetic') {
    textBaseline = 'bottom';
  }
  $el.setAttribute('dominant-baseline', BASELINE_MAP[textBaseline]);
  $el.setAttribute('paint-order', 'stroke');
  var lines = metrics.lines,
    lineHeight = metrics.lineHeight,
    height = metrics.height;
  var lineNum = lines.length;
  var styleCSSText = "transform:translate(".concat(dx, "px, ").concat(dy, "px);");
  if (textDecorationLine && textDecorationLine !== 'none') {
    // use CSS text-decoration since the implementation in SVG is not good enough
    styleCSSText += "text-decoration:".concat(textDecorationLine, " ").concat(textDecorationStyle, " ").concat(textDecorationColor, ";");
  }
  if (styleCSSText) {
    $el.setAttribute('style', styleCSSText);
  }
  if (x !== 0) {
    $el.setAttribute('x', "".concat(x));
  }
  if (y !== 0) {
    $el.setAttribute('y', "".concat(y));
  }
  if (lineNum === 1) {
    var textContent = convertHTML(lines[0]);
    $el.setAttribute('dx', "".concat(lineWidth / 2));

    // Since `text-after-edge` is not a standard property value, we use `dy` instead.
    if (textBaseline === 'bottom' || textBaseline === 'top') {
      $el.setAttribute('dominant-baseline', BASELINE_MAP.middle);
      $el.setAttribute('dy', textBaseline === 'bottom' ? "-".concat(height / 2, "px") : "".concat(height / 2, "px"));
    } else {
      $el.setAttribute('dy', '0px');
    }

    // <textPath> only support one line
    // @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath
    if (textPath) {
      // clear existed text content first
      $el.innerHTML = '';

      // append <textPath href="#MyPath">text</textPath>
      var $textPath = createSVGElement('textPath', $el.ownerDocument);
      $textPath.setAttribute('href', "#".concat(TEXT_PATH_PREFIX + textPath.entity));
      if (textPathSide !== 'left') {
        $textPath.setAttribute('side', textPathSide);
      }
      if (textPathStartOffset !== 0) {
        $textPath.setAttribute('startOffset', "".concat(textPathStartOffset));
      }
      $textPath.innerHTML = textContent;
      $el.appendChild($textPath);
    } else {
      $el.innerHTML = textContent;
    }
  } else {
    $el.innerHTML = lines.map(function (line, i) {
      var dx = lineWidth / 2;
      var dy = 0;
      if (i === 0) {
        // TODO: handle other textBaseline values
        if (textBaseline === 'middle') {
          dy = lineHeight / 2 - height / 2;
        } else if (textBaseline === 'top' || textBaseline === 'hanging') {
          dy = 0;
        } else if (textBaseline === 'bottom' || textBaseline === 'ideographic') {
          dy = -lineHeight * (lineNum - 1);
        }
      } else {
        dy = lineHeight;
      }
      return "<tspan x=".concat(x, " dx=\"").concat(dx, "\" dy=\"").concat(dy, "\">").concat(convertHTML(line), "</tspan>");
    }).join('');
  }
}

var _SHAPE2TAGS;
var SHAPE2TAGS = (_SHAPE2TAGS = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_SHAPE2TAGS, gLite.Shape.RECT, 'path'), gLite.Shape.CIRCLE, 'circle'), gLite.Shape.ELLIPSE, 'ellipse'), gLite.Shape.IMAGE, 'image'), gLite.Shape.GROUP, 'g'), gLite.Shape.LINE, 'line'), gLite.Shape.POLYLINE, 'polyline'), gLite.Shape.POLYGON, 'polygon'), gLite.Shape.TEXT, 'text'), gLite.Shape.PATH, 'path'), _defineProperty(_SHAPE2TAGS, gLite.Shape.HTML, 'foreignObject'));
var SHAPE_UPDATE_DEPS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, gLite.Shape.CIRCLE, ['cx', 'cy', 'r']), gLite.Shape.ELLIPSE, ['cx', 'cy', 'rx', 'ry']), gLite.Shape.RECT, ['x', 'y', 'width', 'height', 'radius']), gLite.Shape.IMAGE, ['x', 'y', 'src', 'width', 'height']), gLite.Shape.LINE, ['x1', 'y1', 'x2', 'y2', 'markerStart', 'markerEnd', 'markerStartOffset', 'markerEndOffset']), gLite.Shape.POLYLINE, ['points', 'markerStart', 'markerEnd', 'markerMid', 'markerStartOffset', 'markerEndOffset']), gLite.Shape.POLYGON, ['points', 'markerStart', 'markerEnd', 'markerMid', 'markerStartOffset', 'markerEndOffset']), gLite.Shape.PATH, ['d', 'markerStart', 'markerEnd', 'markerMid', 'markerStartOffset', 'markerEndOffset']), gLite.Shape.TEXT, ['text', 'font', 'fontSize', 'fontFamily', 'fontStyle', 'fontWeight', 'fontVariant', 'lineHeight', 'letterSpacing', 'wordWrap', 'wordWrapWidth', 'maxLines', 'leading', 'textBaseline', 'textAlign', 'textTransform', 'textOverflow', 'textPath', 'textPathSide', 'textPathStartOffset', 'textDecorationLine', 'textDecorationColor', 'textDecorationStyle',
// 'whiteSpace',
'dx', 'dy']);
var DefaultElementLifeCycleContribution = /*#__PURE__*/function () {
  function DefaultElementLifeCycleContribution(context, runtime) {
    _classCallCheck(this, DefaultElementLifeCycleContribution);
    this.context = context;
    this.runtime = runtime;
  }
  return _createClass(DefaultElementLifeCycleContribution, [{
    key: "createElement",
    value: function createElement(object, svgElementMap) {
      var doc = this.context.config.document;
      var type = SHAPE2TAGS[object.nodeName] || 'g';
      var $el = createSVGElement(type, doc || document);
      svgElementMap.set($el, object);
      return $el;
    }
  }, {
    key: "destroyElement",
    value: function destroyElement(object, $el) {}
  }, {
    key: "shouldUpdateElementAttribute",
    value: function shouldUpdateElementAttribute(object, attributeName) {
      var nodeName = object.nodeName;
      return (SHAPE_UPDATE_DEPS[nodeName] || []).indexOf(attributeName) > -1;
    }
  }, {
    key: "updateElementAttribute",
    value: function updateElementAttribute(object) {
      // @ts-ignore
      var _ref = object.elementSVG,
        $el = _ref.$el;
      var nodeName = object.nodeName,
        parsedStyle = object.parsedStyle;
      switch (nodeName) {
        case gLite.Shape.IMAGE:
          {
            updateImageElementAttribute($el, parsedStyle);
            break;
          }
        case gLite.Shape.RECT:
          {
            updateRectElementAttribute($el, parsedStyle);
            break;
          }
        case gLite.Shape.LINE:
          {
            updateLineElementAttribute($el, parsedStyle);
            break;
          }
        case gLite.Shape.POLYGON:
        case gLite.Shape.POLYLINE:
          {
            updatePolylineElementAttribute($el, parsedStyle);
            break;
          }
        case gLite.Shape.PATH:
          {
            updatePathElementAttribute($el, parsedStyle);
            break;
          }
        case gLite.Shape.TEXT:
          {
            updateTextElementAttribute($el, parsedStyle, object, this.runtime);
            break;
          }
      }
    }
  }]);
}();

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Plugin);
    _this = _callSuper(this, Plugin);
    _this.name = 'svg-renderer';
    _this.options = options;
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init(runtime) {
      var _this$options = this.options,
        outputSVGElementId = _this$options.outputSVGElementId,
        outputSVGElementName = _this$options.outputSVGElementName;
      var defElementManager = new DefElementManager(this.context);

      // default implementation
      var defaultElementLifeCycleContribution = new DefaultElementLifeCycleContribution(this.context, runtime);
      // @ts-ignore
      this.context.defaultElementLifeCycleContribution = defaultElementLifeCycleContribution;

      // @ts-ignore
      this.context.SVGElementLifeCycleContribution = defaultElementLifeCycleContribution;
      var SVGRendererPluginOptions = {
        outputSVGElementId: !util.isNil(outputSVGElementId) ? !!outputSVGElementId : true,
        outputSVGElementName: !util.isNil(outputSVGElementName) ? !!outputSVGElementName : true
      };
      this.addRenderingPlugin(
      // @ts-ignore
      new SVGRendererPlugin(SVGRendererPluginOptions, defElementManager, this.context));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllRenderingPlugins();

      // @ts-ignore
      delete this.context.defaultElementLifeCycleContribution;
      // @ts-ignore
      delete this.context.SVGElementLifeCycleContribution;
    }
  }]);
}(gLite.AbstractRendererPlugin);

exports.CLIP_PATH_PREFIX = CLIP_PATH_PREFIX;
exports.DEFAULT_VALUE_MAP = DEFAULT_VALUE_MAP;
exports.DefaultElementLifeCycleContribution = DefaultElementLifeCycleContribution;
exports.ElementSVG = ElementSVG;
exports.G_SVG_PREFIX = G_SVG_PREFIX;
exports.Plugin = Plugin;
exports.SHAPE2TAGS = SHAPE2TAGS;
exports.SHAPE_UPDATE_DEPS = SHAPE_UPDATE_DEPS;
exports.SVGRendererPlugin = SVGRendererPlugin;
exports.SVG_ATTR_MAP = SVG_ATTR_MAP;
exports.TEXT_PATH_PREFIX = TEXT_PATH_PREFIX;
exports.createSVGElement = createSVGElement;
exports.updateImageElementAttribute = updateImageElementAttribute;
exports.updateLineElementAttribute = updateLineElementAttribute;
exports.updatePathElementAttribute = updatePathElementAttribute;
exports.updatePolylineElementAttribute = updatePolylineElementAttribute;
exports.updateRectElementAttribute = updateRectElementAttribute;
exports.updateTextElementAttribute = updateTextElementAttribute;
//# sourceMappingURL=index.js.map
