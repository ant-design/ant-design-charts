import { __assign } from "tslib";
import hoistNonReactStatics from 'hoist-non-react-statics';
import * as React from 'react';
import { invariantIntlContext } from '../utils';
function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}
// This is primarily dealing with packaging systems where multiple copies of react-intl
// might exist
var IntlContext = typeof window !== 'undefined' && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
    ? window.__REACT_INTL_CONTEXT__ ||
        (window.__REACT_INTL_CONTEXT__ = React.createContext(null))
    : React.createContext(null);
var IntlConsumer = IntlContext.Consumer, IntlProvider = IntlContext.Provider;
export var Provider = IntlProvider;
export var Context = IntlContext;
export default function injectIntl(WrappedComponent, options) {
    var _a = options || {}, _b = _a.intlPropName, intlPropName = _b === void 0 ? 'intl' : _b, _c = _a.forwardRef, forwardRef = _c === void 0 ? false : _c, _d = _a.enforceContext, enforceContext = _d === void 0 ? true : _d;
    var WithIntl = function (props) { return (React.createElement(IntlConsumer, null, function (intl) {
        var _a;
        if (enforceContext) {
            invariantIntlContext(intl);
        }
        var intlProp = (_a = {}, _a[intlPropName] = intl, _a);
        return (React.createElement(WrappedComponent, __assign({}, props, intlProp, { ref: forwardRef ? props.forwardedRef : null })));
    })); };
    WithIntl.displayName = "injectIntl(".concat(getDisplayName(WrappedComponent), ")");
    WithIntl.WrappedComponent = WrappedComponent;
    if (forwardRef) {
        return hoistNonReactStatics(
        // @ts-expect-error
        React.forwardRef(function (props, ref) { return (React.createElement(WithIntl, __assign({}, props, { forwardedRef: ref }))); }), WrappedComponent);
    }
    return hoistNonReactStatics(WithIntl, WrappedComponent);
}
