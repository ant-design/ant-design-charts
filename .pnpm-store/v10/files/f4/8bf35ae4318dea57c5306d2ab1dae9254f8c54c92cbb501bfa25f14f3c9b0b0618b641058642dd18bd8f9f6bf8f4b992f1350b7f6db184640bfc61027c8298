import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { useCallback, useEffect, useRef } from 'react';
import { useRefFunction } from "../useRefFunction";
/**
 * 一个去抖的 hook，传入一个 function，返回一个去抖后的 function
 * @param  {(...args:T) => Promise<any>} fn
 * @param  {number} wait?
 */
export function useDebounceFn(fn, wait) {
  var callback = useRefFunction(fn);
  var timer = useRef();
  var cancel = useCallback(function () {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);
  var run = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _len,
      args,
      _key,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = _args2[_key];
          }
          if (!(wait === 0 || wait === undefined)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", callback.apply(void 0, args));
        case 3:
          cancel();
          return _context2.abrupt("return", new Promise(function (resolve) {
            timer.current = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = resolve;
                    _context.next = 3;
                    return callback.apply(void 0, args);
                  case 3:
                    _context.t1 = _context.sent;
                    (0, _context.t0)(_context.t1);
                    return _context.abrupt("return");
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })), wait);
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [callback, cancel, wait]);
  useEffect(function () {
    return cancel;
  }, [cancel]);
  return {
    run: run,
    cancel: cancel
  };
}