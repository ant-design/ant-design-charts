import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
var testId = 0;
export function useFetchData(props) {
  var abortRef = useRef(null);
  /** Key 是用来缓存请求的，如果不在是有问题 */
  var _useState = useState(function () {
      if (props.proFieldKey) {
        return props.proFieldKey.toString();
      }
      testId += 1;
      return testId.toString();
    }),
    _useState2 = _slicedToArray(_useState, 1),
    cacheKey = _useState2[0];
  var proFieldKeyRef = useRef(cacheKey);
  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _abortRef$current, _props$request;
      var abort, loadData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            (_abortRef$current = abortRef.current) === null || _abortRef$current === void 0 || _abortRef$current.abort();
            abort = new AbortController();
            abortRef.current = abort;
            _context.next = 5;
            return Promise.race([(_props$request = props.request) === null || _props$request === void 0 ? void 0 : _props$request.call(props, props.params, props), new Promise(function (_, reject) {
              var _abortRef$current2;
              (_abortRef$current2 = abortRef.current) === null || _abortRef$current2 === void 0 || (_abortRef$current2 = _abortRef$current2.signal) === null || _abortRef$current2 === void 0 || _abortRef$current2.addEventListener('abort', function () {
                reject(new Error('aborted'));
              });
            })]);
          case 5:
            loadData = _context.sent;
            return _context.abrupt("return", loadData);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();
  useEffect(function () {
    return function () {
      testId += 1;
    };
  }, []);
  var _useSWR = useSWR([proFieldKeyRef.current, props.params], fetchData, {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false
    }),
    data = _useSWR.data,
    error = _useSWR.error;
  return [data || error];
}