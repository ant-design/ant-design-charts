import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["color", "check"];
import { CheckOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var Tag = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var color = _ref.color,
    check = _ref.check,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({}, rest), {}, {
    style: {
      backgroundColor: color
    },
    ref: ref,
    children: check ? /*#__PURE__*/_jsx(CheckOutlined, {}) : ''
  }));
});
var ThemeColor = function ThemeColor(_ref2) {
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
  return /*#__PURE__*/_jsx("div", {
    className: "".concat(baseClassName, " ").concat(hashId).trim(),
    children: colorList === null || colorList === void 0 ? void 0 : colorList.map(function (_ref3) {
      var key = _ref3.key,
        color = _ref3.color,
        title = _ref3.title;
      if (!key) return null;
      return /*#__PURE__*/_jsx(Tooltip, {
        title: title !== null && title !== void 0 ? title : formatMessage({
          id: "app.setting.themecolor.".concat(key)
        }),
        children: /*#__PURE__*/_jsx(Tag, {
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
export { ThemeColor };