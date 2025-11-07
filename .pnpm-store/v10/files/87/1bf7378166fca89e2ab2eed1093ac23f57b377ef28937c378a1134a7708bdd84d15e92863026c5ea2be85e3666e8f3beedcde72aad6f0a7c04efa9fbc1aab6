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
    default: function() {
        return _default;
    },
    ginzburg5Raw: function() {
        return ginzburg5Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _ginzburgPolyconic = /*#__PURE__*/ _interop_require_default(require("./ginzburgPolyconic.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ginzburg5Raw = (0, _ginzburgPolyconic.default)(2.583819, -0.835827, 0.170354, -0.038094, 1.543313, -0.411435, 0.082742);
function _default() {
    return (0, _index.geoProjection)(ginzburg5Raw).scale(153.93);
}
