import { isOverlap, parseAABB } from '../utils/bounds';
import { hide, show } from '../utils/style';
/**
 * Hide the label when overlap.
 */
export const OverlapHide = (options) => {
    const { priority } = options;
    return (labels) => {
        const displayLabels = [];
        // When overlap, will hide the next label.
        if (priority)
            labels.sort(priority);
        labels.forEach((l) => {
            show(l);
            const b1 = l.getLocalBounds();
            const overlaping = displayLabels.some((dl) => isOverlap(parseAABB(b1), parseAABB(dl.getLocalBounds())));
            if (overlaping)
                hide(l);
            else
                displayLabels.push(l);
        });
        return labels;
    };
};
//# sourceMappingURL=overlapHide.js.map