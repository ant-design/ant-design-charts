/**
 * Parse heatmap gradient.
 */
export function parseGradient(gradient) {
    if (typeof gradient === 'string') {
        return gradient.split(' ').map((stop) => {
            const [r, c] = stop.split(':');
            return [+r, c];
        });
    }
    return gradient;
}
//# sourceMappingURL=gradient.js.map