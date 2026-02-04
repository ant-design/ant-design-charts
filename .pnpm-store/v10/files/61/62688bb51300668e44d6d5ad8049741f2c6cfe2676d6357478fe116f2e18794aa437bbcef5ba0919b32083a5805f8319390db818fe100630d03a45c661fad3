"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));
var _react = _interopRequireDefault(require("react"));
const stopPropagation = e => {
  e.stopPropagation();
};
const ConversationsItem = props => {
  const {
    prefixCls,
    info,
    className,
    direction,
    onClick,
    active,
    menu,
    ...restProps
  } = props;
  const domProps = (0, _pickAttrs.default)(restProps, {
    aria: true,
    data: true,
    attr: true
  });

  // ============================= MISC =============================
  const {
    disabled
  } = info;

  // ============================ Style =============================
  const mergedCls = (0, _classnames.default)(className, `${prefixCls}-item`, {
    [`${prefixCls}-item-active`]: active && !disabled
  }, {
    [`${prefixCls}-item-disabled`]: disabled
  });

  // ============================ Events ============================
  const onInternalClick = () => {
    if (!disabled && onClick) {
      onClick(info);
    }
  };

  // ============================ Menu ============================

  const {
    trigger,
    ...dropdownMenu
  } = menu || {};
  const getPopupContainer = dropdownMenu?.getPopupContainer;
  const renderMenuTrigger = conversation => {
    const originTriggerNode = /*#__PURE__*/_react.default.createElement(_icons.EllipsisOutlined, {
      onClick: stopPropagation,
      className: `${prefixCls}-menu-icon`
    });
    if (trigger) {
      return typeof trigger === 'function' ? trigger(conversation, {
        originNode: originTriggerNode
      }) : trigger;
    }
    return originTriggerNode;
  };

  // ============================ Render ============================
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    title: typeof info.label === 'object' ? undefined : `${info.label}`
  }, domProps, {
    className: mergedCls,
    onClick: onInternalClick
  }), info.icon && /*#__PURE__*/_react.default.createElement("div", {
    className: `${prefixCls}-icon`
  }, info.icon), /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    className: `${prefixCls}-label`
  }, info.label), !disabled && menu && /*#__PURE__*/_react.default.createElement("div", {
    onClick: stopPropagation
  }, /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    menu: dropdownMenu,
    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight',
    trigger: ['click'],
    disabled: disabled,
    getPopupContainer: getPopupContainer
  }, renderMenuTrigger(info))));
};
var _default = exports.default = ConversationsItem;