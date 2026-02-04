"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../utils/utils");
var _Style = _interopRequireDefault(require("../Style/Style"));
var _types = require("../../types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Sketch 文档对象
 */
class SketchDocument {
  id;
  colors;

  /**
   * 色板
   */
  swatches = [];

  /**
   * 颜色资产
   */
  colorAssets = [];

  /**
   * 文本样式
   */
  textStyles;

  /**
   * 图层样式
   */
  layerStyles;

  /**
   * 外部图层样式
   */
  foreignLayerStyles = [];

  /**
   * 外部文本样式
   */
  foreignTextStyles = [];

  /**
   * 外部 Swatch
   */
  foreignSwatch = [];

  /**
   * 外部 Symbol
   */
  foreignSymbol = [];

  /**
   * 画板
   */
  pages;

  /**
   * 文件名
   */
  name = '';
  constructor() {
    this.id = (0, _utils.uuid)();
    this.colors = [];
    this.textStyles = [];
    this.layerStyles = [];
    this.pages = [];
  }
  addPage(page) {
    this.pages.push(page);
  }
  addTextStyle(textLayer, id) {
    this.textStyles.push(_Style.default.layerToSketchSharedStyle(textLayer, id));
  }
  addLayerStyle(layer, id) {
    this.layerStyles.push(_Style.default.layerToSketchSharedStyle(layer, id));
  }
  addColor(color) {
    this.colors.push(color);
  }

  /**
   * 转为 Sketch JSON对象
   */
  toSketchJSON() {
    return {
      _class: 'document',
      do_objectID: this.id,
      colorSpace: _types.SketchFormat.ColorSpace.Unmanaged,
      foreignLayerStyles: this.foreignLayerStyles,
      foreignTextStyles: this.foreignTextStyles,
      foreignSymbols: [],
      foreignSwatches: [],
      assets: {
        do_objectID: (0, _utils.uuid)(),
        _class: 'assetCollection',
        exportPresets: [],
        images: [],
        gradients: [],
        gradientAssets: [],
        colors: this.colors.map(color => color.toSketchJSON()),
        colorAssets: this.colorAssets.map(colorAsset => colorAsset.toSketchJSON())
      },
      currentPageIndex: 0,
      layerStyles: {
        _class: 'sharedStyleContainer',
        objects: this.layerStyles
      },
      layerSymbols: {
        _class: 'symbolContainer',
        objects: []
      },
      layerTextStyles: {
        _class: 'sharedTextStyleContainer',
        objects: this.textStyles
      },
      pages: this.pages.map(this.pageToPageReference),
      sharedSwatches: {
        _class: 'swatchContainer',
        objects: this.swatches
      },
      perDocumentLibraries: []
    };
  }

  /**
   * 将 Page 转为参考对象
   */
  pageToPageReference = page => ({
    _class: 'MSJSONFileReference',
    _ref_class: 'MSImmutablePage',
    _ref: `pages/${page.id}`
  });
}
var _default = SketchDocument;
exports.default = _default;