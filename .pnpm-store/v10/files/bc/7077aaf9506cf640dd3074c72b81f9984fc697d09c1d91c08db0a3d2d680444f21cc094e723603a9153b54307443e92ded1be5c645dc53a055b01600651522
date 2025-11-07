"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
const shape_1 = require("../shape");
const utils_1 = require("./utils");
const shape = {
    vector: shape_1.VectorShape,
};
/**
 * Convert value for each channel to start, end.
 * The angle starts from the X axis(right direction).
 */
const Vector = () => {
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y, size: S, rotate: R } = value;
        const [width, height] = coordinate.getSize();
        const P = index.map((i) => {
            const angle = (+R[i] / 180) * Math.PI;
            const s = +S[i];
            const a = s / width;
            const b = s / height;
            const vx = a * Math.cos(angle);
            const vy = -b * Math.sin(angle);
            return [
                coordinate.map([+X[i] - vx / 2, +Y[i] - vy / 2]),
                coordinate.map([+X[i] + vx / 2, +Y[i] + vy / 2]),
            ];
        });
        return [index, P];
    };
};
exports.Vector = Vector;
exports.Vector.props = {
    defaultShape: 'vector',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'rotate', required: true, scale: 'identity' },
        { name: 'size', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)()],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=vector.js.map