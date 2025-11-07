"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bisectCenter: function() {
        return bisectCenter;
    },
    bisectLeft: function() {
        return bisectLeft;
    },
    bisectRight: function() {
        return bisectRight;
    },
    default: function() {
        return _default;
    }
});
var _ascending = /*#__PURE__*/ _interop_require_default(require("./ascending.js"));
var _bisector = /*#__PURE__*/ _interop_require_default(require("./bisector.js"));
var _number = /*#__PURE__*/ _interop_require_default(require("./number.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ascendingBisect = (0, _bisector.default)(_ascending.default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = (0, _bisector.default)(_number.default).center;
var _default = bisectRight;
