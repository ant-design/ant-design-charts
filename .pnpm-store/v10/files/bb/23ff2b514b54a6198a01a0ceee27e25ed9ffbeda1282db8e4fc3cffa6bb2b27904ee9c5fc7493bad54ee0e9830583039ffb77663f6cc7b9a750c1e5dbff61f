import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["logo", "message", "contentStyle", "title", "subTitle", "actions", "children", "containerStyle", "otherStyle"];
import { useIntl } from '@ant-design/pro-provider';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { ProForm } from "../ProForm";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function LoginForm(props) {
  var _proFormProps$submitt;
  var logo = props.logo,
    message = props.message,
    contentStyle = props.contentStyle,
    title = props.title,
    subTitle = props.subTitle,
    actions = props.actions,
    children = props.children,
    containerStyle = props.containerStyle,
    otherStyle = props.otherStyle,
    proFormProps = _objectWithoutProperties(props, _excluded);
  var intl = useIntl();
  var submitter = proFormProps.submitter === false ? false : _objectSpread(_objectSpread({
    searchConfig: {
      submitText: intl.getMessage('loginForm.submitText', '登录')
    }
  }, proFormProps.submitter), {}, {
    submitButtonProps: _objectSpread({
      size: 'large',
      style: {
        width: '100%'
      }
    }, (_proFormProps$submitt = proFormProps.submitter) === null || _proFormProps$submitt === void 0 ? void 0 : _proFormProps$submitt.submitButtonProps),
    render: function render(_, dom) {
      var _proFormProps$submitt2;
      var loginButton = dom.pop();
      if (typeof (proFormProps === null || proFormProps === void 0 || (_proFormProps$submitt2 = proFormProps.submitter) === null || _proFormProps$submitt2 === void 0 ? void 0 : _proFormProps$submitt2.render) === 'function') {
        var _proFormProps$submitt3, _proFormProps$submitt4;
        return proFormProps === null || proFormProps === void 0 || (_proFormProps$submitt3 = proFormProps.submitter) === null || _proFormProps$submitt3 === void 0 || (_proFormProps$submitt4 = _proFormProps$submitt3.render) === null || _proFormProps$submitt4 === void 0 ? void 0 : _proFormProps$submitt4.call(_proFormProps$submitt3, _, dom);
      }
      return loginButton;
    }
  });
  var context = useContext(ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('pro-form-login');
  var _useStyle = useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var getCls = function getCls(className) {
    return "".concat(baseClassName, "-").concat(className, " ").concat(hashId);
  };

  /** 生成logo 的dom，如果是string 设置为图片 如果是个 dom 就原样保留 */
  var logoDom = useMemo(function () {
    if (!logo) return null;
    if (typeof logo === 'string') {
      return /*#__PURE__*/_jsx("img", {
        src: logo
      });
    }
    return logo;
  }, [logo]);
  return wrapSSR( /*#__PURE__*/_jsxs("div", {
    className: classNames(getCls('container'), hashId),
    style: containerStyle,
    children: [/*#__PURE__*/_jsxs("div", {
      className: "".concat(getCls('top'), " ").concat(hashId).trim(),
      children: [title || logoDom ? /*#__PURE__*/_jsxs("div", {
        className: "".concat(getCls('header')),
        children: [logoDom ? /*#__PURE__*/_jsx("span", {
          className: getCls('logo'),
          children: logoDom
        }) : null, title ? /*#__PURE__*/_jsx("span", {
          className: getCls('title'),
          children: title
        }) : null]
      }) : null, subTitle ? /*#__PURE__*/_jsx("div", {
        className: getCls('desc'),
        children: subTitle
      }) : null]
    }), /*#__PURE__*/_jsxs("div", {
      className: getCls('main'),
      style: _objectSpread({
        width: 328
      }, contentStyle),
      children: [/*#__PURE__*/_jsxs(ProForm, _objectSpread(_objectSpread({
        isKeyPressSubmit: true
      }, proFormProps), {}, {
        submitter: submitter,
        children: [message, children]
      })), actions ? /*#__PURE__*/_jsx("div", {
        className: getCls('main-other'),
        style: otherStyle,
        children: actions
      }) : null]
    })]
  }));
}
export { LoginForm };