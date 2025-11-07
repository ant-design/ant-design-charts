"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genCopyable = void 0;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var isNeedTranText = function isNeedTranText(item) {
  var _item$valueType;
  if (item !== null && item !== void 0 && (_item$valueType = item.valueType) !== null && _item$valueType !== void 0 && _item$valueType.toString().startsWith('date')) {
    return true;
  }
  if ((item === null || item === void 0 ? void 0 : item.valueType) === 'select' || item !== null && item !== void 0 && item.valueEnum) {
    return true;
  }
  return false;
};
var getEllipsis = function getEllipsis(item) {
  var _item$ellipsis;
  if (((_item$ellipsis = item.ellipsis) === null || _item$ellipsis === void 0 ? void 0 : _item$ellipsis.showTitle) === false) {
    return false;
  }
  return item.ellipsis;
};

/**
 * 生成 Copyable 或 Ellipsis 的 dom
 *
 * @param dom
 * @param item
 * @param text
 */
var genCopyable = exports.genCopyable = function genCopyable(dom, item, text) {
  if (item.copyable || item.ellipsis) {
    var copyable = item.copyable && text ? {
      text: text,
      tooltips: ['', '']
    } : undefined;

    /** 有些 valueType 需要设置copy的为string */
    var needTranText = isNeedTranText(item);
    var ellipsis = getEllipsis(item) && text ? {
      tooltip:
      // 支持一下 tooltip 的关闭
      (item === null || item === void 0 ? void 0 : item.tooltip) !== false && needTranText ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pro-table-tooltip-text",
        children: dom
      }) : text
    } : false;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Text, {
      style: {
        width: '100%',
        margin: 0,
        padding: 0
      },
      title: "",
      copyable: copyable,
      ellipsis: ellipsis,
      children: dom
    });
  }
  return dom;
};