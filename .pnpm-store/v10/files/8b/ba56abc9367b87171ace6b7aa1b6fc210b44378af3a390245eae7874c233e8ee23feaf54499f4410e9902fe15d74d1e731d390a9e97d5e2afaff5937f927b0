"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var each_1 = tslib_1.__importDefault(require("./each"));
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
// @ts-ignore
var values = Object.values
    ? function (obj) { return Object.values(obj); }
    : function (obj) {
        var result = [];
        (0, each_1.default)(obj, function (value, key) {
            if (!((0, is_function_1.default)(obj) && key === 'prototype')) {
                result.push(value);
            }
        });
        return result;
    };
exports.default = values;
//# sourceMappingURL=values.js.map