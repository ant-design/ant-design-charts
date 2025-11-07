function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import Color from "./Color";
var SYSTEM_FONTS = [/* * Apple * */
'-apple-system', 'system-ui', 'BlinkMacSystemFont', /* * Microsoft * */
'Segoe UI', /* * Android * */
'Roboto'];
/**
 * 字体权重
 * */
export var FONT_WEIGHTS = {
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
function getFirstFont(fonts, skipSystemFonts) {
  var regularFont = null;
  var systemFont = null;
  fonts.split(',').forEach(function (font) {
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
export var TextHorizontalAlign;
(function (TextHorizontalAlign) {
  TextHorizontalAlign["Left"] = "left";
  TextHorizontalAlign["Right"] = "right";
  TextHorizontalAlign["Center"] = "center";
  TextHorizontalAlign["Justify"] = "justify";
})(TextHorizontalAlign || (TextHorizontalAlign = {}));
export var TextVerticalAlign;

/**
 * 文本样式
 */
(function (TextVerticalAlign) {
  TextVerticalAlign["Top"] = "top";
  TextVerticalAlign["Middle"] = "middle";
  TextVerticalAlign["Bottom"] = "bottom";
})(TextVerticalAlign || (TextVerticalAlign = {}));
var TextStyle = /*#__PURE__*/_createClass(function TextStyle(param) {
  var _this = this;
  _classCallCheck(this, TextStyle);
  _defineProperty(this, "color", new Color());
  _defineProperty(this, "fontFamily", 'PingFang SC');
  _defineProperty(this, "fontSize", 14);
  _defineProperty(this, "lineHeight", void 0);
  _defineProperty(this, "letterSpacing", void 0);
  _defineProperty(this, "fontWeight", '');
  _defineProperty(this, "textTransform", '');
  _defineProperty(this, "textAlign", TextHorizontalAlign.Left);
  _defineProperty(this, "verticalAlign", TextVerticalAlign.Top);
  _defineProperty(this, "textDecoration", void 0);
  _defineProperty(this, "FONT_STYLES", {
    normal: false,
    italic: true,
    oblique: true
  });
  _defineProperty(this, "getSketchHorizontalAlign", function () {
    // 默认使用左对齐
    return SketchFormat.TextHorizontalAlignment.Left;

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
  });
  _defineProperty(this, "getSketchVerticalAlign", function () {
    switch (_this.verticalAlign) {
      case 'top':
      default:
        return SketchFormat.TextVerticalAlignment.Top;
      case 'middle':
        return SketchFormat.TextVerticalAlignment.Middle;
      case 'bottom':
        return SketchFormat.TextVerticalAlignment.Bottom;
    }
  });
  _defineProperty(this, "getTextTransform", function () {
    var _this$textTransform;
    switch ((_this$textTransform = _this.textTransform) === null || _this$textTransform === void 0 ? void 0 : _this$textTransform.toLowerCase()) {
      case 'uppercase':
        return SketchFormat.TextTransform.Uppercase;
      case 'lowercase':
        return SketchFormat.TextTransform.Lowercase;
      default:
        return SketchFormat.TextTransform.None;
    }
  });
  _defineProperty(this, "getUnderlineStyle", function () {
    if (_this.textDecoration === 'underline') return SketchFormat.UnderlineStyle.Underlined;
    return SketchFormat.UnderlineStyle.None;
  });
  _defineProperty(this, "getStrikeThroughStyle", function () {
    if (_this.textDecoration === 'line-through') return 1;
    return 0;
  });
  _defineProperty(this, "fixFontFamilyInfo", function (_family, weight
  // _fontStyle?: string,
  ) {
    var defaultFontFamily = 'PingFangSC';
    var defaultFontWeight = FONT_WEIGHTS.normal;
    var fontWeight = weight ? FONT_WEIGHTS[weight] : defaultFontWeight;
    // Default to PingFangSC if fonts are missing

    // let isItalic = false;

    // let isCondensed = false;

    var familyName = defaultFontFamily;
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
    return "".concat(familyName, "-").concat(fontWeight);
  });
  _defineProperty(this, "toSketchJSON", function () {
    return {
      _class: 'textStyle',
      verticalAlignment: _this.getSketchVerticalAlign(),
      encodedAttributes: {
        underlineStyle: _this.getUnderlineStyle(),
        MSAttributedStringTextTransformAttribute: _this.getTextTransform(),
        paragraphStyle: {
          _class: 'paragraphStyle',
          alignment: _this.getSketchHorizontalAlign(),
          maximumLineHeight: _this.lineHeight || 22,
          minimumLineHeight: _this.lineHeight || 22
        },
        /**
         * 字宽
         * */
        kerning: _this.letterSpacing || 0,
        strikethroughStyle: _this.getStrikeThroughStyle(),
        MSAttributedStringFontAttribute: {
          _class: 'fontDescriptor',
          attributes: {
            name: _this.fixFontFamilyInfo(_this.fontFamily, _this.fontWeight),
            size: _this.fontSize
          }
        },
        MSAttributedStringColorAttribute: _this.color.toSketchJSON()
      }
    };
  });
  if (param) {
    var color = param.color,
      fontFamily = param.fontFamily,
      fontWeight = param.fontWeight,
      lineHeight = param.lineHeight,
      letterSpacing = param.letterSpacing,
      textTransform = param.textTransform,
      textDecoration = param.textDecoration,
      textAlign = param.textAlign,
      skipSystemFonts = param.skipSystemFonts,
      fontSize = param.fontSize;
    this.color = new Color(color);
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
});
_defineProperty(TextStyle, "parseTextHorizontalAlign", function (styles) {
  var display = styles.display,
    justifyContent = styles.justifyContent,
    textAlign = styles.textAlign;
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
});
_defineProperty(TextStyle, "parseTextVerticalAlign", function (styles) {
  var display = styles.display,
    alignItems = styles.alignItems,
    flexDirection = styles.flexDirection;
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
});
export default TextStyle;