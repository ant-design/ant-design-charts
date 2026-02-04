import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
export function useIntersectionObserver(ref, callback) {
  var intersectionObserverOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // check if IntersectionObserver is available
  if (typeof IntersectionObserver !== 'function') return null;
  var isIntersectionObserverAvailable = React.useRef(typeof IntersectionObserver === 'function');
  var observerRef = React.useRef(null);
  React.useEffect(function () {
    if (!ref.current || !isIntersectionObserverAvailable.current || options.disabled) {
      return;
    }
    observerRef.current = new IntersectionObserver(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        entry = _ref2[0];
      callback(entry);
    }, intersectionObserverOptions);
    observerRef.current.observe(ref.current);
    return function () {
      var _observerRef$current;
      (_observerRef$current = observerRef.current) === null || _observerRef$current === void 0 || _observerRef$current.disconnect();
    };
  }, [callback, intersectionObserverOptions, options.disabled, ref]);
  return observerRef.current;
}