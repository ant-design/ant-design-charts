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
import { Container } from '../utils/container';
import { calcBBox } from '../utils/vector';
import { indexOf } from '../utils/array';
import { createInnerGuide, inferColor, setAnimation, setStyle, toCell, } from './facetRect';
import { useDefaultAdaptor, useOverrideAdaptor } from './utils';
const setScale = useDefaultAdaptor((options) => {
    return {
        scale: {
            x: { guide: null, paddingOuter: 0, paddingInner: 0.1 },
            y: { guide: null, range: [0, 1], paddingOuter: 0, paddingInner: 0.1 },
        },
    };
});
const setChildren = useOverrideAdaptor((options) => {
    const { data, children, x: originX = 0, y: originY = 0, key: viewKey, } = options;
    const createChildren = (visualData, scale, layout) => {
        const { x: scaleX, y: scaleY } = scale;
        const { paddingLeft, paddingTop, marginLeft, marginTop } = layout;
        const { domain: domainX } = scaleX.getOptions();
        const { domain: domainY } = scaleY.getOptions();
        const index = indexOf(visualData);
        const bboxs = visualData.map(({ points }) => calcBBox(points));
        const values = visualData.map(({ x, y }) => [
            scaleX.invert(x),
            scaleY.invert(y),
        ]);
        const facets = values.map(([fx, fy]) => ({
            columnField: fx,
            columnIndex: domainX.indexOf(fx),
            columnValue: fx,
            columnValuesLength: domainX.length,
            rowField: fy,
            rowIndex: domainY.indexOf(fy),
            rowValue: fy,
            rowValuesLength: domainY.length,
        }));
        const normalizedChildren = facets.map((facet) => {
            if (Array.isArray(children))
                return children;
            return [children(facet)].flat(1);
        });
        return index.flatMap((i) => {
            const [left, top, width, height] = bboxs[i];
            const [fx, fy] = values[i];
            const facet = facets[i];
            const children = normalizedChildren[i];
            return children.map((d) => {
                var _a, _b;
                const { scale, key, encode, axis, interaction } = d, rest = __rest(d, ["scale", "key", "encode", "axis", "interaction"]);
                const guideY = (_a = scale === null || scale === void 0 ? void 0 : scale.y) === null || _a === void 0 ? void 0 : _a.guide;
                const guideX = (_b = scale === null || scale === void 0 ? void 0 : scale.x) === null || _b === void 0 ? void 0 : _b.guide;
                const defaultScale = {
                    // Do not sync position scales among facets by default.
                    x: { facet: false },
                    // Do not sync position scales among facets by default.
                    y: { facet: false },
                };
                const newAxis = {
                    x: createGuideX(guideX)(facet, data),
                    y: createGuideY(guideY)(facet, data),
                };
                const defaultAxis = {
                    x: { tickCount: 5 },
                    y: { tickCount: 5 },
                };
                return Object.assign({ data, parentKey: viewKey, key: `${key}-${i}`, x: left + paddingLeft + originX + marginLeft, y: top + paddingTop + originY + marginTop, width,
                    height, margin: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, frame: true, scale: deepMix(defaultScale, scale), axis: deepMix(defaultAxis, axis, newAxis), 
                    // Hide all legends for child mark by default,
                    // they are displayed in the top-level.
                    legend: false, encode: deepMix({}, encode, {
                        x: fx,
                        y: fy,
                    }), interaction: deepMix({}, interaction, {
                        // Register this interaction in parent node.
                        legendFilter: false,
                    }) }, rest);
            });
        });
    };
    return {
        children: createChildren,
    };
});
/**
 * @todo Use transform instead of override data directly.
 */
const setData = useOverrideAdaptor((options) => {
    const { encode } = options, rest = __rest(options, ["encode"]);
    const { position: P = [], x: X = P, y: Y = [...P].reverse() } = encode, restEncode = __rest(encode, ["position", "x", "y"]);
    const data = [];
    for (const $x of [X].flat(1)) {
        for (const $y of [Y].flat(1)) {
            data.push({ $x, $y });
        }
    }
    return Object.assign(Object.assign({}, rest), { data, encode: Object.assign(Object.assign({}, restEncode), { x: '$x', y: '$y' }), scale: Object.assign(Object.assign({}, ([X].flat(1).length === 1 && { x: { paddingInner: 0 } })), ([Y].flat(1).length === 1 && { y: { paddingInner: 0 } })) });
});
function createGuideX(guideX) {
    if (typeof guideX === 'function')
        return guideX;
    if (guideX === null)
        return () => null;
    return (facet, data) => {
        const { rowIndex, rowValuesLength } = facet;
        // Only the bottom-most facet show axisX.
        if (rowIndex !== rowValuesLength - 1)
            return createInnerGuide(guideX, data);
    };
}
function createGuideY(guideY) {
    if (typeof guideY === 'function')
        return guideY;
    if (guideY === null)
        return () => null;
    return (facet, data) => {
        const { columnIndex } = facet;
        // Only the left-most facet show axisY.
        if (columnIndex !== 0)
            return createInnerGuide(guideY, data);
    };
}
/**
 * @todo Layout mode: layer, row, col...
 * @todo Specify show axis or not.
 */
export const RepeatMatrix = () => {
    return (options) => {
        const newOptions = Container.of(options)
            .call(toCell)
            .call(inferColor)
            .call(setChildren)
            .call(setData)
            .call(setAnimation)
            .call(setStyle)
            .call(setScale)
            .value();
        return [newOptions];
    };
};
//# sourceMappingURL=repeatMatrix.js.map