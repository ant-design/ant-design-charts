"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
var useIntl_1 = tslib_1.__importDefault(require("./useIntl"));
var MINUTE = 60;
var HOUR = 60 * 60;
var DAY = 60 * 60 * 24;
function selectUnit(seconds) {
    var absValue = Math.abs(seconds);
    if (absValue < MINUTE) {
        return 'second';
    }
    if (absValue < HOUR) {
        return 'minute';
    }
    if (absValue < DAY) {
        return 'hour';
    }
    return 'day';
}
function getDurationInSeconds(unit) {
    switch (unit) {
        case 'second':
            return 1;
        case 'minute':
            return MINUTE;
        case 'hour':
            return HOUR;
        default:
            return DAY;
    }
}
function valueToSeconds(value, unit) {
    if (!value) {
        return 0;
    }
    switch (unit) {
        case 'second':
            return value;
        case 'minute':
            return value * MINUTE;
        default:
            return value * HOUR;
    }
}
var INCREMENTABLE_UNITS = [
    'second',
    'minute',
    'hour',
];
function canIncrement(unit) {
    if (unit === void 0) { unit = 'second'; }
    return INCREMENTABLE_UNITS.indexOf(unit) > -1;
}
var SimpleFormattedRelativeTime = function (props) {
    var _a = (0, useIntl_1.default)(), formatRelativeTime = _a.formatRelativeTime, Text = _a.textComponent;
    var children = props.children, value = props.value, unit = props.unit, otherProps = tslib_1.__rest(props, ["children", "value", "unit"]);
    var formattedRelativeTime = formatRelativeTime(value || 0, unit, otherProps);
    if (typeof children === 'function') {
        return children(formattedRelativeTime);
    }
    if (Text) {
        return React.createElement(Text, null, formattedRelativeTime);
    }
    return React.createElement(React.Fragment, null, formattedRelativeTime);
};
var FormattedRelativeTime = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b, _c = _a.unit, unit = _c === void 0 ? 'second' : _c, updateIntervalInSeconds = _a.updateIntervalInSeconds, otherProps = tslib_1.__rest(_a, ["value", "unit", "updateIntervalInSeconds"]);
    (0, utils_1.invariant)(!updateIntervalInSeconds ||
        !!(updateIntervalInSeconds && canIncrement(unit)), 'Cannot schedule update with unit longer than hour');
    var _d = React.useState(), prevUnit = _d[0], setPrevUnit = _d[1];
    var _e = React.useState(0), prevValue = _e[0], setPrevValue = _e[1];
    var _f = React.useState(0), currentValueInSeconds = _f[0], setCurrentValueInSeconds = _f[1];
    var updateTimer;
    if (unit !== prevUnit || value !== prevValue) {
        setPrevValue(value || 0);
        setPrevUnit(unit);
        setCurrentValueInSeconds(canIncrement(unit) ? valueToSeconds(value, unit) : 0);
    }
    React.useEffect(function () {
        function clearUpdateTimer() {
            clearTimeout(updateTimer);
        }
        clearUpdateTimer();
        // If there's no interval and we cannot increment this unit, do nothing
        if (!updateIntervalInSeconds || !canIncrement(unit)) {
            return clearUpdateTimer;
        }
        // Figure out the next interesting time
        var nextValueInSeconds = currentValueInSeconds - updateIntervalInSeconds;
        var nextUnit = selectUnit(nextValueInSeconds);
        // We've reached the max auto incrementable unit, don't schedule another update
        if (nextUnit === 'day') {
            return clearUpdateTimer;
        }
        var unitDuration = getDurationInSeconds(nextUnit);
        var remainder = nextValueInSeconds % unitDuration;
        var prevInterestingValueInSeconds = nextValueInSeconds - remainder;
        var nextInterestingValueInSeconds = prevInterestingValueInSeconds >= currentValueInSeconds
            ? prevInterestingValueInSeconds - unitDuration
            : prevInterestingValueInSeconds;
        var delayInSeconds = Math.abs(nextInterestingValueInSeconds - currentValueInSeconds);
        if (currentValueInSeconds !== nextInterestingValueInSeconds) {
            updateTimer = setTimeout(function () { return setCurrentValueInSeconds(nextInterestingValueInSeconds); }, delayInSeconds * 1e3);
        }
        return clearUpdateTimer;
    }, [currentValueInSeconds, updateIntervalInSeconds, unit]);
    var currentValue = value || 0;
    var currentUnit = unit;
    if (canIncrement(unit) &&
        typeof currentValueInSeconds === 'number' &&
        updateIntervalInSeconds) {
        currentUnit = selectUnit(currentValueInSeconds);
        var unitDuration = getDurationInSeconds(currentUnit);
        currentValue = Math.round(currentValueInSeconds / unitDuration);
    }
    return (React.createElement(SimpleFormattedRelativeTime, tslib_1.__assign({ value: currentValue, unit: currentUnit }, otherProps)));
};
FormattedRelativeTime.displayName = 'FormattedRelativeTime';
exports.default = FormattedRelativeTime;
