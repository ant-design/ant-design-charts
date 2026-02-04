import { rollup } from '@antv/vendor/d3-array';
function field(key) {
    return typeof key === 'string' ? (d) => d[key] : key;
}
/**
 * Join data with another dataset by SQL style.
 */
export const Join = (options) => {
    // const { fromKey, from, key, unknown = NaN, ...rest } = options;
    const { join, on, select = [], as = select, unknown = NaN } = options;
    const [key, fromKey] = on;
    const fk = field(fromKey);
    const k = field(key);
    const keyData = rollup(join, ([d]) => d, // Get the first matched.
    (d) => fk(d));
    return (data) => data.map((d) => {
        const source = keyData.get(k(d));
        return Object.assign(Object.assign({}, d), select.reduce((prev, key, idx) => ((prev[as[idx]] = source ? source[key] : unknown), prev), {}));
    });
};
Join.props = {};
//# sourceMappingURL=join.js.map