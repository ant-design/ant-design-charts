var _excluded = ["relative"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
import { SVGPathData } from 'svg-pathdata';
import BaseLayer from "../Base/BaseLayer";
import { defaultExportOptions } from "../utils";
import { SketchFormat } from "../../types";
/**
 * ShapePath 是一组点构成的形状对象
 */
var ShapePath = /*#__PURE__*/function (_BaseLayer) {
  _inherits(ShapePath, _BaseLayer);
  var _super = _createSuper(ShapePath);
  function ShapePath(params) {
    var _this;
    _classCallCheck(this, ShapePath);
    _this = _super.call(this, SketchFormat.ClassValue.ShapePath, params);
    _defineProperty(_assertThisInitialized(_this), "points", void 0);
    _defineProperty(_assertThisInitialized(_this), "isClosed", void 0);
    _defineProperty(_assertThisInitialized(_this), "booleanOperation", SketchFormat.BooleanOperation.None);
    _defineProperty(_assertThisInitialized(_this), "bezierPointToSketchPoint", function (point, index) {
      var _this$getContextPoint = _this.getContextPoints(index),
        nextPoint = _this$getContextPoint.nextPoint,
        thisPoint = _this$getContextPoint.thisPoint;
      var hasCurveFrom = false;
      var hasCurveTo = false;
      var curveFromPoint = point;
      var curveToPoint = point;

      // 判断 CurveTo
      // 如果自身点是 Curve 点
      if (thisPoint.type === SVGPathData.CURVE_TO) {
        curveToPoint = {
          x: thisPoint.x2,
          y: thisPoint.y2
        };
        hasCurveTo = true;
      }

      // 判断 CurveFrom

      // 如果下一个点是 Curve 点
      if (nextPoint && nextPoint.type === SVGPathData.CURVE_TO) {
        hasCurveFrom = true;
        curveFromPoint = {
          x: nextPoint.x1,
          y: nextPoint.y1
        };
      }

      // 确认曲线模式
      var curveMode = _this.judgeCurveMode({
        hasCurveFrom: hasCurveFrom,
        hasCurveTo: hasCurveTo,
        curveFromPoint: curveFromPoint,
        curveToPoint: curveToPoint,
        thisPoint: thisPoint
      });
      var firstPoint = _this.points[0];
      if (
      // 如果是闭合路径
      _this.isClosed &&
      // 且最后一个点和起点点一样
      index === _this.points.length - 1 && point.x.toFixed(8) === firstPoint.x.toFixed(8) && point.y.toFixed(8) === firstPoint.y.toFixed(8)) {
        // 则过滤最后一个点
        // @ts-ignore
        return;
      }
      return {
        _class: 'curvePoint',
        cornerRadius: 0,
        curveFrom: "{".concat(curveFromPoint.x, ", ").concat(curveFromPoint.y, "}"),
        curveMode: curveMode,
        curveTo: "{".concat(curveToPoint.x, ", ").concat(curveToPoint.y, "}"),
        hasCurveFrom: hasCurveFrom,
        hasCurveTo: hasCurveTo,
        point: "{".concat(point.x, ", ").concat(point.y, "}"),
        cornerStyle: SketchFormat.CornerStyle.Rounded
      };
    });
    _defineProperty(_assertThisInitialized(_this), "judgeIsOnSameLine", function (q, p1, p2) {
      return q.x >= Math.min(p1.x, p2.x) && q.x <= Math.max(p1.x, p2.x) && q.y >= Math.min(p1.y, p2.y) && q.y <= Math.max(p1.y, p2.y);
    });
    _defineProperty(_assertThisInitialized(_this), "judgeCurveMode", function (_ref) {
      var hasCurveFrom = _ref.hasCurveFrom,
        hasCurveTo = _ref.hasCurveTo,
        curveFromPoint = _ref.curveFromPoint,
        curveToPoint = _ref.curveToPoint,
        thisPoint = _ref.thisPoint;
      // 既有前 也有后
      if (hasCurveFrom && hasCurveTo) {
        // 则是曲线
        // 再判断是否在同一条直线上
        if (_this.judgeIsOnSameLine(thisPoint, curveFromPoint, curveToPoint)) {
          // 是的话则是不对称
          return SketchFormat.CurveMode.Asymmetric;
        }
        // 否则就是分离
        return SketchFormat.CurveMode.Disconnected;
      }
      if (hasCurveFrom || hasCurveTo) {
        // 否则 有前或有后 就是弯的
        return SketchFormat.CurveMode.Disconnected;
      }

      // 不然就是直的
      return SketchFormat.CurveMode.Straight;
    });
    _defineProperty(_assertThisInitialized(_this), "getContextPoints", function (index) {
      var thisIndex = index;
      var lastIndex = _this.points.length - 1;
      var prevIndex = index - 1;
      var nextIndex = index + 1;
      // 如果是第一个点
      if (index === 0) {
        thisIndex = lastIndex;
        prevIndex = lastIndex - 1;
        nextIndex = 1;
      }
      // 第二个点的情况下
      else if (index === 1) {
        // 前一个点是最后一个点
        prevIndex = lastIndex;
      }
      // 最后一个点的情况下
      else if (index === lastIndex) {
        // 下一个点是第二个点
        nextIndex = 1;
      }
      return {
        thisPoint: _this.points[thisIndex],
        nextPoint: _this.points[nextIndex],
        prevPoint: _this.points[prevIndex]
      };
    });
    _this.name = '路径';
    _this.isClosed = params.isClose || false;
    _this.points = params.points;
    return _this;
  }

  /**
   * 内部使用的 贝塞尔曲线 points
   */
  _createClass(ShapePath, [{
    key: "toSketchJSON",
    value:
    /**
     * 转为 Sketch JSON 文件
     */
    function toSketchJSON() {
      return {
        _class: 'shapePath',
        booleanOperation: this.booleanOperation,
        isTemplate: false,
        do_objectID: this.id,
        rotation: this.rotation,
        isVisible: true,
        isFixedToViewport: false,
        isFlippedHorizontal: false,
        isFlippedVertical: false,
        layerListExpandedType: 0,
        nameIsFixed: false,
        resizingType: 0,
        shouldBreakMaskChain: false,
        clippingMaskMode: 0,
        isLocked: false,
        exportOptions: defaultExportOptions,
        frame: this.frame.toSketchJSON(),
        name: this.name,
        style: this.style.toSketchJSON(),
        resizingConstraint: this.resizingConstraint,
        edited: true,
        isClosed: this.isClosed,
        points: this.points.map(this.bezierPointToSketchPoint).filter(function (p) {
          return p;
        }),
        hasClippingMask: this.hasClippingMask,
        /**
         * 默认使用圆角
         */
        pointRadiusBehaviour: SketchFormat.PointsRadiusBehaviour.Rounded
      };
    }

    /**
     * 将内部点转为 Sketch Point
     */
  }], [{
    key: "svgPathToShapePath",
    value:
    /**
     * 将 Path 转为 ShapePathType 类型的对象
     * @param path 路径
     */
    function svgPathToShapePath(path) {
      // 将 多个 svg 通过 M 符号进行分割 | TODO 要看下是否还有其他方式来区分对象
      var pathStr = path.split(/([Mm])/).filter(function (s) {
        return s;
      });
      // 只允许解析一条 path
      if (pathStr.length !== 2) {
        throw Error("Error Path!\nData:".concat(path, "\nPlease check whether the path is correct.Only allow one path shape"));
      }
      var svgPathData = new SVGPathData(path);
      var bounds = svgPathData.getBounds();
      var frame = {
        width: bounds.maxX - bounds.minX,
        height: bounds.maxY - bounds.minY,
        x: bounds.minX,
        y: bounds.minY
      };
      var minX = bounds.minX,
        minY = bounds.minY;

      // 判断是否闭合
      var isClose = svgPathData.commands.findIndex(function (i) {
        return i.type === SVGPathData.CLOSE_PATH;
      }) > -1;
      var shapePath = svgPathData.translate(-minX, -minY).aToC() // 将所有圆弧转为 curve
      .normalizeHVZ() // 将 HVZ 转为直线
      .qtToC() // 将 q t 转为curve
      .normalizeST() // 将 smooth curve 转为curve
      .toAbs().transform(ShapePath.normalizationXY(frame.width, frame.height));
      var points = shapePath.commands.filter(function (i, index) {
        // 对最后一个点进行处理
        if (index === shapePath.commands.length - 1) {
          var startP = shapePath.commands[0];
          if (i.x === startP.x && i.y === startP.y) {
            return false;
          }
        }
        return true;
      }).map(function (i) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = i.relative,
          res = _objectWithoutProperties(i, _excluded);
        return res;
      });
      return {
        points: points,
        frame: frame,
        isClose: isClose
      };
    }

    /**
     * 将 svg path 点归一化处理
     * @param width {number} 最大宽度
     * @param height {number} 最大高度
     */
  }]);
  return ShapePath;
}(BaseLayer);
_defineProperty(ShapePath, "normalizationXY", function (width, height) {
  return function (command) {
    switch (command.type) {
      case SVGPathData.CLOSE_PATH:
      default:
        break;
      case SVGPathData.LINE_TO:
      case SVGPathData.MOVE_TO:
        command.x /= width;
        command.y /= height;
        break;
      case SVGPathData.CURVE_TO:
        command.x /= width;
        command.x1 /= width;
        command.x2 /= width;
        command.y /= height;
        command.y1 /= height;
        command.y2 /= height;
        break;
    }
    return command;
  };
});
export default ShapePath;