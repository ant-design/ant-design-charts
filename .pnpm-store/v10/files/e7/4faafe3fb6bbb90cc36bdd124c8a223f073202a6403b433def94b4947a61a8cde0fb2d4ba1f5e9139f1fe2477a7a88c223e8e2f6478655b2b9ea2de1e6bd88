/**
 * 只要有一个不满足条件就返回 false
 * @param arr
 * @param func
 */
const every = function <T>(arr: T[], func: (v: T, idx?: number) => any): boolean {
  for (let i = 0; i < arr.length; i ++) {
    if (!func(arr[i], i)) return false;
  }

  return true;
};

export default every;
