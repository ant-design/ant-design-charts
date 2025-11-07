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
        return _default;
    },
    shuffle: function() {
        return shuffle;
    }
});
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _default(x) {
    return (typeof x === "undefined" ? "undefined" : _type_of(x)) === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
}
function shuffle(array, random) {
    var m = array.length, t, i;
    while(m){
        i = random() * m-- | 0;
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
