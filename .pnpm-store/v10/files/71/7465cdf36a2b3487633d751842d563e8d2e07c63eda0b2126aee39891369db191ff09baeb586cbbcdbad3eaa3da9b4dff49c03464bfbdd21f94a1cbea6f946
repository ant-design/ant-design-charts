import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { compatibleBorder, parseValueToDay } from '@ant-design/pro-utils';
import { DatePicker, Tooltip } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// 兼容代码-----------
import "antd/es/date-picker/style";
import React from 'react';
//----------------------
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
dayjs.extend(relativeTime);
/**
 * 与当前的时间进行比较 http://momentjs.cn/docs/displaying/fromnow.html
 *
 * @param
 */
var FieldFromNow = function FieldFromNow(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    plain = _ref.plain,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    format = _ref.format,
    fieldProps = _ref.fieldProps;
  var intl = useIntl();
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsx(Tooltip, {
      title: dayjs(text).format((fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'YYYY-MM-DD HH:mm:ss'),
      children: dayjs(text).fromNow()
    });
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_jsx(_Fragment, {
        children: dom
      }));
    }
    return /*#__PURE__*/_jsx(_Fragment, {
      children: dom
    });
  }
  if (mode === 'edit' || mode === 'update') {
    var placeholder = intl.getMessage('tableForm.selectPlaceholder', '请选择');
    var momentValue = parseValueToDay(fieldProps.value);
    var _dom = /*#__PURE__*/_jsx(DatePicker, _objectSpread(_objectSpread(_objectSpread({
      ref: ref,
      placeholder: placeholder,
      showTime: true
    }, compatibleBorder(plain === undefined ? true : !plain)), fieldProps), {}, {
      value: momentValue
    }));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldFromNow);