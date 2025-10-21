"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var FieldLabelFunction = function FieldLabelFunction(props, ref) {
  var _ConfigProvider$useCo, _ref2, _props$size;
  var label = props.label,
    onClear = props.onClear,
    value = props.value,
    disabled = props.disabled,
    onLabelClick = props.onLabelClick,
    ellipsis = props.ellipsis,
    placeholder = props.placeholder,
    className = props.className,
    formatter = props.formatter,
    bordered = props.bordered,
    style = props.style,
    downIcon = props.downIcon,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
    _props$valueMaxLength = props.valueMaxLength,
    valueMaxLength = _props$valueMaxLength === void 0 ? 41 : _props$valueMaxLength;
  var _ref = (_antd.ConfigProvider === null || _antd.ConfigProvider === void 0 || (_ConfigProvider$useCo = _antd.ConfigProvider.useConfig) === null || _ConfigProvider$useCo === void 0 ? void 0 : _ConfigProvider$useCo.call(_antd.ConfigProvider)) || {
      componentSize: 'middle'
    },
    componentSize = _ref.componentSize;
  var size = componentSize;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-core-field-label');
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var intl = (0, _proProvider.useIntl)();
  var clearRef = (0, _react.useRef)(null);
  var labelRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      labelRef: labelRef,
      clearRef: clearRef
    };
  });
  var wrapElements = function wrapElements(array) {
    if (array.every(function (item) {
      return typeof item === 'string';
    })) return array.join(',');
    return array.map(function (item, index) {
      var comma = index === array.length - 1 ? '' : ',';
      if (typeof item === 'string') {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          children: [item, comma]
        }, index);
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: {
          display: 'flex'
        },
        children: [item, comma]
      }, index);
    });
  };
  var formatterText = function formatterText(aValue) {
    if (formatter) {
      return formatter(aValue);
    }
    return Array.isArray(aValue) ? wrapElements(aValue) : aValue;
  };
  var getTextByValue = function getTextByValue(aLabel, aValue) {
    if (aValue !== undefined && aValue !== null && aValue !== '' && (!Array.isArray(aValue) || aValue.length)) {
      var _str$toString, _str$toString$slice;
      var prefix = aLabel ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        onClick: function onClick() {
          onLabelClick === null || onLabelClick === void 0 || onLabelClick();
        },
        className: "".concat(prefixCls, "-text"),
        children: [aLabel, ': ']
      }) : '';
      var str = formatterText(aValue);
      if (!ellipsis) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center'
          },
          children: [prefix, formatterText(aValue)]
        });
      }
      var getText = function getText() {
        var isArrayValue = Array.isArray(aValue) && aValue.length > 1;
        var unitText = intl.getMessage('form.lightFilter.itemUnit', '项');
        if (typeof str === 'string' && str.length > valueMaxLength && isArrayValue) {
          return "...".concat(aValue.length).concat(unitText);
        }
        return '';
      };
      var tail = getText();
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        title: typeof str === 'string' ? str : undefined,
        style: {
          display: 'inline-flex',
          alignItems: 'center'
        },
        children: [prefix, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: {
            paddingInlineStart: 4,
            display: 'flex'
          },
          children: typeof str === 'string' ? str === null || str === void 0 || (_str$toString = str.toString()) === null || _str$toString === void 0 || (_str$toString$slice = _str$toString.slice) === null || _str$toString$slice === void 0 ? void 0 : _str$toString$slice.call(_str$toString, 0, valueMaxLength) : str
        }), tail]
      });
    }
    return aLabel || placeholder;
  };
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: (0, _classnames.default)(prefixCls, hashId, "".concat(prefixCls, "-").concat((_ref2 = (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : size) !== null && _ref2 !== void 0 ? _ref2 : 'middle'), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-active"), (Array.isArray(value) ? value.length > 0 : !!value) || value === 0), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-bordered"), bordered), "".concat(prefixCls, "-allow-clear"), allowClear), className),
    style: style,
    ref: labelRef,
    onClick: function onClick() {
      var _props$onClick;
      props === null || props === void 0 || (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props);
    },
    children: [getTextByValue(label, value), (value || value === 0) && allowClear && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CloseCircleFilled, {
      role: "button",
      title: intl.getMessage('form.lightFilter.clear', '清除'),
      className: (0, _classnames.default)("".concat(prefixCls, "-icon"), hashId, "".concat(prefixCls, "-close")),
      onClick: function onClick(e) {
        if (!disabled) onClear === null || onClear === void 0 || onClear();
        e.stopPropagation();
      },
      ref: clearRef
    }), downIcon !== false ? downIcon !== null && downIcon !== void 0 ? downIcon : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DownOutlined, {
      className: (0, _classnames.default)("".concat(prefixCls, "-icon"), hashId, "".concat(prefixCls, "-arrow"))
    }) : null]
  }));
};
var FieldLabel = exports.FieldLabel = /*#__PURE__*/_react.default.forwardRef(FieldLabelFunction);