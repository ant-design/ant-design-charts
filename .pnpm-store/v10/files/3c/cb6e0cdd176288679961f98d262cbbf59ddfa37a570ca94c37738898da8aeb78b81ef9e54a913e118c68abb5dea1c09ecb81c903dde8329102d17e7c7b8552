import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["prefetch"];
import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppData } from "./appContext";
import { useIntersectionObserver } from "./useIntersectionObserver";
function useForwardedRef(ref) {
  var innerRef = React.useRef(null);
  React.useEffect(function () {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });
  return innerRef;
}
export var LinkWithPrefetch = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var _props$to;
  var prefetchProp = props.prefetch,
    linkProps = _objectWithoutProperties(props, _excluded);
  var _ref = typeof window !== 'undefined' &&
    // @ts-ignore
    window.__umi_route_prefetch__ || {
      defaultPrefetch: 'none',
      defaultPrefetchTimeout: 50
    },
    defaultPrefetch = _ref.defaultPrefetch,
    defaultPrefetchTimeout = _ref.defaultPrefetchTimeout;
  var prefetch = (prefetchProp === true ? 'intent' : prefetchProp === false ? 'none' : prefetchProp) || defaultPrefetch;
  if (!['intent', 'render', 'viewport', 'none'].includes(prefetch)) {
    throw new Error("Invalid prefetch value ".concat(prefetch, " found in Link component"));
  }
  var appData = useAppData();
  var to = typeof props.to === 'string' ? props.to : (_props$to = props.to) === null || _props$to === void 0 ? void 0 : _props$to.pathname;
  var hasRenderFetched = React.useRef(false);
  var ref = useForwardedRef(forwardedRef);
  // prefetch intent
  var handleMouseEnter = function handleMouseEnter(e) {
    if (prefetch !== 'intent') return;
    var eventTarget = e.target || {};
    if (eventTarget.preloadTimeout) return;
    eventTarget.preloadTimeout = setTimeout(function () {
      var _appData$preloadRoute;
      eventTarget.preloadTimeout = null;
      (_appData$preloadRoute = appData.preloadRoute) === null || _appData$preloadRoute === void 0 || _appData$preloadRoute.call(appData, to);
    }, props.prefetchTimeout || defaultPrefetchTimeout);
  };
  var handleMouseLeave = function handleMouseLeave(e) {
    if (prefetch !== 'intent') return;
    var eventTarget = e.target || {};
    if (eventTarget.preloadTimeout) {
      clearTimeout(eventTarget.preloadTimeout);
      eventTarget.preloadTimeout = null;
    }
  };

  // prefetch render
  useLayoutEffect(function () {
    if (prefetch === 'render' && !hasRenderFetched.current) {
      var _appData$preloadRoute2;
      (_appData$preloadRoute2 = appData.preloadRoute) === null || _appData$preloadRoute2 === void 0 || _appData$preloadRoute2.call(appData, to);
      hasRenderFetched.current = true;
    }
  }, [prefetch, to]);

  // prefetch viewport
  useIntersectionObserver(ref, function (entry) {
    if (entry !== null && entry !== void 0 && entry.isIntersecting) {
      var _appData$preloadRoute3;
      (_appData$preloadRoute3 = appData.preloadRoute) === null || _appData$preloadRoute3 === void 0 || _appData$preloadRoute3.call(appData, to);
    }
  }, {
    rootMargin: '100px'
  }, {
    disabled: prefetch !== 'viewport'
  });

  // compatible with old code
  // which to might be undefined
  if (!to) return null;
  return /*#__PURE__*/React.createElement(Link, _extends({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, linkProps), props.children);
});