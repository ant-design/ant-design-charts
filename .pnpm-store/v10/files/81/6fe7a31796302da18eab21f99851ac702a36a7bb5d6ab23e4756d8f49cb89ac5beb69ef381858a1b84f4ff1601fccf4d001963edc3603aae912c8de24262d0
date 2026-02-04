"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectUtils = void 0;
exports.intersect = intersect;
var tslib_1 = require("tslib");
var bounds_1 = require("./bounds");
/**
 * Detect whether line-line collision.
 * From: https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
 */
function lineToLine(line1, line2) {
    var _a = tslib_1.__read(line1, 4), x0 = _a[0], y0 = _a[1], x1 = _a[2], y1 = _a[3];
    var _b = tslib_1.__read(line2, 4), x2 = _b[0], y2 = _b[1], x3 = _b[2], y3 = _b[3];
    var s10x = x1 - x0;
    var s10y = y1 - y0;
    var s32x = x3 - x2;
    var s32y = y3 - y2;
    var denom = s10x * s32y - s32x * s10y;
    if (denom === 0)
        return false;
    var denomPositive = denom > 0;
    var s02x = x0 - x2;
    var s02y = y0 - y2;
    var sNum = s10x * s02y - s10y * s02x;
    if (sNum < 0 === denomPositive)
        return false;
    var tNum = s32x * s02y - s32y * s02x;
    if (tNum < 0 === denomPositive)
        return false;
    if (sNum > denom === denomPositive || tNum > denom === denomPositive)
        return false;
    return true;
}
function intersectBoxLine(box /** 八个顶点 */, line) {
    var lines = [
        [box[0], box[1], box[2], box[3]],
        [box[2], box[3], box[4], box[5]],
        [box[4], box[5], box[6], box[7]],
        [box[6], box[7], box[0], box[1]],
    ];
    return lines.some(function (boxLine) { return lineToLine(line, boxLine); });
}
exports.IntersectUtils = { lineToLine: lineToLine, intersectBoxLine: intersectBoxLine, getBounds: bounds_1.getBounds };
/**
 * 检测两个 DisplayObject 是否相交
 */
function intersect(a, b, margin) {
    var e_1, _a;
    var p = (0, bounds_1.getBounds)(a, margin).flat(1);
    var q = (0, bounds_1.getBounds)(b, margin).flat(1);
    var linesP = [
        [p[0], p[1], p[2], p[3]],
        [p[0], p[1], p[4], p[5]],
        [p[4], p[5], p[6], p[7]],
        [p[2], p[3], p[6], p[7]],
    ];
    try {
        for (var linesP_1 = tslib_1.__values(linesP), linesP_1_1 = linesP_1.next(); !linesP_1_1.done; linesP_1_1 = linesP_1.next()) {
            var line = linesP_1_1.value;
            if (intersectBoxLine(q, line))
                return true;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (linesP_1_1 && !linesP_1_1.done && (_a = linesP_1.return)) _a.call(linesP_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
//# sourceMappingURL=intersect.js.map