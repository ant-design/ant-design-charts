"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowHide = void 0;
const bounds_1 = require("../utils/bounds");
const style_1 = require("../utils/style");
/**
 * Hide the label when the label is overflowed from the element.
 */
const OverflowHide = () => {
    return (labels) => {
        labels.forEach((l) => {
            (0, style_1.show)(l);
            const bounds = l.attr('bounds');
            const b = l.getLocalBounds();
            const overflow = (0, bounds_1.isOverflow)((0, bounds_1.parseAABB)(b), bounds);
            if (overflow)
                (0, style_1.hide)(l);
        });
        return labels;
    };
};
exports.OverflowHide = OverflowHide;
//# sourceMappingURL=overflowHide.js.map