"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeZeroY1 = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add zero constant encode for y1 channel.
 */
const MaybeZeroY1 = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { y1 } = encode;
        if (y1 !== undefined)
            return [I, mark];
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                encode: { y1: (0, helper_1.inferredColumn)((0, helper_1.constant)(I, 0)) },
            }),
        ];
    };
};
exports.MaybeZeroY1 = MaybeZeroY1;
exports.MaybeZeroY1.props = {};
//# sourceMappingURL=maybeZeroY1.js.map