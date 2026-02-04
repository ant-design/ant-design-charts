var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Fragment } from 'react';
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false,
        };
        _this.renderError = function (e) {
            var errorTemplate = _this.props.errorTemplate;
            switch (e) {
                default:
                    if (typeof errorTemplate === 'function')
                        return errorTemplate(e);
                    return errorTemplate ? errorTemplate : React.createElement("h5", null,
                        "\u7EC4\u4EF6\u51FA\u9519\u4E86\uFF0C\u8BF7\u6838\u67E5\u540E\u91CD\u8BD5\uFF1A ",
                        e.message);
            }
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return { hasError: true, error: error };
    };
    ErrorBoundary.getDerivedStateFromProps = function (nextProps, state) {
        if (state.children !== nextProps.children) {
            return {
                children: nextProps.children,
                hasError: false,
                error: undefined,
            };
        }
        return null;
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.hasError) {
            return this.renderError(this.state.error);
        }
        return React.createElement(Fragment, null, this.props.children);
    };
    return ErrorBoundary;
}(React.Component));
export { ErrorBoundary };
