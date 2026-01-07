"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useProxyImperativeHandle;
var _react = require("react");
// Proxy the dom ref with `{ nativeElement, otherFn }` type
// ref: https://github.com/ant-design/ant-design/discussions/45242

function useProxyImperativeHandle(ref, init) {
  return (0, _react.useImperativeHandle)(ref, () => {
    const refObj = init();
    const {
      nativeElement
    } = refObj;
    return new Proxy(nativeElement, {
      get(obj, prop) {
        if (refObj[prop]) {
          return refObj[prop];
        }
        return Reflect.get(obj, prop);
      }
    });
  });
}