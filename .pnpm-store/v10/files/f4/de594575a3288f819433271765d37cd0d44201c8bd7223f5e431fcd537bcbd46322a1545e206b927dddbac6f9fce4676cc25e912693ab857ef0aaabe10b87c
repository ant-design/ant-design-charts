"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
/** @name 用于配置操作栏 */

/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */

var Submitter = function Submitter(props) {
  var intl = (0, _proProvider.useIntl)();
  var form = _antd.Form.useFormInstance();
  if (props.render === false) {
    return null;
  }
  var onSubmit = props.onSubmit,
    render = props.render,
    onReset = props.onReset,
    _props$searchConfig = props.searchConfig,
    searchConfig = _props$searchConfig === void 0 ? {} : _props$searchConfig,
    submitButtonProps = props.submitButtonProps,
    resetButtonProps = props.resetButtonProps;
  var _proTheme$useToken = _proProvider.proTheme.useToken(),
    token = _proTheme$useToken.token;
  var submit = function submit() {
    form.submit();
    onSubmit === null || onSubmit === void 0 || onSubmit();
  };
  var reset = function reset() {
    form.resetFields();
    onReset === null || onReset === void 0 || onReset();
  };
  var _searchConfig$submitT = searchConfig.submitText,
    submitText = _searchConfig$submitT === void 0 ? intl.getMessage('tableForm.submit', '提交') : _searchConfig$submitT,
    _searchConfig$resetTe = searchConfig.resetText,
    resetText = _searchConfig$resetTe === void 0 ? intl.getMessage('tableForm.reset', '重置') : _searchConfig$resetTe;
  /** 默认的操作的逻辑 */
  var dom = [];
  if (resetButtonProps !== false) {
    dom.push( /*#__PURE__*/(0, _react.createElement)(_antd.Button, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(resetButtonProps !== null && resetButtonProps !== void 0 ? resetButtonProps : {}, ['preventDefault'])), {}, {
      key: "rest",
      onClick: function onClick(e) {
        var _resetButtonProps$onC;
        if (!(resetButtonProps !== null && resetButtonProps !== void 0 && resetButtonProps.preventDefault)) reset();
        resetButtonProps === null || resetButtonProps === void 0 || (_resetButtonProps$onC = resetButtonProps.onClick) === null || _resetButtonProps$onC === void 0 || _resetButtonProps$onC.call(resetButtonProps, e);
      }
    }), resetText));
  }
  if (submitButtonProps !== false) {
    dom.push( /*#__PURE__*/(0, _react.createElement)(_antd.Button, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      type: "primary"
    }, (0, _omit.default)(submitButtonProps || {}, ['preventDefault'])), {}, {
      key: "submit",
      onClick: function onClick(e) {
        var _submitButtonProps$on;
        if (!(submitButtonProps !== null && submitButtonProps !== void 0 && submitButtonProps.preventDefault)) submit();
        submitButtonProps === null || submitButtonProps === void 0 || (_submitButtonProps$on = submitButtonProps.onClick) === null || _submitButtonProps$on === void 0 || _submitButtonProps$on.call(submitButtonProps, e);
      }
    }), submitText));
  }
  var renderDom = render ? render((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    form: form,
    submit: submit,
    reset: reset
  }), dom) : dom;
  if (!renderDom) {
    return null;
  }
  if (Array.isArray(renderDom)) {
    if ((renderDom === null || renderDom === void 0 ? void 0 : renderDom.length) < 1) {
      return null;
    }
    if ((renderDom === null || renderDom === void 0 ? void 0 : renderDom.length) === 1) {
      return renderDom[0];
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        gap: token.marginXS,
        alignItems: 'center'
      },
      children: renderDom
    });
  }
  return renderDom;
};
var _default = exports.default = Submitter;