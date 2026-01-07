"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoPath = void 0;
/**
 * Wrap GeoPath by a GeoView.
 */
const GeoPath = () => {
    return (options) => {
        const { type, data, scale, encode, style, animate, key, state, tooltip } = options, rest = __rest(options, ["type", "data", "scale", "encode", "style", "animate", "key", "state", "tooltip"]);
        return [
            Object.assign(Object.assign({ type: 'geoView' }, rest), { children: [
                    {
                        type: 'geoPath',
                        key: `${key}-0`,
                        data: {
                            value: data,
                        },
                        scale,
                        encode,
                        style,
                        animate,
                        state,
                        tooltip,
                    },
                ] }),
        ];
    };
};
exports.GeoPath = GeoPath;
exports.GeoPath.props = {};
//# sourceMappingURL=geoPath.js.map