import { Select, Spin } from 'antd';
import React from 'react';
import { useGraphin } from '../../context';
import './index.less';
export var LayoutSelector = function (props) {
    var value = props.value, onChange = props.onChange, options = props.options;
    var _a = useGraphin(), graph = _a.graph, isReady = _a.isReady;
    return (React.createElement("div", { className: "graphin-layout-selector" },
        React.createElement(Spin, { spinning: !isReady },
            React.createElement(Select, { className: "selector", value: value, onChange: onChange }, options.map(function (item) {
                var type = item.type, label = item.label, icon = item.icon;
                return (React.createElement(Select.Option, { key: type, value: type },
                    icon,
                    " \u00A0",
                    label || type));
            })))));
};
