import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["redirect"];
// @ts-ignore
import React from 'react';
import { generatePath, Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { useAppData, useRouteProps } from "./appContext";
import { RouteContext, useRouteData } from "./routeContext";
export function createClientRoutes(opts) {
  var routesById = opts.routesById,
    parentId = opts.parentId,
    routeComponents = opts.routeComponents,
    _opts$useStream = opts.useStream,
    useStream = _opts$useStream === void 0 ? true : _opts$useStream;
  return Object.keys(routesById).filter(function (id) {
    return routesById[id].parentId === parentId;
  }).map(function (id) {
    var route = createClientRoute(_objectSpread(_objectSpread({
      route: routesById[id],
      routeComponent: routeComponents[id],
      loadingComponent: opts.loadingComponent,
      reactRouter5Compat: opts.reactRouter5Compat
    }, opts.reactRouter5Compat && {
      // TODO: 这个不准，没考虑 patchClientRoutes 的场景
      hasChildren: Object.keys(routesById).filter(function (rid) {
        return routesById[rid].parentId === id;
      }).length > 0
    }), {}, {
      useStream: useStream
    }));
    var children = createClientRoutes({
      routesById: routesById,
      routeComponents: routeComponents,
      parentId: route.id,
      loadingComponent: opts.loadingComponent,
      reactRouter5Compat: opts.reactRouter5Compat,
      useStream: useStream
    });
    if (children.length > 0) {
      route.children = children;
      // TODO: remove me
      // compatible with @ant-design/pro-layout
      route.routes = children;
    }
    return route;
  });
}
function NavigateWithParams(props) {
  var params = useParams();
  var to = generatePath(props.to, params);
  var routeProps = useRouteProps();
  var location = useLocation();
  if (routeProps !== null && routeProps !== void 0 && routeProps.keepQuery) {
    var queryAndHash = location.search + location.hash;
    to += queryAndHash;
  }
  var propsWithParams = _objectSpread(_objectSpread({}, props), {}, {
    to: to
  });
  return /*#__PURE__*/React.createElement(Navigate, _extends({
    replace: true
  }, propsWithParams));
}
function createClientRoute(opts) {
  var route = opts.route,
    _opts$useStream2 = opts.useStream,
    useStream = _opts$useStream2 === void 0 ? true : _opts$useStream2;
  var redirect = route.redirect,
    props = _objectWithoutProperties(route, _excluded);
  var Remote = opts.reactRouter5Compat ? RemoteComponentReactRouter5 : RemoteComponent;
  return _objectSpread({
    element: redirect ? /*#__PURE__*/React.createElement(NavigateWithParams, {
      to: redirect
    }) : /*#__PURE__*/React.createElement(RouteContext.Provider, {
      value: {
        route: opts.route
      }
    }, /*#__PURE__*/React.createElement(Remote, {
      loader: /*#__PURE__*/React.memo(opts.routeComponent),
      loadingComponent: opts.loadingComponent || DefaultLoading,
      hasChildren: opts.hasChildren,
      useStream: useStream
    }))
  }, props);
}
function DefaultLoading() {
  return /*#__PURE__*/React.createElement("div", null);
}
function RemoteComponentReactRouter5(props) {
  var _useRouteData = useRouteData(),
    route = _useRouteData.route;
  var _useAppData = useAppData(),
    history = _useAppData.history,
    clientRoutes = _useAppData.clientRoutes;
  var params = useParams();
  var match = {
    params: params,
    isExact: true,
    path: route.path,
    url: history.location.pathname
  };

  // staticContext 没有兼容 好像没看到对应的兼容写法
  var Component = props.loader;
  var ComponentProps = {
    location: history.location,
    match: match,
    history: history,
    params: params,
    route: route,
    routes: clientRoutes
  };
  return props.useStream ? /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React.createElement(props.loadingComponent, null)
  }, /*#__PURE__*/React.createElement(Component, ComponentProps, props.hasChildren && /*#__PURE__*/React.createElement(Outlet, null))) : /*#__PURE__*/React.createElement(Component, ComponentProps, props.hasChildren && /*#__PURE__*/React.createElement(Outlet, null));
}
function RemoteComponent(props) {
  var Component = props.loader;
  return props.useStream ? /*#__PURE__*/React.createElement(React.Suspense, {
    fallback: /*#__PURE__*/React.createElement(props.loadingComponent, null)
  }, /*#__PURE__*/React.createElement(Component, null)) : /*#__PURE__*/React.createElement(Component, null);
}