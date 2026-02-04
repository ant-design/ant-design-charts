import { isAbsoluteArray } from '../util/is-absolute-array';
import { parsePathString } from '../parser/parse-path-string';
/**
 * Converts a `PathArray` to an `AbsoluteArray`.
 */
export function path2Absolute(pathInput) {
    if (isAbsoluteArray(pathInput)) {
        return [].concat(pathInput);
    }
    var path = parsePathString(pathInput);
    // if (!path || !path.length) {
    //   return [['M', 0, 0]];
    // }
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    // @ts-ignore
    return path.map(function (segment) {
        var values = segment.slice(1).map(Number);
        var pathCommand = segment[0];
        var absCommand = pathCommand.toUpperCase();
        if (pathCommand === 'M') {
            x = values[0], y = values[1];
            mx = x;
            my = y;
            return ['M', x, y];
        }
        var absoluteSegment;
        if (pathCommand !== absCommand) {
            switch (absCommand) {
                case 'A':
                    absoluteSegment = [
                        absCommand,
                        values[0],
                        values[1],
                        values[2],
                        values[3],
                        values[4],
                        values[5] + x,
                        values[6] + y,
                    ];
                    break;
                case 'V':
                    absoluteSegment = [absCommand, values[0] + y];
                    break;
                case 'H':
                    absoluteSegment = [absCommand, values[0] + x];
                    break;
                default: {
                    // use brakets for `eslint: no-case-declaration`
                    // https://stackoverflow.com/a/50753272/803358
                    var absValues = values.map(function (n, j) { return n + (j % 2 ? y : x); });
                    // for n, l, c, s, q, t
                    // @ts-ignore
                    absoluteSegment = [absCommand].concat(absValues);
                }
            }
        }
        else {
            // @ts-ignore
            absoluteSegment = [absCommand].concat(values);
        }
        var segLength = absoluteSegment.length;
        switch (absCommand) {
            case 'Z':
                x = mx;
                y = my;
                break;
            case 'H':
                x = absoluteSegment[1];
                break;
            case 'V':
                y = absoluteSegment[1];
                break;
            default:
                x = absoluteSegment[segLength - 2];
                y = absoluteSegment[segLength - 1];
                if (absCommand === 'M') {
                    mx = x;
                    my = y;
                }
        }
        return absoluteSegment;
    });
}
//# sourceMappingURL=path-2-absolute.js.map