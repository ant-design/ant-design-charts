/**
 * 只要有一个满足条件就返回 true
 * @param arr
 * @param func
 */
const some = function <T>(arr: T[], func: (v: T, idx?: number) => any): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i)) return true;
  }

  return false;
};

export default some;
