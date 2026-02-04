import { Link, useRouteMeta } from 'dumi';
import React from 'react';
import "./index.less";
var Features = function Features() {
  var _frontmatter$features;
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  return Boolean((_frontmatter$features = frontmatter.features) === null || _frontmatter$features === void 0 ? void 0 : _frontmatter$features.length) ? /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-features"
    // auto render 2 or 3 cols by feature count
    ,
    "data-cols": [3, 2].find(function (n) {
      return frontmatter.features.length % n === 0;
    }) || 3
  }, frontmatter.features.map(function (_ref) {
    var title = _ref.title,
      description = _ref.description,
      emoji = _ref.emoji,
      link = _ref.link;
    var titleWithLink;
    if (link) {
      titleWithLink = /^(\w+:)\/\/|^(mailto|tel):/.test(link) ? /*#__PURE__*/React.createElement("a", {
        href: link,
        target: "_blank",
        rel: "noreferrer"
      }, title) : /*#__PURE__*/React.createElement(Link, {
        to: link
      }, title);
    }
    return /*#__PURE__*/React.createElement("div", {
      key: title,
      className: "dumi-default-features-item"
    }, emoji && /*#__PURE__*/React.createElement("i", null, emoji), title && /*#__PURE__*/React.createElement("h3", null, titleWithLink || title), description && /*#__PURE__*/React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: description
      }
    }));
  })) : null;
};
export default Features;