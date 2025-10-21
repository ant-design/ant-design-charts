// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
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
var a = 1664525;
var c = 1013904223;
var m = 4294967296; // 2^32
function _default() {
    var s = 1;
    return function() {
        return (s = (a * s + c) % m) / m;
    };
}
