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
        var r = (0, _math.sqrt)(size + (0, _math.min)(size / 28, 0.75)) * 0.59436;
        var t = r / 2;
        var u = t * sqrt3;
        context.moveTo(0, r);
        context.lineTo(0, -r);
        context.moveTo(-u, -t);
        context.lineTo(u, t);
        context.moveTo(-u, t);
        context.lineTo(u, -t);
    }
};
