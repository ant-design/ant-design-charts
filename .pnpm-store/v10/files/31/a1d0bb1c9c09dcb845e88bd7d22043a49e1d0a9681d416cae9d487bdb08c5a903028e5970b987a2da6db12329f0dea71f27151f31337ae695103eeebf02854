/**
 * <zh/> 数组去重
 *
 * <en/> deduplicate array
 * @param arr - <zh/> 数组 | <en/> array
 * @param by - <zh/> 通过某个属性去重 | <en/> deduplicate by some property
 * @returns <zh/> 去重后的数组 | <en/> deduplicated array
 */
export function deduplicate(arr, by = (item) => item) {
    const set = new Set();
    return arr.filter((item) => {
        const key = by ? by(item) : item;
        return set.has(key) ? false : set.add(key);
    });
}
//# sourceMappingURL=array.js.map