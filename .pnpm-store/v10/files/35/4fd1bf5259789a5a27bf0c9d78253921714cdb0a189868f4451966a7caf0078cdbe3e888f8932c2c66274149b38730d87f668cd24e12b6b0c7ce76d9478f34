"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var is_string_1 = tslib_1.__importDefault(require("./is-string"));
var is_number_1 = tslib_1.__importDefault(require("./is-number"));
/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param path
 * @param value
 */
exports.default = (function (obj, path, value) {
    var o = obj;
    var keyArr = (0, is_string_1.default)(path) ? path.split('.') : path;
    keyArr.forEach(function (key, idx) {
        // 不是最后一个
        if (idx < keyArr.length - 1) {
            if (!(0, is_object_1.default)(o[key])) {
                o[key] = (0, is_number_1.default)(keyArr[idx + 1]) ? [] : {};
            }
            o = o[key];
        }
        else {
            o[key] = value;
        }
    });
    return obj;
});
//# sourceMappingURL=set.js.map