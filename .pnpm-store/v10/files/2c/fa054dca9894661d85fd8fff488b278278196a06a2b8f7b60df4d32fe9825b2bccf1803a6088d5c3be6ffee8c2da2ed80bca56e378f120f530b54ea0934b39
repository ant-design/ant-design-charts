"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeGradient = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
const MaybeGradient = () => {
    return (I, mark) => {
        const { style = {}, encode } = mark;
        const { series } = encode;
        const { gradient } = style;
        if (!gradient || series)
            return [I, mark];
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                encode: {
                    series: (0, helper_1.visualColumn)((0, helper_1.constant)(I, undefined)),
                },
            }),
        ];
    };
};
exports.MaybeGradient = MaybeGradient;
exports.MaybeGradient.props = {};
//# sourceMappingURL=maybeGradient.js.map