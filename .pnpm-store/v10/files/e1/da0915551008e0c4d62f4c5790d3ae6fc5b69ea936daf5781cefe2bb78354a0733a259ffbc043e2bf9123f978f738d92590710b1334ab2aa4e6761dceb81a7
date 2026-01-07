/**
 * Rounds the values of a `PathArray` instance to
 * a specified amount of decimals and returns it.
 */
export function roundPath(path, round) {
    if (round === 'off')
        return [].concat(path);
    // to round values to the power
    // the `round` value must be integer
    var pow = typeof round === 'number' && round >= 1 ? Math.pow(10, round) : 1;
    return path.map(function (pi) {
        var values = pi
            .slice(1)
            .map(Number)
            .map(function (n) { return (round ? Math.round(n * pow) / pow : Math.round(n)); });
        // @ts-ignore
        return [pi[0]].concat(values);
    });
}
//# sourceMappingURL=round-path.js.map