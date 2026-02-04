"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_function_1 = require("./is-function");
var is_match_1 = require("./is-match");
var is_array_1 = require("./is-array");
var is_plain_object_1 = require("./is-plain-object");
function find(arr, predicate) {
    if (!is_array_1.default(arr))
        return null;
    var _predicate;
    if (is_function_1.default(predicate)) {
        _predicate = predicate;
    }
    if (is_plain_object_1.default(predicate)) {
        _predicate = function (a) { return is_match_1.default(a, predicate); };
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