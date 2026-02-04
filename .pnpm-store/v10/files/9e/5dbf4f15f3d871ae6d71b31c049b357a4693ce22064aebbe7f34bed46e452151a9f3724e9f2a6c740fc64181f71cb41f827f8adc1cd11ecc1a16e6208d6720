"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemoizedListFormat = exports.createMemoizedLocale = exports.createMemoizedPluralRules = exports.createMemoizedDateTimeFormat = exports.createMemoizedNumberFormat = exports.UNICODE_EXTENSION_SEQUENCE_REGEX = void 0;
exports.repeat = repeat;
exports.setInternalSlot = setInternalSlot;
exports.setMultiInternalSlots = setMultiInternalSlots;
exports.getInternalSlot = getInternalSlot;
exports.getMultiInternalSlots = getMultiInternalSlots;
exports.isLiteralPart = isLiteralPart;
exports.defineProperty = defineProperty;
exports.createDataProperty = createDataProperty;
exports.invariant = invariant;
var tslib_1 = require("tslib");
var fast_memoize_1 = require("@formatjs/fast-memoize");
function repeat(s, times) {
    if (typeof s.repeat === 'function') {
        return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = s;
    }
    return arr.join('');
}
function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
        map.set(pl, Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
}
function setMultiInternalSlots(map, pl, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var k = _a[_i];
        setInternalSlot(map, pl, k, props[k]);
    }
}
function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
}
function getMultiInternalSlots(map, pl) {
    var fields = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fields[_i - 2] = arguments[_i];
    }
    var slots = map.get(pl);
    if (!slots) {
        throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    }
    return fields.reduce(function (all, f) {
        all[f] = slots[f];
        return all;
    }, Object.create(null));
}
function isLiteralPart(patternPart) {
    return patternPart.type === 'literal';
}
/*
  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
*/
function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value,
    });
}
/**
 * 7.3.5 CreateDataProperty
 * @param target
 * @param name
 * @param value
 */
function createDataProperty(target, name, value) {
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: value,
    });
}
exports.UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
exports.createMemoizedNumberFormat = (0, fast_memoize_1.memoize)(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.NumberFormat).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
}, {
    strategy: fast_memoize_1.strategies.variadic,
});
exports.createMemoizedDateTimeFormat = (0, fast_memoize_1.memoize)(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.DateTimeFormat).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
}, {
    strategy: fast_memoize_1.strategies.variadic,
});
exports.createMemoizedPluralRules = (0, fast_memoize_1.memoize)(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.PluralRules).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
}, {
    strategy: fast_memoize_1.strategies.variadic,
});
exports.createMemoizedLocale = (0, fast_memoize_1.memoize)(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.Locale).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
}, {
    strategy: fast_memoize_1.strategies.variadic,
});
exports.createMemoizedListFormat = (0, fast_memoize_1.memoize)(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.ListFormat).bind.apply(_a, tslib_1.__spreadArray([void 0], args, false)))();
}, {
    strategy: fast_memoize_1.strategies.variadic,
});
