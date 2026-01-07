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
    csv: function() {
        return csv;
    },
    default: function() {
        return dsv;
    },
    tsv: function() {
        return tsv;
    }
});
var _index = require("../../d3-dsv/src/index.js");
var _text = /*#__PURE__*/ _interop_require_default(require("./text.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function dsvParse(parse) {
    return function(input, init, row) {
        if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
        return (0, _text.default)(input, init).then(function(response) {
            return parse(response, row);
        });
    };
}
function dsv(delimiter, input, init, row) {
    if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
    var format = (0, _index.dsvFormat)(delimiter);
    return (0, _text.default)(input, init).then(function(response) {
        return format.parse(response, row);
    });
}
var csv = dsvParse(_index.csvParse);
var tsv = dsvParse(_index.tsvParse);
