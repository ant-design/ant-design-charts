"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
require("antd/lib/input/style");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------

/**
 * Input.TextArea 只读模式时渲染的组件
 *
 * @param
 */var FieldTextAreaReadonly = function FieldTextAreaReadonly(_ref, ref) {
  var text = _ref.text,
    fieldProps = _ref.fieldProps;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var readonlyClassName = getPrefixCls('pro-field-readonly');
  var compClassName = "".concat(readonlyClassName, "-textarea");
  var _useStyle = (0, _proUtils.useStyle)('TextArea', function () {
      return (0, _defineProperty2.default)({}, ".".concat(compClassName), {
        display: 'inline-block',
        lineHeight: '1.5715',
        maxWidth: '100%',
        whiteSpace: 'pre-wrap'
      });
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("span", (0, _objectSpread2.default)((0, _objectSpread2.default)({
    ref: ref,
    className: (0, _classnames.default)(hashId, readonlyClassName, compClassName)
  }, (0, _omit.default)(fieldProps, ['autoSize', 'classNames', 'styles'])), {}, {
    children: text !== null && text !== void 0 ? text : '-'
  })));
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldTextAreaReadonly);