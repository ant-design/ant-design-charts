function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import { uuid } from "../../utils/utils";
var BaseStyle = /*#__PURE__*/function () {
  function BaseStyle() {
    var _this = this;
    _classCallCheck(this, BaseStyle);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "name", '');
    _defineProperty(this, "_opacity", 1);
    _defineProperty(this, "getContextSettings", function () {
      return {
        _class: 'graphicsContextSettings',
        blendMode: SketchFormat.BlendMode.Normal,
        opacity: _this._opacity
      };
    });
    this.id = uuid();
  }
  _createClass(BaseStyle, [{
    key: "opacity",
    get: function get() {
      return this._opacity;
    },
    set: function set(opacity) {
      this._opacity = Number(opacity);
    }
  }]);
  return BaseStyle;
}();
export default BaseStyle;