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
var tan30 = (0, _math.sqrt)(1 / 3);
var tan30_2 = tan30 * 2;
var _default = {
    draw: function draw(context, size) {
        var y = (0, _math.sqrt)(size / tan30_2);
        var x = y * tan30;
        context.moveTo(0, -y);
        context.lineTo(x, 0);
        context.lineTo(0, y);
        context.lineTo(-x, 0);
        context.closePath();
    }
};
