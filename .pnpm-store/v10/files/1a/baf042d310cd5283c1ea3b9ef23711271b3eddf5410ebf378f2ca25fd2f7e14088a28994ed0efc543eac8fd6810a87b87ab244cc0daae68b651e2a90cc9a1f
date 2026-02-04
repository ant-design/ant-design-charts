import { ReactComponent as IconFacebook } from '@ant-design/icons-svg/inline-svg/outlined/facebook.svg';
import { ReactComponent as IconGitHub } from '@ant-design/icons-svg/inline-svg/outlined/github.svg';
import { ReactComponent as IconGitlab } from '@ant-design/icons-svg/inline-svg/outlined/gitlab.svg';
import { ReactComponent as IconLinkedin } from '@ant-design/icons-svg/inline-svg/outlined/linkedin.svg';
import { ReactComponent as IconWeiBo } from '@ant-design/icons-svg/inline-svg/outlined/weibo.svg';
import { ReactComponent as IconX } from '@ant-design/icons-svg/inline-svg/outlined/x.svg';
import { ReactComponent as IconYuque } from '@ant-design/icons-svg/inline-svg/outlined/yuque.svg';
import { ReactComponent as IconZhihu } from '@ant-design/icons-svg/inline-svg/outlined/zhihu.svg';
import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import "./index.less";
var presetIconMap = {
  github: IconGitHub,
  weibo: IconWeiBo,
  twitter: IconX,
  x: IconX,
  gitlab: IconGitlab,
  facebook: IconFacebook,
  zhihu: IconZhihu,
  yuque: IconYuque,
  linkedin: IconLinkedin
};
var SocialIcon = function SocialIcon(props) {
  var icon = props.icon,
    link = props.link;
  var intl = useIntl();
  var preset = useMemo(function () {
    return {
      Icon: presetIconMap[icon],
      link: link
    };
  }, [icon, link]);
  return /*#__PURE__*/React.createElement("a", {
    className: "dumi-default-icon",
    "data-dumi-tooltip": intl.formatMessage({
      id: "header.social.".concat(icon)
    }),
    "data-dumi-tooltip-bottom": true,
    target: "_blank",
    href: preset.link,
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement(preset.Icon, null));
};
export default SocialIcon;