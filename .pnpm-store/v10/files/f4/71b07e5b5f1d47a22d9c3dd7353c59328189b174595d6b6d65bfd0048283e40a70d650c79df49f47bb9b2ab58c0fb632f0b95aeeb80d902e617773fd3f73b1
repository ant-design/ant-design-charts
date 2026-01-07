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
    quadIn: function() {
        return quadIn;
    },
    quadInOut: function() {
        return quadInOut;
    },
    quadOut: function() {
        return quadOut;
    }
});
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return t * (2 - t);
}
function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
