import { __read, __spreadArray } from "tslib";
import { isFunction } from '@antv/util';
import { degToRad, getCallbackValue, normalize, vertical } from '../../../util';
export function getCallbackStyle(style, params) {
    return Object.fromEntries(Object.entries(style).map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], val = _b[1];
        return [key, getCallbackValue(val, params)];
    }));
}
export function baseDependencies(attr) {
    if (attr.type === 'linear') {
        var startPos = attr.startPos, endPos = attr.endPos;
        return __spreadArray(__spreadArray([], __read(startPos), false), __read(endPos), false);
    }
    var startAngle = attr.startAngle, endAngle = attr.endAngle, center = attr.center, radius = attr.radius;
    return __spreadArray(__spreadArray([startAngle, endAngle], __read(center), false), [radius], false);
}
export function filterExec(data, filter) {
    return !!filter && isFunction(filter) ? data.filter(filter) : data;
}
/** ---- to avoid cycle dependency */
export function getLineAngle(value, attr) {
    var startAngle = attr.startAngle, endAngle = attr.endAngle;
    return (endAngle - startAngle) * value + startAngle;
}
export function getLineTangentVector(value, attr) {
    if (attr.type === 'linear') {
        var _a = __read(attr.startPos, 2), startX = _a[0], startY = _a[1], _b = __read(attr.endPos, 2), endX = _b[0], endY = _b[1];
        var _c = __read([endX - startX, endY - startY], 2), dx = _c[0], dy = _c[1];
        return normalize([dx, dy]);
    }
    var angle = degToRad(getLineAngle(value, attr));
    return [-Math.sin(angle), Math.cos(angle)];
}
export function getDirectionVector(value, direction, attr) {
    var tangentVector = getLineTangentVector(value, attr);
    return vertical(tangentVector, direction !== 'positive');
}
export function getLabelVector(value, attr) {
    return getDirectionVector(value, attr.labelDirection, attr);
}
//# sourceMappingURL=utils.js.map