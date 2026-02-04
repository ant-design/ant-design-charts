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
    sinIn: function() {
        return sinIn;
    },
    sinInOut: function() {
        return sinInOut;
    },
    sinOut: function() {
        return sinOut;
    }
});
var pi = Math.PI, halfPi = pi / 2;
function sinIn(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}
function sinOut(t) {
    return Math.sin(t * halfPi);
}
function sinInOut(t) {
    return (1 - Math.cos(pi * t)) / 2;
}
