"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowInX = void 0;
const g_1 = require("@antv/g");
const scaleInX_1 = require("./scaleInX");
/**
 * Scale mark from nothing to desired shape in x direction.
 */
const GrowInX = (options, context) => {
    return (from, to, defaults) => {
        const [shape] = from;
        const { min: [x, y], halfExtents, } = shape.getLocalBounds();
        const width = halfExtents[0] * 2;
        const height = halfExtents[1] * 2;
        const clipPath = new g_1.Path({
            style: {
                d: `M${x},${y}L${x + width},${y}L${x + width},${y + height}L${x},${y + height}Z`,
            },
        });
        shape.appendChild(clipPath);
        shape.style.clipPath = clipPath;
        const animation = (0, scaleInX_1.ScaleInX)(options, context)([clipPath], to, defaults);
        return animation;
    };
};
exports.GrowInX = GrowInX;
exports.GrowInX.props = {};
//# sourceMappingURL=growInX.js.map