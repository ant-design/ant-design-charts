"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProPageHeader = exports.ProBreadcrumb = exports.PageContainer = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _RouteContext = require("../../context/RouteContext");
var _FooterToolbar = require("../FooterToolbar");
var _GridContent = require("../GridContent");
var _PageHeader = require("../PageHeader");
var _PageLoading = require("../PageLoading");
var _WaterMark = require("../WaterMark");
var _style = require("./style");
var _stylish = require("./style/stylish");
var _proUtils = require("@ant-design/pro-utils");
require("antd/lib/breadcrumb/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["title", "content", "pageHeaderRender", "header", "prefixedClassName", "extraContent", "childrenContentStyle", "style", "prefixCls", "hashId", "value", "breadcrumbRender"],
  _excluded2 = ["children", "loading", "className", "style", "footer", "affixProps", "token", "fixedHeader", "breadcrumbRender", "footerToolBarProps", "childrenContentStyle"];
function genLoading(spinProps) {
  if ((0, _typeof2.default)(spinProps) === 'object') {
    return spinProps;
  }
  return {
    spinning: spinProps
  };
}

/**
 * Render Footer tabList In order to be compatible with the old version of the PageHeader basically
 * all the functions are implemented.
 */
var renderFooter = function renderFooter(_ref) {
  var tabList = _ref.tabList,
    tabActiveKey = _ref.tabActiveKey,
    onTabChange = _ref.onTabChange,
    hashId = _ref.hashId,
    tabBarExtraContent = _ref.tabBarExtraContent,
    tabProps = _ref.tabProps,
    prefixedClassName = _ref.prefixedClassName;
  if (Array.isArray(tabList) || tabBarExtraContent) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tabs, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      className: "".concat(prefixedClassName, "-tabs ").concat(hashId).trim(),
      activeKey: tabActiveKey,
      onChange: function onChange(key) {
        if (onTabChange) {
          onTabChange(key);
        }
      },
      tabBarExtraContent: tabBarExtraContent,
      items: tabList === null || tabList === void 0 ? void 0 : tabList.map(function (item, index) {
        var _item$key;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({
          label: item.tab
        }, item), {}, {
          key: ((_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.toString()) || (index === null || index === void 0 ? void 0 : index.toString())
        });
      })
    }, tabProps), {}, {
      children: (0, _proUtils.compareVersions)(_antd.version, '4.23.0') < 0 ? tabList === null || tabList === void 0 ? void 0 : tabList.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tabs.TabPane, (0, _objectSpread2.default)({
          tab: item.tab
        }, item), item.key || index);
      }) : null
    }));
  }
  return null;
};
var renderPageHeader = function renderPageHeader(content, extraContent, prefixedClassName, hashId) {
  if (!content && !extraContent) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(prefixedClassName, "-detail ").concat(hashId).trim(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixedClassName, "-main ").concat(hashId).trim(),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(prefixedClassName, "-row ").concat(hashId).trim(),
        children: [content && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(prefixedClassName, "-content ").concat(hashId).trim(),
          children: content
        }), extraContent && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(prefixedClassName, "-extraContent ").concat(hashId).trim(),
          children: extraContent
        })]
      })
    })
  });
};

/**
 * 配置与面包屑相同，只是增加了自动根据路由计算面包屑的功能。此功能必须要在 ProLayout 中使用。
 *
 * @param props
 * @returns
 */
