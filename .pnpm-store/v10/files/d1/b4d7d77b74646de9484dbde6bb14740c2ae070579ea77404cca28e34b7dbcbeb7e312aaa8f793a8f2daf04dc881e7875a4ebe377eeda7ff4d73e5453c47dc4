import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["fieldProps"],
  _excluded2 = ["fieldProps"],
  _excluded3 = ["fieldProps"],
  _excluded4 = ["fieldProps"],
  _excluded5 = ["text", "valueType", "mode", "onChange", "renderFormItem", "value", "readonly", "fieldProps"],
  _excluded6 = ["placeholder"];
import ProConfigContext from '@ant-design/pro-provider';
import { omitUndefined, pickProProps, useDeepCompareMemo, useRefFunction } from '@ant-design/pro-utils';
import { Avatar } from 'antd';
import React, { useContext } from 'react';
import FieldCascader from "./components/Cascader";
import FieldCheckbox from "./components/Checkbox";
import FieldCode from "./components/Code";
import FieldColorPicker from "./components/ColorPicker";
import FieldDatePicker from "./components/DatePicker";
import FieldDigit from "./components/Digit";
import FieldDigitRange from "./components/DigitRange";
import FieldFromNow from "./components/FromNow";
import FieldImage from "./components/Image";
import FieldIndexColumn from "./components/IndexColumn";
import FieldMoney from "./components/Money";
import FieldOptions from "./components/Options";
import FieldPassword from "./components/Password";
import FieldPercent from "./components/Percent";
import FieldProgress from "./components/Progress";
import FieldRadio from "./components/Radio";
import FieldRangePicker from "./components/RangePicker";
import FieldRate from "./components/Rate";
import FieldSecond from "./components/Second";
import FieldSegmented from "./components/Segmented";
import FieldSelect, { proFieldParsingValueEnumToArray } from "./components/Select";
import FieldSlider from "./components/Slider";
import FieldStatus from "./components/Status";
import FieldSwitch from "./components/Switch";
import FieldText from "./components/Text";
import FieldTextArea from "./components/TextArea";
import FieldTimePicker, { FieldTimeRangePicker } from "./components/TimePicker";
import FieldTreeSelect from "./components/TreeSelect";
import FieldHOC from "./FieldHOC";
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import dayjs from 'dayjs';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);
dayjs.extend(weekday);
dayjs.extend(localizedFormat);

/** 默认的 Field 需要实现的功能 */
// eslint-disable-next-line @typescript-eslint/ban-types

/** 轻量筛选的field属性 */

/** Value type by function */

/**
 * Render valueType object
 *
 * @param text String | number
 * @param valueType ProColumnsValueObjectType
 */
var defaultRenderTextByObject = function defaultRenderTextByObject(text, valueType, props) {
  var pickFormItemProps = pickProProps(props.fieldProps);
  if (valueType.type === 'progress') {
    return /*#__PURE__*/_jsx(FieldProgress, _objectSpread(_objectSpread({}, props), {}, {
      text: text,
      fieldProps: _objectSpread({
        status: valueType.status ? valueType.status : undefined
      }, pickFormItemProps)
    }));
  }
  if (valueType.type === 'money') {
    return /*#__PURE__*/_jsx(FieldMoney, _objectSpread(_objectSpread({
      locale: valueType.locale
    }, props), {}, {
      fieldProps: pickFormItemProps,
      text: text,
      moneySymbol: valueType.moneySymbol
    }));
  }
  if (valueType.type === 'percent') {
    return /*#__PURE__*/_jsx(FieldPercent, _objectSpread(_objectSpread({}, props), {}, {
      text: text,
      showSymbol: valueType.showSymbol,
      precision: valueType.precision,
      fieldProps: pickFormItemProps,
      showColor: valueType.showColor
    }));
  }
  if (valueType.type === 'image') {
    return /*#__PURE__*/_jsx(FieldImage, _objectSpread(_objectSpread({}, props), {}, {
      text: text,
      width: valueType.width
    }));
  }
  return text;
};

/**
 * 根据不同的类型来转化数值
 *
 * @param dataValue
 * @param valueType
 */
