"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useReactiveRef = useReactiveRef;
var _useForceRender = _interopRequireDefault(require("../useForceRender"));
var _useRefCallback = require("../useRefCallback");
function useReactiveRef(initialValue) {
  var forceRender = (0, _useForceRender.default)();
  var ref = (0, _useRefCallback.useRefCallback)(forceRender, initialValue);
  return ref;
}