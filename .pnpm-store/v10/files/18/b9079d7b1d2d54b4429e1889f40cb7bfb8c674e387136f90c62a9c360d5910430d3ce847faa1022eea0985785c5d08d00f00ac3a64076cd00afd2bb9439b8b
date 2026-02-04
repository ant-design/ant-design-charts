function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useNavData } from 'dumi';
import { useCallback, useEffect, useRef, useState } from 'react';
import useSearchData from "./useSearchData";
var worker;

// for ssr
if (typeof window !== 'undefined') {
  // use blob to avoid generate entry(chunk) for worker
  worker = new Worker(URL.createObjectURL(
  // @ts-ignore
  new Blob([SEARCH_WORKER_CODE], {
    type: 'application/javascript'
  })));
}
export var useSiteSearch = function useSiteSearch() {
  var debounceTimer = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    keywords = _useState4[0],
    setKeywords = _useState4[1];
  var navData = useNavData();
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    result = _useState6[0],
    setResult = _useState6[1];
  var _useSearchData = useSearchData(),
    _useSearchData2 = _slicedToArray(_useSearchData, 2),
    data = _useSearchData2[0],
    load = _useSearchData2[1];
  var setter = useCallback(function (val) {
    load();
    setLoading(true);
    setKeywords(val);
  }, []);
  var routes = data === null || data === void 0 ? void 0 : data[0];
  var demos = data === null || data === void 0 ? void 0 : data[1];
  useEffect(function () {
    worker.onmessage = function (e) {
      setResult(e.data);
      setLoading(false);
    };
  }, []);
  useEffect(function () {
    if (!routes || !demos) return;
    worker.postMessage({
      action: 'generate-metadata',
      args: {
        routes: JSON.parse(JSON.stringify(routes)),
        nav: navData,
        demos: demos
      }
    });
  }, [routes, demos, navData]);
  useEffect(function () {
    if (!routes) return;
    var str = keywords.trim();
    if (str) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = window.setTimeout(function () {
        worker.postMessage({
          action: 'get-search-result',
          args: {
            keywords: str
          }
        });
      }, 200);
    } else {
      setResult([]);
    }
  }, [keywords, routes]);
  return {
    keywords: keywords,
    setKeywords: setter,
    result: result,
    loading: loading,
    load: load
  };
};