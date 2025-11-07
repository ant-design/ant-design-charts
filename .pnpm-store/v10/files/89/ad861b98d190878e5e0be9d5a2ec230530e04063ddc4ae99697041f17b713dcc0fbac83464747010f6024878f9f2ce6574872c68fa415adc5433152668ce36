"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeTooltip = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
/**
 * Infer tooltip channel from specified channel.
 */
const MaybeTooltip = (options) => {
    const { channel } = options;
    return (I, mark) => {
        const { encode, tooltip } = mark;
        if ((0, helper_1.isUnset)(tooltip))
            return [I, mark];
        const { items = [] } = tooltip;
        if (!items || items.length > 0)
            return [I, mark];
        const channels = Array.isArray(channel) ? channel : [channel];
        const newItems = channels.flatMap((channel) => Object.keys(encode)
            .filter((key) => key.startsWith(channel))
            .map((key) => {
            const { field, value, inferred = false, aggregate } = encode[key];
            if (inferred)
                return null;
            // Do not show inferred column.
            if (aggregate && value)
                return { channel: key };
            if (field)
                return { field };
            if (value)
                return { channel: key };
            return null;
        })
            .filter((d) => d !== null));
        return [I, (0, util_1.deepMix)({}, mark, { tooltip: { items: newItems } })];
    };
};
exports.MaybeTooltip = MaybeTooltip;
exports.MaybeTooltip.props = {};
//# sourceMappingURL=maybeTooltip.js.map