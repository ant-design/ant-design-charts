"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boundTest = boundTest;
var tslib_1 = require("tslib");
var util_1 = require("../../../util");
var utils_1 = require("../guides/utils");
var line_1 = require("../guides/line");
var bounds_1 = require("./bounds");
var contain_1 = require("./contain");
var intersect_1 = require("./intersect");
/**
 * 创建副轴包围盒
 * @returns return false if no crossSize, else croseBBox
 */
function createCrossBBox(attr, padding) {
    var type = attr.type, labelDirection = attr.labelDirection, crossSize = attr.crossSize;
    if (!crossSize)
        return false;
    if (type === 'arc') {
        var center = attr.center, radius = attr.radius;
        var _a = tslib_1.__read(center, 2), cx = _a[0], cy = _a[1];
        var size = labelDirection === 'negative' ? 0 : crossSize;
        var dMin = -radius - size;
        var dMax = radius + size;
        var _b = tslib_1.__read((0, util_1.parseSeriesAttr)(padding), 4), top_1 = _b[0], right_1 = _b[1], bottom_1 = _b[2], left_1 = _b[3];
        // 假定始终为顺时针方向
        return new bounds_1.Bounds(cx + dMin - left_1, cy + dMin - top_1, cx + dMax + right_1, cy + dMax + bottom_1);
    }
    var _c = tslib_1.__read(attr.startPos, 2), sx = _c[0], sy = _c[1], _d = tslib_1.__read(attr.endPos, 2), ex = _d[0], ey = _d[1];
    // 水平时取左右，垂直时取上下
    var _e = tslib_1.__read((0, line_1.isAxisVertical)(attr)
        ? [-padding, 0, padding, 0]
        : [0, padding, 0, -padding], 4), top = _e[0], right = _e[1], bottom = _e[2], left = _e[3];
    var labelVector = (0, utils_1.getLabelVector)(0, attr);
    var diff = (0, util_1.scale)(labelVector, crossSize);
    var bbox = new bounds_1.Bounds(sx, sy, ex, ey);
    bbox.x1 += left;
    bbox.y1 += top;
    bbox.x2 += right + diff[0];
    bbox.y2 += bottom + diff[1];
    return bbox;
}
function boundTest(items, attr, margin) {
    var e_1, _a;
    var crossPadding = attr.crossPadding;
    var resultSet = new Set();
    var prev = null;
    var crossBBox = createCrossBBox(attr, crossPadding);
    var testContain = function (item) {
        if (crossBBox)
            return (0, contain_1.contain)(crossBBox, item);
        return true;
    };
    var testIntersect = function (prevItem, currItem) {
        if (!prevItem || !prevItem.firstChild)
            return true;
        // Get the first child of the item(Text).
        // @ts-ignore
        return !(0, intersect_1.intersect)(prevItem.firstChild, currItem.firstChild, (0, util_1.parseSeriesAttr)(margin));
    };
    try {
        for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var curr = items_1_1.value;
            if (!testContain(curr)) {
                resultSet.add(curr);
            }
            else if (!prev || testIntersect(prev, curr)) {
                prev = curr;
            }
            else {
                resultSet.add(prev);
                resultSet.add(curr);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return Array.from(resultSet);
}
//# sourceMappingURL=test.js.map