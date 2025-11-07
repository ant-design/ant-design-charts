import React from 'react';
import classNames from 'classnames';

var Column = function Column(_ref) {
  var prefixCls = _ref.prefixCls,
      icon = _ref.icon,
      title = _ref.title,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      style = _ref.style,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-column"), className),
    style: style
  }, (title || icon) && /*#__PURE__*/React.createElement("h2", null, icon && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-column-icon")
  }, icon), title), items.map(function (item, i) {
    var LinkComponent = item.LinkComponent || 'a';
    return /*#__PURE__*/React.createElement("div", {
      className: classNames("".concat(prefixCls, "-item"), item.className),
      style: item.style,
      key: i
    }, /*#__PURE__*/React.createElement(LinkComponent, {
      href: item.url,
      to: typeof LinkComponent !== 'string' ? item.url : undefined,
      target: item.openExternal ? '_blank' : undefined,
      rel: item.openExternal ? 'noopener noreferrer' : undefined
    }, item.icon && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-item-icon")
    }, item.icon), item.title), item.description && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-item-separator")
    }, "-"), /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-item-description")
    }, item.description)));
  }));
};

export default Column;