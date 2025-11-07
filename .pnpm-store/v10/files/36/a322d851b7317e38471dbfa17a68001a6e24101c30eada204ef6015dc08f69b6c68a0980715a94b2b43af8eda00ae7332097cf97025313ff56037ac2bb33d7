"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    shape: shape_1.ShapeShape,
};
/**
 * @todo Unify with text, image and point.
 */
const Shape = (options) => {
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
exports.Shape = Shape;
exports.Shape.props = {
    defaultShape: 'shape',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        { name: 'x', required: true },
        { name: 'y', required: true },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeTuple },
        { type: transform_1.MaybeVisualPosition },
        { type: transform_1.MaybeFunctionAttribute },
    ],
};
//# sourceMappingURL=shape.js.map