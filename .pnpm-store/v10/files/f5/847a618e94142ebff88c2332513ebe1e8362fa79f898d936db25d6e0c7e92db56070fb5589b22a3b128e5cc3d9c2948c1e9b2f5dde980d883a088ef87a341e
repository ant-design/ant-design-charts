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
import { min as d3Min, max as d3Max, quantile, group, } from '@antv/vendor/d3-array';
import { subObject } from '../utils/helper';
import { maybeAnimation, subTooltip } from '../utils/mark';
function min(I, V) {
    return d3Min(I, (i) => V[i]);
}
function max(I, V) {
    return d3Max(I, (i) => V[i]);
}
function lower(I, V) {
    const lo = q1(I, V) * 2.5 - q3(I, V) * 1.5;
    return d3Min(I, (i) => (V[i] >= lo ? V[i] : NaN));
}
function q1(I, V) {
    return quantile(I, 0.25, (i) => V[i]);
}
function q2(I, V) {
    return quantile(I, 0.5, (i) => V[i]);
}
function q3(I, V) {
    return quantile(I, 0.75, (i) => V[i]);
}
function upper(I, V) {
    const hi = q3(I, V) * 2.5 - q1(I, V) * 1.5;
    return d3Max(I, (i) => (V[i] <= hi ? V[i] : NaN));
}
/**
 * Group marks by x and reserve outlier indexes.
 */
function OutlierY() {
    return (I, mark) => {
        const { encode } = mark;
        const { y, x } = encode;
        const { value: V } = y;
        const { value: X } = x;
        const GI = Array.from(group(I, (i) => X[+i]).values());
        const FI = GI.flatMap((I) => {
            const lo = lower(I, V);
            const hi = upper(I, V);
            return I.filter((i) => V[i] < lo || V[i] > hi);
        });
        return [FI, mark];
    };
}
export const Boxplot = (options) => {
    const { data, encode, style = {}, tooltip = {}, transform, animate } = options, rest = __rest(options, ["data", "encode", "style", "tooltip", "transform", "animate"]);
    const { point = true } = style, restStyle = __rest(style, ["point"]);
    const { y } = encode;
    const encodeY = { y, y1: y, y2: y, y3: y, y4: y };
    const qy = { y1: q1, y2: q2, y3: q3 };
    // Tooltips.
    const boxTooltip = subTooltip(tooltip, 'box', {
        items: [
            { channel: 'y', name: 'min' },
            { channel: 'y1', name: 'q1' },
            { channel: 'y2', name: 'q2' },
            { channel: 'y3', name: 'q3' },
            { channel: 'y4', name: 'max' },
        ],
    }, true);
    const pointTooltip = subTooltip(tooltip, 'point', {
        title: { channel: 'x' },
        items: [{ name: 'outlier', channel: 'y' }],
    });
    // Only show min and max instead of lower and upper.
    // Only draw a box.
    if (!point) {
        return Object.assign({ type: 'box', data: data, transform: [
                Object.assign(Object.assign({ type: 'groupX', y: min }, qy), { y4: max }),
            ], encode: Object.assign(Object.assign({}, encode), encodeY), style: restStyle, tooltip: boxTooltip }, rest);
    }
    const boxStyle = subObject(restStyle, 'box');
    const pointStyle = subObject(restStyle, 'point');
    return [
        Object.assign({ type: 'box', data: data, transform: [
                Object.assign(Object.assign({ type: 'groupX', y: lower }, qy), { y4: upper }),
            ], encode: Object.assign(Object.assign({}, encode), encodeY), style: boxStyle, tooltip: boxTooltip, animate: maybeAnimation(animate, 'box') }, rest),
        // Draw outliers.
        {
            type: 'point',
            data: data,
            transform: [{ type: OutlierY }],
            encode,
            style: Object.assign({}, pointStyle),
            tooltip: pointTooltip,
            animate: maybeAnimation(animate, 'point'),
        },
    ];
};
Boxplot.props = {};
//# sourceMappingURL=boxplot.js.map