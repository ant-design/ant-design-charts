import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Global } from '@emotion/react';
import { serializeStyles } from '@emotion/serialize';
import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 创建全局样式
 */
export var createGlobalStyleFactory = function createGlobalStyleFactory(useTheme) {
  return function () {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }
    return /*#__PURE__*/memo(function (props) {
      var theme = useTheme();
      return /*#__PURE__*/_jsx(Global, {
        styles: serializeStyles(styles, undefined, _objectSpread(_objectSpread({}, props), {}, {
          theme: theme
        }))
      });
    });
  };
};