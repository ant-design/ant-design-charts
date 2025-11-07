function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { decomposeTSR } from 'transformation-matrix';
/**
 * @class
 * Frame 类型
 */
var Frame = /*#__PURE__*/function () {
  function Frame(params) {
    var _this = this;
    _classCallCheck(this, Frame);
    _defineProperty(this, "x", 0);
    _defineProperty(this, "y", 0);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "rotation", 0);
    _defineProperty(this, "toJSON", function () {
      return {
        height: _this.height,
        width: _this.width,
        x: _this.x,
        y: _this.y
      };
    });
    _defineProperty(this, "toSketchJSON", function () {
      return {
        _class: 'rect',
        constrainProportions: false,
        height: _this.height,
        width: _this.width,
        x: _this.x || 0,
        y: _this.y || 0
      };
    });
    if (params) {
      var _params$height = params.height,
        height = _params$height === void 0 ? 0 : _params$height,
        _params$width = params.width,
        width = _params$width === void 0 ? 0 : _params$width,
        _params$x = params.x,
        x = _params$x === void 0 ? 0 : _params$x,
        _params$y = params.y,
        y = _params$y === void 0 ? 0 : _params$y;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  }
  _createClass(Frame, [{
    key: "centerX",
    get: function get() {
      return this.x + this.width / 2;
    },
    set: function set(centerX) {
      this.x = centerX - this.width / 2;
    }
  }, {
    key: "centerY",
    get: function get() {
      return this.y + this.height / 2;
    },
    set: function set(centerY) {
      this.y = centerY - this.height / 2;
    }

    /**
     * 旋转角度
     */
  }, {
    key: "right",
    get: function get() {
      return this.x + this.width;
    },
    set: function set(right) {
      this.x = right - this.width;
    }
  }, {
    key: "left",
    get: function get() {
      return this.x;
    },
    set: function set(left) {
      this.x = left;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.y + this.height;
    },
    set: function set(bottom) {
      this.y = bottom - this.height;
    }
  }, {
    key: "top",
    get: function get() {
      return this.y;
    },
    set: function set(top) {
      this.y = top;
    }

    /**
     * 按比例缩放宽高
     * @param ratio
     */
  }, {
    key: "scale",
    value: function scale(ratio) {
      this.x *= ratio;
      this.y *= ratio;
      this.width *= ratio;
      this.height *= ratio;
    }

    /**
     * 按比例缩放宽高
     * @param ratio
     */
  }, {
    key: "scaleByCenter",
    value: function scaleByCenter(_ref) {
      var sx = _ref.sx,
        sy = _ref.sy;
      // 1. 先记录中心坐标
      var centerX = this.centerX;
      var centerY = this.centerY;

      // 2. 进行值缩放
      this.width *= sx;
      this.height *= sy;
      // 3. 计算新的 x 和 y
      this.x = centerX - this.width / 2;
      this.y = centerY - this.height / 2;
    }

    /**
     * 偏移
     * @param x X坐标
     * @param y Y坐标
     */
  }, {
    key: "offset",
    value: function offset(x, y) {
      this.x += x;
      this.y += y;
    }

    /**
     * 应用矩阵
     * @param matrix
     */
  }, {
    key: "applyMatrix",
    value: function applyMatrix(matrix) {
      var _decomposeTSR = decomposeTSR(matrix),
        rotation = _decomposeTSR.rotation,
        scale = _decomposeTSR.scale,
        translate = _decomposeTSR.translate;

      // 缩放
      this.scaleByCenter(scale);

      // 平移
      this.x += translate.tx;
      this.y += translate.ty;

      // 旋转
      this.rotation = rotation.angle * 180.0 / Math.PI;
    }

    /**
     * 转换为 JSON 对象
     */
  }]);
  return Frame;
}();
export default Frame;