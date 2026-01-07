// FIXME: Mutable param should be forbidden in static lang.
function _mix(dist, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
            dist[key] = obj[key];
        }
    }
}
export default function mix(dist, src1, src2, src3) {
    if (src1)
        _mix(dist, src1);
    if (src2)
        _mix(dist, src2);
    if (src3)
        _mix(dist, src3);
    return dist;
}
//# sourceMappingURL=mix.js.map