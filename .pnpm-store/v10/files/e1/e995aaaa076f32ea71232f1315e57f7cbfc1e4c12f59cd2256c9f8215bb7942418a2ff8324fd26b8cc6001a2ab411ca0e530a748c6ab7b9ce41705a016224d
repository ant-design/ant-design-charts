"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
require("antd/lib/input-number/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------

/**
 * 数字范围组件
 *
 * @param FieldDigitRangeProps
 */
var FieldDigitRange = function FieldDigitRange(_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    placeholder = _ref.placeholder,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    _ref$separator = _ref.separator,
    separator = _ref$separator === void 0 ? '~' : _ref$separator,
    _ref$separatorWidth = _ref.separatorWidth,
    separatorWidth = _ref$separatorWidth === void 0 ? 30 : _ref$separatorWidth;
  var value = fieldProps.value,
    defaultValue = fieldProps.defaultValue,
    onChange = fieldProps.onChange,
    id = fieldProps.id;
  var intl = (0, _proProvider.useIntl)();
  var _proTheme$useToken = _proProvider.proTheme.useToken(),
    token = _proTheme$useToken.token;
  var _useMergedState = (0, _useMergedState3.default)(function () {
      return defaultValue;
    }, {
      value: value,
      onChange: onChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    valuePair = _useMergedState2[0],
    setValuePair = _useMergedState2[1];
  var valuePairRef = (0, _react.useRef)(valuePair);
  if (type === 'read') {
    var getContent = function getContent(number) {
      var _fieldProps$formatter;
      var digit = new Intl.NumberFormat(undefined, (0, _objectSpread2.default)({
        minimumSignificantDigits: 2
      }, (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.intlProps) || {})).format(Number(number));
      return (fieldProps === null || fieldProps === void 0 || (_fieldProps$formatter = fieldProps.formatter) === null || _fieldProps$formatter === void 0 ? void 0 : _fieldProps$formatter.call(fieldProps, digit)) || digit;
    };
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      ref: ref,
      children: [getContent(text[0]), " ", separator, " ", getContent(text[1])]
    });
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    var handleGroupBlur = function handleGroupBlur() {
      if (Array.isArray(valuePairRef.current)) {
        //   仅在两个值均为数字时才做比较并转换
        var _valuePairRef$current = (0, _slicedToArray2.default)(valuePairRef.current, 2),
          value0 = _valuePairRef$current[0],
          value1 = _valuePairRef$current[1];
        if (typeof value0 === 'number' && typeof value1 === 'number' && value0 > value1) {
          setValuePair([value1, value0]);
        } else if (value0 === undefined && value1 === undefined) {
          // 当两个值均为undefined时将值变为undefined，方便required处理
          setValuePair(undefined);
        }
      }
    };
    var handleChange = function handleChange(index, changedValue) {
      var newValuePair = (0, _toConsumableArray2.default)(valuePair || []);
      newValuePair[index] = changedValue === null ? undefined : changedValue;
      valuePairRef.current = newValuePair;
      setValuePair(newValuePair);
    };
    var placeholderValue = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.placeholder) || placeholder || [intl.getMessage('tableForm.inputPlaceholder', '请输入'), intl.getMessage('tableForm.inputPlaceholder', '请输入')];
    var getInputNumberPlaceholder = function getInputNumberPlaceholder(index) {
      return Array.isArray(placeholderValue) ? placeholderValue[index] : placeholderValue;
    };
    var Compact = _antd.Space.Compact || _antd.Input.Group;
    var compactProps = !!_antd.Space.Compact ? {} : {
      compact: true
    };
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)(Compact, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, compactProps), {}, {
      onBlur: handleGroupBlur,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.InputNumber, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
        placeholder: getInputNumberPlaceholder(0),
        id: id !== null && id !== void 0 ? id : "".concat(id, "-0"),
        style: {
          width: "calc((100% - ".concat(separatorWidth, "px) / 2)")
        },
        value: valuePair === null || valuePair === void 0 ? void 0 : valuePair[0],
        defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue[0],
        onChange: function onChange(changedValue) {
          return handleChange(0, changedValue);
        }
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, {
        style: {
          width: separatorWidth,
          textAlign: 'center',
          borderInlineStart: 0,
          borderInlineEnd: 0,
          pointerEvents: 'none',
          backgroundColor: token === null || token === void 0 ? void 0 : token.colorBgContainer
        },
        placeholder: separator,
        disabled: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.InputNumber, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
        placeholder: getInputNumberPlaceholder(1),
        id: id !== null && id !== void 0 ? id : "".concat(id, "-1"),
        style: {
          width: "calc((100% - ".concat(separatorWidth, "px) / 2)"),
          borderInlineStart: 0
        },
        value: valuePair === null || valuePair === void 0 ? void 0 : valuePair[1],
        defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue[1],
        onChange: function onChange(changedValue) {
          return handleChange(1, changedValue);
        }
      }))]
    }));
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: type
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldDigitRange);