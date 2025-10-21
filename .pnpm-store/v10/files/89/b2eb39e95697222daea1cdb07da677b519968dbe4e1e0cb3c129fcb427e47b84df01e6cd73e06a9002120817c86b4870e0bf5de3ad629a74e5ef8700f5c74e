"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _BaseLayer = _interopRequireDefault(require("../Base/BaseLayer"));
var _types = require("../../types");
var _TextStyle = _interopRequireDefault(require("../Style/TextStyle"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 文本对象
 * */
class Text extends _BaseLayer.default {
  constructor({
    x,
    y,
    width,
    height,
    text,
    style,
    multiline
  }) {
    super(_types.SketchFormat.ClassValue.Text, {
      x,
      y,
      width,
      height
    });
    this.name = text;
    this.text = text;
    this.textStyle = new _TextStyle.default(style);
    this.multiline = multiline || false;

    // 1 - width is set to Fixed
    // 0 - width is set to Auto - this helps us avoid issues with browser setting too small width causing line to break
    this.sketchTextBehaviour = multiline ? _types.SketchFormat.TextBehaviour.Fixed : _types.SketchFormat.TextBehaviour.Flexible;
    if (style?.opacity) {
      this.style.opacity = style.opacity;
    }
  }
  textStyle;

  /**
   * 文本内容
   * */
  text;

  /**
   * 多行
   */
  multiline;
  sketchTextBehaviour;

  /**
   * 转换为 Sketch JSON 对象
   * */
  toSketchJSON = () => {
    const textJSON = {
      _class: 'text',
      do_objectID: this.id,
      booleanOperation: _types.SketchFormat.BooleanOperation.None,
      isFixedToViewport: false,
      isFlippedHorizontal: false,
      isFlippedVertical: false,
      isTemplate: false,
      isLocked: this.locked,
      isVisible: true,
      name: this.name || this.class,
      nameIsFixed: this.nameIsFixed,
      layerListExpandedType: 0,
      resizingConstraint: this.resizingConstraint,
      resizingType: _types.SketchFormat.ResizeType.Stretch,
      rotation: 0,
      shouldBreakMaskChain: false,
      exportOptions: _utils.defaultExportOptions,
      frame: this.frame.toSketchJSON(),
      clippingMaskMode: 0,
      hasClippingMask: this.hasClippingMask,
      style: {
        ...this.style.toSketchJSON(),
        textStyle: this.textStyle.toSketchJSON()
      },
      attributedString: this.getSketchAttributedString(),
      automaticallyDrawOnUnderlyingPath: false,
      dontSynchroniseWithSymbol: false,
      lineSpacingBehaviour: 2,
      textBehaviour: this.sketchTextBehaviour,
      glyphBounds: ''
    };
    if (this.userInfo) {
      textJSON.userInfo = this.userInfo;
    }
    return textJSON;
  };

  /**
   * 生成文本核心样式
   * */
  getSketchAttributedString = () => {
    return {
      _class: 'attributedString',
      string: this.text,
      attributes: [{
        _class: 'stringAttribute',
        location: 0,
        length: this.text.length,
        attributes: this.textStyle.toSketchJSON().encodedAttributes
      }]
    };
  };

  /**
   * 解析字重
   * @param {string} fontWeight font weight as provided by the browser
   * @return {number} normalized font weight
   */
  static parseFontWeight = fontWeight => {
    // Support 'bold' and 'normal' for Electron compatibility.
    if (fontWeight === 'bold') {
      return 700;
    }
    if (fontWeight === 'normal') {
      return 400;
    }
    return parseInt(fontWeight, 10);
  };

  /**
   * 修复字体空格
   * */
  static fixWhiteSpace = (text, whiteSpace) => {
    switch (whiteSpace) {
      case 'normal':
      case 'nowrap':
        return text
        // replace newline characters with space
        .replace(/\n/g, ' ')
        // collapse whitespace
        .replace(/\s+/g, ' ');
      case 'pre-line':
        return text.replace(/(^[^\S\n]+)|([^\S\n]+$)/g, '') // trim but leave \n
        .replace(/[^\S\n]+/g, ' ') // collapse whitespace (except \n)
        .replace(/[^\S\n]?\n[^\S\n]?/g, '\n');
      // remove whitespace before & after \n
      default:
      // pre, pre-wrap
    }

    return text;
  };

  /**
   * 从节点中获取样式
   * @param node
   * @param pseudoElt
   */
  static getTextStyleFromNode = (node, pseudoElt) => {
    const styles = getComputedStyle(node, pseudoElt);
    const {
      // 字体
      fontFamily,
      fontWeight,
      fontSize,
      lineHeight,
      letterSpacing,
      textTransform,
      textDecorationLine,
      color,
      opacity
    } = styles;
    return {
      fontFamily,
      fontSize: parseInt(fontSize, 10),
      lineHeight: lineHeight !== 'normal' ? parseFloat(lineHeight) : undefined,
      letterSpacing: letterSpacing !== 'normal' ? parseFloat(letterSpacing) : undefined,
      fontWeight: Text.parseFontWeight(fontWeight),
      color,
      textTransform,
      textDecoration: textDecorationLine,
      textAlign: _TextStyle.default.parseTextHorizontalAlign(styles),
      verticalAlign: _TextStyle.default.parseTextVerticalAlign(styles),
      skipSystemFonts: true,
      opacity: parseFloat(opacity)
    };
  };
}
var _default = Text;
exports.default = _default;