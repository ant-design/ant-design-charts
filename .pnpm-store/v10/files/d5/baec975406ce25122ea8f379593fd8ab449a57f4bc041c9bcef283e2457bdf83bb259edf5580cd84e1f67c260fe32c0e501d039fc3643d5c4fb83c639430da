import { distanceSquareRoot } from './distance-square-root';
function getRotations(a) {
    var segCount = a.length;
    var pointCount = segCount - 1;
    return a.map(function (f, idx) {
        return a.map(function (p, i) {
            var oldSegIdx = idx + i;
            var seg;
            if (i === 0 || (a[oldSegIdx] && a[oldSegIdx][0] === 'M')) {
                seg = a[oldSegIdx];
                return ['M'].concat(seg.slice(-2));
            }
            if (oldSegIdx >= segCount)
                oldSegIdx -= pointCount;
            return a[oldSegIdx];
        });
    });
}
export function getRotatedCurve(a, b) {
    var segCount = a.length - 1;
    var lineLengths = [];
    var computedIndex = 0;
    var sumLensSqrd = 0;
    var rotations = getRotations(a);
    rotations.forEach(function (r, i) {
        a.slice(1).forEach(function (s, j) {
            // @ts-ignore
            sumLensSqrd += distanceSquareRoot(a[(i + j) % segCount].slice(-2), b[j % segCount].slice(-2));
        });
        lineLengths[i] = sumLensSqrd;
        sumLensSqrd = 0;
    });
    computedIndex = lineLengths.indexOf(Math.min.apply(null, lineLengths));
    return rotations[computedIndex];
}
//# sourceMappingURL=get-rotated-curve.js.map