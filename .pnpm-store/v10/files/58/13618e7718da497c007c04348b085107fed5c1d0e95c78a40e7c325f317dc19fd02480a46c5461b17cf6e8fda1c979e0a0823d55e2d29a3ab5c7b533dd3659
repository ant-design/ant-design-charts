"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _proProvider = require("@ant-design/pro-provider");
require("antd/lib/space/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------
var addArrayKeys = function addArrayKeys(doms) {
  return doms.map(function (dom, index) {
    var _dom$props;
    if (! /*#__PURE__*/_react.default.isValidElement(dom)) {
      // eslint-disable-next-line react/no-array-index-key
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
        children: dom
      }, index);
    }
    return /*#__PURE__*/_react.default.cloneElement(dom, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      // eslint-disable-next-line react/no-array-index-key
      key: index
    }, dom === null || dom === void 0 ? void 0 : dom.props), {}, {
      style: (0, _objectSpread2.default)({}, dom === null || dom === void 0 || (_dom$props = dom.props) === null || _dom$props === void 0 ? void 0 : _dom$props.style)
    }));
  });
};

/**
 * 一般用于放多个按钮
 *
 * @param
 */
var FieldOptions = function FieldOptions(_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    fieldProps = _ref.fieldProps;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-field-option');
  var _proTheme$useToken = _proProvider.proTheme.useToken(),
    token = _proTheme$useToken.token;
  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  });
  if (render) {
    var doms = render(text, (0, _objectSpread2.default)({
      mode: type
    }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {}));
    if (!doms || (doms === null || doms === void 0 ? void 0 : doms.length) < 1 || !Array.isArray(doms)) {
      return null;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        gap: token.margin,
        alignItems: 'center'
      },
      className: className,
      children: addArrayKeys(doms)
    });
  }
  if (!text || !Array.isArray(text)) {
    if (! /*#__PURE__*/_react.default.isValidElement(text)) {
      return null;
    }
    return text;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      display: 'flex',
      gap: token.margin,
      alignItems: 'center'
    },
    className: className,
    children: addArrayKeys(text)
  });
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldOptions);