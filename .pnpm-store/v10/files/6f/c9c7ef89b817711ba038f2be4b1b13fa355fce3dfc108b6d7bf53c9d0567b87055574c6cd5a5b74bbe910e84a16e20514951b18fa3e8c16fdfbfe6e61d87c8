"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeOut = void 0;
/**
 * Transform mark from solid to transparent.
 */
const FadeOut = (options) => {
    return (from, _, defaults) => {
        const [shape] = from;
        const { fillOpacity = 1, strokeOpacity = 1, opacity = 1 } = shape.style;
        const keyframes = [
            {
                fillOpacity,
                strokeOpacity,
                opacity,
            },
            { fillOpacity: 0, strokeOpacity: 0, opacity: 0 },
        ];
        return shape.animate(keyframes, Object.assign(Object.assign({}, defaults), options));
    };
};
exports.FadeOut = FadeOut;
exports.FadeOut.props = {};
//# sourceMappingURL=fadeOut.js.map