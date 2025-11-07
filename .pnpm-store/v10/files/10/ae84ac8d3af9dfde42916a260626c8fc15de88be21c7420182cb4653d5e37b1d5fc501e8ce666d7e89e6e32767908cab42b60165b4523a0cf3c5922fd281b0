"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    text: shape_1.TextShape,
    badge: shape_1.TextBadge,
    tag: shape_1.TextTag,
};
const Text = (options) => {
    const { cartesian = false } = options;
    if (cartesian)
        return utils_1.visualMark;
    return ((index, scale, value, coordinate) => {
        const { x: X, y: Y } = value;
        const offset = (0, utils_1.createBandOffset)(scale, value, options);
        const P = Array.from(index, (i) => {
            const p = [+X[i], +Y[i]];
            return [coordinate.map(offset(p, i))];
        });
        return [index, P];
    });
};
exports.Text = Text;
exports.Text.props = {
    defaultShape: 'text',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'text', scale: 'identity' },
        { name: 'fontSize', scale: 'identity' },
        { name: 'rotate', scale: 'identity' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeTuple },
        { type: transform_1.MaybeVisualPosition },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=text.js.map