"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeZeroX = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add zero constant encode for x channel.
 * This is useful for interval geometry.
 */
const MaybeZeroX = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { x } = encode;
        if (x !== undefined)
            return [I, mark];
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                encode: { x: (0, helper_1.inferredColumn)((0, helper_1.constant)(I, 0)) },
                scale: { x: { guide: null } },
            }),
        ];
    };
};
exports.MaybeZeroX = MaybeZeroX;
exports.MaybeZeroX.props = {};
//# sourceMappingURL=maybeZeroX.js.map