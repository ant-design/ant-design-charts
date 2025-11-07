"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPE = void 0;
exports.createField = createField;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _classnames2 = _interopRequireDefault(require("classnames"));
var _rcFieldForm = require("rc-field-form");
var _warning = require("rc-util/lib/warning");
var _react = _interopRequireWildcard(require("react"));
var _FieldContext = _interopRequireDefault(require("../FieldContext"));
var _components = require("../components");
var _helpers = require("../helpers");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["valueType", "customLightMode", "lightFilterLabelFormatter", "valuePropName", "ignoreWidth", "defaultProps"],
  _excluded2 = ["label", "tooltip", "placeholder", "width", "bordered", "messageVariables", "ignoreFormItem", "transform", "convertValue", "readonly", "allowClear", "colSize", "getFormItemProps", "getFieldProps", "filedConfig", "cacheForSwr", "proFieldProps"];
var TYPE = exports.TYPE = Symbol('ProFormComponent');
var WIDTH_SIZE_ENUM = {
  // 适用于短数字，短文本或者选项
  xs: 104,
  s: 216,
  // 适用于较短字段录入、如姓名、电话、ID 等。
  sm: 216,
  m: 328,
  // 标准宽度，适用于大部分字段长度。
  md: 328,
  l: 440,
  // 适用于较长字段录入，如长网址、标签组、文件路径等。
  lg: 440,
  // 适用于长文本录入，如长链接、描述、备注等，通常搭配自适应多行输入框或定高文本域使用。
  xl: 552
};
var ignoreWidthValueType = ['switch', 'radioButton', 'radio', 'rate'];

/**
 * 处理fieldProps和formItemProps为function时传进来的方法
 * 目前只在SchemaForm时可能会有
 */

/**
 * 这个方法的主要作用是帮助 Field 增加 FormItem 同时也会处理 lightFilter
 *
 * @param Field
 * @param config
 */
