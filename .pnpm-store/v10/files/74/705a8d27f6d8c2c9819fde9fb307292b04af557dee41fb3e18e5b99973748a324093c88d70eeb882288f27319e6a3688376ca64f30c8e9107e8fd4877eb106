function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useLocale, useLocation, useRouteMeta, useSiteData } from 'dumi';
import { useState } from 'react';
import { pickRouteSortMeta, useLocaleDocRoutes, useRouteDataComparer } from "./utils";
var DEFAULT_GROUP_STUB_TITLE = '$default-group-title';
export var getLocaleClearPath = function getLocaleClearPath(routePath, locale) {
  return 'base' in locale ? routePath.replace(locale.base.slice(1), '').replace(/^\//, '') : routePath;
};

/**
 * get parent path from route path
 */
export function getRouteParentPath(path, _ref) {
  var meta = _ref.meta,
    is2LevelNav = _ref.is2LevelNav,
    locale = _ref.locale;
  var indexDocRegex = new RegExp("/index(\\.".concat(locale.id, ")?.md$"));
  var isIndexDocRoute = (meta === null || meta === void 0 ? void 0 : meta.frontmatter.filename) && indexDocRegex.test(meta.frontmatter.filename) && !meta._atom_route && is2LevelNav;
  var paths = path.split('/')
  // strip end slash
  .filter(Boolean);
  var sliceEnd = Math.min(Math.max(
  // increase 1 level if route file is index.md
  isIndexDocRoute ? paths.length : paths.length - 1,
  // least 1-level
  1),
  // up to 2-level when use conventional 2-level nav
  is2LevelNav ? 2 : Infinity);
  return paths.slice(0, sliceEnd).join('/');
}

/**
 * hook for get sidebar data for all nav
 */
export var useFullSidebarData = function useFullSidebarData() {
  var locale = useLocale();
  var routes = useLocaleDocRoutes();
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig,
    is2LevelNav = _useSiteData._2_level_nav_available;
  var sidebarDataComparer = useRouteDataComparer();
  var _useState = useState(function () {
      // auto generate sidebar data from routes
      var data = Object.values(routes).reduce(function (ret, route) {
        var clearPath = getLocaleClearPath(route.path, locale);

        // skip index routes
        if (clearPath && route.meta) {
          var _ret$parentPath, _ret$parentPath$title, _ret$parentPath$title2;
          // extract parent path from route path
          // normal examples:
          //   a => /a
          //   en-US/a => /en-US/a
          //   a/b => /a
          //   en-US/a/b => /en-US/a
          // convention 2-level navs examples:
          //   a/b => /a/b (if route file is a/b/index.md)
          //   a/b/c => /a/b
          var parentPath = "/".concat(route.path.replace(clearPath, function (s) {
            return getRouteParentPath(s, {
              is2LevelNav: is2LevelNav,
              meta: route.meta,
              locale: locale
            });
          }));
          var _pickRouteSortMeta = pickRouteSortMeta({
              order: 0
            }, 'group', route.meta.frontmatter),
            title = _pickRouteSortMeta.title,
            order = _pickRouteSortMeta.order;
          var titleKey = title || DEFAULT_GROUP_STUB_TITLE;

          // create group data by nav path & group name
          (_ret$parentPath = ret[parentPath]) !== null && _ret$parentPath !== void 0 ? _ret$parentPath : ret[parentPath] = {};
          ret[parentPath][titleKey] = {
            title: title,
            order: ((_ret$parentPath$title = ret[parentPath][titleKey]) === null || _ret$parentPath$title === void 0 ? void 0 : _ret$parentPath$title.order) || order,
            children: [].concat(_toConsumableArray(((_ret$parentPath$title2 = ret[parentPath][titleKey]) === null || _ret$parentPath$title2 === void 0 ? void 0 : _ret$parentPath$title2.children) || []), [{
              title: route.meta.frontmatter.title,
              link: "/".concat(route.path),
              order: route.meta.frontmatter.order || 0,
              frontmatter: route.meta.frontmatter
            }])
          };
        }
        return ret;
      }, {});

      // destruct sidebar data into sidebar config
      var sidebarConfig = Object.entries(data).reduce(function (ret, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          navPath = _ref3[0],
          groups = _ref3[1];
        ret[navPath] = Object.values(groups).sort(sidebarDataComparer);
        // sort group children by order or title
        ret[navPath].forEach(function (group) {
          return group.children.sort(sidebarDataComparer);
        });
        return ret;
      }, {});

      // allow user partial override
      return Object.assign(sidebarConfig, themeConfig.sidebar);
    }),
    _useState2 = _slicedToArray(_useState, 1),
    sidebar = _useState2[0];
  return sidebar;
};
function getLeafMeta(data) {
  var leafMeta = {
    order: 0,
    title: ''
  };
  var _iterator = _createForOfIteratorHelper(data),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var group = _step.value;
      var _iterator2 = _createForOfIteratorHelper(group.children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if ('frontmatter' in item) {
            pickRouteSortMeta(leafMeta, 'nav', item.frontmatter);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return leafMeta;
}

/**
 * hook for get full sidebar data in tree structure
 */
export var useTreeSidebarData = function useTreeSidebarData() {
  var original = useFullSidebarData();
  var sidebarDataComparer = useRouteDataComparer();
  var _useState3 = useState(function () {
      var data = Object.entries(original)
      // match from the deepest level
      .sort(function (a, b) {
        return b[0].split('/').length - a[0].split('/').length;
      }).reduce(function (ret, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          path = _ref5[0],
          data = _ref5[1];
        var parent = path.replace(/\/[^/]+$/, '');
        if (parent) {
          var _ret$parent;
          // handle nested sidebar data
          // init parent first
          (_ret$parent = ret[parent]) !== null && _ret$parent !== void 0 ? _ret$parent : ret[parent] = _objectSpread({
            path: parent,
            children: original[parent] || []
          }, getLeafMeta(original[parent] || []));
          if (ret[path]) {
            // sort children first
            ret[path].children.sort(sidebarDataComparer);
            // put n-level sidebar data as parent children
            ret[parent].children.push(ret[path]);
            delete ret[path];
          } else {
            var _ret$parent$children;
            // put last-level sidebar data as parent children
            (_ret$parent$children = ret[parent].children).push.apply(_ret$parent$children, _toConsumableArray(data));
          }
        } else {
          // sort children first
          data.sort(sidebarDataComparer);
          // put top-level sidebar data
          ret[path] = _objectSpread({
            path: path,
            children: data
          }, getLeafMeta(data));
        }
        return ret;
      }, {});
      return Object.values(data);
    }),
    _useState4 = _slicedToArray(_useState3, 1),
    sidebar = _useState4[0];
  return sidebar;
};

/**
 * hook for get sidebar data for current nav
 */
export var useSidebarData = function useSidebarData() {
  var locale = useLocale();
  var sidebar = useFullSidebarData();
  var _useSiteData2 = useSiteData(),
    is2LevelNav = _useSiteData2._2_level_nav_available;
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var meta = useRouteMeta();
  var clearPath = getLocaleClearPath(pathname.slice(1), locale);
  // extract parent path from location pathname
  // /a => /a
  // /a/b => /a
  // /en-US/a => /en-US/a
  // /en-US/a/b => /en-US/a
  // /en-US/a/b/ => /en-US/a (also strip trailing /)
  var parentPath = clearPath ? pathname.replace(clearPath, function (s) {
    return getRouteParentPath(s, {
      is2LevelNav: is2LevelNav,
      meta: meta,
      locale: locale
    });
  }) : pathname;
  return parentPath ? sidebar[parentPath] : [];
};