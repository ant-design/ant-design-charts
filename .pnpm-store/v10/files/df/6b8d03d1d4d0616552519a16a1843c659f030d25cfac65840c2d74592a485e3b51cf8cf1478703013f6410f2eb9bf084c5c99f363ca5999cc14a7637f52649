"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return extent;
    }
});
function extent(values, valueof) {
    var min;
    var max;
    if (valueof === undefined) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var value = _step.value;
                if (value != null) {
                    if (min === undefined) {
                        if (value >= value) min = max = value;
                    } else {
                        if (min > value) min = value;
                        if (max < value) max = value;
                    }
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
    } else {
        var index = -1;
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var value1 = _step1.value;
                if ((value1 = valueof(value1, ++index, values)) != null) {
                    if (min === undefined) {
                        if (value1 >= value1) min = max = value1;
                    } else {
                        if (min > value1) min = value1;
                        if (max < value1) max = value1;
                    }
                }
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    }
    return [
        min,
        max
    ];
}
