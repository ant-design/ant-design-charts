"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _array = /*#__PURE__*/ _interop_require_default(require("./array.js"));
var _constant = /*#__PURE__*/ _interop_require_default(require("./constant.js"));
var _none = /*#__PURE__*/ _interop_require_default(require("./offset/none.js"));
var _none1 = /*#__PURE__*/ _interop_require_default(require("./order/none.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function stackValue(d, key) {
    return d[key];
}
function stackSeries(key) {
    var series = [];
    series.key = key;
    return series;
}
function _default() {
    var keys = (0, _constant.default)([]), order = _none1.default, offset = _none.default, value = stackValue;
    function stack(data) {
        var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var d = _step.value;
                for(i = 0, ++j; i < n; ++i){
                    (sz[i][j] = [
                        0,
                        +value(d, sz[i].key, j, data)
                    ]).data = d;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        for(i = 0, oz = (0, _array.default)(order(sz)); i < n; ++i){
            sz[oz[i]].index = i;
        }
        offset(sz, oz);
        return sz;
    }
    stack.keys = function(_) {
        return arguments.length ? (keys = typeof _ === "function" ? _ : (0, _constant.default)(Array.from(_)), stack) : keys;
    };
    stack.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, _constant.default)(+_), stack) : value;
    };
    stack.order = function(_) {
        return arguments.length ? (order = _ == null ? _none1.default : typeof _ === "function" ? _ : (0, _constant.default)(Array.from(_)), stack) : order;
    };
    stack.offset = function(_) {
        return arguments.length ? (offset = _ == null ? _none.default : _, stack) : offset;
    };
    return stack;
}
