"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProLayout = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _routeUtils = require("@umijs/route-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _warning = _interopRequireDefault(require("rc-util/lib/warning"));
var _react = _interopRequireWildcard(require("react"));
var _swr = _interopRequireWildcard(require("swr"));
var _WrapContent = require("./WrapContent");
var _Logo = require("./assert/Logo");
var _Footer = require("./components/Footer");
var _Header = require("./components/Header");
var _PageLoading = require("./components/PageLoading");
var _SiderMenu = require("./components/SiderMenu");
var _RouteContext = require("./context/RouteContext");
var _defaultSettings = require("./defaultSettings");
var _getPageTitle = require("./getPageTitle");
var _locales = require("./locales");
var _style = require("./style");
var _getBreadcrumbProps = require("./utils/getBreadcrumbProps");
var _getMenuData = require("./utils/getMenuData");
var _useCurrentMenuLayoutProps = require("./utils/useCurrentMenuLayoutProps");
var _utils = require("./utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["id", "defaultMessage"],
  _excluded2 = ["fixSiderbar", "navTheme", "layout"];
var layoutIndex = 0;
var headerRender = function headerRender(props, matchMenuKeys) {
  var _props$stylish;
  if (props.headerRender === false || props.pure) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.DefaultHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    matchMenuKeys: matchMenuKeys
  }, props), {}, {
    stylish: (_props$stylish = props.stylish) === null || _props$stylish === void 0 ? void 0 : _props$stylish.header
  }));
};
var footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }
  if (props.footerRender) {
    return props.footerRender((0, _objectSpread2.default)({}, props), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.DefaultFooter, {}));
  }
  return null;
};
var renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
  var _props$stylish3;
  var layout = props.layout,
    isMobile = props.isMobile,
    selectedKeys = props.selectedKeys,
    openKeys = props.openKeys,
    splitMenus = props.splitMenus,
    suppressSiderWhenMenuEmpty = props.suppressSiderWhenMenuEmpty,
    menuRender = props.menuRender;
  if (props.menuRender === false || props.pure) {
    return null;
  }
  var menuData = props.menuData;

  /** 如果是分割菜单模式，需要专门实现一下 */
  if (splitMenus && (openKeys !== false || layout === 'mix') && !isMobile) {
    var _ref = selectedKeys || matchMenuKeys,
      _ref2 = (0, _slicedToArray2.default)(_ref, 1),
      key = _ref2[0];
    if (key) {
      var _props$menuData;
      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 || (_props$menuData = _props$menuData.find(function (item) {
        return item.key === key;
      })) === null || _props$menuData === void 0 ? void 0 : _props$menuData.children) || [];
    } else {
      menuData = [];
    }
  }
  // 这里走了可以少一次循环
  var clearMenuData = (0, _utils.clearMenuItem)(menuData || []);
  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && (splitMenus || suppressSiderWhenMenuEmpty)) {
    return null;
  }
  if (layout === 'top' && !isMobile) {
    var _props$stylish2;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      matchMenuKeys: matchMenuKeys
    }, props), {}, {
      hide: true,
      stylish: (_props$stylish2 = props.stylish) === null || _props$stylish2 === void 0 ? void 0 : _props$stylish2.sider
    }));
  }
  var defaultDom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    matchMenuKeys: matchMenuKeys
  }, props), {}, {
    // 这里走了可以少一次循环
    menuData: clearMenuData,
    stylish: (_props$stylish3 = props.stylish) === null || _props$stylish3 === void 0 ? void 0 : _props$stylish3.sider
  }));
  if (menuRender) {
    return menuRender(props, defaultDom);
  }
  return defaultDom;
};
var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = (0, _getPageTitle.getPageTitleInfo)(pageProps);
  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: ''
    };
  }
  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);
    if (typeof title === 'string') {
      return (0, _getPageTitle.getPageTitleInfo)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageTitleInfo), {}, {
        title: title
      }));
    }
    (0, _warning.default)(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
  }
  return pageTitleInfo;
};
var getPaddingInlineStart = function getPaddingInlineStart(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 64 : siderWidth;
  }
  return 0;
};

