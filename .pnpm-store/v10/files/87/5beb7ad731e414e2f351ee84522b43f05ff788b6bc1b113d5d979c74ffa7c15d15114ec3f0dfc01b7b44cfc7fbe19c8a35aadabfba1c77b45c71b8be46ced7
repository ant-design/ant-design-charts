"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    area: shape_1.AreaShape,
    smooth: shape_1.AreaSmooth,
    hvh: shape_1.AreaHVH,
    vh: shape_1.AreaVH,
    hv: shape_1.AreaHV,
};
/*
 * Convert value for each channel to area shapes.
 *
 *     ▲
 *     │
 *     │                                         y2
 *     │
 *     │                     y1     xxxxxxxxxxxxx
 *     │                         xxxx            x
 *     │                      xxx                x
 *     │                    xxx                  x
 *     │        y0       xxx                     x
 *     │           xxxxxxx                       x
 *     │          x                              x
 *     │         xx                              x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 *     │         x                               x
 * ────┼─────────x───────────────────────────────x──────────────►
 *     │        y3             y4                y5
 */
const Area = () => {
    return (index, scale, value, coordinate) => {
        var _a, _b;
        const { x: X, y: Y, y1: Y1, series: S } = value;
        const { x, y } = scale;
        // Group data by series field.
        const series = S ? Array.from((0, d3_array_1.group)(index, (i) => S[i]).values()) : [index];
        const I = series.map((group) => group[0]).filter((i) => i !== undefined);
        // A group of data corresponds to one area.
        const xoffset = (((_a = x === null || x === void 0 ? void 0 : x.getBandWidth) === null || _a === void 0 ? void 0 : _a.call(x)) || 0) / 2;
        const yoffset = (((_b = y === null || y === void 0 ? void 0 : y.getBandWidth) === null || _b === void 0 ? void 0 : _b.call(y)) || 0) / 2;
        const P = Array.from(series, (SI) => {
            const l = SI.length;
            const points = new Array(l * 2);
            for (let idx = 0; idx < SI.length; idx++) {
                const i = SI[idx];
                points[idx] = coordinate.map([+X[i] + xoffset, +Y[i] + yoffset]); // y1
                points[l + idx] = coordinate.map([+X[i] + xoffset, +Y1[i] + yoffset]); // y0
            }
            return points;
        });
        return [I, P, series];
    };
};
exports.Area = Area;
exports.Area.props = {
    defaultShape: 'area',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'size' },
        { name: 'series', scale: 'band' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeSeries },
        { type: transform_1.MaybeZeroY1 },
        { type: transform_1.MaybeZeroPadding },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip1d)()],
    interaction: {
        shareTooltip: true,
        seriesTooltip: true,
        crosshairs: true,
    },
};
//# sourceMappingURL=area.js.map