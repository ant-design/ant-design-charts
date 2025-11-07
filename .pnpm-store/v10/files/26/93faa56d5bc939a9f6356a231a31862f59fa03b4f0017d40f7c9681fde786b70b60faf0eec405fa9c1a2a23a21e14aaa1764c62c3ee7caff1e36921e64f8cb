"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _Field = _interopRequireDefault(require("../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fieldProps", "proFieldProps"],
  _excluded2 = ["fieldProps", "proFieldProps"];
var valueType = 'text';
/**
 * 文本组件
 *
 * @param
 */
var ProFormText = function ProFormText(_ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: valueType,
    fieldProps: fieldProps,
    filedConfig: {
      valueType: valueType
    },
    proFieldProps: proFieldProps
  }, rest));
};
var PassWordStrength = function PassWordStrength(props) {
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(props.open || false, {
      value: props.open,
      onChange: props.onOpenChange
    }),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
    open = _useMountMergeState2[0],
    setOpen = _useMountMergeState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
    shouldUpdate: true,
    noStyle: true,
    children: function children(form) {
      var _props$statusRender;
      var value = form.getFieldValue(props.name || []);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        getPopupContainer: function getPopupContainer(node) {
          if (node && node.parentNode) {
            return node.parentNode;
          }
          return node;
        },
        onOpenChange: function onOpenChange(e) {
          return setOpen(e);
        },
        content: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            padding: '4px 0'
          },
          children: [(_props$statusRender = props.statusRender) === null || _props$statusRender === void 0 ? void 0 : _props$statusRender.call(props, value), props.strengthText ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              marginTop: 10
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: props.strengthText
            })
          }) : null]
        }),
        overlayStyle: {
          width: 240
        },
        placement: "rightTop"
      }, props.popoverProps), {}, {
        open: open,
        children: props.children
      }));
    }
  });
};
var Password = function Password(_ref2) {
  var fieldProps = _ref2.fieldProps,
    proFieldProps = _ref2.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  if (fieldProps !== null && fieldProps !== void 0 && fieldProps.statusRender && rest.name) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(PassWordStrength, {
      name: rest.name,
      statusRender: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.statusRender,
      popoverProps: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.popoverProps,
      strengthText: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.strengthText,
      open: open,
      onOpenChange: setOpen,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
          valueType: "password",
          fieldProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(fieldProps, ['statusRender', 'popoverProps', 'strengthText'])), {}, {
            onBlur: function onBlur(e) {
              var _fieldProps$onBlur;
              fieldProps === null || fieldProps === void 0 || (_fieldProps$onBlur = fieldProps.onBlur) === null || _fieldProps$onBlur === void 0 || _fieldProps$onBlur.call(fieldProps, e);
              setOpen(false);
            },
            onClick: function onClick(e) {
              var _fieldProps$onClick;
              fieldProps === null || fieldProps === void 0 || (_fieldProps$onClick = fieldProps.onClick) === null || _fieldProps$onClick === void 0 || _fieldProps$onClick.call(fieldProps, e);
              setOpen(true);
            }
          }),
          proFieldProps: proFieldProps,
          filedConfig: {
            valueType: valueType
          }
        }, rest))
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: "password",
    fieldProps: fieldProps,
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: valueType
    }
  }, rest));
};
var WrappedProFormText = ProFormText;
WrappedProFormText.Password = Password;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormText.displayName = 'ProFormComponent';
var _default = exports.default = WrappedProFormText;