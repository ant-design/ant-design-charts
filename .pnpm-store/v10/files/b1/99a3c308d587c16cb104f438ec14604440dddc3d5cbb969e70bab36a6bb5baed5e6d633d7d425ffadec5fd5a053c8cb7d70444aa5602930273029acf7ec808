"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRenderLogo = exports.AppsLogoComponents = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _AppsLogo = require("./AppsLogo");
var _DefaultContent = require("./DefaultContent");
var _SimpleContent = require("./SimpleContent");
var _index = require("./style/index");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 默认渲染logo的方式，如果是个string，用img。否则直接返回
 *
 * @param logo
 * @returns
 */
var defaultRenderLogo = exports.defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      width: "auto",
      height: 22,
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  return logo;
};

/**
 * 相关品牌额icon 列表。用于展示相关的品牌
 *
 * @param props
 * @returns
 */
var AppsLogoComponents = exports.AppsLogoComponents = function AppsLogoComponents(props) {
  var _props$appList;
  var appList = props.appList,
    appListRender = props.appListRender,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls,
    itemClick = props.onItemClick;
  var ref = _react.default.useRef(null);
  var popoverRef = _react.default.useRef(null);
  var baseClassName = "".concat(prefixCls, "-layout-apps");
  var _useStyle = (0, _index.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var cloneItemClick = function cloneItemClick(app) {
    itemClick === null || itemClick === void 0 || itemClick(app, popoverRef);
  };
  var defaultDomContent = (0, _react.useMemo)(function () {
    var isSimple = appList === null || appList === void 0 ? void 0 : appList.some(function (app) {
      return !(app !== null && app !== void 0 && app.desc);
    });
    if (isSimple) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SimpleContent.SimpleContent, {
        hashId: hashId,
        appList: appList,
        itemClick: itemClick ? cloneItemClick : undefined,
        baseClassName: "".concat(baseClassName, "-simple")
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DefaultContent.DefaultContent, {
      hashId: hashId,
      appList: appList,
      itemClick: itemClick ? cloneItemClick : undefined,
      baseClassName: "".concat(baseClassName, "-default")
    });
  }, [appList, baseClassName, hashId]);
  if (!(props !== null && props !== void 0 && (_props$appList = props.appList) !== null && _props$appList !== void 0 && _props$appList.length)) return null;
  var popoverContent = appListRender ? appListRender(props === null || props === void 0 ? void 0 : props.appList, defaultDomContent) : defaultDomContent;
  var popoverOpenProps = (0, _proUtils.openVisibleCompatible)(undefined, function (openChange) {
    return setOpen(openChange);
  });
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: ref,
      onClick: function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      placement: "bottomRight",
      trigger: ['click'],
      zIndex: 9999,
      arrow: false
    }, popoverOpenProps), {}, {
      overlayClassName: "".concat(baseClassName, "-popover ").concat(hashId).trim(),
      content: popoverContent,
      getPopupContainer: function getPopupContainer() {
        return ref.current || document.body;
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        ref: popoverRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        className: (0, _classnames.default)("".concat(baseClassName, "-icon"), hashId, (0, _defineProperty2.default)({}, "".concat(baseClassName, "-icon-active"), open)),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppsLogo.AppsLogo, {})
      })
    }))]
  }));
};