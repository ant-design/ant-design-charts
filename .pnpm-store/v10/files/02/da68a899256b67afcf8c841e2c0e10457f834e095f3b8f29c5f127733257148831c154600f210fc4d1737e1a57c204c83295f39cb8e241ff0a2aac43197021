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
import { isCircular } from '../../../utils/coordinate';
import { inferOutsideCircularStyle, radiusOf, angleOf } from './outside';
import { hideAndDodgeY } from './utils';
const styleByPoints = new WeakMap();
function compute(points, value, coordinate) {
    const { connectorLength, connectorLength2, connectorDistance } = value;
    const style = __rest(inferOutsideCircularStyle('outside', points, value, coordinate), []);
    const center = coordinate.getCenter();
    const radius = radiusOf(points, value, coordinate);
    const angle = angleOf(points, value, coordinate);
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
export function spider(position, points, value, coordinate, options, labels) {
    if (!isCircular(coordinate))
        return {};
    if (styleByPoints.has(points))
        return styleByPoints.get(points);
    const computed = labels.map((points) => compute(points, value, coordinate));
    const { width, height } = coordinate.getOptions();
    const left = computed.filter((d) => d.x < width / 2);
    const right = computed.filter((d) => d.x >= width / 2);
    const extendedOptions = Object.assign(Object.assign({}, options), { height });
    hideAndDodgeY(left, extendedOptions);
    hideAndDodgeY(right, extendedOptions);
    computed.forEach((style, i) => styleByPoints.set(labels[i], style));
    return styleByPoints.get(points);
}
//# sourceMappingURL=spider.js.map