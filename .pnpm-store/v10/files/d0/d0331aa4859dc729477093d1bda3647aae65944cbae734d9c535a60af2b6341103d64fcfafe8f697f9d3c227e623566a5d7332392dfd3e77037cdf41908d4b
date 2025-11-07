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
var _dice = /*#__PURE__*/ _interop_require_default(require("./dice.js"));
var _slice = /*#__PURE__*/ _interop_require_default(require("./slice.js"));
var _squarify = require("./squarify.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function custom(ratio) {
    function resquarify(parent, x0, y0, x1, y1) {
        if ((rows = parent._squarify) && rows.ratio === ratio) {
            var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
            while(++j < m){
                row = rows[j], nodes = row.children;
                for(i = row.value = 0, n = nodes.length; i < n; ++i)row.value += nodes[i].value;
                if (row.dice) (0, _dice.default)(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);
                else (0, _slice.default)(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
                value -= row.value;
            }
        } else {
            parent._squarify = rows = (0, _squarify.squarifyRatio)(ratio, parent, x0, y0, x1, y1);
            rows.ratio = ratio;
        }
    }
    resquarify.ratio = function(x) {
        return custom((x = +x) > 1 ? x : 1);
    };
    return resquarify;
}(_squarify.phi);
