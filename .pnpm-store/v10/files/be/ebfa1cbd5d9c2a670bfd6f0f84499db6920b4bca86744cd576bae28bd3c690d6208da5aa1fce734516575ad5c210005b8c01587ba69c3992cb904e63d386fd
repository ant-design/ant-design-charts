import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { Switch } from 'antd';
import omit from "rc-util/es/omit";
import React, { useMemo } from 'react';
// 兼容代码-----------
import { FieldLabel } from '@ant-design/pro-utils';
import "antd/es/switch/style";
//------------

/**
 * 评分组件
 *
 * @param
 */
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var FieldSwitch = function FieldSwitch(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    light = _ref.light,
    label = _ref.label,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps;
  var intl = useIntl();
  var dom = useMemo(function () {
    var _fieldProps$checkedCh, _fieldProps$unChecked;
    if (text === undefined || text === null || "".concat(text).length < 1) return '-';
    return text ? (_fieldProps$checkedCh = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checkedChildren) !== null && _fieldProps$checkedCh !== void 0 ? _fieldProps$checkedCh : intl.getMessage('switch.open', '打开') : (_fieldProps$unChecked = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.unCheckedChildren) !== null && _fieldProps$unChecked !== void 0 ? _fieldProps$unChecked : intl.getMessage('switch.close', '关闭');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checkedChildren, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.unCheckedChildren, text]);
  if (mode === 'read') {
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_jsx(_Fragment, {
        children: dom
      }));
    }
    return dom !== null && dom !== void 0 ? dom : '-';
  }
  if (mode === 'edit' || mode === 'update') {
    var _fieldProps$checked;
    var editDom = /*#__PURE__*/_jsx(Switch, _objectSpread(_objectSpread({
      ref: ref,
      size: light ? 'small' : undefined
    }, omit(fieldProps, ['value'])), {}, {
      checked: (_fieldProps$checked = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checked) !== null && _fieldProps$checked !== void 0 ? _fieldProps$checked : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value
    }));
    if (light) {
      var disabled = fieldProps.disabled,
        bordered = fieldProps.bordered;
      return /*#__PURE__*/_jsx(FieldLabel, {
        label: label,
        disabled: disabled,
        bordered: bordered,
        downIcon: false,
        value: /*#__PURE__*/_jsx("div", {
          style: {
            paddingLeft: 8
          },
          children: editDom
        }),
        allowClear: false
      });
    }
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), editDom);
    }
    return editDom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldSwitch);