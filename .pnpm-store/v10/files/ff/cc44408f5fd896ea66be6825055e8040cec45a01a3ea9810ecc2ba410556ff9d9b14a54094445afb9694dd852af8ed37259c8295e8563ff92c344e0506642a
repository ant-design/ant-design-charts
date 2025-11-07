"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeSize = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
const MaybeSize = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { size } = encode;
        if (size !== undefined)
            return [I, mark];
        return [
            I,
            (0, util_1.deepMix)({}, mark, { encode: { size: (0, helper_1.visualColumn)((0, helper_1.constant)(I, 3)) } }),
        ];
    };
};
exports.MaybeSize = MaybeSize;
exports.MaybeSize.props = {};
//# sourceMappingURL=maybeSize.js.map