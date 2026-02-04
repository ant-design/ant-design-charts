import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle } from '@ant-design/pro-utils';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
// 兼容代码-----------
import "antd/es/input/style";
import omit from "rc-util/es/omit";
//------------

/**
 * Input.TextArea 只读模式时渲染的组件
 *
 * @param
 */
import { jsx as _jsx } from "react/jsx-runtime";
var FieldTextAreaReadonly = function FieldTextAreaReadonly(_ref, ref) {
  var text = _ref.text,
    fieldProps = _ref.fieldProps;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var readonlyClassName = getPrefixCls('pro-field-readonly');
  var compClassName = "".concat(readonlyClassName, "-textarea");
  var _useStyle = useStyle('TextArea', function () {
      return _defineProperty({}, ".".concat(compClassName), {
        display: 'inline-block',
        lineHeight: '1.5715',
        maxWidth: '100%',
        whiteSpace: 'pre-wrap'
      });
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  return wrapSSR( /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
    ref: ref,
    className: classNames(hashId, readonlyClassName, compClassName)
  }, omit(fieldProps, ['autoSize', 'classNames', 'styles'])), {}, {
    children: text !== null && text !== void 0 ? text : '-'
  })));
};
export default /*#__PURE__*/React.forwardRef(FieldTextAreaReadonly);