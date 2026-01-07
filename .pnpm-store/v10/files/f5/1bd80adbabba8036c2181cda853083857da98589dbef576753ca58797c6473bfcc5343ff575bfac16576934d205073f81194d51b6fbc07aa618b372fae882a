import { isOverflow, parseAABB } from '../utils/bounds';
import { hide, show } from '../utils/style';
/**
 * Hide the label when the label is overflowed from the element.
 */
export const OverflowHide = () => {
    return (labels) => {
        labels.forEach((l) => {
            show(l);
            const bounds = l.attr('bounds');
            const b = l.getLocalBounds();
            const overflow = isOverflow(parseAABB(b), bounds);
            if (overflow)
                hide(l);
        });
        return labels;
    };
};
//# sourceMappingURL=overflowHide.js.map