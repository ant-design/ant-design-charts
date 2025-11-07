function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { history, useLocation, useRouteMeta, useSearchParams } from 'dumi';
import { useCallback } from 'react';
export var TAB_QUERY_KEY = 'tab';
export var useTabQueryState = function useTabQueryState() {
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var _useSearchParams = useSearchParams(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    params = _useSearchParams2[0];
  var setTabQueryState = useCallback(function (val) {
    if (val) params.set(TAB_QUERY_KEY, val);else params.delete(TAB_QUERY_KEY);
    history.push({
      pathname: pathname,
      search: "?".concat(params.toString())
    });
  }, [params, pathname]);
  return [params.get(TAB_QUERY_KEY), setTabQueryState];
};
export var useTabMeta = function useTabMeta() {
  var _tabs$find;
  var _useRouteMeta = useRouteMeta(),
    tabs = _useRouteMeta.tabs;
  var _useTabQueryState = useTabQueryState(),
    _useTabQueryState2 = _slicedToArray(_useTabQueryState, 1),
    tabKey = _useTabQueryState2[0];
  return tabs === null || tabs === void 0 ? void 0 : (_tabs$find = tabs.find(function (_ref) {
    var key = _ref.key;
    return tabKey === key;
  })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.meta;
};