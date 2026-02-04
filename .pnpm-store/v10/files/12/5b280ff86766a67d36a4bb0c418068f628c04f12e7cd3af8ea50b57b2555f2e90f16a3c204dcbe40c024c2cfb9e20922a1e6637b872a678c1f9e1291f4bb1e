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
    timeFriday: function() {
        return timeFriday;
    },
    timeFridays: function() {
        return timeFridays;
    },
    timeMonday: function() {
        return timeMonday;
    },
    timeMondays: function() {
        return timeMondays;
    },
    timeSaturday: function() {
        return timeSaturday;
    },
    timeSaturdays: function() {
        return timeSaturdays;
    },
    timeSunday: function() {
        return timeSunday;
    },
    timeSundays: function() {
        return timeSundays;
    },
    timeThursday: function() {
        return timeThursday;
    },
    timeThursdays: function() {
        return timeThursdays;
    },
    timeTuesday: function() {
        return timeTuesday;
    },
    timeTuesdays: function() {
        return timeTuesdays;
    },
    timeWednesday: function() {
        return timeWednesday;
    },
    timeWednesdays: function() {
        return timeWednesdays;
    },
    utcFriday: function() {
        return utcFriday;
    },
    utcFridays: function() {
        return utcFridays;
    },
    utcMonday: function() {
        return utcMonday;
    },
    utcMondays: function() {
        return utcMondays;
    },
    utcSaturday: function() {
        return utcSaturday;
    },
    utcSaturdays: function() {
        return utcSaturdays;
    },
    utcSunday: function() {
        return utcSunday;
    },
    utcSundays: function() {
        return utcSundays;
    },
    utcThursday: function() {
        return utcThursday;
    },
    utcThursdays: function() {
        return utcThursdays;
    },
    utcTuesday: function() {
        return utcTuesday;
    },
    utcTuesdays: function() {
        return utcTuesdays;
    },
    utcWednesday: function() {
        return utcWednesday;
    },
    utcWednesdays: function() {
        return utcWednesdays;
    }
});
var _interval = require("./interval.js");
var _duration = require("./duration.js");
function timeWeekday(i) {
    return (0, _interval.timeInterval)(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
    }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration.durationMinute) / _duration.durationWeek;
    });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
    return (0, _interval.timeInterval)(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, function(start, end) {
        return (end - start) / _duration.durationWeek;
    });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;
