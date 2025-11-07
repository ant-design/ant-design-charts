/**
 * 给予一个排序好的数组，分位数
 *
 * @param arr 排序好的数组
 * @param percentage 百分比
 * @returns {number} 计算结果
 */
function quantileSorted(arr, percentage) {
    const len = arr.length;
    if (!len) {
        return undefined;
    }
    if (len < 2) {
        return arr[len - 1];
    }
    const i = (len - 1) * percentage;
    const i0 = Math.floor(i);
    const v0 = arr[i0];
    const v1 = arr[i0 + 1];
    return v0 + (v1 - v0) * (i - i0);
}
/**
 * 给定一个数组, 创建分位数数组
 *
 * @param arr 排序好的数组
 * @param n 分位数数组长度
 * @param isSorted 数组是否排序好
 * @returns {number[]} 分位数数组
 */
export function createQuartile(arr, n, isSorted = false) {
    const numberArr = arr;
    if (!isSorted) {
        numberArr.sort((a, b) => a - b);
    }
    const tmp = [];
    for (let i = 1; i < n; i += 1) {
        tmp.push(quantileSorted(numberArr, i / n));
    }
    return tmp;
}
//# sourceMappingURL=create-quartile.js.map