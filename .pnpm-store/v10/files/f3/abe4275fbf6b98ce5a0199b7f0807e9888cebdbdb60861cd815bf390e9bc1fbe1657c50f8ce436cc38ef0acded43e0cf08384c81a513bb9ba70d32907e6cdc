import { Vector } from '../../shape/vector/vector';
/**
 * Connect 2 points with a single line with arrow.
 * ----->
 */
export const Link = (options, context) => {
    const { arrow = false } = options;
    return (...params) => {
        return Vector(Object.assign(Object.assign({}, options), { arrow }), context)(...params);
    };
};
Link.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=link.js.map