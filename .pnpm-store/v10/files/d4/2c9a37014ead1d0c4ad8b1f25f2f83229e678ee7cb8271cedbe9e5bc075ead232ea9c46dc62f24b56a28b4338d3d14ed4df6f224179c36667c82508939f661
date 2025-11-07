import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import raf from "rc-util/es/raf";
import React, { useEffect, useRef, useState } from 'react';
var useIndicator = function useIndicator(options) {
  var activeTabOffset = options.activeTabOffset,
    horizontal = options.horizontal,
    rtl = options.rtl,
    indicatorSize = options.indicatorSize,
    indicatorAlign = options.indicatorAlign;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    inkStyle = _useState2[0],
    setInkStyle = _useState2[1];
  var inkBarRafRef = useRef();
  var getLength = React.useCallback(function (origin) {
    if (typeof indicatorSize === 'function') {
      return indicatorSize(origin);
    }
    if (typeof indicatorSize === 'number') {
      return indicatorSize;
    }
    return origin;
  }, [indicatorSize]);

  // Delay set ink style to avoid remove tab blink
  function cleanInkBarRaf() {
    raf.cancel(inkBarRafRef.current);
  }
  useEffect(function () {
    var newInkStyle = {};
    if (activeTabOffset) {
      if (horizontal) {
        newInkStyle.width = getLength(activeTabOffset.width);
        var key = rtl ? 'right' : 'left';
        if (indicatorAlign === 'start') {
          newInkStyle[key] = activeTabOffset[key];
        }
        if (indicatorAlign === 'center') {
          newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width / 2;
          newInkStyle.transform = rtl ? 'translateX(50%)' : 'translateX(-50%)';
        }
        if (indicatorAlign === 'end') {
          newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width;
          newInkStyle.transform = 'translateX(-100%)';
        }
      } else {
        newInkStyle.height = getLength(activeTabOffset.height);
        if (indicatorAlign === 'start') {
          newInkStyle.top = activeTabOffset.top;
        }
        if (indicatorAlign === 'center') {
          newInkStyle.top = activeTabOffset.top + activeTabOffset.height / 2;
          newInkStyle.transform = 'translateY(-50%)';
        }
        if (indicatorAlign === 'end') {
          newInkStyle.top = activeTabOffset.top + activeTabOffset.height;
          newInkStyle.transform = 'translateY(-100%)';
        }
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = raf(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, horizontal, rtl, indicatorSize, indicatorAlign, getLength]);
  return {
    style: inkStyle
  };
};
export default useIndicator;