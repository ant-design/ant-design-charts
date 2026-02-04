"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JitterY = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
const jitter_1 = require("./jitter");
/**
 * The JitterY transform produce dy channels for marks (especially for point)
 * with ordinal x and y dimension, say to make them jitter in their own space.
 */
const JitterY = (options = {}) => {
    const { padding = 0, random = Math.random } = options;
    return (I, mark) => {
        const { encode, scale } = mark;
        const { y: scaleY } = scale;
        const [Y] = (0, helper_1.columnOf)(encode, 'y');
        const rangeY = (0, jitter_1.rangeOf)(Y, scaleY, padding);
        const DY = I.map(() => (0, jitter_1.interpolate)(random(), ...rangeY));
        return [
            I,
            (0, util_1.deepMix)({ scale: { y: { padding: 0.5 } } }, mark, {
                encode: { dy: (0, helper_1.column)(DY) },
            }),
        ];
    };
};
exports.JitterY = JitterY;
exports.JitterY.props = {};
//# sourceMappingURL=jitterY.js.map