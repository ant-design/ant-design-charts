"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reduce_1 = require("./reduce");
exports.default = (function (obj, keys) {
    return reduce_1.default(obj, function (r, curr, key) {
        if (!keys.includes(key)) {
            r[key] = curr;
        }
        return r;
    }, {});
});
//# sourceMappingURL=omit.js.map