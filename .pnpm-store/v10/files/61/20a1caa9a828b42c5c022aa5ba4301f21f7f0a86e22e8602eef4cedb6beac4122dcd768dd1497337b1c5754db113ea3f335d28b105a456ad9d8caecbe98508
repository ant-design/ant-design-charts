function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useSiteData } from 'dumi';
import React, { useEffect, useState } from 'react';
import "./index.less";
var IconRtl = function IconRtl() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 14 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z"
  }));
};
var IconLtr = function IconLtr() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 14 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z"
  }));
};
var LS_RTL_KEY = 'dumi:rtl';
var RtlSwitch = function RtlSwitch() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    rtl = _useState2[0],
    setRtl = _useState2[1];
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  useEffect(function () {
    if (localStorage.getItem(LS_RTL_KEY)) {
      setRtl(true);
      document.documentElement.setAttribute('data-direction', 'rtl');
    }
  }, []);
  if (!themeConfig.rtl) return null;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dumi-default-rtl-switch",
    onClick: function onClick() {
      if (rtl) {
        document.documentElement.removeAttribute('data-direction');
        localStorage.removeItem(LS_RTL_KEY);
      } else {
        document.documentElement.setAttribute('data-direction', 'rtl');
        localStorage.setItem(LS_RTL_KEY, '1');
      }
      setRtl(!rtl);
    },
    "data-dumi-tooltip": rtl ? 'RTL' : 'LTR',
    "data-dumi-tooltip-bottom": true
  }, rtl ? /*#__PURE__*/React.createElement(IconRtl, null) : /*#__PURE__*/React.createElement(IconLtr, null));
};
export default RtlSwitch;