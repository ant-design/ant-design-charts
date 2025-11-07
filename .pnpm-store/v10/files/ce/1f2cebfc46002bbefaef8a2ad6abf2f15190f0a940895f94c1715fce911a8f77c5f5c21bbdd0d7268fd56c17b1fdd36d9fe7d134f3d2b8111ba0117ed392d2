/*!
 * @antv/g-plugin-canvas-picker
 * @description A G plugin for picking in canvas
 * @version 2.1.27
 * @date 7/30/2025, 1:37:32 PM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
'use strict';

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _callSuper = require('@babel/runtime/helpers/callSuper');
var _inherits = require('@babel/runtime/helpers/inherits');
var gLite = require('@antv/g-lite');
var _createForOfIteratorHelper = require('@babel/runtime/helpers/createForOfIteratorHelper');
var _regeneratorRuntime = require('@babel/runtime/helpers/regeneratorRuntime');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var glMatrix = require('gl-matrix');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var gMath = require('@antv/g-math');
var util = require('@antv/util');
var _objectSpread = require('@babel/runtime/helpers/objectSpread2');

var tmpVec3a = glMatrix.vec3.create();
var tmpVec3b = glMatrix.vec3.create();
var tmpVec3c = glMatrix.vec3.create();
var tmpMat4 = glMatrix.mat4.create();
/**
 * pick shape(s) with Mouse/Touch event
 *
 * 1. find AABB with r-tree
 * 2. do math calculation with geometry in an accurate way
 */
