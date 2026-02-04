"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Progress;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
function Progress(props) {
  const {
    percent
  } = props;
  const {
    token
  } = _antd.theme.useToken();
  return /*#__PURE__*/_react.default.createElement(_antd.Progress, {
    type: "circle",
    percent: percent,
    size: token.fontSizeHeading2 * 2,
    strokeColor: "#FFF",
    trailColor: "rgba(255, 255, 255, 0.3)",
    format: ptg => /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: '#FFF'
      }
    }, (ptg || 0).toFixed(0), "%")
  });
}