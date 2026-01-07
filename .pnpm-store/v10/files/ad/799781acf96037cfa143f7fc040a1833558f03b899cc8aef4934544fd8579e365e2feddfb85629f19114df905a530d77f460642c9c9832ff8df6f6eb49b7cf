"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var each_1 = require("./each");
var is_function_1 = require("./is-function");
// @ts-ignore
var values = Object.values ? function (obj) { return Object.values(obj); } : function (obj) {
    var result = [];
    each_1.default(obj, function (value, key) {
        if (!(is_function_1.default(obj) && key === 'prototype')) {
            result.push(value);
        }
    });
    return result;
};
exports.default = values;
//# sourceMappingURL=values.js.map