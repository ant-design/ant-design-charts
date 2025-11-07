"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return greatestIndex;
    }
});
var _ascending = /*#__PURE__*/ _interop_require_default(require("./ascending.js"));
var _maxIndex = /*#__PURE__*/ _interop_require_default(require("./maxIndex.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function greatestIndex(values) {
    var compare = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _ascending.default;
    if (compare.length === 1) return (0, _maxIndex.default)(values, compare);
    var maxValue;
    var max = -1;
    var index = -1;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            ++index;
            if (max < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
                maxValue = value;
                max = index;
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
    return max;
}
