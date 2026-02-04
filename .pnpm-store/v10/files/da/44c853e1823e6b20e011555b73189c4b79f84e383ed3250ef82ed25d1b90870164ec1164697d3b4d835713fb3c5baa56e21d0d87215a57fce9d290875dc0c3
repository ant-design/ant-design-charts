"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultHeader = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils/utils");
var _GlobalHeader = require("../GlobalHeader");
var _TopNavHeader = require("../TopNavHeader");
var _header = require("./style/header");
var _stylish = require("./style/stylish");
var _jsxRuntime = require("react/jsx-runtime");
var Header = _antd.Layout.Header;
var DefaultHeader = exports.DefaultHeader = function DefaultHeader(props) {
  var _token$layout2, _token$layout3, _token$layout4;
  var isMobile = props.isMobile,
    fixedHeader = props.fixedHeader,
    propsClassName = props.className,
    style = props.style,
    collapsed = props.collapsed,
    prefixCls = props.prefixCls,
    onCollapse = props.onCollapse,
    layout = props.layout,
    headerRender = props.headerRender,
    headerContentRender = props.headerContentRender;
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    token = _useContext.token;
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isFixedHeaderScroll = _useState2[0],
    setIsFixedHeaderScroll = _useState2[1];
  var needFixedHeader = fixedHeader || layout === 'mix';
  var renderContent = (0, _react.useCallback)(function () {
    var isTop = layout === 'top';
    var clearMenuData = (0, _utils.clearMenuItem)(props.menuData || []);
    var defaultDom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_GlobalHeader.GlobalHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      onCollapse: onCollapse
    }, props), {}, {
      menuData: clearMenuData,
      children: headerContentRender && headerContentRender(props, null)
    }));
    if (isTop && !isMobile) {
      defaultDom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopNavHeader.TopNavHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        mode: "horizontal",
        onCollapse: onCollapse
      }, props), {}, {
        menuData: clearMenuData
      }));
    }
    if (headerRender && typeof headerRender === 'function') {
      return headerRender(props, defaultDom);
    }
    return defaultDom;
  }, [headerContentRender, headerRender, isMobile, layout, onCollapse, props]);
  (0, _react.useEffect)(function () {
    var _context$getTargetCon;
    var dom = (context === null || context === void 0 || (_context$getTargetCon = context.getTargetContainer) === null || _context$getTargetCon === void 0 ? void 0 : _context$getTargetCon.call(context)) || document.body;
    var isFixedHeaderFn = function isFixedHeaderFn() {
      var _token$layout;
      var scrollTop = dom.scrollTop;
      if (scrollTop > (((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56) && !isFixedHeaderScroll) {
        setIsFixedHeaderScroll(true);
        return true;
      }
      if (isFixedHeaderScroll) {
        setIsFixedHeaderScroll(false);
      }
      return false;
    };
    if (!needFixedHeader) return;
    if (typeof window === 'undefined') return;
    dom.addEventListener('scroll', isFixedHeaderFn, {
      passive: true
    });
    return function () {
      dom.removeEventListener('scroll', isFixedHeaderFn);
    };
  }, [(_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader, needFixedHeader, isFixedHeaderScroll]);
  var isTop = layout === 'top';
  var baseClassName = "".concat(prefixCls, "-layout-header");
  var _useStyle = (0, _header.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var stylish = (0, _stylish.useStylish)("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    proLayoutCollapsedWidth: 64,
    stylish: props.stylish
  });
  var className = (0, _classnames.default)(propsClassName, hashId, baseClassName, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(baseClassName, "-fixed-header"), needFixedHeader), "".concat(baseClassName, "-fixed-header-scroll"), isFixedHeaderScroll), "".concat(baseClassName, "-mix"), layout === 'mix'), "".concat(baseClassName, "-fixed-header-action"), !collapsed), "".concat(baseClassName, "-top-menu"), isTop), "".concat(baseClassName, "-header"), true), "".concat(baseClassName, "-stylish"), !!props.stylish));
  if (layout === 'side' && !isMobile) return null;
  return stylish.wrapSSR(wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.ConfigProvider
    // @ts-ignore
    , {
      theme: {
        hashed: (0, _proProvider.isNeedOpenHash)(),
        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent'
          }
        }
      },
      children: [needFixedHeader && /*#__PURE__*/(0, _jsxRuntime.jsx)(Header, {
        style: (0, _objectSpread2.default)({
          height: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.heightLayoutHeader) || 56,
          lineHeight: "".concat(((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.heightLayoutHeader) || 56, "px"),
          backgroundColor: 'transparent',
          zIndex: 19
        }, style)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Header, {
        className: className,
        style: style,
        children: renderContent()
      })]
    })
  })));
};