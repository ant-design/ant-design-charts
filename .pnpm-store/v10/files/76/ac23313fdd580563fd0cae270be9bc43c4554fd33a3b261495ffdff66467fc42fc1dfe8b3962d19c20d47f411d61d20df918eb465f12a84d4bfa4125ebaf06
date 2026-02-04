import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { AppContext } from "./appContext";
import { Routes } from "./browser";
import { Html } from "./html";
import { createClientRoutes } from "./routes";
// Get the root React component for ReactDOMServer.renderToString
export function getClientRootComponent(_x) {
  return _getClientRootComponent.apply(this, arguments);
}
function _getClientRootComponent() {
  _getClientRootComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(opts) {
    var basename, components, clientRoutes, rootContainer, _i, _arr, key, app;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          basename = opts.basename || '/';
          components = _objectSpread({}, opts.routeComponents); // todo 参数对齐
          clientRoutes = createClientRoutes({
            routesById: opts.routes,
            routeComponents: components,
            useStream: opts.useStream
          });
          opts.pluginManager.applyPlugins({
            key: 'patchClientRoutes',
            type: 'event',
            args: {
              routes: clientRoutes
            }
          });
          rootContainer =
          /*#__PURE__*/
          // 这里的 location 需要包含 basename, 否则会影响 StaticRouter 的匹配.
          // 由于 getClientRootComponent 方法会同时用于 ssr 和 ssg, 所以在调用该方法时需要注意传入的 location 是否包含 basename.
          // 1. 在用于 ssr 时传入的 location 来源于 request.url, 它是包含 basename 的, 所以没有问题.
          // 2. 但是在用于 ssg 时(static export), 需要注意传入的 locaiton 要拼接上 basename.
          React.createElement(StaticRouter, {
            basename: basename,
            location: opts.location
          }, /*#__PURE__*/React.createElement(Routes, null));
          for (_i = 0, _arr = [
          // Lowest to the highest priority
          'innerProvider', 'i18nProvider', 'accessProvider', 'dataflowProvider', 'outerProvider', 'rootContainer']; _i < _arr.length; _i++) {
            key = _arr[_i];
            rootContainer = opts.pluginManager.applyPlugins({
              type: 'modify',
              key: key,
              initialValue: rootContainer,
              args: {}
            });
          }
          app = /*#__PURE__*/React.createElement(AppContext.Provider, {
            value: {
              routes: opts.routes,
              routeComponents: opts.routeComponents,
              clientRoutes: clientRoutes,
              pluginManager: opts.pluginManager,
              basename: basename,
              clientLoaderData: {},
              serverLoaderData: opts.loaderData
            }
          }, rootContainer);
          return _context.abrupt("return", /*#__PURE__*/React.createElement(Html, opts, app));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getClientRootComponent.apply(this, arguments);
}