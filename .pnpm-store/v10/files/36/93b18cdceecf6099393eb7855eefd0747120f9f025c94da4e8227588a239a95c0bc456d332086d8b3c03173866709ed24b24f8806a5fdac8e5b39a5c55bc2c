"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interval = void 0;
const transform_1 = require("../transform");
const shape_1 = require("../shape");
const utils_1 = require("./utils");
function bandWidth(scale, x) {
    return scale.getBandWidth(scale.invert(x));
}
const shape = {
    rect: shape_1.IntervalShape,
    hollow: shape_1.IntervalHollow,
    funnel: shape_1.IntervalFunnel,
    pyramid: shape_1.IntervalPyramid,
};
/**
 * Convert value for each channel to rect shapes.
 * p0        p1
 *    ┌────┐
 *    │    │
 *    │    │
 * p3 └────┘ p2
 */
const Interval = () => {
    return (index, scale, value, coordinate) => {
        const { x: X, y1: Y1, series: S, size: SZ } = value;
        let { y: Y } = value;
        Y = Y.map((d) => (d !== undefined ? d : 1));
        // Calc width for each interval.
        // The scales for x and series channels must be band scale.
        const x = scale.x;
        const series = scale.series;
        const [width] = coordinate.getSize();
        const NSZ = SZ ? SZ.map((d) => +d / width) : null;
        const x1x2 = !SZ
            ? (x, w, i) => [x, x + w]
            : (x, w, i) => {
                const mx = x + w / 2;
                const s = NSZ[i];
                return [mx - s / 2, mx + s / 2];
            };
        // Calc the points of bounding box for the interval.
        // They are start from left-top corner in clock wise order.
        const P = Array.from(index, (i) => {
            const groupWidth = bandWidth(x, X[i]);
            const ratio = series ? bandWidth(series, S === null || S === void 0 ? void 0 : S[i]) : 1;
            const width = groupWidth * ratio;
            const offset = (+(S === null || S === void 0 ? void 0 : S[i]) || 0) * groupWidth;
            const x0 = +X[i] + offset;
            const [x1, x2] = x1x2(x0, width, i);
            const y1 = +Y[i];
            const y2 = +Y1[i];
            const p1 = [x1, y1];
            const p2 = [x2, y1];
            const p3 = [x2, y2];
            const p4 = [x1, y2];
            return [p1, p2, p3, p4].map((d) => coordinate.map(d));
        });
        return [index, P];
    };
};
exports.Interval = Interval;
exports.Interval.props = {
    defaultShape: 'rect',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', scale: 'band', required: true },
        { name: 'y', required: true },
        { name: 'series', scale: 'band' },
        { name: 'size' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeZeroY1 },
        { type: transform_1.MaybeZeroX },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip1d)()],
    interaction: { shareTooltip: true },
};
//# sourceMappingURL=interval.js.map