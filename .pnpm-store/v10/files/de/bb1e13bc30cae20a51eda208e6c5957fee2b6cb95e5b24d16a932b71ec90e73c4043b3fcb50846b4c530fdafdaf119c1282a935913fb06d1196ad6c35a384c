"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return reduce;
    }
});
function reduce(values, reducer, value) {
    if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
    var iterator = values[Symbol.iterator]();
    var done, next, index = -1;
    if (arguments.length < 3) {
        var ref;
        ref = iterator.next(), done = ref.done, value = ref.value, ref;
        if (done) return;
        ++index;
    }
    var ref1;
    while(ref1 = iterator.next(), done = ref1.done, next = ref1.value, ref1, !done){
        value = reducer(value, next, ++index, values);
    }
    return value;
}
