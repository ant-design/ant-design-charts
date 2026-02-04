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
    bromleyRaw: function() {
        return bromleyRaw;
    },
    default: function() {
        return _default;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var _mollweide = require("./mollweide.js");
var bromleyRaw = (0, _mollweide.mollweideBromleyRaw)(1, 4 / _math.pi, _math.pi);
function _default() {
    return (0, _index.geoProjection)(bromleyRaw).scale(152.63);
}
