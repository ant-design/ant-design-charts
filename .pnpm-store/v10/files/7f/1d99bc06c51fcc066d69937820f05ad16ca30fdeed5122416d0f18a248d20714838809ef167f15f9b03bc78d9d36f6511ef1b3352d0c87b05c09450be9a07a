"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _column = _interopRequireDefault(require("./column"));

var _excluded = ["prefixCls", "className", "style", "bottom", "columns", "maxColumnsPerRow", "backgroundColor", "columnLayout", "theme"];

var Footer = function Footer(_ref) {
  var _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-footer' : _ref$prefixCls,
      className = _ref.className,
      style = _ref.style,
      bottom = _ref.bottom,
      columns = _ref.columns,
      maxColumnsPerRow = _ref.maxColumnsPerRow,
      backgroundColor = _ref.backgroundColor,
      columnLayout = _ref.columnLayout,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'dark' : _ref$theme,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var footerClassName = (0, _classnames.default)("".concat(prefixCls), className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-").concat(theme), !!theme));
  var shouldWrap = typeof maxColumnsPerRow === 'number' && maxColumnsPerRow > 0;
  return /*#__PURE__*/_react.default.createElement("footer", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
    className: footerClassName,
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
      backgroundColor: backgroundColor
    })
  }), /*#__PURE__*/_react.default.createElement("section", {
    className: "".concat(prefixCls, "-container")
  }, columns && columns.length > 0 && /*#__PURE__*/_react.default.createElement("section", {
    className: "".concat(prefixCls, "-columns"),
    style: {
      justifyContent: columnLayout,
      flexWrap: shouldWrap ? 'wrap' : undefined
    }
  }, columns.map(function (_ref2, i) {
    var title = _ref2.title,
        icon = _ref2.icon,
        columnStyle = _ref2.style,
        columnClassName = _ref2.className,
        _ref2$items = _ref2.items,
        items = _ref2$items === void 0 ? [] : _ref2$items;
    var styleObject = (0, _objectSpread2.default)({}, columnStyle);

    if (shouldWrap) {
      styleObject.flex = "0 0 ".concat(100 / (maxColumnsPerRow + 1) + 0.1, "%");
    }

    return /*#__PURE__*/_react.default.createElement(_column.default, {
      key: i,
      prefixCls: prefixCls,
      title: title,
      icon: icon,
      items: items,
      style: styleObject,
      className: columnClassName
    });
  }))), bottom && /*#__PURE__*/_react.default.createElement("section", {
    className: "".concat(prefixCls, "-bottom")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-bottom-container")
  }, bottom)));
};

var _default = Footer;
exports.default = _default;