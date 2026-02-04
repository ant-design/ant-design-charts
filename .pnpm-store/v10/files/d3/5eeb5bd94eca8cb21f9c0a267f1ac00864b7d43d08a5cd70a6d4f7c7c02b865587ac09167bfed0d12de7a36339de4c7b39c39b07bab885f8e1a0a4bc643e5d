import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["logo", "message", "style", "activityConfig", "backgroundImageUrl", "backgroundVideoUrl", "title", "subTitle", "actions", "children", "containerStyle", "otherStyle", "mainStyle"];
import { useIntl } from '@ant-design/pro-provider';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { ProForm } from "../ProForm";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export function LoginFormPage(props) {
  var logo = props.logo,
    message = props.message,
    style = props.style,
    activityConfig = props.activityConfig,
    backgroundImageUrl = props.backgroundImageUrl,
    backgroundVideoUrl = props.backgroundVideoUrl,
    title = props.title,
    subTitle = props.subTitle,
    actions = props.actions,
    children = props.children,
    containerStyle = props.containerStyle,
    otherStyle = props.otherStyle,
    mainStyle = props.mainStyle,
    proFormProps = _objectWithoutProperties(props, _excluded);
  var intl = useIntl();
  var genSubmitButtonProps = function genSubmitButtonProps() {
    var _proFormProps$submitt, _proFormProps$submitt2;
    if (proFormProps.submitter === false) return false;
    if (((_proFormProps$submitt = proFormProps.submitter) === null || _proFormProps$submitt === void 0 ? void 0 : _proFormProps$submitt.submitButtonProps) === false) return false;
    return _objectSpread({
      size: 'large',
      style: {
        width: '100%'
      }
    }, (_proFormProps$submitt2 = proFormProps.submitter) === null || _proFormProps$submitt2 === void 0 ? void 0 : _proFormProps$submitt2.submitButtonProps);
  };
  var submitter = _objectSpread(_objectSpread({
    searchConfig: {
      submitText: intl.getMessage('loginForm.submitText', '登录')
    },
    render: function render(_, dom) {
      return dom.pop();
    }
  }, proFormProps.submitter), {}, {
    submitButtonProps: genSubmitButtonProps()
  });
  var context = useContext(ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('pro-form-login-page');
  var _useStyle = useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var getCls = function getCls(className) {
    return "".concat(baseClassName, "-").concat(className, " ").concat(hashId).trim();
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
    className: classNames(baseClassName, hashId),
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative',
      backgroundImage: backgroundImageUrl ? "url(\"".concat(backgroundImageUrl, "\")") : undefined
    }),
    children: [backgroundVideoUrl ? /*#__PURE__*/_jsx("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      },
      children: /*#__PURE__*/_jsx("video", {
        src: backgroundVideoUrl,
        controls: false,
        autoPlay: true,
        playsInline: true,
        loop: true,
        muted: true,
        crossOrigin: "anonymous",
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      })
    }) : null, /*#__PURE__*/_jsxs("div", {
      className: classNames(baseClassName, hashId),
      children: [/*#__PURE__*/_jsx("div", {
        className: getCls('notice'),
        children: activityConfig && /*#__PURE__*/_jsxs("div", {
          className: getCls('notice-activity'),
          style: activityConfig.style,
          children: [activityConfig.title && /*#__PURE__*/_jsxs("div", {
            className: getCls('notice-activity-title'),
            children: [' ', activityConfig.title, ' ']
          }), activityConfig.subTitle && /*#__PURE__*/_jsx("div", {
            className: getCls('notice-activity-subTitle'),
            children: activityConfig.subTitle
          }), activityConfig.action && /*#__PURE__*/_jsx("div", {
            className: getCls('notice-activity-action'),
            children: activityConfig.action
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: getCls('left'),
        children: /*#__PURE__*/_jsxs("div", {
          className: getCls('container'),
          style: containerStyle,
          children: [/*#__PURE__*/_jsxs("div", {
            className: getCls('top'),
            children: [title || logoDom ? /*#__PURE__*/_jsxs("div", {
              className: getCls('header'),
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
            style: mainStyle,
            children: [/*#__PURE__*/_jsxs(ProForm, _objectSpread(_objectSpread({
              isKeyPressSubmit: true
            }, proFormProps), {}, {
              submitter: submitter,
              children: [message, children]
            })), actions ? /*#__PURE__*/_jsx("div", {
              className: getCls('other'),
              style: otherStyle,
              children: actions
            }) : null]
          })]
        })
      })]
    })]
  }));
}