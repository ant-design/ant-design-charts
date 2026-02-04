"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeZeroZ = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add zero constant encode for z channel.
 */
const MaybeZeroZ = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { z } = encode;
        if (z !== undefined)
            return [I, mark];
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                encode: { z: (0, helper_1.inferredColumn)((0, helper_1.constant)(I, 0)) },
                scale: { z: { guide: null } },
            }),
        ];
    };
};
exports.MaybeZeroZ = MaybeZeroZ;
exports.MaybeZeroZ.props = {};
//# sourceMappingURL=maybeZeroZ.js.map