function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import { ReactComponent as IconError } from '@ant-design/icons-svg/inline-svg/filled/close-circle.svg';
import classnames from 'classnames';
import { useLiveDemo, useLocation } from 'dumi';
import PreviewerActions from 'dumi/theme/slots/PreviewerActions';
import React, { useRef } from 'react';
import "./index.less";
var Previewer = function Previewer(props) {
  var _demoContainer$curren;
  var demoContainer = useRef(null);
  var _useLocation = useLocation(),
    hash = _useLocation.hash;
  var link = "#".concat(props.asset.id);
  var _useLiveDemo = useLiveDemo(props.asset.id, {
      iframe: Boolean(props.iframe || props._live_in_iframe),
      containerRef: demoContainer
    }),
    liveDemoNode = _useLiveDemo.node,
    liveDemoError = _useLiveDemo.error,
    liveDemoLoading = _useLiveDemo.loading,
    setLiveDemoSource = _useLiveDemo.setSource;
  return /*#__PURE__*/React.createElement("div", {
    id: props.asset.id,
    className: classnames('dumi-default-previewer', props.className),
    style: props.style,
    "data-debug": props.debug,
    "data-active": hash === link || undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-demo",
    style: {
      background: props.background
    },
    "data-compact": props.compact || undefined,
    "data-transform": props.transform || undefined,
    "data-iframe": props.iframe || undefined,
    "data-error": Boolean(liveDemoError) || undefined,
    "data-loading": liveDemoLoading || undefined,
    ref: demoContainer
  }, props.iframe ? /*#__PURE__*/React.createElement("iframe", {
    style: ['string', 'number'].includes(_typeof(props.iframe)) ? {
      height: Number(props.iframe)
    } : {},
    src: props.demoUrl
  }) : liveDemoNode || props.children), liveDemoError && /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-demo-error"
  }, /*#__PURE__*/React.createElement(IconError, null), liveDemoError.toString()), /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-meta"
  }, (props.title || props.debug) && /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-previewer-desc"
  }, /*#__PURE__*/React.createElement("h5", null, /*#__PURE__*/React.createElement("a", {
    href: link
  }, props.debug && /*#__PURE__*/React.createElement("strong", null, "DEV ONLY"), props.title)), props.description && /*#__PURE__*/React.createElement("div", {
    className: "markdown",
    dangerouslySetInnerHTML: {
      __html: props.description
    }
  })), /*#__PURE__*/React.createElement(PreviewerActions, _extends({}, props, {
    onSourceChange: setLiveDemoSource,
    demoContainer: props.iframe ? (_demoContainer$curren = demoContainer.current) === null || _demoContainer$curren === void 0 ? void 0 : _demoContainer$curren.firstElementChild : demoContainer.current
  }))));
};
export default Previewer;