"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_string_1 = require("./is-string");
/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param key
 * @param defaultValue
 */
exports.default = (function (obj, key, defaultValue) {
    var p = 0;
    var keyArr = is_string_1.default(key) ? key.split('.') : key;
    while (obj && p < keyArr.length) {
        obj = obj[keyArr[p++]];
    }
    return (obj === undefined || p < keyArr.length) ? defaultValue : obj;
});
//# sourceMappingURL=get.js.map