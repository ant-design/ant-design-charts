function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import BaseLayer from "../Base/BaseLayer";
import { SketchFormat } from "../../types";
import TextStyle from "../Style/TextStyle";
import { defaultExportOptions } from "../utils";
/**
 * 文本对象
 * */
var Text = /*#__PURE__*/function (_BaseLayer) {
  _inherits(Text, _BaseLayer);
  var _super = _createSuper(Text);
  function Text(_ref) {
    var _this;
    var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      text = _ref.text,
      style = _ref.style,
      multiline = _ref.multiline;
    _classCallCheck(this, Text);
    _this = _super.call(this, SketchFormat.ClassValue.Text, {
      x: x,
      y: y,
      width: width,
      height: height
    });
    _defineProperty(_assertThisInitialized(_this), "textStyle", void 0);
    _defineProperty(_assertThisInitialized(_this), "text", void 0);
    _defineProperty(_assertThisInitialized(_this), "multiline", void 0);
    _defineProperty(_assertThisInitialized(_this), "sketchTextBehaviour", void 0);
    _defineProperty(_assertThisInitialized(_this), "toSketchJSON", function () {
      var textJSON = {
        _class: 'text',
        do_objectID: _this.id,
        booleanOperation: SketchFormat.BooleanOperation.None,
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        isTemplate: false,
        isLocked: _this.locked,
        isVisible: true,
        name: _this.name || _this.class,
        nameIsFixed: _this.nameIsFixed,
        layerListExpandedType: 0,
        resizingConstraint: _this.resizingConstraint,
        resizingType: SketchFormat.ResizeType.Stretch,
        rotation: 0,
        shouldBreakMaskChain: false,
        exportOptions: defaultExportOptions,
        frame: _this.frame.toSketchJSON(),
        clippingMaskMode: 0,
        hasClippingMask: _this.hasClippingMask,
        style: _objectSpread(_objectSpread({}, _this.style.toSketchJSON()), {}, {
          textStyle: _this.textStyle.toSketchJSON()
        }),
        attributedString: _this.getSketchAttributedString(),
        automaticallyDrawOnUnderlyingPath: false,
        dontSynchroniseWithSymbol: false,
        lineSpacingBehaviour: 2,
        textBehaviour: _this.sketchTextBehaviour,
        glyphBounds: ''
      };
      if (_this.userInfo) {
        textJSON.userInfo = _this.userInfo;
      }
      return textJSON;
    });
    _defineProperty(_assertThisInitialized(_this), "getSketchAttributedString", function () {
      return {
        _class: 'attributedString',
        string: _this.text,
        attributes: [{
          _class: 'stringAttribute',
          location: 0,
          length: _this.text.length,
          attributes: _this.textStyle.toSketchJSON().encodedAttributes
        }]
      };
    });
    _this.name = text;
    _this.text = text;
    _this.textStyle = new TextStyle(style);
    _this.multiline = multiline || false;

    // 1 - width is set to Fixed
    // 0 - width is set to Auto - this helps us avoid issues with browser setting too small width causing line to break
    _this.sketchTextBehaviour = multiline ? SketchFormat.TextBehaviour.Fixed : SketchFormat.TextBehaviour.Flexible;
    if (style !== null && style !== void 0 && style.opacity) {
      _this.style.opacity = style.opacity;
    }
    return _this;
  }
  return _createClass(Text);
}(BaseLayer);
_defineProperty(Text, "parseFontWeight", function (fontWeight) {
  // Support 'bold' and 'normal' for Electron compatibility.
  if (fontWeight === 'bold') {
    return 700;
  }
  if (fontWeight === 'normal') {
    return 400;
  }
  return parseInt(fontWeight, 10);
});
_defineProperty(Text, "fixWhiteSpace", function (text, whiteSpace) {
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
});
_defineProperty(Text, "getTextStyleFromNode", function (node, pseudoElt) {
  var styles = getComputedStyle(node, pseudoElt);
  var fontFamily = styles.fontFamily,
    fontWeight = styles.fontWeight,
    fontSize = styles.fontSize,
    lineHeight = styles.lineHeight,
    letterSpacing = styles.letterSpacing,
    textTransform = styles.textTransform,
    textDecorationLine = styles.textDecorationLine,
    color = styles.color,
    opacity = styles.opacity;
  return {
    fontFamily: fontFamily,
    fontSize: parseInt(fontSize, 10),
    lineHeight: lineHeight !== 'normal' ? parseFloat(lineHeight) : undefined,
    letterSpacing: letterSpacing !== 'normal' ? parseFloat(letterSpacing) : undefined,
    fontWeight: Text.parseFontWeight(fontWeight),
    color: color,
    textTransform: textTransform,
    textDecoration: textDecorationLine,
    textAlign: TextStyle.parseTextHorizontalAlign(styles),
    verticalAlign: TextStyle.parseTextVerticalAlign(styles),
    skipSystemFonts: true,
    opacity: parseFloat(opacity)
  };
});
export default Text;