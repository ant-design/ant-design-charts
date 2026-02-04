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
var _math = require("./math.js");
function _default(project) {
    var dx = project(_math.halfPi, 0)[0] - project(-_math.halfPi, 0)[0];
    function projectSquare(lambda, phi) {
        var s = lambda > 0 ? -0.5 : 0.5, point = project(lambda + s * _math.pi, phi);
        point[0] -= s * dx;
        return point;
    }
    if (project.invert) projectSquare.invert = function(x, y) {
        var s = x > 0 ? -0.5 : 0.5, location = project.invert(x + s * dx, y), lambda = location[0] - s * _math.pi;
        if (lambda < -_math.pi) lambda += 2 * _math.pi;
        else if (lambda > _math.pi) lambda -= 2 * _math.pi;
        location[0] = lambda;
        return location;
    };
    return projectSquare;
}
