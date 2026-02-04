"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGradient = parseGradient;
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
//# sourceMappingURL=gradient.js.map