"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fetch = require("../../utils/fetch");
var _utils = require("../../utils/utils");
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _utils2 = require("../utils");
var _types = require("../../types");
var _image = require("../../utils/image");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 图片处理
 * */
class Bitmap extends _BaseLayer.default {
  constructor({
    url,
    x,
    y,
    width,
    height
  }) {
    super(_types.SketchFormat.ClassValue.Bitmap, {
      y,
      x,
      height,
      width
    });
    if (!url) {
      throw Error('没有传入 URL 请检查参数');
    }
    const {
      url: safeURL,
      base64
    } = (0, _image.initImageURL)(url);
    this.url = safeURL;
    this.base64 = base64;
  }

  /**
   * 线上 url
   */
  url;

  /**
   * 转换成的 base64 数据
   */
  base64;

  /**
   * 针对 http的 url 进行资源的初始化
   */
  async init() {
    if (!this.url.startsWith('http')) return;
    try {
      const base64 = await (0, _fetch.fetchBase64)(this.url);
      if (base64) {
        this.base64 = base64;
      }
    } catch (e) {
      console.warn('网络或图片资源可能存在问题...');
      console.error(e);
    }
  }

  /**
   * 转为 Sketch JSON 对象
   */
  toSketchJSON = () => ({
    _class: 'bitmap',
    do_objectID: this.id,
    frame: this.frame.toSketchJSON(),
    style: this.style.toSketchJSON(),
    image: this.toSketchImageJSON(),
    booleanOperation: _types.SketchFormat.BooleanOperation.None,
    isTemplate: false,
    exportOptions: _utils2.defaultExportOptions,
    clippingMask: '',
    intendedDPI: 32,
    fillReplacesImage: false,
    isFixedToViewport: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    isLocked: this.locked,
    isVisible: true,
    layerListExpandedType: 0,
    name: this.name || this.class,
    nameIsFixed: false,
    resizingConstraint: this.resizingConstraint,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: false,
    clippingMaskMode: 0,
    hasClippingMask: this.hasClippingMask
  });

  /**
   * 转换为 Sketch 引用 JSON 对象
   * */
  toSketchImageJSON = () => {
    return {
      _class: 'MSJSONOriginalDataReference',
      _ref_class: 'MSImageData',
      _ref: `images/${(0, _utils.uuid)()}`,
      data: {
        _data: this.base64
      },
      sha1: {
        _data: ''
      }
    };
  };
}
var _default = Bitmap;
exports.default = _default;