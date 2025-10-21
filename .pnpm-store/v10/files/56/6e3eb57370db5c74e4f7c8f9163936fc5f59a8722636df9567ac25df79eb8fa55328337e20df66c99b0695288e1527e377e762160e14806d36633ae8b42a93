function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ReactComponent as IconLeft } from '@ant-design/icons-svg/inline-svg/outlined/arrow-left.svg';
import { ReactComponent as IconClock } from '@ant-design/icons-svg/inline-svg/outlined/clock-circle.svg';
import { ReactComponent as IconEdit } from '@ant-design/icons-svg/inline-svg/outlined/edit.svg';
import { FormattedMessage, Link, useIntl, useLocation, useRouteMeta, useSidebarData, useSiteData } from 'dumi';
import React, { useLayoutEffect, useState } from 'react';
import "./index.less";
var ContentFooter = function ContentFooter() {
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var sidebar = useSidebarData();
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  var intl = useIntl();
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    prev = _useState2[0],
    setPrev = _useState2[1];
  var _useState3 = useState(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    next = _useState4[0],
    setNext = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    isoLastUpdated = _useState6[0],
    setIsoLastUpdated = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    lastUpdated = _useState8[0],
    setLastUpdated = _useState8[1];
  var showEditLink = themeConfig.editLink && frontmatter.filename;
  var showLastUpdated = themeConfig.lastUpdated && frontmatter.lastUpdated;

  // calculate the previous and next page
  useLayoutEffect(function () {
    if (sidebar) {
      var items = sidebar.reduce(function (ret, group) {
        return ret.concat(group.children);
      }, []);
      var current = items.findIndex(function (item) {
        return item.link === pathname;
      });
      setPrev(items[current - 1]);
      setNext(items[current + 1]);
    }
  }, [pathname, sidebar]);

  // to avoid timestamp mismatched between server and client
  useLayoutEffect(function () {
    if (showLastUpdated) {
      setIsoLastUpdated(new Date(frontmatter.lastUpdated).toISOString());
      setLastUpdated(new Intl.DateTimeFormat(undefined, {
        dateStyle: 'short',
        timeStyle: 'short'
      }).format(frontmatter.lastUpdated));
    }
  }, [showLastUpdated]);
  return /*#__PURE__*/React.createElement("footer", {
    className: "dumi-default-content-footer"
  }, /*#__PURE__*/React.createElement("dl", null, showLastUpdated && /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(IconClock, null), /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-mobile-hidden"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "content.footer.last.updated"
  })), /*#__PURE__*/React.createElement("time", {
    dateTime: isoLastUpdated
  }, lastUpdated)), showEditLink && /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "".concat(intl.formatMessage({
      id: '$internal.edit.link'
    }, {
      filename: frontmatter.filename
    })),
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement(IconEdit, null), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "content.footer.actions.edit"
  })))), /*#__PURE__*/React.createElement("nav", null, prev && /*#__PURE__*/React.createElement(Link, {
    to: prev.link,
    "data-prev": true
  }, /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement(IconLeft, null), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "content.footer.actions.previous"
  })), prev.title), next && /*#__PURE__*/React.createElement(Link, {
    to: next.link,
    "data-next": true
  }, /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "content.footer.actions.next"
  }), /*#__PURE__*/React.createElement(IconLeft, null)), next.title)));
};
export default ContentFooter;