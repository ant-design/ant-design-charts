"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var group_to_map_1 = require("./group-to-map");
exports.default = (function (data, condition) {
    if (!condition) {
        // 没有条件，则自身改成数组
        return [data];
    }
    var groups = group_to_map_1.default(data, condition);
    var array = [];
    for (var i in groups) {
        array.push(groups[i]);
    }
    return array;
});
//# sourceMappingURL=group.js.map