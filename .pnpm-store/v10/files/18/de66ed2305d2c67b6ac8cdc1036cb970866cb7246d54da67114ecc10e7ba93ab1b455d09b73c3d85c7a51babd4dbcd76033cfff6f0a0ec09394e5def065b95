"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRefCallback = useRefCallback;
var _react = require("react");
function useRefCallback(callback, initialValue) {
  var ref = (0, _react.useMemo)(function () {
    var defaultValue = {
      current: initialValue
    };
    return new Proxy(defaultValue, {
      set: function set(target, prop, newValue) {
        if (!Object.is(target[prop], newValue)) {
          target[prop] = newValue;
          callback(ref);
        }
        return true;
      }
    });
  }, []);
  return ref;
}