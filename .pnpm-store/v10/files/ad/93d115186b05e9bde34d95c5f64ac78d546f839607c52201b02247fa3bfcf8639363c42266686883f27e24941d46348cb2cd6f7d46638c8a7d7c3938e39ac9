import { useRouteMeta, useSidebarData, useSiteData } from 'dumi';
import React from 'react';
import "../../styles/heti.less";
import "./index.less";
var Content = function Content(props) {
  var sidebar = useSidebarData();
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-content",
    "data-no-sidebar": !sidebar || frontmatter.sidebar === false || undefined,
    "data-no-footer": themeConfig.footer === false || undefined
  }, props.children);
};
export default Content;