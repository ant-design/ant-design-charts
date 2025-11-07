import { arcToCubic } from './arc-2-cubic';
import { quadToCubic } from './quad-2-cubic';
import { lineToCubic } from './line-2-cubic';
export function segmentToCubic(segment, params) {
    var pathCommand = segment[0];
    var values = segment.slice(1).map(Number);
    var x = values[0], y = values[1];
    var args;
    var px1 = params.x1, py1 = params.y1, px = params.x, py = params.y;
    if (!'TQ'.includes(pathCommand)) {
        params.qx = null;
        params.qy = null;
    }
    switch (pathCommand) {
        case 'M':
            params.x = x;
            params.y = y;
            return segment;
        case 'A':
            args = [px1, py1].concat(values);
            // @ts-ignore
            return ['C'].concat(arcToCubic(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]));
        case 'Q':
            params.qx = x;
            params.qy = y;
            args = [px1, py1].concat(values);
            // @ts-ignore
            return ['C'].concat(quadToCubic(args[0], args[1], args[2], args[3], args[4], args[5]));
        case 'L':
            // @ts-ignore
            return ['C'].concat(lineToCubic(px1, py1, x, y));
        case 'Z':
            // prevent NaN from divide 0
            if (px1 === px && py1 === py) {
                return ['C', px1, py1, px, py, px, py];
            }
            // @ts-ignore
            return ['C'].concat(lineToCubic(px1, py1, px, py));
        default:
    }
    return segment;
}
//# sourceMappingURL=segment-2-cubic.js.map