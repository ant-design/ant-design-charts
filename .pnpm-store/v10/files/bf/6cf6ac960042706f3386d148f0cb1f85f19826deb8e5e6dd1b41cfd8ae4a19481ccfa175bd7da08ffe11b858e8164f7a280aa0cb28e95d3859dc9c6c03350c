"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spider = void 0;
const coordinate_1 = require("../../../utils/coordinate");
const outside_1 = require("./outside");
const utils_1 = require("./utils");
const styleByPoints = new WeakMap();
function compute(points, value, coordinate) {
    const { connectorLength, connectorLength2, connectorDistance } = value;
    const style = __rest((0, outside_1.inferOutsideCircularStyle)('outside', points, value, coordinate), []);
    const center = coordinate.getCenter();
    const radius = (0, outside_1.radiusOf)(points, value, coordinate);
    const angle = (0, outside_1.angleOf)(points, value, coordinate);
    const radius1 = radius + connectorLength + connectorLength2;
    const sign = Math.sin(angle) > 0 ? 1 : -1;
    const newX = center[0] + (radius1 + +connectorDistance) * sign;
    const { x: originX } = style;
    const dx = newX - originX;
    style.x += dx;
    style.connectorPoints[0][0] -= dx;
    return style;
}
/**
 * Spider label transform only suitable for the labels in polar coordinate,
 * labels should distinguish coordinate type.
 */
function spider(position, points, value, coordinate, options, labels) {
    if (!(0, coordinate_1.isCircular)(coordinate))
        return {};
    if (styleByPoints.has(points))
        return styleByPoints.get(points);
    const computed = labels.map((points) => compute(points, value, coordinate));
    const { width, height } = coordinate.getOptions();
    const left = computed.filter((d) => d.x < width / 2);
    const right = computed.filter((d) => d.x >= width / 2);
    const extendedOptions = Object.assign(Object.assign({}, options), { height });
    (0, utils_1.hideAndDodgeY)(left, extendedOptions);
    (0, utils_1.hideAndDodgeY)(right, extendedOptions);
    computed.forEach((style, i) => styleByPoints.set(labels[i], style));
    return styleByPoints.get(points);
}
exports.spider = spider;
//# sourceMappingURL=spider.js.map