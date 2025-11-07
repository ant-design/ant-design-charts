"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const vector_1 = require("../../shape/vector/vector");
/**
 * Connect 2 points with a single line with arrow.
 * ----->
 */
const Link = (options, context) => {
    const { arrow = false } = options;
    return (...params) => {
        return (0, vector_1.Vector)(Object.assign(Object.assign({}, options), { arrow }), context)(...params);
    };
};
exports.Link = Link;
exports.Link.props = {
    defaultMarker: 'line',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=link.js.map