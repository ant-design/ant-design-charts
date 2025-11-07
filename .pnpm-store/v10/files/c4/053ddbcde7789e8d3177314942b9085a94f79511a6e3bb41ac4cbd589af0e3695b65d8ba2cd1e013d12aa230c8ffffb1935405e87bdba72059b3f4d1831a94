/*!
 * @antv/g-plugin-canvas-path-generator
 * @description A G plugin of path generator with Canvas2D API
 * @version 2.1.22
 * @date 7/30/2025, 1:35:25 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _callSuper from '@babel/runtime/helpers/callSuper';
import _inherits from '@babel/runtime/helpers/inherits';
import { isDisplayObject, Shape, AbstractRendererPlugin } from '@antv/g-lite';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { clamp } from '@antv/util';

function generatePath$6(context, parsedStyle) {
  var _parsedStyle$cx = parsedStyle.cx,
    cx = _parsedStyle$cx === void 0 ? 0 : _parsedStyle$cx,
    _parsedStyle$cy = parsedStyle.cy,
    cy = _parsedStyle$cy === void 0 ? 0 : _parsedStyle$cy,
    r = parsedStyle.r;
  context.arc(cx, cy, r, 0, Math.PI * 2, false);
}

function generatePath$5(context, parsedStyle) {
  var _parsedStyle$cx = parsedStyle.cx,
    cx = _parsedStyle$cx === void 0 ? 0 : _parsedStyle$cx,
    _parsedStyle$cy = parsedStyle.cy,
    cy = _parsedStyle$cy === void 0 ? 0 : _parsedStyle$cy,
    rx = parsedStyle.rx,
    ry = parsedStyle.ry;

  // @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
  if (context.ellipse) {
    context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2, false);
  } else {
    // 如果不支持，则使用圆来绘制，进行变形
    var r = rx > ry ? rx : ry;
    var scaleX = rx > ry ? 1 : rx / ry;
    var scaleY = rx > ry ? ry / rx : 1;
    context.save();
    context.scale(scaleX, scaleY);
    context.arc(cx, cy, r, 0, Math.PI * 2);
  }
}

function generatePath$4(context, parsedStyle) {
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
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
    x = x2 - x1;
    y = y2 - y1;
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
    x = x1 - x2;
    y = y1 - y2;
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  context.moveTo(x1 + startOffsetX, y1 + startOffsetY);
  context.lineTo(x2 + endOffsetX, y2 + endOffsetY);
}

function generatePath$3(context, parsedStyle) {
  var markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var _parsedStyle$d = parsedStyle.d,
    absolutePath = _parsedStyle$d.absolutePath,
    segments = _parsedStyle$d.segments;
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
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
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
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
  for (var i = 0; i < absolutePath.length; i++) {
    var params = absolutePath[i];
    var command = params[0];
    var nextSegment = absolutePath[i + 1];
    var useStartOffset = i === 0 && (startOffsetX !== 0 || startOffsetY !== 0);
    var useEndOffset = (i === absolutePath.length - 1 || nextSegment && (nextSegment[0] === 'M' || nextSegment[0] === 'Z')) && endOffsetX !== 0 && endOffsetY !== 0;
    var _ref = useStartOffset ? [startOffsetX, startOffsetY] : [0, 0],
      _ref2 = _slicedToArray(_ref, 2),
      startOffsetXTemp = _ref2[0],
      startOffsetYTemp = _ref2[1];
    var _ref3 = useEndOffset ? [endOffsetX, endOffsetY] : [0, 0],
      _ref4 = _slicedToArray(_ref3, 2),
      endOffsetXTemp = _ref4[0],
      endOffsetYTemp = _ref4[1];
    switch (command) {
      case 'M':
        // Use start marker offset
        context.moveTo(params[1] + startOffsetXTemp, params[2] + startOffsetYTemp);
        break;
      case 'L':
        context.lineTo(params[1] + endOffsetXTemp, params[2] + endOffsetYTemp);
        break;
      case 'Q':
        context.quadraticCurveTo(params[1], params[2], params[3] + endOffsetXTemp, params[4] + endOffsetYTemp);
        break;
      case 'C':
        context.bezierCurveTo(params[1], params[2], params[3], params[4], params[5] + endOffsetXTemp, params[6] + endOffsetYTemp);
        break;
      case 'A':
        {
          // FIXME startOffset / endOffset
          var arcParams = segments[i].arcParams;
          var cx = arcParams.cx,
            cy = arcParams.cy,
            rx = arcParams.rx,
            ry = arcParams.ry,
            startAngle = arcParams.startAngle,
            endAngle = arcParams.endAngle,
            xRotation = arcParams.xRotation,
            sweepFlag = arcParams.sweepFlag;
          // @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
          if (context.ellipse) {
            context.ellipse(cx, cy, rx, ry, xRotation, startAngle, endAngle, !!(1 - sweepFlag));
          } else {
            // @see https://stackoverflow.com/a/47494351
            var r = rx > ry ? rx : ry;
            var scaleX = rx > ry ? 1 : rx / ry;
            var scaleY = rx > ry ? ry / rx : 1;
            context.translate(cx, cy);
            context.rotate(xRotation);
            context.scale(scaleX, scaleY);
            context.arc(0, 0, r, startAngle, endAngle, !!(1 - sweepFlag));
            context.scale(1 / scaleX, 1 / scaleY);
            context.rotate(-xRotation);
            context.translate(-cx, -cy);
          }
          if (useEndOffset) {
            context.lineTo(params[6] + endOffsetX, params[7] + endOffsetY);
          }
          break;
        }
      case 'Z':
        context.closePath();
        break;
    }
  }
}

function generatePath$2(context, parsedStyle) {
  var markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var points = parsedStyle.points.points;
  var length = points.length;
  var x1 = points[0][0];
  var y1 = points[0][1];
  var x2 = points[length - 1][0];
  var y2 = points[length - 1][1];
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
    x = points[1][0] - points[0][0];
    y = points[1][1] - points[0][1];
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
    x = points[length - 1][0] - points[0][0];
    y = points[length - 1][1] - points[0][1];
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  context.moveTo(x1 + (startOffsetX || endOffsetX), y1 + (startOffsetY || endOffsetY));
  for (var i = 1; i < length - 1; i++) {
    var point = points[i];
    context.lineTo(point[0], point[1]);
  }
  context.lineTo(x2, y2);
}

function generatePath$1(context, parsedStyle) {
  var markerStart = parsedStyle.markerStart,
    markerEnd = parsedStyle.markerEnd,
    markerStartOffset = parsedStyle.markerStartOffset,
    markerEndOffset = parsedStyle.markerEndOffset;
  var points = parsedStyle.points.points;
  var length = points.length;
  var x1 = points[0][0];
  var y1 = points[0][1];
  var x2 = points[length - 1][0];
  var y2 = points[length - 1][1];
  var startOffsetX = 0;
  var startOffsetY = 0;
  var endOffsetX = 0;
  var endOffsetY = 0;
  var rad = 0;
  var x;
  var y;
  if (markerStart && isDisplayObject(markerStart) && markerStartOffset) {
    x = points[1][0] - points[0][0];
    y = points[1][1] - points[0][1];
    rad = Math.atan2(y, x);
    startOffsetX = Math.cos(rad) * (markerStartOffset || 0);
    startOffsetY = Math.sin(rad) * (markerStartOffset || 0);
  }
  if (markerEnd && isDisplayObject(markerEnd) && markerEndOffset) {
    x = points[length - 2][0] - points[length - 1][0];
    y = points[length - 2][1] - points[length - 1][1];
    rad = Math.atan2(y, x);
    endOffsetX = Math.cos(rad) * (markerEndOffset || 0);
    endOffsetY = Math.sin(rad) * (markerEndOffset || 0);
  }
  context.moveTo(x1 + startOffsetX, y1 + startOffsetY);
  for (var i = 1; i < length - 1; i++) {
    var point = points[i];
    context.lineTo(point[0], point[1]);
  }
  context.lineTo(x2 + endOffsetX, y2 + endOffsetY);
}

function generatePath(context, parsedStyle) {
  var _parsedStyle$x = parsedStyle.x,
    x = _parsedStyle$x === void 0 ? 0 : _parsedStyle$x,
    _parsedStyle$y = parsedStyle.y,
    y = _parsedStyle$y === void 0 ? 0 : _parsedStyle$y,
    radius = parsedStyle.radius,
    width = parsedStyle.width,
    height = parsedStyle.height;
  var w = width;
  var h = height;
  var hasRadius = radius && radius.some(function (r) {
    return r !== 0;
  });
  if (!hasRadius) {
    // Canvas support negative width/height of rect
    context.rect(x, y, w, h);
  } else {
    var signX = width > 0 ? 1 : -1;
    var signY = height > 0 ? 1 : -1;
    var sweepFlag = signX + signY === 0;
    var _radius$map = radius.map(function (r) {
        return clamp(r, 0, Math.min(Math.abs(w) / 2, Math.abs(h) / 2));
      }),
      _radius$map2 = _slicedToArray(_radius$map, 4),
      tlr = _radius$map2[0],
      trr = _radius$map2[1],
      brr = _radius$map2[2],
      blr = _radius$map2[3];
    context.moveTo(signX * tlr + x, y);
    context.lineTo(w - signX * trr + x, y);
    if (trr !== 0) {
      context.arc(w - signX * trr + x, signY * trr + y, trr, -signY * Math.PI / 2, signX > 0 ? 0 : Math.PI, sweepFlag);
    }
    context.lineTo(w + x, h - signY * brr + y);
    if (brr !== 0) {
      context.arc(w - signX * brr + x, h - signY * brr + y, brr, signX > 0 ? 0 : Math.PI, signY > 0 ? Math.PI / 2 : 1.5 * Math.PI, sweepFlag);
    }
    context.lineTo(signX * blr + x, h + y);
    if (blr !== 0) {
      context.arc(signX * blr + x, h - signY * blr + y, blr, signY > 0 ? Math.PI / 2 : -Math.PI / 2, signX > 0 ? Math.PI : 0, sweepFlag);
    }
    context.lineTo(x, signY * tlr + y);
    if (tlr !== 0) {
      context.arc(signX * tlr + x, signY * tlr + y, tlr, signX > 0 ? Math.PI : 0, signY > 0 ? Math.PI * 1.5 : Math.PI / 2, sweepFlag);
    }
  }
}

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'canvas-path-generator';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      var _pathGeneratorFactory;
      var pathGeneratorFactory = (_pathGeneratorFactory = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_pathGeneratorFactory, Shape.CIRCLE, generatePath$6), Shape.ELLIPSE, generatePath$5), Shape.RECT, generatePath), Shape.LINE, generatePath$4), Shape.POLYLINE, generatePath$1), Shape.POLYGON, generatePath$2), Shape.PATH, generatePath$3), Shape.TEXT, undefined), Shape.GROUP, undefined), Shape.IMAGE, undefined), _defineProperty(_defineProperty(_defineProperty(_pathGeneratorFactory, Shape.HTML, undefined), Shape.MESH, undefined), Shape.FRAGMENT, undefined));

      // @ts-ignore
      this.context.pathGeneratorFactory = pathGeneratorFactory;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // @ts-ignore
      delete this.context.pathGeneratorFactory;
    }
  }]);
}(AbstractRendererPlugin);

export { Plugin };
//# sourceMappingURL=index.esm.js.map
