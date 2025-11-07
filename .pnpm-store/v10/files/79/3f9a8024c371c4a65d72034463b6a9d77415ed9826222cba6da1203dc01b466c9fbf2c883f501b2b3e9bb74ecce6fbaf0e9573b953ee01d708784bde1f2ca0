import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
// compatible with < react@18 in @umijs/preset-umi/src/features/react
import ReactDOM from 'react-dom/client';
import { matchRoutes, Router, useRoutes } from 'react-router-dom';
import { AppContext, useAppData } from "./appContext";
import { fetchServerLoader } from "./dataFetcher";
import { Html } from "./html";
import { createClientRoutes } from "./routes";
var root = null;

// react 18 some scenarios need unmount such as micro app
export function __getRoot() {
  return root;
}

/**
 * 这个组件的功能是 history 发生改变的时候重新触发渲染
 * @param props
 * @returns
 */
function BrowserRoutes(props) {
  var history = props.history;
  var _React$useState = React.useState({
      action: history.action,
      location: history.location
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  useLayoutEffect(function () {
    return history.listen(setState);
  }, [history]);
  useLayoutEffect(function () {
    function onRouteChange(opts) {
      props.pluginManager.applyPlugins({
        key: 'onRouteChange',
        type: 'event',
        args: {
          routes: props.routes,
          clientRoutes: props.clientRoutes,
          location: opts.location,
          action: opts.action,
          basename: props.basename,
          isFirst: Boolean(opts.isFirst)
        }
      });
    }
    onRouteChange({
      location: state.location,
      action: state.action,
      isFirst: true
    });
    return history.listen(onRouteChange);
  }, [history, props.routes, props.clientRoutes]);
  return /*#__PURE__*/React.createElement(Router, {
    navigator: history,
    location: state.location,
    basename: props.basename
  }, props.children);
}
export function Routes() {
  var _useAppData = useAppData(),
    clientRoutes = _useAppData.clientRoutes;
  return useRoutes(clientRoutes);
}

/**
 * umi 渲染需要的配置，在node端调用的哦
 */

/**
 * umi max 所需要的所有插件列表，用于获取provide
 */
var UMI_CLIENT_RENDER_REACT_PLUGIN_LIST = [
// Lowest to the highest priority
'innerProvider', 'i18nProvider', 'accessProvider', 'dataflowProvider', 'outerProvider', 'rootContainer'];

/**
 *
 * @param {RenderClientOpts} opts - 插件相关的配置
 * @param {React.ReactElement} routesElement 需要渲染的 routers，为了方便测试注入才导出
 * @returns @returns A function that returns a React component.
 */
var getBrowser = function getBrowser(opts, routesElement) {
  var basename = opts.basename || '/';
  var clientRoutes = createClientRoutes({
    routesById: opts.routes,
    routeComponents: opts.routeComponents,
    loadingComponent: opts.loadingComponent,
    reactRouter5Compat: opts.reactRouter5Compat,
    useStream: opts.useStream
  });
  opts.pluginManager.applyPlugins({
    key: 'patchClientRoutes',
    type: 'event',
    args: {
      routes: clientRoutes
    }
  });
  var rootContainer = /*#__PURE__*/React.createElement(BrowserRoutes, {
    basename: basename,
    pluginManager: opts.pluginManager,
    routes: opts.routes,
    clientRoutes: clientRoutes,
    history: opts.history
  }, routesElement);

  // 加载所有需要的插件
  for (var _i = 0, _UMI_CLIENT_RENDER_RE = UMI_CLIENT_RENDER_REACT_PLUGIN_LIST; _i < _UMI_CLIENT_RENDER_RE.length; _i++) {
    var key = _UMI_CLIENT_RENDER_RE[_i];
    rootContainer = opts.pluginManager.applyPlugins({
      type: 'modify',
      key: key,
      initialValue: rootContainer,
      args: {
        routes: opts.routes,
        history: opts.history,
        plugin: opts.pluginManager
      }
    });
  }

  /**
   * umi 增加完 Provide 的 react dom，可以直接交给 react-dom 渲染
   * @returns {React.ReactElement}
   */
  var Browser = function Browser() {
    var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      clientLoaderData = _useState2[0],
      setClientLoaderData = _useState2[1];
    var _useState3 = useState(window.__UMI_LOADER_DATA__ || {}),
      _useState4 = _slicedToArray(_useState3, 2),
      serverLoaderData = _useState4[0],
      setServerLoaderData = _useState4[1];
    var handleRouteChange = useCallback(function (id, isFirst) {
      var _matchRoutes;
      // Patched routes has to id
      var matchedRouteIds = (((_matchRoutes = matchRoutes(clientRoutes, id, basename)) === null || _matchRoutes === void 0 ? void 0 : _matchRoutes.map(
      // @ts-ignore
      function (route) {
        return route.route.id;
      })) || []).filter(Boolean);
      matchedRouteIds.forEach(function (id) {
        var _opts$routes$id, _opts$routes$id2;
        // preload lazy component
        // window.__umi_route_prefetch__ is available when routePrefetch and manifest config is enabled
        if (window.__umi_route_prefetch__) {
          var _opts$routeComponents;
          // ref: https://github.com/facebook/react/blob/0940414/packages/react/src/ReactLazy.js#L135
          var lazyCtor = (_opts$routeComponents = opts.routeComponents[id]) === null || _opts$routeComponents === void 0 || (_opts$routeComponents = _opts$routeComponents._payload) === null || _opts$routeComponents === void 0 ? void 0 : _opts$routeComponents._result;
          if (typeof lazyCtor == 'function') {
            lazyCtor();
          }
        }
        var clientLoader = (_opts$routes$id = opts.routes[id]) === null || _opts$routes$id === void 0 ? void 0 : _opts$routes$id.clientLoader;
        var hasClientLoader = !!clientLoader;
        var hasServerLoader = (_opts$routes$id2 = opts.routes[id]) === null || _opts$routes$id2 === void 0 ? void 0 : _opts$routes$id2.hasServerLoader;
        // server loader
        // use ?. since routes patched with patchClientRoutes is not exists in opts.routes

        if (!isFirst && hasServerLoader && !hasClientLoader && !window.__UMI_LOADER_DATA__) {
          fetchServerLoader({
            id: id,
            basename: basename,
            cb: function cb(data) {
              // setServerLoaderData when startTransition because if ssr is enabled,
              // the component may being hydrated and setLoaderData will break the hydration
              React.startTransition(function () {
                setServerLoaderData(function (d) {
                  return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, id, data));
                });
              });
            }
          });
        }
        // client loader
        // onPatchClientRoutes 添加的 route 在 opts.routes 里是不存在的
        var hasClientLoaderDataInRoute = !!clientLoaderData[id];

        // Check if hydration is needed or there's no server loader for the current route
        var shouldHydrateOrNoServerLoader = hasClientLoader && clientLoader.hydrate || !hasServerLoader;

        // Check if server loader data is missing in the global window object
        var isServerLoaderDataMissing = hasServerLoader && !window.__UMI_LOADER_DATA__;
        if (hasClientLoader && !hasClientLoaderDataInRoute && (shouldHydrateOrNoServerLoader || isServerLoaderDataMissing)) {
          // ...
          clientLoader({
            serverLoader: function serverLoader() {
              return fetchServerLoader({
                id: id,
                basename: basename,
                cb: function cb(data) {
                  // setServerLoaderData when startTransition because if ssr is enabled,
                  // the component may being hydrated and setLoaderData will break the hydration
                  React.startTransition(function () {
                    setServerLoaderData(function (d) {
                      return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, id, data));
                    });
                  });
                }
              });
            }
          }).then(function (data) {
            setClientLoaderData(function (d) {
              return _objectSpread(_objectSpread({}, d), {}, _defineProperty({}, id, data));
            });
          });
        }
      });
    }, [clientLoaderData]);
    useEffect(function () {
      handleRouteChange(window.location.pathname, true);
      return opts.history.listen(function (e) {
        handleRouteChange(e.location.pathname);
      });
    }, []);
    useLayoutEffect(function () {
      if (typeof opts.callback === 'function') opts.callback();
    }, []);
    return /*#__PURE__*/React.createElement(AppContext.Provider, {
      value: {
        routes: opts.routes,
        routeComponents: opts.routeComponents,
        clientRoutes: clientRoutes,
        pluginManager: opts.pluginManager,
        rootElement: opts.rootElement,
        basename: basename,
        clientLoaderData: clientLoaderData,
        serverLoaderData: serverLoaderData,
        preloadRoute: handleRouteChange,
        history: opts.history
      }
    }, rootContainer);
  };
  return Browser;
};

