"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return rank;
    }
});
var _ascending = /*#__PURE__*/ _interop_require_default(require("./ascending.js"));
var _sort = require("./sort.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rank(values) {
    var valueof = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _ascending.default;
    if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
    var V = Array.from(values);
    var R = new Float64Array(V.length);
    if (valueof.length !== 2) V = V.map(valueof), valueof = _ascending.default;
    var compareIndex = function(i, j) {
        return valueof(V[i], V[j]);
    };
    var k, r;
    values = Uint32Array.from(V, function(_, i) {
        return i;
    });
    // Risky chaining due to Safari 14 https://github.com/d3/d3-array/issues/123
    values.sort(valueof === _ascending.default ? function(i, j) {
        return (0, _sort.ascendingDefined)(V[i], V[j]);
    } : (0, _sort.compareDefined)(compareIndex));
    values.forEach(function(j, i) {
        var c = compareIndex(j, k === undefined ? j : k);
        if (c >= 0) {
            if (k === undefined || c > 0) k = j, r = i;
            R[j] = r;
        } else {
            R[j] = NaN;
        }
    });
    return R;
}
