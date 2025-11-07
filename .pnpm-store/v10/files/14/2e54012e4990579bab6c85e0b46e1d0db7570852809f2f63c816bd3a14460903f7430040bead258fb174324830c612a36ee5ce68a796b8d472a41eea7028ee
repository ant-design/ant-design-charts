"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fetch = require("../../utils/fetch");
var _image = require("../../utils/image");
var _BaseStyle = _interopRequireDefault(require("../Base/BaseStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 图片资产
 * 用于添加到 Fill 和 Border 的内容
 */
class Image extends _BaseStyle.default {
  constructor(url) {
    super();
    const {
      url: safeURL,
      base64
    } = (0, _image.initImageURL)(url);
    this.url = safeURL;
    this.base64 = base64;
  }

  /**
   * 完成图片资源的初始化
   */
  async init() {
    if (this.url.startsWith('http')) {
      const base64 = await (0, _fetch.fetchBase64)(this.url);
      if (base64) {
        this.base64 = base64;
      }
    }
  }

  /**
   * 外部传入的 URL
   */
  url;

  /**
   * 转换成的 base64 数据
   */
  base64;
  toSketchJSON() {
    return {
      _class: 'MSJSONOriginalDataReference',
      _ref_class: 'MSImageData',
      _ref: this.id,
      data: {
        _data: this.base64
      },
      sha1: {
        _data: ''
      }
    };
  }
}
var _default = Image;
exports.default = _default;