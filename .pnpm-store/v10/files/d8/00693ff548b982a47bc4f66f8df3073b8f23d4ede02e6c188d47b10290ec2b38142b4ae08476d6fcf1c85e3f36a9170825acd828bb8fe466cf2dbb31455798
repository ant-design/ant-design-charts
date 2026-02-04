"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginFormPage = LoginFormPage;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _ProForm = require("../ProForm");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["logo", "message", "style", "activityConfig", "backgroundImageUrl", "backgroundVideoUrl", "title", "subTitle", "actions", "children", "containerStyle", "otherStyle", "mainStyle"];
function LoginFormPage(props) {
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
    proFormProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var intl = (0, _proProvider.useIntl)();
  var genSubmitButtonProps = function genSubmitButtonProps() {
    var _proFormProps$submitt, _proFormProps$submitt2;
    if (proFormProps.submitter === false) return false;
    if (((_proFormProps$submitt = proFormProps.submitter) === null || _proFormProps$submitt === void 0 ? void 0 : _proFormProps$submitt.submitButtonProps) === false) return false;
    return (0, _objectSpread2.default)({
      size: 'large',
      style: {
        width: '100%'
      }
    }, (_proFormProps$submitt2 = proFormProps.submitter) === null || _proFormProps$submitt2 === void 0 ? void 0 : _proFormProps$submitt2.submitButtonProps);
  };
  var submitter = (0, _objectSpread2.default)((0, _objectSpread2.default)({
    searchConfig: {
      submitText: intl.getMessage('loginForm.submitText', '登录')
    },
    render: function render(_, dom) {
      return dom.pop();
    }
  }, proFormProps.submitter), {}, {
    submitButtonProps: genSubmitButtonProps()
  });
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('pro-form-login-page');
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var getCls = function getCls(className) {
    return "".concat(baseClassName, "-").concat(className, " ").concat(hashId).trim();
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
    className: (0, _classnames.default)(baseClassName, hashId),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
      position: 'relative',
      backgroundImage: backgroundImageUrl ? "url(\"".concat(backgroundImageUrl, "\")") : undefined
    }),
    children: [backgroundVideoUrl ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
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
    }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)(baseClassName, hashId),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: getCls('notice'),
        children: activityConfig && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: getCls('notice-activity'),
          style: activityConfig.style,
          children: [activityConfig.title && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: getCls('notice-activity-title'),
            children: [' ', activityConfig.title, ' ']
          }), activityConfig.subTitle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: getCls('notice-activity-subTitle'),
            children: activityConfig.subTitle
          }), activityConfig.action && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: getCls('notice-activity-action'),
            children: activityConfig.action
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: getCls('left'),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: getCls('container'),
          style: containerStyle,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: getCls('top'),
            children: [title || logoDom ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: getCls('header'),
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
            style: mainStyle,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ProForm.ProForm, (0, _objectSpread2.default)((0, _objectSpread2.default)({
              isKeyPressSubmit: true
            }, proFormProps), {}, {
              submitter: submitter,
              children: [message, children]
            })), actions ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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