"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGlobalStyleFactory = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _react = require("@emotion/react");
var _serialize = require("@emotion/serialize");
var _react2 = require("react");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 创建全局样式
 */
var createGlobalStyleFactory = exports.createGlobalStyleFactory = function createGlobalStyleFactory(useTheme) {
  return function () {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }
    return /*#__PURE__*/(0, _react2.memo)(function (props) {
      var theme = useTheme();
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Global, {
        styles: (0, _serialize.serializeStyles)(styles, undefined, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          theme: theme
        }))
      });
    });
  };
};