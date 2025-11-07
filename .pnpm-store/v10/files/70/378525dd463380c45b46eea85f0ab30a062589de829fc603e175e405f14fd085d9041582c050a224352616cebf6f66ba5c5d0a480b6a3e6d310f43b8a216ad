"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = LoginForm;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _ProForm = require("../ProForm");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["logo", "message", "contentStyle", "title", "subTitle", "actions", "children", "containerStyle", "otherStyle"];
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
    proFormProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var intl = (0, _proProvider.useIntl)();
  var submitter = proFormProps.submitter === false ? false : (0, _objectSpread2.default)((0, _objectSpread2.default)({
    searchConfig: {
      submitText: intl.getMessage('loginForm.submitText', '登录')
    }
  }, proFormProps.submitter), {}, {
    submitButtonProps: (0, _objectSpread2.default)({
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
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('pro-form-login');
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var getCls = function getCls(className) {
    return "".concat(baseClassName, "-").concat(className, " ").concat(hashId);
  };

  /** 生成logo 的dom，如果是string 设置为图片 如果是个 dom 就原样保留 */
  var logoDom = (0, _react.useMemo)(function () {
    if (!logo) return null;
    if (typeof logo === 'string') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: logo
      });
    }
    return logo;
  }, [logo]);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)(getCls('container'), hashId),
    style: containerStyle,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(getCls('top'), " ").concat(hashId).trim(),
      children: [title || logoDom ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(getCls('header')),
        children: [logoDom ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: getCls('logo'),
          children: logoDom
        }) : null, title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: getCls('title'),
          children: title
        }) : null]
      }) : null, subTitle ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: getCls('desc'),
        children: subTitle
      }) : null]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: getCls('main'),
      style: (0, _objectSpread2.default)({
        width: 328
      }, contentStyle),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ProForm.ProForm, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        isKeyPressSubmit: true
      }, proFormProps), {}, {
        submitter: submitter,
        children: [message, children]
      })), actions ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: getCls('main-other'),
        style: otherStyle,
        children: actions
      }) : null]
    })]
  }));
}