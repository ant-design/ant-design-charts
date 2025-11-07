"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function FieldHOC(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    labelTrigger = _useState2[0],
    setLabelTrigger = _useState2[1];
  var lightLabel = (0, _react.useRef)(null);

  // 是label且不是label里面的clear图标触发事件
  var isTriggeredByLabel = (0, _react.useCallback)(function (e) {
    var _lightLabel$current, _lightLabel$current2;
    // 两条语句结果分别命名，可读性好点
    var isLabelMouseDown = (_lightLabel$current = lightLabel.current) === null || _lightLabel$current === void 0 || (_lightLabel$current = _lightLabel$current.labelRef) === null || _lightLabel$current === void 0 || (_lightLabel$current = _lightLabel$current.current) === null || _lightLabel$current === void 0 ? void 0 : _lightLabel$current.contains(e.target);
    var isClearMouseDown = (_lightLabel$current2 = lightLabel.current) === null || _lightLabel$current2 === void 0 || (_lightLabel$current2 = _lightLabel$current2.clearRef) === null || _lightLabel$current2 === void 0 || (_lightLabel$current2 = _lightLabel$current2.current) === null || _lightLabel$current2 === void 0 ? void 0 : _lightLabel$current2.contains(e.target);
    return isLabelMouseDown && !isClearMouseDown;
  }, [lightLabel]);
  var handleMouseDown = function handleMouseDown(e) {
    if (isTriggeredByLabel(e)) {
      setLabelTrigger(true);
    }
  };
  var handleMouseUp = function handleMouseUp() {
    setLabelTrigger(false);
  };
  if (props.isLight) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      children: /*#__PURE__*/_react.default.cloneElement(props.children, {
        labelTrigger: labelTrigger,
        lightLabel: lightLabel
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: props.children
  });
}
var _default = exports.default = FieldHOC;