"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const transform_1 = require("../transform");
const shape_1 = require("../shape");
const utils_1 = require("./utils");
const shape = {
    link: shape_1.LinkShape,
    arc: shape_1.LinkArc,
    smooth: shape_1.LinkSmooth,
    vhv: shape_1.LinkVHV,
};
/**
 * Connect `start` to `end` with single line.
 */
const Link = (options) => {
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y, x1: X1 = X, y1: Y1 = Y } = value;
        const offset = (0, utils_1.createBandOffset)(scale, value, options);
        const P = index.map((i) => [
            coordinate.map(offset([+X[i], +Y[i]], i)),
            coordinate.map(offset([+X1[i], +Y1[i]], i)),
        ]);
        return [index, P];
    };
};
exports.Link = Link;
exports.Link.props = {
    defaultShape: 'link',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeIdentityY },
        { type: transform_1.MaybeIdentityX },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=link.js.map