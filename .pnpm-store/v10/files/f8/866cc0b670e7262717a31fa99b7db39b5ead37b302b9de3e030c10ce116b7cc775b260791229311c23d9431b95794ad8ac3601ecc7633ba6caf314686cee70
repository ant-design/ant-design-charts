"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _util = require("./util");
require("antd/lib/input-number/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------

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
  var intl = (0, _proProvider.useIntl)();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  var realValue = (0, _react.useMemo)(function () {
    return typeof text === 'string' && text.includes('%') ? (0, _util.toNumber)(text.replace('%', '')) : (0, _util.toNumber)(text);
  }, [text]);
  var showSymbol = (0, _react.useMemo)(function () {
    if (typeof propsShowSymbol === 'function') {
      return propsShowSymbol === null || propsShowSymbol === void 0 ? void 0 : propsShowSymbol(text);
    }
    return propsShowSymbol;
  }, [propsShowSymbol, text]);
  if (mode === 'read') {
    /** 颜色有待确定, 根据提供 colors: ['正', '负'] | boolean */
    var style = showColor ? {
      color: (0, _util.getColorByRealValue)(realValue)
    } : {};
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      style: style,
      ref: ref,
      children: [prefix && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: prefix
      }), showSymbol && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
        children: [(0, _util.getSymbolByRealValue)(realValue), " "]
      }), (0, _util.getRealTextWithPrecision)(Math.abs(realValue), precision), suffix && suffix]
    });
    if (render) {
      return render(text, (0, _objectSpread2.default)((0, _objectSpread2.default)({
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
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.InputNumber, (0, _objectSpread2.default)({
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
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldPercent);