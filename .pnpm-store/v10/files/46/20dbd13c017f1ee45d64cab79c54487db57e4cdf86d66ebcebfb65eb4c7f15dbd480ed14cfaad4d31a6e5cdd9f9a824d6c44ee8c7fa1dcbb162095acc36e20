import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { ConfigProvider } from 'antd';
import React, { useContext, useImperativeHandle } from 'react';
// 兼容代码-----------
import { proTheme } from '@ant-design/pro-provider';
import "antd/es/space/style";
//----------------------
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var addArrayKeys = function addArrayKeys(doms) {
  return doms.map(function (dom, index) {
    var _dom$props;
    if (! /*#__PURE__*/React.isValidElement(dom)) {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/_jsx(React.Fragment, {
        children: dom
      }, index);
    }
    return /*#__PURE__*/React.cloneElement(dom, _objectSpread(_objectSpread({
      // eslint-disable-next-line react/no-array-index-key
      key: index
    }, dom === null || dom === void 0 ? void 0 : dom.props), {}, {
      style: _objectSpread({}, dom === null || dom === void 0 || (_dom$props = dom.props) === null || _dom$props === void 0 ? void 0 : _dom$props.style)
    }));
  });
};

/**
 * 一般用于放多个按钮
 *
 * @param
 */
var FieldOptions = function FieldOptions(_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    fieldProps = _ref.fieldProps;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-field-option');
  var _proTheme$useToken = proTheme.useToken(),
    token = _proTheme$useToken.token;
  useImperativeHandle(ref, function () {
    return {};
  });
  if (render) {
    var doms = render(text, _objectSpread({
      mode: type
    }, fieldProps), /*#__PURE__*/_jsx(_Fragment, {}));
    if (!doms || (doms === null || doms === void 0 ? void 0 : doms.length) < 1 || !Array.isArray(doms)) {
      return null;
    }
    return /*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        gap: token.margin,
        alignItems: 'center'
      },
      className: className,
      children: addArrayKeys(doms)
    });
  }
  if (!text || !Array.isArray(text)) {
    if (! /*#__PURE__*/React.isValidElement(text)) {
      return null;
    }
    return text;
  }
  return /*#__PURE__*/_jsx("div", {
    style: {
      display: 'flex',
      gap: token.margin,
      alignItems: 'center'
    },
    className: className,
    children: addArrayKeys(text)
  });
};
export default /*#__PURE__*/React.forwardRef(FieldOptions);