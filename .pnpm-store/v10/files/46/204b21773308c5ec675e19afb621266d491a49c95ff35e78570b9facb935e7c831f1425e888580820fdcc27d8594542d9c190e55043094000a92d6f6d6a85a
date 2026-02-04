/**
 * Transform mark from transparent to solid.
 */
export const PathIn = (options) => {
    return (from, _, defaults) => {
        var _a, _b;
        const [shape] = from;
        const length = ((_b = (_a = shape).getTotalLength) === null || _b === void 0 ? void 0 : _b.call(_a)) || 0;
        const keyframes = [
            { lineDash: [0, length] },
            { lineDash: [length, 0] },
        ];
        return shape.animate(keyframes, Object.assign(Object.assign({}, defaults), options));
    };
};
PathIn.props = {};
//# sourceMappingURL=pathIn.js.map