function createField(Field, config) {
  // 标记是否是 ProForm 的组件
  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  Field.displayName = 'ProFormComponent';
  var FieldWithContext = function FieldWithContext(props) {
    var _props$filedConfig$co = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props === null || props === void 0 ? void 0 : props.filedConfig), config),
      tmpValueType = _props$filedConfig$co.valueType,
      customLightMode = _props$filedConfig$co.customLightMode,
      lightFilterLabelFormatter = _props$filedConfig$co.lightFilterLabelFormatter,
      _props$filedConfig$co2 = _props$filedConfig$co.valuePropName,
      valuePropName = _props$filedConfig$co2 === void 0 ? 'value' : _props$filedConfig$co2,
      ignoreWidth = _props$filedConfig$co.ignoreWidth,
      defaultProps = _props$filedConfig$co.defaultProps,
      defaultFormItemProps = (0, _objectWithoutProperties2.default)(_props$filedConfig$co, _excluded);
    var _defaultProps$props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), props),
      label = _defaultProps$props.label,
      tooltip = _defaultProps$props.tooltip,
      placeholder = _defaultProps$props.placeholder,
      width = _defaultProps$props.width,
      bordered = _defaultProps$props.bordered,
      messageVariables = _defaultProps$props.messageVariables,
      ignoreFormItem = _defaultProps$props.ignoreFormItem,
      transform = _defaultProps$props.transform,
      convertValue = _defaultProps$props.convertValue,
      readonly = _defaultProps$props.readonly,
      allowClear = _defaultProps$props.allowClear,
      colSize = _defaultProps$props.colSize,
      getFormItemProps = _defaultProps$props.getFormItemProps,
      getFieldProps = _defaultProps$props.getFieldProps,
      filedConfig = _defaultProps$props.filedConfig,
      cacheForSwr = _defaultProps$props.cacheForSwr,
      proFieldProps = _defaultProps$props.proFieldProps,
      rest = (0, _objectWithoutProperties2.default)(_defaultProps$props, _excluded2);
    var valueType = tmpValueType || rest.valueType;

    // 有些 valueType 不需要宽度
    var isIgnoreWidth = (0, _react.useMemo)(function () {
      return ignoreWidth || ignoreWidthValueType.includes(valueType);
    }, [ignoreWidth, valueType]);
    var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      forceUpdate = _useState2[1];

    // onChange触发fieldProps,formItemProps重新执行
    var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      onlyChange = _useState4[0],
      forceUpdateByOnChange = _useState4[1];

    /**
     * 从 context 中拿到的值
     */
    var contextValue = _react.default.useContext(_FieldContext.default);

    /**
     * dependenciesValues change to trigger re-execute of getFieldProps and getFormItemProps
     */
    var changedProps = (0, _proUtils.useDeepCompareMemo)(function () {
      return {
        formItemProps: getFormItemProps === null || getFormItemProps === void 0 ? void 0 : getFormItemProps(),
        fieldProps: getFieldProps === null || getFieldProps === void 0 ? void 0 : getFieldProps()
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getFieldProps, getFormItemProps, rest.dependenciesValues, onlyChange]);
    var fieldProps = (0, _proUtils.useDeepCompareMemo)(function () {
      var newFieldProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, ignoreFormItem ? (0, _proUtils.omitUndefined)({
        value: rest.value
      }) : {}), {}, {
        placeholder: placeholder,
        disabled: props.disabled
      }, contextValue.fieldProps), changedProps.fieldProps), rest.fieldProps);
      newFieldProps.style = (0, _proUtils.omitUndefined)(newFieldProps === null || newFieldProps === void 0 ? void 0 : newFieldProps.style);
      return newFieldProps;
    }, [ignoreFormItem, rest.value, rest.fieldProps, placeholder, props.disabled, contextValue.fieldProps, changedProps.fieldProps]);

    // restFormItemProps is user props pass to Form.Item
    var restFormItemProps = (0, _proUtils.pickProFormItemProps)(rest);
    var formItemProps = (0, _proUtils.useDeepCompareMemo)(function () {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, contextValue.formItemProps), restFormItemProps), changedProps.formItemProps), rest.formItemProps);
    }, [changedProps.formItemProps, contextValue.formItemProps, rest.formItemProps, restFormItemProps]);
    var otherProps = (0, _proUtils.useDeepCompareMemo)(function () {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({
        messageVariables: messageVariables
      }, defaultFormItemProps), formItemProps);
    }, [defaultFormItemProps, formItemProps, messageVariables]);
    (0, _warning.noteOnce)(
    // eslint-disable-next-line @typescript-eslint/dot-notation
    !rest['defaultValue'], '请不要在 Form 中使用 defaultXXX。如果需要默认值请使用 initialValues 和 initialValue。');
    var _useContext = (0, _react.useContext)(_rcFieldForm.FieldContext),
      prefixName = _useContext.prefixName;
    var proFieldKey = (0, _proUtils.useDeepCompareMemo)(function () {
      var _contextValue$formKey;
      var name = otherProps === null || otherProps === void 0 ? void 0 : otherProps.name;
      if (Array.isArray(name)) name = name.join('_');
      if (Array.isArray(prefixName) && name) name = "".concat(prefixName.join('.'), ".").concat(name);
      var key = name && "form-".concat((_contextValue$formKey = contextValue.formKey) !== null && _contextValue$formKey !== void 0 ? _contextValue$formKey : '', "-field-").concat(name);
      return key;

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [(0, _proUtils.stringify)(otherProps === null || otherProps === void 0 ? void 0 : otherProps.name), prefixName, contextValue.formKey]);
    var onChange = (0, _proUtils.useRefFunction)(function () {
      var _fieldProps$onChange;
      if (getFormItemProps || getFieldProps) {
        forceUpdateByOnChange([]);
      } else if (rest.renderFormItem) {
        forceUpdate([]);
      }
      for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
        restParams[_key] = arguments[_key];
      }
      fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 || _fieldProps$onChange.call.apply(_fieldProps$onChange, [fieldProps].concat(restParams));
    });
    var style = (0, _proUtils.useDeepCompareMemo)(function () {
      var newStyle = (0, _objectSpread2.default)({
        width: width && !WIDTH_SIZE_ENUM[width] ? width : contextValue.grid ? '100%' : undefined
      }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style);
      if (isIgnoreWidth) Reflect.deleteProperty(newStyle, 'width');
      return (0, _proUtils.omitUndefined)(newStyle);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [(0, _proUtils.stringify)(fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style), contextValue.grid, isIgnoreWidth, width]);
    var className = (0, _proUtils.useDeepCompareMemo)(function () {
      var isSizeEnum = width && WIDTH_SIZE_ENUM[width];
      return (0, _classnames2.default)(fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.className, (0, _defineProperty2.default)({
        'pro-field': isSizeEnum
      }, "pro-field-".concat(width), isSizeEnum && !isIgnoreWidth)) || undefined;
    }, [width, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.className, isIgnoreWidth]);
    var fieldProFieldProps = (0, _proUtils.useDeepCompareMemo)(function () {
      return (0, _proUtils.omitUndefined)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, contextValue.proFieldProps), {}, {
        mode: rest === null || rest === void 0 ? void 0 : rest.mode,
        readonly: readonly,
        params: rest.params,
        proFieldKey: proFieldKey,
        cacheForSwr: cacheForSwr
      }, proFieldProps));
    }, [contextValue.proFieldProps, rest === null || rest === void 0 ? void 0 : rest.mode, rest.params, readonly, proFieldKey, cacheForSwr, proFieldProps]);
    var fieldFieldProps = (0, _proUtils.useDeepCompareMemo)(function () {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({
        onChange: onChange,
        allowClear: allowClear
      }, fieldProps), {}, {
        style: style,
        className: className
      });
    }, [allowClear, className, onChange, fieldProps, style]);
    var field = (0, _proUtils.useDeepCompareMemo)(function () {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Field
      // @ts-ignore
      , (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
        fieldProps: fieldFieldProps,
        proFieldProps: fieldProFieldProps,
        ref: props === null || props === void 0 ? void 0 : props.fieldRef
      }), props.proFormFieldKey || props.name);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fieldProFieldProps, fieldFieldProps, rest]);

    // 使用useMemo包裹避免不必要的re-render
    var formItem = (0, _proUtils.useDeepCompareMemo)(function () {
      var _otherProps$name, _field$props$allowCle, _field$props, _field$props2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ProFormItem
      // 全局的提供一个 tip 功能，可以减少代码量
      // 轻量模式下不通过 FormItem 显示 label
      , (0, _objectSpread2.default)((0, _objectSpread2.default)({
        label: label && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.light) !== true ? label : undefined,
        tooltip: (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.light) !== true && tooltip,
        valuePropName: valuePropName
        // @ts-ignore
      }, otherProps), {}, {
        ignoreFormItem: ignoreFormItem,
        transform: transform,
        dataFormat: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format,
        valueType: valueType,
        messageVariables: (0, _objectSpread2.default)({
          label: label || ''
        }, otherProps === null || otherProps === void 0 ? void 0 : otherProps.messageVariables),
        convertValue: convertValue,
        lightProps: (0, _proUtils.omitUndefined)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
          valueType: valueType,
          bordered: bordered,
          allowClear: (_field$props$allowCle = field === null || field === void 0 || (_field$props = field.props) === null || _field$props === void 0 ? void 0 : _field$props.allowClear) !== null && _field$props$allowCle !== void 0 ? _field$props$allowCle : allowClear,
          light: proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.light,
          label: label,
          customLightMode: customLightMode,
          labelFormatter: lightFilterLabelFormatter,
          valuePropName: valuePropName,
          footerRender: field === null || field === void 0 || (_field$props2 = field.props) === null || _field$props2 === void 0 ? void 0 : _field$props2.footerRender
        }, rest.lightProps), otherProps.lightProps)),
        children: field
      }), props.proFormFieldKey || ((_otherProps$name = otherProps.name) === null || _otherProps$name === void 0 ? void 0 : _otherProps$name.toString()));
    }, [label, proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.light, tooltip, valuePropName, props.proFormFieldKey, otherProps, ignoreFormItem, transform, fieldProps, valueType, convertValue, bordered, field, allowClear, customLightMode, lightFilterLabelFormatter, rest.lightProps]);
    var _useGridHelpers = (0, _helpers.useGridHelpers)(rest),
      ColWrapper = _useGridHelpers.ColWrapper;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ColWrapper, {
      children: formItem
    });
  };
  var DependencyWrapper = function DependencyWrapper(props) {
    var dependencies = props.dependencies;
    return dependencies ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ProFormDependency, {
      name: dependencies,
      originDependencies: props === null || props === void 0 ? void 0 : props.originDependencies,
      children: function children(values) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(FieldWithContext, (0, _objectSpread2.default)({
          dependenciesValues: values,
          dependencies: dependencies
        }, props));
      }
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(FieldWithContext, (0, _objectSpread2.default)({
      dependencies: dependencies
    }, props));
  };
  return DependencyWrapper;
}