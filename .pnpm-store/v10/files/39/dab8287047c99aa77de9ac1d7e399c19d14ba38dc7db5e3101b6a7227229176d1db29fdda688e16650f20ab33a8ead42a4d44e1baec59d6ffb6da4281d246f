"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    sum: function() {
        return sum;
    }
});
var _none = /*#__PURE__*/ _interop_require_default(require("./none.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(series) {
    var sums = series.map(sum);
    return (0, _none.default)(series).sort(function(a, b) {
        return sums[a] - sums[b];
    });
}
function sum(series) {
    var s = 0, i = -1, n = series.length, v;
    while(++i < n)if (v = +series[i][1]) s += v;
    return s;
}
