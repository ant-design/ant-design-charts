import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useLayoutEffect, useState } from 'react';
export default function useMediaQuery(mediaQuery) {
  var isSsr = typeof window === 'undefined';
  var _useState = useState(function () {
      return isSsr ? false : window.matchMedia(mediaQuery).matches;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    matches = _useState2[0],
    setMatches = _useState2[1];
  useLayoutEffect(function () {
    if (isSsr) {
      return;
    }
    var mediaQueryList = window.matchMedia(mediaQuery);
    var listener = function listener(e) {
      return setMatches(e.matches);
    };
    mediaQueryList.addListener(listener);
    return function () {
      return mediaQueryList.removeListener(listener);
    };
  }, [mediaQuery]);
  return matches;
}