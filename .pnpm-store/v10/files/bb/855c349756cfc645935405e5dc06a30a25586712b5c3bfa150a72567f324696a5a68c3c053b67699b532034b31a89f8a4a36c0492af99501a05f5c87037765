import { __read } from "tslib";
function search(array, value) {
    for (var i = 1; i < array.length; i += 1) {
        var st = array[i - 1];
        var end = array[i];
        if (value >= st && value <= end) {
            return [st, end];
        }
    }
    return [value, value];
}
export function getBlockColor(partition, color, orientation) {
    var colors = Array.from(color);
    var count = partition.length;
    return new Array(count).fill(0).reduce(function (r, v, idx) {
        var c = colors[idx % colors.length];
        return (r += " ".concat(partition[idx], ":").concat(c).concat(idx < count - 1 ? " ".concat(partition[idx + 1], ":").concat(c) : ''));
    }, "l(".concat(orientation === 'horizontal' ? '0' : '270', ")"));
}
export function getNextTickValue(ticks, value) {
    var _a = __read(search(ticks, value), 2), v1 = _a[0], v2 = _a[1];
    return { tick: value > (v1 + v2) / 2 ? v2 : v1, range: [v1, v2] };
}
//# sourceMappingURL=utils.js.map