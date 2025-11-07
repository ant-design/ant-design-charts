"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bumpRadial: function() {
        return bumpRadial;
    },
    bumpX: function() {
        return bumpX;
    },
    bumpY: function() {
        return bumpY;
    }
});
var _pointRadial = /*#__PURE__*/ _interop_require_default(require("../pointRadial.js"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var Bump = /*#__PURE__*/ function() {
    "use strict";
    function Bump(context, x) {
        _class_call_check(this, Bump);
        this._context = context;
        this._x = x;
    }
    _create_class(Bump, [
        {
            key: "areaStart",
            value: function areaStart() {
                this._line = 0;
            }
        },
        {
            key: "areaEnd",
            value: function areaEnd() {
                this._line = NaN;
            }
        },
        {
            key: "lineStart",
            value: function lineStart() {
                this._point = 0;
            }
        },
        {
            key: "lineEnd",
            value: function lineEnd() {
                if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
                this._line = 1 - this._line;
            }
        },
        {
            key: "point",
            value: function point(x, y) {
                x = +x, y = +y;
                switch(this._point){
                    case 0:
                        {
                            this._point = 1;
                            if (this._line) this._context.lineTo(x, y);
                            else this._context.moveTo(x, y);
                            break;
                        }
                    case 1:
                        this._point = 2; // falls through
                    default:
                        {
                            if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
                            else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
                            break;
                        }
                }
                this._x0 = x, this._y0 = y;
            }
        }
    ]);
    return Bump;
}();
var BumpRadial = /*#__PURE__*/ function() {
    "use strict";
    function BumpRadial(context) {
        _class_call_check(this, BumpRadial);
        this._context = context;
    }
    _create_class(BumpRadial, [
        {
            key: "lineStart",
            value: function lineStart() {
                this._point = 0;
            }
        },
        {
            key: "lineEnd",
            value: function lineEnd() {}
        },
        {
            key: "point",
            value: function point(x, y) {
                x = +x, y = +y;
                if (this._point === 0) {
                    this._point = 1;
                } else {
                    var _this__context, _this__context1;
                    var p0 = (0, _pointRadial.default)(this._x0, this._y0);
                    var p1 = (0, _pointRadial.default)(this._x0, this._y0 = (this._y0 + y) / 2);
                    var p2 = (0, _pointRadial.default)(x, this._y0);
                    var p3 = (0, _pointRadial.default)(x, y);
                    (_this__context = this._context).moveTo.apply(_this__context, _to_consumable_array(p0));
                    (_this__context1 = this._context).bezierCurveTo.apply(_this__context1, _to_consumable_array(p1).concat(_to_consumable_array(p2), _to_consumable_array(p3)));
                }
                this._x0 = x, this._y0 = y;
            }
        }
    ]);
    return BumpRadial;
}();
function bumpX(context) {
    return new Bump(context, true);
}
function bumpY(context) {
    return new Bump(context, false);
}
function bumpRadial(context) {
    return new BumpRadial(context);
}
