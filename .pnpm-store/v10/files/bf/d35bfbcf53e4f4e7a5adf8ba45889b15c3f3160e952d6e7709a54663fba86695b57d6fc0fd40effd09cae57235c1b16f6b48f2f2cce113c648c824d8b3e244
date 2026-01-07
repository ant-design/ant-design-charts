var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { mergeData } from './utils';
/**
 * @todo Propagate more options to children.
 */
export const SpaceLayer = () => {
    return (options) => {
        const { children } = options;
        if (!Array.isArray(children))
            return [];
        const { x: viewX = 0, y: viewY = 0, width: viewWidth, height: viewHeight, data: layerData, } = options;
        return children.map((_a) => {
            var { data, x, y, width, height } = _a, rest = __rest(_a, ["data", "x", "y", "width", "height"]);
            return (Object.assign(Object.assign({}, rest), { data: mergeData(data, layerData), x: x !== null && x !== void 0 ? x : viewX, y: y !== null && y !== void 0 ? y : viewY, width: width !== null && width !== void 0 ? width : viewWidth, height: height !== null && height !== void 0 ? height : viewHeight }));
        });
    };
};
SpaceLayer.props = {};
//# sourceMappingURL=spaceLayer.js.map