/*!
 * @antv/g-math
 * @description Geometry util
 * @version 3.1.0
 * @date 12/22/2025, 3:02:36 AM
 * @author AntVis
 * @docs https://g.antv.antgroup.com/
 */
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { isNumberEqual } from '@antv/util';
import { vec2 } from 'gl-matrix';

function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}
function getBBoxByArray(xArr, yArr) {
  var minX = Math.min.apply(Math, _toConsumableArray(xArr));
  var minY = Math.min.apply(Math, _toConsumableArray(yArr));
  var maxX = Math.max.apply(Math, _toConsumableArray(xArr));
  var maxY = Math.max.apply(Math, _toConsumableArray(yArr));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function piMod(angle) {
  return (angle + Math.PI * 2) % (Math.PI * 2);
}

function copysign(v1, v2) {
  var absv = Math.abs(v1);
  return v2 > 0 ? absv : absv * -1;
}
function nearestPoint$4(x, y, rx, ry, x0, y0) {
  var a = rx;
  var b = ry;
  // 假如椭圆半径为0则返回圆心
  if (a === 0 || b === 0) {
    return {
      x: x,
      y: y
    };
  }
  // 转换成 0， 0 为中心的椭圆计算
  var relativeX = x0 - x;
  var relativeY = y0 - y;
  var px = Math.abs(relativeX);
  var py = Math.abs(relativeY);
  var squareA = a * a;
  var squareB = b * b;
  // const angle0 = Math.atan2(relativeY, relativeX);
  var t = Math.PI / 4;
  var nearestX = 0; // 椭圆上的任一点
  var nearestY = 0;
  // 迭代 4 次
  for (var i = 0; i < 4; i++) {
    nearestX = a * Math.cos(t);
    nearestY = b * Math.sin(t);
    var ex = (squareA - squareB) * Math.pow(Math.cos(t), 3) / a;
    var ey = (squareB - squareA) * Math.pow(Math.sin(t), 3) / b;
    var rx1 = nearestX - ex;
    var ry1 = nearestY - ey;
    var qx = px - ex;
    var qy = py - ey;
    var r = Math.hypot(ry1, rx1);
    var q = Math.hypot(qy, qx);
    var delta_c = r * Math.asin((rx1 * qy - ry1 * qx) / (r * q));
    var delta_t = delta_c / Math.sqrt(squareA + squareB - nearestX * nearestX - nearestY * nearestY);
    t += delta_t;
    t = Math.min(Math.PI / 2, Math.max(0, t));
  }
  return {
    x: x + copysign(nearestX, relativeX),
    y: y + copysign(nearestY, relativeY)
  };
}

// 偏导数 x
function derivativeXAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle) {
  return -1 * rx * Math.cos(xRotation) * Math.sin(angle) - ry * Math.sin(xRotation) * Math.cos(angle);
}

// 偏导数 y
function derivativeYAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle) {
  return -1 * rx * Math.sin(xRotation) * Math.sin(angle) + ry * Math.cos(xRotation) * Math.cos(angle);
}

// x 的极值
function xExtrema(rx, ry, xRotation) {
  return Math.atan(-ry / rx * Math.tan(xRotation));
}

// y 的极值
function yExtrema(rx, ry, xRotation) {
  return Math.atan(ry / (rx * Math.tan(xRotation)));
}

// 根据角度求 x 坐标
function xAt(cx, cy, rx, ry, xRotation, angle) {
  return rx * Math.cos(xRotation) * Math.cos(angle) - ry * Math.sin(xRotation) * Math.sin(angle) + cx;
}

// 根据角度求 y 坐标
function yAt(cx, cy, rx, ry, xRotation, angle) {
  return rx * Math.sin(xRotation) * Math.cos(angle) + ry * Math.cos(xRotation) * Math.sin(angle) + cy;
}

// 获取点在椭圆上的角度
function getAngle(rx, ry, x0, y0) {
  var angle = Math.atan2(y0 * rx, x0 * ry);
  // 转换到 0 - 2PI 内
  return (angle + Math.PI * 2) % (Math.PI * 2);
}

