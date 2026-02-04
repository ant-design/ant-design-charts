function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { SVGPathData } from 'svg-pathdata';
import * as svgson from 'svgson';
import Frame from "../models/Base/Frame";
import Ellipse from "../models/Layer/Ellipse";
import Group from "../models/Layer/Group";
import Rectangle from "../models/Layer/Rectangle";
import ShapeGroup from "../models/Layer/ShapeGroup";
import ShapePath from "../models/Layer/ShapePath";
import Text from "../models/Layer/Text";
import Color from "../models/Style/Color";
import Fill from "../models/Style/Fill";
import Gradient from "../models/Style/Gradient";
import Style from "../models/Style/Style";
import TextStyle from "../models/Style/TextStyle";
import { transformStrToMatrix } from "../utils/matrix";
import { SketchFormat } from "../types";

/**
 * 计算 Frame 的缩放比例
 */
export var calcFrameScale = function calcFrameScale(originFrame, targetFrame) {
  var targetAspectRatio = targetFrame.width / targetFrame.height;
  var originAspectRatio = originFrame.width / originFrame.height;
  // 确定缩放比例

  // 如果目标长宽比大于自身的
  // scale 是高度比
  var scale = targetFrame.height / originFrame.height;

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
export var normalizeWindingRule = function normalizeWindingRule(ruleStr) {
  var rule = ruleStr === null || ruleStr === void 0 ? void 0 : ruleStr.toLowerCase();
  if (rule && ['nonzero', 'nozero', 'non-zero', 'no-zero'].includes(rule)) {
    return SketchFormat.WindingRule.NonZero;
  }
  return SketchFormat.WindingRule.EvenOdd;
};

/**
 * 获取 svgPath 的内部定界框
 * @param svgPath svg 的path路径
 */
export var getSvgPathGroupFrame = function getSvgPathGroupFrame(svgPath) {
  var shapeGroup = new SVGPathData(svgPath);
  var bounds = shapeGroup.getBounds();
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
export var pathToShapeGroup = function pathToShapeGroup(svgPath) {
  // ------ 第一步: 获取有效的 Path 数组 ---------- //
  // 将 多个 svg 通过 M 符号进行分割
  var pathStr = svgPath.split(/([Mm])/).filter(function (s) {
    return s;
  });
  if (pathStr.length % 2 !== 0) {
    throw Error("Error Path!\nData:".concat(svgPath, "\nPlease check whether the path is correct."));
  }
  var paths = [];
  for (var i = 0; i < pathStr.length; i += 2) {
    var p = pathStr[i] + pathStr[i + 1];
    paths.push(p.trim());
  }

  // ------ 第二步: 获取这组Path的 frame ---------- //

  // 获取 shapeGroup 的 frame
  var groupFrame = getSvgPathGroupFrame(svgPath);

  // 解析每个路径中的shape
  var shapes = paths.map(ShapePath.svgPathToShapePath).filter(function (shape) {
    // 需要对 shape 进行清理,如果只有两个点,起点和终点,直接过滤
    for (var _i = 0; _i < shape.points.length; _i += 1) {
      var point = shape.points[_i];
      if (isNaN(point.x) || isNaN(point.y)) {
        return false;
      }
    }
    return true;
  });
  return {
    shapes: shapes,
    frame: groupFrame
  };
};

/**
 * SVG 对象
 */
export var Svgson = /*#__PURE__*/function () {
  function Svgson(svgString, _ref) {
    var _this = this;
    var _width = _ref.width,
      _height = _ref.height;
    _classCallCheck(this, Svgson);
    _defineProperty(this, "aspectRatio", 1);
    _defineProperty(this, "viewBox", new Frame());
    _defineProperty(this, "layers", []);
    _defineProperty(this, "defs", []);
    _defineProperty(this, "scaleLayersToFrame", function (layer) {
      layer.frame.scale(_this.aspectRatio);
      if (layer.class === 'text') {
        layer.textStyle.fontSize *= _this.aspectRatio;
      }
      if (layer.layers.length > 0) {
        layer.layers.forEach(_this.scaleLayersToFrame);
      }
    });
    _defineProperty(this, "parseSvgson", function (node) {
      switch (node.name) {
        // 全局定义
        case 'defs':
          _this.defs = node.children.map(Svgson.parseSvgDefs);
          break;
        // 编组
        case 'g':
          return _this.parseNodeToGroup(node);
        // 蒙版 编组
        // case 'mask':
        //   return this.parseNodeToGroup(node, true);
        // 路径
        case 'path':
          return _this.parseSvgsonPathToShape(node);
        // 椭圆
        case 'ellipse':
          return _this.parseNodeToEllipse(node);
        // 圆形
        case 'circle':
          return _this.parseNodeToCircle(node);
        // 矩形
        case 'rect':
          return _this.parseNodeToRectangle(node);
        // 多边形
        case 'polygon':
          // return Svg.parseNodeToPolygon(node);
          break;
        // 文本
        case 'text':
          return _this.parseNodeToText(node);
        case 'svg':
          return node.children.map(_this.parseSvgson);
        default:
          console.log(node);
      }
    });
    _defineProperty(this, "parseNodeAttrToStyle", function (attributes) {
      var stroke = attributes.stroke,
        strokeWidth = attributes.strokeWidth,
        strokeDasharray = attributes.strokeDasharray,
        fillStr = attributes.fill,
        styleString = attributes.style,
        className = attributes.class,
        opacity = attributes.opacity;
      var style = new Style();
      var styleObj = Style.parseStyleString(styleString);

      // 获得具体的 class 规则
      var rule = _this.getCssRuleByClassName(className);
      if (rule) {
        var styles = rule.styles;

        // 处理 fill
        if (styles.fill) {
          var fill = _this.getFillByString(styles.fill);
          if (fill) style.fills.push(fill);
        }
      }
      var baseFill = _this.getFillByString(fillStr);
      if (baseFill) style.fills.push(baseFill);

      // 如果存在currentColor 则采用 inline Style 的 fill
      if (fillStr === 'currentColor' && styleObj !== null && styleObj !== void 0 && styleObj.fill) {
        style.addColorFill(styleObj.fill);
      }
      if (stroke && stroke !== 'none') {
        style.addBorder({
          thickness: parseFloat(strokeWidth || '1'),
          color: stroke,
          position: SketchFormat.BorderPosition.Center
        });

        // 如果存在 dash array
        if (strokeDasharray) {
          var dashArr = strokeDasharray.split(',').map(parseFloat);
          if (dashArr.length > 0) {
            style.sketchBorderOptions.dashPattern = dashArr;
          }
        }
      }

      // 设置不透明度
      style.opacity = Number(opacity) || 1;
      return style;
    });
    _defineProperty(this, "parseNodeAttrToTextStyle", function (attributes) {
      var fontSize = attributes.fontSize,
        lineHeight = attributes.lineHeight,
        className = attributes.class,
        styleString = attributes.style;
      var style = new TextStyle({
        fontSize: parseFloat(fontSize) || 14,
        lineHeight: parseFloat(lineHeight) || 22
      });
      var styleObj = Style.parseStyleString(styleString);
      if (styleObj) {
        // console.log(styleObj);
      }
      var rule = _this.getCssRuleByClassName(className);
      // 获得具体的规则
      if (rule) {
        var styles = rule.styles;
        if (styles.fill) {
          style.color = new Color(styles.fill);
        }
        if (styles.fontSize) {
          style.fontSize = parseFloat(styles.fontSize);
        }
        if (styles.lineHeight) {
          style.lineHeight = parseFloat(styles.lineHeight);
        }
      }
      return style;
    });
    _defineProperty(this, "parseNodeToGroup", function (node) {
      var isMask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var group = new Group();
      var _node$attributes = node.attributes,
        transform = _node$attributes.transform,
        fill = _node$attributes.fill;
      var layers = node.children.map(function (child) {
        _this.extendsParentAttr(child, {
          fill: fill
        });
        return _this.parseSvgson(child);
      }).filter(function (c) {
        return c;
      });
      if (layers && layers.length > 0) {
        group.addLayers(layers);
      }
      var _group$getSize = group.getSize(),
        height = _group$getSize.height,
        width = _group$getSize.width;
      group.height = height;
      group.width = width;
      group.name = isMask ? '蒙版' : '编组';
      group.hasClippingMask = isMask;
      _this.applyTransformString(group.frame, transform);

      // TODO 确认缠绕规则
      // const { fillRule } = node.attributes;
      // group.windingRule = normalizeWindingRule(fillRule);
      return group;
    });
    _defineProperty(this, "getCssRuleByClassName", function (className) {
      if (!className) return;
      // 拿到样式表
      var classStyle = _this.defs.find(function (d) {
        return d.class === 'classStyle';
      });

      // 获得具体的规则
      return classStyle === null || classStyle === void 0 ? void 0 : classStyle.rules.find(function (r) {
        return r.className === ".".concat(className);
      });
    });
    _defineProperty(this, "getFillByString", function (fill) {
      if (fill === 'none') return;

      // TODO 针对 path 类型的对象 如果没有 fill 不能默认填充黑色
      if (!fill) {
        return new Fill({
          type: SketchFormat.FillType.Color,
          color: '#000'
        });
      }
      if (fill.startsWith('url')) {
        var _exec;
        // 说明来自 defs
        var id = (_exec = /url\(#(.*)\)/.exec(fill)) === null || _exec === void 0 ? void 0 : _exec[1];
        // 从 defs 中拿到相应的配置项
        var defsFill = _this.defs.find(function (def) {
          return (def === null || def === void 0 ? void 0 : def.class) === 'gradient' && def.name === id;
        });
        switch (defsFill === null || defsFill === void 0 ? void 0 : defsFill.class) {
          case 'gradient':
            // eslint-disable-next-line no-case-declarations
            var newFill = new Fill({});
            newFill.type = SketchFormat.FillType.Gradient;
            newFill.gradient = defsFill;
            return newFill;
          default:
        }
      } else {
        return new Fill({
          type: SketchFormat.FillType.Color,
          color: fill
        });
      }
    });
    _defineProperty(this, "applyTransformString", function (frame, transform) {
      if (transform) {
        try {
          var matrix = transformStrToMatrix(transform);
          frame.applyMatrix(matrix);
        } catch (e) {
          console.error(e);
        }
      }
    });
    _defineProperty(this, "extendsParentAttr", function (node, parentAttr) {
      if (!parentAttr) return node;

      // if (node.children.length > 0) {
      //   node.children.forEach((child) => {
      //     this.extendsParentAttr(child, node.attributes);
      //   });
      // }
      node.attributes = _objectSpread(_objectSpread({}, parentAttr), node.attributes);
      return node;
    });
    if (!svgString) return;
    // --------- 处理 Svg String 变成 Svg Shape ---------- //

    var result = svgson.parseSync(svgString, {
      camelcase: true
    });

    // 排除一下 svg 的循环嵌套的问题
    while (result.children.length === 1 && result.children[0].name === 'svg') {
      var _result$children = _slicedToArray(result.children, 1);
      result = _result$children[0];
    }
    var _result = result,
      children = _result.children,
      _attributes = _result.attributes;
    if (!children) return;
    var viewBox = _attributes.viewBox;
    // 如果有 viewBox 则使用 viewBox 的视野
    // 否则用默认长宽高
    if (viewBox) {
      // 解析获得 viewBox 值
      var _viewBox$split$map = viewBox.split(' ').map(parseFloat),
        _viewBox$split$map2 = _slicedToArray(_viewBox$split$map, 4),
        viewX = _viewBox$split$map2[0],
        viewY = _viewBox$split$map2[1],
        viewWidth = _viewBox$split$map2[2],
        viewHeight = _viewBox$split$map2[3];
      this.viewBox = new Frame({
        x: viewX || 0,
        height: viewHeight || _height,
        width: viewWidth || _width,
        y: viewY || 0
      });
      this.aspectRatio = calcFrameScale(this.viewBox.toJSON(), {
        height: _height || viewHeight,
        width: _width || viewWidth,
        x: 0,
        y: 0
      });
    } else {
      this.viewBox = new Frame({
        x: 0,
        y: 0,
        height: _height,
        width: _width
      });
    }

    // 添加 mask
    var background = new Rectangle(this.viewBox.toJSON());
    background.name = '容器';
    background.hasClippingMask = true;

    // ------ 将 svgson 的子节点转换成子图层 ------ //
    this.layers = children
    // .map((child) => {
    //   return this.extendsParentAttr(child, attributes);
    // })
    .map(this.parseSvgson).filter(function (c) {
      return c;
    });
    this.layers.unshift(background);

    // 根据 viewBox 进行相应的偏移
    this.layers.forEach(function (layer) {
      layer.frame.offset(-_this.viewBox.x, -_this.viewBox.y);
    });

    // 对内部每个图层都进行坐标变换 //
    this.layers.forEach(this.scaleLayersToFrame);
  }

  /**
   * 缩放比例
   */
  _createClass(Svgson, [{
    key: "parseSvgsonPathToShape",
    value:
    /**
     * 将节点解析为 pathShape
     * @param node
     */
    function parseSvgsonPathToShape(node) {
      var attributes = node.attributes,
        name = node.name;
      // 如果没有对象的话 就直接结束
      if (name !== 'path') return;

      // ------ 进行统一的坐标和尺寸变换 -------- //
      var path = new SVGPathData(attributes.d).toAbs().encode();
      var shapeGroupType = pathToShapeGroup(path);
      var shapePaths = Svgson.shapeGroupDataToLayers(shapeGroupType);
      if (shapePaths.length === 1) {
        var shapePath = shapePaths[0];
        shapePath.style = this.parseNodeAttrToStyle(node.attributes);
      }
      var shapeGroup = new ShapeGroup(shapeGroupType.frame);
      shapeGroup.addLayers(shapePaths);
      shapeGroup.style = this.parseNodeAttrToStyle(node.attributes);
      return shapeGroup;
    }

    /**
     * 将 svg 的 Defs 解析成相应的对象
     * @param defsNode
     */
  }, {
    key: "parseNodeToEllipse",
    value:
    /**
     * 将 ellipse 的节点解析为椭圆
     * @param node
     */
    function parseNodeToEllipse(node) {
      if (!node || node && node.name !== 'ellipse') return;
      var _node$attributes2 = node.attributes,
        rx = _node$attributes2.rx,
        ry = _node$attributes2.ry,
        cx = _node$attributes2.cx,
        cy = _node$attributes2.cy,
        transform = _node$attributes2.transform;
      var style = this.parseNodeAttrToStyle(node.attributes);
      var ellipse = new Ellipse({
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
  }, {
    key: "parseNodeToCircle",
    value: function parseNodeToCircle(node) {
      if (!node || node && node.name !== 'circle') return;
      var _node$attributes3 = node.attributes,
        r = _node$attributes3.r,
        cx = _node$attributes3.cx,
        cy = _node$attributes3.cy,
        transform = _node$attributes3.transform;
      var style = this.parseNodeAttrToStyle(node.attributes);
      var ellipse = new Ellipse({
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
  }, {
    key: "parseNodeToRectangle",
    value: function parseNodeToRectangle(node) {
      var name = node.name,
        attributes = node.attributes;
      if (name !== 'rect') return;
      var x = attributes.x,
        y = attributes.y,
        width = attributes.width,
        height = attributes.height,
        rx = attributes.rx,
        transform = attributes.transform;
      var style = this.parseNodeAttrToStyle(attributes);
      var rect = new Rectangle({
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
  }, {
    key: "parseNodeToText",
    value: function parseNodeToText(node) {
      var _children$;
      var name = node.name,
        attributes = node.attributes,
        children = node.children;
      if (name !== 'text') return;
      var transform = attributes.transform;
      var style = this.parseNodeAttrToTextStyle(attributes);
      var text = new Text({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        text: children === null || children === void 0 ? void 0 : (_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.value
      });
      text.textStyle = style;
      this.applyTransformString(text.frame, transform);
      return text;
    }

    /**
     * ShapeGroup 转子图层方法
     * @param shapeGroup
     */
  }], [{
    key: "init",
    value: function init() {
      return new Svgson('', {});
    }

    /**
     * 将图层
     */
  }, {
    key: "parseSvgDefs",
    value: function parseSvgDefs(defsNode) {
      var _children$2;
      var attributes = defsNode.attributes,
        name = defsNode.name,
        children = defsNode.children;
      switch (name) {
        case 'linearGradient':
          return new Gradient({
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
            stops: defsNode.children.map(function (item) {
              var _item$attributes = item.attributes,
                offset = _item$attributes.offset,
                stopColor = _item$attributes.stopColor,
                stopOpacity = _item$attributes.stopOpacity;
              var color = new Color(stopColor);
              return {
                color: [color.red, color.green, color.blue, Number(stopOpacity) || 1],
                offset: parseFloat(offset) / 100
              };
            })
          });
        case 'radialGradient':
          return new Gradient({
            type: SketchFormat.GradientType.Radial,
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
            stops: defsNode.children.map(function (item) {
              var _item$attributes2 = item.attributes,
                offset = _item$attributes2.offset,
                stopColor = _item$attributes2.stopColor,
                stopOpacity = _item$attributes2.stopOpacity;
              var color = new Color(stopColor);
              var opacity = Number(stopOpacity);
              return {
                color: [color.red, color.green, color.blue, isNaN(opacity) ? 1 : opacity],
                offset: parseFloat(offset) / 100
              };
            })
          });
        case 'style':
          // eslint-disable-next-line no-case-declarations
          var style = children === null || children === void 0 ? void 0 : (_children$2 = children[0]) === null || _children$2 === void 0 ? void 0 : _children$2.value;
          if (!style) return;

          // eslint-disable-next-line no-case-declarations
          var rules = Style.parseClassStyle(style);
          return {
            class: 'classStyle',
            rules: rules
          };
        default:
      }
    }

    /**
     * 解析 Node 的 Attribute 变成 style
     * @param attributes node 的属性
     */
  }]);
  return Svgson;
}();
_defineProperty(Svgson, "shapeGroupDataToLayers", function (shapeGroup) {
  var shapes = shapeGroup.shapes;
  return shapes.map(function (shape) {
    var points = shape.points,
      isClose = shape.isClose,
      frame = shape.frame;
    return new ShapePath({
      points: points,
      isClose: isClose,
      width: frame.width,
      height: frame.height,
      // 需要计算与 innerFrame 的相对坐标
      // https://www.yuque.com/design-engineering/sketch-dev/hsbz8m#OPWbw
      x: frame.x,
      y: frame.y
    });
  });
});