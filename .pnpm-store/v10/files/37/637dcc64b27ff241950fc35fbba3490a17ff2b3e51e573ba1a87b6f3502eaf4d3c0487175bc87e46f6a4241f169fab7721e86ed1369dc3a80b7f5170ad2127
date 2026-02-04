"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeIn = void 0;
/**
 * Transform mark from transparent to solid.
 */
const FadeIn = (options) => {
    return (from, _, defaults) => {
        const [shape] = from;
        const { fillOpacity = 1, strokeOpacity = 1, opacity = 1 } = shape.style;
        const keyframes = [
            { fillOpacity: 0, strokeOpacity: 0, opacity: 0 },
            {
                fillOpacity,
                strokeOpacity,
                opacity,
            },
        ];
        return shape.animate(keyframes, Object.assign(Object.assign({}, defaults), options));
    };
};
exports.FadeIn = FadeIn;
exports.FadeIn.props = {};
//# sourceMappingURL=fadeIn.js.map