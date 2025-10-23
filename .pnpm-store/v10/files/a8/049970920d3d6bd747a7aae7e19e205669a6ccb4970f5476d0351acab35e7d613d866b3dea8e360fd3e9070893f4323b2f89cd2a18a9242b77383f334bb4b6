"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_nil_1 = require("./is-nil");
var keys_1 = require("./keys");
function isMatch(obj, attrs) {
    var _keys = keys_1.default(attrs);
    var length = _keys.length;
    if (is_nil_1.default(obj))
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