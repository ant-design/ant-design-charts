"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelIconTip = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 在 form 的 label 后面增加一个 tips 来展示一些说明文案
 *
 * @param props
 */
var LabelIconTip = exports.LabelIconTip = /*#__PURE__*/_react.default.memo(function (props) {
  var label = props.label,
    tooltip = props.tooltip,
    ellipsis = props.ellipsis,
    subTitle = props.subTitle;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-core-label-tip');
  var _useStyle = (0, _style.useStyle)(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (!tooltip && !subTitle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: label
    });
  }
  var tooltipProps = typeof tooltip === 'string' || /*#__PURE__*/_react.default.isValidElement(tooltip) ? {
    title: tooltip
  } : tooltip;
  var icon = (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.icon) || /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.InfoCircleOutlined, {});
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)(className, hashId),
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.stopPropagation();
    },
    onMouseMove: function onMouseMove(e) {
      return e.stopPropagation();
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(className, "-title"), hashId, (0, _defineProperty2.default)({}, "".concat(className, "-title-ellipsis"), ellipsis)),
      children: label
    }), subTitle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(className, "-subtitle ").concat(hashId).trim(),
      children: subTitle
    }), tooltip && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, tooltipProps), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "".concat(className, "-icon ").concat(hashId).trim(),
        children: icon
      })
    }))]
  }));
});