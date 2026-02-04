"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeZeroY = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add zero constant encode for y channel.
 */
const MaybeZeroY = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { y } = encode;
        if (y !== undefined)
            return [I, mark];
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                encode: { y: (0, helper_1.inferredColumn)((0, helper_1.constant)(I, 0)) },
                scale: { y: { guide: null } },
            }),
        ];
    };
};
exports.MaybeZeroY = MaybeZeroY;
exports.MaybeZeroY.props = {};
//# sourceMappingURL=maybeZeroY.js.map