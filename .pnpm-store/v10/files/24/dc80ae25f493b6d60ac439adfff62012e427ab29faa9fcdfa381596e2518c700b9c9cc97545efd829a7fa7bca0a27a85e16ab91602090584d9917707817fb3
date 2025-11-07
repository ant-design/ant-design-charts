"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _value = /*#__PURE__*/ _interop_require_default(require("./value.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _default(a, b) {
    var i = {}, c = {}, k;
    if (a === null || (typeof a === "undefined" ? "undefined" : _type_of(a)) !== "object") a = {};
    if (b === null || (typeof b === "undefined" ? "undefined" : _type_of(b)) !== "object") b = {};
    for(k in b){
        if (k in a) {
            i[k] = (0, _value.default)(a[k], b[k]);
        } else {
            c[k] = b[k];
        }
    }
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}
