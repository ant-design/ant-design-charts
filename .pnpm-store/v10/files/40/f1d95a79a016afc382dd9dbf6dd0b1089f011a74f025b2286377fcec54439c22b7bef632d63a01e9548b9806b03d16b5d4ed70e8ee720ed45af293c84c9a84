import { Progress as AntdProgress, theme } from 'antd';
import React from 'react';
export default function Progress(props) {
  const {
    percent
  } = props;
  const {
    token
  } = theme.useToken();
  return /*#__PURE__*/React.createElement(AntdProgress, {
    type: "circle",
    percent: percent,
    size: token.fontSizeHeading2 * 2,
    strokeColor: "#FFF",
    trailColor: "rgba(255, 255, 255, 0.3)",
    format: ptg => /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#FFF'
      }
    }, (ptg || 0).toFixed(0), "%")
  });
}