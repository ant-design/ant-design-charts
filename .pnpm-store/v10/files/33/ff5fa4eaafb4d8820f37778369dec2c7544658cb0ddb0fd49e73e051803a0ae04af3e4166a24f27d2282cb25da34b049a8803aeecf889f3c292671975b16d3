"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
const coordinate_1 = require("../utils/coordinate");
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    line: shape_1.LineShape,
    smooth: shape_1.LineSmooth,
    hv: shape_1.LineHV,
    vh: shape_1.LineVH,
    hvh: shape_1.LineHVH,
    trail: shape_1.LineTrail,
};
const line = (index, scale, value, coordinate) => {
    var _a, _b;
    const { series: S, x: X, y: Y } = value;
    const { x, y } = scale;
    // Because x and y channel is not strictly required in Line.props,
    // it should throw error with empty x or y channels.
    if (X === undefined || Y === undefined) {
        throw new Error('Missing encode for x or y channel.');
    }
    // Group data into series.
    // There is only one series without specified series encode.
    const series = S ? Array.from((0, d3_array_1.group)(index, (i) => S[i]).values()) : [index];
    const I = series.map((group) => group[0]).filter((i) => i !== undefined);
    // A group of data corresponds to one line.
    const xoffset = (((_a = x === null || x === void 0 ? void 0 : x.getBandWidth) === null || _a === void 0 ? void 0 : _a.call(x)) || 0) / 2;
    const yoffset = (((_b = y === null || y === void 0 ? void 0 : y.getBandWidth) === null || _b === void 0 ? void 0 : _b.call(y)) || 0) / 2;
    const P = Array.from(series, (I) => {
        return I.map((i) => coordinate.map([+X[i] + xoffset, +Y[i] + yoffset]));
    });
    return [I, P, series];
};
const parallel = (index, scale, value, coordinate) => {
    // Extract all value for position[number] channels.
    const PV = Object.entries(value)
        .filter(([key]) => key.startsWith('position'))
        .map(([, value]) => value);
    // Because position channel is not strictly required in Line.props,
    // it should throw error with empty position values.
    if (PV.length === 0) {
        throw new Error('Missing encode for position channel.');
    }
    // Close the loop for radar(= parallel + polar) coordinate.
    if ((0, coordinate_1.isPolar)(coordinate))
        PV.push(PV[0]);
    // One data corresponds to one line.
    const P = Array.from(index, (i) => {
        // Transform high dimension vector to a list of two-dimension vectors.
        // [a, b, c] -> [d, e, f, g, h, i]
        const vector = PV.map((pv) => +pv[i]);
        const vectors = coordinate.map(vector);
        // Two-dimension vectors are stored in a flat array, so extract them.
        // [d, e, f, g, h, i] -> [d, e], [f, g], [h, i]
        const points = [];
        for (let i = 0; i < vectors.length; i += 2) {
            points.push([vectors[i], vectors[i + 1]]);
        }
        return points;
    });
    return [index, P];
};
/**
 * Convert value for each channel to line shapes.
 */
const Line = () => {
    return (index, scale, value, coordinate) => {
        const mark = (0, coordinate_1.isParallel)(coordinate) ? parallel : line;
        return mark(index, scale, value, coordinate);
    };
};
exports.Line = Line;
exports.Line.props = {
    defaultShape: 'line',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x' },
        { name: 'y' },
        { name: 'position', independent: true },
        { name: 'size' },
        { name: 'series', scale: 'band' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        // !!!Note This order is very important.
        { type: transform_1.MaybeGradient },
        { type: transform_1.MaybeSeries },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip1d)(), ...(0, utils_1.tooltipXd)()],
    interaction: {
        shareTooltip: true,
        seriesTooltip: true,
        crosshairs: true,
    },
};
//# sourceMappingURL=line.js.map