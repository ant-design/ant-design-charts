"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames2 = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 默认的 index 列容器，提供一个好看的 index
 *
 * @param param0
 */var IndexColumn = function IndexColumn(_ref, ref) {
  var _ref$border = _ref.border,
    border = _ref$border === void 0 ? false : _ref$border,
    children = _ref.children;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-field-index-column');

  // css
  var _useStyle = (0, _proUtils.useStyle)('IndexColumn', function () {
      return (0, _defineProperty2.default)({}, ".".concat(className), {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        '&-border': {
          color: '#fff',
          fontSize: '12px',
          lineHeight: '12px',
          backgroundColor: '#314659',
          borderRadius: '9px',
          '&.top-three': {
            backgroundColor: '#979797'
          }
        }
      });
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    className: (0, _classnames2.default)(className, hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(className, "-border"), border), 'top-three', children > 3)),
    children: children
  }));
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(IndexColumn);