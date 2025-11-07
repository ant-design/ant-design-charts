import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { InputNumber } from 'antd';
import React, { Fragment, useMemo } from 'react';
import { getColorByRealValue, getRealTextWithPrecision, getSymbolByRealValue, toNumber } from "./util";

// 兼容代码-----------
import "antd/es/input-number/style";
//------------
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * 百分比组件
 *
 * @param PercentPropInt
 */
var FieldPercent = function FieldPercent(_ref, ref) {
  var text = _ref.text,
    prefix = _ref.prefix,
    precision = _ref.precision,
    _ref$suffix = _ref.suffix,
    suffix = _ref$suffix === void 0 ? '%' : _ref$suffix,
    mode = _ref.mode,
    _ref$showColor = _ref.showColor,
    showColor = _ref$showColor === void 0 ? false : _ref$showColor,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    placeholder = _ref.placeholder,
    propsShowSymbol = _ref.showSymbol;
  var intl = useIntl();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  var realValue = useMemo(function () {
    return typeof text === 'string' && text.includes('%') ? toNumber(text.replace('%', '')) : toNumber(text);
  }, [text]);
  var showSymbol = useMemo(function () {
    if (typeof propsShowSymbol === 'function') {
      return propsShowSymbol === null || propsShowSymbol === void 0 ? void 0 : propsShowSymbol(text);
    }
    return propsShowSymbol;
  }, [propsShowSymbol, text]);
  if (mode === 'read') {
    /** 颜色有待确定, 根据提供 colors: ['正', '负'] | boolean */
    var style = showColor ? {
      color: getColorByRealValue(realValue)
    } : {};
    var dom = /*#__PURE__*/_jsxs("span", {
      style: style,
      ref: ref,
      children: [prefix && /*#__PURE__*/_jsx("span", {
        children: prefix
      }), showSymbol && /*#__PURE__*/_jsxs(Fragment, {
        children: [getSymbolByRealValue(realValue), " "]
      }), getRealTextWithPrecision(Math.abs(realValue), precision), suffix && suffix]
    });
    if (render) {
      return render(text, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        prefix: prefix,
        precision: precision,
        showSymbol: showSymbol,
        suffix: suffix
      }), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/_jsx(InputNumber, _objectSpread({
      ref: ref,
      formatter: function formatter(value) {
        if (value && prefix) {
          return "".concat(prefix, " ").concat(value).replace(/\B(?=(\d{3})+(?!\d)$)/g, ',');
        }
        return value;
      },
      parser: function parser(value) {
        return value ? value.replace(/.*\s|,/g, '') : '';
      },
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
export default /*#__PURE__*/React.forwardRef(FieldPercent);