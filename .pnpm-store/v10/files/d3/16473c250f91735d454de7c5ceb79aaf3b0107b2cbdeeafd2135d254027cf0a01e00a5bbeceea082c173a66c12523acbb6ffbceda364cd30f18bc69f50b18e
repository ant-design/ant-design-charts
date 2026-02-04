"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalHeader = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils/utils");
var _AppsLogoComponents = require("../AppsLogoComponents");
var _SiderMenu = require("../SiderMenu/SiderMenu");
var _TopNavHeader = require("../TopNavHeader");
var _ActionsContent = require("./ActionsContent");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var renderLogo = function renderLogo(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }
  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }
  return logoDom;
};
var GlobalHeader = exports.GlobalHeader = function GlobalHeader(props) {
  var isMobile = props.isMobile,
    logo = props.logo,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    rightContentRender = props.rightContentRender,
    menuHeaderRender = props.menuHeaderRender,
    onMenuHeaderClick = props.onMenuHeaderClick,
    propClassName = props.className,
    style = props.style,
    layout = props.layout,
    children = props.children,
    splitMenus = props.splitMenus,
    menuData = props.menuData,
    prefixCls = props.prefixCls;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var baseClassName = "".concat(prefixCls || getPrefixCls('pro'), "-global-header");
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = (0, _classnames.default)(propClassName, baseClassName, hashId);
  if (layout === 'mix' && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        children: undefined,
        routes: undefined
      });
    });
    var clearMenuData = (0, _utils.clearMenuItem)(noChildrenMenuData);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopNavHeader.TopNavHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      mode: "horizontal"
    }, props), {}, {
      splitMenus: false,
      menuData: clearMenuData
    }));
  }
  var logoClassNames = (0, _classnames.default)("".concat(baseClassName, "-logo"), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(baseClassName, "-logo-rtl"), direction === 'rtl'), "".concat(baseClassName, "-logo-mix"), layout === 'mix'), "".concat(baseClassName, "-logo-mobile"), isMobile));
  var logoDom = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: logoClassNames,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      children: (0, _AppsLogoComponents.defaultRenderLogo)(logo)
    })
  }, "logo");
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    style: (0, _objectSpread2.default)({}, style),
    children: [isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "".concat(baseClassName, "-collapsed-button ").concat(hashId).trim(),
      onClick: function onClick() {
        onCollapse === null || onCollapse === void 0 || onCollapse(!collapsed);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.MenuOutlined, {})
    }), isMobile && renderLogo(menuHeaderRender, logoDom), layout === 'mix' && !isMobile && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_AppsLogoComponents.AppsLogoComponents, (0, _objectSpread2.default)({}, props)), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: logoClassNames,
        onClick: onMenuHeaderClick,
        children: (0, _SiderMenu.renderLogoAndTitle)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          collapsed: false
        }), 'headerTitleRender')
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        flex: 1
      },
      children: children
    }), (rightContentRender || props.actionsRender || props.avatarProps) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ActionsContent.ActionsContent, (0, _objectSpread2.default)({
      rightContentRender: rightContentRender
    }, props))]
  }));
};