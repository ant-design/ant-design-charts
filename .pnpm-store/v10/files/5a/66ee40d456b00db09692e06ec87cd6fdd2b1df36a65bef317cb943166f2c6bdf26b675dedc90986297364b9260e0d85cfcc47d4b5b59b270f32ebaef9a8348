"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catmullRom2Bezier = catmullRom2Bezier;
var tslib_1 = require("tslib");
var matrix_1 = require("./matrix");
function smoothBezier(points, smooth, isLoop, constraint) {
    var _a;
    var cps = [];
    var hasConstraint = !!constraint;
    var prevPoint;
    var nextPoint;
    var min = [Infinity, Infinity];
    var max = [-Infinity, -Infinity];
    var nextCp0;
    var cp1;
    var cp0;
    if (hasConstraint) {
        _a = tslib_1.__read(constraint, 2), min = _a[0], max = _a[1];
        for (var i = 0, l = points.length; i < l; i += 1) {
            var point = points[i];
            min = (0, matrix_1.min)(min, point);
            max = (0, matrix_1.max)(max, point);
        }
    }
    for (var i = 0, len = points.length; i < len; i += 1) {
        var point = points[i];
        if (i === 0 && !isLoop) {
            cp0 = point;
        }
        else if (i === len - 1 && !isLoop) {
            cp1 = point;
            cps.push(cp0);
            cps.push(cp1);
        }
        else {
            var prevIdx = [i ? i - 1 : len - 1, i - 1][isLoop ? 0 : 1];
            prevPoint = points[prevIdx];
            nextPoint = points[isLoop ? (i + 1) % len : i + 1];
            var v = [0, 0];
            v = (0, matrix_1.sub)(nextPoint, prevPoint);
            v = (0, matrix_1.scale)(v, smooth);
            var d0 = (0, matrix_1.distance)(point, prevPoint);
            var d1 = (0, matrix_1.distance)(point, nextPoint);
            var sum = d0 + d1;
            if (sum !== 0) {
                d0 /= sum;
                d1 /= sum;
            }
            var v1 = (0, matrix_1.scale)(v, -d0);
            var v2 = (0, matrix_1.scale)(v, d1);
            cp1 = (0, matrix_1.add)(point, v1);
            nextCp0 = (0, matrix_1.add)(point, v2);
            // 下一个控制点必须在这个点和下一个点之间
            nextCp0 = (0, matrix_1.min)(nextCp0, (0, matrix_1.max)(nextPoint, point));
            nextCp0 = (0, matrix_1.max)(nextCp0, (0, matrix_1.min)(nextPoint, point));
            // 重新计算 cp1 的值
            v1 = (0, matrix_1.sub)(nextCp0, point);
            v1 = (0, matrix_1.scale)(v1, -d0 / d1);
            cp1 = (0, matrix_1.add)(point, v1);
            // 上一个控制点必须要在上一个点和这一个点之间
            cp1 = (0, matrix_1.min)(cp1, (0, matrix_1.max)(prevPoint, point));
            cp1 = (0, matrix_1.max)(cp1, (0, matrix_1.min)(prevPoint, point));
            // 重新计算 nextCp0 的值
            v2 = (0, matrix_1.sub)(point, cp1);
            v2 = (0, matrix_1.scale)(v2, d1 / d0);
            nextCp0 = (0, matrix_1.add)(point, v2);
            if (hasConstraint) {
                cp1 = (0, matrix_1.max)(cp1, min);
                cp1 = (0, matrix_1.min)(cp1, max);
                nextCp0 = (0, matrix_1.max)(nextCp0, min);
                nextCp0 = (0, matrix_1.min)(nextCp0, max);
            }
            cps.push(cp0);
            cps.push(cp1);
            cp0 = nextCp0;
        }
    }
    if (isLoop) {
        cps.push(cps.shift());
    }
    return cps;
}
/**
 * create bezier spline from catmull rom spline
 * @param {Array} crp Catmull Rom Points
 * @param {boolean} z Spline is loop
 * @param {Array} constraint Constraint
 */
function catmullRom2Bezier(crp, z, constraint) {
    var _a;
    if (z === void 0) { z = false; }
    if (constraint === void 0) { constraint = [
        [0, 0],
        [1, 1],
    ]; }
    var isLoop = !!z;
    var pointList = [];
    for (var i = 0, l = crp.length; i < l; i += 2) {
        pointList.push([crp[i], crp[i + 1]]);
    }
    var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
    var len = pointList.length;
    var d1 = [];
    var cp1;
    var cp2;
    var p;
    for (var i = 0; i < len - 1; i += 1) {
        cp1 = controlPointList[i * 2];
        cp2 = controlPointList[i * 2 + 1];
        p = pointList[i + 1];
        d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]]);
    }
    if (isLoop) {
        cp1 = controlPointList[len];
        cp2 = controlPointList[len + 1];
        _a = tslib_1.__read(pointList, 1), p = _a[0];
        d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]]);
    }
    return d1;
}
//# sourceMappingURL=path.js.map