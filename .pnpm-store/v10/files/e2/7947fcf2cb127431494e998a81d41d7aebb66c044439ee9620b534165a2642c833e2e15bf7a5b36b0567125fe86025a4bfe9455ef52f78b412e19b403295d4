"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowStroke = void 0;
const color_1 = require("../utils/color");
const bounds_1 = require("../utils/bounds");
const utils_1 = require("../interaction/utils");
const utils_2 = require("./utils");
/**
 * Get bounds of element considering animation state.
 * If element has animations, get the final state bounds.
 */
function getBoundsWithAnimation(element) {
    var _a;
    const animations = element.getAnimations();
    // If no animations, use regular bboxOf.
    if (!animations || animations.length === 0) {
        return (0, utils_1.bboxOf)(element);
    }
    // Clone element and apply final animation state.
    const cloneElement = element.cloneNode(true);
    cloneElement.style.visibility = 'hidden';
    animations.forEach((animation) => {
        const keyframes = animation.effect.getKeyframes();
        if (keyframes && keyframes.length > 0) {
            cloneElement.attr(keyframes[keyframes.length - 1]);
        }
    });
    (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(cloneElement);
    const bounds = (0, utils_1.bboxOf)(cloneElement);
    cloneElement.destroy();
    return bounds;
}
/**
 * Reverse label stroke against label color.
 * More about contract, see https://webaim.org/resources/contrastchecker/
 */
const OverflowStroke = (options) => {
    const { palette = ['#000', '#fff'], threshold = 2 } = options;
    return (labels) => {
        labels.forEach((l) => {
            var _a, _b;
            const dependentElement = l.attr('dependentElement');
            const labelFill = (_b = (_a = l.attributes.fill) !== null && _a !== void 0 ? _a : l.parsedStyle.fill) !== null && _b !== void 0 ? _b : '#fff';
            const textBounds = (0, bounds_1.parseAABB)(getBoundsWithAnimation(l));
            const elementBounds = (0, bounds_1.parseAABB)(getBoundsWithAnimation(dependentElement));
            if ((0, bounds_1.isOverflow)(textBounds, elementBounds, threshold)) {
                // Add stroke to make overflowing text more visible.
                // Use the opposite color from palette for stroke.
                const strokeColor = (0, utils_2.mostContrast)((0, color_1.parseToRGB)(labelFill), palette);
                l.attr('stroke', strokeColor);
            }
            else {
                // Undefined can't set to attrs, have to remove.
                l.removeAttribute('stroke');
            }
        });
        return labels;
    };
};
exports.OverflowStroke = OverflowStroke;
//# sourceMappingURL=overflowStroke.js.map