/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
import * as React from 'react';
import useIntl from './useIntl';
var FormattedPlural = function (props) {
    var _a = useIntl(), formatPlural = _a.formatPlural, Text = _a.textComponent;
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
export default FormattedPlural;
