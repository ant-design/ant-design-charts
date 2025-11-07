function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import deepmerge from 'deepmerge';
import { getRouteMetaById, matchRoutes, useAppData, useLocation, useRouteData } from 'dumi';
import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from "./utils";
var cache = new Map();
var asyncCache = new Map();
var EMPTY_META = {
  frontmatter: {},
  toc: [],
  texts: []
};
var ASYNC_META_PROPS = ['texts'];
function getCachedRouteMeta(route) {
  var cacheKey = route.id;
  if (!cache.get(cacheKey)) {
    var _meta$tabs;
    var merge = function merge() {
      var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_META;
      if (route.meta) {
        Object.keys(route.meta).forEach(function (key) {
          var _ref, _ref$key;
          (_ref$key = (_ref = meta)[key]) !== null && _ref$key !== void 0 ? _ref$key : _ref[key] = route.meta[key];
        });
        meta.frontmatter = deepmerge(meta.frontmatter, route.meta.frontmatter, {
          arrayMerge: function arrayMerge(_destinationArray, sourceArray) {
            return sourceArray;
          }
        });
      }
      return meta;
    };
    var meta = merge(getRouteMetaById(route.id, {
      syncOnly: true
    }));
    var proxyGetter = function proxyGetter(target, prop) {
      if (ASYNC_META_PROPS.includes(prop)) {
        if (!asyncCache.get(cacheKey)) {
          var routeMetaPromise = getRouteMetaById(route.id);
          // load async meta then replace cache
          if (routeMetaPromise) {
            asyncCache.set(cacheKey, routeMetaPromise.then(function (full) {
              return cache.set(cacheKey, merge(full)).get(cacheKey);
            }));
          }
        }
        // throw promise to trigger suspense
        var currentCache = asyncCache.get(cacheKey);
        if (currentCache) {
          throw currentCache;
        }
      }
      return target[prop];
    };

    // load async meta if property accessed
    (_meta$tabs = meta.tabs) === null || _meta$tabs === void 0 ? void 0 : _meta$tabs.forEach(function (tab) {
      tab.meta = new Proxy(tab.meta, {
        get: proxyGetter
      });
    });
    var ret = new Proxy(meta, {
      get: proxyGetter
    });
    cache.set(cacheKey, ret);
  }
  return cache.get(cacheKey);
}

/**
 * hook for get matched route
 * @internal internal use. Do not use in your production code.
 */
export var useMatchedRoute = function useMatchedRoute() {
  var _useRouteData = useRouteData(),
    route = _useRouteData.route;
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var _useAppData = useAppData(),
    clientRoutes = _useAppData.clientRoutes;
  var getter = useCallback(function () {
    var ret;
    if (route.path === pathname && !('isLayout' in route)) {
      // use `useRouteData` result if matched, for performance
      ret = route;
    } else {
      var _matchRoutes;
      // match manually for dynamic route & layout component
      var matched = (_matchRoutes = matchRoutes(clientRoutes, pathname)) === null || _matchRoutes === void 0 ? void 0 : _matchRoutes.pop();
      ret = matched === null || matched === void 0 ? void 0 : matched.route;
    }
    return ret;
  }, [clientRoutes.length, pathname]);
  var _useState = useState(getter),
    _useState2 = _slicedToArray(_useState, 2),
    matchedRoute = _useState2[0],
    setMatchedRoute = _useState2[1];
  useIsomorphicLayoutEffect(function () {
    setMatchedRoute(getter);
  }, [clientRoutes.length, pathname]);
  return matchedRoute;
};

/**
 * hook for get matched route meta
 */
export var useRouteMeta = function useRouteMeta() {
  var route = useMatchedRoute();
  return getCachedRouteMeta(route);
};