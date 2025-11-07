// Returns the angle of a line in degrees.
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
    angle: function() {
        return angle;
    },
    midpoint: function() {
        return midpoint;
    }
});
function angle(line) {
    return Math.atan2(line[1][1] - line[0][1], line[1][0] - line[0][0]) * 180 / Math.PI;
}
function midpoint(line) {
    return [
        (line[0][0] + line[1][0]) / 2,
        (line[0][1] + line[1][1]) / 2
    ];
}
