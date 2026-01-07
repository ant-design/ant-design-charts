import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["label", "size", "disabled", "onChange", "className", "style", "children", "valuePropName", "placeholder", "labelFormatter", "bordered", "footerRender", "allowClear", "otherFieldProps", "valueType", "placement"];
import { dateArrayFormatter, dateFormatterMap, FieldLabel, FilterDropdown, useMountMergeState } from '@ant-design/pro-utils';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo, useState } from 'react';
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var LightWrapper = function LightWrapper(props) {
  var label = props.label,
    size = props.size,
    disabled = props.disabled,
    propsOnChange = props.onChange,
    className = props.className,
    style = props.style,
    children = props.children,
    valuePropName = props.valuePropName,
    placeholder = props.placeholder,
    labelFormatter = props.labelFormatter,
    bordered = props.bordered,
    footerRender = props.footerRender,
    allowClear = props.allowClear,
    otherFieldProps = props.otherFieldProps,
    valueType = props.valueType,
    placement = props.placement,
    rest = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-field-light-wrapper');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = useState(props[valuePropName]),
    _useState2 = _slicedToArray(_useState, 2),
    tempValue = _useState2[0],
    setTempValue = _useState2[1];
  var _useMountMergeState = useMountMergeState(false),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    open = _useMountMergeState2[0],
    setOpen = _useMountMergeState2[1];
  var onChange = function onChange() {
    var _otherFieldProps$onCh;
    for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
      restParams[_key] = arguments[_key];
    }
    otherFieldProps === null || otherFieldProps === void 0 || (_otherFieldProps$onCh = otherFieldProps.onChange) === null || _otherFieldProps$onCh === void 0 || _otherFieldProps$onCh.call.apply(_otherFieldProps$onCh, [otherFieldProps].concat(restParams));
    propsOnChange === null || propsOnChange === void 0 || propsOnChange.apply(void 0, restParams);
  };
  var labelValue = props[valuePropName];

  /** DateRange的转化，dayjs 的 toString 有点不好用 */
  var labelValueText = useMemo(function () {
    var _valueType$toLowerCas;
    if (!labelValue) return labelValue;
    if (valueType !== null && valueType !== void 0 && (_valueType$toLowerCas = valueType.toLowerCase()) !== null && _valueType$toLowerCas !== void 0 && _valueType$toLowerCas.endsWith('range') && valueType !== 'digitRange' && !labelFormatter) {
      return dateArrayFormatter(labelValue, dateFormatterMap[valueType] || 'YYYY-MM-DD');
    }
    if (Array.isArray(labelValue)) return labelValue.map(function (item) {
      if (_typeof(item) === 'object' && item.label && item.value) {
        return item.label;
      }
      return item;
    });
    return labelValue;
  }, [labelValue, valueType, labelFormatter]);
  return wrapSSR( /*#__PURE__*/_jsx(FilterDropdown, {
    disabled: disabled,
    open: open,
    onOpenChange: setOpen,
    placement: placement,
    label: /*#__PURE__*/_jsx(FieldLabel, {
      ellipsis: true,
      size: size,
      onClear: function onClear() {
        onChange === null || onChange === void 0 || onChange();
        setTempValue(null);
      },
      bordered: bordered,
      style: style,
      className: className,
      label: label,
      placeholder: placeholder,
      value: labelValueText,
      disabled: disabled,
      formatter: labelFormatter,
      allowClear: allowClear
    }),
    footer: {
      onClear: function onClear() {
        return setTempValue(null);
      },
      onConfirm: function onConfirm() {
        onChange === null || onChange === void 0 || onChange(tempValue);
        setOpen(false);
      }
    },
    footerRender: footerRender,
    children: /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(prefixCls, "-container"), hashId, className),
      style: style,
      children: /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, rest), {}, _defineProperty(_defineProperty({}, valuePropName, tempValue), "onChange", function onChange(e) {
        setTempValue(e !== null && e !== void 0 && e.target ? e.target.value : e);
      }), children.props))
    })
  }));
};
export { LightWrapper };