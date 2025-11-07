"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributeKeys = exports.attributeOf = exports.GEOMETRY_ATTRIBUTES = void 0;
const g_1 = require("@antv/g");
const DEFAULT_ATTRIBUTE_VALUE = {
    opacity: 1,
    strokeOpacity: 1,
    fillOpacity: 1,
    lineWidth: 0,
    x: 0,
    y: 0,
    cx: 0,
    cy: 0,
    r: 0,
    rx: 0,
    ry: 0,
    width: 0,
    height: 0,
};
exports.GEOMETRY_ATTRIBUTES = {
    [g_1.Shape.CIRCLE]: ['cx', 'cy', 'r'],
    [g_1.Shape.ELLIPSE]: ['cx', 'cy', 'rx', 'ry'],
    [g_1.Shape.RECT]: ['x', 'y', 'width', 'height'],
    [g_1.Shape.IMAGE]: ['x', 'y', 'width', 'height'],
    [g_1.Shape.LINE]: ['x1', 'y1', 'x2', 'y2'],
    [g_1.Shape.POLYLINE]: ['points'],
    [g_1.Shape.POLYGON]: ['points'],
};
function attributeOf(shape, keys, useDefaultValue = false) {
    const attribute = {};
    for (const key of keys) {
        const value = shape.style[key];
        if (value) {
            attribute[key] = value;
        }
        else if (useDefaultValue) {
            attribute[key] = DEFAULT_ATTRIBUTE_VALUE[key];
        }
    }
    return attribute;
}
exports.attributeOf = attributeOf;
exports.attributeKeys = [
    'fill',
    'stroke',
    'fillOpacity',
    'strokeOpacity',
    'opacity',
    'lineWidth',
];
//# sourceMappingURL=utils.js.map