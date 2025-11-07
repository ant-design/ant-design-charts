"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
var react_1 = __importStar(require("react"));
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
                    return errorTemplate ? errorTemplate : react_1.default.createElement("h5", null,
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
        return react_1.default.createElement(react_1.Fragment, null, this.props.children);
    };
    return ErrorBoundary;
}(react_1.default.Component));
exports.ErrorBoundary = ErrorBoundary;
