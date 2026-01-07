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
exports.Heatmap = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
const utils_1 = require("../utils");
const selection_1 = require("../../utils/selection");
const renderer_1 = require("./renderer");
function deleteKey(obj, fn) {
    return Object.keys(obj).reduce((r, k) => {
        const v = obj[k];
        if (!fn(v, k))
            r[k] = v;
        return r;
    }, {});
}
const Heatmap = (options, context) => {
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
        const min = (0, d3_array_1.min)(points, (p) => p[2]);
        const max = (0, d3_array_1.max)(points, (p) => p[2]);
        const options = {
            gradient,
            opacity,
            minOpacity,
            maxOpacity,
            blur,
            useGradientOpacity,
        };
        const ctx = width && height
            ? (0, renderer_1.HeatmapRenderer)(width, height, min, max, data, deleteKey(options, (v) => v === undefined), createCanvas)
            : { canvas: null };
        return (0, selection_1.select)(document.createElement('image', {}))
            .call(utils_1.applyStyle, defaults)
            .style('x', 0)
            .style('y', 0)
            .style('width', width)
            .style('height', height)
            .style('src', ctx.canvas.toDataURL())
            .style('transform', transform)
            .call(utils_1.applyStyle, style)
            .node();
    };
};
exports.Heatmap = Heatmap;
exports.Heatmap.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=heatmap.js.map