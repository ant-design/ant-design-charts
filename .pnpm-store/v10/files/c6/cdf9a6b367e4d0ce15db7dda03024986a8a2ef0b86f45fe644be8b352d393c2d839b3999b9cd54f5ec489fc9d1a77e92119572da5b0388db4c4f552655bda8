"use strict";
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var useIntl_1 = tslib_1.__importDefault(require("./useIntl"));
var FormattedPlural = function (props) {
    var _a = (0, useIntl_1.default)(), formatPlural = _a.formatPlural, Text = _a.textComponent;
    var value = props.value, other = props.other, children = props.children;
    var pluralCategory = formatPlural(value, props);
    var formattedPlural = props[pluralCategory] || other;
    if (typeof children === 'function') {
        return children(formattedPlural);
    }
    if (Text) {
        return React.createElement(Text, null, formattedPlural);
    }
    // Work around @types/react where React.FC cannot return string
    return formattedPlural;
};
FormattedPlural.displayName = 'FormattedPlural';
exports.default = FormattedPlural;
