"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextVerticalAlign = exports.TextHorizontalAlign = exports.FONT_WEIGHTS = void 0;
var _sketchFileFormatTs = _interopRequireDefault(require("@sketch-hq/sketch-file-format-ts"));
var _Color = _interopRequireDefault(require("./Color"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SYSTEM_FONTS = [/* * Apple * */
'-apple-system', 'system-ui', 'BlinkMacSystemFont', /* * Microsoft * */
'Segoe UI', /* * Android * */
'Roboto'];
/**
 * 字体权重
 * */
const FONT_WEIGHTS = {
  normal: 'Regular',
  bold: 'Bold',
  bolder: 'Semibold',
  '100': 'UltraLight',
  '200': 'Thin',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Semibold',
  '700': 'Bold',
  '800': 'Heavy',
  '900': 'Black'
};

// 输入: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif
// 输出: PingFang SC
exports.FONT_WEIGHTS = FONT_WEIGHTS;
function getFirstFont(fonts, skipSystemFonts) {
  let regularFont = null;
  let systemFont = null;
  fonts.split(',').forEach(font => {
    font = font.trim().replace(/^["']+|["']+$/g, '');
    if (font === '') {
      return;
    }

    // See above for a note on OS-specific fonts
    if (!regularFont && (!skipSystemFonts || SYSTEM_FONTS.indexOf(font) < 0)) {
      regularFont = font;
    }
    if (!systemFont) {
      systemFont = font;
    }
  });
  if (regularFont) {
    return regularFont;
  }
  if (systemFont) {
    return systemFont;
  }
  return '-apple-system';
}
let TextHorizontalAlign;
exports.TextHorizontalAlign = TextHorizontalAlign;
(function (TextHorizontalAlign) {
  TextHorizontalAlign["Left"] = "left";
  TextHorizontalAlign["Right"] = "right";
  TextHorizontalAlign["Center"] = "center";
  TextHorizontalAlign["Justify"] = "justify";
})(TextHorizontalAlign || (exports.TextHorizontalAlign = TextHorizontalAlign = {}));
let TextVerticalAlign;
/**
 * 文本样式
 */
exports.TextVerticalAlign = TextVerticalAlign;
(function (TextVerticalAlign) {
  TextVerticalAlign["Top"] = "top";
  TextVerticalAlign["Middle"] = "middle";
  TextVerticalAlign["Bottom"] = "bottom";
})(TextVerticalAlign || (exports.TextVerticalAlign = TextVerticalAlign = {}));
class TextStyle {
  constructor(param) {
    if (param) {
      const {
        color,
        fontFamily,
        fontWeight,
        lineHeight,
        letterSpacing,
        textTransform,
        textDecoration,
        textAlign,
        skipSystemFonts,
        fontSize
      } = param;
      this.color = new _Color.default(color);
      this.fontSize = fontSize || 14;
      this.lineHeight = lineHeight;
      this.letterSpacing = letterSpacing;
      this.textTransform = textTransform;
      this.textDecoration = textDecoration;
      this.textAlign = textAlign || TextHorizontalAlign.Left;
      if (fontWeight) {
        this.fontWeight = fontWeight.toString();
      }
      if (fontFamily) {
        this.fontFamily = getFirstFont(fontFamily, skipSystemFonts);
      }
    }
  }
  color = new _Color.default();

  /**
   * 字体家族
   * */
  fontFamily = 'PingFang SC';

  /**
   * 字体大小
   * */
  fontSize = 14;

  /**
   * 行高
   * */
  lineHeight;

  /**
   * 字宽
   * */
  letterSpacing;

  /**
   * 字重
   */
  fontWeight = '';

  /**
   * 字体变换
   *
   * 例如全部大写等
   * */
  textTransform = '';

  /**
   * 文本横向对齐
   * */
  textAlign = TextHorizontalAlign.Left;

  /**
   * 文本纵向对齐
   */
  verticalAlign = TextVerticalAlign.Top;

  /**
   * 文本装饰
   *
   * 例如 下划线、删除线等
   * */
  textDecoration;

  /**
   * 字体类型
   * */
  FONT_STYLES = {
    normal: false,
    italic: true,
    oblique: true
  };

  /**
   * 取得 sketch 下的横向对齐参数
   */
  getSketchHorizontalAlign = () => {
    // 默认使用左对齐
    return _sketchFileFormatTs.default.TextHorizontalAlignment.Left;

    // 相关 Bug https://github.com/ant-design/html2sketch/issues/51
    // switch (this.textAlign) {
    //   case 'left':
    //   default:
    //     return SketchFormat.TextHorizontalAlignment.Left;
    //   case 'right':
    //     return SketchFormat.TextHorizontalAlignment.Right;
    //   case 'center':
    //     return SketchFormat.TextHorizontalAlignment.Centered;
    //   case 'justify':
    //     return SketchFormat.TextHorizontalAlignment.Justified;
    // }
  };

  /**
   * 取得 sketch 下的纵向对齐参数
   */
  getSketchVerticalAlign = () => {
    switch (this.verticalAlign) {
      case 'top':
      default:
        return _sketchFileFormatTs.default.TextVerticalAlignment.Top;
      case 'middle':
        return _sketchFileFormatTs.default.TextVerticalAlignment.Middle;
      case 'bottom':
        return _sketchFileFormatTs.default.TextVerticalAlignment.Bottom;
    }
  };

  /**
   * 取得 sketch 下的文本变化属性
   */
  getTextTransform = () => {
    switch (this.textTransform?.toLowerCase()) {
      case 'uppercase':
        return _sketchFileFormatTs.default.TextTransform.Uppercase;
      case 'lowercase':
        return _sketchFileFormatTs.default.TextTransform.Lowercase;
      default:
        return _sketchFileFormatTs.default.TextTransform.None;
    }
  };

  /**
   * 获取下划线参数
   */
  getUnderlineStyle = () => {
    if (this.textDecoration === 'underline') return _sketchFileFormatTs.default.UnderlineStyle.Underlined;
    return _sketchFileFormatTs.default.UnderlineStyle.None;
  };

  /**
   * 获取下划线参数
   */
  getStrikeThroughStyle = () => {
    if (this.textDecoration === 'line-through') return 1;
    return 0;
  };

  /**
   * 修正字体家族信息
   * */
  fixFontFamilyInfo = (_family, weight
  // _fontStyle?: string,
  ) => {
    const defaultFontFamily = 'PingFangSC';
    const defaultFontWeight = FONT_WEIGHTS.normal;
    let fontWeight = weight ? FONT_WEIGHTS[weight] : defaultFontWeight;
    // Default to PingFangSC if fonts are missing

    // let isItalic = false;

    // let isCondensed = false;

    const familyName = defaultFontFamily;
    // if (family && family !== '-apple-system') {
    // familyName = family;
    // }

    // 针对苹方的字体 处理下 bold 的问题
    if (familyName === defaultFontFamily) {
      if (fontWeight === 'Bold') {
        fontWeight = 'Semibold';
      }
    }

    // if (fontStyle) {
    //   isItalic = this.FONT_STYLES[fontStyle] || false;
    // }

    // console.log('是否斜体:', isItalic);
    // return `${familyName}-${fontWeight}`;
    return `${familyName}-${fontWeight}`;
  };

  /**
   * 转为 Sketch JSON对象
   */
  toSketchJSON = () => {
    return {
      _class: 'textStyle',
      verticalAlignment: this.getSketchVerticalAlign(),
      encodedAttributes: {
        underlineStyle: this.getUnderlineStyle(),
        MSAttributedStringTextTransformAttribute: this.getTextTransform(),
        paragraphStyle: {
          _class: 'paragraphStyle',
          alignment: this.getSketchHorizontalAlign(),
          maximumLineHeight: this.lineHeight || 22,
          minimumLineHeight: this.lineHeight || 22
        },
        /**
         * 字宽
         * */
        kerning: this.letterSpacing || 0,
        strikethroughStyle: this.getStrikeThroughStyle(),
        MSAttributedStringFontAttribute: {
          _class: 'fontDescriptor',
          attributes: {
            name: this.fixFontFamilyInfo(this.fontFamily, this.fontWeight),
            size: this.fontSize
          }
        },
        MSAttributedStringColorAttribute: this.color.toSketchJSON()
      }
    };
  };

  /**
   * 从样式对象中解析出文本的横向对齐方式
   */
  static parseTextHorizontalAlign = styles => {
    const {
      display,
      justifyContent,
      textAlign
    } = styles;
    switch (display) {
      case 'flex':
      case 'inline-flex':
        switch (justifyContent) {
          case 'start':
          default:
            return TextHorizontalAlign.Left;
          case 'right':
          case 'end':
            return TextHorizontalAlign.Right;
          case 'center':
            return TextHorizontalAlign.Center;
          case 'space-between':
          case 'space-around':
            return TextHorizontalAlign.Justify;
        }
      case 'block':
      default:
        return textAlign || TextHorizontalAlign.Left;
    }
  };

  /**
   * 从样式对象中解析出文本的纵向对齐方式
   * @param styles
   */
  static parseTextVerticalAlign = styles => {
    const {
      display,
      alignItems,
      flexDirection
    } = styles;
    switch (display) {
      // 针对 flex 布局
      case 'flex':
      case 'inline-flex':
        if (alignItems === 'center') {
          return TextVerticalAlign.Middle;
        }
        switch (flexDirection) {
          case 'row':
          default:
            switch (alignItems) {
              default:
              case 'start':
                return TextVerticalAlign.Top;
              case 'end':
                return TextVerticalAlign.Bottom;
            }
          case 'row-reverse':
            switch (alignItems) {
              default:
              case 'start':
                return TextVerticalAlign.Bottom;
              case 'end':
                return TextVerticalAlign.Top;
            }
        }
      case 'block':
      default:
        return TextVerticalAlign.Top;
    }
  };
}
var _default = TextStyle;
exports.default = _default;