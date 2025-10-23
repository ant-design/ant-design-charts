"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeTuple = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
const MaybeTuple = () => {
    return (I, mark) => {
        const { data } = mark;
        if (!Array.isArray(data) || data.some(helper_1.isObject))
            return [I, mark];
        const position = Array.isArray(data[0]) ? data : [data];
        const X = position.map((d) => d[0]);
        const Y = position.map((d) => d[1]);
        return [I, (0, util_1.deepMix)({}, mark, { encode: { x: (0, helper_1.column)(X), y: (0, helper_1.column)(Y) } })];
    };
};
exports.MaybeTuple = MaybeTuple;
exports.MaybeTuple.props = {};
//# sourceMappingURL=maybeTuple.js.map