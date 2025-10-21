"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSelector = void 0;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var context_1 = require("../../context");
require("./index.less");
var LayoutSelector = function (props) {
    var value = props.value, onChange = props.onChange, options = props.options;
    var _a = (0, context_1.useGraphin)(), graph = _a.graph, isReady = _a.isReady;
    return (react_1.default.createElement("div", { className: "graphin-layout-selector" },
        react_1.default.createElement(antd_1.Spin, { spinning: !isReady },
            react_1.default.createElement(antd_1.Select, { className: "selector", value: value, onChange: onChange }, options.map(function (item) {
                var type = item.type, label = item.label, icon = item.icon;
                return (react_1.default.createElement(antd_1.Select.Option, { key: type, value: type },
                    icon,
                    " \u00A0",
                    label || type));
            })))));
};
exports.LayoutSelector = LayoutSelector;
