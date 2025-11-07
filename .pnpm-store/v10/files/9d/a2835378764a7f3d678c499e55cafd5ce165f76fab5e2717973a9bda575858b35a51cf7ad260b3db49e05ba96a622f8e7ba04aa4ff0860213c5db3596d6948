import { deepMix } from '@antv/util';
/**
 * Mark functional attribute constant.
 */
export const MaybeFunctionAttribute = () => {
    return (I, mark) => {
        const { style = {} } = mark;
        return [
            I,
            deepMix({}, mark, {
                style: Object.assign(Object.assign({}, style), Object.fromEntries(Object.entries(style)
                    .filter(([, v]) => typeof v === 'function')
                    .map(([k, v]) => [k, () => v]))),
            }),
        ];
    };
};
MaybeFunctionAttribute.props = {};
//# sourceMappingURL=maybeFunctionAttribute.js.map