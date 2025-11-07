"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeAnimation = exports.isFullTooltip = exports.maybeTooltip = exports.subTooltip = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./helper");
function subTooltip(tooltip, name, defaults = {}, main = false) {
    if ((0, helper_1.isUnset)(tooltip))
        return tooltip;
    if (Array.isArray(tooltip) && main)
        return tooltip;
    const sub = (0, helper_1.subObject)(tooltip, name);
    return (0, util_1.deepMix)(defaults, sub);
}
exports.subTooltip = subTooltip;
function maybeTooltip(tooltip, defaults = {}) {
    if ((0, helper_1.isUnset)(tooltip))
        return tooltip;
    if (Array.isArray(tooltip))
        return tooltip;
    if (!isFullTooltip(tooltip))
        return tooltip;
    return (0, util_1.deepMix)(defaults, tooltip);
}
exports.maybeTooltip = maybeTooltip;
function isFullTooltip(tooltip) {
    if (Object.keys(tooltip).length === 0)
        return true;
    const { title, items } = tooltip;
    return title !== undefined || items !== undefined;
}
exports.isFullTooltip = isFullTooltip;
function maybeAnimation(animate, sub) {
    return typeof animate === 'object' ? (0, helper_1.subObject)(animate, sub) : animate;
}
exports.maybeAnimation = maybeAnimation;
//# sourceMappingURL=mark.js.map