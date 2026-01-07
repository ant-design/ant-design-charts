"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useIntl_1 = tslib_1.__importDefault(require("./useIntl"));
var FormattedDateTimeRange = function (props) {
    var intl = (0, useIntl_1.default)();
    var from = props.from, to = props.to, children = props.children, formatProps = tslib_1.__rest(props, ["from", "to", "children"]);
    var formattedValue = intl.formatDateTimeRange(from, to, formatProps);
    if (typeof children === 'function') {
        return children(formattedValue);
    }
    var Text = intl.textComponent || React.Fragment;
    return React.createElement(Text, null, formattedValue);
};
FormattedDateTimeRange.displayName = 'FormattedDateTimeRange';
exports.default = FormattedDateTimeRange;
