"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Density = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    density: shape_1.DensityShape,
};
const Density = () => {
    return (index, scale, value, coordinate) => {
        const { x: X, series: S } = value;
        const Yn = Object.entries(value)
            .filter(([key]) => key.startsWith('y'))
            .map(([, value]) => value);
        const SZn = Object.entries(value)
            .filter(([key]) => key.startsWith('size'))
            .map(([, value]) => value);
        // Because x and y channel is not strictly required in Line.props,
        // it should throw error with empty x or y channels.
        if (X === undefined || Yn === undefined || SZn === undefined) {
            throw new Error('Missing encode for x or y or size channel.');
        }
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
            const PN = [
                ...Yn.map((_, idx) => [x + +SZn[idx][i] / index.length, +Yn[idx][i]]),
                ...Yn.map((_, idx) => [
                    x - +SZn[idx][i] / index.length,
                    +Yn[idx][i],
                ]).reverse(), // left
            ];
            return PN.map((p) => coordinate.map(p));
        });
        return [index, P];
    };
};
exports.Density = Density;
exports.Density.props = {
    defaultShape: 'density',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', scale: 'band', required: true },
        { name: 'y', required: true },
        { name: 'size', required: true },
        { name: 'series', scale: 'band' },
        { name: 'size', required: true, scale: 'identity' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeZeroY1 },
        { type: transform_1.MaybeZeroX },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip1d)()],
    interaction: { shareTooltip: true },
};
//# sourceMappingURL=density.js.map