// 根据角度获取，x,y
function getPoint(rx, ry, angle) {
  return {
    x: rx * Math.cos(angle),
    y: ry * Math.sin(angle)
  };
}

// 旋转
function rotate(x, y, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  return [x * cos - y * sin, x * sin + y * cos];
}
function box$5(cx, cy, rx, ry, xRotation, startAngle, endAngle) {
  var xDim = xExtrema(rx, ry, xRotation);
  var minX = Infinity;
  var maxX = -Infinity;
  var xs = [startAngle, endAngle];
  for (var i = -Math.PI * 2; i <= Math.PI * 2; i += Math.PI) {
    var xAngle = xDim + i;
    if (startAngle < endAngle) {
      if (startAngle < xAngle && xAngle < endAngle) {
        xs.push(xAngle);
      }
    } else if (endAngle < xAngle && xAngle < startAngle) {
      xs.push(xAngle);
    }
  }
  for (var _i = 0; _i < xs.length; _i++) {
    var x = xAt(cx, cy, rx, ry, xRotation, xs[_i]);
    if (x < minX) {
      minX = x;
    }
    if (x > maxX) {
      maxX = x;
    }
  }
  var yDim = yExtrema(rx, ry, xRotation);
  var minY = Infinity;
  var maxY = -Infinity;
  var ys = [startAngle, endAngle];
  for (var _i2 = -Math.PI * 2; _i2 <= Math.PI * 2; _i2 += Math.PI) {
    var yAngle = yDim + _i2;
    if (startAngle < endAngle) {
      if (startAngle < yAngle && yAngle < endAngle) {
        ys.push(yAngle);
      }
    } else if (endAngle < yAngle && yAngle < startAngle) {
      ys.push(yAngle);
    }
  }
  for (var _i3 = 0; _i3 < ys.length; _i3++) {
    var y = yAt(cx, cy, rx, ry, xRotation, ys[_i3]);
    if (y < minY) {
      minY = y;
    }
    if (y > maxY) {
      maxY = y;
    }
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function nearestPoint$3(cx, cy, rx, ry, xRotation, startAngle, endAngle, x0, y0) {
  // 将最近距离问题转换成到椭圆中心 0,0 没有旋转的椭圆问题
  var relativeVector = rotate(x0 - cx, y0 - cy, -xRotation);
  var _relativeVector = _slicedToArray(relativeVector, 2),
    x1 = _relativeVector[0],
    y1 = _relativeVector[1];
  // 计算点到椭圆的最近的点
  var relativePoint = nearestPoint$4(0, 0, rx, ry, x1, y1);
  // 获取点在椭圆上的角度
  var angle = getAngle(rx, ry, relativePoint.x, relativePoint.y);
  // 点没有在圆弧上
  if (angle < startAngle) {
    // 小于起始圆弧
    relativePoint = getPoint(rx, ry, startAngle);
  } else if (angle > endAngle) {
    // 大于结束圆弧
    relativePoint = getPoint(rx, ry, endAngle);
  }
  // 旋转到 xRotation 的角度
  var vector = rotate(relativePoint.x, relativePoint.y, xRotation);
  return {
    x: vector[0] + cx,
    y: vector[1] + cy
  };
}
function tangentAngle$4(cx, cy, rx, ry, xRotation, startAngle, endAngle, t) {
  var angle = (endAngle - startAngle) * t + startAngle;
  var dx = derivativeXAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle);
  var dy = derivativeYAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle);
  return piMod(Math.atan2(dy, dx));
}

var EPSILON = 0.0001;
/**
 * 使用牛顿切割法求最近的点
 * @param {number[]} xArr      点的 x 数组
 * @param {number[]} yArr      点的 y 数组
 * @param {number}   x         指定的点 x
 * @param {number}   y         指定的点 y
 * @param {Function} tCallback 差值函数
 */
