"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return transpose;
    }
});
var _min = /*#__PURE__*/ _interop_require_default(require("./min.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function transpose(matrix) {
    if (!(n = matrix.length)) return [];
    for(var i = -1, m = (0, _min.default)(matrix, length), transpose = new Array(m); ++i < m;){
        for(var j = -1, n, row = transpose[i] = new Array(n); ++j < n;){
            row[j] = matrix[j][i];
        }
    }
    return transpose;
}
function length(d) {
    return d.length;
}
