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
        return quantile;
    },
    quantileIndex: function() {
        return quantileIndex;
    },
    quantileSorted: function() {
        return quantileSorted;
    }
});
var _max = /*#__PURE__*/ _interop_require_default(require("./max.js"));
var _maxIndex = /*#__PURE__*/ _interop_require_default(require("./maxIndex.js"));
var _min = /*#__PURE__*/ _interop_require_default(require("./min.js"));
var _minIndex = /*#__PURE__*/ _interop_require_default(require("./minIndex.js"));
var _quickselect = /*#__PURE__*/ _interop_require_default(require("./quickselect.js"));
var _number = /*#__PURE__*/ _interop_require_wildcard(require("./number.js"));
var _sort = require("./sort.js");
var _greatest = /*#__PURE__*/ _interop_require_default(require("./greatest.js"));
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
function quantile(values, p, valueof) {
    values = Float64Array.from((0, _number.numbers)(values, valueof));
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return (0, _min.default)(values);
    if (p >= 1) return (0, _max.default)(values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = (0, _max.default)((0, _quickselect.default)(values, i0).subarray(0, i0 + 1)), value1 = (0, _min.default)(values.subarray(i0 + 1));
    return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p) {
    var valueof = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _number.default;
    if (!(n = values.length) || isNaN(p = +p)) return;
    if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
}
function quantileIndex(values, p) {
    var valueof = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _number.default;
    if (isNaN(p = +p)) return;
    numbers = Float64Array.from(values, function(_, i) {
        return (0, _number.default)(valueof(values[i], i, values));
    });
    if (p <= 0) return (0, _minIndex.default)(numbers);
    if (p >= 1) return (0, _maxIndex.default)(numbers);
    var numbers, index = Uint32Array.from(values, function(_, i) {
        return i;
    }), j = numbers.length - 1, i = Math.floor(j * p);
    (0, _quickselect.default)(index, i, 0, j, function(i, j) {
        return (0, _sort.ascendingDefined)(numbers[i], numbers[j]);
    });
    i = (0, _greatest.default)(index.subarray(0, i + 1), function(i) {
        return numbers[i];
    });
    return i >= 0 ? i : -1;
}
