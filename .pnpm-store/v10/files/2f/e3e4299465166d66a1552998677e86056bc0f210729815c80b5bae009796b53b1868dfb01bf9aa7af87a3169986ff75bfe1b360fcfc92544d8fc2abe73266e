function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ReactComponent as IconDown } from '@ant-design/icons-svg/inline-svg/outlined/down.svg';
import { history, Link, useIntl, useLocale, useLocation, useSiteData } from 'dumi';
import React, { useEffect, useState } from 'react';
import "./index.less";
function getTargetLocalePath(_ref) {
  var pathname = _ref.pathname,
    current = _ref.current,
    target = _ref.target;
  var clearPath = 'base' in current ?
  // handle '/en-US/a' => '/a' or '/en-US' => '' => '/'
  pathname.replace(current.base.replace(/\/$/, ''), '') || '/' : pathname.replace(new RegExp("".concat(current.suffix, "$")), '');
  return 'base' in target ? "".concat(
  // for `/` base, strip duplicated leading slash
  target.base.replace(/\/$/, '')).concat(clearPath) // for `/` clearPath, strip duplicated ending slash
  .replace(/([^/])\/$/, '$1') : "".concat(clearPath).concat(target.suffix);
}
var SingleSwitch = function SingleSwitch(_ref2) {
  var locale = _ref2.locale,
    current = _ref2.current;
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var _useState = useState(function () {
      return getTargetLocalePath({
        pathname: pathname,
        current: current,
        target: locale
      });
    }),
    _useState2 = _slicedToArray(_useState, 2),
    path = _useState2[0],
    setPath = _useState2[1];
  useEffect(function () {
    setPath(getTargetLocalePath({
      pathname: pathname,
      current: current,
      target: locale
    }));
  }, [pathname, current.id, locale.id]);
  return /*#__PURE__*/React.createElement(Link, {
    className: "dumi-default-lang-switch",
    to: path
  }, locale.name);
};
var LangSwitch = function LangSwitch() {
  var _useSiteData = useSiteData(),
    locales = _useSiteData.locales;
  var _useIntl = useIntl(),
    locale = _useIntl.locale;
  var current = useLocale();

  // do not render in single language
  if (locales.length <= 1) return null;
  return locales.length > 2 ? /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-lang-select"
  }, /*#__PURE__*/React.createElement("select", {
    defaultValue: locale,
    onChange: function onChange(ev) {
      history.push(getTargetLocalePath({
        pathname: history.location.pathname,
        current: current,
        target: locales.find(function (_ref3) {
          var id = _ref3.id;
          return id === ev.target.value;
        })
      }));
    }
  }, locales.map(function (item) {
    return /*#__PURE__*/React.createElement("option", {
      key: item.id,
      value: item.id
    }, item.name);
  })), /*#__PURE__*/React.createElement(IconDown, null)) :
  /*#__PURE__*/
  // single language switch
  React.createElement(SingleSwitch, {
    locale: locales.find(function (_ref4) {
      var id = _ref4.id;
      return id !== locale;
    }),
    current: current
  });
};
export default LangSwitch;