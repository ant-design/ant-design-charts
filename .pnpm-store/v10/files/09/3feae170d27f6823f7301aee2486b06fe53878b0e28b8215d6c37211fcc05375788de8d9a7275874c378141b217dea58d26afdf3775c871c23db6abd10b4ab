"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return tickFormat;
    }
});
var _index = require("../../d3-array/src/index.js");
var _index1 = require("../../d3-format/src/index.js");
function tickFormat(start, stop, count, specifier) {
    var step = (0, _index.tickStep)(start, stop, count), precision;
    specifier = (0, _index1.formatSpecifier)(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            {
                var value = Math.max(Math.abs(start), Math.abs(stop));
                if (specifier.precision == null && !isNaN(precision = (0, _index1.precisionPrefix)(step, value))) specifier.precision = precision;
                return (0, _index1.formatPrefix)(specifier, value);
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                if (specifier.precision == null && !isNaN(precision = (0, _index1.precisionRound)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
                break;
            }
        case "f":
        case "%":
            {
                if (specifier.precision == null && !isNaN(precision = (0, _index1.precisionFixed)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
                break;
            }
    }
    return (0, _index1.format)(specifier);
}
