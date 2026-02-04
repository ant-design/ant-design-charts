"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartLoading = void 0;
var react_1 = __importDefault(require("react"));
var shadowLoading = function (ele) {
    if (typeof document === 'undefined') {
        return 'loading';
    }
    var shadowRoot = ele.attachShadow({ mode: 'open' });
    var shadowDiv = document.createElement('div');
    var shadowStyle = document.createElement('style');
    shadowStyle.innerHTML = ".loading {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .loading div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #ccc;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .loading div:nth-child(1) {\n    left: 8px;\n    animation: loading1 0.6s infinite;\n  }\n  .loading div:nth-child(2) {\n    left: 8px;\n    animation: loading2 0.6s infinite;\n  }\n  .loading div:nth-child(3) {\n    left: 32px;\n    animation: loading2 0.6s infinite;\n  }\n  .loading div:nth-child(4) {\n    left: 56px;\n    animation: loading3 0.6s infinite;\n  }\n  @keyframes loading1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes loading3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes loading2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n  ";
    shadowDiv.classList.add('loading');
    shadowDiv.innerHTML = '<div></div><div></div><div></div><div></div>';
    shadowRoot.appendChild(shadowStyle);
    shadowRoot.appendChild(shadowDiv);
};
var ChartLoading = function (_a) {
    var loadingTemplate = _a.loadingTemplate, _b = _a.theme, theme = _b === void 0 ? 'light' : _b;
    var shadow = react_1.default.useRef(null);
    react_1.default.useEffect(function () {
        if (!loadingTemplate && shadow.current) {
            shadowLoading(shadow.current);
        }
    }, []);
    var renderLoading = function () {
        if (loadingTemplate)
            return loadingTemplate;
        return react_1.default.createElement("div", { ref: shadow });
    };
    return (react_1.default.createElement("div", { className: "charts-loading-container", style: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            top: 0,
            zIndex: 99,
            backgroundColor: theme === 'dark' ? 'rgb(20, 20, 20)' : 'rgb(255, 255, 255)',
        } }, renderLoading()));
};
exports.ChartLoading = ChartLoading;
