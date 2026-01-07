"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return thresholdSturges;
    }
});
var _count = /*#__PURE__*/ _interop_require_default(require("../count.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function thresholdSturges(values) {
    return Math.max(1, Math.ceil(Math.log((0, _count.default)(values)) / Math.LN2) + 1);
}
