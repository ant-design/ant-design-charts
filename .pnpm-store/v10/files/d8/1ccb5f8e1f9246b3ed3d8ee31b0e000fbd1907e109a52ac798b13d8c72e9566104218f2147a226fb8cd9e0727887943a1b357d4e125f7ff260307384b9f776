"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return bin;
    }
});
var _array = require("./array.js");
var _bisect = /*#__PURE__*/ _interop_require_default(require("./bisect.js"));
var _constant = /*#__PURE__*/ _interop_require_default(require("./constant.js"));
var _extent = /*#__PURE__*/ _interop_require_default(require("./extent.js"));
var _identity = /*#__PURE__*/ _interop_require_default(require("./identity.js"));
var _nice = /*#__PURE__*/ _interop_require_default(require("./nice.js"));
var _ticks = /*#__PURE__*/ _interop_require_wildcard(require("./ticks.js"));
var _sturges = /*#__PURE__*/ _interop_require_default(require("./threshold/sturges.js"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function bin() {
    var value = _identity.default, domain = _extent.default, threshold = _sturges.default;
    function histogram(data) {
        if (!Array.isArray(data)) data = Array.from(data);
        var i, n = data.length, x, step, values = new Array(n);
        for(i = 0; i < n; ++i){
            values[i] = value(data[i], i, data);
        }
        var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
        // Convert number of thresholds into uniform thresholds, and nice the
        // default domain accordingly.
        if (!Array.isArray(tz)) {
            var max = x1, tn = +tz;
            var ref;
            if (domain === _extent.default) ref = _sliced_to_array((0, _nice.default)(x0, x1, tn), 2), x0 = ref[0], x1 = ref[1], ref;
            tz = (0, _ticks.default)(x0, x1, tn);
            // If the domain is aligned with the first tick (which it will by
            // default), then we can use quantization rather than bisection to bin
            // values, which is substantially faster.
            if (tz[0] <= x0) step = (0, _ticks.tickIncrement)(x0, x1, tn);
            // If the last threshold is coincident with the domain’s upper bound, the
            // last bin will be zero-width. If the default domain is used, and this
            // last threshold is coincident with the maximum input value, we can
            // extend the niced upper bound by one tick to ensure uniform bin widths;
            // otherwise, we simply remove the last threshold. Note that we don’t
            // coerce values or the domain to numbers, and thus must be careful to
            // compare order (>=) rather than strict equality (===)!
            if (tz[tz.length - 1] >= x1) {
                if (max >= x1 && domain === _extent.default) {
                    var step1 = (0, _ticks.tickIncrement)(x0, x1, tn);
                    if (isFinite(step1)) {
                        if (step1 > 0) {
                            x1 = (Math.floor(x1 / step1) + 1) * step1;
                        } else if (step1 < 0) {
                            x1 = (Math.ceil(x1 * -step1) + 1) / -step1;
                        }
                    }
                } else {
                    tz.pop();
                }
            }
        }
        // Remove any thresholds outside the domain.
        // Be careful not to mutate an array owned by the user!
        var m = tz.length, a = 0, b = m;
        while(tz[a] <= x0)++a;
        while(tz[b - 1] > x1)--b;
        if (a || b < m) tz = tz.slice(a, b), m = b - a;
        var bins = new Array(m + 1), bin;
        // Initialize bins.
        for(i = 0; i <= m; ++i){
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
        }
        // Assign data to bins by value, ignoring any outside the domain.
        if (isFinite(step)) {
            if (step > 0) {
                for(i = 0; i < n; ++i){
                    if ((x = values[i]) != null && x0 <= x && x <= x1) {
                        bins[Math.min(m, Math.floor((x - x0) / step))].push(data[i]);
                    }
                }
            } else if (step < 0) {
                for(i = 0; i < n; ++i){
                    if ((x = values[i]) != null && x0 <= x && x <= x1) {
                        var j = Math.floor((x0 - x) * step);
                        bins[Math.min(m, j + (tz[j] <= x))].push(data[i]); // handle off-by-one due to rounding
                    }
                }
            }
        } else {
            for(i = 0; i < n; ++i){
                if ((x = values[i]) != null && x0 <= x && x <= x1) {
                    bins[(0, _bisect.default)(tz, x, 0, m)].push(data[i]);
                }
            }
        }
        return bins;
    }
    histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, _constant.default)(_), histogram) : value;
    };
    histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : (0, _constant.default)([
            _[0],
            _[1]
        ]), histogram) : domain;
    };
    histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : (0, _constant.default)(Array.isArray(_) ? _array.slice.call(_) : _), histogram) : threshold;
    };
    return histogram;
}
