import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["prefixCls", "className", "style", "bottom", "columns", "maxColumnsPerRow", "backgroundColor", "columnLayout", "theme"];
import React from 'react';
import classNames from 'classnames';
import Column from './column';

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
      restProps = _objectWithoutProperties(_ref, _excluded);

  var footerClassName = classNames("".concat(prefixCls), className, _defineProperty({}, "".concat(prefixCls, "-").concat(theme), !!theme));
  var shouldWrap = typeof maxColumnsPerRow === 'number' && maxColumnsPerRow > 0;
  return /*#__PURE__*/React.createElement("footer", _objectSpread(_objectSpread({}, restProps), {}, {
    className: footerClassName,
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundColor: backgroundColor
    })
  }), /*#__PURE__*/React.createElement("section", {
    className: "".concat(prefixCls, "-container")
  }, columns && columns.length > 0 && /*#__PURE__*/React.createElement("section", {
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

    var styleObject = _objectSpread({}, columnStyle);

    if (shouldWrap) {
      styleObject.flex = "0 0 ".concat(100 / (maxColumnsPerRow + 1) + 0.1, "%");
    }

    return /*#__PURE__*/React.createElement(Column, {
      key: i,
      prefixCls: prefixCls,
      title: title,
      icon: icon,
      items: items,
      style: styleObject,
      className: columnClassName
    });
  }))), bottom && /*#__PURE__*/React.createElement("section", {
    className: "".concat(prefixCls, "-bottom")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-bottom-container")
  }, bottom)));
};

export default Footer;