import { __spreadArray } from "tslib";
import { memoize, strategies } from '@formatjs/fast-memoize';
export function repeat(s, times) {
    if (typeof s.repeat === 'function') {
        return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = s;
    }
    return arr.join('');
}
export function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
        map.set(pl, Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
}
export function setMultiInternalSlots(map, pl, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var k = _a[_i];
        setInternalSlot(map, pl, k, props[k]);
    }
}
export function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
}
export function getMultiInternalSlots(map, pl) {
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
export function isLiteralPart(patternPart) {
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
export function defineProperty(target, name, _a) {
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
export function createDataProperty(target, name, value) {
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: value,
    });
}
export var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
export function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
export var createMemoizedNumberFormat = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
export var createMemoizedDateTimeFormat = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
export var createMemoizedPluralRules = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
export var createMemoizedLocale = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.Locale).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
export var createMemoizedListFormat = memoize(function () {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new ((_a = Intl.ListFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
}, {
    strategy: strategies.variadic,
});
