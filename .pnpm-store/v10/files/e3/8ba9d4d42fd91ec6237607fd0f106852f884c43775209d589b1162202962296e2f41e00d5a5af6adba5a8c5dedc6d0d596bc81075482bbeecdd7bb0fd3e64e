import { __assign } from "tslib";
export function getClassNames(prefixCls) {
    if (prefixCls === void 0) { prefixCls = ''; }
    return {
        CONTAINER: "".concat(prefixCls, "tooltip"),
        TITLE: "".concat(prefixCls, "tooltip-title"),
        LIST: "".concat(prefixCls, "tooltip-list"),
        LIST_ITEM: "".concat(prefixCls, "tooltip-list-item"),
        NAME: "".concat(prefixCls, "tooltip-list-item-name"),
        MARKER: "".concat(prefixCls, "tooltip-list-item-marker"),
        NAME_LABEL: "".concat(prefixCls, "tooltip-list-item-name-label"),
        VALUE: "".concat(prefixCls, "tooltip-list-item-value"),
        CROSSHAIR_X: "".concat(prefixCls, "tooltip-crosshair-x"),
        CROSSHAIR_Y: "".concat(prefixCls, "tooltip-crosshair-y"),
    };
}
var TEXT_OVERFLOW_STYLE = {
    overflow: 'hidden',
    'white-space': 'nowrap',
    'text-overflow': 'ellipsis',
};
export function getDefaultTooltipStyle(prefixCls) {
    var _a;
    if (prefixCls === void 0) { prefixCls = ''; }
    var CLASS_NAME = getClassNames(prefixCls);
    return _a = {},
        _a[".".concat(CLASS_NAME.CONTAINER)] = {
            position: 'absolute',
            visibility: 'visible',
            // 'white-space': 'nowrap',
            'z-index': 8,
            transition: 'visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), ' +
                'left 0.4s cubic-bezier(0.23, 1, 0.32, 1), ' +
                'top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            'background-color': 'rgba(255, 255, 255, 0.96)',
            'box-shadow': '0 6px 12px 0 rgba(0, 0, 0, 0.12)',
            'border-radius': '4px',
            color: 'rgba(0, 0, 0, 0.65)',
            'font-size': '12px',
            // 'font-family': ,
            'line-height': '20px',
            padding: '12px',
            'min-width': '120px',
            'max-width': '360px',
            'font-family': 'Roboto-Regular',
        },
        _a[".".concat(CLASS_NAME.TITLE)] = {
            color: 'rgba(0, 0, 0, 0.45)',
        },
        _a[".".concat(CLASS_NAME.LIST)] = {
            margin: '0px',
            'list-style-type': 'none',
            padding: '0px',
        },
        _a[".".concat(CLASS_NAME.LIST_ITEM)] = {
            'list-style-type': 'none',
            display: 'flex',
            'line-height': '2em',
            'align-items': 'center',
            'justify-content': 'space-between',
            'white-space': 'nowrap',
        },
        _a[".".concat(CLASS_NAME.MARKER)] = {
            width: '8px',
            height: '8px',
            'border-radius': '50%',
            display: 'inline-block',
            'margin-right': '4px',
        },
        _a[".".concat(CLASS_NAME.NAME)] = {
            display: 'flex',
            'align-items': 'center',
            'max-width': '216px',
        },
        _a[".".concat(CLASS_NAME.NAME_LABEL)] = __assign({ flex: 1 }, TEXT_OVERFLOW_STYLE),
        _a[".".concat(CLASS_NAME.VALUE)] = __assign({ display: 'inline-block', float: 'right', flex: 1, 'text-align': 'right', 'min-width': '28px', 'margin-left': '30px', color: 'rgba(0, 0, 0, 0.85)' }, TEXT_OVERFLOW_STYLE),
        _a[".".concat(CLASS_NAME.CROSSHAIR_X)] = {
            position: 'absolute',
            width: '1px',
            'background-color': 'rgba(0, 0, 0, 0.25)',
        },
        _a[".".concat(CLASS_NAME.CROSSHAIR_Y)] = {
            position: 'absolute',
            height: '1px',
            'background-color': 'rgba(0, 0, 0, 0.25)',
        },
        _a;
}
//# sourceMappingURL=constant.js.map