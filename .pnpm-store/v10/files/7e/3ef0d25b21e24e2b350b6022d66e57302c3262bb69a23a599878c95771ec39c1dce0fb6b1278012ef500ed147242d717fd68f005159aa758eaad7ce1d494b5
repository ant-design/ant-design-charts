"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKeyedReactNodeArray = exports.DEFAULT_INTL_CONFIG = void 0;
exports.invariant = invariant;
exports.invariantIntlContext = invariantIntlContext;
exports.assignUniqueKeysToParts = assignUniqueKeysToParts;
exports.shallowEqual = shallowEqual;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var intl_1 = require("@formatjs/intl");
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}
function invariantIntlContext(intl) {
    invariant(intl, '[React Intl] Could not find required `intl` object. ' +
        '<IntlProvider> needs to exist in the component ancestry.');
}
exports.DEFAULT_INTL_CONFIG = tslib_1.__assign(tslib_1.__assign({}, intl_1.DEFAULT_INTL_CONFIG), { textComponent: React.Fragment });
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
var toKeyedReactNodeArray = function (children) { var _a; 
/**
 * Note: {@link React.Children.map} will add its own index-based prefix to
 * every key anyway, so the auto-injected one doesn't even have to be unique.
 * This basically just tells React that it's explicit/intentional.
 */
return (_a = React.Children.map(children, toKeyedReactNode)) !== null && _a !== void 0 ? _a : []; };
exports.toKeyedReactNodeArray = toKeyedReactNodeArray;
/**
 * Takes a `formatXMLElementFn`, and composes it in function, which passes
 * argument `parts` through, assigning unique key to each part, to prevent
 * "Each child in a list should have a unique "key"" React error.
 * @param formatXMLElementFn
 */
function assignUniqueKeysToParts(formatXMLElementFn) {
    return function (parts) {
        // eslint-disable-next-line prefer-rest-params
        return formatXMLElementFn((0, exports.toKeyedReactNodeArray)(parts));
    };
}
function shallowEqual(objA, objB) {
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
