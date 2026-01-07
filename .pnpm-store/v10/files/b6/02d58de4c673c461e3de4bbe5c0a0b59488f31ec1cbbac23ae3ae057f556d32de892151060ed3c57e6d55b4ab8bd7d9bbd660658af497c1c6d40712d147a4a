"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("react/jsx-runtime");
var ProCardDivider = function ProCardDivider(props) {
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var proCardPrefixCls = getPrefixCls('pro-card');
  var prefixCls = "".concat(proCardPrefixCls, "-divider");
  var _useStyle = (0, _style.default)(proCardPrefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = props.className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    type = props.type;
  var classString = (0, _classnames.default)(prefixCls, className, hashId, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-").concat(type), type));
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classString,
    style: style
  }));
};
var _default = exports.default = ProCardDivider;