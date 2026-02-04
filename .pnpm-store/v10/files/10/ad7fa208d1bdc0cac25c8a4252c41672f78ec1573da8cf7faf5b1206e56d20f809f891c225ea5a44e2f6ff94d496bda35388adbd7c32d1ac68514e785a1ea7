"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Column = function Column(_ref) {
  var prefixCls = _ref.prefixCls,
      icon = _ref.icon,
      title = _ref.title,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      style = _ref.style,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-column"), className),
    style: style
  }, (title || icon) && /*#__PURE__*/_react.default.createElement("h2", null, icon && /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefixCls, "-column-icon")
  }, icon), title), items.map(function (item, i) {
    var LinkComponent = item.LinkComponent || 'a';
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-item"), item.className),
      style: item.style,
      key: i
    }, /*#__PURE__*/_react.default.createElement(LinkComponent, {
      href: item.url,
      to: typeof LinkComponent !== 'string' ? item.url : undefined,
      target: item.openExternal ? '_blank' : undefined,
      rel: item.openExternal ? 'noopener noreferrer' : undefined
    }, item.icon && /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-item-icon")
    }, item.icon), item.title), item.description && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-item-separator")
    }, "-"), /*#__PURE__*/_react.default.createElement("span", {
      className: "".concat(prefixCls, "-item-description")
    }, item.description)));
  }));
};

var _default = Column;
exports.default = _default;