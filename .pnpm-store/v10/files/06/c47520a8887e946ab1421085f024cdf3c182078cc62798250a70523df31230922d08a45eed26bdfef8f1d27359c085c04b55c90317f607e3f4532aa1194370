"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightWrapper = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["label", "size", "disabled", "onChange", "className", "style", "children", "valuePropName", "placeholder", "labelFormatter", "bordered", "footerRender", "allowClear", "otherFieldProps", "valueType", "placement"];
var LightWrapper = exports.LightWrapper = function LightWrapper(props) {
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
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-field-light-wrapper');
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0, _react.useState)(props[valuePropName]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    tempValue = _useState2[0],
    setTempValue = _useState2[1];
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(false),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
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
  var labelValueText = (0, _react.useMemo)(function () {
    var _valueType$toLowerCas;
    if (!labelValue) return labelValue;
    if (valueType !== null && valueType !== void 0 && (_valueType$toLowerCas = valueType.toLowerCase()) !== null && _valueType$toLowerCas !== void 0 && _valueType$toLowerCas.endsWith('range') && valueType !== 'digitRange' && !labelFormatter) {
      return (0, _proUtils.dateArrayFormatter)(labelValue, _proUtils.dateFormatterMap[valueType] || 'YYYY-MM-DD');
    }
    if (Array.isArray(labelValue)) return labelValue.map(function (item) {
      if ((0, _typeof2.default)(item) === 'object' && item.label && item.value) {
        return item.label;
      }
      return item;
    });
    return labelValue;
  }, [labelValue, valueType, labelFormatter]);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FilterDropdown, {
    disabled: disabled,
    open: open,
    onOpenChange: setOpen,
    placement: placement,
    label: /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FieldLabel, {
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
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-container"), hashId, className),
      style: style,
      children: /*#__PURE__*/_react.default.cloneElement(children, (0, _objectSpread3.default)((0, _objectSpread3.default)({}, rest), {}, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, valuePropName, tempValue), "onChange", function onChange(e) {
        setTempValue(e !== null && e !== void 0 && e.target ? e.target.value : e);
      }), children.props))
    })
  }));
};