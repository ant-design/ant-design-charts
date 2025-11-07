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
exports.surround = void 0;
const coordinate_1 = require("../../../utils/coordinate");
const vector_1 = require("../../../utils/vector");
const default_1 = require("./default");
const outside_1 = require("./outside");
/**
 * Surround label transform is used to make labels surround circular.
 */
function surround(position, points, value, coordinate) {
    if (!(0, coordinate_1.isCircular)(coordinate))
        return {};
    const { connectorLength, connectorLength2, connectorDistance } = value;
    const style = __rest((0, outside_1.inferOutsideCircularStyle)('outside', points, value, coordinate), []);
    const { x0, y0 } = style;
    const center = coordinate.getCenter();
    const radius = (0, coordinate_1.getRadius)(coordinate);
    const radius1 = radius + connectorLength;
    const angle = (0, vector_1.angleWithQuadrant)([x0 - center[0], y0 - center[1]]);
    const sign = Math.sin(angle) > 0 ? 1 : -1;
    const [newX, newY] = (0, default_1.pointOfArc)(center, angle, radius1);
    style.x = newX + (connectorLength2 + connectorDistance) * sign;
    style.y = newY;
    return style;
}
exports.surround = surround;
//# sourceMappingURL=surround.js.map