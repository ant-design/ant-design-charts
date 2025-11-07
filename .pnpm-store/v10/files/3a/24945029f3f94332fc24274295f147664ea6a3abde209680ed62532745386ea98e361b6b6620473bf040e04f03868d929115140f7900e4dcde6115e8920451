"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    box: shape_1.BoxShape,
    violin: shape_1.BoxViolin,
};
/**
 * Convert value for each channel to box shapes.
 *
 * p0           p2          p1
 *    ──────────┬──────────
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │ p3
 * p4 ┌─────────┴──────────┐ p5
 *    │                    │
 *    │                    │
 * p8 ├────────────────────┤ p9
 *    │                    │
 *    │        p10         │
 * p7 └─────────┬──────────┘ p6
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *              │
 *   ───────────┴───────────
 * p12         p11           p13
 */
const Box = () => {
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y, y1: Y1, y2: Y2, y3: Y3, y4: Y4, series: S } = value;
        // Calc width for each box.
        // The scales for x and series channels must be band scale.
        const xScale = scale.x;
        const series = scale.series;
        const P = Array.from(index, (i) => {
            const groupWidth = xScale.getBandWidth(xScale.invert(+X[i]));
            const ratio = series ? series.getBandWidth(series.invert(+(S === null || S === void 0 ? void 0 : S[i]))) : 1;
            const width = groupWidth * ratio;
            const offset = (+(S === null || S === void 0 ? void 0 : S[i]) || 0) * groupWidth;
            const x = +X[i] + offset + width / 2;
            const [low, q1, median, q3, high] = [
                +Y[i],
                +Y1[i],
                +Y2[i],
                +Y3[i],
                +Y4[i],
            ];
            const P13 = [
                [x - width / 2, high],
                [x + width / 2, high],
                [x, high],
                [x, q3],
                [x - width / 2, q3],
                [x + width / 2, q3],
                [x + width / 2, q1],
                [x - width / 2, q1],
                [x - width / 2, median],
                [x + width / 2, median],
                [x, q1],
                [x, low],
                [x - width / 2, low],
                [x + width / 2, low],
            ];
            return P13.map((d) => coordinate.map(d));
        });
        return [index, P];
    };
};
exports.Box = Box;
exports.Box.props = {
    defaultShape: 'box',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', scale: 'band', required: true },
        { name: 'y', required: true },
        { name: 'series', scale: 'band' },
    ],
    preInference: [...(0, utils_1.basePreInference)(), { type: transform_1.MaybeZeroX }],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip1d)()],
    interaction: {
        shareTooltip: true,
    },
};
//# sourceMappingURL=box.js.map