"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShapeSpace = getShapeSpace;
exports.getLocalBBox = getLocalBBox;
exports.createTempText = createTempText;
exports.isHorizontal = isHorizontal;
exports.isVertical = isVertical;
exports.copyAttributes = copyAttributes;
var tslib_1 = require("tslib");
var selection_1 = require("./selection");
/**
 * 获得图形的x、y、width、height
 */
function getShapeSpace(shape) {
    var bounds = shape && shape.getRenderBounds();
    if (!bounds)
        return {
            width: 0,
            height: 0,
        };
    var max = bounds.getMax();
    var min = bounds.getMin();
    return {
        width: max[0] - min[0],
        height: max[1] - min[1],
    };
}
function getLocalBBox(shape) {
    var _a = shape.getLocalBounds(), min = _a.min, max = _a.max;
    var _b = tslib_1.__read([min, max], 2), _c = tslib_1.__read(_b[0], 2), x1 = _c[0], y1 = _c[1], _d = tslib_1.__read(_b[1], 2), x2 = _d[0], y2 = _d[1];
    return { x: x1, y: y1, width: x2 - x1, height: y2 - y1, left: x1, bottom: y2, top: y1, right: x2 };
}
function createTempText(group, attrs) {
    var textNode = (0, selection_1.select)(group).append('text').node();
    textNode.attr(tslib_1.__assign(tslib_1.__assign({}, attrs), { visibility: 'hidden' }));
    return textNode;
}
function isHorizontal(p1, p2) {
    var _a = tslib_1.__read(p1, 2), x1 = _a[0], y1 = _a[1];
    var _b = tslib_1.__read(p2, 2), x2 = _b[0], y2 = _b[1];
    return x1 !== x2 && y1 === y2;
}
function isVertical(p1, p2) {
    var _a = tslib_1.__read(p1, 2), x1 = _a[0], y1 = _a[1];
    var _b = tslib_1.__read(p2, 2), x2 = _b[0], y2 = _b[1];
    return x1 === x2 && y1 !== y2;
}
function copyAttributes(target, source) {
    var e_1, _a;
    var attributes = source.attributes;
    try {
        for (var _b = tslib_1.__values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = tslib_1.__read(_c.value, 2), key = _d[0], value = _d[1];
            if (key !== 'id' && key !== 'className')
                target.attr(key, value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
//# sourceMappingURL=shape.js.map