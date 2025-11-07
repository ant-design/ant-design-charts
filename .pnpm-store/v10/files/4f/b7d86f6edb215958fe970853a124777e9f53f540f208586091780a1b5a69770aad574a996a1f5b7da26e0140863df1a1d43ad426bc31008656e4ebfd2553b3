"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
var _react = _interopRequireDefault(require("react"));
var _useXComponentConfig = _interopRequireDefault(require("../_util/hooks/use-x-component-config"));
var _xProvider = require("../x-provider");
var _ActionMenu = _interopRequireDefault(require("./ActionMenu"));
var _style = _interopRequireDefault(require("./style"));
const Actions = props => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName = {},
    style = {},
    variant = 'borderless',
    block = false,
    onClick,
    items = [],
    ...otherHtmlProps
  } = props;
  const domProps = (0, _pickAttrs.default)(otherHtmlProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ============================ PrefixCls ============================
  const {
    getPrefixCls,
    direction
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('actions', customizePrefixCls);

  // ======================= Component Config =======================
  const contextConfig = (0, _useXComponentConfig.default)('actions');

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = (0, _style.default)(prefixCls);
  const mergedCls = (0, _classnames.default)(prefixCls, contextConfig.className, rootClassName, cssVarCls, hashId, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const mergedStyle = {
    ...contextConfig.style,
    ...style
  };
  const getTooltipNode = (node, title, tooltipProps) => {
    if (title) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, (0, _extends2.default)({}, tooltipProps, {
        title: title
      }), node);
    }
    return node;
  };
  const handleItemClick = (key, item, domEvent) => {
    if (item.onItemClick) {
      item.onItemClick(item);
      return;
    }
    onClick?.({
      key,
      item,
      keyPath: [key],
      domEvent
    });
  };
  const renderSingleItem = item => {
    const {
      icon,
      label,
      key
    } = item;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(`${prefixCls}-list-item`),
      onClick: domEvent => handleItemClick(key, item, domEvent),
      key: key
    }, getTooltipNode( /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-list-item-icon`
    }, icon), label));
  };
  return wrapCSSVar( /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: mergedCls
  }, domProps, {
    style: mergedStyle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${prefixCls}-list`, variant, block)
  }, items.map(item => {
    if ('children' in item) {
      return /*#__PURE__*/_react.default.createElement(_ActionMenu.default, {
        key: item.key,
        item: item,
        prefixCls: prefixCls,
        onClick: onClick
      });
    }
    return renderSingleItem(item);
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  Actions.displayName = 'Actions';
}
var _default = exports.default = Actions;