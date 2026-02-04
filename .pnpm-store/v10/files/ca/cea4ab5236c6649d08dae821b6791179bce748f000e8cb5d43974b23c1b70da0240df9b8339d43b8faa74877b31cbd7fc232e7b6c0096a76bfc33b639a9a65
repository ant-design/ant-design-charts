"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mix_1 = require("./mix");
var is_function_1 = require("./is-function");
var augment = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var c = args[0];
    for (var i = 1; i < args.length; i++) {
        var obj = args[i];
        if (is_function_1.default(obj)) {
            obj = obj.prototype;
        }
        mix_1.default(c.prototype, obj);
    }
};
exports.default = augment;
//# sourceMappingURL=augment.js.map