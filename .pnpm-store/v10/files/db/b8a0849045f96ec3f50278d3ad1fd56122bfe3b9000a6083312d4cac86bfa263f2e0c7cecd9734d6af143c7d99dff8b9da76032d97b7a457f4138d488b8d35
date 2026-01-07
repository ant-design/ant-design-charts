"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percentToRatio = void 0;
exports.axisBreaks = axisBreaks;
const util_1 = require("@antv/util");
/**
 * Convert a percentage string to a ratio.
 */
const percentToRatio = (gap) => {
    if (!gap || typeof gap !== 'string') {
        return gap;
    }
    const value = gap.endsWith('%')
        ? parseFloat(gap.slice(0, -1)) / 100
        : parseFloat(gap);
    if (isNaN(value) || value < 0 || value > 1) {
        throw new Error(`Invalid gap value: ${gap}. It should be between 0 and 1.`);
    }
    return value;
};
exports.percentToRatio = percentToRatio;
function axisBreaks(options) {
    const { axis } = options;
    const breaks = (0, util_1.get)(axis, 'y.breaks');
    if (breaks) {
        (0, util_1.set)(options, 'scale.y.breaks', breaks.map((item) => (Object.assign(Object.assign({ key: `break-${item.start}-${item.end}` }, item), { gap: (0, exports.percentToRatio)(item.gap) }))));
    }
    return options;
}
//# sourceMappingURL=axis-breaks.js.map