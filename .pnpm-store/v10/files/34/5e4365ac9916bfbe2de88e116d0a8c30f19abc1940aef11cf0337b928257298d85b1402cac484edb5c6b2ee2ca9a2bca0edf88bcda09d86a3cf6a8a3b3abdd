function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { useFullSidebarData, useLocale, useSiteData } from 'dumi';
import { useState } from 'react';
import { getLocaleClearPath, getRouteParentPath } from "./useSidebarData";
import { getLocaleNav, pickRouteSortMeta, useLocaleDocRoutes, useRouteDataComparer } from "./utils";
function genNavItem(meta, groups, activePath, link) {
  return _objectSpread({
    title: meta.title || groups[0].title || groups[0].children[0].title,
    order: meta.order || 0,
    activePath: activePath
  }, link ? {
    link: link
  } : {});
}

/**
 * hook for get nav data
 */
export var useNavData = function useNavData() {
  var locale = useLocale();
  var routes = useLocaleDocRoutes();
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig,
    is2LevelNav = _useSiteData._2_level_nav_available;
  var sidebar = useFullSidebarData();
  var sidebarDataComparer = useRouteDataComparer();
  var _useState = useState(function () {
      // use user config first
      var userNavValue = [];
      var mode;
      if (themeConfig.nav) {
        // 形如：{mode: "append", value: []}
        if ('mode' in themeConfig.nav && typeof themeConfig.nav.mode === 'string') {
          mode = themeConfig.nav.mode;
          userNavValue = getLocaleNav(themeConfig.nav.value, locale);
        } else if (!('mode' in themeConfig.nav)) {
          // 形如：[] 或 {"zh-CN": []}
          userNavValue = getLocaleNav(themeConfig.nav, locale);
        }
        if (!mode || mode === 'override') return userNavValue;
      }

      // fallback to generate nav data from sidebar data
      var data = Object.values(Object.entries(sidebar)
      // make sure shallow nav item before deep
      .sort(function (_ref, _ref2) {
        var _ref3 = _slicedToArray(_ref, 1),
          a = _ref3[0];
        var _ref4 = _slicedToArray(_ref2, 1),
          b = _ref4[0];
        return a.split('/').length - b.split('/').length;
      })
      // convert sidebar data to nav data
      .reduce(function (ret, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          link = _ref6[0],
          groups = _ref6[1];
        var clearPath = getLocaleClearPath(link.replace(/^\//, ''), locale);
        var parentPath = link.replace(clearPath, function (s) {
          return getRouteParentPath(s, {
            is2LevelNav: is2LevelNav,
            locale: locale
          });
        });
        var isNestedNav = link.length > parentPath.length && is2LevelNav;
        var _Object$values$reduce = Object.values(routes).reduce(function (ret, route) {
            // find routes which within the nav path
            if (route.path.startsWith(link.slice(1))) {
              pickRouteSortMeta(ret[0], 'nav', route.meta.frontmatter);
              // generate parent meta for nested nav
              if (isNestedNav) pickRouteSortMeta(ret[1], 'nav.second', route.meta.frontmatter);
            }
            return ret;
          }, [{}, {}]),
          _Object$values$reduce2 = _slicedToArray(_Object$values$reduce, 2),
          firstMeta = _Object$values$reduce2[0],
          secondMeta = _Object$values$reduce2[1];
        if (isNestedNav) {
          var _firstMeta$title, _ret$parentPath, _second$children;
          // fallback to use parent path as 1-level nav title
          (_firstMeta$title = firstMeta.title) !== null && _firstMeta$title !== void 0 ? _firstMeta$title : firstMeta.title = parentPath.split('/').pop().replace(/^[a-z]/, function (s) {
            return s.toUpperCase();
          });

          // handle nested nav item as parent children
          var second = (_ret$parentPath = ret[parentPath]) !== null && _ret$parentPath !== void 0 ? _ret$parentPath : ret[parentPath] = genNavItem(firstMeta, groups, parentPath);
          (_second$children = second.children) !== null && _second$children !== void 0 ? _second$children : second.children = [];
          second.children.push(genNavItem(secondMeta, groups, link, groups[0].children[0].link));
        } else {
          // handle root nav item
          ret[link] = genNavItem(firstMeta, groups, link, groups[0].children[0].link);
        }
        return ret;
      }, {}));
      data.forEach(function (item, i) {
        var _item$children;
        // item.link => the parent link is not in routes, but has children, will use parent.title or children.title
        if (!item.link && ((_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length) === 1) {
          // hoist nav item if only one child
          var first = item.children[0];
          data[i] = _objectSpread(_objectSpread({}, first), {}, {
            title: (item === null || item === void 0 ? void 0 : item.title) || first.title
          });
        } else if (item.children) {
          // sort nav item children by order or title
          item.children.sort(sidebarDataComparer);
        }
      });
      // sort nav items by order or title
      data.sort(sidebarDataComparer);
      if (mode === 'prepend') data.unshift.apply(data, _toConsumableArray(userNavValue));else if (mode === 'append') data.push.apply(data, _toConsumableArray(userNavValue));
      return data;
    }),
    _useState2 = _slicedToArray(_useState, 1),
    nav = _useState2[0];
  return nav;
};