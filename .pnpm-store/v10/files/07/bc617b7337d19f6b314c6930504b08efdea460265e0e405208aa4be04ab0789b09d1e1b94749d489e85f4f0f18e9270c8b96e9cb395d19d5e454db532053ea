import { isUrl } from '@ant-design/pro-utils';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * simple 模式渲染logo的方式
 *
 * @param logo
 * @param title
 * @returns
 */
export var renderLogo = function renderLogo(logo, title) {
  if (logo && typeof logo === 'string' && isUrl(logo)) {
    return /*#__PURE__*/_jsx("img", {
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  if (logo && typeof logo === 'string') {
    return /*#__PURE__*/_jsx("div", {
      id: "avatarLogo",
      children: logo
    });
  }
  if (!logo && title && typeof title === 'string') {
    var symbol = title.substring(0, 1);
    return /*#__PURE__*/_jsx("div", {
      id: "avatarLogo",
      children: symbol
    });
  }
  return logo;
};
export var SimpleContent = function SimpleContent(props) {
  var appList = props.appList,
    baseClassName = props.baseClassName,
    hashId = props.hashId,
    itemClick = props.itemClick;
  return /*#__PURE__*/_jsx("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
    children: /*#__PURE__*/_jsx("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function (app, index) {
        var _app$children;
        if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) {
          return /*#__PURE__*/_jsxs("div", {
            className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
            children: [/*#__PURE__*/_jsx("div", {
              className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
              children: app.title
            }), /*#__PURE__*/_jsx(SimpleContent, {
              hashId: hashId,
              itemClick: itemClick,
              appList: app === null || app === void 0 ? void 0 : app.children,
              baseClassName: baseClassName
            })]
          }, index);
        }
        return /*#__PURE__*/_jsx("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
          onClick: function onClick(e) {
            e.stopPropagation();
            itemClick === null || itemClick === void 0 || itemClick(app);
          },
          children: /*#__PURE__*/_jsxs("a", {
            href: itemClick ? 'javascript:;' : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [renderLogo(app.icon, app.title), /*#__PURE__*/_jsx("div", {
              children: /*#__PURE__*/_jsx("div", {
                children: app.title
              })
            })]
          })
        }, index);
      })
    })
  });
};