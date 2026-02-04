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
    timeMinute: function() {
        return timeMinute;
    },
    timeMinutes: function() {
        return timeMinutes;
    },
    utcMinute: function() {
        return utcMinute;
    },
    utcMinutes: function() {
        return utcMinutes;
    }
});
var _interval = require("./interval.js");
var _duration = require("./duration.js");
var timeMinute = (0, _interval.timeInterval)(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration.durationSecond);
}, function(date, step) {
    date.setTime(+date + step * _duration.durationMinute);
}, function(start, end) {
    return (end - start) / _duration.durationMinute;
}, function(date) {
    return date.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = (0, _interval.timeInterval)(function(date) {
    date.setUTCSeconds(0, 0);
}, function(date, step) {
    date.setTime(+date + step * _duration.durationMinute);
}, function(start, end) {
    return (end - start) / _duration.durationMinute;
}, function(date) {
    return date.getUTCMinutes();
});
var utcMinutes = utcMinute.range;
