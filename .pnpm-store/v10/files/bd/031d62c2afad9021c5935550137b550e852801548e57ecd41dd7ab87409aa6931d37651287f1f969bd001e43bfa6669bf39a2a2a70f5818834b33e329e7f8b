"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToBitmap = void 0;
var _models = require("../models");
var _image = require("../utils/image");
var _nodeType = require("../utils/nodeType");
var _svg = require("./svg");
/**
 * 将图片 image 解析为图片
 * @param node HTMLImageElement
 */
const parseToBitmap = async node => {
  if (!(0, _nodeType.isImageNode)(node)) {
    return;
  }
  const {
    width,
    height,
    y,
    x
  } = node.getBoundingClientRect();

  // 如果解析失败, 则采用提前准备好的错误图片

  let url = node.src;
  // 网络 URL
  if (url.startsWith('//')) {
    url = (location.protocol ? location.protocol : 'https') + url;
  }
  if (url.startsWith('http')) {
    if (url.endsWith('.svg')) {
      try {
        const svg = await (0, _svg.parseURLToSvg)(url, new _models.Frame({
          x,
          y,
          width,
          height
        }));
        svg?.mapBasicInfo(node);
        return svg;
      } catch (e) {
        console.log(e);
        url = _image.errorBase64Url;
      }
    }
  } else {
    // 内联的 URL
    url = (0, _image.getImageBase64URL)(node);
  }
  const bitmap = new _models.Bitmap({
    url,
    x,
    y,
    width,
    height
  });
  bitmap.mapBasicInfo(node);
  await bitmap.init();
  return bitmap;
};
exports.parseToBitmap = parseToBitmap;