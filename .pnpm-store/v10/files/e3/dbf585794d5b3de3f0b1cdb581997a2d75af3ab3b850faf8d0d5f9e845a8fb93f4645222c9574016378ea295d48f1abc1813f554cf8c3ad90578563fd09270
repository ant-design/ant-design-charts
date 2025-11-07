"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var each_1 = tslib_1.__importDefault(require("./each"));
exports.default = (function (obj1, obj2) {
    if (obj1.length !== obj2.length) {
        return false;
    }
    var result = true;
    (0, each_1.default)(obj1, function (item, i) {
        if (item !== obj2[i]) {
            result = false;
            return false;
        }
    });
    return result;
});
//# sourceMappingURL=is-segment-equal.js.map