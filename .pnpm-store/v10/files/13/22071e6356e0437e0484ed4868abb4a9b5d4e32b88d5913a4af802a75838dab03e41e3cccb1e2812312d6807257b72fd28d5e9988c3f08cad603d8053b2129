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
var _timer = require("./timer.js");
function _default(callback, delay, time) {
    var t = new _timer.Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}
