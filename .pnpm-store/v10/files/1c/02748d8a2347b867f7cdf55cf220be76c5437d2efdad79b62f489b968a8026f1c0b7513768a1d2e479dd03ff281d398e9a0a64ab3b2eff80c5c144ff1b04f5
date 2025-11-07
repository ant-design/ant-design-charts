import { __rest } from "tslib";
import * as React from 'react';
import useIntl from './useIntl';
var FormattedDateTimeRange = function (props) {
    var intl = useIntl();
    var from = props.from, to = props.to, children = props.children, formatProps = __rest(props, ["from", "to", "children"]);
    var formattedValue = intl.formatDateTimeRange(from, to, formatProps);
    if (typeof children === 'function') {
        return children(formattedValue);
    }
    var Text = intl.textComponent || React.Fragment;
    return React.createElement(Text, null, formattedValue);
};
FormattedDateTimeRange.displayName = 'FormattedDateTimeRange';
export default FormattedDateTimeRange;
