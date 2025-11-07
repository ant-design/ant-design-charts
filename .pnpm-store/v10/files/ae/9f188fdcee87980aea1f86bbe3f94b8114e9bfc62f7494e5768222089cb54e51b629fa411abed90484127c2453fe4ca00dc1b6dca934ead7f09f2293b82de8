/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
import { __extends } from "tslib";
import { createIntlCache } from '@formatjs/intl';
import * as React from 'react';
import { DEFAULT_INTL_CONFIG, invariantIntlContext, shallowEqual, } from '../utils';
import { createIntl } from './createIntl';
import { Provider } from './injectIntl';
function processIntlConfig(config) {
    return {
        locale: config.locale,
        timeZone: config.timeZone,
        fallbackOnEmptyString: config.fallbackOnEmptyString,
        formats: config.formats,
        textComponent: config.textComponent,
        messages: config.messages,
        defaultLocale: config.defaultLocale,
        defaultFormats: config.defaultFormats,
        onError: config.onError,
        onWarn: config.onWarn,
        wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
        defaultRichTextElements: config.defaultRichTextElements,
    };
}
var IntlProvider = /** @class */ (function (_super) {
    __extends(IntlProvider, _super);
    function IntlProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = createIntlCache();
        _this.state = {
            cache: _this.cache,
            intl: createIntl(processIntlConfig(_this.props), _this.cache),
            prevConfig: processIntlConfig(_this.props),
        };
        return _this;
    }
    IntlProvider.getDerivedStateFromProps = function (props, _a) {
        var prevConfig = _a.prevConfig, cache = _a.cache;
        var config = processIntlConfig(props);
        if (!shallowEqual(prevConfig, config)) {
            return {
                intl: createIntl(config, cache),
                prevConfig: config,
            };
        }
        return null;
    };
    IntlProvider.prototype.render = function () {
        invariantIntlContext(this.state.intl);
        return React.createElement(Provider, { value: this.state.intl }, this.props.children);
    };
    IntlProvider.displayName = 'IntlProvider';
    IntlProvider.defaultProps = DEFAULT_INTL_CONFIG;
    return IntlProvider;
}(React.PureComponent));
export default IntlProvider;
