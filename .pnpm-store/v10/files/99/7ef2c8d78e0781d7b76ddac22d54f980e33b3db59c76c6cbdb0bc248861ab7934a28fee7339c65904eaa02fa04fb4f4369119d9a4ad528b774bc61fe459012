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
    html: function() {
        return html;
    },
    svg: function() {
        return svg;
    }
});
var _text = /*#__PURE__*/ _interop_require_default(require("./text.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function parser(type) {
    return function(input, init) {
        return (0, _text.default)(input, init).then(function(text) {
            return (new DOMParser).parseFromString(text, type);
        });
    };
}
var _default = parser("application/xml");
var html = parser("text/html");
var svg = parser("image/svg+xml");
