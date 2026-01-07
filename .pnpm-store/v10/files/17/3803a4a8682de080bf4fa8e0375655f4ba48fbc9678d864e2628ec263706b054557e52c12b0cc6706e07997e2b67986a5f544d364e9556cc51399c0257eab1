import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { InputNumber, Progress } from 'antd';
import React, { useMemo } from 'react';
import { toNumber } from "../Percent/util";

// 兼容代码-----------
import "antd/es/input-number/style";
import "antd/es/progress/style";

//------------
import { jsx as _jsx } from "react/jsx-runtime";
export function getProgressStatus(text) {
  if (text === 100) {
    return 'success';
  }
  if (text < 0) {
    return 'exception';
  }
  if (text < 100) {
    return 'active';
  }
  return 'normal';
}

/**
 * 进度条组件
 *
 * @param
 */
var FieldProgress = function FieldProgress(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    plain = _ref.plain,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    placeholder = _ref.placeholder;
  var intl = useIntl();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  var realValue = useMemo(function () {
    return typeof text === 'string' && text.includes('%') ? toNumber(text.replace('%', '')) : toNumber(text);
  }, [text]);
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsx(Progress, _objectSpread({
      ref: ref,
      size: "small",
      style: {
        minWidth: 100,
        maxWidth: 320
      },
      percent: realValue,
      steps: plain ? 10 : undefined,
      status: getProgressStatus(realValue)
    }, fieldProps));
    if (render) {
      return render(realValue, _objectSpread({
        mode: mode
      }, fieldProps), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/_jsx(InputNumber, _objectSpread({
      ref: ref,
      placeholder: placeholderValue
    }, fieldProps));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldProgress);