import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useCallback, useState } from 'react';
export default function useForceRender() {
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    setValue = _useState2[1];
  var updateValue = useCallback(function () {
    return setValue(function (oldValue) {
      return !oldValue;
    });
  }, []);
  return updateValue;
}