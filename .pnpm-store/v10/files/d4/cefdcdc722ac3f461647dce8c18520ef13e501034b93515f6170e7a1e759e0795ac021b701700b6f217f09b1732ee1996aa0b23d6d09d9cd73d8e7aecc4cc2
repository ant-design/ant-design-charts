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
    ginzburg4Raw: function() {
        return ginzburg4Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _ginzburgPolyconic = /*#__PURE__*/ _interop_require_default(require("./ginzburgPolyconic.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ginzburg4Raw = (0, _ginzburgPolyconic.default)(2.8284, -1.6988, 0.75432, -0.18071, 1.76003, -0.38914, 0.042555);
function _default() {
    return (0, _index.geoProjection)(ginzburg4Raw).scale(149.995);
}
