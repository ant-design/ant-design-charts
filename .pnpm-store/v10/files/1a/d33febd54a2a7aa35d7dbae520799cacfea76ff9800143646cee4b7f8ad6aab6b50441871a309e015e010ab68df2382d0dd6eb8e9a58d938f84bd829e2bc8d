"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
var is_match_1 = tslib_1.__importDefault(require("./is-match"));
var is_array_1 = tslib_1.__importDefault(require("./is-array"));
var is_plain_object_1 = tslib_1.__importDefault(require("./is-plain-object"));
function find(arr, predicate) {
    if (!(0, is_array_1.default)(arr))
        return null;
    var _predicate;
    if ((0, is_function_1.default)(predicate)) {
        _predicate = predicate;
    }
    if ((0, is_plain_object_1.default)(predicate)) {
        _predicate = function (a) { return (0, is_match_1.default)(a, predicate); };
    }
    if (_predicate) {
        for (var i = 0; i < arr.length; i += 1) {
            if (_predicate(arr[i])) {
                return arr[i];
            }
        }
    }
    return null;
}
exports.default = find;
//# sourceMappingURL=find.js.map