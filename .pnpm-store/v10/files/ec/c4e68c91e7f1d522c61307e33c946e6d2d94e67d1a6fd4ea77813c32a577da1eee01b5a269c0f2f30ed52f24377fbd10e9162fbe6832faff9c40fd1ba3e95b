import { contrast, mostContrast } from './utils';
/**
 * Reverse the label color when the contrast is lower then `threshold`.
 * The default value of `threshold` is 4.5.
 * More about contract, see https://webaim.org/resources/contrastchecker/
 */
export const ContrastReverse = (options) => {
    const { threshold = 4.5, palette = ['#000', '#fff'] } = options;
    return (labels) => {
        labels.forEach((l) => {
            const background = l.attr('dependentElement').parsedStyle.fill;
            const foreground = l.parsedStyle.fill;
            const c = contrast(foreground, background);
            if (c < threshold)
                l.attr('fill', mostContrast(background, palette));
        });
        return labels;
    };
};
//# sourceMappingURL=contrastReverse.js.map