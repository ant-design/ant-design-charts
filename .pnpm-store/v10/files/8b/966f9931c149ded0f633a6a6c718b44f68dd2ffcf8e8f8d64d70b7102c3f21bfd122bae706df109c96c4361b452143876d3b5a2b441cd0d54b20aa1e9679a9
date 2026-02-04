/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
import { __rest } from "tslib";
import * as React from 'react';
import { shallowEqual } from '../utils';
import useIntl from './useIntl';
function areEqual(prevProps, nextProps) {
    var values = prevProps.values, otherProps = __rest(prevProps, ["values"]);
    var nextValues = nextProps.values, nextOtherProps = __rest(nextProps, ["values"]);
    return (shallowEqual(nextValues, values) &&
        shallowEqual(otherProps, nextOtherProps));
}
function FormattedMessage(props) {
    var intl = useIntl();
    var formatMessage = intl.formatMessage, _a = intl.textComponent, Text = _a === void 0 ? React.Fragment : _a;
    var id = props.id, description = props.description, defaultMessage = props.defaultMessage, values = props.values, children = props.children, _b = props.tagName, Component = _b === void 0 ? Text : _b, ignoreTag = props.ignoreTag;
    var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
    var nodes = formatMessage(descriptor, values, {
        ignoreTag: ignoreTag,
    });
    if (typeof children === 'function') {
        return children(Array.isArray(nodes) ? nodes : [nodes]);
    }
    if (Component) {
        return React.createElement(Component, null, nodes);
    }
    return React.createElement(React.Fragment, null, nodes);
}
FormattedMessage.displayName = 'FormattedMessage';
var MemoizedFormattedMessage = React.memo(FormattedMessage, areEqual);
MemoizedFormattedMessage.displayName = 'MemoizedFormattedMessage';
export default MemoizedFormattedMessage;
