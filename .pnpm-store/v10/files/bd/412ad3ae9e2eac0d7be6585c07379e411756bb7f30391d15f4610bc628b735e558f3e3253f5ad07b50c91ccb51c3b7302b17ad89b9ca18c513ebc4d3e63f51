"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _StopLoading = _interopRequireDefault(require("../StopLoading"));
var _ActionButton = _interopRequireWildcard(require("./ActionButton"));
function LoadingButton(props, ref) {
  const {
    prefixCls
  } = React.useContext(_ActionButton.ActionButtonContext);
  const {
    className
  } = props;
  return /*#__PURE__*/React.createElement(_ActionButton.default, (0, _extends2.default)({
    icon: /*#__PURE__*/React.createElement(_StopLoading.default, {
      className: `${prefixCls}-loading-icon`
    }),
    color: "primary",
    variant: "text",
    shape: "circle"
  }, props, {
    className: (0, _classnames.default)(className, `${prefixCls}-loading-button`),
    action: "onCancel",
    ref: ref
  }));
}
var _default = exports.default = /*#__PURE__*/React.forwardRef(LoadingButton);