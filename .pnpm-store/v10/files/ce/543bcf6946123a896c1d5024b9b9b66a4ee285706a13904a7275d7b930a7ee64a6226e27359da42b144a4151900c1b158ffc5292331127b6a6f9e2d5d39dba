import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["element"];
import React from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';
import { fetchServerLoader } from "./dataFetcher";
import { useRouteData } from "./routeContext";
export var AppContext = /*#__PURE__*/React.createContext({});
export function useAppData() {
  return React.useContext(AppContext);
}
export function useSelectedRoutes() {
  var location = useLocation();
  var _useAppData = useAppData(),
    clientRoutes = _useAppData.clientRoutes;
  // use `useLocation` get location without `basename`, not need `basename` param
  var routes = matchRoutes(clientRoutes, location.pathname);
  return routes || [];
}
export function useRouteProps() {
  var _currentRoute$;
  var currentRoute = useSelectedRoutes().slice(-1);
  var _ref = ((_currentRoute$ = currentRoute[0]) === null || _currentRoute$ === void 0 ? void 0 : _currentRoute$.route) || {},
    _ = _ref.element,
    props = _objectWithoutProperties(_ref, _excluded);
  return props;
}
// @deprecated  Please use `useLoaderData` instead.
export function useServerLoaderData() {
  var routes = useSelectedRoutes();
  var _useAppData2 = useAppData(),
    serverLoaderData = _useAppData2.serverLoaderData,
    basename = _useAppData2.basename;
  var _React$useState = React.useState(function () {
      var ret = {};
      var has = false;
      routes.forEach(function (route) {
        // 多级路由嵌套时，需要合并多级路由 serverLoader 的数据
        var routeData = serverLoaderData[route.route.id];
        if (routeData) {
          Object.assign(ret, routeData);
          has = true;
        }
      });
      return has ? ret : undefined;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    data = _React$useState2[0],
    setData = _React$useState2[1];
  React.useEffect(function () {
    if (!window.__UMI_LOADER_DATA__) {
      // 支持 ssr 降级，客户端兜底加载 serverLoader 数据
      Promise.all(routes.filter(function (route) {
        return route.route.hasServerLoader;
      }).map(function (route) {
        return new Promise(function (resolve) {
          fetchServerLoader({
            id: route.route.id,
            basename: basename,
            cb: resolve
          });
        });
      })).then(function (datas) {
        if (datas.length) {
          var res = {};
          datas.forEach(function (data) {
            Object.assign(res, data);
          });
          setData(res);
        }
      });
    }
  }, []);
  return {
    data: data
  };
}

// @deprecated  Please use `useLoaderData` instead.
export function useClientLoaderData() {
  var route = useRouteData();
  var appData = useAppData();
  return {
    data: appData.clientLoaderData[route.route.id]
  };
}
export function useLoaderData() {
  var serverLoaderData = useServerLoaderData();
  var clientLoaderData = useClientLoaderData();
  return {
    data: _objectSpread(_objectSpread({}, serverLoaderData.data), clientLoaderData.data)
  };
}