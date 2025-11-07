"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_nil_1 = tslib_1.__importDefault(require("./is-nil"));
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var identity = function (v) { return v; };
exports.default = (function (object, func) {
    if (func === void 0) { func = identity; }
    var r = {};
    if ((0, is_object_1.default)(object) && !(0, is_nil_1.default)(object)) {
        Object.keys(object).forEach(function (key) {
            // @ts-ignore
            r[key] = func(object[key], key);
        });
    }
    return r;
});
//# sourceMappingURL=map-values.js.map