import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["isLoading", "pastDelay", "timedOut", "error", "retry"];
import { Spin } from 'antd';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var PageLoading = function PageLoading(_ref) {
  var isLoading = _ref.isLoading,
    pastDelay = _ref.pastDelay,
    timedOut = _ref.timedOut,
    error = _ref.error,
    retry = _ref.retry,
    reset = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("div", {
    style: {
      paddingBlockStart: 100,
      textAlign: 'center'
    },
    children: /*#__PURE__*/_jsx(Spin, _objectSpread({
      size: "large"
    }, reset))
  });
};
export { PageLoading };