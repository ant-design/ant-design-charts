function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { ReactComponent as IconSidebar } from '@ant-design/icons-svg/inline-svg/outlined/align-left.svg';
import animateScrollTo from 'animated-scroll-to';
import { Helmet, useIntl, useLocation, useOutlet, useRouteMeta, useSidebarData, useSiteData } from 'dumi';
import Content from 'dumi/theme/slots/Content';
import ContentFooter from 'dumi/theme/slots/ContentFooter';
import Features from 'dumi/theme/slots/Features';
import Footer from 'dumi/theme/slots/Footer';
import Header from 'dumi/theme/slots/Header';
import Hero from 'dumi/theme/slots/Hero';
import Sidebar from 'dumi/theme/slots/Sidebar';
import Toc from 'dumi/theme/slots/Toc';
import React, { useEffect, useState } from 'react';
import "./index.less";
var DocLayout = function DocLayout() {
  var intl = useIntl();
  var outlet = useOutlet();
  var sidebar = useSidebarData();
  var _useLocation = useLocation(),
    hash = _useLocation.hash,
    pathname = _useLocation.pathname;
  var _useSiteData = useSiteData(),
    loading = _useSiteData.loading,
    hostname = _useSiteData.hostname;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    activateSidebar = _useState2[0],
    updateActivateSidebar = _useState2[1];
  var _useRouteMeta = useRouteMeta(),
    fm = _useRouteMeta.frontmatter;
  var showSidebar = fm.sidebar !== false && (sidebar === null || sidebar === void 0 ? void 0 : sidebar.length) > 0;

  // handle hash change or visit page hash after async chunk loaded
  useEffect(function () {
    var id = hash.replace('#', '');
    if (id) {
      setTimeout(function () {
        var elm = document.getElementById(decodeURIComponent(id));
        if (elm) {
          // animated-scroll-to instead of native scroll
          animateScrollTo(elm.offsetTop - 80, {
            maxDuration: 300
          });
        }
      }, 1);
    }
  }, [loading, hash]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-doc-layout",
    "data-mobile-sidebar-active": activateSidebar || undefined,
    onClick: function onClick() {
      return updateActivateSidebar(false);
    }
  }, /*#__PURE__*/React.createElement(Helmet, null, /*#__PURE__*/React.createElement("html", {
    lang: intl.locale.replace(/-.+$/, '')
  }), fm.title && /*#__PURE__*/React.createElement("title", null, fm.title), fm.title && /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: fm.title
  }), fm.description && /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: fm.description
  }), fm.description && /*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: fm.description
  }), fm.keywords && /*#__PURE__*/React.createElement("meta", {
    name: "keywords",
    content: fm.keywords.join(',')
  }), fm.keywords && fm.keywords.map(function (keyword) {
    return /*#__PURE__*/React.createElement("meta", {
      key: keyword,
      property: "article:tag",
      content: keyword
    });
  }), hostname && /*#__PURE__*/React.createElement("link", {
    rel: "canonical",
    href: hostname + pathname
  })), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Features, null), showSidebar && /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-doc-layout-mobile-bar"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dumi-default-sidebar-btn",
    onClick: function onClick(ev) {
      ev.stopPropagation();
      updateActivateSidebar(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement(IconSidebar, null), intl.formatMessage({
    id: 'layout.sidebar.btn'
  }))), /*#__PURE__*/React.createElement("main", null, showSidebar && /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement("article", null, outlet), /*#__PURE__*/React.createElement(ContentFooter, null), /*#__PURE__*/React.createElement(Footer, null)), fm.toc === 'content' && /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-doc-layout-toc-wrapper"
  }, /*#__PURE__*/React.createElement("h4", null, "TABLE OF CONTENTS"), /*#__PURE__*/React.createElement(Toc, null))));
};
export default DocLayout;