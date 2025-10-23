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
    expIn: function() {
        return expIn;
    },
    expInOut: function() {
        return expInOut;
    },
    expOut: function() {
        return expOut;
    }
});
var _math = require("./math.js");
function expIn(t) {
    return (0, _math.tpmt)(1 - +t);
}
function expOut(t) {
    return 1 - (0, _math.tpmt)(t);
}
function expInOut(t) {
    return ((t *= 2) <= 1 ? (0, _math.tpmt)(1 - t) : 2 - (0, _math.tpmt)(t - 1)) / 2;
}
