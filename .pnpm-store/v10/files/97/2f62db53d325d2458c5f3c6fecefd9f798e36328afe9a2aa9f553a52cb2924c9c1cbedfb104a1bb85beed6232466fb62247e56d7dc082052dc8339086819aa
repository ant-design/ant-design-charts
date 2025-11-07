"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marker = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var core_1 = require("../../core");
var util_2 = require("../../util");
var symbol_1 = require("./symbol");
var utils_1 = require("./utils");
function getType(symbol) {
    var markerType = (0, utils_1.parseMarker)(symbol);
    if (['base64', 'url', 'image'].includes(markerType)) {
        return 'image';
    }
    if (symbol && markerType === 'symbol') {
        return 'path';
    }
    return null;
}
var Marker = /** @class */ (function (_super) {
    tslib_1.__extends(Marker, _super);
    function Marker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marker.prototype.render = function (attributes, container) {
        var _a = attributes.x, x = _a === void 0 ? 0 : _a, _b = attributes.y, y = _b === void 0 ? 0 : _b;
        var _c = this.getSubShapeStyle(attributes), symbol = _c.symbol, _d = _c.size, size = _d === void 0 ? 16 : _d, style = tslib_1.__rest(_c, ["symbol", "size"]);
        var type = getType(symbol);
        (0, util_2.ifShow)(!!type, (0, util_2.select)(container), function (group) {
            group
                .maybeAppendByClassName("marker", type)
                .attr('className', "marker ".concat(type, "-marker"))
                .call(function (selection) {
                if (type === 'image') {
                    // todo 大小和 path symbol 保持一致
                    var r = size * 2;
                    selection.styles({
                        img: symbol,
                        width: r,
                        height: r,
                        x: x - size,
                        y: y - size,
                    });
                }
                else {
                    var r = size / 2;
                    var symbolFn = (0, util_1.isFunction)(symbol) ? symbol : Marker.getSymbol(symbol);
                    selection.styles(tslib_1.__assign({ d: symbolFn === null || symbolFn === void 0 ? void 0 : symbolFn(x, y, r) }, style));
                }
            });
        });
    };
    Marker.MARKER_SYMBOL_MAP = new Map();
    /**
     * 注册 icon 类型
     * @param type
     * @param path
     */
    Marker.registerSymbol = function (type, symbol) {
        Marker.MARKER_SYMBOL_MAP.set(type, symbol);
    };
    /**
     * 获取已经注册的 icon 的 path
     */
    Marker.getSymbol = function (type) {
        return Marker.MARKER_SYMBOL_MAP.get(type);
    };
    /**
     * @returns 获取已经注册的 icon 的类型
     */
    Marker.getSymbols = function () {
        return Array.from(Marker.MARKER_SYMBOL_MAP.keys());
    };
    return Marker;
}(core_1.Component));
exports.Marker = Marker;
/** Shapes for Point Geometry */
Marker.registerSymbol('cross', symbol_1.cross);
Marker.registerSymbol('hyphen', symbol_1.hyphen);
Marker.registerSymbol('line', symbol_1.line);
Marker.registerSymbol('plus', symbol_1.plus);
Marker.registerSymbol('tick', symbol_1.tick);
Marker.registerSymbol('circle', symbol_1.circle);
Marker.registerSymbol('point', symbol_1.point);
Marker.registerSymbol('bowtie', symbol_1.bowtie);
Marker.registerSymbol('hexagon', symbol_1.hexagon);
Marker.registerSymbol('square', symbol_1.square);
Marker.registerSymbol('diamond', symbol_1.diamond);
Marker.registerSymbol('triangle', symbol_1.triangle);
Marker.registerSymbol('triangle-down', symbol_1.triangleDown);
/** LineSymbols */
Marker.registerSymbol('line', symbol_1.line);
Marker.registerSymbol('dot', symbol_1.dot);
Marker.registerSymbol('dash', symbol_1.dash);
Marker.registerSymbol('smooth', symbol_1.smooth);
Marker.registerSymbol('hv', symbol_1.hv);
Marker.registerSymbol('vh', symbol_1.vh);
Marker.registerSymbol('hvh', symbol_1.hvh);
Marker.registerSymbol('vhv', symbol_1.vhv);
Marker.registerSymbol('focus', symbol_1.focus);
//# sourceMappingURL=index.js.map