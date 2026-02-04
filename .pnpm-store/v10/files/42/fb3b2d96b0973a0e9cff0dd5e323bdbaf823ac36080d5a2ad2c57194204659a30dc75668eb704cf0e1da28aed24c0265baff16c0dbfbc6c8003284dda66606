"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.Provider = void 0;
exports.default = injectIntl;
var tslib_1 = require("tslib");
var hoist_non_react_statics_1 = tslib_1.__importDefault(require("hoist-non-react-statics"));
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
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
exports.Provider = IntlProvider;
exports.Context = IntlContext;
function injectIntl(WrappedComponent, options) {
    var _a = options || {}, _b = _a.intlPropName, intlPropName = _b === void 0 ? 'intl' : _b, _c = _a.forwardRef, forwardRef = _c === void 0 ? false : _c, _d = _a.enforceContext, enforceContext = _d === void 0 ? true : _d;
    var WithIntl = function (props) { return (React.createElement(IntlConsumer, null, function (intl) {
        var _a;
        if (enforceContext) {
            (0, utils_1.invariantIntlContext)(intl);
        }
        var intlProp = (_a = {}, _a[intlPropName] = intl, _a);
        return (React.createElement(WrappedComponent, tslib_1.__assign({}, props, intlProp, { ref: forwardRef ? props.forwardedRef : null })));
    })); };
    WithIntl.displayName = "injectIntl(".concat(getDisplayName(WrappedComponent), ")");
    WithIntl.WrappedComponent = WrappedComponent;
    if (forwardRef) {
        return (0, hoist_non_react_statics_1.default)(
        // @ts-expect-error
        React.forwardRef(function (props, ref) { return (React.createElement(WithIntl, tslib_1.__assign({}, props, { forwardedRef: ref }))); }), WrappedComponent);
    }
    return (0, hoist_non_react_statics_1.default)(WithIntl, WrappedComponent);
}
