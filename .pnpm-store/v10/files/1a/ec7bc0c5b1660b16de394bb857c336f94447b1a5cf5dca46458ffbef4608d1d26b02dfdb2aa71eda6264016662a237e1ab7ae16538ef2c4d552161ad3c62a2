"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const transform_1 = require("../transform");
const shape_1 = require("../shape");
const utils_1 = require("./utils");
const shape = {
    image: shape_1.ImageShape,
};
const Image = (options) => {
    const { cartesian } = options;
    if (cartesian)
        return utils_1.visualMark;
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y } = value;
        const offset = (0, utils_1.createBandOffset)(scale, value, options);
        const P = Array.from(index, (i) => {
            const p = [+X[i], +Y[i]];
            return [coordinate.map(offset(p, i))];
        });
        return [index, P];
    };
};
exports.Image = Image;
exports.Image.props = {
    defaultShape: 'image',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'src', scale: 'identity' },
        { name: 'size' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeTuple },
        { type: transform_1.MaybeVisualPosition },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=image.js.map