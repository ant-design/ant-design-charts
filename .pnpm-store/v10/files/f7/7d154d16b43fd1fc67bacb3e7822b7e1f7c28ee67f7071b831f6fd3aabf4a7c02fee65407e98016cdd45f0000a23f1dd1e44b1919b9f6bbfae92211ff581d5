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
import { max as d3max, min as d3min } from '@antv/vendor/d3-array';
import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { HeatmapRenderer } from './renderer';
function deleteKey(obj, fn) {
    return Object.keys(obj).reduce((r, k) => {
        const v = obj[k];
        if (!fn(v, k))
            r[k] = v;
        return r;
    }, {});
}
export const Heatmap = (options, context) => {
    const { gradient, opacity, maxOpacity, minOpacity, blur, useGradientOpacity } = options, style = __rest(options, ["gradient", "opacity", "maxOpacity", "minOpacity", "blur", "useGradientOpacity"]);
    const { coordinate, createCanvas, document } = context;
    return (points, value, defaults) => {
        const { transform } = value;
        const [width, height] = coordinate.getSize();
        const data = points.map((p) => ({
            x: p[0],
            y: p[1],
            value: p[2],
            radius: p[3],
        }));
        const min = d3min(points, (p) => p[2]);
        const max = d3max(points, (p) => p[2]);
        const options = {
            gradient,
            opacity,
            minOpacity,
            maxOpacity,
            blur,
            useGradientOpacity,
        };
        const ctx = width && height
            ? HeatmapRenderer(width, height, min, max, data, deleteKey(options, (v) => v === undefined), createCanvas)
            : { canvas: null };
        return select(document.createElement('image', {}))
            .call(applyStyle, defaults)
            .style('x', 0)
            .style('y', 0)
            .style('width', width)
            .style('height', height)
            .style('src', ctx.canvas.toDataURL())
            .style('transform', transform)
            .call(applyStyle, style)
            .node();
    };
};
Heatmap.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=heatmap.js.map