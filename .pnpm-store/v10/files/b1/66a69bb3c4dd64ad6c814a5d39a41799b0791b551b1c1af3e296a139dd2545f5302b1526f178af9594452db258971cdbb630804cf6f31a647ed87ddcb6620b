import { getArcObject } from '../../../shape/utils';
import { isCircular, isRadial } from '../../../utils/coordinate';
import { pointOfArc, inferRotation, inferIdentityStyle, inferRadialStyle, inferNonCircularStyle, } from './default';
export function linePoints(center, angle, radius, radius1, offsetX) {
    const [x0, y0] = pointOfArc(center, angle, radius);
    const [x1, y1] = pointOfArc(center, angle, radius1);
    const sign = Math.sin(angle) > 0 ? 1 : -1;
    return [
        [x0, y0],
        [x1, y1],
        [x1 + sign * offsetX, y1],
    ];
}
export function radiusOf(points, value, coordinate) {
    const arcObject = getArcObject(coordinate, points, [value.y, value.y1]);
    const { innerRadius, outerRadius } = arcObject;
    return innerRadius + (outerRadius - innerRadius);
}
export function angleOf(points, value, coordinate) {
    const arcObject = getArcObject(coordinate, points, [value.y, value.y1]);
    const { startAngle, endAngle } = arcObject;
    return (startAngle + endAngle) / 2;
}
export function inferOutsideCircularStyle(position, points, value, coordinate) {
    const { autoRotate, rotateToAlignArc, offset = 0, connector = true, connectorLength = offset, connectorLength2 = 0, connectorDistance = 0, } = value;
    const center = coordinate.getCenter();
    const angle = angleOf(points, value, coordinate);
    const sign = Math.sin(angle) > 0 ? 1 : -1;
    const rotate = inferRotation(angle, autoRotate, rotateToAlignArc);
    const textStyle = {
        textAlign: sign > 0 || isRadial(coordinate) ? 'start' : 'end',
        textBaseline: 'middle',
        rotate,
    };
    const radius = radiusOf(points, value, coordinate);
    const radius1 = radius + (connector ? connectorLength : offset);
    const [[x0, y0], [x1, y1], [x2, y2]] = linePoints(center, angle, radius, radius1, connector ? connectorLength2 : 0);
    const dx = connector ? +connectorDistance * sign : 0;
    const x = x2 + dx;
    const y = y2;
    const connectorStyle = {
        connector,
        connectorPoints: [
            [x1 - x, y1 - y],
            [x2 - x, y2 - y],
        ],
    };
    return Object.assign(Object.assign({ x0,
        y0, x: x2 + dx, y: y2 }, textStyle), connectorStyle);
}
export function outside(position, points, value, coordinate) {
    const { bounds } = value;
    // When bounds.length = 1
    // For series mark, such as line and area.
    // The bounds for text is defined with only one point.
    // Use this point as the label position.
    if (bounds.length === 1) {
        return inferIdentityStyle(position, points, value, coordinate);
    }
    const inferDefaultStyle = isRadial(coordinate)
        ? inferRadialStyle
        : isCircular(coordinate)
            ? inferOutsideCircularStyle
            : inferNonCircularStyle;
    return inferDefaultStyle(position, points, value, coordinate);
}
//# sourceMappingURL=outside.js.map