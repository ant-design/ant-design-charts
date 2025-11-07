"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return superset;
    }
});
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function superset(values, other) {
    var iterator = values[Symbol.iterator](), set = new Set();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = other[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var o = _step.value;
            var io = intern(o);
            if (set.has(io)) continue;
            var value = void 0, done = void 0;
            var ref;
            while(ref = iterator.next(), value = ref.value, done = ref.done, ref){
                if (done) return false;
                var ivalue = intern(value);
                set.add(ivalue);
                if (Object.is(io, ivalue)) break;
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
    return true;
}
function intern(value) {
    return value !== null && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" ? value.valueOf() : value;
}
