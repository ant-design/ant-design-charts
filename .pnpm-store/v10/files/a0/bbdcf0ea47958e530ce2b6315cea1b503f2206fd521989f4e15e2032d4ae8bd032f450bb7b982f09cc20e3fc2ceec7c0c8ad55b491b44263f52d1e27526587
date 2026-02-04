import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { proTheme, useIntl } from '@ant-design/pro-provider';
import { Button, Form } from 'antd';
import omit from "rc-util/es/omit";
import React from 'react';

/** @name 用于配置操作栏 */
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */

var Submitter = function Submitter(props) {
  var intl = useIntl();
  var form = Form.useFormInstance();
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
  var _proTheme$useToken = proTheme.useToken(),
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
    dom.push( /*#__PURE__*/_createElement(Button, _objectSpread(_objectSpread({}, omit(resetButtonProps !== null && resetButtonProps !== void 0 ? resetButtonProps : {}, ['preventDefault'])), {}, {
      key: "rest",
      onClick: function onClick(e) {
        var _resetButtonProps$onC;
        if (!(resetButtonProps !== null && resetButtonProps !== void 0 && resetButtonProps.preventDefault)) reset();
        resetButtonProps === null || resetButtonProps === void 0 || (_resetButtonProps$onC = resetButtonProps.onClick) === null || _resetButtonProps$onC === void 0 || _resetButtonProps$onC.call(resetButtonProps, e);
      }
    }), resetText));
  }
  if (submitButtonProps !== false) {
    dom.push( /*#__PURE__*/_createElement(Button, _objectSpread(_objectSpread({
      type: "primary"
    }, omit(submitButtonProps || {}, ['preventDefault'])), {}, {
      key: "submit",
      onClick: function onClick(e) {
        var _submitButtonProps$on;
        if (!(submitButtonProps !== null && submitButtonProps !== void 0 && submitButtonProps.preventDefault)) submit();
        submitButtonProps === null || submitButtonProps === void 0 || (_submitButtonProps$on = submitButtonProps.onClick) === null || _submitButtonProps$on === void 0 || _submitButtonProps$on.call(submitButtonProps, e);
      }
    }), submitText));
  }
  var renderDom = render ? render(_objectSpread(_objectSpread({}, props), {}, {
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
    return /*#__PURE__*/_jsx("div", {
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
export default Submitter;