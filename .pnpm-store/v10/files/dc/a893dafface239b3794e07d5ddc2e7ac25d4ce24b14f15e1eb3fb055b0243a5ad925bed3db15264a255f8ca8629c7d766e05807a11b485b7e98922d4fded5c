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
var _math = require("../math.js");
var sqrt3 = (0, _math.sqrt)(3);
var _default = {
    draw: function draw(context, size) {
        var s = (0, _math.sqrt)(size) * 0.6824;
        var t = s / 2;
        var u = s * sqrt3 / 2; // cos(Math.PI / 6)
        context.moveTo(0, -s);
        context.lineTo(u, t);
        context.lineTo(-u, t);
        context.closePath();
    }
};
