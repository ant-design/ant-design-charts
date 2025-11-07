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
    second: function() {
        return second;
    },
    seconds: function() {
        return seconds;
    }
});
var _interval = require("./interval.js");
var _duration = require("./duration.js");
var second = (0, _interval.timeInterval)(function(date) {
    date.setTime(date - date.getMilliseconds());
}, function(date, step) {
    date.setTime(+date + step * _duration.durationSecond);
}, function(start, end) {
    return (end - start) / _duration.durationSecond;
}, function(date) {
    return date.getUTCSeconds();
});
var seconds = second.range;
