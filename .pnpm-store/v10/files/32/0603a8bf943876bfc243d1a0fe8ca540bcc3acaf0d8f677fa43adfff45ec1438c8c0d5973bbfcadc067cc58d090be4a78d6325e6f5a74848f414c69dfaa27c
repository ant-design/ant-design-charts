import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { openVisibleCompatible } from '@ant-design/pro-utils';
import { Popover } from 'antd';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { AppsLogo } from "./AppsLogo";
import { DefaultContent } from "./DefaultContent";
import { SimpleContent } from "./SimpleContent";
import { useStyle } from "./style/index";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * 默认渲染logo的方式，如果是个string，用img。否则直接返回
 *
 * @param logo
 * @returns
 */
export var defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return /*#__PURE__*/_jsx("img", {
      width: "auto",
      height: 22,
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  return logo;
};

/**
 * 相关品牌额icon 列表。用于展示相关的品牌
 *
 * @param props
 * @returns
 */
export var AppsLogoComponents = function AppsLogoComponents(props) {
  var _props$appList;
  var appList = props.appList,
    appListRender = props.appListRender,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls,
    itemClick = props.onItemClick;
  var ref = React.useRef(null);
  var popoverRef = React.useRef(null);
  var baseClassName = "".concat(prefixCls, "-layout-apps");
  var _useStyle = useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var cloneItemClick = function cloneItemClick(app) {
    itemClick === null || itemClick === void 0 || itemClick(app, popoverRef);
  };
  var defaultDomContent = useMemo(function () {
    var isSimple = appList === null || appList === void 0 ? void 0 : appList.some(function (app) {
      return !(app !== null && app !== void 0 && app.desc);
    });
    if (isSimple) {
      return /*#__PURE__*/_jsx(SimpleContent, {
        hashId: hashId,
        appList: appList,
        itemClick: itemClick ? cloneItemClick : undefined,
        baseClassName: "".concat(baseClassName, "-simple")
      });
    }
    return /*#__PURE__*/_jsx(DefaultContent, {
      hashId: hashId,
      appList: appList,
      itemClick: itemClick ? cloneItemClick : undefined,
      baseClassName: "".concat(baseClassName, "-default")
    });
  }, [appList, baseClassName, hashId]);
  if (!(props !== null && props !== void 0 && (_props$appList = props.appList) !== null && _props$appList !== void 0 && _props$appList.length)) return null;
  var popoverContent = appListRender ? appListRender(props === null || props === void 0 ? void 0 : props.appList, defaultDomContent) : defaultDomContent;
  var popoverOpenProps = openVisibleCompatible(undefined, function (openChange) {
    return setOpen(openChange);
  });
  return wrapSSR( /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      ref: ref,
      onClick: function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
      }
    }), /*#__PURE__*/_jsx(Popover, _objectSpread(_objectSpread({
      placement: "bottomRight",
      trigger: ['click'],
      zIndex: 9999,
      arrow: false
    }, popoverOpenProps), {}, {
      overlayClassName: "".concat(baseClassName, "-popover ").concat(hashId).trim(),
      content: popoverContent,
      getPopupContainer: function getPopupContainer() {
        return ref.current || document.body;
      },
      children: /*#__PURE__*/_jsx("span", {
        ref: popoverRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        className: classNames("".concat(baseClassName, "-icon"), hashId, _defineProperty({}, "".concat(baseClassName, "-icon-active"), open)),
        children: /*#__PURE__*/_jsx(AppsLogo, {})
      })
    }))]
  }));
};