import { isTranspose } from '../utils/coordinate';
/**
 * Scale mark from desired shape to nothing in x direction.
 */
export const ScaleOutX = (options, context) => {
    // Small enough to hide or show very small part of mark,
    // but bigger enough to not cause bug.
    const ZERO = 0.0001;
    const { coordinate } = context;
    return (from, _, defaults) => {
        const [shape] = from;
        const { transform: prefix = '', fillOpacity = 1, strokeOpacity = 1, opacity = 1, } = shape.style;
        const [transformOrigin, transform] = isTranspose(coordinate)
            ? [`left bottom`, `scale(1, ${ZERO})`] // left-bottom corner
            : [`left top`, `scale(${ZERO}, 1)`]; // left-top corner
        // Using a short fadeIn transition to hide element with scale(0.001)
        // which is still visible.
        const keyframes = [
            {
                transform: `${prefix} scale(1, 1)`.trimStart(),
                transformOrigin,
            },
            {
                transform: `${prefix} ${transform}`.trimStart(),
                transformOrigin,
                fillOpacity,
                strokeOpacity,
                opacity,
                offset: 0.99,
            },
            {
                transform: `${prefix} ${transform}`.trimStart(),
                transformOrigin,
                fillOpacity: 0,
                strokeOpacity: 0,
                opacity: 0,
            },
        ];
        const animation = shape.animate(keyframes, Object.assign(Object.assign({}, defaults), options));
        return animation;
    };
};
//# sourceMappingURL=scaleOutX.js.map