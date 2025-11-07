"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeTupleY = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
const MaybeTupleY = () => {
    return (I, mark) => {
        const { data } = mark;
        if (!Array.isArray(data) || data.some(helper_1.isObject))
            return [I, mark];
        return [I, (0, util_1.deepMix)({}, mark, { encode: { y: (0, helper_1.column)(data) } })];
    };
};
exports.MaybeTupleY = MaybeTupleY;
exports.MaybeTupleY.props = {};
//# sourceMappingURL=maybeTupleY.js.map