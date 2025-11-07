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
var _appearance = /*#__PURE__*/ _interop_require_default(require("./appearance.js"));
var _ascending = require("./ascending.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(series) {
    var n = series.length, i, j, sums = series.map(_ascending.sum), order = (0, _appearance.default)(series), top = 0, bottom = 0, tops = [], bottoms = [];
    for(i = 0; i < n; ++i){
        j = order[i];
        if (top < bottom) {
            top += sums[j];
            tops.push(j);
        } else {
            bottom += sums[j];
            bottoms.push(j);
        }
    }
    return bottoms.reverse().concat(tops);
}
