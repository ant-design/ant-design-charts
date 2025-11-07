"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathToShapeGroup = exports.normalizeWindingRule = exports.getSvgPathGroupFrame = exports.calcFrameScale = exports.Svgson = void 0;
var _svgPathdata = require("svg-pathdata");
var svgson = _interopRequireWildcard(require("svgson"));
var _Frame = _interopRequireDefault(require("../models/Base/Frame"));
var _Ellipse = _interopRequireDefault(require("../models/Layer/Ellipse"));
var _Group = _interopRequireDefault(require("../models/Layer/Group"));
var _Rectangle = _interopRequireDefault(require("../models/Layer/Rectangle"));
var _ShapeGroup = _interopRequireDefault(require("../models/Layer/ShapeGroup"));
var _ShapePath = _interopRequireDefault(require("../models/Layer/ShapePath"));
var _Text = _interopRequireDefault(require("../models/Layer/Text"));
var _Color = _interopRequireDefault(require("../models/Style/Color"));
var _Fill = _interopRequireDefault(require("../models/Style/Fill"));
var _Gradient = _interopRequireDefault(require("../models/Style/Gradient"));
var _Style = _interopRequireDefault(require("../models/Style/Style"));
var _TextStyle = _interopRequireDefault(require("../models/Style/TextStyle"));
var _matrix = require("../utils/matrix");
var _types = require("../types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * 计算 Frame 的缩放比例
 */
const calcFrameScale = (originFrame, targetFrame) => {
  const targetAspectRatio = targetFrame.width / targetFrame.height;
  const originAspectRatio = originFrame.width / originFrame.height;
  // 确定缩放比例

  // 如果目标长宽比大于自身的
  // scale 是高度比
  let scale = targetFrame.height / originFrame.height;

  // 否则是 scale 是长度比
  if (targetAspectRatio < originAspectRatio) {
    scale = targetFrame.width / originFrame.width;
  }
  return scale;
};

/**
 * 一致化缠绕规则参数
 * @param ruleStr
 */
exports.calcFrameScale = calcFrameScale;
const normalizeWindingRule = ruleStr => {
  const rule = ruleStr?.toLowerCase();
  if (rule && ['nonzero', 'nozero', 'non-zero', 'no-zero'].includes(rule)) {
    return _types.SketchFormat.WindingRule.NonZero;
  }
  return _types.SketchFormat.WindingRule.EvenOdd;
};

/**
 * 获取 svgPath 的内部定界框
 * @param svgPath svg 的path路径
 */
exports.normalizeWindingRule = normalizeWindingRule;
const getSvgPathGroupFrame = svgPath => {
  const shapeGroup = new _svgPathdata.SVGPathData(svgPath);
  const bounds = shapeGroup.getBounds();
  return {
    width: bounds.maxX - bounds.minX,
    height: bounds.maxY - bounds.minY,
    x: bounds.minX,
    y: bounds.minY
  };
};

/**
 * 将 Path 转为贝赛尔曲线
 * @param svgPath 路径
 */
exports.getSvgPathGroupFrame = getSvgPathGroupFrame;
const pathToShapeGroup = svgPath => {
  // ------ 第一步: 获取有效的 Path 数组 ---------- //
  // 将 多个 svg 通过 M 符号进行分割
  const pathStr = svgPath.split(/([Mm])/).filter(s => s);
  if (pathStr.length % 2 !== 0) {
    throw Error(`Error Path!\nData:${svgPath}\nPlease check whether the path is correct.`);
  }
  const paths = [];
  for (let i = 0; i < pathStr.length; i += 2) {
    const p = pathStr[i] + pathStr[i + 1];
    paths.push(p.trim());
  }

  // ------ 第二步: 获取这组Path的 frame ---------- //

  // 获取 shapeGroup 的 frame
  const groupFrame = getSvgPathGroupFrame(svgPath);

  // 解析每个路径中的shape
  const shapes = paths.map(_ShapePath.default.svgPathToShapePath).filter(shape => {
    // 需要对 shape 进行清理,如果只有两个点,起点和终点,直接过滤
    for (let i = 0; i < shape.points.length; i += 1) {
      const point = shape.points[i];
      if (isNaN(point.x) || isNaN(point.y)) {
        return false;
      }
    }
    return true;
  });
  return {
    shapes,
    frame: groupFrame
  };
};

/**
 * SVG 对象
 */
exports.pathToShapeGroup = pathToShapeGroup;
class Svgson {
  constructor(svgString, {
    width,
    height
  }) {
    if (!svgString) return;
    // --------- 处理 Svg String 变成 Svg Shape ---------- //

    let result = svgson.parseSync(svgString, {
      camelcase: true
    });

    // 排除一下 svg 的循环嵌套的问题
    while (result.children.length === 1 && result.children[0].name === 'svg') {
      [result] = result.children;
    }
    const {
      children,
      attributes
    } = result;
    if (!children) return;
    const {
      viewBox
    } = attributes;
    // 如果有 viewBox 则使用 viewBox 的视野
    // 否则用默认长宽高
    if (viewBox) {
      // 解析获得 viewBox 值
      const [viewX, viewY, viewWidth, viewHeight] = viewBox.split(' ').map(parseFloat);
      this.viewBox = new _Frame.default({
        x: viewX || 0,
        height: viewHeight || height,
        width: viewWidth || width,
        y: viewY || 0
      });
      this.aspectRatio = calcFrameScale(this.viewBox.toJSON(), {
        height: height || viewHeight,
        width: width || viewWidth,
        x: 0,
        y: 0
      });
    } else {
      this.viewBox = new _Frame.default({
        x: 0,
        y: 0,
        height,
        width
      });
    }

    // 添加 mask
    const background = new _Rectangle.default(this.viewBox.toJSON());
    background.name = '容器';
    background.hasClippingMask = true;

    // ------ 将 svgson 的子节点转换成子图层 ------ //
    this.layers = children
    // .map((child) => {
    //   return this.extendsParentAttr(child, attributes);
    // })
    .map(this.parseSvgson).filter(c => c);
    this.layers.unshift(background);

    // 根据 viewBox 进行相应的偏移
    this.layers.forEach(layer => {
      layer.frame.offset(-this.viewBox.x, -this.viewBox.y);
    });

    // 对内部每个图层都进行坐标变换 //
    this.layers.forEach(this.scaleLayersToFrame);
  }

  /**
   * 缩放比例
   */
  aspectRatio = 1;

  /**
   * svg 的 ViewBox
   */
  viewBox = new _Frame.default();

  /**
   * Svg 包含的图层对象
   * 每一个对象都是 SvgLayer 类型
   */
  layers = [];

  /**
   * 全局描述
   * @private
   */
  defs = [];
  static init() {
    return new Svgson('', {});
  }

  /**
   * 将图层
   */
  scaleLayersToFrame = layer => {
    layer.frame.scale(this.aspectRatio);
    if (layer.class === 'text') {
      layer.textStyle.fontSize *= this.aspectRatio;
    }
    if (layer.layers.length > 0) {
      layer.layers.forEach(this.scaleLayersToFrame);
    }
  };

  // ---------- Svgson 解析方法群 ---------- //
  // ------------------------------------- //

  /**
   * 解析 Svgson 变成 layer
   * @param node
   */
  parseSvgson = node => {
    switch (node.name) {
      // 全局定义
      case 'defs':
        this.defs = node.children.map(Svgson.parseSvgDefs);
        break;
      // 编组
      case 'g':
        return this.parseNodeToGroup(node);
      // 蒙版 编组
      // case 'mask':
      //   return this.parseNodeToGroup(node, true);
      // 路径
      case 'path':
        return this.parseSvgsonPathToShape(node);
      // 椭圆
      case 'ellipse':
        return this.parseNodeToEllipse(node);
      // 圆形
      case 'circle':
        return this.parseNodeToCircle(node);
      // 矩形
      case 'rect':
        return this.parseNodeToRectangle(node);
      // 多边形
      case 'polygon':
        // return Svg.parseNodeToPolygon(node);
        break;
      // 文本
      case 'text':
        return this.parseNodeToText(node);
      case 'svg':
        return node.children.map(this.parseSvgson);
      default:
        console.log(node);
    }
  };

  /**
   * 将节点解析为 pathShape
   * @param node
   */
  parseSvgsonPathToShape(node) {
    const {
      attributes,
      name
    } = node;
    // 如果没有对象的话 就直接结束
    if (name !== 'path') return;

    // ------ 进行统一的坐标和尺寸变换 -------- //
    const path = new _svgPathdata.SVGPathData(attributes.d).toAbs().encode();
    const shapeGroupType = pathToShapeGroup(path);
    const shapePaths = Svgson.shapeGroupDataToLayers(shapeGroupType);
    if (shapePaths.length === 1) {
      const shapePath = shapePaths[0];
      shapePath.style = this.parseNodeAttrToStyle(node.attributes);
    }
    const shapeGroup = new _ShapeGroup.default(shapeGroupType.frame);
    shapeGroup.addLayers(shapePaths);
    shapeGroup.style = this.parseNodeAttrToStyle(node.attributes);
    return shapeGroup;
  }

  /**
   * 将 svg 的 Defs 解析成相应的对象
   * @param defsNode
   */
  static parseSvgDefs(defsNode) {
    const {
      attributes,
      name,
      children
    } = defsNode;
    switch (name) {
      case 'linearGradient':
        return new _Gradient.default({
          name: attributes.id,
          from: {
            // 解析得到的是 109% 这样的值
            x: parseFloat(attributes.x1) / 100,
            y: parseFloat(attributes.y1) / 100
          },
          to: {
            x: parseFloat(attributes.x2) / 100,
            y: parseFloat(attributes.y2) / 100
          },
          stops: defsNode.children.map(item => {
            const {
              offset,
              stopColor,
              stopOpacity
            } = item.attributes;
            const color = new _Color.default(stopColor);
            return {
              color: [color.red, color.green, color.blue, Number(stopOpacity) || 1],
              offset: parseFloat(offset) / 100
            };
          })
        });
      case 'radialGradient':
        return new _Gradient.default({
          type: _types.SketchFormat.GradientType.Radial,
          name: attributes.id,
          from: {
            // 解析得到的是 109% 这样的值
            x: parseFloat(attributes.fx) / 100,
            y: parseFloat(attributes.fy) / 100
          },
          to: {
            x: (parseFloat(attributes.cx) + parseFloat(attributes.r)) / 100,
            y: parseFloat(attributes.cy) / 100
          },
          // radius: parseFloat(attributes.r) / 100,
          stops: defsNode.children.map(item => {
            const {
              offset,
              stopColor,
              stopOpacity
            } = item.attributes;
            const color = new _Color.default(stopColor);
            const opacity = Number(stopOpacity);
            return {
              color: [color.red, color.green, color.blue, isNaN(opacity) ? 1 : opacity],
              offset: parseFloat(offset) / 100
            };
          })
        });
      case 'style':
        // eslint-disable-next-line no-case-declarations
        const style = children?.[0]?.value;
        if (!style) return;

        // eslint-disable-next-line no-case-declarations
        const rules = _Style.default.parseClassStyle(style);
        return {
          class: 'classStyle',
          rules
        };
      default:
    }
  }

  /**
   * 解析 Node 的 Attribute 变成 style
   * @param attributes node 的属性
   */
  parseNodeAttrToStyle = attributes => {
    const {
      stroke,
      strokeWidth,
      strokeDasharray,
      fill: fillStr,
      style: styleString,
      class: className,
      opacity
    } = attributes;
    const style = new _Style.default();
    const styleObj = _Style.default.parseStyleString(styleString);

    // 获得具体的 class 规则
    const rule = this.getCssRuleByClassName(className);
    if (rule) {
      const {
        styles
      } = rule;

      // 处理 fill
      if (styles.fill) {
        const fill = this.getFillByString(styles.fill);
        if (fill) style.fills.push(fill);
      }
    }
    const baseFill = this.getFillByString(fillStr);
    if (baseFill) style.fills.push(baseFill);

    // 如果存在currentColor 则采用 inline Style 的 fill
    if (fillStr === 'currentColor' && styleObj?.fill) {
      style.addColorFill(styleObj.fill);
    }
    if (stroke && stroke !== 'none') {
      style.addBorder({
        thickness: parseFloat(strokeWidth || '1'),
        color: stroke,
        position: _types.SketchFormat.BorderPosition.Center
      });

      // 如果存在 dash array
      if (strokeDasharray) {
        const dashArr = strokeDasharray.split(',').map(parseFloat);
        if (dashArr.length > 0) {
          style.sketchBorderOptions.dashPattern = dashArr;
        }
      }
    }

    // 设置不透明度
    style.opacity = Number(opacity) || 1;
    return style;
  };

  /**
   * 解析 Node 的 Attribute 变成 textStyle
   * @param attributes node 的属性
   */
  parseNodeAttrToTextStyle = attributes => {
    const {
      fontSize,
      lineHeight,
      class: className,
      style: styleString
    } = attributes;
    const style = new _TextStyle.default({
      fontSize: parseFloat(fontSize) || 14,
      lineHeight: parseFloat(lineHeight) || 22
    });
    const styleObj = _Style.default.parseStyleString(styleString);
    if (styleObj) {
      // console.log(styleObj);
    }
    const rule = this.getCssRuleByClassName(className);
    // 获得具体的规则
    if (rule) {
      const {
        styles
      } = rule;
      if (styles.fill) {
        style.color = new _Color.default(styles.fill);
      }
      if (styles.fontSize) {
        style.fontSize = parseFloat(styles.fontSize);
      }
      if (styles.lineHeight) {
        style.lineHeight = parseFloat(styles.lineHeight);
      }
    }
    return style;
  };

  /**
   * 将 g 节点解析为 Group
   * @param node
   * @param isMask 是否使用剪切蒙版
   */
  parseNodeToGroup = (node, isMask = false) => {
    const group = new _Group.default();
    const {
      transform,
      fill
    } = node.attributes;
    const layers = node.children.map(child => {
      this.extendsParentAttr(child, {
        fill
      });
      return this.parseSvgson(child);
    }).filter(c => c);
    if (layers && layers.length > 0) {
      group.addLayers(layers);
    }
    const {
      height,
      width
    } = group.getSize();
    group.height = height;
    group.width = width;
    group.name = isMask ? '蒙版' : '编组';
    group.hasClippingMask = isMask;
    this.applyTransformString(group.frame, transform);

    // TODO 确认缠绕规则
    // const { fillRule } = node.attributes;
    // group.windingRule = normalizeWindingRule(fillRule);
    return group;
  };

  /**
   * 将 ellipse 的节点解析为椭圆
   * @param node
   */
  parseNodeToEllipse(node) {
    if (!node || node && node.name !== 'ellipse') return;
    const {
      rx,
      ry,
      cx,
      cy,
      transform
    } = node.attributes;
    const style = this.parseNodeAttrToStyle(node.attributes);
    const ellipse = new _Ellipse.default({
      cx: parseFloat(cx),
      cy: parseFloat(cy),
      rx: parseFloat(rx),
      ry: parseFloat(ry)
    });
    ellipse.name = '椭圆';
    ellipse.style = style;
    this.applyTransformString(ellipse.frame, transform);
    return ellipse;
  }

  /**
   * 将 ellipse 的节点解析为圆
   * @param node
   */
  parseNodeToCircle(node) {
    if (!node || node && node.name !== 'circle') return;
    const {
      r,
      cx,
      cy,
      transform
    } = node.attributes;
    const style = this.parseNodeAttrToStyle(node.attributes);
    const ellipse = new _Ellipse.default({
      cx: parseFloat(cx),
      cy: parseFloat(cy),
      rx: parseFloat(r),
      ry: parseFloat(r)
    });
    ellipse.style = style;
    this.applyTransformString(ellipse.frame, transform);
    return ellipse;
  }

  /**
   * 将 ellipse 的节点解析为矩形
   * @param node
   */
  parseNodeToRectangle(node) {
    const {
      name,
      attributes
    } = node;
    if (name !== 'rect') return;
    const {
      x,
      y,
      width,
      height,
      rx,
      transform
    } = attributes;
    const style = this.parseNodeAttrToStyle(attributes);
    const rect = new _Rectangle.default({
      cornerRadius: parseFloat(rx),
      width: parseFloat(width),
      height: parseFloat(height),
      x: parseFloat(x),
      y: parseFloat(y)
    });
    rect.style = style;
    this.applyTransformString(rect.frame, transform);
    return rect;
  }

  /**
   * 将 text 的节点解析为文本
   * @param node
   */
  parseNodeToText(node) {
    const {
      name,
      attributes,
      children
    } = node;
    if (name !== 'text') return;
    const {
      transform
    } = attributes;
    const style = this.parseNodeAttrToTextStyle(attributes);
    const text = new _Text.default({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      text: children?.[0]?.value
    });
    text.textStyle = style;
    this.applyTransformString(text.frame, transform);
    return text;
  }

  /**
   * ShapeGroup 转子图层方法
   * @param shapeGroup
   */
  static shapeGroupDataToLayers = shapeGroup => {
    const {
      shapes
    } = shapeGroup;
    return shapes.map(shape => {
      const {
        points,
        isClose,
        frame
      } = shape;
      return new _ShapePath.default({
        points,
        isClose,
        width: frame.width,
        height: frame.height,
        // 需要计算与 innerFrame 的相对坐标
        // https://www.yuque.com/design-engineering/sketch-dev/hsbz8m#OPWbw
        x: frame.x,
        y: frame.y
      });
    });
  };

  /**
   * 从 Defs 中获取样式表
   * @param className
   */
  getCssRuleByClassName = className => {
    if (!className) return;
    // 拿到样式表
    const classStyle = this.defs.find(d => d.class === 'classStyle');

    // 获得具体的规则
    return classStyle?.rules.find(r => r.className === `.${className}`);
  };

  /**
   * 根据 fill 字符填充 Fill 对象
   * @param fill 填充文本
   */
  getFillByString = fill => {
    if (fill === 'none') return;

    // TODO 针对 path 类型的对象 如果没有 fill 不能默认填充黑色
    if (!fill) {
      return new _Fill.default({
        type: _types.SketchFormat.FillType.Color,
        color: '#000'
      });
    }
    if (fill.startsWith('url')) {
      // 说明来自 defs
      const id = /url\(#(.*)\)/.exec(fill)?.[1];
      // 从 defs 中拿到相应的配置项
      const defsFill = this.defs.find(def => def?.class === 'gradient' && def.name === id);
      switch (defsFill?.class) {
        case 'gradient':
          // eslint-disable-next-line no-case-declarations
          const newFill = new _Fill.default({});
          newFill.type = _types.SketchFormat.FillType.Gradient;
          newFill.gradient = defsFill;
          return newFill;
        default:
      }
    } else {
      return new _Fill.default({
        type: _types.SketchFormat.FillType.Color,
        color: fill
      });
    }
  };

  /**
   * 应用变换字符串
   * @param frame
   * @param transform
   */
  applyTransformString = (frame, transform) => {
    if (transform) {
      try {
        const matrix = (0, _matrix.transformStrToMatrix)(transform);
        frame.applyMatrix(matrix);
      } catch (e) {
        console.error(e);
      }
    }
  };

  /**
   * 继承父级的参数
   * @param node 需要继承的节点
   * @param parentAttr
   */
  extendsParentAttr = (node, parentAttr) => {
    if (!parentAttr) return node;

    // if (node.children.length > 0) {
    //   node.children.forEach((child) => {
    //     this.extendsParentAttr(child, node.attributes);
    //   });
    // }
    node.attributes = {
      ...parentAttr,
      ...node.attributes
    };
    return node;
  };
}
exports.Svgson = Svgson;