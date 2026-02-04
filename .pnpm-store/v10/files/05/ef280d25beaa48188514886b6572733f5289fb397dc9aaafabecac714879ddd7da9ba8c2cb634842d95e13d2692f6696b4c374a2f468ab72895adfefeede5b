"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderLogo = exports.SimpleContent = void 0;
var _proUtils = require("@ant-design/pro-utils");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
/**
 * simple 模式渲染logo的方式
 *
 * @param logo
 * @param title
 * @returns
 */
var renderLogo = exports.renderLogo = function renderLogo(logo, title) {
  if (logo && typeof logo === 'string' && (0, _proUtils.isUrl)(logo)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  if (logo && typeof logo === 'string') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "avatarLogo",
      children: logo
    });
  }
  if (!logo && title && typeof title === 'string') {
    var symbol = title.substring(0, 1);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "avatarLogo",
      children: symbol
    });
  }
  return logo;
};
var SimpleContent = exports.SimpleContent = function SimpleContent(props) {
  var appList = props.appList,
    baseClassName = props.baseClassName,
    hashId = props.hashId,
    itemClick = props.itemClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function (app, index) {
        var _app$children;
        if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
              children: app.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SimpleContent, {
              hashId: hashId,
              itemClick: itemClick,
              appList: app === null || app === void 0 ? void 0 : app.children,
              baseClassName: baseClassName
            })]
          }, index);
        }
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
          onClick: function onClick(e) {
            e.stopPropagation();
            itemClick === null || itemClick === void 0 || itemClick(app);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            href: itemClick ? 'javascript:;' : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [renderLogo(app.icon, app.title), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: app.title
              })
            })]
          })
        }, index);
      })
    })
  });
};