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
        return pairs;
    },
    pair: function() {
        return pair;
    }
});
function pairs(values) {
    var pairof = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pair;
    var pairs = [];
    var previous;
    var first = false;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            if (first) pairs.push(pairof(previous, value));
            previous = value;
            first = true;
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
    return pairs;
}
function pair(a, b) {
    return [
        a,
        b
    ];
}
