"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _css = require("css");
var _BaseStyle = _interopRequireDefault(require("../Base/BaseStyle"));
var _Border = _interopRequireDefault(require("./Border"));
var _Fill = _interopRequireDefault(require("./Fill"));
var _InnerShadow = _interopRequireDefault(require("./InnerShadow"));
var _Shadow = _interopRequireDefault(require("./Shadow"));
var _SketchBorderOptions = _interopRequireDefault(require("./SketchBorderOptions"));
var _utils = require("../../utils/utils");
var _utils2 = require("../utils");
var _types = require("../../types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const defaultShadowInput = {
  color: '#000',
  blur: 0,
  offsetX: 0,
  offsetY: 0,
  spread: 0
};
/**
 * 样式
 */
class Style extends _BaseStyle.default {
  /**
   * 填充
   * */
  fills = [];

  /**
   * 外阴影
   * */
  shadows = [];

  /**
   * 内阴影
   * */
  innerShadows = [];

  /**
   * 描边
   * */
  borders = [];

  /**
   * Sketch 专属的描边属性
   * */
  sketchBorderOptions = new _SketchBorderOptions.default();

  /**
   * 添加颜色填充
   * */
  addColorFill(color) {
    const fill = new _Fill.default({
      type: _types.SketchFormat.FillType.Color,
      color
    });
    this.fills.push(fill);
  }

  /**
   * 添加渐变填充
   * */
  addGradientFill(angle, stops) {
    const {
      from,
      to
    } = this.convertAngleToFromAndTo(angle);
    const fill = new _Fill.default({
      type: _types.SketchFormat.FillType.Gradient,
      gradient: {
        from,
        to,
        stops: stops || [],
        gradientType: _types.SketchFormat.GradientType.Linear
      }
    });
    this.fills.push(fill);
  }

  /**
   * 将角度转为 sketch 中的 from 和 to
   * @param {string} angle 角度
   */
  convertAngleToFromAndTo = angle => {
    // default 180deg
    const from = {
      x: 0.5,
      y: 0
    };
    const to = {
      x: 0.5,
      y: 1
    };

    // 处理带 rad 弧度的对象
    if (angle.includes('rad')) {
      const rad = parseFloat(angle.split('rad')[0]);
      from.x = 0;
      from.y = 0;

      // 获取自然数 0 (-0 -> 0)
      const getNaturalZero = num => Math.abs(num) === 0 ? 0 : num;
      const x = Math.round(Math.cos(rad) * 100) / 100;
      const y = Math.round(Math.sin(rad) * 100) / 100;
      to.x = getNaturalZero(x);
      to.y = getNaturalZero(y);
    }
    // Learn math or find someone smarter to figure this out correctly
    switch (angle) {
      case 'to top':
      case '360deg':
      case '0deg':
        from.y = 1;
        to.y = 0;
        break;
      case 'to right':
      case '90deg':
        from.x = 0;
        from.y = 0.5;
        to.x = 1;
        to.y = 0.5;
        break;
      case 'to left':
      case '270deg':
        from.x = 1;
        from.y = 0.5;
        to.x = 0;
        to.y = 0.5;
        break;
      case 'to bottom':
      case '180deg':
      default:
        break;
    }
    return {
      from,
      to
    };
  };

  /**
   * 添加图片填充
   * */
  async addImageFill(image) {
    const fill = new _Fill.default({
      type: _types.SketchFormat.FillType.Pattern,
      image
    });

    // 将图片资源初始化
    if (fill.image) {
      await fill.image.init();
    }
    this.fills.push(fill);
  }

  /**
   * 添加描边
   * */
  addBorder({
    color,
    thickness,
    position
  }) {
    const border = new _Border.default({
      type: _types.SketchFormat.FillType.Color,
      color,
      thickness,
      position
    });
    this.borders.push(border);
  }

  /**
   * 添加阴影
   * */
  addShadow(params = defaultShadowInput) {
    const {
      color,
      blur,
      offsetX,
      offsetY,
      spread
    } = params;
    const shadow = new _Shadow.default({
      blurRadius: blur,
      color,
      offsetX,
      offsetY,
      spread
    });
    this.shadows.push(shadow);
  }

  /**
   * 添加内阴影
   * */
  addInnerShadow(params = defaultShadowInput) {
    const {
      color,
      blur,
      offsetX,
      offsetY,
      spread
    } = params;
    const shadow = new _InnerShadow.default({
      blurRadius: blur,
      color,
      offsetX,
      offsetY,
      spread
    });
    this.innerShadows.push(shadow);
  }

