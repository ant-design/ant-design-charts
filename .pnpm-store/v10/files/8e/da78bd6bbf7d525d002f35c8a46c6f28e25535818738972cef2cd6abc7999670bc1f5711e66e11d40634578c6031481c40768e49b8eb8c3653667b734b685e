"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCallbackStyle = getCallbackStyle;
exports.baseDependencies = baseDependencies;
exports.filterExec = filterExec;
exports.getLineAngle = getLineAngle;
exports.getLineTangentVector = getLineTangentVector;
exports.getDirectionVector = getDirectionVector;
exports.getLabelVector = getLabelVector;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var util_2 = require("../../../util");
function getCallbackStyle(style, params) {
    return Object.fromEntries(Object.entries(style).map(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], val = _b[1];
        return [key, (0, util_2.getCallbackValue)(val, params)];
    }));
}
function baseDependencies(attr) {
    if (attr.type === 'linear') {
        var startPos = attr.startPos, endPos = attr.endPos;
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(startPos), false), tslib_1.__read(endPos), false);
    }
    var startAngle = attr.startAngle, endAngle = attr.endAngle, center = attr.center, radius = attr.radius;
    return tslib_1.__spreadArray(tslib_1.__spreadArray([startAngle, endAngle], tslib_1.__read(center), false), [radius], false);
}
function filterExec(data, filter) {
    return !!filter && (0, util_1.isFunction)(filter) ? data.filter(filter) : data;
}
/** ---- to avoid cycle dependency */
function getLineAngle(value, attr) {
    var startAngle = attr.startAngle, endAngle = attr.endAngle;
    return (endAngle - startAngle) * value + startAngle;
}
function getLineTangentVector(value, attr) {
    if (attr.type === 'linear') {
        var _a = tslib_1.__read(attr.startPos, 2), startX = _a[0], startY = _a[1], _b = tslib_1.__read(attr.endPos, 2), endX = _b[0], endY = _b[1];
        var _c = tslib_1.__read([endX - startX, endY - startY], 2), dx = _c[0], dy = _c[1];
        return (0, util_2.normalize)([dx, dy]);
    }
    var angle = (0, util_2.degToRad)(getLineAngle(value, attr));
    return [-Math.sin(angle), Math.cos(angle)];
}
function getDirectionVector(value, direction, attr) {
    var tangentVector = getLineTangentVector(value, attr);
    return (0, util_2.vertical)(tangentVector, direction !== 'positive');
}
function getLabelVector(value, attr) {
    return getDirectionVector(value, attr.labelDirection, attr);
}
//# sourceMappingURL=utils.js.map