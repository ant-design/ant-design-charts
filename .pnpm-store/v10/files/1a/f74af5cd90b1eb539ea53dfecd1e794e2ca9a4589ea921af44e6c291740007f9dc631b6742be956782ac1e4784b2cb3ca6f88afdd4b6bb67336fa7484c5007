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
import { Path } from '@antv/g';
import { Marker } from '@antv/component';
import { line as d3line } from '@antv/vendor/d3-shape';
import { isTranspose } from '../../utils/coordinate';
import { subObject } from '../../utils/helper';
import { select } from '../../utils/selection';
import { applyStyle } from '../utils';
function inferSymbol(x, y, r) {
    return [['M', x, y], ['L', x + 2 * r, y - r], ['L', x + 2 * r, y + r], ['Z']];
}
/**
 * @todo support polar later.
 */
function inferConnectorPath(points) {
    return d3line()
        .x((d) => d[0])
        .y((d) => d[1])(points);
}
function getPoints(coordinate, points, sourceOffsetY, targetOffsetY, sourceOffsetX, targetOffsetX, length1 = 0) {
    const [[x0, y0], [x1, y1]] = points;
    if (isTranspose(coordinate)) {
        const X0 = x0 + sourceOffsetY;
        const X1 = x1 + targetOffsetY;
        const X = X0 + length1;
        const Y0 = y0 + sourceOffsetX;
        const Y1 = y1 + targetOffsetX;
        return [
            [X0, Y0],
            [X, Y0],
            [X, Y1],
            [X1, Y1],
        ];
    }
    const Y0 = y0 - sourceOffsetY;
    const Y1 = y1 - targetOffsetY;
    const Y = Y0 - length1;
    const X0 = x0 - sourceOffsetX;
    const X1 = x1 - targetOffsetX;
    return [
        [X0, Y0],
        [X0, Y],
        [X1, Y],
        [X1, Y1],
    ];
}
export const Connector = (options, context) => {
    const { offsetX = 0, sourceOffsetX = offsetX, targetOffsetX = offsetX, offsetY = 0, sourceOffsetY = offsetY, targetOffsetY = offsetY, connectLength1: length1, endMarker = true } = options, style = __rest(options, ["offsetX", "sourceOffsetX", "targetOffsetX", "offsetY", "sourceOffsetY", "targetOffsetY", "connectLength1", "endMarker"]);
    const { coordinate } = context;
    return (points, value, defaults) => {
        const { color: defaultColor, connectLength1 } = defaults, rest = __rest(defaults, ["color", "connectLength1"]);
        const { color, transform } = value;
        const P = getPoints(coordinate, points, sourceOffsetY, targetOffsetY, sourceOffsetX, targetOffsetX, length1 !== null && length1 !== void 0 ? length1 : connectLength1);
        const makerStyle = subObject(Object.assign(Object.assign({}, style), defaults), 'endMarker');
        return select(new Path())
            .call(applyStyle, rest)
            .style('d', inferConnectorPath(P))
            .style('stroke', color || defaultColor)
            .style('transform', transform)
            .style('markerEnd', endMarker
            ? new Marker({
                className: 'marker',
                style: Object.assign(Object.assign({}, makerStyle), { symbol: inferSymbol }),
            })
            : null)
            .call(applyStyle, style)
            .node();
    };
};
Connector.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=connector.js.map