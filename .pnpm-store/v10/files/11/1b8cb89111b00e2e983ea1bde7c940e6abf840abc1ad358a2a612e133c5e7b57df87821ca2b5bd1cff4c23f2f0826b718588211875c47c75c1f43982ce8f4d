import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
var _excluded = ["title", "content", "pageHeaderRender", "header", "prefixedClassName", "extraContent", "childrenContentStyle", "style", "prefixCls", "hashId", "value", "breadcrumbRender"],
  _excluded2 = ["children", "loading", "className", "style", "footer", "affixProps", "token", "fixedHeader", "breadcrumbRender", "footerToolBarProps", "childrenContentStyle"];
import { ProConfigProvider, ProProvider } from '@ant-design/pro-provider';
import { Affix, Breadcrumb, ConfigProvider, Tabs, version } from 'antd';
import classNames from 'classnames';
import React, { useContext, useEffect, useMemo } from 'react';
import { RouteContext } from "../../context/RouteContext";
import { FooterToolbar } from "../FooterToolbar";
import { GridContent } from "../GridContent";
import { PageHeader } from "../PageHeader";
import { PageLoading } from "../PageLoading";
import { WaterMark } from "../WaterMark";
import { useStyle } from "./style";
import { useStylish } from "./style/stylish";
import { compareVersions } from '@ant-design/pro-utils';
import "antd/es/breadcrumb/style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function genLoading(spinProps) {
  if (_typeof(spinProps) === 'object') {
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
    return /*#__PURE__*/_jsx(Tabs, _objectSpread(_objectSpread({
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
        return _objectSpread(_objectSpread({
          label: item.tab
        }, item), {}, {
          key: ((_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.toString()) || (index === null || index === void 0 ? void 0 : index.toString())
        });
      })
    }, tabProps), {}, {
      children: compareVersions(version, '4.23.0') < 0 ? tabList === null || tabList === void 0 ? void 0 : tabList.map(function (item, index) {
        return /*#__PURE__*/_jsx(Tabs.TabPane, _objectSpread({
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
  return /*#__PURE__*/_jsx("div", {
    className: "".concat(prefixedClassName, "-detail ").concat(hashId).trim(),
    children: /*#__PURE__*/_jsx("div", {
      className: "".concat(prefixedClassName, "-main ").concat(hashId).trim(),
      children: /*#__PURE__*/_jsxs("div", {
        className: "".concat(prefixedClassName, "-row ").concat(hashId).trim(),
        children: [content && /*#__PURE__*/_jsx("div", {
          className: "".concat(prefixedClassName, "-content ").concat(hashId).trim(),
          children: content
        }), extraContent && /*#__PURE__*/_jsx("div", {
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
var ProBreadcrumb = function ProBreadcrumb(props) {
  var value = useContext(RouteContext);
  return /*#__PURE__*/_jsx("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    children: /*#__PURE__*/_jsx(Breadcrumb, _objectSpread(_objectSpread(_objectSpread({}, value === null || value === void 0 ? void 0 : value.breadcrumb), value === null || value === void 0 ? void 0 : value.breadcrumbProps), props))
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
    restProps = _objectWithoutProperties(props, _excluded);
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
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [" ", pageHeaderRender(_objectSpread(_objectSpread({}, props), value))]
    });
  }
  var pageHeaderTitle = title;
  if (!title && title !== false) {
    pageHeaderTitle = value.title;
  }
  var pageHeaderProps = _objectSpread(_objectSpread(_objectSpread({}, value), {}, {
    title: pageHeaderTitle
  }, restProps), {}, {
    footer: renderFooter(_objectSpread(_objectSpread({}, restProps), {}, {
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
  return /*#__PURE__*/_jsx(PageHeader, _objectSpread(_objectSpread({}, pageHeaderProps), {}, {
    className: "".concat(prefixedClassName, "-warp-page-header ").concat(hashId).trim(),
    breadcrumb: breadcrumbRender === false ? undefined : _objectSpread(_objectSpread({}, pageHeaderProps.breadcrumb), value.breadcrumbProps),
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
    restProps = _objectWithoutProperties(props, _excluded2);
  var value = useContext(RouteContext);
  /** 告诉 props 是否存在 footerBar */
  useEffect(function () {
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
  var _useContext = useContext(ProProvider),
    token = _useContext.token;
  var _useContext2 = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext2.getPrefixCls;
  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var basePageContainer = "".concat(prefixCls, "-page-container");
  var _useStyle = useStyle(basePageContainer, propsToken),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var stylish = useStylish("".concat(basePageContainer, ".").concat(basePageContainer, "-stylish"), {
    stylish: props.stylish
  });
  var memoBreadcrumbRender = useMemo(function () {
    var _restProps$header;
    if (breadcrumbRender == false) return false;
    return breadcrumbRender || (restProps === null || restProps === void 0 || (_restProps$header = restProps.header) === null || _restProps$header === void 0 ? void 0 : _restProps$header.breadcrumbRender);
  }, [breadcrumbRender, restProps === null || restProps === void 0 || (_restProps$header2 = restProps.header) === null || _restProps$header2 === void 0 ? void 0 : _restProps$header2.breadcrumbRender]);
  var pageHeaderDom = memoRenderPageHeader(_objectSpread(_objectSpread({}, restProps), {}, {
    breadcrumbRender: memoBreadcrumbRender,
    ghost: true,
    hashId: hashId,
    prefixCls: undefined,
    prefixedClassName: basePageContainer,
    value: value
  }));
  var loadingDom = useMemo(function () {
    // 当loading时一个合法的ReactNode时，说明用户使用了自定义loading,直接返回改自定义loading
    if ( /*#__PURE__*/React.isValidElement(loading)) {
      return loading;
    }
    // 当传递过来的是布尔值，并且为false时，说明不需要显示loading,返回null
    if (typeof loading === 'boolean' && !loading) {
      return null;
    }
    // 如非上述两种情况，那么要么用户传了一个true,要么用户传了loading配置，使用genLoading生成loading配置后返回PageLoading
    var spinProps = genLoading(loading);
    // 如果传的是loading配置，但spinning传的是false，也不需要显示loading
    return spinProps.spinning ? /*#__PURE__*/_jsx(PageLoading, _objectSpread({}, spinProps)) : null;
  }, [loading]);
  var content = useMemo(function () {
    return children ? /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsx("div", {
        className: classNames(hashId, "".concat(basePageContainer, "-children-container"), _defineProperty({}, "".concat(basePageContainer, "-children-container-no-header"), !pageHeaderDom)),
        style: childrenContentStyle,
        children: children
      })
    }) : null;
  }, [children, basePageContainer, childrenContentStyle, hashId]);
  var renderContentDom = useMemo(function () {
    // 只要loadingDom非空我们就渲染loadingDom,否则渲染内容
    var dom = loadingDom || content;
    if (props.waterMarkProps || value.waterMarkProps) {
      var waterMarkProps = _objectSpread(_objectSpread({}, value.waterMarkProps), props.waterMarkProps);
      return /*#__PURE__*/_jsx(WaterMark, _objectSpread(_objectSpread({}, waterMarkProps), {}, {
        children: dom
      }));
    }
    return dom;
  }, [props.waterMarkProps, value.waterMarkProps, loadingDom, content]);
  var containerClassName = classNames(basePageContainer, hashId, className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(basePageContainer, "-with-footer"), footer), "".concat(basePageContainer, "-with-affix"), fixedHeader && pageHeaderDom), "".concat(basePageContainer, "-stylish"), !!restProps.stylish));
  return wrapSSR(stylish.wrapSSR( /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs("div", {
      style: style,
      className: containerClassName,
      children: [fixedHeader && pageHeaderDom ?
      /*#__PURE__*/
      // 在 hasHeader 且 fixedHeader 的情况下，才需要设置高度
      _jsx(Affix, _objectSpread(_objectSpread({
        offsetTop: value.hasHeader && value.fixedHeader ? (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader : 1
      }, affixProps), {}, {
        className: "".concat(basePageContainer, "-affix ").concat(hashId).trim(),
        children: /*#__PURE__*/_jsx("div", {
          className: "".concat(basePageContainer, "-warp ").concat(hashId).trim(),
          children: pageHeaderDom
        })
      })) : pageHeaderDom, renderContentDom && /*#__PURE__*/_jsx(GridContent, {
        children: renderContentDom
      })]
    }), footer && /*#__PURE__*/_jsx(FooterToolbar, _objectSpread(_objectSpread({
      stylish: restProps.footerStylish,
      prefixCls: prefixCls
    }, footerToolBarProps), {}, {
      children: footer
    }))]
  })));
};
var PageContainer = function PageContainer(props) {
  return /*#__PURE__*/_jsx(ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/_jsx(PageContainerBase, _objectSpread({}, props))
  });
};
var ProPageHeader = function ProPageHeader(props) {
  var value = useContext(RouteContext);
  return memoRenderPageHeader(_objectSpread(_objectSpread({}, props), {}, {
    hashId: '',
    value: value
  }));
};
export { PageContainer, ProBreadcrumb, ProPageHeader };