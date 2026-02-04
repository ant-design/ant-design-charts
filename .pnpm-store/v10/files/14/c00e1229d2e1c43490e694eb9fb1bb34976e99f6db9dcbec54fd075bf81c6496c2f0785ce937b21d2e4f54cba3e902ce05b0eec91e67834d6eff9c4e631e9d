"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return disjoint;
    }
});
var _index = require("../../internmap/src/index.js");
function disjoint(values, other) {
    var iterator = other[Symbol.iterator](), set = new _index.InternSet();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var v = _step.value;
            if (set.has(v)) return false;
            var value = void 0, done = void 0;
            var ref;
            while(ref = iterator.next(), value = ref.value, done = ref.done, ref){
                if (done) break;
                if (Object.is(v, value)) return false;
                set.add(value);
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