var defaultRenderText = function defaultRenderText(dataValue, valueType, props, valueTypeMap) {
  var _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'read' : _props$mode,
    _props$emptyText = props.emptyText,
    emptyText = _props$emptyText === void 0 ? '-' : _props$emptyText;
  if (emptyText !== false && mode === 'read' && valueType !== 'option' && valueType !== 'switch') {
    if (typeof dataValue !== 'boolean' && typeof dataValue !== 'number' && !dataValue) {
      var fieldProps = props.fieldProps,
        render = props.render;
      if (render) {
        return render(dataValue, _objectSpread({
          mode: mode
        }, fieldProps), /*#__PURE__*/_jsx(_Fragment, {
          children: emptyText
        }));
      }
      return /*#__PURE__*/_jsx(_Fragment, {
        children: emptyText
      });
    }
  }

  // eslint-disable-next-line no-param-reassign
  delete props.emptyText;
  if (_typeof(valueType) === 'object') {
    return defaultRenderTextByObject(dataValue, valueType, props);
  }
  var customValueTypeConfig = valueTypeMap && valueTypeMap[valueType];
  if (customValueTypeConfig) {
    // eslint-disable-next-line no-param-reassign
    delete props.ref;
    if (mode === 'read') {
      var _customValueTypeConfi;
      return (_customValueTypeConfi = customValueTypeConfig.render) === null || _customValueTypeConfi === void 0 ? void 0 : _customValueTypeConfi.call(customValueTypeConfig, dataValue, _objectSpread(_objectSpread({
        text: dataValue
      }, props), {}, {
        mode: mode || 'read'
      }), /*#__PURE__*/_jsx(_Fragment, {
        children: dataValue
      }));
    }
    if (mode === 'update' || mode === 'edit') {
      var _customValueTypeConfi2;
      return (_customValueTypeConfi2 = customValueTypeConfig.renderFormItem) === null || _customValueTypeConfi2 === void 0 ? void 0 : _customValueTypeConfi2.call(customValueTypeConfig, dataValue, _objectSpread({
        text: dataValue
      }, props), /*#__PURE__*/_jsx(_Fragment, {
        children: dataValue
      }));
    }
  }

  /** 如果是金额的值 */
  if (valueType === 'money') {
    return /*#__PURE__*/_jsx(FieldMoney, _objectSpread(_objectSpread({}, props), {}, {
      text: dataValue
    }));
  }

  /** 如果是日期的值 */
  if (valueType === 'date') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldDatePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-MM-DD"
      }, props))
    });
  }

  /** 如果是周的值 */
  if (valueType === 'dateWeek') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldDatePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-wo",
        picker: "week"
      }, props))
    });
  }

  /** 如果是周范围的值 */
  if (valueType === 'dateWeekRange') {
    var _fieldProps = props.fieldProps,
      otherProps = _objectWithoutProperties(props, _excluded);
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldRangePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-W",
        showTime: true,
        fieldProps: _objectSpread({
          picker: 'week'
        }, _fieldProps)
      }, otherProps))
    });
  }

  /** 如果是月范围的值 */
  if (valueType === 'dateMonthRange') {
    var _fieldProps2 = props.fieldProps,
      _otherProps = _objectWithoutProperties(props, _excluded2);
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldRangePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-MM",
        showTime: true,
        fieldProps: _objectSpread({
          picker: 'month'
        }, _fieldProps2)
      }, _otherProps))
    });
  }

  /** 如果是季范围的值 */
  if (valueType === 'dateQuarterRange') {
    var _fieldProps3 = props.fieldProps,
      _otherProps2 = _objectWithoutProperties(props, _excluded3);
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldRangePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-Q",
        showTime: true,
        fieldProps: _objectSpread({
          picker: 'quarter'
        }, _fieldProps3)
      }, _otherProps2))
    });
  }

  /** 如果是年范围的值 */
  if (valueType === 'dateYearRange') {
    var _fieldProps4 = props.fieldProps,
      _otherProps3 = _objectWithoutProperties(props, _excluded4);
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldRangePicker, _objectSpread({
        text: dataValue,
        format: "YYYY",
        showTime: true,
        fieldProps: _objectSpread({
          picker: 'year'
        }, _fieldProps4)
      }, _otherProps3))
    });
  }

  /** 如果是月的值 */
  if (valueType === 'dateMonth') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldDatePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-MM",
        picker: "month"
      }, props))
    });
  }

  /** 如果是季度的值 */
  if (valueType === 'dateQuarter') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldDatePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-[Q]Q",
        picker: "quarter"
      }, props))
    });
  }

  /** 如果是年的值 */
  if (valueType === 'dateYear') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldDatePicker, _objectSpread({
        text: dataValue,
        format: "YYYY",
        picker: "year"
      }, props))
    });
  }

  /** 如果是日期范围的值 */
  if (valueType === 'dateRange') {
    return /*#__PURE__*/_jsx(FieldRangePicker, _objectSpread({
      text: dataValue,
      format: "YYYY-MM-DD"
    }, props));
  }

  /** 如果是日期加时间类型的值 */
  if (valueType === 'dateTime') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldDatePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-MM-DD HH:mm:ss",
        showTime: true
      }, props))
    });
  }

  /** 如果是日期加时间类型的值的值 */
  if (valueType === 'dateTimeRange') {
    // 值不存在的时候显示 "-"
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldRangePicker, _objectSpread({
        text: dataValue,
        format: "YYYY-MM-DD HH:mm:ss",
        showTime: true
      }, props))
    });
  }

  /** 如果是时间类型的值 */
  if (valueType === 'time') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldTimePicker, _objectSpread({
        text: dataValue,
        format: "HH:mm:ss"
      }, props))
    });
  }

  /** 如果是时间类型的值 */
  if (valueType === 'timeRange') {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldTimeRangePicker, _objectSpread({
        text: dataValue,
        format: "HH:mm:ss"
      }, props))
    });
  }
  if (valueType === 'fromNow') {
    return /*#__PURE__*/_jsx(FieldFromNow, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'index') {
    return /*#__PURE__*/_jsx(FieldIndexColumn, {
      children: dataValue + 1
    });
  }
  if (valueType === 'indexBorder') {
    return /*#__PURE__*/_jsx(FieldIndexColumn, {
      border: true,
      children: dataValue + 1
    });
  }
  if (valueType === 'progress') {
    return /*#__PURE__*/_jsx(FieldProgress, _objectSpread(_objectSpread({}, props), {}, {
      text: dataValue
    }));
  }
  /** 百分比, 默认展示符号, 不展示小数位 */
  if (valueType === 'percent') {
    return /*#__PURE__*/_jsx(FieldPercent, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'avatar' && typeof dataValue === 'string' && props.mode === 'read') {
    return /*#__PURE__*/_jsx(Avatar, {
      src: dataValue,
      size: 22,
      shape: "circle"
    });
  }
  if (valueType === 'code') {
    return /*#__PURE__*/_jsx(FieldCode, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'jsonCode') {
    return /*#__PURE__*/_jsx(FieldCode, _objectSpread({
      text: dataValue,
      language: "json"
    }, props));
  }
  if (valueType === 'textarea') {
    return /*#__PURE__*/_jsx(FieldTextArea, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'digit') {
    return /*#__PURE__*/_jsx(FieldDigit, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'digitRange') {
    return /*#__PURE__*/_jsx(FieldDigitRange, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'second') {
    return /*#__PURE__*/_jsx(FieldSecond, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'select' || valueType === 'text' && (props.valueEnum || props.request)) {
    return /*#__PURE__*/_jsx(FieldHOC, {
      isLight: props.light,
      children: /*#__PURE__*/_jsx(FieldSelect, _objectSpread({
        text: dataValue
      }, props))
    });
  }
  if (valueType === 'checkbox') {
    return /*#__PURE__*/_jsx(FieldCheckbox, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'radio') {
    return /*#__PURE__*/_jsx(FieldRadio, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'radioButton') {
    return /*#__PURE__*/_jsx(FieldRadio, _objectSpread({
      radioType: "button",
      text: dataValue
    }, props));
  }
  if (valueType === 'rate') {
    return /*#__PURE__*/_jsx(FieldRate, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'slider') {
    return /*#__PURE__*/_jsx(FieldSlider, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'switch') {
    return /*#__PURE__*/_jsx(FieldSwitch, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'option') {
    return /*#__PURE__*/_jsx(FieldOptions, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'password') {
    return /*#__PURE__*/_jsx(FieldPassword, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'image') {
    return /*#__PURE__*/_jsx(FieldImage, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'cascader') {
    return /*#__PURE__*/_jsx(FieldCascader, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'treeSelect') {
    return /*#__PURE__*/_jsx(FieldTreeSelect, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'color') {
    return /*#__PURE__*/_jsx(FieldColorPicker, _objectSpread({
      text: dataValue
    }, props));
  }
  if (valueType === 'segmented') {
    return /*#__PURE__*/_jsx(FieldSegmented, _objectSpread({
      text: dataValue
    }, props));
  }
  return /*#__PURE__*/_jsx(FieldText, _objectSpread({
    text: dataValue
  }, props));
};
export { defaultRenderText, FieldCode, FieldDatePicker, FieldIndexColumn, FieldMoney, FieldPercent, FieldProgress, FieldRangePicker, FieldSelect, FieldStatus, FieldText, FieldTimePicker, proFieldParsingValueEnumToArray };

/** ProField 的类型 */

var ProFieldComponent = function ProFieldComponent(_ref, ref) {
  var _ref2, _fieldProps$value, _ref3, _rest$placeholder, _rest$placeholder2, _Object$keys;
  var text = _ref.text,
    _ref$valueType = _ref.valueType,
    valueType = _ref$valueType === void 0 ? 'text' : _ref$valueType,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'read' : _ref$mode,
    onChange = _ref.onChange,
    renderFormItem = _ref.renderFormItem,
    value = _ref.value,
    readonly = _ref.readonly,
    restFieldProps = _ref.fieldProps,
    rest = _objectWithoutProperties(_ref, _excluded5);
  var context = useContext(ProConfigContext);
  var onChangeCallBack = useRefFunction(function () {
    var _restFieldProps$onCha;
    for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
      restParams[_key] = arguments[_key];
    }
    restFieldProps === null || restFieldProps === void 0 || (_restFieldProps$onCha = restFieldProps.onChange) === null || _restFieldProps$onCha === void 0 || _restFieldProps$onCha.call.apply(_restFieldProps$onCha, [restFieldProps].concat(restParams));
    onChange === null || onChange === void 0 || onChange.apply(void 0, restParams);
  });
  var fieldProps = useDeepCompareMemo(function () {
    return (value !== undefined || restFieldProps) && _objectSpread(_objectSpread({
      value: value
    }, omitUndefined(restFieldProps)), {}, {
      onChange: onChangeCallBack
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, restFieldProps, onChangeCallBack]);
  var renderedDom = defaultRenderText(mode === 'edit' ? (_ref2 = (_fieldProps$value = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) !== null && _fieldProps$value !== void 0 ? _fieldProps$value : text) !== null && _ref2 !== void 0 ? _ref2 : '' : (_ref3 = text !== null && text !== void 0 ? text : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) !== null && _ref3 !== void 0 ? _ref3 : '', valueType || 'text', omitUndefined(_objectSpread(_objectSpread({
    ref: ref
  }, rest), {}, {
    mode: readonly ? 'read' : mode,
    renderFormItem: renderFormItem ? function (curText, props, dom) {
      var _placeholder = props.placeholder,
        restProps = _objectWithoutProperties(props, _excluded6);
      var newDom = renderFormItem(curText, restProps, dom);
      // renderFormItem 之后的dom可能没有props，这里会帮忙注入一下
      if ( /*#__PURE__*/React.isValidElement(newDom)) return /*#__PURE__*/React.cloneElement(newDom, _objectSpread(_objectSpread({}, fieldProps), newDom.props || {}));
      return newDom;
    } : undefined,
    placeholder: renderFormItem ? undefined : (_rest$placeholder = rest === null || rest === void 0 ? void 0 : rest.placeholder) !== null && _rest$placeholder !== void 0 ? _rest$placeholder : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placeholder,
    fieldProps: pickProProps(omitUndefined(_objectSpread(_objectSpread({}, fieldProps), {}, {
      placeholder: renderFormItem ? undefined : (_rest$placeholder2 = rest === null || rest === void 0 ? void 0 : rest.placeholder) !== null && _rest$placeholder2 !== void 0 ? _rest$placeholder2 : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placeholder
    })), (_Object$keys = Object.keys(context.valueTypeMap || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.includes(valueType))
  })), context.valueTypeMap || {});
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: renderedDom
  });
};
export var ProField = /*#__PURE__*/React.forwardRef(ProFieldComponent);
export default ProField;