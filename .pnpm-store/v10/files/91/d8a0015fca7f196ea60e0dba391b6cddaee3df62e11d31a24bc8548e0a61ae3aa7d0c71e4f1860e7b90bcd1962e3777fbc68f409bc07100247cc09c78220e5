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
    ginzburg6Raw: function() {
        return ginzburg6Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _ginzburgPolyconic = /*#__PURE__*/ _interop_require_default(require("./ginzburgPolyconic.js"));
var _math = require("./math.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ginzburg6Raw = (0, _ginzburgPolyconic.default)(5 / 6 * _math.pi, -0.62636, -0.0344, 0, 1.3493, -0.05524, 0, 0.045);
function _default() {
    return (0, _index.geoProjection)(ginzburg6Raw).scale(130.945);
}
