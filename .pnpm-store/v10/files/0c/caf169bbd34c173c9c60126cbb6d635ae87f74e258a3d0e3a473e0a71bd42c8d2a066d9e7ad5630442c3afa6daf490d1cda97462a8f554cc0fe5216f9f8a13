"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var is_nil_1 = tslib_1.__importDefault(require("./is-nil"));
var keys_1 = tslib_1.__importDefault(require("./keys"));
function isMatch(obj, attrs) {
    var _keys = (0, keys_1.default)(attrs);
    var length = _keys.length;
    if ((0, is_nil_1.default)(obj))
        return !length;
    for (var i = 0; i < length; i += 1) {
        var key = _keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) {
            return false;
        }
    }
    return true;
}
exports.default = isMatch;
//# sourceMappingURL=is-match.js.map