function nearestPoint$2(xArr, yArr, x, y, tCallback, length) {
  var t = -1;
  var d = Infinity;
  var v0 = [x, y];
  var segNum = 20;
  if (length && length > 200) {
    segNum = length / 10;
  }
  var increaseRate = 1 / segNum;
  var interval = increaseRate / 10;
  for (var i = 0; i <= segNum; i++) {
    var _t = i * increaseRate;
    var v1 = [tCallback.apply(void 0, _toConsumableArray(xArr.concat([_t]))), tCallback.apply(void 0, _toConsumableArray(yArr.concat([_t])))];
    var d1 = distance(v0[0], v0[1], v1[0], v1[1]);
    if (d1 < d) {
      t = _t;
      d = d1;
    }
  }
  // 提前终止
  if (t === 0) {
    return {
      x: xArr[0],
      y: yArr[0]
    };
  }
  if (t === 1) {
    var count = xArr.length;
    return {
      x: xArr[count - 1],
      y: yArr[count - 1]
    };
  }
  d = Infinity;
  for (var _i = 0; _i < 32; _i++) {
    if (interval < EPSILON) {
      break;
    }
    var prev = t - interval;
    var next = t + interval;
    var _v = [tCallback.apply(void 0, _toConsumableArray(xArr.concat([prev]))), tCallback.apply(void 0, _toConsumableArray(yArr.concat([prev])))];
    var _d = distance(v0[0], v0[1], _v[0], _v[1]);
    if (prev >= 0 && _d < d) {
      t = prev;
      d = _d;
    } else {
      var v2 = [tCallback.apply(void 0, _toConsumableArray(xArr.concat([next]))), tCallback.apply(void 0, _toConsumableArray(yArr.concat([next])))];
      var d2 = distance(v0[0], v0[1], v2[0], v2[1]);
      if (next <= 1 && d2 < d) {
        t = next;
        d = d2;
      } else {
        interval *= 0.5;
      }
    }
  }
  return {
    x: tCallback.apply(void 0, _toConsumableArray(xArr.concat([t]))),
    y: tCallback.apply(void 0, _toConsumableArray(yArr.concat([t])))
  };
}

// 近似求解 https://community.khronos.org/t/3d-cubic-bezier-segment-length/62363/2
function snapLength(xArr, yArr) {
  var totalLength = 0;
  var count = xArr.length;
  for (var i = 0; i < count; i++) {
    var x = xArr[i];
    var y = yArr[i];
    var nextX = xArr[(i + 1) % count];
    var nextY = yArr[(i + 1) % count];
    totalLength += distance(x, y, nextX, nextY);
  }
  return totalLength / 2;
}

function box$4(x1, y1, x2, y2) {
  return getBBoxByArray([x1, x2], [y1, y2]);
}
function length$4(x1, y1, x2, y2) {
  return distance(x1, y1, x2, y2);
}
function pointAt$3(x1, y1, x2, y2, t) {
  return {
    x: (1 - t) * x1 + t * x2,
    y: (1 - t) * y1 + t * y2
  };
}
function pointDistance$4(x1, y1, x2, y2, x, y) {
  // 投影距离 x1, y1 的向量，假设 p, p1, p2 三个点，投影点为 a
  // p1a = p1p.p1p2/|p1p2| * (p1p 的单位向量)
  var cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
  if (cross < 0) {
    return distance(x1, y1, x, y);
  }
  var lengthSquare = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  if (cross > lengthSquare) {
    return distance(x2, y2, x, y);
  }
  return pointToLine(x1, y1, x2, y2, x, y);
}
function pointToLine(x1, y1, x2, y2, x, y) {
  var d = [x2 - x1, y2 - y1];
  // 如果端点相等，则判定点到点的距离
  if (vec2.exactEquals(d, [0, 0])) {
    return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
  }
  var u = [-d[1], d[0]];
  vec2.normalize(u, u);
  var a = [x - x1, y - y1];
  return Math.abs(vec2.dot(a, u));
}
function tangentAngle$3(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1);
}

