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
var _none = /*#__PURE__*/ _interop_require_default(require("./none.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var i, n, j = 0, m = series[0].length, y; j < m; ++j){
        for(y = i = 0; i < n; ++i)y += series[i][j][1] || 0;
        if (y) for(i = 0; i < n; ++i)series[i][j][1] /= y;
    }
    (0, _none.default)(series, order);
}
