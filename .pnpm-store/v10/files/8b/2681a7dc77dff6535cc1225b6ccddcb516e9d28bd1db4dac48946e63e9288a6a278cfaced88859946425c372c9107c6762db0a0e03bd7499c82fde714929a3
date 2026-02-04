"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifH = void 0;
exports.getStepValueByValue = getStepValueByValue;
exports.hiddenHandle = hiddenHandle;
exports.verticalHandle = verticalHandle;
exports.horizontalHandle = horizontalHandle;
exports.getSafetySelections = getSafetySelections;
exports.ifHorizontal = ifHorizontal;
var tslib_1 = require("tslib");
var marker_1 = require("../marker");
/**
 * 将值转换至步长tick上
 */
function getStepValueByValue(value, step, min) {
    var count = Math.round((value - min) / step);
    return min + count * step;
}
function hiddenHandle(x, y, r) {
    // 长宽比
    var ratio = 1.4;
    var diffY = ratio * r;
    return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x + r, y + diffY], ['L', x - r, y + diffY], ['Z']];
}
// 控制手柄
var HANDLE_HEIGHT_RATIO = 1.4;
var HANDLE_TRIANGLE_RATIO = 0.4;
// 纵向手柄
function verticalHandle(x, y, r) {
    var width = r;
    var height = width * HANDLE_HEIGHT_RATIO;
    var halfWidth = width / 2;
    var oneSixthWidth = width / 6;
    var triangleX = x + height * HANDLE_TRIANGLE_RATIO;
    return [
        ['M', x, y],
        ['L', triangleX, y + halfWidth],
        ['L', x + height, y + halfWidth],
        ['L', x + height, y - halfWidth],
        ['L', triangleX, y - halfWidth],
        ['Z'],
        // 绘制两条横线
        ['M', triangleX, y + oneSixthWidth],
        ['L', x + height - 2, y + oneSixthWidth],
        ['M', triangleX, y - oneSixthWidth],
        ['L', x + height - 2, y - oneSixthWidth],
    ];
}
// 横向手柄
function horizontalHandle(x, y, r) {
    var width = r;
    var height = width * HANDLE_HEIGHT_RATIO;
    var halfWidth = width / 2;
    var oneSixthWidth = width / 6;
    var triangleY = y + height * HANDLE_TRIANGLE_RATIO;
    return [
        ['M', x, y],
        ['L', x - halfWidth, triangleY],
        ['L', x - halfWidth, y + height],
        ['L', x + halfWidth, y + height],
        ['L', x + halfWidth, triangleY],
        ['Z'],
        // 绘制两条竖线
        ['M', x - oneSixthWidth, triangleY],
        ['L', x - oneSixthWidth, y + height - 2],
        ['M', x + oneSixthWidth, triangleY],
        ['L', x + oneSixthWidth, y + height - 2],
    ];
}
marker_1.Marker.registerSymbol('hiddenHandle', hiddenHandle);
marker_1.Marker.registerSymbol('verticalHandle', verticalHandle);
marker_1.Marker.registerSymbol('horizontalHandle', horizontalHandle);
var ifH = function (orientation, a, b) {
    if (orientation === void 0) { orientation = 'horizontal'; }
    return (orientation === 'horizontal' ? a : b);
};
exports.ifH = ifH;
// 具体逻辑还没看，@chushen
function getSafetySelections(domain, newSelection, oldSelection, precision) {
    var _a;
    if (precision === void 0) { precision = 4; }
    var _b = tslib_1.__read(domain, 2), min = _b[0], max = _b[1];
    var _c = tslib_1.__read(newSelection, 2), start = _c[0], end = _c[1];
    var _d = tslib_1.__read(oldSelection, 2), prevStart = _d[0], prevEnd = _d[1];
    var _e = tslib_1.__read([start, end], 2), startVal = _e[0], endVal = _e[1];
    var range = endVal - startVal;
    // 交换startVal endVal
    if (startVal > endVal) {
        _a = tslib_1.__read([endVal, startVal], 2), startVal = _a[0], endVal = _a[1];
    }
    // 超出范围就全选
    if (range > max - min) {
        return [min, max];
    }
    if (startVal < min) {
        if (prevStart === min && prevEnd === endVal) {
            return [min, endVal];
        }
        return [min, range + min];
    }
    if (endVal > max) {
        if (prevEnd === max && prevStart === startVal) {
            return [startVal, max];
        }
        return [max - range, max];
    }
    // 保留小数
    return [startVal, endVal];
}
function ifHorizontal(orientation, a, b) {
    if (orientation === void 0) { orientation = 'horizontal'; }
    return orientation === 'horizontal' ? a : b;
}
//# sourceMappingURL=utils.js.map