function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ResizingConstraint, SketchFormat } from "../../types";
import { calcResizingConstraint } from "../../utils/layout";
import { uuid } from "../../utils/utils";
import Style from "../Style/Style";
import Frame from "./Frame";
var DEFAULT_USER_INFO_SCOPE = 'html2sketch';
var BaseLayer = /*#__PURE__*/function () {
  function BaseLayer(type, params) {
    var _this = this;
    _classCallCheck(this, BaseLayer);
    _defineProperty(this, "frame", void 0);
    _defineProperty(this, "class", void 0);
    _defineProperty(this, "nodeType", void 0);
    _defineProperty(this, "nodeId", void 0);
    _defineProperty(this, "className", void 0);
    _defineProperty(this, "style", void 0);
    _defineProperty(this, "layers", []);
    _defineProperty(this, "userInfo", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "resizingConstraint", ResizingConstraint.None);
    _defineProperty(this, "resizingConstraints", []);
    _defineProperty(this, "locked", false);
    _defineProperty(this, "isVisible", true);
    _defineProperty(this, "isFixedToViewport", false);
    _defineProperty(this, "isFlippedHorizontal", false);
    _defineProperty(this, "isFlippedVertical", false);
    _defineProperty(this, "hasClippingMask", false);
    _defineProperty(this, "LayerListExpanded", SketchFormat.LayerListExpanded.Undecided);
    _defineProperty(this, "nameIsFixed", false);
    _defineProperty(this, "shouldBreakMaskChain", false);
    _defineProperty(this, "toSketchSharedStyle", function (id) {
      var _this$style;
      return {
        _class: 'sharedStyle',
        do_objectID: id || uuid(),
        name: _this.name,
        value: (_this$style = _this.style) === null || _this$style === void 0 ? void 0 : _this$style.toSketchJSON()
      };
    });
    this.id = uuid();
    this.userInfo = null;
    this.class = type;
    this.style = new Style();

    // 默认锁定左边和顶部
    this.setResizingConstraint(ResizingConstraint.Left, ResizingConstraint.Top);
    this.frame = new Frame(params);
    this.name = (params === null || params === void 0 ? void 0 : params.name) || '';
  }
  _createClass(BaseLayer, [{
    key: "x",
    get: function get() {
      return this.frame.x;
    },
    set: function set(x) {
      this.frame.x = x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.frame.y;
    },
    set: function set(y) {
      this.frame.y = y;
    }
  }, {
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
  }, {
    key: "width",
    get: function get() {
      return this.frame.width;
    },
    set: function set(width) {
      this.frame.width = width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.frame.height;
    },
    set: function set(height) {
      this.frame.height = height;
    }
  }, {
    key: "right",
    get: function get() {
      return this.frame.right;
    },
    set: function set(right) {
      this.frame.right = right;
    }
  }, {
    key: "top",
    get: function get() {
      return this.frame.top;
    },
    set: function set(top) {
      this.frame.top = top;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.frame.bottom;
    },
    set: function set(bottom) {
      this.frame.bottom = bottom;
    }
  }, {
    key: "left",
    get: function get() {
      return this.frame.left;
    },
    set: function set(left) {
      this.frame.left = left;
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.frame.rotation;
    },
    set: function set(deg) {
      this.frame.rotation = deg;
    }

    /**
     * 将 resize 设为固定宽高
     */
  }, {
    key: "setFixedWidthAndHeight",
    value: function setFixedWidthAndHeight() {
      this.setResizingConstraint(ResizingConstraint.Width, ResizingConstraint.Height);
    }

    /**
     *  resize 添加固定宽高
     */
  }, {
    key: "addFixedWidthAndHeight",
    value: function addFixedWidthAndHeight() {
      this.addResizingConstraints(ResizingConstraint.Width, ResizingConstraint.Height);
    }

    /**
     * 设置调整尺寸的相关参数
     * @param constraints
     */
  }, {
    key: "setResizingConstraint",
    value: function setResizingConstraint() {
      for (var _len = arguments.length, constraints = new Array(_len), _key = 0; _key < _len; _key++) {
        constraints[_key] = arguments[_key];
      }
      this.resizingConstraints = constraints;
      this.resizingConstraint = calcResizingConstraint.apply(void 0, constraints);
    }

    /**
     * 添加调整尺寸的相关参数
     * @param constraints
     */
  }, {
    key: "addResizingConstraints",
    value: function addResizingConstraints() {
      var _this2 = this;
      for (var _len2 = arguments.length, constraints = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        constraints[_key2] = arguments[_key2];
      }
      // 判断一下是否包含新变量， 如果不包含则加入数组
      constraints.forEach(function (c) {
        if (!_this2.resizingConstraints.includes(c)) {
          _this2.resizingConstraints.push(c);
        }
      });
      this.resizingConstraint = calcResizingConstraint.apply(void 0, _toConsumableArray(this.resizingConstraints));
    }

    // scope defines which Sketch plugin will have access to provided data via Settings.setLayerSettingForKey
    // you should set it to the plugin ID e.g. "com.bohemiancoding.sketch.testplugin"
  }, {
    key: "setUserInfo",
    value: function setUserInfo(key, value) {
      var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_USER_INFO_SCOPE;
      this.userInfo = this.userInfo || {};
      this.userInfo[scope] = this.userInfo[scope] || {};
      this.userInfo[scope][key] = value;
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo(key) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_USER_INFO_SCOPE;
      return this.userInfo && this.userInfo[scope] && this.userInfo[scope][key];
    }
  }, {
    key: "addLayer",
    value: function addLayer(layer) {
      this.layers.push(layer);
    }
  }, {
    key: "addLayers",
    value: function addLayers(layers) {
      this.layers = this.layers.concat(layers);
    }

    /**
     * 将对象转为 JSON
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        name: this.name,
        layers: this.layers.map(function (l) {
          return l.toJSON();
        }),
        locked: this.locked,
        resizingConstraint: this.resizingConstraint
      };
    }

    /**
     * 设置位置
     * @param x X轴
     * @param y Y轴
     */
  }, {
    key: "setPosition",
    value: function setPosition(_ref) {
      var x = _ref.x,
        y = _ref.y;
      this.frame.x = x;
      this.frame.y = y;
    }

    /**
     * 将基础的节点信息映射到对象中
     * @param node
     */
  }, {
    key: "mapBasicInfo",
    value: function mapBasicInfo(node) {
      this.nodeType = node.nodeName.toLowerCase();
      this.className = node.className;
      this.nodeId = node.id;
    }

    /**
     * 将自己的的样式转成 Sketch 的共享样式
     * @param id
     */
  }, {
    key: "childLayersSize",
    get:
    /**
     * 获取所有子图层的尺寸
     */
    function get() {
      var width = 0;
      var height = 0;
      this.layers.forEach(function (layer) {
        var layerWidth = layer.width;
        var layerHeight = layer.height;
        if (width < layerWidth) {
          width = layerWidth;
        }
        if (height < layerHeight) {
          height = layerHeight;
        }
      });
      return {
        width: width,
        height: height
      };
    }

    /**
     * 获取节点的子级的定界框
     * @param nodes
     */
  }]);
  return BaseLayer;
}();
_defineProperty(BaseLayer, "getChildNodesFrame", function (nodes) {
  // TODO: should probably also take into account children of each node

  var groupBCR = nodes.reduce(function (result, node) {
    var bcr = node.getBoundingClientRect();
    var left = bcr.left,
      top = bcr.top,
      right = bcr.right,
      bottom = bcr.bottom;
    var width = bcr.right - bcr.left;
    var height = bcr.bottom - bcr.top;
    if (width === 0 && height === 0) {
      return result;
    }
    if (!result) {
      return {
        left: left,
        top: top,
        right: right,
        bottom: bottom
      };
    }
    if (left < result.left) {
      result.left = left;
    }
    if (top < result.top) {
      result.top = top;
    }
    if (right > result.right) {
      result.right = right;
    }
    if (bottom > result.bottom) {
      result.bottom = bottom;
    }
    return result;
  }, null);
  if (groupBCR === null) {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    };
  }
  return {
    left: groupBCR.left,
    top: groupBCR.top,
    right: groupBCR.right,
    bottom: groupBCR.bottom,
    width: groupBCR.right - groupBCR.left,
    height: groupBCR.bottom - groupBCR.top
  };
});
export default BaseLayer;