function cubicAt(p0, p1, p2, p3, t) {
  var onet = 1 - t; // t * t * t 的性能大概是 Math.pow(t, 3) 的三倍
  return onet * onet * onet * p0 + 3 * p1 * t * onet * onet + 3 * p2 * t * t * onet + p3 * t * t * t;
}
function derivativeAt(p0, p1, p2, p3, t) {
  var onet = 1 - t;
  return 3 * (onet * onet * (p1 - p0) + 2 * onet * t * (p2 - p1) + t * t * (p3 - p2));
}
function extrema$1(p0, p1, p2, p3) {
  var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
  var b = 6 * p0 - 12 * p1 + 6 * p2;
  var c = 3 * p1 - 3 * p0;
  var extremas = [];
  var t1;
  var t2;
  var discSqrt;
  if (isNumberEqual(a, 0)) {
    if (!isNumberEqual(b, 0)) {
      t1 = -c / b;
      if (t1 >= 0 && t1 <= 1) {
        extremas.push(t1);
      }
    }
  } else {
    var disc = b * b - 4 * a * c;
    if (isNumberEqual(disc, 0)) {
      extremas.push(-b / (2 * a));
    } else if (disc > 0) {
      discSqrt = Math.sqrt(disc);
      t1 = (-b + discSqrt) / (2 * a);
      t2 = (-b - discSqrt) / (2 * a);
      if (t1 >= 0 && t1 <= 1) {
        extremas.push(t1);
      }
      if (t2 >= 0 && t2 <= 1) {
        extremas.push(t2);
      }
    }
  }
  return extremas;
}

// 分割贝塞尔曲线
function divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  // 划分点
  var xt = cubicAt(x1, x2, x3, x4, t);
  var yt = cubicAt(y1, y2, y3, y4, t);
  // 计算两点之间的差值点
  var c1 = pointAt$3(x1, y1, x2, y2, t);
  var c2 = pointAt$3(x2, y2, x3, y3, t);
  var c3 = pointAt$3(x3, y3, x4, y4, t);
  var c12 = pointAt$3(c1.x, c1.y, c2.x, c2.y, t);
  var c23 = pointAt$3(c2.x, c2.y, c3.x, c3.y, t);
  return [[x1, y1, c1.x, c1.y, c12.x, c12.y, xt, yt], [xt, yt, c23.x, c23.y, c3.x, c3.y, x4, y4]];
}

// 使用迭代法取贝塞尔曲线的长度，二阶和三阶分开写，更清晰和便于调试
function cubicLength(x1, y1, x2, y2, x3, y3, x4, y4, iterationCount) {
  if (iterationCount === 0) {
    return snapLength([x1, x2, x3, x4], [y1, y2, y3, y4]);
  }
  var cubics = divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, 0.5);
  var left = [].concat(_toConsumableArray(cubics[0]), [iterationCount - 1]);
  var right = [].concat(_toConsumableArray(cubics[1]), [iterationCount - 1]);
  return cubicLength.apply(void 0, _toConsumableArray(left)) + cubicLength.apply(void 0, _toConsumableArray(right));
}
function box$3(x1, y1, x2, y2, x3, y3, x4, y4) {
  var xArr = [x1, x4];
  var yArr = [y1, y4];
  var xExtrema = extrema$1(x1, x2, x3, x4);
  var yExtrema = extrema$1(y1, y2, y3, y4);
  for (var i = 0; i < xExtrema.length; i++) {
    xArr.push(cubicAt(x1, x2, x3, x4, xExtrema[i]));
  }
  for (var _i = 0; _i < yExtrema.length; _i++) {
    yArr.push(cubicAt(y1, y2, y3, y4, yExtrema[_i]));
  }
  return getBBoxByArray(xArr, yArr);
}
function length$3(x1, y1, x2, y2, x3, y3, x4, y4) {
  // 迭代三次，划分成 8 段求长度
  return cubicLength(x1, y1, x2, y2, x3, y3, x4, y4, 3);
}
function nearestPoint$1(x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length) {
  return nearestPoint$2([x1, x2, x3, x4], [y1, y2, y3, y4], x0, y0, cubicAt, length);
}
function pointDistance$3(x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length) {
  var point = nearestPoint$1(x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length);
  return distance(point.x, point.y, x0, y0);
}
function pointAt$2(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  return {
    x: cubicAt(x1, x2, x3, x4, t),
    y: cubicAt(y1, y2, y3, y4, t)
  };
}
function tangentAngle$2(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  var dx = derivativeAt(x1, x2, x3, x4, t);
  var dy = derivativeAt(y1, y2, y3, y4, t);
  return piMod(Math.atan2(dy, dx));
}

