"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useForceRender;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useForceRender() {
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    setValue = _useState2[1];
  var updateValue = (0, _react.useCallback)(function () {
    return setValue(function (oldValue) {
      return !oldValue;
    });
  }, []);
  return updateValue;
}