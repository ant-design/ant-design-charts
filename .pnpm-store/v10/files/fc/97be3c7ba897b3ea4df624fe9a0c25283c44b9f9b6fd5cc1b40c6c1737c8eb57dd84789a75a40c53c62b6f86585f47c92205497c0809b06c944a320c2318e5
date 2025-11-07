import { __assign, __extends, __rest } from "tslib";
import { isFunction } from '@antv/util';
import { Component } from '../../core';
import { ifShow, select } from '../../util';
import { bowtie, circle, cross, dash, diamond, dot, hexagon, hv, hvh, focus, hyphen, line, plus, point, smooth, square, tick, triangle, triangleDown, vh, vhv, } from './symbol';
import { parseMarker } from './utils';
function getType(symbol) {
    var markerType = parseMarker(symbol);
    if (['base64', 'url', 'image'].includes(markerType)) {
        return 'image';
    }
    if (symbol && markerType === 'symbol') {
        return 'path';
    }
    return null;
}
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marker.prototype.render = function (attributes, container) {
        var _a = attributes.x, x = _a === void 0 ? 0 : _a, _b = attributes.y, y = _b === void 0 ? 0 : _b;
        var _c = this.getSubShapeStyle(attributes), symbol = _c.symbol, _d = _c.size, size = _d === void 0 ? 16 : _d, style = __rest(_c, ["symbol", "size"]);
        var type = getType(symbol);
        ifShow(!!type, select(container), function (group) {
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
                    var symbolFn = isFunction(symbol) ? symbol : Marker.getSymbol(symbol);
                    selection.styles(__assign({ d: symbolFn === null || symbolFn === void 0 ? void 0 : symbolFn(x, y, r) }, style));
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
}(Component));
export { Marker };
/** Shapes for Point Geometry */
Marker.registerSymbol('cross', cross);
Marker.registerSymbol('hyphen', hyphen);
Marker.registerSymbol('line', line);
Marker.registerSymbol('plus', plus);
Marker.registerSymbol('tick', tick);
Marker.registerSymbol('circle', circle);
Marker.registerSymbol('point', point);
Marker.registerSymbol('bowtie', bowtie);
Marker.registerSymbol('hexagon', hexagon);
Marker.registerSymbol('square', square);
Marker.registerSymbol('diamond', diamond);
Marker.registerSymbol('triangle', triangle);
Marker.registerSymbol('triangle-down', triangleDown);
/** LineSymbols */
Marker.registerSymbol('line', line);
Marker.registerSymbol('dot', dot);
Marker.registerSymbol('dash', dash);
Marker.registerSymbol('smooth', smooth);
Marker.registerSymbol('hv', hv);
Marker.registerSymbol('vh', vh);
Marker.registerSymbol('hvh', hvh);
Marker.registerSymbol('vhv', vhv);
Marker.registerSymbol('focus', focus);
//# sourceMappingURL=index.js.map