function analyzePoints(points) {
  // 计算每段的长度和总的长度
  var totalLength = 0;
  var segments = [];
  for (var i = 0; i < points.length - 1; i++) {
    var from = points[i];
    var to = points[i + 1];
    var length = distance(from[0], from[1], to[0], to[1]);
    var seg = {
      from: from,
      to: to,
      length: length
    };
    segments.push(seg);
    totalLength += length;
  }
  return {
    segments: segments,
    totalLength: totalLength
  };
}
function lengthOfSegment(points) {
  if (points.length < 2) {
    return 0;
  }
  var totalLength = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var from = points[i];
    var to = points[i + 1];
    totalLength += distance(from[0], from[1], to[0], to[1]);
  }
  return totalLength;
}

/**
 * 按照比例在数据片段中获取点
 * @param {array} points 点的集合
 * @param {number} t 百分比 0-1
 * @return {object} 点的坐标
 */
function pointAtSegments(points, t) {
  // 边界判断
  if (t > 1 || t < 0 || points.length < 2) {
    return null;
  }
  var _analyzePoints = analyzePoints(points),
    segments = _analyzePoints.segments,
    totalLength = _analyzePoints.totalLength;
  // 多个点有可能重合
  if (totalLength === 0) {
    return {
      x: points[0][0],
      y: points[0][1]
    };
  }
  // 计算比例
  var startRatio = 0;
  var point = null;
  for (var i = 0; i < segments.length; i++) {
    var seg = segments[i];
    var from = seg.from,
      to = seg.to;
    var currentRatio = seg.length / totalLength;
    if (t >= startRatio && t <= startRatio + currentRatio) {
      var localRatio = (t - startRatio) / currentRatio;
      point = pointAt$3(from[0], from[1], to[0], to[1], localRatio);
      break;
    }
    startRatio += currentRatio;
  }
  return point;
}

/**
 * 按照比例在数据片段中获取切线的角度
 * @param {array} points 点的集合
 * @param {number} t 百分比 0-1
 */
function angleAtSegments(points, t) {
  // 边界判断
  if (t > 1 || t < 0 || points.length < 2) {
    return 0;
  }
  var _analyzePoints2 = analyzePoints(points),
    segments = _analyzePoints2.segments,
    totalLength = _analyzePoints2.totalLength;
  // 计算比例
  var startRatio = 0;
  var angle = 0;
  for (var i = 0; i < segments.length; i++) {
    var seg = segments[i];
    var from = seg.from,
      to = seg.to;
    var currentRatio = seg.length / totalLength;
    if (t >= startRatio && t <= startRatio + currentRatio) {
      angle = Math.atan2(to[1] - from[1], to[0] - from[0]);
      break;
    }
    startRatio += currentRatio;
  }
  return angle;
}
function distanceAtSegment(points, x, y) {
  var minDistance = Infinity;
  for (var i = 0; i < points.length - 1; i++) {
    var point = points[i];
    var nextPoint = points[i + 1];
    var _distance = pointDistance$4(point[0], point[1], nextPoint[0], nextPoint[1], x, y);
    if (_distance < minDistance) {
      minDistance = _distance;
    }
  }
  return minDistance;
}

function box$2(points) {
  var xArr = [];
  var yArr = [];
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    xArr.push(point[0]);
    yArr.push(point[1]);
  }
  return getBBoxByArray(xArr, yArr);
}
function length$2(points) {
  return lengthOfSegment(points);
}
function pointAt$1(points, t) {
  return pointAtSegments(points, t);
}
function pointDistance$2(points, x, y) {
  return distanceAtSegment(points, x, y);
}
function tangentAngle$1(points, t) {
  return angleAtSegments(points, t);
}

function getAllPoints(points) {
  var tmp = points.slice(0);
  if (points.length) {
    tmp.push(points[0]);
  }
  return tmp;
}
function box$1(points) {
  return box$2(points);
}
function length$1(points) {
  return lengthOfSegment(getAllPoints(points));
}
function pointAt(points, t) {
  return pointAtSegments(getAllPoints(points), t);
}
function pointDistance$1(points, x, y) {
  return distanceAtSegment(getAllPoints(points), x, y);
}
function tangentAngle(points, t) {
  return angleAtSegments(getAllPoints(points), t);
}

