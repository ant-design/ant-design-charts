"use strict";
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
var useIntl_1 = tslib_1.__importDefault(require("./useIntl"));
function areEqual(prevProps, nextProps) {
    var values = prevProps.values, otherProps = tslib_1.__rest(prevProps, ["values"]);
    var nextValues = nextProps.values, nextOtherProps = tslib_1.__rest(nextProps, ["values"]);
    return ((0, utils_1.shallowEqual)(nextValues, values) &&
        (0, utils_1.shallowEqual)(otherProps, nextOtherProps));
}
function FormattedMessage(props) {
    var intl = (0, useIntl_1.default)();
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
exports.default = MemoizedFormattedMessage;
