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
    ginzburg9Raw: function() {
        return ginzburg9Raw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _ginzburgPolyconic = /*#__PURE__*/ _interop_require_default(require("./ginzburgPolyconic.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ginzburg9Raw = (0, _ginzburgPolyconic.default)(2.6516, -0.76534, 0.19123, -0.047094, 1.36289, -0.13965, 0.031762);
function _default() {
    return (0, _index.geoProjection)(ginzburg9Raw).scale(131.087);
}