var ProBreadcrumb = exports.ProBreadcrumb = function ProBreadcrumb(props) {
  var value = (0, _react.useContext)(_RouteContext.RouteContext);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Breadcrumb, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, value === null || value === void 0 ? void 0 : value.breadcrumb), value === null || value === void 0 ? void 0 : value.breadcrumbProps), props))
  });
};
var memoRenderPageHeader = function memoRenderPageHeader(props) {
  var _breadcrumb$items;
  var title = props.title,
    content = props.content,
    pageHeaderRender = props.pageHeaderRender,
    header = props.header,
    prefixedClassName = props.prefixedClassName,
    extraContent = props.extraContent,
    childrenContentStyle = props.childrenContentStyle,
    style = props.style,
    prefixCls = props.prefixCls,
    hashId = props.hashId,
    value = props.value,
    breadcrumbRender = props.breadcrumbRender,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var getBreadcrumbRender = function getBreadcrumbRender() {
    if (!breadcrumbRender) {
      return undefined;
    }
    return breadcrumbRender;
  };
  if (pageHeaderRender === false) {
    return null;
  }
  if (pageHeaderRender) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [" ", pageHeaderRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), value))]
    });
  }
  var pageHeaderTitle = title;
  if (!title && title !== false) {
    pageHeaderTitle = value.title;
  }
  var pageHeaderProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, value), {}, {
    title: pageHeaderTitle
  }, restProps), {}, {
    footer: renderFooter((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
      hashId: hashId,
      breadcrumbRender: breadcrumbRender,
      prefixedClassName: prefixedClassName
    }))
  }, header);
  var _ref2 = pageHeaderProps,
    breadcrumb = _ref2.breadcrumb;
  var noHasBreadCrumb = (!breadcrumb || !(breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.itemRender) && !(breadcrumb !== null && breadcrumb !== void 0 && (_breadcrumb$items = breadcrumb.items) !== null && _breadcrumb$items !== void 0 && _breadcrumb$items.length)) && !breadcrumbRender;
  if (['title', 'subTitle', 'extra', 'tags', 'footer', 'avatar', 'backIcon'].every(function (item) {
    return !pageHeaderProps[item];
  }) && noHasBreadCrumb && !content && !extraContent) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageHeader.PageHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageHeaderProps), {}, {
    className: "".concat(prefixedClassName, "-warp-page-header ").concat(hashId).trim(),
    breadcrumb: breadcrumbRender === false ? undefined : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageHeaderProps.breadcrumb), value.breadcrumbProps),
    breadcrumbRender: getBreadcrumbRender(),
    prefixCls: prefixCls,
    children: (header === null || header === void 0 ? void 0 : header.children) || renderPageHeader(content, extraContent, prefixedClassName, hashId)
  }));
};
var PageContainerBase = function PageContainerBase(props) {
  var _restProps$header2, _token$layout;
  var children = props.children,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    className = props.className,
    style = props.style,
    footer = props.footer,
    affixProps = props.affixProps,
    propsToken = props.token,
    fixedHeader = props.fixedHeader,
    breadcrumbRender = props.breadcrumbRender,
    footerToolBarProps = props.footerToolBarProps,
    childrenContentStyle = props.childrenContentStyle,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded2);
  var value = (0, _react.useContext)(_RouteContext.RouteContext);
  /** 告诉 props 是否存在 footerBar */
  (0, _react.useEffect)(function () {
    var _value$setHasPageCont;
    if (!value || !(value !== null && value !== void 0 && value.setHasPageContainer)) {
      return function () {};
    }
    value === null || value === void 0 || (_value$setHasPageCont = value.setHasPageContainer) === null || _value$setHasPageCont === void 0 || _value$setHasPageCont.call(value, function (num) {
      return num + 1;
    });
    return function () {
      var _value$setHasPageCont2;
      value === null || value === void 0 || (_value$setHasPageCont2 = value.setHasPageContainer) === null || _value$setHasPageCont2 === void 0 || _value$setHasPageCont2.call(value, function (num) {
        return num - 1;
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    token = _useContext.token;
  var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext2.getPrefixCls;
  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var basePageContainer = "".concat(prefixCls, "-page-container");
  var _useStyle = (0, _style.useStyle)(basePageContainer, propsToken),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var stylish = (0, _stylish.useStylish)("".concat(basePageContainer, ".").concat(basePageContainer, "-stylish"), {
    stylish: props.stylish
  });
  var memoBreadcrumbRender = (0, _react.useMemo)(function () {
    var _restProps$header;
    if (breadcrumbRender == false) return false;
    return breadcrumbRender || (restProps === null || restProps === void 0 || (_restProps$header = restProps.header) === null || _restProps$header === void 0 ? void 0 : _restProps$header.breadcrumbRender);
  }, [breadcrumbRender, restProps === null || restProps === void 0 || (_restProps$header2 = restProps.header) === null || _restProps$header2 === void 0 ? void 0 : _restProps$header2.breadcrumbRender]);
  var pageHeaderDom = memoRenderPageHeader((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
    breadcrumbRender: memoBreadcrumbRender,
    ghost: true,
    hashId: hashId,
    prefixCls: undefined,
    prefixedClassName: basePageContainer,
    value: value
  }));
  var loadingDom = (0, _react.useMemo)(function () {
    // 当loading时一个合法的ReactNode时，说明用户使用了自定义loading,直接返回改自定义loading
    if ( /*#__PURE__*/_react.default.isValidElement(loading)) {
      return loading;
    }
    // 当传递过来的是布尔值，并且为false时，说明不需要显示loading,返回null
    if (typeof loading === 'boolean' && !loading) {
      return null;
    }
    // 如非上述两种情况，那么要么用户传了一个true,要么用户传了loading配置，使用genLoading生成loading配置后返回PageLoading
    var spinProps = genLoading(loading);
    // 如果传的是loading配置，但spinning传的是false，也不需要显示loading
    return spinProps.spinning ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageLoading.PageLoading, (0, _objectSpread2.default)({}, spinProps)) : null;
  }, [loading]);
  var content = (0, _react.useMemo)(function () {
    return children ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _classnames.default)(hashId, "".concat(basePageContainer, "-children-container"), (0, _defineProperty2.default)({}, "".concat(basePageContainer, "-children-container-no-header"), !pageHeaderDom)),
        style: childrenContentStyle,
        children: children
      })
    }) : null;
  }, [children, basePageContainer, childrenContentStyle, hashId]);
  var renderContentDom = (0, _react.useMemo)(function () {
    // 只要loadingDom非空我们就渲染loadingDom,否则渲染内容
    var dom = loadingDom || content;
    if (props.waterMarkProps || value.waterMarkProps) {
      var waterMarkProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, value.waterMarkProps), props.waterMarkProps);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_WaterMark.WaterMark, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, waterMarkProps), {}, {
        children: dom
      }));
    }
    return dom;
  }, [props.waterMarkProps, value.waterMarkProps, loadingDom, content]);
  var containerClassName = (0, _classnames.default)(basePageContainer, hashId, className, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(basePageContainer, "-with-footer"), footer), "".concat(basePageContainer, "-with-affix"), fixedHeader && pageHeaderDom), "".concat(basePageContainer, "-stylish"), !!restProps.stylish));
  return wrapSSR(stylish.wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: style,
      className: containerClassName,
      children: [fixedHeader && pageHeaderDom ?
      /*#__PURE__*/
      // 在 hasHeader 且 fixedHeader 的情况下，才需要设置高度
      (0, _jsxRuntime.jsx)(_antd.Affix, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        offsetTop: value.hasHeader && value.fixedHeader ? (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader : 1
      }, affixProps), {}, {
        className: "".concat(basePageContainer, "-affix ").concat(hashId).trim(),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(basePageContainer, "-warp ").concat(hashId).trim(),
          children: pageHeaderDom
        })
      })) : pageHeaderDom, renderContentDom && /*#__PURE__*/(0, _jsxRuntime.jsx)(_GridContent.GridContent, {
        children: renderContentDom
      })]
    }), footer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FooterToolbar.FooterToolbar, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      stylish: restProps.footerStylish,
      prefixCls: prefixCls
    }, footerToolBarProps), {}, {
      children: footer
    }))]
  })));
};
var PageContainer = exports.PageContainer = function PageContainer(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proProvider.ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PageContainerBase, (0, _objectSpread2.default)({}, props))
  });
};
var ProPageHeader = exports.ProPageHeader = function ProPageHeader(props) {
  var value = (0, _react.useContext)(_RouteContext.RouteContext);
  return memoRenderPageHeader((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    hashId: '',
    value: value
  }));
};