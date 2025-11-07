// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
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
    Adder: function() {
        return Adder;
    },
    fcumsum: function() {
        return fcumsum;
    },
    fsum: function() {
        return fsum;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Adder = /*#__PURE__*/ function() {
    "use strict";
    function Adder() {
        _class_call_check(this, Adder);
        this._partials = new Float64Array(32);
        this._n = 0;
    }
    _create_class(Adder, [
        {
            key: "add",
            value: function add(x) {
                var p = this._partials;
                var i = 0;
                for(var j = 0; j < this._n && j < 32; j++){
                    var y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
                    if (lo) p[i++] = lo;
                    x = hi;
                }
                p[i] = x;
                this._n = i + 1;
                return this;
            }
        },
        {
            key: "valueOf",
            value: function valueOf() {
                var p = this._partials;
                var n = this._n, x, y, lo, hi = 0;
                if (n > 0) {
                    hi = p[--n];
                    while(n > 0){
                        x = hi;
                        y = p[--n];
                        hi = x + y;
                        lo = y - (hi - x);
                        if (lo) break;
                    }
                    if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
                        y = lo * 2;
                        x = hi + y;
                        if (y == x - hi) hi = x;
                    }
                }
                return hi;
            }
        }
    ]);
    return Adder;
}();
function fsum(values, valueof) {
    var adder = new Adder();
    if (valueof === undefined) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var value = _step.value;
                if (value = +value) {
                    adder.add(value);
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
                if (value1 = +valueof(value1, ++index, values)) {
                    adder.add(value1);
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
    return +adder;
}
function fcumsum(values, valueof) {
    var adder = new Adder();
    var index = -1;
    return Float64Array.from(values, valueof === undefined ? function(v) {
        return adder.add(+v || 0);
    } : function(v) {
        return adder.add(+valueof(v, ++index, values) || 0);
    });
}
