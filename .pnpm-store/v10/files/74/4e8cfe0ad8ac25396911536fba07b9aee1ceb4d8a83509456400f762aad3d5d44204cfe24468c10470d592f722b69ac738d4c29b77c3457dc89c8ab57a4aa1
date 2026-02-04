import { midPoint } from './mid-point';
import { segmentCubicFactory } from './segment-cubic-factory';
var MAX_RECURSION_DEPTH = 50;
function splitCubic(pts, t) {
    if (t === void 0) { t = 0.5; }
    var p0 = pts.slice(0, 2);
    var p1 = pts.slice(2, 4);
    var p2 = pts.slice(4, 6);
    var p3 = pts.slice(6, 8);
    var p4 = midPoint(p0, p1, t);
    var p5 = midPoint(p1, p2, t);
    var p6 = midPoint(p2, p3, t);
    var p7 = midPoint(p4, p5, t);
    var p8 = midPoint(p5, p6, t);
    var p9 = midPoint(p7, p8, t);
    return [
        // @ts-ignore
        ['C'].concat(p4, p7, p9),
        // @ts-ignore
        ['C'].concat(p8, p6, p3),
    ];
}
function getCurveArray(segments) {
    return segments.map(function (segment, i, pathArray) {
        // @ts-ignore
        var segmentData = i && pathArray[i - 1].slice(-2).concat(segment.slice(1));
        // @ts-ignore
        var curveLength = i
            ? segmentCubicFactory(segmentData[0], segmentData[1], segmentData[2], segmentData[3], segmentData[4], segmentData[5], segmentData[6], segmentData[7], segmentData[8], { bbox: false }).length
            : 0;
        var subsegs;
        if (i) {
            // must be [segment,segment]
            subsegs = curveLength ? splitCubic(segmentData) : [segment, segment];
        }
        else {
            subsegs = [segment];
        }
        return {
            s: segment,
            ss: subsegs,
            l: curveLength,
        };
    });
}
export function equalizeSegments(path1, path2, TL, depth) {
    if (depth === void 0) { depth = 0; }
    if (depth > MAX_RECURSION_DEPTH) {
        console.warn('Maximum recursion depth reached in equalizeSegments');
        return [path1, path2];
    }
    var c1 = getCurveArray(path1);
    var c2 = getCurveArray(path2);
    var L1 = c1.length;
    var L2 = c2.length;
    var l1 = c1.filter(function (x) { return x.l; }).length;
    var l2 = c2.filter(function (x) { return x.l; }).length;
    var m1 = c1.filter(function (x) { return x.l; }).reduce(function (a, _a) {
        var l = _a.l;
        return a + l;
    }, 0) / l1 || 0;
    var m2 = c2.filter(function (x) { return x.l; }).reduce(function (a, _a) {
        var l = _a.l;
        return a + l;
    }, 0) / l2 || 0;
    var tl = TL || Math.max(L1, L2);
    var mm = [m1, m2];
    var dif = [tl - L1, tl - L2];
    var canSplit = 0;
    var result = [c1, c2].map(function (x, i) {
        // @ts-ignore
        return x.l === tl
            ? x.map(function (y) { return y.s; })
            : x
                .map(function (y, j) {
                canSplit = j && dif[i] && y.l >= mm[i];
                dif[i] -= canSplit ? 1 : 0;
                return canSplit ? y.ss : [y.s];
            })
                .flat();
    });
    return result[0].length === result[1].length ? result : equalizeSegments(result[0], result[1], tl, depth + 1);
}
//# sourceMappingURL=equalize-segments.js.map