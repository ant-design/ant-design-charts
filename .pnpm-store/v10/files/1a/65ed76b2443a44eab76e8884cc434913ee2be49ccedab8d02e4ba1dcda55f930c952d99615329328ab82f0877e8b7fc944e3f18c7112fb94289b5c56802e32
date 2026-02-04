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
    timeDay: function() {
        return timeDay;
    },
    timeDays: function() {
        return timeDays;
    },
    unixDay: function() {
        return unixDay;
    },
    unixDays: function() {
        return unixDays;
    },
    utcDay: function() {
        return utcDay;
    },
    utcDays: function() {
        return utcDays;
    }
});
var _interval = require("./interval.js");
var _duration = require("./duration.js");
var timeDay = (0, _interval.timeInterval)(function(date) {
    return date.setHours(0, 0, 0, 0);
}, function(date, step) {
    return date.setDate(date.getDate() + step);
}, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration.durationMinute) / _duration.durationDay;
}, function(date) {
    return date.getDate() - 1;
});
var timeDays = timeDay.range;
var utcDay = (0, _interval.timeInterval)(function(date) {
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
    return (end - start) / _duration.durationDay;
}, function(date) {
    return date.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = (0, _interval.timeInterval)(function(date) {
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
    return (end - start) / _duration.durationDay;
}, function(date) {
    return Math.floor(date / _duration.durationDay);
});
var unixDays = unixDay.range;
