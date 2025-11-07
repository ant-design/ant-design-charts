"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeIdentityX = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
const MaybeIdentityX = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { x1 } = encode;
        if (x1)
            return [I, mark];
        const [X] = (0, helper_1.columnOf)(encode, 'x');
        return [I, (0, util_1.deepMix)({}, mark, { encode: { x1: (0, helper_1.column)([...X]) } })];
    };
};
exports.MaybeIdentityX = MaybeIdentityX;
exports.MaybeIdentityX.props = {};
//# sourceMappingURL=maybeIdentityX.js.map