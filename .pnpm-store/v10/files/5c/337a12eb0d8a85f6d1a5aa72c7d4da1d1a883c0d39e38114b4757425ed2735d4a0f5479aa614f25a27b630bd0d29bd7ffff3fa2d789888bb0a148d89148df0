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
import { getRadius, isCircular } from '../../../utils/coordinate';
import { angleWithQuadrant } from '../../../utils/vector';
import { pointOfArc } from './default';
import { inferOutsideCircularStyle } from './outside';
/**
 * Surround label transform is used to make labels surround circular.
 */
export function surround(position, points, value, coordinate) {
    if (!isCircular(coordinate))
        return {};
    const { connectorLength, connectorLength2, connectorDistance } = value;
    const style = __rest(inferOutsideCircularStyle('outside', points, value, coordinate), []);
    const { x0, y0 } = style;
    const center = coordinate.getCenter();
    const radius = getRadius(coordinate);
    const radius1 = radius + connectorLength;
    const angle = angleWithQuadrant([x0 - center[0], y0 - center[1]]);
    const sign = Math.sin(angle) > 0 ? 1 : -1;
    const [newX, newY] = pointOfArc(center, angle, radius1);
    style.x = newX + (connectorLength2 + connectorDistance) * sign;
    style.y = newY;
    return style;
}
//# sourceMappingURL=surround.js.map