  /**
   * 设置描边属性
   * */
  setBorderDashed({
    lineCapStyle,
    lineJoinStyle,
    dash,
    spacing
  } = {}) {
    if (lineCapStyle) {
      this.sketchBorderOptions.lineCap = lineCapStyle;
    }
    if (lineJoinStyle) {
      this.sketchBorderOptions.lineJoin = lineJoinStyle;
    }
    if (dash || spacing) {
      this.sketchBorderOptions.dashPattern = [dash || 4, spacing || 4];
    }
  }

  /**
   * 生成 Sketch JSON 对象
   */
  toSketchJSON() {
    return {
      _class: 'style',
      do_objectID: this.id,
      endMarkerType: _types.SketchFormat.MarkerType.OpenArrow,
      miterLimit: 10,
      startMarkerType: _types.SketchFormat.MarkerType.OpenArrow,
      windingRule: _types.SketchFormat.WindingRule.EvenOdd,
      borderOptions: this.sketchBorderOptions.toSketchJSON(),
      colorControls: _utils2.defaultColorControls,
      fills: this.fills.map(fill => fill.toSketchJSON()),
      borders: this.borders.map(b => b.toSketchJSON()),
      shadows: this.shadows.map(shadow => shadow.toSketchJSON()),
      innerShadows: this.innerShadows.map(i => i.toSketchJSON()),
      contextSettings: this.getContextSettings()
    };
  }
  toJSON() {
    return {
      fills: this.fills.map(f => f.toJSON())
    };
  }

  /**
   * 获取 style 的 hash
   */
  // eslint-disable-next-line class-methods-use-this
  get hash() {
    // const { id, name, ...style } = obj; // 去掉 id 和 name 后进行 hash
    // return murmurHash(JSON.stringify(sortObjectKeys(style)));

    return '';
  }

  /**
   * 从样式字符串获得样式的 JSON 对象
   * @param style
   */
  static parseStyleString = style => {
    if (!style || style === '') {
      return;
    }
    const Arr = style.replace(/&quot;/g, '"') // 替换引号
    .split(';').filter(item => item !== '');
    let str = '';
    Arr.forEach(item => {
      let test = '';
      item.trim().split(':').forEach(item2 => {
        test += `"${item2.trim()}":`;
      });
      str += `${test},`;
    });
    str = str.replace(/:,/g, ',');
    str = str.substring(0, str.lastIndexOf(','));
    str = `{${str}}`;
    return JSON.parse(str);
  };

  /**
   * 从类字符串获得样式的 JSON 对象
   * @param classStyle
   */
  static parseClassStyle = classStyle => {
    const {
      stylesheet
    } = (0, _css.parse)(classStyle);
    const rules = [];
    stylesheet?.rules.forEach(rule => {
      const {
        selectors,
        declarations
      } = rule;
      const styles = {};
      declarations
      // 过滤出所有的声明类型
      ?.filter(d => d.type === 'declaration').forEach(declaration => {
        const {
          property,
          value
        } = declaration;
        if (!property) return;

        // 将 key 转为小驼峰模式
        const key = property.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
        Object.assign(styles, {
          [key]: value
        });
      });

      // 如果 styles 中存在元素
      if (Object.keys(styles).length > 0) {
        selectors?.forEach(selector => {
          rules.push({
            className: selector,
            styles
          });
        });
      }
    });
    return rules;
  };

  /**
   * 解析 Border string 圆角
   * @param borderRadius
   * @param width
   * @param height
   */
  static parseBorderRadius = (borderRadius, width, height) => {
    const matches = borderRadius.match(/^([0-9.]+)(.+)$/);

    // Sketch uses 'px' units for border radius, so we need to convert % to px
    if (matches && matches[2] === '%') {
      const baseVal = Math.max(width, height);
      const percentageApplied = baseVal * (parseInt(matches[1], 10) / 100);
      return Math.round(percentageApplied);
    }
    return parseInt(borderRadius, 10);
  };

  /**
   * 将 layer 的样式转成 Sketch 的共享样式
   * @param layer
   * @param id
   */
  static layerToSketchSharedStyle = (layer, id) => {
    return {
      _class: 'sharedStyle',
      do_objectID: id || (0, _utils.uuid)(),
      name: layer.name,
      value: layer.style?.toSketchJSON()
    };
  };
}
var _default = Style;
exports.default = _default;