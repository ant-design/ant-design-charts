"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeTupleX = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
const MaybeTupleX = () => {
    return (I, mark) => {
        const { data } = mark;
        if (!Array.isArray(data) || data.some(helper_1.isObject))
            return [I, mark];
        return [I, (0, util_1.deepMix)({}, mark, { encode: { x: (0, helper_1.column)(data) } })];
    };
};
exports.MaybeTupleX = MaybeTupleX;
exports.MaybeTupleX.props = {};
//# sourceMappingURL=maybeTupleX.js.map