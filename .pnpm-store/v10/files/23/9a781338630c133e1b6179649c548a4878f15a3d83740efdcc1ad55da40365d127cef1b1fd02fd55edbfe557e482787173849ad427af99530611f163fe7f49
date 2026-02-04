"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeIdentityY = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
const MaybeIdentityY = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { y1 } = encode;
        if (y1)
            return [I, mark];
        const [Y] = (0, helper_1.columnOf)(encode, 'y');
        return [I, (0, util_1.deepMix)({}, mark, { encode: { y1: (0, helper_1.column)([...Y]) } })];
    };
};
exports.MaybeIdentityY = MaybeIdentityY;
exports.MaybeIdentityY.props = {};
//# sourceMappingURL=maybeIdentityY.js.map