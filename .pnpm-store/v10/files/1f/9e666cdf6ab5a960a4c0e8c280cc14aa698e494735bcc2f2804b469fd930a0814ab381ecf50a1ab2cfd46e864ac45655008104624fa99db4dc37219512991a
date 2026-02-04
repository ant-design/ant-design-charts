import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import { Avatar, Breadcrumb, ConfigProvider, Space } from 'antd';
import "antd/es/breadcrumb/style";
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import { noteOnce } from "rc-util/es/warning";
import * as React from 'react';
import useStyle from "./style/index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var renderBack = function renderBack(prefixCls, hashId, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }
  return /*#__PURE__*/_jsx("div", {
    className: "".concat(prefixCls, "-back ").concat(hashId).trim(),
    children: /*#__PURE__*/_jsx("div", {
      role: "button",
      onClick: function onClick(e) {
        onBack === null || onBack === void 0 || onBack(e);
      },
      className: "".concat(prefixCls, "-back-button ").concat(hashId).trim(),
      "aria-label": "back",
      children: backIcon
    })
  });
};
var renderBreadcrumb = function renderBreadcrumb(breadcrumb, prefixCls) {
  var _breadcrumb$items;
  if (!((_breadcrumb$items = breadcrumb.items) !== null && _breadcrumb$items !== void 0 && _breadcrumb$items.length)) return null;
  return /*#__PURE__*/_jsx(Breadcrumb, _objectSpread(_objectSpread({}, breadcrumb), {}, {
    className: classNames("".concat(prefixCls, "-breadcrumb"), breadcrumb.className)
  }));
};
var getBackIcon = function getBackIcon(props) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';
  if (props.backIcon !== undefined) {
    return props.backIcon;
  }
  return direction === 'rtl' ? /*#__PURE__*/_jsx(ArrowRightOutlined, {}) : /*#__PURE__*/_jsx(ArrowLeftOutlined, {});
};
var renderTitle = function renderTitle(prefixCls, props) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
  var hashId = arguments.length > 3 ? arguments[3] : undefined;
  var title = props.title,
    avatar = props.avatar,
    subTitle = props.subTitle,
    tags = props.tags,
    extra = props.extra,
    onBack = props.onBack;
  var headingPrefixCls = "".concat(prefixCls, "-heading");
  var hasHeading = title || subTitle || tags || extra;
  // If there is nothing, return a null
  if (!hasHeading) {
    return null;
  }
  var backIcon = getBackIcon(props, direction);
  var backIconDom = renderBack(prefixCls, hashId, backIcon, onBack);
  var hasTitle = backIconDom || avatar || hasHeading;
  return /*#__PURE__*/_jsxs("div", {
    className: headingPrefixCls + ' ' + hashId,
    children: [hasTitle && /*#__PURE__*/_jsxs("div", {
      className: "".concat(headingPrefixCls, "-left ").concat(hashId).trim(),
      children: [backIconDom, avatar && /*#__PURE__*/_jsx(Avatar, _objectSpread({
        className: classNames("".concat(headingPrefixCls, "-avatar"), hashId, avatar.className)
      }, avatar)), title && /*#__PURE__*/_jsx("span", {
        className: "".concat(headingPrefixCls, "-title ").concat(hashId).trim(),
        title: typeof title === 'string' ? title : undefined,
        children: title
      }), subTitle && /*#__PURE__*/_jsx("span", {
        className: "".concat(headingPrefixCls, "-sub-title ").concat(hashId).trim(),
        title: typeof subTitle === 'string' ? subTitle : undefined,
        children: subTitle
      }), tags && /*#__PURE__*/_jsx("span", {
        className: "".concat(headingPrefixCls, "-tags ").concat(hashId).trim(),
        children: tags
      })]
    }), extra && /*#__PURE__*/_jsx("span", {
      className: "".concat(headingPrefixCls, "-extra ").concat(hashId).trim(),
      children: /*#__PURE__*/_jsx(Space, {
        children: extra
      })
    })]
  });
};
var renderFooter = function renderFooter(prefixCls, footer, hashId) {
  if (footer) {
    return /*#__PURE__*/_jsx("div", {
      className: "".concat(prefixCls, "-footer ").concat(hashId).trim(),
      children: footer
    });
  }
  return null;
};
var renderChildren = function renderChildren(prefixCls, children, hashId) {
  return /*#__PURE__*/_jsx("div", {
    className: "".concat(prefixCls, "-content ").concat(hashId).trim(),
    children: children
  });
};
var transformBreadcrumbRoutesToItems = function transformBreadcrumbRoutesToItems(routes) {
  return routes === null || routes === void 0 ? void 0 : routes.map(function (route) {
    var _route$children;
    noteOnce(!!route.breadcrumbName, 'Route.breadcrumbName is deprecated, please use Route.title instead.');
    return _objectSpread(_objectSpread({}, route), {}, {
      breadcrumbName: undefined,
      children: undefined,
      title: route.title || route.breadcrumbName
    }, (_route$children = route.children) !== null && _route$children !== void 0 && _route$children.length ? {
      menu: {
        items: transformBreadcrumbRoutesToItems(route.children)
      }
    } : {});
  });
};
var PageHeader = function PageHeader(props) {
  var _breadcrumbRender;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    compact = _React$useState2[0],
    updateCompact = _React$useState2[1];
  var onResize = function onResize(_ref) {
    var width = _ref.width;
    return updateCompact(width < 768);
  };
  var _React$useContext = React.useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    style = props.style,
    footer = props.footer,
    children = props.children,
    breadcrumb = props.breadcrumb,
    breadcrumbRender = props.breadcrumbRender,
    customizeClassName = props.className,
    contentWidth = props.contentWidth,
    layout = props.layout,
    _props$ghost = props.ghost,
    ghost = _props$ghost === void 0 ? true : _props$ghost;
  var prefixCls = getPrefixCls('page-header', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var getDefaultBreadcrumbDom = function getDefaultBreadcrumbDom() {
    if (breadcrumb && !(breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.items) && breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.routes) {
      noteOnce(false, 'The routes of Breadcrumb is deprecated, please use items instead.');
      breadcrumb.items = transformBreadcrumbRoutesToItems(breadcrumb.routes);
    }
    if (breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.items) {
      return renderBreadcrumb(breadcrumb, prefixCls);
    }
    return null;
  };
  var defaultBreadcrumbDom = getDefaultBreadcrumbDom();
  var isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb;

  // support breadcrumbRender function
  var breadcrumbRenderDomFromProps = (_breadcrumbRender = breadcrumbRender === null || breadcrumbRender === void 0 ? void 0 : breadcrumbRender(_objectSpread(_objectSpread({}, props), {}, {
    prefixCls: prefixCls
  }), defaultBreadcrumbDom)) !== null && _breadcrumbRender !== void 0 ? _breadcrumbRender : defaultBreadcrumbDom;
  var breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps;
  var className = classNames(prefixCls, hashId, customizeClassName, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-has-breadcrumb"), !!breadcrumbDom), "".concat(prefixCls, "-has-footer"), !!footer), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-compact"), compact), "".concat(prefixCls, "-wide"), contentWidth === 'Fixed' && layout == 'top'), "".concat(prefixCls, "-ghost"), ghost));
  var title = renderTitle(prefixCls, props, direction, hashId);
  var childDom = children && renderChildren(prefixCls, children, hashId);
  var footerDom = renderFooter(prefixCls, footer, hashId);
  if (!breadcrumbDom && !title && !footerDom && !childDom) {
    return /*#__PURE__*/_jsx("div", {
      className: classNames(hashId, ["".concat(prefixCls, "-no-children")])
    });
  }
  return wrapSSR( /*#__PURE__*/_jsx(ResizeObserver, {
    onResize: onResize,
    children: /*#__PURE__*/_jsxs("div", {
      className: className,
      style: style,
      children: [breadcrumbDom, title, childDom, footerDom]
    })
  }));
};
export { PageHeader };