var CanvasPickerPlugin = /*#__PURE__*/function () {
  function CanvasPickerPlugin() {
    var _this = this;
    _classCallCheck(this, CanvasPickerPlugin);
    this.isHit = function (displayObject, position, worldTransform, isClipPath) {
      // use picker for current shape's type
      var pick = _this.context.pointInPathPickerFactory[displayObject.nodeName];
      if (pick) {
        // invert with world matrix
        var invertWorldMat = glMatrix.mat4.invert(tmpMat4, worldTransform);

        // transform client position to local space, do picking in local space
        var localPosition = glMatrix.vec3.transformMat4(tmpVec3b, glMatrix.vec3.set(tmpVec3c, position[0], position[1], 0), invertWorldMat);
        if (pick(displayObject, new gLite.Point(localPosition[0], localPosition[1]), isClipPath, _this.isPointInPath, _this.context, _this.runtime)) {
          return true;
        }
      }
      return false;
    };
    /**
     * use native picking method
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/isPointInPath
     */
    this.isPointInPath = function (displayObject, position) {
      var context = _this.runtime.offscreenCanvasCreator.getOrCreateContext(_this.context.config.offscreenCanvas);
      var generatePath = _this.context.pathGeneratorFactory[displayObject.nodeName];
      if (generatePath) {
        context.beginPath();
        generatePath(context, displayObject.parsedStyle);
        context.closePath();
      }
      return context.isPointInPath(position.x, position.y);
    };
  }
  return _createClass(CanvasPickerPlugin, [{
    key: "apply",
    value: function apply(context, runtime) {
      var _renderingContext$roo,
        _this2 = this;
      var renderingService = context.renderingService,
        renderingContext = context.renderingContext;
      this.context = context;
      this.runtime = runtime;
      var document = (_renderingContext$roo = renderingContext.root) === null || _renderingContext$roo === void 0 ? void 0 : _renderingContext$roo.ownerDocument;
      renderingService.hooks.pick.tapPromise(CanvasPickerPlugin.tag, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
          return _regeneratorRuntime().wrap(function (_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this2.pick(document, result));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      renderingService.hooks.pickSync.tap(CanvasPickerPlugin.tag, function (result) {
        return _this2.pick(document, result);
      });
    }
  }, {
    key: "pick",
    value: function pick(document, result) {
      var topmost = result.topmost,
        _result$position = result.position,
        x = _result$position.x,
        y = _result$position.y;

      // position in world space
      var position = glMatrix.vec3.set(tmpVec3a, x, y, 0);

      // query by AABB first with spatial index(r-tree)
      var hitTestList = document.elementsFromBBox(position[0], position[1], position[0], position[1]);

      // test with clip path & origin shape
      // @see https://github.com/antvis/g/issues/1064
      var pickedDisplayObjects = [];
      var _iterator = _createForOfIteratorHelper(hitTestList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _displayObject = _step.value;
          var worldTransform = _displayObject.getWorldTransform();
          var isHitOriginShape = this.isHit(_displayObject, position, worldTransform, false);
          if (isHitOriginShape) {
            // should look up in the ancestor node
            var clipped = gLite.findClosestClipPathTarget(_displayObject);
            if (clipped) {
              var clipPath = clipped.parsedStyle.clipPath;
              var isHitClipPath = this.isHit(clipPath, position, clipPath.getWorldTransform(), true);
              if (isHitClipPath) {
                if (topmost) {
                  result.picked = [_displayObject];
                  return result;
                }
                pickedDisplayObjects.push(_displayObject);
              }
            } else {
              if (topmost) {
                result.picked = [_displayObject];
                return result;
              }
              pickedDisplayObjects.push(_displayObject);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      result.picked = pickedDisplayObjects;
      return result;
    }
  }]);
}();
CanvasPickerPlugin.tag = 'CanvasPicker';

function isPointInPath$8(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    _ref$cx = _ref.cx,
    cx = _ref$cx === void 0 ? 0 : _ref$cx,
    _ref$cy = _ref.cy,
    cy = _ref$cy === void 0 ? 0 : _ref$cy,
    r = _ref.r,
    fill = _ref.fill,
    stroke = _ref.stroke,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var halfLineWidth = (lineWidth + increasedLineWidthForHitTesting) / 2;
  var absDistance = gMath.distance(cx, cy, position.x, position.y);
  var _isFillOrStrokeAffect = gLite.isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  if (hasFill && hasStroke || isClipPath) {
    return absDistance <= r + halfLineWidth;
  }
  if (hasFill) {
    return absDistance <= r;
  }
  if (hasStroke) {
    return absDistance >= r - halfLineWidth && absDistance <= r + halfLineWidth;
  }
  return false;
}

function ellipseDistance(squareX, squareY, rx, ry) {
  return squareX / (rx * rx) + squareY / (ry * ry);
}
function isPointInPath$7(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    _ref$cx = _ref.cx,
    cx = _ref$cx === void 0 ? 0 : _ref$cx,
    _ref$cy = _ref.cy,
    cy = _ref$cy === void 0 ? 0 : _ref$cy,
    rx = _ref.rx,
    ry = _ref.ry,
    fill = _ref.fill,
    stroke = _ref.stroke,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var x = position.x,
    y = position.y;
  var _isFillOrStrokeAffect = gLite.isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var halfLineWith = (lineWidth + increasedLineWidthForHitTesting) / 2;
  var squareX = (x - cx) * (x - cx);
  var squareY = (y - cy) * (y - cy);
  // 使用椭圆的公式： x*x/rx*rx + y*y/ry*ry = 1;
  if (hasFill && hasStroke || isClipPath) {
    return ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1;
  }
  if (hasFill) {
    return ellipseDistance(squareX, squareY, rx, ry) <= 1;
  }
  if (hasStroke) {
    return ellipseDistance(squareX, squareY, rx - halfLineWith, ry - halfLineWith) >= 1 && ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1;
  }
  return false;
}

function inBox(minX, minY, width, height, x, y) {
  return x >= minX && x <= minX + width && y >= minY && y <= minY + height;
}
function inRect(minX, minY, width, height, lineWidth, x, y) {
  var halfWidth = lineWidth / 2;
  // 将四个边看做矩形来检测，比边的检测算法要快
  return inBox(minX - halfWidth, minY - halfWidth, width, lineWidth, x, y) ||
  // 上边
  inBox(minX + width - halfWidth, minY - halfWidth, lineWidth, height, x, y) ||
  // 右边
  inBox(minX + halfWidth, minY + height - halfWidth, width, lineWidth, x, y) ||
  // 下边
  inBox(minX - halfWidth, minY + halfWidth, lineWidth, height, x, y); // 左边
}
function inArc(cx, cy, r, startAngle, endAngle, lineWidth, x, y) {
  var angle = (Math.atan2(y - cy, x - cx) + Math.PI * 2) % (Math.PI * 2); // 转换到 0 - 2 * Math.PI 之间
  // if (angle < startAngle || angle > endAngle) {
  //   return false;
  // }
  var point = {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle)
  };
  return gMath.distance(point.x, point.y, x, y) <= lineWidth / 2;
}
function inLine(x1, y1, x2, y2, lineWidth, x, y) {
  var minX = Math.min(x1, x2);
  var maxX = Math.max(x1, x2);
  var minY = Math.min(y1, y2);
  var maxY = Math.max(y1, y2);
  var halfWidth = lineWidth / 2;
  // 因为目前的方案是计算点到直线的距离，而有可能会在延长线上，所以要先判断是否在包围盒内
  // 这种方案会在水平或者竖直的情况下载线的延长线上有半 lineWidth 的误差
  if (!(x >= minX - halfWidth && x <= maxX + halfWidth && y >= minY - halfWidth && y <= maxY + halfWidth)) {
    return false;
  }
  // 因为已经计算了包围盒，所以仅需要计算到直线的距离即可，可以显著提升性能
  return gMath.linePointToLine(x1, y1, x2, y2, x, y) <= lineWidth / 2;
}
function inPolyline(points, lineWidth, x, y, isClose) {
  var count = points.length;
  if (count < 2) {
    return false;
  }
  for (var i = 0; i < count - 1; i++) {
    var x1 = points[i][0];
    var y1 = points[i][1];
    var x2 = points[i + 1][0];
    var y2 = points[i + 1][1];
    if (inLine(x1, y1, x2, y2, lineWidth, x, y)) {
      return true;
    }
  }

  // 如果封闭，则计算起始点和结束点的边
  if (isClose) {
    var first = points[0];
    var last = points[count - 1];
    if (inLine(first[0], first[1], last[0], last[1], lineWidth, x, y)) {
      return true;
    }
  }
  return false;
}

// 多边形的射线检测，参考：https://blog.csdn.net/WilliamSun0122/article/details/77994526
var tolerance = 1e-6;
// 三态函数，判断两个double在eps精度下的大小关系
function dcmp(x) {
  if (Math.abs(x) < tolerance) {
    return 0;
  }
  return x < 0 ? -1 : 1;
}

// 判断点Q是否在p1和p2的线段上
function onSegment(p1, p2, q) {
  if ((q[0] - p1[0]) * (p2[1] - p1[1]) === (p2[0] - p1[0]) * (q[1] - p1[1]) && Math.min(p1[0], p2[0]) <= q[0] && q[0] <= Math.max(p1[0], p2[0]) && Math.min(p1[1], p2[1]) <= q[1] && q[1] <= Math.max(p1[1], p2[1])) {
    return true;
  }
  return false;
}

// 判断点P在多边形内-射线法
function inPolygon(points, x, y) {
  var isHit = false;
  var n = points.length;
  if (n <= 2) {
    // svg 中点小于 3 个时，不显示，也无法被拾取
    return false;
  }
  for (var i = 0; i < n; i++) {
    var p1 = points[i];
    var p2 = points[(i + 1) % n];
    if (onSegment(p1, p2, [x, y])) {
      // 点在多边形一条边上
      return true;
    }
    // 前一个判断min(p1[1],p2[1])<P.y<=max(p1[1],p2[1])
    // 后一个判断被测点 在 射线与边交点 的左边
    if (dcmp(p1[1] - y) > 0 !== dcmp(p2[1] - y) > 0 && dcmp(x - (y - p1[1]) * (p1[0] - p2[0]) / (p1[1] - p2[1]) - p1[0]) < 0) {
      isHit = !isHit;
    }
  }
  return isHit;
}
function inPolygons(polygons, x, y) {
  var isHit = false;
  for (var i = 0; i < polygons.length; i++) {
    var points = polygons[i];
    isHit = inPolygon(points, x, y);
    if (isHit) {
      break;
    }
  }
  return isHit;
}

function isPointInPath$6(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    x1 = _ref.x1,
    y1 = _ref.y1,
    x2 = _ref.x2,
    y2 = _ref.y2,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents,
    fill = _ref.fill,
    stroke = _ref.stroke;
  var _isFillOrStrokeAffect = gLite.isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasStroke = _isFillOrStrokeAffect2[1];
  if (!hasStroke && !isClipPath || !lineWidth) {
    return false;
  }
  return inLine(x1, y1, x2, y2, lineWidth + increasedLineWidthForHitTesting, position.x, position.y);
}

// TODO: replace it with method in @antv/util
function isPointInStroke(segments, lineWidth, px, py, length) {
  var isHit = false;
  var halfWidth = lineWidth / 2;
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    var currentPoint = segment.currentPoint,
      params = segment.params,
      prePoint = segment.prePoint,
      box = segment.box;
    // 如果在前面已经生成过包围盒，直接按照包围盒计算
    if (box && !inBox(box.x - halfWidth, box.y - halfWidth, box.width + lineWidth, box.height + lineWidth, px, py)) {
      continue;
    }
    switch (segment.command) {
      // L 和 Z 都是直线， M 不进行拾取
      case 'L':
      case 'Z':
        isHit = inLine(prePoint[0], prePoint[1], currentPoint[0], currentPoint[1], lineWidth, px, py);
        if (isHit) {
          return true;
        }
        break;
      case 'Q':
        var qDistance = gMath.quadPointDistance(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], px, py);
        isHit = qDistance <= lineWidth / 2;
        if (isHit) {
          return true;
        }
        break;
      case 'C':
        var cDistance = gMath.cubicPointDistance(prePoint[0],
        // 上一段结束位置, 即 C 的起始点
        prePoint[1], params[1],
        // 'C' 的参数，1、2 为第一个控制点，3、4 为第二个控制点，5、6 为结束点
        params[2], params[3], params[4], params[5], params[6], px, py, length);
        isHit = cDistance <= lineWidth / 2;
        if (isHit) {
          return true;
        }
        break;
      case 'A':
        // cache conversion result
        if (!segment.cubicParams) {
          segment.cubicParams = util.arcToCubic(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], params[5], params[6], params[7], undefined);
        }
        var args = segment.cubicParams;

        // fixArc
        var prePointInCubic = prePoint;
        for (var _i = 0; _i < args.length; _i += 6) {
          var _cDistance = gMath.cubicPointDistance(prePointInCubic[0],
          // 上一段结束位置, 即 C 的起始点
          prePointInCubic[1], args[_i], args[_i + 1], args[_i + 2], args[_i + 3], args[_i + 4], args[_i + 5], px, py, length);
          prePointInCubic = [args[_i + 4], args[_i + 5]];
          isHit = _cDistance <= lineWidth / 2;
          if (isHit) {
            return true;
          }
        }
        break;
    }
  }
  return isHit;
}
function isPointInPath$5(displayObject, position, isClipPath, isPointInPath, renderingPluginContext, runtime) {
  var _ref = displayObject.parsedStyle,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    stroke = _ref.stroke,
    fill = _ref.fill,
    d = _ref.d,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var segments = d.segments,
    hasArc = d.hasArc,
    polylines = d.polylines,
    polygons = d.polygons;
  var _isFillOrStrokeAffect = gLite.isFillOrStrokeAffected(pointerEvents,
    // Only a closed path can be filled.
    (polygons === null || polygons === void 0 ? void 0 : polygons.length) && fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var totalLength = gLite.getOrCalculatePathTotalLength(displayObject);
  var isHit = false;
  if (hasFill || isClipPath) {
    if (hasArc) {
      // 存在曲线时，暂时使用 canvas 的 api 计算，后续可以进行多边形切割
      isHit = isPointInPath(displayObject, position);
    } else {
      // 提取出来的多边形包含闭合的和非闭合的，在这里统一按照多边形处理
      isHit = inPolygons(polygons, position.x, position.y) || inPolygons(polylines, position.x, position.y);
    }
    return isHit;
  }
  if (hasStroke || isClipPath) {
    isHit = isPointInStroke(segments, lineWidth + increasedLineWidthForHitTesting, position.x, position.y, totalLength);
  }
  return isHit;
}

function isPointInPath$4(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    stroke = _ref.stroke,
    fill = _ref.fill,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    points = _ref.points,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var _isFillOrStrokeAffect = gLite.isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var isHit = false;
  if (hasStroke || isClipPath) {
    isHit = inPolyline(points.points, lineWidth + increasedLineWidthForHitTesting, position.x, position.y, true);
  }
  if (!isHit && (hasFill || isClipPath)) {
    isHit = inPolygon(points.points, position.x, position.y);
  }
  return isHit;
}

function isPointInPath$3(displayObject, position, isClipPath) {
  var _ref = displayObject.parsedStyle,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    points = _ref.points,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents,
    fill = _ref.fill,
    stroke = _ref.stroke;
  var _isFillOrStrokeAffect = gLite.isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasStroke = _isFillOrStrokeAffect2[1];
  if (!hasStroke && !isClipPath || !lineWidth) {
    return false;
  }
  return inPolyline(points.points, lineWidth + increasedLineWidthForHitTesting, position.x, position.y, false);
}

function isPointInPath$2(displayObject, position, isClipPath, isPointInPath, runtime) {
  var _ref = displayObject.parsedStyle,
    radius = _ref.radius,
    fill = _ref.fill,
    stroke = _ref.stroke,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
    _ref$increasedLineWid = _ref.increasedLineWidthForHitTesting,
    increasedLineWidthForHitTesting = _ref$increasedLineWid === void 0 ? 0 : _ref$increasedLineWid,
    _ref$x = _ref.x,
    x = _ref$x === void 0 ? 0 : _ref$x,
    _ref$y = _ref.y,
    y = _ref$y === void 0 ? 0 : _ref$y,
    width = _ref.width,
    height = _ref.height,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents;
  var _isFillOrStrokeAffect = gLite.isFillOrStrokeAffected(pointerEvents, fill, stroke),
    _isFillOrStrokeAffect2 = _slicedToArray(_isFillOrStrokeAffect, 2),
    hasFill = _isFillOrStrokeAffect2[0],
    hasStroke = _isFillOrStrokeAffect2[1];
  var hasRadius = radius && radius.some(function (r) {
    return r !== 0;
  });
  var lineWidthForHitTesting = lineWidth + increasedLineWidthForHitTesting;

  // 无圆角时的策略
  if (!hasRadius) {
    var halfWidth = lineWidthForHitTesting / 2;
    // 同时填充和带有边框
    if (hasFill && hasStroke || isClipPath) {
      return inBox(x - halfWidth, y - halfWidth, width + halfWidth, height + halfWidth, position.x, position.y);
    }
    // 仅填充
    if (hasFill) {
      return inBox(x, y, width, height, position.x, position.y);
    }
    if (hasStroke) {
      return inRect(x, y, width, height, lineWidthForHitTesting, position.x, position.y);
    }
  } else {
    var isHit = false;
    if (hasStroke || isClipPath) {
      isHit = inRectWithRadius(x, y, width, height, radius.map(function (r) {
        return util.clamp(r, 0, Math.min(Math.abs(width) / 2, Math.abs(height) / 2));
      }), lineWidthForHitTesting, position.x, position.y);
    }
    // 仅填充时带有圆角的矩形直接通过图形拾取
    // 以后可以改成纯数学的近似拾取，将圆弧切割成多边形
    if (!isHit && (hasFill || isClipPath)) {
      isHit = isPointInPath(displayObject, position);
    }
    return isHit;
  }
  return false;
}
function inRectWithRadius(minX, minY, width, height, radiusArray, lineWidth, x, y) {
  var _radiusArray = _slicedToArray(radiusArray, 4),
    tlr = _radiusArray[0],
    trr = _radiusArray[1],
    brr = _radiusArray[2],
    blr = _radiusArray[3];
  return inLine(minX + tlr, minY, minX + width - trr, minY, lineWidth, x, y) || inLine(minX + width, minY + trr, minX + width, minY + height - brr, lineWidth, x, y) || inLine(minX + width - brr, minY + height, minX + blr, minY + height, lineWidth, x, y) || inLine(minX, minY + height - blr, minX, minY + tlr, lineWidth, x, y) || inArc(minX + width - trr, minY + trr, trr, 1.5 * Math.PI, 2 * Math.PI, lineWidth, x, y) || inArc(minX + width - brr, minY + height - brr, brr, 0, 0.5 * Math.PI, lineWidth, x, y) || inArc(minX + blr, minY + height - blr, blr, 0.5 * Math.PI, Math.PI, lineWidth, x, y) || inArc(minX + tlr, minY + tlr, tlr, Math.PI, 1.5 * Math.PI, lineWidth, x, y);
}

function isPointInPath$1(displayObject, position, isClipPath, isPointInPath, renderingPluginContext, runtime) {
  var _ref = displayObject.parsedStyle,
    _ref$pointerEvents = _ref.pointerEvents,
    pointerEvents = _ref$pointerEvents === void 0 ? 'auto' : _ref$pointerEvents,
    _ref$x = _ref.x,
    x = _ref$x === void 0 ? 0 : _ref$x,
    _ref$y = _ref.y,
    y = _ref$y === void 0 ? 0 : _ref$y,
    width = _ref.width,
    height = _ref.height;
  if (pointerEvents === 'non-transparent-pixel') {
    var offscreenCanvas = renderingPluginContext.config.offscreenCanvas;
    var canvas = runtime.offscreenCanvasCreator.getOrCreateCanvas(offscreenCanvas);
    var context = runtime.offscreenCanvasCreator.getOrCreateContext(offscreenCanvas, {
      willReadFrequently: true
    });
    canvas.width = width;
    canvas.height = height;
    renderingPluginContext.defaultStyleRendererFactory[gLite.Shape.IMAGE].render(context, _objectSpread(_objectSpread({}, displayObject.parsedStyle), {}, {
      x: 0,
      y: 0
    }), displayObject, undefined, undefined, undefined);
    var imagedata = context.getImageData(position.x - x, position.y - y, 1, 1).data;
    return imagedata.every(function (component) {
      return component !== 0;
    });
  }
  return true;
}

function isPointInPath(displayObject, position, isClipPath, isPointInPath) {
  var bounds = displayObject.getGeometryBounds();

  // @see https://stackoverflow.com/questions/28706989/how-do-i-check-if-a-mouse-click-is-inside-a-rotated-text-on-the-html5-canvas-in
  return position.x >= bounds.min[0] && position.y >= bounds.min[1] && position.x <= bounds.max[0] && position.y <= bounds.max[1];
}

var Plugin = /*#__PURE__*/function (_AbstractRendererPlug) {
  function Plugin() {
    var _this;
    _classCallCheck(this, Plugin);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plugin, [].concat(args));
    _this.name = 'canvas-picker';
    return _this;
  }
  _inherits(Plugin, _AbstractRendererPlug);
  return _createClass(Plugin, [{
    key: "init",
    value: function init() {
      var _pointInPathPickerFac;
      var pointInPathPickerFactory = (_pointInPathPickerFac = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_pointInPathPickerFac, gLite.Shape.CIRCLE, isPointInPath$8), gLite.Shape.ELLIPSE, isPointInPath$7), gLite.Shape.RECT, isPointInPath$2), gLite.Shape.LINE, isPointInPath$6), gLite.Shape.POLYLINE, isPointInPath$3), gLite.Shape.POLYGON, isPointInPath$4), gLite.Shape.PATH, isPointInPath$5), gLite.Shape.TEXT, isPointInPath), gLite.Shape.GROUP, null), gLite.Shape.IMAGE, isPointInPath$1), _defineProperty(_defineProperty(_pointInPathPickerFac, gLite.Shape.HTML, null), gLite.Shape.MESH, null));

      // @ts-ignore
      this.context.pointInPathPickerFactory = pointInPathPickerFactory;
      this.addRenderingPlugin(new CanvasPickerPlugin());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // @ts-ignore
      delete this.context.pointInPathPickerFactory;
      this.removeAllRenderingPlugins();
    }
  }]);
}(gLite.AbstractRendererPlugin);

exports.Plugin = Plugin;
//# sourceMappingURL=index.js.map
