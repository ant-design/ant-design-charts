function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { uuid } from "../../utils/utils";
import Style from "../Style/Style";
import { SketchFormat } from "../../types";

/**
 * Sketch 文档对象
 */
var SketchDocument = /*#__PURE__*/function () {
  /**
   * 色板
   */

  /**
   * 颜色资产
   */

  /**
   * 文本样式
   */

  /**
   * 图层样式
   */

  /**
   * 外部图层样式
   */

  /**
   * 外部文本样式
   */

  /**
   * 外部 Swatch
   */

  /**
   * 外部 Symbol
   */

  /**
   * 画板
   */

  /**
   * 文件名
   */

  function SketchDocument() {
    _classCallCheck(this, SketchDocument);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "colors", void 0);
    _defineProperty(this, "swatches", []);
    _defineProperty(this, "colorAssets", []);
    _defineProperty(this, "textStyles", void 0);
    _defineProperty(this, "layerStyles", void 0);
    _defineProperty(this, "foreignLayerStyles", []);
    _defineProperty(this, "foreignTextStyles", []);
    _defineProperty(this, "foreignSwatch", []);
    _defineProperty(this, "foreignSymbol", []);
    _defineProperty(this, "pages", void 0);
    _defineProperty(this, "name", '');
    _defineProperty(this, "pageToPageReference", function (page) {
      return {
        _class: 'MSJSONFileReference',
        _ref_class: 'MSImmutablePage',
        _ref: "pages/".concat(page.id)
      };
    });
    this.id = uuid();
    this.colors = [];
    this.textStyles = [];
    this.layerStyles = [];
    this.pages = [];
  }
  _createClass(SketchDocument, [{
    key: "addPage",
    value: function addPage(page) {
      this.pages.push(page);
    }
  }, {
    key: "addTextStyle",
    value: function addTextStyle(textLayer, id) {
      this.textStyles.push(Style.layerToSketchSharedStyle(textLayer, id));
    }
  }, {
    key: "addLayerStyle",
    value: function addLayerStyle(layer, id) {
      this.layerStyles.push(Style.layerToSketchSharedStyle(layer, id));
    }
  }, {
    key: "addColor",
    value: function addColor(color) {
      this.colors.push(color);
    }

    /**
     * 转为 Sketch JSON对象
     */
  }, {
    key: "toSketchJSON",
    value: function toSketchJSON() {
      return {
        _class: 'document',
        do_objectID: this.id,
        colorSpace: SketchFormat.ColorSpace.Unmanaged,
        foreignLayerStyles: this.foreignLayerStyles,
        foreignTextStyles: this.foreignTextStyles,
        foreignSymbols: [],
        foreignSwatches: [],
        assets: {
          do_objectID: uuid(),
          _class: 'assetCollection',
          exportPresets: [],
          images: [],
          gradients: [],
          gradientAssets: [],
          colors: this.colors.map(function (color) {
            return color.toSketchJSON();
          }),
          colorAssets: this.colorAssets.map(function (colorAsset) {
            return colorAsset.toSketchJSON();
          })
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
  }]);
  return SketchDocument;
}();
export default SketchDocument;