"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeColor = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["color", "check"];
var Tag = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var color = _ref.color,
    check = _ref.check,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
    style: {
      backgroundColor: color
    },
    ref: ref,
    children: check ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CheckOutlined, {}) : ''
  }));
});
var ThemeColor = exports.ThemeColor = function ThemeColor(_ref2) {
  var value = _ref2.value,
    colorList = _ref2.colorList,
    onChange = _ref2.onChange,
    prefixCls = _ref2.prefixCls,
    formatMessage = _ref2.formatMessage,
    hashId = _ref2.hashId;
  if (!colorList || (colorList === null || colorList === void 0 ? void 0 : colorList.length) < 1) {
    return null;
  }
  var baseClassName = "".concat(prefixCls, "-theme-color");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(baseClassName, " ").concat(hashId).trim(),
    children: colorList === null || colorList === void 0 ? void 0 : colorList.map(function (_ref3) {
      var key = _ref3.key,
        color = _ref3.color,
        title = _ref3.title;
      if (!key) return null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
        title: title !== null && title !== void 0 ? title : formatMessage({
          id: "app.setting.themecolor.".concat(key)
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Tag, {
          className: "".concat(baseClassName, "-block ").concat(hashId).trim(),
          color: color,
          check: value === color,
          onClick: function onClick() {
            return onChange && onChange(color);
          }
        })
      }, color);
    })
  });
};