// 差值公式
function quadraticAt(p0, p1, p2, t) {
  var onet = 1 - t;
  return onet * onet * p0 + 2 * t * onet * p1 + t * t * p2;
}

// 求极值
function extrema(p0, p1, p2) {
  var a = p0 + p2 - 2 * p1;
  if (isNumberEqual(a, 0)) {
    return [0.5];
  }
  var rst = (p0 - p1) / a;
  if (rst <= 1 && rst >= 0) {
    return [rst];
  }
  return [];
}

// 分割贝塞尔曲线
function divideQuadratic(x1, y1, x2, y2, x3, y3, t) {
  // 划分点
  var xt = quadraticAt(x1, x2, x3, t);
  var yt = quadraticAt(y1, y2, y3, t);

  // 分割的第一条曲线的控制点
  var controlPoint1 = pointAt$3(x1, y1, x2, y2, t);
  // 分割的第二条曲线的控制点
  var controlPoint2 = pointAt$3(x2, y2, x3, y3, t);
  return [[x1, y1, controlPoint1.x, controlPoint1.y, xt, yt], [xt, yt, controlPoint2.x, controlPoint2.y, x3, y3]];
}

// 使用迭代法取贝塞尔曲线的长度
function quadraticLength(x1, y1, x2, y2, x3, y3, iterationCount) {
  if (iterationCount === 0) {
    return (distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3) + distance(x1, y1, x3, y3)) / 2;
  }
  var quadratics = divideQuadratic(x1, y1, x2, y2, x3, y3, 0.5);
  var left = quadratics[0];
  var right = quadratics[1];
  left.push(iterationCount - 1);
  right.push(iterationCount - 1);
  return quadraticLength.apply(void 0, _toConsumableArray(left)) + quadraticLength.apply(void 0, _toConsumableArray(right));
}
function box(x1, y1, x2, y2, x3, y3) {
  var xExtrema = extrema(x1, x2, x3)[0];
  var yExtrema = extrema(y1, y2, y3)[0];
  // 控制点不加入 box 的计算
  var xArr = [x1, x3];
  var yArr = [y1, y3];
  if (xExtrema !== undefined) {
    xArr.push(quadraticAt(x1, x2, x3, xExtrema));
  }
  if (yExtrema !== undefined) {
    yArr.push(quadraticAt(y1, y2, y3, yExtrema));
  }
  return getBBoxByArray(xArr, yArr);
}
function length(x1, y1, x2, y2, x3, y3) {
  return quadraticLength(x1, y1, x2, y2, x3, y3, 3);
}
function nearestPoint(x1, y1, x2, y2, x3, y3, x0, y0) {
  return nearestPoint$2([x1, x2, x3], [y1, y2, y3], x0, y0, quadraticAt);
}
function pointDistance(x1, y1, x2, y2, x3, y3, x0, y0) {
  var point = nearestPoint(x1, y1, x2, y2, x3, y3, x0, y0);
  return distance(point.x, point.y, x0, y0);
}

export { box$5 as arcBox, nearestPoint$3 as arcNearestPoint, tangentAngle$4 as arcTangentAngle, box$3 as cubicBox, length$3 as cubicLength, nearestPoint$1 as cubicNearestPoint, pointAt$2 as cubicPointAt, pointDistance$3 as cubicPointDistance, tangentAngle$2 as cubicTangentAngle, distance, box$4 as lineBox, length$4 as lineLength, pointAt$3 as linePointAt, pointDistance$4 as linePointDistance, pointToLine as linePointToLine, tangentAngle$3 as lineTangentAngle, box$1 as polygonBox, length$1 as polygonLength, pointAt as polygonPointAt, pointDistance$1 as polygonPointDistance, tangentAngle as polygonTangentAngle, box$2 as polylineBox, length$2 as polylineLength, pointAt$1 as polylinePointAt, pointDistance$2 as polylinePointDistance, tangentAngle$1 as polylineTangentAngle, box as quadBox, length as quadLength, nearestPoint as quadNearestPoint, pointDistance as quadPointDistance };
//# sourceMappingURL=index.esm.js.map
