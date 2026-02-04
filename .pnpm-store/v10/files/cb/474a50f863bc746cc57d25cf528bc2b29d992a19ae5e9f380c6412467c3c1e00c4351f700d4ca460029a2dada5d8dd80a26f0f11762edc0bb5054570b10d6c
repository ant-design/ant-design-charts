"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContrastReverse = void 0;
const utils_1 = require("./utils");
/**
 * Reverse the label color when the contrast is lower then `threshold`.
 * The default value of `threshold` is 4.5.
 * More about contract, see https://webaim.org/resources/contrastchecker/
 */
const ContrastReverse = (options) => {
    const { threshold = 4.5, palette = ['#000', '#fff'] } = options;
    return (labels) => {
        labels.forEach((l) => {
            const background = l.attr('dependentElement').parsedStyle.fill;
            const foreground = l.parsedStyle.fill;
            const c = (0, utils_1.contrast)(foreground, background);
            if (c < threshold)
                l.attr('fill', (0, utils_1.mostContrast)(background, palette));
        });
        return labels;
    };
};
exports.ContrastReverse = ContrastReverse;
//# sourceMappingURL=contrastReverse.js.map