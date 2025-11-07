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
export const SpaceFlex = () => {
    return (options) => {
        const { children } = options;
        if (!Array.isArray(children))
            return [];
        const { direction = 'row', ratio = children.map(() => 1), padding = 0, data: flexData, } = options;
        const [mainStart, mainSize, crossSize, crossStart] = direction === 'col'
            ? ['y', 'height', 'width', 'x']
            : ['x', 'width', 'height', 'y'];
        const sum = ratio.reduce((total, value) => total + value);
        const totalSize = options[mainSize] - padding * (children.length - 1);
        const sizes = ratio.map((value) => totalSize * (value / sum));
        const newChildren = [];
        let next = options[mainStart] || 0;
        for (let i = 0; i < sizes.length; i += 1) {
            const _a = children[i], { data } = _a, rest = __rest(_a, ["data"]);
            const newData = mergeData(data, flexData);
            newChildren.push(Object.assign({ [mainStart]: next, [mainSize]: sizes[i], [crossStart]: options[crossStart] || 0, [crossSize]: options[crossSize], data: newData }, rest));
            next += sizes[i] + padding;
        }
        return newChildren;
    };
};
SpaceFlex.props = {};
//# sourceMappingURL=spaceFlex.js.map