"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGradient = void 0;
/**
 * Parse heatmap gradient.
 */
function parseGradient(gradient) {
    if (typeof gradient === 'string') {
        return gradient.split(' ').map((stop) => {
            const [r, c] = stop.split(':');
            return [+r, c];
        });
    }
    return gradient;
}
exports.parseGradient = parseGradient;
//# sourceMappingURL=gradient.js.map