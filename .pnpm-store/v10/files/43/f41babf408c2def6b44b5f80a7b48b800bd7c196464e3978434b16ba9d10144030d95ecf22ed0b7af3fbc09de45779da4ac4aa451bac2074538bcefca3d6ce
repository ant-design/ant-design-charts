/**
 * @example
 * lt -> ['l', 't']
 * left-top -> ['l', 't']
 * inner -> i
 */
export function parsePosition(position) {
    if (!/\S+-\S+/g.test(position))
        return position.length > 2 ? [position[0]] : position.split('');
    return position.split('-').map(function (str) {
        return str[0];
    });
}
//# sourceMappingURL=pase-position.js.map