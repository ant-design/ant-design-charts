import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback, useRef, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function FieldHOC(props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    labelTrigger = _useState2[0],
    setLabelTrigger = _useState2[1];
  var lightLabel = useRef(null);

  // 是label且不是label里面的clear图标触发事件
  var isTriggeredByLabel = useCallback(function (e) {
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
    return /*#__PURE__*/_jsx("div", {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      children: /*#__PURE__*/React.cloneElement(props.children, {
        labelTrigger: labelTrigger,
        lightLabel: lightLabel
      })
    });
  }
  return /*#__PURE__*/_jsx(_Fragment, {
    children: props.children
  });
}
export default FieldHOC;