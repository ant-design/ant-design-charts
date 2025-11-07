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
    timeTickInterval: function() {
        return timeTickInterval;
    },
    timeTicks: function() {
        return timeTicks;
    },
    utcTickInterval: function() {
        return utcTickInterval;
    },
    utcTicks: function() {
        return utcTicks;
    }
});
var _index = require("../../d3-array/src/index.js");
var _duration = require("./duration.js");
var _millisecond = require("./millisecond.js");
var _second = require("./second.js");
var _minute = require("./minute.js");
var _hour = require("./hour.js");
var _day = require("./day.js");
var _week = require("./week.js");
var _month = require("./month.js");
var _year = require("./year.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function ticker(year, month, week, day, hour, minute) {
    var tickIntervals = [
        [
            _second.second,
            1,
            _duration.durationSecond
        ],
        [
            _second.second,
            5,
            5 * _duration.durationSecond
        ],
        [
            _second.second,
            15,
            15 * _duration.durationSecond
        ],
        [
            _second.second,
            30,
            30 * _duration.durationSecond
        ],
        [
            minute,
            1,
            _duration.durationMinute
        ],
        [
            minute,
            5,
            5 * _duration.durationMinute
        ],
        [
            minute,
            15,
            15 * _duration.durationMinute
        ],
        [
            minute,
            30,
            30 * _duration.durationMinute
        ],
        [
            hour,
            1,
            _duration.durationHour
        ],
        [
            hour,
            3,
            3 * _duration.durationHour
        ],
        [
            hour,
            6,
            6 * _duration.durationHour
        ],
        [
            hour,
            12,
            12 * _duration.durationHour
        ],
        [
            day,
            1,
            _duration.durationDay
        ],
        [
            day,
            2,
            2 * _duration.durationDay
        ],
        [
            week,
            1,
            _duration.durationWeek
        ],
        [
            month,
            1,
            _duration.durationMonth
        ],
        [
            month,
            3,
            3 * _duration.durationMonth
        ],
        [
            year,
            1,
            _duration.durationYear
        ]
    ];
    function ticks(start, stop, count) {
        var reverse = stop < start;
        var ref;
        if (reverse) ref = [
            stop,
            start
        ], start = ref[0], stop = ref[1], ref;
        var interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
        var _$ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
        return reverse ? _$ticks.reverse() : _$ticks;
    }
    function tickInterval(start, stop, count) {
        var target = Math.abs(stop - start) / count;
        var i = (0, _index.bisector)(function(param) {
            var _param = _sliced_to_array(param, 3), step = _param[2];
            return step;
        }).right(tickIntervals, target);
        if (i === tickIntervals.length) return year.every((0, _index.tickStep)(start / _duration.durationYear, stop / _duration.durationYear, count));
        if (i === 0) return _millisecond.millisecond.every(Math.max((0, _index.tickStep)(start, stop, count), 1));
        var _tickIntervals_ = _sliced_to_array(tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i], 2), t = _tickIntervals_[0], step = _tickIntervals_[1];
        return t.every(step);
    }
    return [
        ticks,
        tickInterval
    ];
}
var _ticker = _sliced_to_array(ticker(_year.utcYear, _month.utcMonth, _week.utcSunday, _day.unixDay, _hour.utcHour, _minute.utcMinute), 2), utcTicks = _ticker[0], utcTickInterval = _ticker[1];
var _ticker1 = _sliced_to_array(ticker(_year.timeYear, _month.timeMonth, _week.timeSunday, _day.timeDay, _hour.timeHour, _minute.timeMinute), 2), timeTicks = _ticker1[0], timeTickInterval = _ticker1[1];
