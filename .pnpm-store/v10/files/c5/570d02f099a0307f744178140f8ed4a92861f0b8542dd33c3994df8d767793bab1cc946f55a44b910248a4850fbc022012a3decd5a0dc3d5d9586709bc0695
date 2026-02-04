"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mix_1 = tslib_1.__importDefault(require("./mix"));
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
var augment = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var c = args[0];
    for (var i = 1; i < args.length; i++) {
        var obj = args[i];
        if ((0, is_function_1.default)(obj)) {
            obj = obj.prototype;
        }
        (0, mix_1.default)(c.prototype, obj);
    }
};
exports.default = augment;
//# sourceMappingURL=augment.js.map