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
import { Path } from '@antv/g';
import { isNumber, isString } from '@antv/util';
import { getPaletteColors } from '../../utils/palette';
import { subStyleProps } from '../../utils/prefix';
import { parseSize } from '../../utils/size';
import { mergeOptions } from '../../utils/style';
import { Circle } from './circle';
/**
 * <zh/> 甜甜圈节点
 *
 * <en/> Donut node
 */
export class Donut extends Circle {
    constructor(options) {
        super(mergeOptions({ style: Donut.defaultStyleProps }, options));
    }
    parseOuterR() {
        const { size } = this.parsedAttributes;
        return Math.min(...parseSize(size)) / 2;
    }
    parseInnerR() {
        const { innerR } = this.parsedAttributes;
        return isString(innerR) ? (parseInt(innerR) / 100) * this.parseOuterR() : innerR;
    }
    drawDonutShape(attributes, container) {
        const { donuts } = attributes;
        if (!(donuts === null || donuts === void 0 ? void 0 : donuts.length))
            return;
        const parsedDonuts = donuts.map((round) => (isNumber(round) ? { value: round } : round));
        const style = subStyleProps(this.getGraphicStyle(attributes), 'donut');
        const colors = getPaletteColors(attributes.donutPalette);
        if (!colors)
            return;
        const sum = parsedDonuts.reduce((acc, cur) => { var _a; return acc + ((_a = cur.value) !== null && _a !== void 0 ? _a : 0); }, 0);
        const outerR = this.parseOuterR();
        const innerR = this.parseInnerR();
        let start = 0;
        parsedDonuts.forEach((round, index) => {
            const { value = 0, color = colors[index % colors.length] } = round, roundStyle = __rest(round, ["value", "color"]);
            const angle = (sum === 0 ? 1 / parsedDonuts.length : value / sum) * 360;
            this.upsert(`round${index}`, Path, Object.assign(Object.assign(Object.assign({}, style), { d: arc(outerR, innerR, start, start + angle), fill: color }), roundStyle), container);
            start += angle;
        });
    }
    render(attributes, container = this) {
        super.render(attributes, container);
        this.drawDonutShape(attributes, container);
    }
}
Donut.defaultStyleProps = {
    innerR: '50%',
    donuts: [],
    donutPalette: 'tableau',
};
const point = (x, y, r, angel) => [x + Math.sin(angel) * r, y - Math.cos(angel) * r];
const full = (x, y, R, r) => {
    if (r <= 0 || R <= r) {
        return [['M', x - R, y], ['A', R, R, 0, 1, 1, x + R, y], ['A', R, R, 0, 1, 1, x - R, y], ['Z']];
    }
    return [
        ['M', x - R, y],
        ['A', R, R, 0, 1, 1, x + R, y],
        ['A', R, R, 0, 1, 1, x - R, y],
        ['Z'],
        ['M', x + r, y],
        ['A', r, r, 0, 1, 0, x - r, y],
        ['A', r, r, 0, 1, 0, x + r, y],
        ['Z'],
    ];
};
const part = (x, y, R, r, start, end) => {
    const [s, e] = [(start / 360) * 2 * Math.PI, (end / 360) * 2 * Math.PI];
    const P = [point(x, y, r, s), point(x, y, R, s), point(x, y, R, e), point(x, y, r, e)];
    const flag = e - s > Math.PI ? 1 : 0;
    return [
        ['M', P[0][0], P[0][1]],
        ['L', P[1][0], P[1][1]],
        ['A', R, R, 0, flag, 1, P[2][0], P[2][1]],
        ['L', P[3][0], P[3][1]],
        ['A', r, r, 0, flag, 0, P[0][0], P[0][1]],
        ['Z'],
    ];
};
const arc = (R = 0, r = 0, start, end) => {
    const [x, y] = [0, 0];
    if (Math.abs(start - end) % 360 < 0.000001)
        return full(x, y, R, r);
    return part(x, y, R, r, start, end);
};
//# sourceMappingURL=donut.js.map