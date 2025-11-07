"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FieldCode", {
  enumerable: true,
  get: function get() {
    return _Code.default;
  }
});
Object.defineProperty(exports, "FieldDatePicker", {
  enumerable: true,
  get: function get() {
    return _DatePicker.default;
  }
});
Object.defineProperty(exports, "FieldIndexColumn", {
  enumerable: true,
  get: function get() {
    return _IndexColumn.default;
  }
});
Object.defineProperty(exports, "FieldMoney", {
  enumerable: true,
  get: function get() {
    return _Money.default;
  }
});
Object.defineProperty(exports, "FieldPercent", {
  enumerable: true,
  get: function get() {
    return _Percent.default;
  }
});
Object.defineProperty(exports, "FieldProgress", {
  enumerable: true,
  get: function get() {
    return _Progress.default;
  }
});
Object.defineProperty(exports, "FieldRangePicker", {
  enumerable: true,
  get: function get() {
    return _RangePicker.default;
  }
});
Object.defineProperty(exports, "FieldSelect", {
  enumerable: true,
  get: function get() {
    return _Select.default;
  }
});
Object.defineProperty(exports, "FieldStatus", {
  enumerable: true,
  get: function get() {
    return _Status.default;
  }
});
Object.defineProperty(exports, "FieldText", {
  enumerable: true,
  get: function get() {
    return _Text.default;
  }
});
Object.defineProperty(exports, "FieldTimePicker", {
  enumerable: true,
  get: function get() {
    return _TimePicker.default;
  }
});
exports.defaultRenderText = exports.default = exports.ProField = void 0;
Object.defineProperty(exports, "proFieldParsingValueEnumToArray", {
  enumerable: true,
  get: function get() {
    return _Select.proFieldParsingValueEnumToArray;
  }
});
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = _interopRequireDefault(require("@ant-design/pro-provider"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _Cascader = _interopRequireDefault(require("./components/Cascader"));
var _Checkbox = _interopRequireDefault(require("./components/Checkbox"));
var _Code = _interopRequireDefault(require("./components/Code"));
var _ColorPicker = _interopRequireDefault(require("./components/ColorPicker"));
var _DatePicker = _interopRequireDefault(require("./components/DatePicker"));
var _Digit = _interopRequireDefault(require("./components/Digit"));
var _DigitRange = _interopRequireDefault(require("./components/DigitRange"));
var _FromNow = _interopRequireDefault(require("./components/FromNow"));
var _Image = _interopRequireDefault(require("./components/Image"));
var _IndexColumn = _interopRequireDefault(require("./components/IndexColumn"));
var _Money = _interopRequireDefault(require("./components/Money"));
var _Options = _interopRequireDefault(require("./components/Options"));
var _Password = _interopRequireDefault(require("./components/Password"));
var _Percent = _interopRequireDefault(require("./components/Percent"));
var _Progress = _interopRequireDefault(require("./components/Progress"));
var _Radio = _interopRequireDefault(require("./components/Radio"));
var _RangePicker = _interopRequireDefault(require("./components/RangePicker"));
var _Rate = _interopRequireDefault(require("./components/Rate"));
var _Second = _interopRequireDefault(require("./components/Second"));
var _Segmented = _interopRequireDefault(require("./components/Segmented"));
var _Select = _interopRequireWildcard(require("./components/Select"));
var _Slider = _interopRequireDefault(require("./components/Slider"));
var _Status = _interopRequireDefault(require("./components/Status"));
var _Switch = _interopRequireDefault(require("./components/Switch"));
var _Text = _interopRequireDefault(require("./components/Text"));
var _TextArea = _interopRequireDefault(require("./components/TextArea"));
var _TimePicker = _interopRequireWildcard(require("./components/TimePicker"));
var _TreeSelect = _interopRequireDefault(require("./components/TreeSelect"));
var _FieldHOC = _interopRequireDefault(require("./FieldHOC"));
var _advancedFormat = _interopRequireDefault(require("dayjs/plugin/advancedFormat"));
var _isoWeek = _interopRequireDefault(require("dayjs/plugin/isoWeek"));
var _localeData = _interopRequireDefault(require("dayjs/plugin/localeData"));
var _localizedFormat = _interopRequireDefault(require("dayjs/plugin/localizedFormat"));
var _weekday = _interopRequireDefault(require("dayjs/plugin/weekday"));
var _weekOfYear = _interopRequireDefault(require("dayjs/plugin/weekOfYear"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fieldProps"],
  _excluded2 = ["fieldProps"],
  _excluded3 = ["fieldProps"],
  _excluded4 = ["fieldProps"],
  _excluded5 = ["text", "valueType", "mode", "onChange", "renderFormItem", "value", "readonly", "fieldProps"],
  _excluded6 = ["placeholder"];
_dayjs.default.extend(_localeData.default);
_dayjs.default.extend(_advancedFormat.default);
_dayjs.default.extend(_isoWeek.default);
_dayjs.default.extend(_weekOfYear.default);
_dayjs.default.extend(_weekday.default);
_dayjs.default.extend(_localizedFormat.default);

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
  var pickFormItemProps = (0, _proUtils.pickProProps)(props.fieldProps);
  if (valueType.type === 'progress') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      text: text,
      fieldProps: (0, _objectSpread2.default)({
        status: valueType.status ? valueType.status : undefined
      }, pickFormItemProps)
    }));
  }
  if (valueType.type === 'money') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Money.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      locale: valueType.locale
    }, props), {}, {
      fieldProps: pickFormItemProps,
      text: text,
      moneySymbol: valueType.moneySymbol
    }));
  }
  if (valueType.type === 'percent') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Percent.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      text: text,
      showSymbol: valueType.showSymbol,
      precision: valueType.precision,
      fieldProps: pickFormItemProps,
      showColor: valueType.showColor
    }));
  }
  if (valueType.type === 'image') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
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
var defaultRenderText = exports.defaultRenderText = function defaultRenderText(dataValue, valueType, props, valueTypeMap) {
  var _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'read' : _props$mode,
    _props$emptyText = props.emptyText,
    emptyText = _props$emptyText === void 0 ? '-' : _props$emptyText;
  if (emptyText !== false && mode === 'read' && valueType !== 'option' && valueType !== 'switch') {
    if (typeof dataValue !== 'boolean' && typeof dataValue !== 'number' && !dataValue) {
      var fieldProps = props.fieldProps,
        render = props.render;
      if (render) {
        return render(dataValue, (0, _objectSpread2.default)({
          mode: mode
        }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: emptyText
        }));
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: emptyText
      });
    }
  }

  // eslint-disable-next-line no-param-reassign
  delete props.emptyText;
  if ((0, _typeof2.default)(valueType) === 'object') {
    return defaultRenderTextByObject(dataValue, valueType, props);
  }
  var customValueTypeConfig = valueTypeMap && valueTypeMap[valueType];
  if (customValueTypeConfig) {
    // eslint-disable-next-line no-param-reassign
    delete props.ref;
    if (mode === 'read') {
      var _customValueTypeConfi;
      return (_customValueTypeConfi = customValueTypeConfig.render) === null || _customValueTypeConfi === void 0 ? void 0 : _customValueTypeConfi.call(customValueTypeConfig, dataValue, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        text: dataValue
      }, props), {}, {
        mode: mode || 'read'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dataValue
      }));
    }
    if (mode === 'update' || mode === 'edit') {
      var _customValueTypeConfi2;
      return (_customValueTypeConfi2 = customValueTypeConfig.renderFormItem) === null || _customValueTypeConfi2 === void 0 ? void 0 : _customValueTypeConfi2.call(customValueTypeConfig, dataValue, (0, _objectSpread2.default)({
        text: dataValue
      }, props), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dataValue
      }));
    }
  }

  /** 如果是金额的值 */
  if (valueType === 'money') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Money.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      text: dataValue
    }));
  }

  /** 如果是日期的值 */
  if (valueType === 'date') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-MM-DD"
      }, props))
    });
  }

  /** 如果是周的值 */
  if (valueType === 'dateWeek') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-wo",
        picker: "week"
      }, props))
    });
  }

  /** 如果是周范围的值 */
  if (valueType === 'dateWeekRange') {
    var _fieldProps = props.fieldProps,
      otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-W",
        showTime: true,
        fieldProps: (0, _objectSpread2.default)({
          picker: 'week'
        }, _fieldProps)
      }, otherProps))
    });
  }

  /** 如果是月范围的值 */
  if (valueType === 'dateMonthRange') {
    var _fieldProps2 = props.fieldProps,
      _otherProps = (0, _objectWithoutProperties2.default)(props, _excluded2);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-MM",
        showTime: true,
        fieldProps: (0, _objectSpread2.default)({
          picker: 'month'
        }, _fieldProps2)
      }, _otherProps))
    });
  }

  /** 如果是季范围的值 */
  if (valueType === 'dateQuarterRange') {
    var _fieldProps3 = props.fieldProps,
      _otherProps2 = (0, _objectWithoutProperties2.default)(props, _excluded3);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-Q",
        showTime: true,
        fieldProps: (0, _objectSpread2.default)({
          picker: 'quarter'
        }, _fieldProps3)
      }, _otherProps2))
    });
  }

  /** 如果是年范围的值 */
  if (valueType === 'dateYearRange') {
    var _fieldProps4 = props.fieldProps,
      _otherProps3 = (0, _objectWithoutProperties2.default)(props, _excluded4);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY",
        showTime: true,
        fieldProps: (0, _objectSpread2.default)({
          picker: 'year'
        }, _fieldProps4)
      }, _otherProps3))
    });
  }

  /** 如果是月的值 */
  if (valueType === 'dateMonth') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-MM",
        picker: "month"
      }, props))
    });
  }

  /** 如果是季度的值 */
  if (valueType === 'dateQuarter') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-[Q]Q",
        picker: "quarter"
      }, props))
    });
  }

  /** 如果是年的值 */
  if (valueType === 'dateYear') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY",
        picker: "year"
      }, props))
    });
  }

  /** 如果是日期范围的值 */
  if (valueType === 'dateRange') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangePicker.default, (0, _objectSpread2.default)({
      text: dataValue,
      format: "YYYY-MM-DD"
    }, props));
  }

  /** 如果是日期加时间类型的值 */
  if (valueType === 'dateTime') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DatePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-MM-DD HH:mm:ss",
        showTime: true
      }, props))
    });
  }

  /** 如果是日期加时间类型的值的值 */
  if (valueType === 'dateTimeRange') {
    // 值不存在的时候显示 "-"
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "YYYY-MM-DD HH:mm:ss",
        showTime: true
      }, props))
    });
  }

  /** 如果是时间类型的值 */
  if (valueType === 'time') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimePicker.default, (0, _objectSpread2.default)({
        text: dataValue,
        format: "HH:mm:ss"
      }, props))
    });
  }

  /** 如果是时间类型的值 */
  if (valueType === 'timeRange') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TimePicker.FieldTimeRangePicker, (0, _objectSpread2.default)({
        text: dataValue,
        format: "HH:mm:ss"
      }, props))
    });
  }
  if (valueType === 'fromNow') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FromNow.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'index') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IndexColumn.default, {
      children: dataValue + 1
    });
  }
  if (valueType === 'indexBorder') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IndexColumn.default, {
      border: true,
      children: dataValue + 1
    });
  }
  if (valueType === 'progress') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      text: dataValue
    }));
  }
  /** 百分比, 默认展示符号, 不展示小数位 */
  if (valueType === 'percent') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Percent.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'avatar' && typeof dataValue === 'string' && props.mode === 'read') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Avatar, {
      src: dataValue,
      size: 22,
      shape: "circle"
    });
  }
  if (valueType === 'code') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Code.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'jsonCode') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Code.default, (0, _objectSpread2.default)({
      text: dataValue,
      language: "json"
    }, props));
  }
  if (valueType === 'textarea') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'digit') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Digit.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'digitRange') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DigitRange.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'second') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Second.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'select' || valueType === 'text' && (props.valueEnum || props.request)) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FieldHOC.default, {
      isLight: props.light,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, (0, _objectSpread2.default)({
        text: dataValue
      }, props))
    });
  }
  if (valueType === 'checkbox') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'radio') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'radioButton') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Radio.default, (0, _objectSpread2.default)({
      radioType: "button",
      text: dataValue
    }, props));
  }
  if (valueType === 'rate') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Rate.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'slider') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'switch') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Switch.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'option') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Options.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'password') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Password.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'image') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'cascader') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Cascader.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'treeSelect') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TreeSelect.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'color') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorPicker.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  if (valueType === 'segmented') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Segmented.default, (0, _objectSpread2.default)({
      text: dataValue
    }, props));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.default, (0, _objectSpread2.default)({
    text: dataValue
  }, props));
};
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
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded5);
  var context = (0, _react.useContext)(_proProvider.default);
  var onChangeCallBack = (0, _proUtils.useRefFunction)(function () {
    var _restFieldProps$onCha;
    for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
      restParams[_key] = arguments[_key];
    }
    restFieldProps === null || restFieldProps === void 0 || (_restFieldProps$onCha = restFieldProps.onChange) === null || _restFieldProps$onCha === void 0 || _restFieldProps$onCha.call.apply(_restFieldProps$onCha, [restFieldProps].concat(restParams));
    onChange === null || onChange === void 0 || onChange.apply(void 0, restParams);
  });
  var fieldProps = (0, _proUtils.useDeepCompareMemo)(function () {
    return (value !== undefined || restFieldProps) && (0, _objectSpread2.default)((0, _objectSpread2.default)({
      value: value
    }, (0, _proUtils.omitUndefined)(restFieldProps)), {}, {
      onChange: onChangeCallBack
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, restFieldProps, onChangeCallBack]);
  var renderedDom = defaultRenderText(mode === 'edit' ? (_ref2 = (_fieldProps$value = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) !== null && _fieldProps$value !== void 0 ? _fieldProps$value : text) !== null && _ref2 !== void 0 ? _ref2 : '' : (_ref3 = text !== null && text !== void 0 ? text : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) !== null && _ref3 !== void 0 ? _ref3 : '', valueType || 'text', (0, _proUtils.omitUndefined)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    ref: ref
  }, rest), {}, {
    mode: readonly ? 'read' : mode,
    renderFormItem: renderFormItem ? function (curText, props, dom) {
      var _placeholder = props.placeholder,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded6);
      var newDom = renderFormItem(curText, restProps, dom);
      // renderFormItem 之后的dom可能没有props，这里会帮忙注入一下
      if ( /*#__PURE__*/_react.default.isValidElement(newDom)) return /*#__PURE__*/_react.default.cloneElement(newDom, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), newDom.props || {}));
      return newDom;
    } : undefined,
    placeholder: renderFormItem ? undefined : (_rest$placeholder = rest === null || rest === void 0 ? void 0 : rest.placeholder) !== null && _rest$placeholder !== void 0 ? _rest$placeholder : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placeholder,
    fieldProps: (0, _proUtils.pickProProps)((0, _proUtils.omitUndefined)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
      placeholder: renderFormItem ? undefined : (_rest$placeholder2 = rest === null || rest === void 0 ? void 0 : rest.placeholder) !== null && _rest$placeholder2 !== void 0 ? _rest$placeholder2 : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placeholder
    })), (_Object$keys = Object.keys(context.valueTypeMap || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.includes(valueType))
  })), context.valueTypeMap || {});
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
    children: renderedDom
  });
};
var ProField = exports.ProField = /*#__PURE__*/_react.default.forwardRef(ProFieldComponent);
var _default = exports.default = ProField;