/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */
var BaseProLayout = function BaseProLayout(props) {
  var _props$prefixCls, _location$pathname, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12;
  var _ref3 = props || {},
    children = _ref3.children,
    propsOnCollapse = _ref3.onCollapse,
    _ref3$location = _ref3.location,
    location = _ref3$location === void 0 ? {
      pathname: '/'
    } : _ref3$location,
    contentStyle = _ref3.contentStyle,
    route = _ref3.route,
    defaultCollapsed = _ref3.defaultCollapsed,
    style = _ref3.style,
    propsSiderWidth = _ref3.siderWidth,
    menu = _ref3.menu,
    siderMenuType = _ref3.siderMenuType,
    propsIsChildrenLayout = _ref3.isChildrenLayout,
    menuDataRender = _ref3.menuDataRender,
    actionRef = _ref3.actionRef,
    bgLayoutImgList = _ref3.bgLayoutImgList,
    propsFormatMessage = _ref3.formatMessage,
    loading = _ref3.loading;
  var siderWidth = (0, _react.useMemo)(function () {
    if (propsSiderWidth) return propsSiderWidth;
    if (props.layout === 'mix') return 215;
    return 256;
  }, [props.layout, propsSiderWidth]);
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(false, {
      value: menu === null || menu === void 0 ? void 0 : menu.loading,
      onChange: menu === null || menu === void 0 ? void 0 : menu.onLoadingChange
    }),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
    menuLoading = _useMountMergeState2[0],
    setMenuLoading = _useMountMergeState2[1];

  // give a default key for swr
  var _useState = (0, _react.useState)(function () {
      layoutIndex += 1;
      return "pro-layout-".concat(layoutIndex);
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 1),
    defaultId = _useState2[0];

  /**
   * 处理国际化相关 formatMessage
   * 如果有用户配置的以用户为主
   * 如果没有用自己实现的
   */
  var formatMessage = (0, _react.useCallback)(function (_ref4) {
    var id = _ref4.id,
      defaultMessage = _ref4.defaultMessage,
      restParams = (0, _objectWithoutProperties2.default)(_ref4, _excluded);
    if (propsFormatMessage) {
      return propsFormatMessage((0, _objectSpread2.default)({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }
    var locales = (0, _locales.gLocaleObject)();
    return locales[id] ? locales[id] : defaultMessage;
  }, [propsFormatMessage]);
  var _useSWR = (0, _swr.default)([defaultId, menu === null || menu === void 0 ? void 0 : menu.params], /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(_ref5) {
        var _menu$request;
        var _ref7, params, menuDataItems;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref7 = (0, _slicedToArray2.default)(_ref5, 2), params = _ref7[1];
              setMenuLoading(true);
              _context.next = 4;
              return menu === null || menu === void 0 || (_menu$request = menu.request) === null || _menu$request === void 0 ? void 0 : _menu$request.call(menu, params || {}, (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || []);
            case 4:
              menuDataItems = _context.sent;
              setMenuLoading(false);
              return _context.abrupt("return", menuDataItems);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }(), {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false
    }),
    data = _useSWR.data,
    mutate = _useSWR.mutate,
    isLoading = _useSWR.isLoading;
  (0, _react.useEffect)(function () {
    setMenuLoading(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  var _useSWRConfig = (0, _swr.useSWRConfig)(),
    cache = _useSWRConfig.cache;
  (0, _react.useEffect)(function () {
    return function () {
      if (cache instanceof Map) cache.delete(defaultId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var menuInfoData = (0, _react.useMemo)(function () {
    return (0, _getMenuData.getMenuData)(data || (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }, [formatMessage, menu, menuDataRender, data, route === null || route === void 0 ? void 0 : route.children, route === null || route === void 0 ? void 0 : route.routes]);
  var _ref8 = menuInfoData || {},
    breadcrumb = _ref8.breadcrumb,
    breadcrumbMap = _ref8.breadcrumbMap,
    _ref8$menuData = _ref8.menuData,
    menuData = _ref8$menuData === void 0 ? [] : _ref8$menuData;
  if (actionRef && menu !== null && menu !== void 0 && menu.request) {
    actionRef.current = {
      reload: function reload() {
        mutate();
      }
    };
  }
  var matchMenus = (0, _react.useMemo)(function () {
    return (0, _routeUtils.getMatchMenu)(location.pathname || '/', menuData || [], true);
  }, [location.pathname, menuData]);
  var matchMenuKeys = (0, _react.useMemo)(function () {
    return Array.from(new Set(matchMenus.map(function (item) {
      return item.key || item.path || '';
    })));
  }, [matchMenus]);

  // 当前选中的menu，一般不会为空
  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = (0, _useCurrentMenuLayoutProps.useCurrentMenuLayoutProps)(currentMenu);
  var _props$currentMenuLay = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), currentMenuLayoutProps),
    fixSiderbar = _props$currentMenuLay.fixSiderbar,
    navTheme = _props$currentMenuLay.navTheme,
    propsLayout = _props$currentMenuLay.layout,
    rest = (0, _objectWithoutProperties2.default)(_props$currentMenuLay, _excluded2);
  var colSize = (0, _proUtils.useBreakpoint)();
  var isMobile = (0, _react.useMemo)(function () {
    return (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  }, [colSize, props.disableMobile]);

  // If it is a fix menu, calculate padding
  // don't need padding in phone mode
  /* Checking if the menu is loading and if it is, it will return a skeleton loading screen. */
  var hasLeftPadding = propsLayout !== 'top' && !isMobile;
  var _useMergedState = (0, _useMergedState3.default)(function () {
      if (defaultCollapsed !== undefined) return defaultCollapsed;
      if (process.env.NODE_ENV === 'TEST') return false;
      if (isMobile) return true;
      if (colSize === 'md') return true;
      return false;
    }, {
      value: props.collapsed,
      onChange: propsOnCollapse
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    collapsed = _useMergedState2[0],
    onCollapse = _useMergedState2[1];

  // Splicing parameters, adding menuData and formatMessage in props
  var defaultProps = (0, _omit.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    prefixCls: prefixCls
  }, props), {}, {
    siderWidth: siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage: formatMessage,
    breadcrumb: breadcrumb,
    menu: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, menu), {}, {
      type: siderMenuType || (menu === null || menu === void 0 ? void 0 : menu.type),
      loading: menuLoading
    }),
    layout: propsLayout
  }), ['className', 'style', 'breadcrumbRender']);

  // gen page title
  var pageTitleInfo = defaultPageTitleRender((0, _objectSpread2.default)((0, _objectSpread2.default)({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  }), props);

  // gen breadcrumbProps, parameter for pageHeader
  var breadcrumbProps = (0, _getBreadcrumbProps.getBreadcrumbProps)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
    breadcrumbRender: props.breadcrumbRender,
    breadcrumbMap: breadcrumbMap
  }), props);

  // render sider dom
  var siderMenuDom = renderSiderMenu((0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
    menuData: menuData,
    onCollapse: onCollapse,
    isMobile: isMobile,
    collapsed: collapsed
  }), matchMenuKeys);

  // render header dom
  var headerDom = headerRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
    children: null,
    hasSiderMenu: !!siderMenuDom,
    menuData: menuData,
    isMobile: isMobile,
    collapsed: collapsed,
    onCollapse: onCollapse
  }), matchMenuKeys);

  // render footer dom
  var footerDom = footerRender((0, _objectSpread2.default)({
    isMobile: isMobile,
    collapsed: collapsed
  }, defaultProps));
  var _useContext = (0, _react.useContext)(_RouteContext.RouteContext),
    contextIsChildrenLayout = _useContext.isChildrenLayout;

  // 如果 props 中定义，以 props 为准
  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var proLayoutClassName = "".concat(prefixCls, "-layout");
  var _useStyle = (0, _style.useStyle)(proLayoutClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;

  // gen className
  var className = (0, _classnames.default)(props.className, hashId, 'ant-design-pro', proLayoutClassName, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "screen-".concat(colSize), colSize), "".concat(proLayoutClassName, "-top-menu"), propsLayout === 'top'), "".concat(proLayoutClassName, "-is-children"), isChildrenLayout), "".concat(proLayoutClassName, "-fix-siderbar"), fixSiderbar), "".concat(proLayoutClassName, "-").concat(propsLayout), propsLayout));

  /** 计算 slider 的宽度 */
  var leftSiderWidth = getPaddingInlineStart(!!hasLeftPadding, collapsed, siderWidth);

  // siderMenuDom 为空的时候，不需要 padding
  var genLayoutStyle = {
    position: 'relative'
  };

  // if is some layout children, don't need min height
  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  /** 页面切换的时候触发 */
  (0, _react.useEffect)(function () {
    var _props$onPageChange;
    (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 || _props$onPageChange.call(props, props.location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.search]);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    hasFooterToolbar = _useState4[0],
    setHasFooterToolbar = _useState4[1];
  /**
   * 使用number是因为多标签页的时候有多个 PageContainer，只有有任意一个就应该展示这个className
   */
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    hasPageContainer = _useState6[0],
    setHasPageContainer = _useState6[1];
  (0, _proUtils.useDocumentTitle)(pageTitleInfo, props.title || false);
  var _useContext2 = (0, _react.useContext)(_proProvider.ProProvider),
    token = _useContext2.token;
  var bgImgStyleList = (0, _react.useMemo)(function () {
    if (bgLayoutImgList && bgLayoutImgList.length > 0) {
      return bgLayoutImgList === null || bgLayoutImgList === void 0 ? void 0 : bgLayoutImgList.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: item.src,
          style: (0, _objectSpread2.default)({
            position: 'absolute'
          }, item)
        }, index);
      });
    }
    return null;
  }, [bgLayoutImgList]);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RouteContext.RouteContext.Provider, {
    value: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData: menuData,
      isMobile: isMobile,
      collapsed: collapsed,
      hasPageContainer: hasPageContainer,
      setHasPageContainer: setHasPageContainer,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar: hasFooterToolbar,
      setHasFooterToolbar: setHasFooterToolbar,
      pageTitleInfo: pageTitleInfo,
      matchMenus: matchMenus,
      matchMenuKeys: matchMenuKeys,
      currentMenu: currentMenu
    }),
    children: props.pure ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: children
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: className,
      children: [bgImgStyleList || (_token$layout = token.layout) !== null && _token$layout !== void 0 && _token$layout.bgLayout ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)("".concat(proLayoutClassName, "-bg-list"), hashId),
        children: bgImgStyleList
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Layout, {
        style: (0, _objectSpread2.default)({
          minHeight: '100%',
          // hack style
          flexDirection: siderMenuDom ? 'row' : undefined
        }, style),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider
        // @ts-ignore
        , {
          theme: {
            hashed: (0, _proProvider.isNeedOpenHash)(),
            token: {
              controlHeightLG: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.menuHeight) || (token === null || token === void 0 ? void 0 : token.controlHeightLG)
            },
            components: {
              Menu: (0, _proUtils.coverToNewToken)({
                colorItemBg: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorMenuBackground) || 'transparent',
                colorSubItemBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorMenuBackground) || 'transparent',
                radiusItem: token.borderRadius,
                colorItemBgSelected: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorItemBgHover: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorItemBgActive: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorBgMenuItemActive) || (token === null || token === void 0 ? void 0 : token.colorBgTextActive),
                colorItemBgSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.sider) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorActiveBarWidth: 0,
                colorActiveBarHeight: 0,
                colorActiveBarBorderSize: 0,
                colorItemText: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
                colorItemTextHover: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuItemHover) || 'rgba(0, 0, 0, 0.85)',
                // 悬浮态
                colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                darkSubMenuItemBg: 'transparent',
                darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
              })
            }
          },
          children: siderMenuDom
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: genLayoutStyle,
          className: "".concat(proLayoutClassName, "-container ").concat(hashId).trim(),
          children: [headerDom, /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapContent.WrapContent, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            hasPageContainer: hasPageContainer,
            isChildrenLayout: isChildrenLayout
          }, rest), {}, {
            hasHeader: !!headerDom,
            prefixCls: proLayoutClassName,
            style: contentStyle,
            children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageLoading.PageLoading, {}) : children
          })), footerDom, hasFooterToolbar && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "".concat(proLayoutClassName, "-has-footer"),
            style: {
              height: 64,
              marginBlockStart: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.pageContainer) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.paddingBlockPageContainerContent
            }
          })]
        })]
      })]
    })
  }));
};
var ProLayout = exports.ProLayout = function ProLayout(props) {
  var colorPrimary = props.colorPrimary;
  var darkProps = props.navTheme !== undefined ? {
    dark: props.navTheme === 'realDark'
  } : {};
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, {
    theme: colorPrimary ? {
      token: {
        colorPrimary: colorPrimary
      }
    } : undefined,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_proProvider.ProConfigProvider, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, darkProps), {}, {
      token: props.token,
      prefixCls: props.prefixCls,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(BaseProLayout, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        logo: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo.Logo, {})
      }, _defaultSettings.defaultSettings), {}, {
        location: (0, _proUtils.isBrowser)() ? window.location : undefined
      }, props))
    }))
  });
};