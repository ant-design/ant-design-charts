"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeTitle = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const dateFormat_1 = require("../utils/dateFormat");
const helper_2 = require("./utils/helper");
/**
 * Infer title channel from x-position channel.
 */
const MaybeTitle = (options = {}) => {
    const { channel = 'x' } = options;
    return (I, mark) => {
        const { encode } = mark;
        const { tooltip } = mark;
        if ((0, helper_1.isUnset)(tooltip))
            return [I, mark];
        const { title } = tooltip;
        if (title !== undefined)
            return [I, mark];
        const titles = Object.keys(encode)
            .filter((key) => key.startsWith(channel))
            .filter((key) => !encode[key].inferred)
            .map((key) => (0, helper_2.columnOf)(encode, key))
            .filter(([T]) => T)
            .map((d) => d[0]);
        if (titles.length === 0)
            return [I, mark];
        const T = [];
        for (const i of I) {
            T[i] = {
                value: titles
                    .map((t) => t[i] instanceof Date ? (0, dateFormat_1.dynamicFormatDateTime)(t[i]) : t[i])
                    .join(', '),
            };
        }
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                tooltip: {
                    title: T,
                },
            }),
        ];
    };
};
exports.MaybeTitle = MaybeTitle;
exports.MaybeTitle.props = {};
//# sourceMappingURL=maybeTitle.js.map