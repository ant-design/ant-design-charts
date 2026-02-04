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
import { deepMix, isNumber } from '@antv/util';
import { Group } from '@antv/g';
import { filterPrefixObject, isUnset, subObject } from '../utils/helper';
import { getTransformOptions } from '../utils/coordinate';
import { Radial } from '../coordinate';
import { applyStyle, getOrigin } from '../shape/utils';
import { select } from '../utils/selection';
import { GaugeRound } from '../shape';
const indicatorShape = (options, context) => {
    const { shape, radius } = options, style = __rest(options, ["shape", "radius"]);
    const pointerStyle = subObject(style, 'pointer');
    const pinStyle = subObject(style, 'pin');
    const { shape: pointerShape } = pointerStyle, resPointerStyle = __rest(pointerStyle, ["shape"]);
    const { shape: pinShape } = pinStyle, resPinStyle = __rest(pinStyle, ["shape"]);
    const { coordinate, theme } = context;
    return (points, value) => {
        // Invert points.
        const invertedPoints = points.map((p) => coordinate.invert(p));
        // Get new coordinate.
        const [startAngle, endAngle, innerRadius] = getTransformOptions(coordinate, 'polar');
        const newCoordinate = coordinate.clone();
        const { color: stroke } = value;
        const newTransformations = Radial({
            startAngle,
            endAngle,
            innerRadius,
            outerRadius: radius,
        });
        newTransformations.push(['cartesian']);
        newCoordinate.update({
            transformations: newTransformations,
        });
        const newPoints = invertedPoints.map((p) => newCoordinate.map(p));
        const [x, y] = getOrigin(newPoints);
        const [cx, cy] = coordinate.getCenter();
        const pointerAttrs = Object.assign(Object.assign({ x1: x, y1: y, x2: cx, y2: cy, stroke }, resPointerStyle), style);
        const pinAttrs = Object.assign(Object.assign({ cx,
            cy,
            stroke }, resPinStyle), style);
        const indicatorGroup = select(new Group());
        if (!isUnset(pointerShape)) {
            typeof pointerShape === 'function'
                ? indicatorGroup.append(() => pointerShape(newPoints, value, newCoordinate, theme))
                : indicatorGroup.append('line').call(applyStyle, pointerAttrs).node();
        }
        if (!isUnset(pinShape)) {
            typeof pinShape === 'function'
                ? indicatorGroup.append(() => pinShape(newPoints, value, newCoordinate, theme))
                : indicatorGroup.append('circle').call(applyStyle, pinAttrs).node();
        }
        return indicatorGroup.node();
    };
};
const DEFAULT_OPTIONS = {
    coordinate: {
        type: 'radial',
        innerRadius: 0.9,
        outerRadius: 1,
        startAngle: (-11 / 10) * Math.PI,
        endAngle: (1 / 10) * Math.PI,
    },
    axis: {
        x: false,
    },
    legend: false,
    tooltip: false,
    encode: {
        x: 'x',
        y: 'y',
        color: 'color',
    },
    scale: {
        color: {
            range: ['#30BF78', '#D0D0D0'],
        },
    },
};
const DEFAULT_INDICATOR_OPTIONS = {
    style: {
        shape: indicatorShape,
        lineWidth: 4,
        pointerLineCap: 'round',
        pinR: 10,
        pinFill: '#fff',
        radius: 0.6,
    },
};
const DEFAULT_TEXT_OPTIONS = {
    type: 'text',
    style: {
        x: '50%',
        y: '60%',
        textAlign: 'center',
        textBaseline: 'middle',
        fontSize: 20,
        fontWeight: 800,
        fill: '#888',
    },
    tooltip: false,
};
function getGaugeData(data) {
    if (isNumber(data)) {
        // Percent range [0, 1].
        const percent = Math.max(0, Math.min(data, 1));
        return {
            percent,
            target: percent,
            total: 1,
        };
    }
    return data;
}
function dataTransform(data, scale) {
    const { name = 'score', target, total, percent, thresholds = [], } = getGaugeData(data);
    const _target = percent || target;
    const _total = percent ? 1 : total;
    const newScale = Object.assign({ y: {
            domain: [0, _total],
        } }, scale);
    if (!thresholds.length) {
        return {
            targetData: [{ x: name, y: _target, color: 'target' }],
            totalData: [
                { x: name, y: _target, color: 'target' },
                { x: name, y: _total - _target, color: 'total' },
            ],
            target: _target,
            total: _total,
            scale: newScale,
        };
    }
    return {
        targetData: [{ x: name, y: _target, color: 'target' }],
        totalData: thresholds.map((d, i) => ({
            x: name,
            y: i >= 1 ? d - thresholds[i - 1] : d,
            color: i,
        })),
        target: _target,
        total: _total,
        scale: newScale,
    };
}
function getTextContent(textStyle, { target, total }) {
    const { content } = textStyle;
    return content ? content(target, total) : target.toString();
}
export const Gauge = (options) => {
    const { data = {}, scale = {}, style = {}, animate = {}, transform = [] } = options, resOptions = __rest(options, ["data", "scale", "style", "animate", "transform"]);
    const { targetData, totalData, target, total, scale: newScale, } = dataTransform(data, scale);
    const _a = subObject(style, 'text'), { tooltip } = _a, textStyle = __rest(_a, ["tooltip"]);
    // pointer + pin
    const indicatorStyle = filterPrefixObject(style, ['pointer', 'pin']);
    const arcStyle = subObject(style, 'arc');
    const shape = arcStyle.shape;
    return [
        deepMix({}, DEFAULT_OPTIONS, Object.assign({ type: 'interval', transform: [{ type: 'stackY' }], data: totalData, scale: newScale, style: shape === 'round' ? Object.assign(Object.assign({}, arcStyle), { shape: GaugeRound }) : arcStyle, animate: typeof animate === 'object' ? subObject(animate, 'arc') : animate }, resOptions)),
        deepMix({}, DEFAULT_OPTIONS, DEFAULT_INDICATOR_OPTIONS, Object.assign({ type: 'point', data: targetData, scale: newScale, style: indicatorStyle, animate: typeof animate === 'object' ? subObject(animate, 'indicator') : animate }, resOptions)),
        deepMix({}, DEFAULT_TEXT_OPTIONS, {
            style: Object.assign({ text: getTextContent(textStyle, { target, total }) }, textStyle),
            tooltip,
            animate: typeof animate === 'object' ? subObject(animate, 'text') : animate,
        }),
    ];
};
Gauge.props = {};
//# sourceMappingURL=gauge.js.map