import { Link, useIntl, useLocale } from 'dumi';
import React from 'react';
import "./index.less";
var Page404 = function Page404() {
  var intl = useIntl();
  var locale = useLocale();
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-not-found"
  }, /*#__PURE__*/React.createElement("h1", null, intl.formatMessage({
    id: '404.title'
  })), /*#__PURE__*/React.createElement(Link, {
    to: 'base' in locale ? locale.base : '/',
    replace: true
  }, intl.formatMessage({
    id: '404.back'
  }), " \u2192"));
};
export default Page404;