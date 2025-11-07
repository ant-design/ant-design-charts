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
    circleIn: function() {
        return circleIn;
    },
    circleInOut: function() {
        return circleInOut;
    },
    circleOut: function() {
        return circleOut;
    }
});
function circleIn(t) {
    return 1 - Math.sqrt(1 - t * t);
}
function circleOut(t) {
    return Math.sqrt(1 - --t * t);
}
function circleInOut(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
