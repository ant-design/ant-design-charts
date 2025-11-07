import { __assign } from "tslib";
import * as React from 'react';
import { DEFAULT_INTL_CONFIG as CORE_DEFAULT_INTL_CONFIG } from '@formatjs/intl';
export function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
export function invariantIntlContext(intl) {
    invariant(intl, '[React Intl] Could not find required `intl` object. ' +
        '<IntlProvider> needs to exist in the component ancestry.');
}
export var DEFAULT_INTL_CONFIG = __assign(__assign({}, CORE_DEFAULT_INTL_CONFIG), { textComponent: React.Fragment });
var toKeyedReactNode = function (reactNode, key) {
    return React.isValidElement(reactNode)
        ? React.cloneElement(reactNode, { key: key })
        : reactNode;
};
/**
 * Builds an array of {@link React.ReactNode}s with index-based keys, similar to
 * {@link React.Children.toArray}. However, this function tells React that it
 * was intentional, so they won't produce a bunch of warnings about it.
 *
 * React doesn't recommend doing this because it makes reordering inefficient,
 * but we mostly need this for message chunks, which don't tend to reorder to
 * begin with.
 */
export var toKeyedReactNodeArray = function (children) { var _a; 
/**
 * Note: {@link React.Children.map} will add its own index-based prefix to
 * every key anyway, so the auto-injected one doesn't even have to be unique.
 * This basically just tells React that it's explicit/intentional.
 */
return (_a = React.Children.map(children, toKeyedReactNode)) !== null && _a !== void 0 ? _a : []; };
/**
 * Takes a `formatXMLElementFn`, and composes it in function, which passes
 * argument `parts` through, assigning unique key to each part, to prevent
 * "Each child in a list should have a unique "key"" React error.
 * @param formatXMLElementFn
 */
export function assignUniqueKeysToParts(formatXMLElementFn) {
    return function (parts) {
        // eslint-disable-next-line prefer-rest-params
        return formatXMLElementFn(toKeyedReactNodeArray(parts));
    };
}
export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;
    if (bKeys.length !== len) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        var key = aKeys[i];
        if (objA[key] !== objB[key] ||
            !Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }
    }
    return true;
}
