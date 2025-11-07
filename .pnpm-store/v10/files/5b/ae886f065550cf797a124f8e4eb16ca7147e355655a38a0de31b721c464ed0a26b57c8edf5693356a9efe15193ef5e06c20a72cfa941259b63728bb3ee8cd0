import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useMemo } from 'react';
import { useAntdStylish } from "./useAntdStylish";
import { useAntdToken } from "./useAntdToken";
export var useAntdTheme = function useAntdTheme() {
  var token = useAntdToken();
  var stylish = useAntdStylish();
  return useMemo(function () {
    return _objectSpread(_objectSpread({}, token), {}, {
      stylish: stylish
    });
  }, [token, stylish]);
};