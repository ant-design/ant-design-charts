"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseURLToSvg = exports.parseToSvg = void 0;
var _Svg = _interopRequireDefault(require("../models/Layer/Svg"));
var _svg = require("../utils/svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 将 SVG node 节点转为 SVG Sketch对象
 * @param {SVGElement} node svg节点
 */
const parseToSvg = async node => {
  const {
    height,
    width,
    left,
    top
  } = node.getBoundingClientRect();
  const svgString = await (0, _svg.StrToRenderSVG)((0, _svg.nodeToRawSVG)(node), {
    width,
    height
  }, node);
  const svg = new _Svg.default({
    x: left,
    y: top,
    width,
    height,
    svgString
  });
  svg.name = node.getAttribute('data-icon') || 'svg';
  return svg;
};

/**
 * 将 URL 转换为 Svg 对象
 * @param url
 * @param frame
 */
exports.parseToSvg = parseToSvg;
const parseURLToSvg = async (url, frame) => {
  let svgString = await (0, _svg.urlToRawSVG)(url);
  if (!svgString) return;
  const {
    x,
    y,
    width,
    height
  } = frame;
  svgString = await (0, _svg.StrToRenderSVG)(svgString, {
    width,
    height
  });
  return new _Svg.default({
    svgString,
    x,
    y,
    width,
    height
  });
};
exports.parseURLToSvg = parseURLToSvg;