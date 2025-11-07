"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiderMenu = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _SiderMenu = require("./SiderMenu");
var _index = require("./style/index");
var _jsxRuntime = require("react/jsx-runtime");
var SiderMenuWrapper = exports.SiderMenu = function SiderMenuWrapper(props) {
  var _token$layout;
  var isMobile = props.isMobile,
    siderWidth = props.siderWidth,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    style = props.style,
    className = props.className,
    hide = props.hide,
    prefixCls = props.prefixCls,
    getContainer = props.getContainer;
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    token = _useContext.token;
  (0, _react.useEffect)(function () {
    if (isMobile === true) {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);
  var omitProps = (0, _omit.default)(props, ['className', 'style']);
  var _React$useContext = _react.default.useContext(_antd.ConfigProvider.ConfigContext),
    direction = _React$useContext.direction;
  var _useStyle = (0, _index.useStyle)("".concat(prefixCls, "-sider"), {
      proLayoutCollapsedWidth: 64
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var siderClassName = (0, _classnames.default)("".concat(prefixCls, "-sider"), className, hashId);
  if (hide) {
    return null;
  }
  var drawerOpenProps = (0, _proUtils.openVisibleCompatible)(!collapsed, function () {
    return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
  });
  return wrapSSR(isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Drawer, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    placement: direction === 'rtl' ? 'right' : 'left',
    className: (0, _classnames.default)("".concat(prefixCls, "-drawer-sider"), className)
  }, drawerOpenProps), {}, {
    style: (0, _objectSpread2.default)({
      padding: 0,
      height: '100vh'
    }, style),
    onClose: function onClose() {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    },
    maskClosable: true,
    closable: false,
    getContainer: getContainer || false,
    width: siderWidth,
    styles: {
      body: {
        height: '100vh',
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, omitProps), {}, {
      isMobile: true,
      className: siderClassName,
      collapsed: isMobile ? false : collapsed,
      splitMenus: false,
      originCollapsed: collapsed
    }))
  })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    className: siderClassName,
    originCollapsed: collapsed
  }, omitProps), {}, {
    style: style
  })));
};