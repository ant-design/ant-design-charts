"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBase64 = void 0;
var _image = require("./image");
/**
 *
 * @param url
 */
const fetchBase64 = async url => {
  if (window.HTML2SKETCH_FETCH_BASE64) {
    return await window.HTML2SKETCH_FETCH_BASE64(url);
  }
  const data = await fetch(url);
  const blob = await data.blob();
  const dataURL = await (0, _image.blobToBase64)(blob);
  return (0, _image.getBase64ImageString)(dataURL);
};
exports.fetchBase64 = fetchBase64;