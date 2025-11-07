"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jitter = exports.interpolate = exports.rangeOf = void 0;
const scale_1 = require("@antv/scale");
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
const order_1 = require("./utils/order");
function rangeOf(value, scaleOptions, padding) {
    if (value === null)
        return [-0.5, 0.5];
    const domain = (0, order_1.domainOf)(value, scaleOptions);
    const scale = new scale_1.Band({ domain, range: [0, 1], padding });
    const step = scale.getBandWidth();
    return [-step / 2, step / 2];
}
exports.rangeOf = rangeOf;
function interpolate(t, a, b) {
    return a * (1 - t) + b * t;
}
exports.interpolate = interpolate;
/**
 * The jitter transform produce dx and dy channels for marks (especially for point)
 * with ordinal x and y dimension, say to make them jitter in their own space.
 */
const Jitter = (options = {}) => {
    const { padding = 0, paddingX = padding, paddingY = padding, random = Math.random, } = options;
    return (I, mark) => {
        const { encode, scale } = mark;
        const { x: scaleX, y: scaleY } = scale;
        const [X] = (0, helper_1.columnOf)(encode, 'x');
        const [Y] = (0, helper_1.columnOf)(encode, 'y');
        const rangeX = rangeOf(X, scaleX, paddingX);
        const rangeY = rangeOf(Y, scaleY, paddingY);
        const DY = I.map(() => interpolate(random(), ...rangeY));
        const DX = I.map(() => interpolate(random(), ...rangeX));
        return [
            I,
            (0, util_1.deepMix)({
                scale: {
                    x: { padding: 0.5 },
                    y: { padding: 0.5 },
                },
            }, mark, {
                encode: { dy: (0, helper_1.column)(DY), dx: (0, helper_1.column)(DX) },
            }),
        ];
    };
};
exports.Jitter = Jitter;
exports.Jitter.props = {};
//# sourceMappingURL=jitter.js.map