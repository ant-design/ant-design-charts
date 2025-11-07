"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeSeries = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
/**
 * Assume color channel is series channel.
 */
const MaybeSeries = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { series, color } = encode;
        if (series !== undefined || color === undefined)
            return [I, mark];
        const [C, fc] = (0, helper_1.columnOf)(encode, 'color');
        return [I, (0, util_1.deepMix)({}, mark, { encode: { series: (0, helper_1.column)(C, fc) } })];
    };
};
exports.MaybeSeries = MaybeSeries;
exports.MaybeSeries.props = {};
//# sourceMappingURL=maybeSeries.js.map