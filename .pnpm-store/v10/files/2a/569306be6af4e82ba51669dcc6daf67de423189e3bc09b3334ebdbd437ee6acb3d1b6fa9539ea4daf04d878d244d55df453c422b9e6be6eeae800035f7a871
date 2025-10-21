"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JitterX = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
const jitter_1 = require("./jitter");
/**
 * The JitterX transform produce dy channels for marks (especially for point)
 * with ordinal x and y dimension, say to make them jitter in their own space.
 */
const JitterX = (options = {}) => {
    const { padding = 0, random = Math.random } = options;
    return (I, mark) => {
        const { encode, scale } = mark;
        const { x: scaleX } = scale;
        const [X] = (0, helper_1.columnOf)(encode, 'x');
        const rangeX = (0, jitter_1.rangeOf)(X, scaleX, padding);
        const DX = I.map(() => (0, jitter_1.interpolate)(random(), ...rangeX));
        return [
            I,
            (0, util_1.deepMix)({ scale: { x: { padding: 0.5 } } }, mark, {
                encode: { dx: (0, helper_1.column)(DX) },
            }),
        ];
    };
};
exports.JitterX = JitterX;
exports.JitterX.props = {};
//# sourceMappingURL=jitterX.js.map