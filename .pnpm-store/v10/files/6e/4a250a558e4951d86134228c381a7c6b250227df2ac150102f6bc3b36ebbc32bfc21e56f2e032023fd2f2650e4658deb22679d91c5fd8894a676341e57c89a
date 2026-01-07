"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
var is_function_1 = require("./is-function");
var keys = Object.keys ? function (obj) { return Object.keys(obj); } : function (obj) {
    var result = [];
    each_1.default(obj, function (value, key) {
        if (!(is_function_1.default(obj) && key === 'prototype')) {
            result.push(key);
        }
    });
    return result;
};
exports.default = keys;
//# sourceMappingURL=keys.js.map