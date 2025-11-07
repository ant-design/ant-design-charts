function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useIntl, usePrefersColor, useSiteData } from 'dumi';
import React from 'react';
import "./index.less";
var IconDark = function IconDark() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z"
  }));
};
var IconLight = function IconLight() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
  }));
};
var IconAuto = function IconAuto() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z"
  }));
};
var ICON_MAPPING = {
  light: IconLight,
  dark: IconDark,
  auto: IconAuto
};
var ColorSwitch = function ColorSwitch() {
  var _useSiteData = useSiteData(),
    defaultColor = _useSiteData.themeConfig.prefersColor.default;
  var intl = useIntl();
  var _usePrefersColor = usePrefersColor(),
    _usePrefersColor2 = _slicedToArray(_usePrefersColor, 3),
    _usePrefersColor2$ = _usePrefersColor2[1],
    prefersColor = _usePrefersColor2$ === void 0 ? defaultColor : _usePrefersColor2$,
    setPrefersColor = _usePrefersColor2[2];
  var Icon = ICON_MAPPING[prefersColor];
  return /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-color-switch",
    "data-dumi-tooltip": intl.formatMessage({
      id: "header.color.mode.".concat(prefersColor)
    }),
    "data-dumi-tooltip-bottom": true
  }, Icon && /*#__PURE__*/React.createElement(Icon, null), /*#__PURE__*/React.createElement("select", {
    onChange: function onChange(ev) {
      return setPrefersColor(ev.target.value);
    },
    value: prefersColor,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, ['light', 'dark', 'auto'].map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      value: c,
      key: c
    }, intl.formatMessage({
      id: "header.color.mode.".concat(c)
    }));
  })));
};
export default ColorSwitch;