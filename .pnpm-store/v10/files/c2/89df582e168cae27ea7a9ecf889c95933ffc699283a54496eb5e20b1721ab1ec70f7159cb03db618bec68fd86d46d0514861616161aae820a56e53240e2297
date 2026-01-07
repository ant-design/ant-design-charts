import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { InfoCircleOutlined } from '@ant-design/icons';
import { ConfigProvider, Tooltip } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { useStyle } from "./style";

/**
 * 在 form 的 label 后面增加一个 tips 来展示一些说明文案
 *
 * @param props
 */
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var LabelIconTip = /*#__PURE__*/React.memo(function (props) {
  var label = props.label,
    tooltip = props.tooltip,
    ellipsis = props.ellipsis,
    subTitle = props.subTitle;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-core-label-tip');
  var _useStyle = useStyle(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (!tooltip && !subTitle) {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: label
    });
  }
  var tooltipProps = typeof tooltip === 'string' || /*#__PURE__*/React.isValidElement(tooltip) ? {
    title: tooltip
  } : tooltip;
  var icon = (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.icon) || /*#__PURE__*/_jsx(InfoCircleOutlined, {});
  return wrapSSR( /*#__PURE__*/_jsxs("div", {
    className: classNames(className, hashId),
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.stopPropagation();
    },
    onMouseMove: function onMouseMove(e) {
      return e.stopPropagation();
    },
    children: [/*#__PURE__*/_jsx("div", {
      className: classNames("".concat(className, "-title"), hashId, _defineProperty({}, "".concat(className, "-title-ellipsis"), ellipsis)),
      children: label
    }), subTitle && /*#__PURE__*/_jsx("div", {
      className: "".concat(className, "-subtitle ").concat(hashId).trim(),
      children: subTitle
    }), tooltip && /*#__PURE__*/_jsx(Tooltip, _objectSpread(_objectSpread({}, tooltipProps), {}, {
      children: /*#__PURE__*/_jsx("span", {
        className: "".concat(className, "-icon ").concat(hashId).trim(),
        children: icon
      })
    }))]
  }));
});