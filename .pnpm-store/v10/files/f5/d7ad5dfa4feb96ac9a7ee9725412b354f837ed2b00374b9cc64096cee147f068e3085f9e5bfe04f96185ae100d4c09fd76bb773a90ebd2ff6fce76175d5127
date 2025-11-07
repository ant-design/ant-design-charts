import { NavLink, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import React from 'react';
import "./index.less";
var Sidebar = function Sidebar() {
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  var meta = useRouteMeta();
  var sidebar = useSidebarData();
  if (!sidebar) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-sidebar"
  }, sidebar.map(function (item, i) {
    return /*#__PURE__*/React.createElement("dl", {
      className: "dumi-default-sidebar-group",
      key: String(i)
    }, item.title && /*#__PURE__*/React.createElement("dt", null, item.title), item.children.map(function (child) {
      return /*#__PURE__*/React.createElement("dd", {
        key: child.link
      }, /*#__PURE__*/React.createElement(NavLink, {
        to: child.link,
        title: child.title,
        end: true
      }, child.title), child.link === pathname && meta.frontmatter.toc === 'menu' && /*#__PURE__*/React.createElement(Toc, null));
    }));
  }));
};
export default Sidebar;