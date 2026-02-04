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
var ka = 0.89081309152928522810;
var kr = (0, _math.sin)(_math.pi / 10) / (0, _math.sin)(7 * _math.pi / 10);
var kx = (0, _math.sin)(_math.tau / 10) * kr;
var ky = -(0, _math.cos)(_math.tau / 10) * kr;
var _default = {
    draw: function draw(context, size) {
        var r = (0, _math.sqrt)(size * ka);
        var x = kx * r;
        var y = ky * r;
        context.moveTo(0, -r);
        context.lineTo(x, y);
        for(var i = 1; i < 5; ++i){
            var a = _math.tau * i / 5;
            var c = (0, _math.cos)(a);
            var s = (0, _math.sin)(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
        }
        context.closePath();
    }
};
