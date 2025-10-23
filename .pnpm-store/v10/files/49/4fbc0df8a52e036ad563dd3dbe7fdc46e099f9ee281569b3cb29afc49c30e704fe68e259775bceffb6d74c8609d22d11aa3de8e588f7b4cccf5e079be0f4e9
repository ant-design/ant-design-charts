"use strict";
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var intl_1 = require("@formatjs/intl");
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("../utils");
var createIntl_1 = require("./createIntl");
var injectIntl_1 = require("./injectIntl");
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
    tslib_1.__extends(IntlProvider, _super);
    function IntlProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = (0, intl_1.createIntlCache)();
        _this.state = {
            cache: _this.cache,
            intl: (0, createIntl_1.createIntl)(processIntlConfig(_this.props), _this.cache),
            prevConfig: processIntlConfig(_this.props),
        };
        return _this;
    }
    IntlProvider.getDerivedStateFromProps = function (props, _a) {
        var prevConfig = _a.prevConfig, cache = _a.cache;
        var config = processIntlConfig(props);
        if (!(0, utils_1.shallowEqual)(prevConfig, config)) {
            return {
                intl: (0, createIntl_1.createIntl)(config, cache),
                prevConfig: config,
            };
        }
        return null;
    };
    IntlProvider.prototype.render = function () {
        (0, utils_1.invariantIntlContext)(this.state.intl);
        return React.createElement(injectIntl_1.Provider, { value: this.state.intl }, this.props.children);
    };
    IntlProvider.displayName = 'IntlProvider';
    IntlProvider.defaultProps = utils_1.DEFAULT_INTL_CONFIG;
    return IntlProvider;
}(React.PureComponent));
exports.default = IntlProvider;
