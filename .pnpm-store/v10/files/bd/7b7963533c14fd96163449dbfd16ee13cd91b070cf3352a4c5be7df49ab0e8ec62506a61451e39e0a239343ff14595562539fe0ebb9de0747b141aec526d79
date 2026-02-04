"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineErrorFormItem = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _react = _interopRequireWildcard(require("react"));
var _openVisibleCompatible = require("../../compareVersions/openVisibleCompatible");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["rules", "name", "children", "popoverProps"],
  _excluded2 = ["errorType", "rules", "name", "popoverProps", "children"];
var FIX_INLINE_STYLE = {
  marginBlockStart: -5,
  marginBlockEnd: -5,
  marginInlineStart: 0,
  marginInlineEnd: 0
};
var InlineErrorFormItemPopover = function InlineErrorFormItemPopover(_ref) {
  var inputProps = _ref.inputProps,
    input = _ref.input,
    extra = _ref.extra,
    errorList = _ref.errorList,
    popoverProps = _ref.popoverProps;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    errorStringList = _useState4[0],
    setErrorList = _useState4[1];
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls();
  var token = (0, _proProvider.useToken)();
  var _useStyle = (0, _style.useStyle)("".concat(prefixCls, "-form-item-with-help")),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  (0, _react.useEffect)(function () {
    if (inputProps.validateStatus !== 'validating') {
      setErrorList(inputProps.errors);
    }
  }, [inputProps.errors, inputProps.validateStatus]);
  var popoverOpenProps = (0, _openVisibleCompatible.openVisibleCompatible)(errorStringList.length < 1 ? false : open, function (changeOpen) {
    if (changeOpen === open) return;
    setOpen(changeOpen);
  });
  var loading = inputProps.validateStatus === 'validating';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    trigger: (popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.trigger) || ['click'],
    placement: (popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.placement) || 'topLeft'
  }, popoverOpenProps), {}, {
    getPopupContainer: popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.getPopupContainer,
    getTooltipContainer: popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.getTooltipContainer,
    content: wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-form-item ").concat(hashId, " ").concat(token.hashId).trim(),
      style: {
        margin: 0,
        padding: 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(prefixCls, "-form-item-with-help ").concat(hashId, " ").concat(token.hashId).trim(),
        children: [loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.LoadingOutlined, {}) : null, errorList]
      })
    }))
  }, popoverProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [input, extra]
    })
  }), "popover");
};
var InternalFormItemFunction = function InternalFormItemFunction(_ref2) {
  var rules = _ref2.rules,
    name = _ref2.name,
    children = _ref2.children,
    popoverProps = _ref2.popoverProps,
    rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    name: name,
    rules: rules,
    hasFeedback: false,
    shouldUpdate: function shouldUpdate(prev, next) {
      if (prev === next) return false;
      var shouldName = [name].flat(1);
      if (shouldName.length > 1) {
        shouldName.pop();
      }
      try {
        return JSON.stringify((0, _get.default)(prev, shouldName)) !== JSON.stringify((0, _get.default)(next, shouldName));
      } catch (error) {
        return true;
      }
    }
    // @ts-ignore
    ,
    _internalItemRender: {
      mark: 'pro_table_render',
      render: function render(inputProps, doms) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(InlineErrorFormItemPopover, (0, _objectSpread2.default)({
          inputProps: inputProps,
          popoverProps: popoverProps
        }, doms));
      }
    }
  }, rest), {}, {
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, FIX_INLINE_STYLE), rest === null || rest === void 0 ? void 0 : rest.style),
    children: children
  }));
};
var InlineErrorFormItem = exports.InlineErrorFormItem = function InlineErrorFormItem(props) {
  var errorType = props.errorType,
    rules = props.rules,
    name = props.name,
    popoverProps = props.popoverProps,
    children = props.children,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded2);
  if (name && rules !== null && rules !== void 0 && rules.length && errorType === 'popover') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(InternalFormItemFunction, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      name: name,
      rules: rules,
      popoverProps: popoverProps
    }, rest), {}, {
      children: children
    }));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    rules: rules,
    shouldUpdate: name ? function (prev, next) {
      if (prev === next) return false;
      var shouldName = [name].flat(1);
      if (shouldName.length > 1) {
        shouldName.pop();
      }
      try {
        return JSON.stringify((0, _get.default)(prev, shouldName)) !== JSON.stringify((0, _get.default)(next, shouldName));
      } catch (error) {
        return true;
      }
    } : undefined
  }, rest), {}, {
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, FIX_INLINE_STYLE), rest.style),
    name: name,
    children: children
  }));
};