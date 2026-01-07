"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    rect: shape_1.RectShape,
    hollow: shape_1.RectHollow,
};
const Rect = () => {
    return (index, scale, value, coordinate) => {
        const { x: X, x1: X1, y: Y, y1: Y1 } = value;
        const P = Array.from(index, (i) => {
            const p1 = [+X[i], +Y[i]];
            const p2 = [+X1[i], +Y[i]];
            const p3 = [+X1[i], +Y1[i]];
            const p4 = [+X[i], +Y1[i]];
            return [p1, p2, p3, p4].map((d) => coordinate.map(d));
        });
        return [index, P];
    };
};
exports.Rect = Rect;
exports.Rect.props = {
    defaultShape: 'rect',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)(), { type: transform_1.MaybeZeroY1 }],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip1d)()],
    interaction: {
        shareTooltip: true,
    },
};
//# sourceMappingURL=rect.js.map