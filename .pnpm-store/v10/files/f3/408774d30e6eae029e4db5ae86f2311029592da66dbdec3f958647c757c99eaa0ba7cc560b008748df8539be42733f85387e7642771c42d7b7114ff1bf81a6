"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverlapHide = void 0;
const bounds_1 = require("../utils/bounds");
const style_1 = require("../utils/style");
/**
 * Hide the label when overlap.
 */
const OverlapHide = (options) => {
    const { priority } = options;
    return (labels) => {
        const displayLabels = [];
        // When overlap, will hide the next label.
        if (priority)
            labels.sort(priority);
        labels.forEach((l) => {
            (0, style_1.show)(l);
            const b1 = l.getLocalBounds();
            const overlaping = displayLabels.some((dl) => (0, bounds_1.isOverlap)((0, bounds_1.parseAABB)(b1), (0, bounds_1.parseAABB)(dl.getLocalBounds())));
            if (overlaping)
                (0, style_1.hide)(l);
            else
                displayLabels.push(l);
        });
        return labels;
    };
};
exports.OverlapHide = OverlapHide;
//# sourceMappingURL=overlapHide.js.map