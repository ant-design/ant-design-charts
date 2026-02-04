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
        return Symbol;
    },
    symbolsFill: function() {
        return symbolsFill;
    },
    symbolsStroke: function() {
        return symbolsStroke;
    }
});
var _constant = /*#__PURE__*/ _interop_require_default(require("./constant.js"));
var _path = require("./path.js");
var _asterisk = /*#__PURE__*/ _interop_require_default(require("./symbol/asterisk.js"));
var _circle = /*#__PURE__*/ _interop_require_default(require("./symbol/circle.js"));
var _cross = /*#__PURE__*/ _interop_require_default(require("./symbol/cross.js"));
var _diamond = /*#__PURE__*/ _interop_require_default(require("./symbol/diamond.js"));
var _diamond2 = /*#__PURE__*/ _interop_require_default(require("./symbol/diamond2.js"));
var _plus = /*#__PURE__*/ _interop_require_default(require("./symbol/plus.js"));
var _square = /*#__PURE__*/ _interop_require_default(require("./symbol/square.js"));
var _square2 = /*#__PURE__*/ _interop_require_default(require("./symbol/square2.js"));
var _star = /*#__PURE__*/ _interop_require_default(require("./symbol/star.js"));
var _triangle = /*#__PURE__*/ _interop_require_default(require("./symbol/triangle.js"));
var _triangle2 = /*#__PURE__*/ _interop_require_default(require("./symbol/triangle2.js"));
var _wye = /*#__PURE__*/ _interop_require_default(require("./symbol/wye.js"));
var _times = /*#__PURE__*/ _interop_require_default(require("./symbol/times.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var symbolsFill = [
    _circle.default,
    _cross.default,
    _diamond.default,
    _square.default,
    _star.default,
    _triangle.default,
    _wye.default
];
var symbolsStroke = [
    _circle.default,
    _plus.default,
    _times.default,
    _triangle2.default,
    _asterisk.default,
    _square2.default,
    _diamond2.default
];
function Symbol(type, size) {
    var context = null, path = (0, _path.withPath)(symbol);
    type = typeof type === "function" ? type : (0, _constant.default)(type || _circle.default);
    size = typeof size === "function" ? size : (0, _constant.default)(size === undefined ? 64 : +size);
    function symbol() {
        var buffer;
        if (!context) context = buffer = path();
        type.apply(this, arguments).draw(context, +size.apply(this, arguments));
        if (buffer) return context = null, buffer + "" || null;
    }
    symbol.type = function(_) {
        return arguments.length ? (type = typeof _ === "function" ? _ : (0, _constant.default)(_), symbol) : type;
    };
    symbol.size = function(_) {
        return arguments.length ? (size = typeof _ === "function" ? _ : (0, _constant.default)(+_), symbol) : size;
    };
    symbol.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
    return symbol;
}
