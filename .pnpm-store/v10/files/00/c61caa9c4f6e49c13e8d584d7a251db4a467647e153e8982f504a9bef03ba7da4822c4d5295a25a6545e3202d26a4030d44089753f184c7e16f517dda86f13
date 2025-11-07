"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _context = _interopRequireDefault(require("../../x-provider/context"));
const defaultXComponentStyleConfig = {
  classNames: {},
  styles: {},
  className: '',
  style: {}
};
const useXComponentConfig = component => {
  const xProviderContext = _react.default.useContext(_context.default);
  return _react.default.useMemo(() => ({
    ...defaultXComponentStyleConfig,
    ...xProviderContext[component]
  }), [xProviderContext[component]]);
};
var _default = exports.default = useXComponentConfig;