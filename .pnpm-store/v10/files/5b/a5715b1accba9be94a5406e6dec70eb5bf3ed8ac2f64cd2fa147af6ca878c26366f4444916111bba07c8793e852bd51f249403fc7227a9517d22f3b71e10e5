import { normalizePath } from '../process/normalize-path';
import { segmentLineFactory } from './segment-line-factory';
import { segmentArcFactory } from './segment-arc-factory';
import { segmentCubicFactory } from './segment-cubic-factory';
import { segmentQuadFactory } from './segment-quad-factory';
/**
 * Returns a {x,y} point at a given length
 * of a shape, the shape total length and
 * the shape minimum and maximum {x,y} coordinates.
 */
export function pathLengthFactory(pathInput, distance, options) {
    var _a, _b, _c, _d, _e, _f;
    var path = normalizePath(pathInput);
    var distanceIsNumber = typeof distance === 'number';
    var isM;
    var data = [];
    var pathCommand;
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var seg;
    var MIN = [];
    var MAX = [];
    var length = 0;
    var min = { x: 0, y: 0 };
    var max = min;
    var point = min;
    var POINT = min;
    var LENGTH = 0;
    for (var i = 0, ll = path.length; i < ll; i += 1) {
        seg = path[i];
        pathCommand = seg[0];
        isM = pathCommand === 'M';
        data = !isM ? [x, y].concat(seg.slice(1)) : data;
        // this segment is always ZERO
        /* istanbul ignore else */
        if (isM) {
            // remember mx, my for Z
            mx = seg[1], my = seg[2];
            min = { x: mx, y: my };
            max = min;
            length = 0;
            if (distanceIsNumber && distance < 0.001) {
                POINT = min;
            }
        }
        else if (pathCommand === 'L') {
            (_a = segmentLineFactory(data[0], data[1], data[2], data[3], (distance || 0) - LENGTH), length = _a.length, min = _a.min, max = _a.max, point = _a.point);
        }
        else if (pathCommand === 'A') {
            (_b = segmentArcFactory(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], (distance || 0) - LENGTH, options || {}), length = _b.length, min = _b.min, max = _b.max, point = _b.point);
        }
        else if (pathCommand === 'C') {
            (_c = segmentCubicFactory(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], (distance || 0) - LENGTH, options || {}), length = _c.length, min = _c.min, max = _c.max, point = _c.point);
        }
        else if (pathCommand === 'Q') {
            (_d = segmentQuadFactory(data[0], data[1], data[2], data[3], data[4], data[5], (distance || 0) - LENGTH, options || {}), length = _d.length, min = _d.min, max = _d.max, point = _d.point);
        }
        else if (pathCommand === 'Z') {
            data = [x, y, mx, my];
            (_e = segmentLineFactory(data[0], data[1], data[2], data[3], (distance || 0) - LENGTH), length = _e.length, min = _e.min, max = _e.max, point = _e.point);
        }
        if (distanceIsNumber && LENGTH < distance && LENGTH + length >= distance) {
            POINT = point;
        }
        MAX.push(max);
        MIN.push(min);
        LENGTH += length;
        _f = pathCommand !== 'Z' ? seg.slice(-2) : [mx, my], x = _f[0], y = _f[1];
    }
    // native `getPointAtLength` behavior when the given distance
    // is higher than total length
    if (distanceIsNumber && distance >= LENGTH) {
        POINT = { x: x, y: y };
    }
    return {
        length: LENGTH,
        point: POINT,
        min: {
            x: Math.min.apply(null, MIN.map(function (n) { return n.x; })),
            y: Math.min.apply(null, MIN.map(function (n) { return n.y; })),
        },
        max: {
            x: Math.max.apply(null, MAX.map(function (n) { return n.x; })),
            y: Math.max.apply(null, MAX.map(function (n) { return n.y; })),
        },
    };
}
//# sourceMappingURL=path-length-factory.js.map