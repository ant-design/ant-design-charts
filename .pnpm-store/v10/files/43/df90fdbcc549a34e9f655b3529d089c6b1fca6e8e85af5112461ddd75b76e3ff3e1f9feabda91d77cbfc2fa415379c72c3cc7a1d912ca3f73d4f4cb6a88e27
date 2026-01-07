"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_array_1 = require("./is-array");
var is_nil_1 = require("./is-nil");
exports.default = (function (data, name) {
    var rst = [];
    var tmpMap = {};
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil_1.default(value)) {
            // flatten
            if (!is_array_1.default(value)) {
                value = [value];
            }
            for (var j = 0; j < value.length; j++) {
                var val = value[j];
                // unique
                if (!tmpMap[val]) {
                    rst.push(val);
                    tmpMap[val] = true;
                }
            }
        }
    }
    return rst;
});
//# sourceMappingURL=values-of-key.js.map