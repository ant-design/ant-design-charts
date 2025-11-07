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
import { deepMix } from '@antv/util';
import { column } from './utils/helper';
/**
 * Set visual position with style.x and style.y.
 * The priority of style.x, style.y is higher than data.
 */
export const MaybeVisualPosition = () => {
    return (I, mark) => {
        const { data, style = {} } = mark, restMark = __rest(mark, ["data", "style"]);
        const { x: x0, y: y0 } = style, rest = __rest(style, ["x", "y"]);
        if (x0 == undefined || y0 == undefined)
            return [I, mark];
        const x = x0 || 0;
        const y = y0 || 0;
        return [
            [0],
            deepMix({}, restMark, {
                data: [0],
                cartesian: true,
                encode: {
                    x: column([x]),
                    y: column([y]),
                },
                scale: {
                    x: { type: 'identity', independent: true, guide: null },
                    y: { type: 'identity', independent: true, guide: null }, // hide axis
                },
                style: rest,
            }),
        ];
    };
};
MaybeVisualPosition.props = {};
//# sourceMappingURL=maybeVisualPosition.js.map