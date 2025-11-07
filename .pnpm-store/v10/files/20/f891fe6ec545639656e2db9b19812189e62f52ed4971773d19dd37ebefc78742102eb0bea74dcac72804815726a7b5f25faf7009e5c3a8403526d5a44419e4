"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heatmap = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    heatmap: shape_1.HeatmapShape,
};
/**
 * Draw heatmap with gradient.
 */
const Heatmap = (options) => {
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y, size: S, color: C } = value;
        const P = Array.from(index, (i) => {
            // Default size = 40.
            const r = S ? +S[i] : 40;
            // Warning: x, y, value, radius.
            return [...coordinate.map([+X[i], +Y[i]]), C[i], r];
        });
        return [[0], [P]];
    };
};
exports.Heatmap = Heatmap;
exports.Heatmap.props = {
    defaultShape: 'heatmap',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'color', scale: 'identity', required: true },
        { name: 'size' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeZeroX },
        { type: transform_1.MaybeZeroY },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=heatmap.js.map