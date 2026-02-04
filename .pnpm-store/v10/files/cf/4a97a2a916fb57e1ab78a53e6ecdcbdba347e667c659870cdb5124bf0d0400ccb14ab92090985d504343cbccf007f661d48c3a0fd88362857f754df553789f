"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageLoading = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["isLoading", "pastDelay", "timedOut", "error", "retry"];
var PageLoading = exports.PageLoading = function PageLoading(_ref) {
  var isLoading = _ref.isLoading,
    pastDelay = _ref.pastDelay,
    timedOut = _ref.timedOut,
    error = _ref.error,
    retry = _ref.retry,
    reset = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      paddingBlockStart: 100,
      textAlign: 'center'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, (0, _objectSpread2.default)({
      size: "large"
    }, reset))
  });
};