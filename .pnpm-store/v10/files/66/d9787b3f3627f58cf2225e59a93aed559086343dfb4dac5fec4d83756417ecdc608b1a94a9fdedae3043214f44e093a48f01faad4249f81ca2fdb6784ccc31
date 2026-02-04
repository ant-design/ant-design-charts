"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var each_1 = tslib_1.__importDefault(require("./each"));
var is_plain_object_1 = tslib_1.__importDefault(require("./is-plain-object"));
var hasOwnProperty = Object.prototype.hasOwnProperty;
exports.default = (function (object, keys) {
    if (object === null || !(0, is_plain_object_1.default)(object)) {
        return {};
    }
    var result = {};
    (0, each_1.default)(keys, function (key) {
        if (hasOwnProperty.call(object, key)) {
            result[key] = object[key];
        }
    });
    return result;
});
//# sourceMappingURL=pick.js.map