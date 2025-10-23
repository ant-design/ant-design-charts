"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedListParts = exports.FormattedNumberParts = void 0;
exports.createFormattedDateTimePartsComponent = createFormattedDateTimePartsComponent;
exports.createFormattedComponent = createFormattedComponent;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useIntl_1 = tslib_1.__importDefault(require("./useIntl"));
var DisplayName;
(function (DisplayName) {
    DisplayName["formatDate"] = "FormattedDate";
    DisplayName["formatTime"] = "FormattedTime";
    DisplayName["formatNumber"] = "FormattedNumber";
    DisplayName["formatList"] = "FormattedList";
    // Note that this DisplayName is the locale display name, not to be confused with
    // the name of the enum, which is for React component display name in dev tools.
    DisplayName["formatDisplayName"] = "FormattedDisplayName";
})(DisplayName || (DisplayName = {}));
var DisplayNameParts;
(function (DisplayNameParts) {
    DisplayNameParts["formatDate"] = "FormattedDateParts";
    DisplayNameParts["formatTime"] = "FormattedTimeParts";
    DisplayNameParts["formatNumber"] = "FormattedNumberParts";
    DisplayNameParts["formatList"] = "FormattedListParts";
})(DisplayNameParts || (DisplayNameParts = {}));
var FormattedNumberParts = function (props) {
    var intl = (0, useIntl_1.default)();
    var value = props.value, children = props.children, formatProps = tslib_1.__rest(props, ["value", "children"]);
    return children(intl.formatNumberToParts(value, formatProps));
};
exports.FormattedNumberParts = FormattedNumberParts;
exports.FormattedNumberParts.displayName = 'FormattedNumberParts';
var FormattedListParts = function (props) {
    var intl = (0, useIntl_1.default)();
    var value = props.value, children = props.children, formatProps = tslib_1.__rest(props, ["value", "children"]);
    return children(intl.formatListToParts(value, formatProps));
};
exports.FormattedListParts = FormattedListParts;
exports.FormattedNumberParts.displayName = 'FormattedNumberParts';
function createFormattedDateTimePartsComponent(name) {
    var ComponentParts = function (props) {
        var intl = (0, useIntl_1.default)();
        var value = props.value, children = props.children, formatProps = tslib_1.__rest(props, ["value", "children"]);
        var date = typeof value === 'string' ? new Date(value || 0) : value;
        var formattedParts = name === 'formatDate'
            ? intl.formatDateToParts(date, formatProps)
            : intl.formatTimeToParts(date, formatProps);
        return children(formattedParts);
    };
    ComponentParts.displayName = DisplayNameParts[name];
    return ComponentParts;
}
function createFormattedComponent(name) {
    var Component = function (props) {
        var intl = (0, useIntl_1.default)();
        var value = props.value, children = props.children, formatProps = tslib_1.__rest(props
        // TODO: fix TS type definition for localeMatcher upstream
        , ["value", "children"]);
        // TODO: fix TS type definition for localeMatcher upstream
        var formattedValue = intl[name](value, formatProps);
        if (typeof children === 'function') {
            return children(formattedValue);
        }
        var Text = intl.textComponent || React.Fragment;
        return React.createElement(Text, null, formattedValue);
    };
    Component.displayName = DisplayName[name];
    return Component;
}
