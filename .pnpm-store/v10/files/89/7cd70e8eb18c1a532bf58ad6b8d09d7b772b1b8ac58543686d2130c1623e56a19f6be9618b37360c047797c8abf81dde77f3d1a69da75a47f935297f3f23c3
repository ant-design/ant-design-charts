/**
 * Normalizes a single segment of a `PathArray` object.
 * eg. H/V -> L, T -> Q
 */
export function normalizeSegment(segment, params) {
    var pathCommand = segment[0];
    var px1 = params.x1, py1 = params.y1, px2 = params.x2, py2 = params.y2;
    var values = segment.slice(1).map(Number);
    var result = segment;
    if (!'TQ'.includes(pathCommand)) {
        // optional but good to be cautious
        params.qx = null;
        params.qy = null;
    }
    if (pathCommand === 'H') {
        result = ['L', segment[1], py1];
    }
    else if (pathCommand === 'V') {
        result = ['L', px1, segment[1]];
    }
    else if (pathCommand === 'S') {
        var x1 = px1 * 2 - px2;
        var y1 = py1 * 2 - py2;
        params.x1 = x1;
        params.y1 = y1;
        result = ['C', x1, y1].concat(values);
    }
    else if (pathCommand === 'T') {
        var qx = px1 * 2 - params.qx;
        var qy = py1 * 2 - params.qy;
        params.qx = qx;
        params.qy = qy;
        result = ['Q', qx, qy].concat(values);
    }
    else if (pathCommand === 'Q') {
        var nqx = values[0], nqy = values[1];
        params.qx = nqx;
        params.qy = nqy;
    }
    return result;
}
//# sourceMappingURL=normalize-segment.js.map