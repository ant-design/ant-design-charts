"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var FullScreenIcon = function FullScreenIcon() {
  var intl = (0, _proProvider.useIntl)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    fullscreen = _useState2[0],
    setFullscreen = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!(0, _proUtils.isBrowser)()) {
      return;
    }
    document.onfullscreenchange = function () {
      setFullscreen(!!document.fullscreenElement);
    };
  }, []);
  return fullscreen ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
    title: intl.getMessage('tableToolBar.exitFullScreen', '全屏'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.FullscreenExitOutlined, {})
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
    title: intl.getMessage('tableToolBar.fullScreen', '全屏'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.FullscreenOutlined, {})
  });
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(FullScreenIcon);