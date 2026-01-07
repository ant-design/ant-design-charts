"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return nice;
    }
});
var _ticks = require("./ticks.js");
function nice(start, stop, count) {
    var prestep;
    while(true){
        var step = (0, _ticks.tickIncrement)(start, stop, count);
        if (step === prestep || step === 0 || !isFinite(step)) {
            return [
                start,
                stop
            ];
        } else if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
        }
        prestep = step;
    }
}
