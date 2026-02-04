"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeFunctionAttribute = void 0;
const util_1 = require("@antv/util");
/**
 * Mark functional attribute constant.
 */
const MaybeFunctionAttribute = () => {
    return (I, mark) => {
        const { style = {} } = mark;
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                style: Object.assign(Object.assign({}, style), Object.fromEntries(Object.entries(style)
                    .filter(([, v]) => typeof v === 'function')
                    .map(([k, v]) => [k, () => v]))),
            }),
        ];
    };
};
exports.MaybeFunctionAttribute = MaybeFunctionAttribute;
exports.MaybeFunctionAttribute.props = {};
//# sourceMappingURL=maybeFunctionAttribute.js.map