/**
 *  执行 react dom 的 render 方法
 * @param {RenderClientOpts} opts - 插件相关的配置
 * @returns void
 */
export function renderClient(opts) {
  var rootElement = opts.rootElement || document.getElementById('root');
  var Browser = getBrowser(opts, /*#__PURE__*/React.createElement(Routes, null));
  // 为了测试，直接返回组件
  if (opts.components) return Browser;
  if (opts.hydrate) {
    var loaderData = window.__UMI_LOADER_DATA__ || {};
    var metadata = window.__UMI_METADATA_LOADER_DATA__ || {};
    var hydtateHtmloptions = {
      metadata: metadata,
      loaderData: loaderData,
      mountElementId: opts.mountElementId
    };
    var _isInternal = opts.__INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.pureApp || opts.__INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.pureHtml;
    ReactDOM.hydrateRoot(_isInternal ? rootElement : document, _isInternal ? /*#__PURE__*/React.createElement(Browser, null) : /*#__PURE__*/React.createElement(Html, hydtateHtmloptions, /*#__PURE__*/React.createElement(Browser, null)));
    return;
  }
  if (ReactDOM.createRoot) {
    root = ReactDOM.createRoot(rootElement);
    root.render( /*#__PURE__*/React.createElement(Browser, null));
    return;
  }
  // @ts-ignore
  ReactDOM.render( /*#__PURE__*/React.createElement(Browser, null), rootElement);
}