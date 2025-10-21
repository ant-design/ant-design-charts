"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
var is_array_1 = require("./is-array");
var firstValue = function (data, name) {
    var rst = null;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil_1.default(value)) {
            if (is_array_1.default(value)) {
                rst = value[0]; // todo 这里是否应该使用递归，调用 firstValue @绝云
            }
            else {
                rst = value;
            }
            break;
        }
    }
    return rst;
};
exports.default = firstValue;
//# sourceMappingURL=first-value.js.map