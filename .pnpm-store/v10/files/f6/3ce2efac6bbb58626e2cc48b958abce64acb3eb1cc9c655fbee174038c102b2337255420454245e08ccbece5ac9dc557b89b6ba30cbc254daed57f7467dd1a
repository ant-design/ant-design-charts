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
    timeHour: function() {
        return timeHour;
    },
    timeHours: function() {
        return timeHours;
    },
    utcHour: function() {
        return utcHour;
    },
    utcHours: function() {
        return utcHours;
    }
});
var _interval = require("./interval.js");
var _duration = require("./duration.js");
var timeHour = (0, _interval.timeInterval)(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration.durationSecond - date.getMinutes() * _duration.durationMinute);
}, function(date, step) {
    date.setTime(+date + step * _duration.durationHour);
}, function(start, end) {
    return (end - start) / _duration.durationHour;
}, function(date) {
    return date.getHours();
});
var timeHours = timeHour.range;
var utcHour = (0, _interval.timeInterval)(function(date) {
    date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
    date.setTime(+date + step * _duration.durationHour);
}, function(start, end) {
    return (end - start) / _duration.durationHour;
}, function(date) {
    return date.getUTCHours();
});
var utcHours = utcHour.range;
