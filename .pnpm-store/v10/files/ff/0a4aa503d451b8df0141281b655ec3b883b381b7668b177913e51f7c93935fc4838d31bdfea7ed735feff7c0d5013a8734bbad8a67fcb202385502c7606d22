import { useSiteData } from 'dumi';
import React from 'react';
import "./index.less";
var Footer = function Footer() {
  var _useSiteData = useSiteData(),
    themeConfig = _useSiteData.themeConfig;
  if (!themeConfig.footer) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-footer",
    dangerouslySetInnerHTML: {
      __html: themeConfig.footer
    }
  });
};
export default Footer;