import { Link, useRouteMeta } from 'dumi';
import HeroTitle from 'dumi/theme/slots/HeroTitle';
import React from 'react';
import "./index.less";
var Hero = function Hero() {
  var _actions;
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  if (!('hero' in frontmatter)) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-hero"
  }, frontmatter.hero.title && /*#__PURE__*/React.createElement(HeroTitle, null, frontmatter.hero.title), frontmatter.hero.description && /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: frontmatter.hero.description
    }
  }), Boolean((_actions = frontmatter.hero.actions) === null || _actions === void 0 ? void 0 : _actions.length) && /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-hero-actions"
  }, frontmatter.hero.actions.map(function (_ref) {
    var text = _ref.text,
      link = _ref.link;
    return /^(\w+:)\/\/|^(mailto|tel):/.test(link) ? /*#__PURE__*/React.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noreferrer",
      key: text
    }, text) : /*#__PURE__*/React.createElement(Link, {
      key: text,
      to: link
    }, text);
  })));
};
export default Hero;