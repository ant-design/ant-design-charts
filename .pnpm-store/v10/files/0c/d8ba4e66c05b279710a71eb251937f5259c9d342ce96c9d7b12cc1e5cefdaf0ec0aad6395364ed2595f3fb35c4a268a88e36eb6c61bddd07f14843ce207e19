"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("react/jsx-runtime");
var ProCardActions = function ProCardActions(props) {
  var actions = props.actions,
    prefixCls = props.prefixCls;
  var _useStyle = (0, _style.default)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (Array.isArray(actions) && actions !== null && actions !== void 0 && actions.length) {
    return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      className: (0, _classnames.default)("".concat(prefixCls, "-actions"), hashId),
      children: actions.map(function (action, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          (0, _jsxRuntime.jsx)("li", {
            style: {
              width: "".concat(100 / actions.length, "%"),
              padding: 0,
              margin: 0
            },
            className: (0, _classnames.default)("".concat(prefixCls, "-actions-item"), hashId),
            children: action
          }, "action-".concat(index))
        );
      })
    }));
  }
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
    className: (0, _classnames.default)("".concat(prefixCls, "-actions"), hashId),
    children: actions
  }));
};
var _default = exports.default = ProCardActions;