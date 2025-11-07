"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return bisector;
    }
});
var _ascending = /*#__PURE__*/ _interop_require_default(require("./ascending.js"));
var _descending = /*#__PURE__*/ _interop_require_default(require("./descending.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function bisector(f) {
    var compare1, compare2, delta;
    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
        compare1 = _ascending.default;
        compare2 = function(d, x) {
            return (0, _ascending.default)(f(d), x);
        };
        delta = function(d, x) {
            return f(d) - x;
        };
    } else {
        compare1 = f === _ascending.default || f === _descending.default ? f : zero;
        compare2 = f;
        delta = f;
    }
    function left(a, x) {
        var lo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, hi = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : a.length;
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                var mid = lo + hi >>> 1;
                if (compare2(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function right(a, x) {
        var lo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, hi = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : a.length;
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                var mid = lo + hi >>> 1;
                if (compare2(a[mid], x) <= 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function center(a, x) {
        var lo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, hi = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : a.length;
        var i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left: left,
        center: center,
        right: right
    };
}
function zero() {
    return 0;
}
