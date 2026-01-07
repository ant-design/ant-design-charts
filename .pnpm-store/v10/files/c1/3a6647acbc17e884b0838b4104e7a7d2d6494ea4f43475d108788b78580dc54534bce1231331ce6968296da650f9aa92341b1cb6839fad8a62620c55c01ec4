import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { useCallback, useRef } from 'react';
var useRefFunction = function useRefFunction(reFunction) {
  var ref = useRef(null);
  ref.current = reFunction;
  return useCallback(function () {
    var _ref$current;
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }
    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.call.apply(_ref$current, [ref].concat(_toConsumableArray(rest)));
  }, []);
};
export { useRefFunction };